import {
  Controller,
  Get,
  Param,
  UseInterceptors,
  ClassSerializerInterceptor,
  SerializeOptions,
  CacheInterceptor,
  CacheTTL
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { MetricsInterceptor } from 'server/metrics/metrics.interceptor';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { VideoDto } from 'shared/dto/video/video.dto';
import { VideosService } from './videos.service';

@ApiTags('Core')
@UseInterceptors(CacheInterceptor)
@UseInterceptors(MetricsInterceptor)
@Controller('videos')
export class VideosController {
  constructor(private readonly videosService: VideosService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @SerializeOptions({
    excludePrefixes: ['_']
  })
  @CacheTTL(18000)
  @Get(':id')
  getVideos(@Param('id') id: string): Promise<VideoDto> {
    return this.videosService.getById(id);
  }
}
