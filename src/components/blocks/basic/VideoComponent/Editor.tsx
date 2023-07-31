import React from 'react'
import { useState, useEffect } from 'react'

const VideoComponent = ({ data }) => {
  const [embedSrc, setEmbedSrc] = useState('')

  useEffect(() => {
    const videoUrl = data.video_url || ''
    if (videoUrl) {
      const tempAchor = new URL(videoUrl)
      const videoObj = {
        host: tempAchor.hostname,
        path: tempAchor.pathname,
        query: tempAchor.searchParams.get('v'),
      }

      let embedSrcTemp = ''

      switch (videoObj.host) {
        case 'youtu.be': {
          const videoId = videoObj.path.trim()
          embedSrcTemp =
            '//www.youtube.com/embed' +
            videoId +
            '?controls=' +
            data.video_controls +
            '&modestbranding=' +
            data.video_hide_logo
          break
        }

        case 'www.youtube.com':
        case 'youtube.com': {
          const queryStr = videoObj.query
          embedSrcTemp =
            '//www.youtube.com/embed/' +
            queryStr +
            '?controls=' +
            data.video_controls +
            '&modestbranding=' +
            data.video_hide_logo
          break
        }

        case 'www.vimeo.com':
        case 'vimeo.com': {
          const videoId = videoObj.path.trim()
          embedSrcTemp = '//player.vimeo.com/video' + videoId
          break
        }
      }

      setEmbedSrc(embedSrcTemp)
    }
  }, [data])

  return (
    <div className="pb-video-addon">
      <div className="pb-video-content">
        <div className="pb-iframe-drag-overlay"></div>
        <div className="pb-video-block pb-embed-responsive pb-embed-responsive-16by9">
          {embedSrc && (
            <iframe
              className="pb-embed-responsive-item"
              src={embedSrc}
              allowFullScreen
            ></iframe>
          )}
        </div>
      </div>
    </div>
  )
}

export default VideoComponent
