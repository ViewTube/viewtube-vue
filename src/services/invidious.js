import Commons from '@/commons.js'
import axios from 'axios'
import { store } from '@/store/store'

const invidious = {
  request: axios.create({
    baseURL: Commons.getApiUrlNoVersion(),
    timeout: 10000
  }),
  api: {},
  requests: {
    popular: {
      url: 'v1/popular',
      fields: [
        'type',
        'title',
        'videoId',
        'videoThumbnails',
        'lengthSeconds',
        'viewCount',
        'author',
        'authorId',
        'publishedText'
      ]
    },
    stats: {
      url: 'v1/stats'
    },
    comments: {
      url: 'v1/comments',
      fields: [
        'title'
      ]
    },
    manifest: {
      url: 'manifest/dash/id',
      fields: [
        'title'
      ]
    },
    channels: {
      url: 'v1/channels',
      fields: [
        'title'
      ]
    },
    videos: {
      url: 'v1/videos',
      fields: [
        'title'
      ]
    },
    search: {
      url: 'v1/search',
      fields: [
        'title'
      ]
    }
  }
}

Object.entries(invidious.requests).forEach(el => {
  invidious.api[el[0]] = function (args = {}) {
    let url = el[1].url
    if (args.id) {
      url += `/${args.id}`
      delete args.id
    }
    if (el[1].fields) {
      if (!args.params) {
        args.params = {}
      }
      args.params.fields = el[1].fields.toString()
    }
    return new Promise((resolve, reject) => {
      invidious.request.get(url, args)
        .then((response) => {
          resolve(response)
        })
        .catch((error) => {
          store.dispatch('createMessage', {
            type: 'error',
            title: 'Error loading page',
            message: `Try<br/>
                      <ul><li>Checking your internet connection</li>
                      <li>Switching to another instance in settings</li></ul>`,
            dismissDelay: 0
          })
          reject(error)
        })
    })
  }
})

console.log(invidious)

export default invidious