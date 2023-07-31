import React from 'react'

const VideoPopup = ({ data }) => {
  let video_alignment = ''

  if (data.video_align['md']) {
    video_alignment += data.video_align['md']
      ? 'md' + data.video_align['md'] + ' '
      : 'mdvideo_center '
  }
  if (data.video_align['sm']) {
    video_alignment += data.video_align['sm']
      ? 'sm' + data.video_align['sm'] + ' '
      : ' smvideo_center '
  }
  if (data.video_align['xs']) {
    video_alignment += data.video_align['xs']
      ? 'xs' + data.video_align['xs'] + ' '
      : ' xsvideo_center '
  }

  return (
    <div className="pb-video-popup-addon">
      <div className="pb-video-popup-content">
        <div className={`pb-video-popup-wrap ${video_alignment}`}>
          {data.before_text && (
            <div className="pb-video-popup-before-text">
              <a href={data.video_url} className="pb-video-popup">
                {data.before_text}
              </a>
            </div>
          )}
          <div className="pb-video-popup-content">
            <a
              href={data.video_url}
              className="pb-video-popup pb-video-popup-icon"
            >
              <i className="pb-font-play-button-alt"></i>
            </a>
          </div>
          {data.after_text && (
            <div className="pb-video-popup-after-text">
              <a href={data.video_url} className="pb-video-popup">
                {data.after_text}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default VideoPopup
