import fs from 'fs';
import path from 'path';
import { promisify } from 'util';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { getBasicInfo, videoInfo, downloadOptions } from 'ytdl-core';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import fetch from 'node-fetch';
import HttpsProxyAgent from 'https-proxy-agent';
import { VideoDto } from 'shared/dto/video/video.dto';
import Consola from 'consola';
import { ChannelBasicInfoDto } from '../channels/dto/channel-basic-info.dto';
import { ChannelBasicInfo } from '../channels/schemas/channel-basic-info.schema';
import { Common } from '../common';
import { VideoBasicInfoDto } from './dto/video-basic-info.dto';
import { VideoBasicInfo } from './schemas/video-basic-info.schema';
import { VideoEntity } from './video.entity';

@Injectable()
export class VideosService {
  constructor(
    @InjectModel(VideoBasicInfo.name)
    private readonly videoModel: Model<VideoBasicInfo>,
    @InjectModel(ChannelBasicInfo.name)
    private readonly channelModel: Model<ChannelBasicInfo>,
    private configService: ConfigService
  ) {}

  async getById(id: string): Promise<VideoDto> {
    const url: string = Common.youtubeVideoUrl + id;
    let proxyAgent;

    if (this.configService.get('VIEWTUBE_PROXY_URL')) {
      const proxy = this.configService.get('VIEWTUBE_PROXY_URL');
      proxyAgent = HttpsProxyAgent(proxy);
    }
    const ytdlOptions: downloadOptions = {
      requestOptions: {}
    };
    if (this.configService.get('VIEWTUBE_YOUTUBE_COOKIE')) {
      (ytdlOptions.requestOptions as any).cookie = this.configService.get(
        'VIEWTUBE_YOUTUBE_COOKIE'
      );
      if (this.configService.get('VIEWTUBE_YOUTUBE_IDENTIFIER')) {
        ytdlOptions.requestOptions['x-youtube-identity-token'] = this.configService.get(
          'VIEWTUBE_YOUTUBE_IDENTIFIER'
        );
      }
    }
    if (proxyAgent) {
      (ytdlOptions.requestOptions as any).agent = proxyAgent;
    }

    try {
      const result: videoInfo = await getBasicInfo(url, ytdlOptions);
      const video: VideoDto = new VideoEntity(result);

      const channelBasicInfo: ChannelBasicInfoDto = {
        authorId: video.authorId,
        author: video.author,
        authorThumbnails: video.authorThumbnails,
        authorVerified: video.authorVerified
      };

      const authorImageUrl = await this.saveAuthorImage(
        video.authorThumbnails[2].url,
        video.authorId
      );
      if (authorImageUrl) {
        channelBasicInfo.authorThumbnailUrl = authorImageUrl;
      }

      const videoBasicInfo: VideoBasicInfoDto = {
        author: video.author,
        authorId: video.authorId,
        description: video.description,
        dislikeCount: video.dislikeCount,
        likeCount: video.likeCount,
        published: video.published,
        publishedText: video.publishedText,
        title: video.title,
        videoId: video.videoId,
        videoThumbnails: video.videoThumbnails,
        viewCount: video.viewCount,
        lengthSeconds: video.lengthSeconds
      };

      this.channelModel
        .findOneAndUpdate({ authorId: video.authorId }, channelBasicInfo, { upsert: true })
        .exec()
        .catch(Consola.warn);
      this.videoModel
        .findOneAndUpdate({ videoId: video.videoId }, videoBasicInfo, { upsert: true })
        .exec()
        .catch(Consola.warn);

      return video;
    } catch (err) {
      console.error(err);
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async saveAuthorImage(imgUrl: string, channelId: string) {
    const arrBuffer = await fetch(imgUrl, { method: 'GET' })
      .then(response => response.arrayBuffer())
      .catch(_ => {});

    if (arrBuffer) {
      const imgPath = path.join((global as any).__basedir, `channels/${channelId}.jpg`);
      const appendFile = promisify(fs.appendFile);

      try {
        await appendFile(imgPath, Buffer.from(arrBuffer));
      } catch (err) {
        return null;
      }
      return `channels/${channelId}/thumbnail/tiny.jpg`;
    }
  }
}
