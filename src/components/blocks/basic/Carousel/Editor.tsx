import React from 'react'
import Slider from 'react-slick'

function parseVideoUrl(videoUrl) {
  const videoObj = new URL(videoUrl)

  switch (videoObj.hostname) {
    case 'youtu.be':
      return `//www.youtube.com/embed${videoObj.pathname.trim()}?&showinfo=0`
    case 'www.youtube.com':
    case 'youtube.com': {
      const videoId = videoObj.searchParams.get('v')
      return `//www.youtube.com/embed/${videoId}?&showinfo=0`
    }
    case 'www.vimeo.com':
    case 'vimeo.com':
      return `//player.vimeo.com/video${videoObj.pathname.trim()}`
    default:
      return ''
  }
}

const Carousel = ({ data }) => {
  const settings = {
    dots: Boolean(Number(data.control_option)),
    autoplay: Boolean(Number(data.autoplay_option)),
    arrows: Boolean(Number(data.arrow_option)),
    infinite: true,
    speed: data.animated_speed,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div className="pb-carousel-addon">
      <div className="pb-carousel-addon-content">
        <div className="pb-carousel stick-dots" data-addon-id={data.id}>
          <Slider {...settings}>
            {data.carosuel_list.map((value, key) => {
              const videoUrl = value.video_url || ''
              const videosrc = videoUrl ? parseVideoUrl(videoUrl) : ''

              let ImageMedia
              if (value.media_type === 'media_video' && videoUrl) {
                ImageMedia = (
                  <div className="pb-video-slide">
                    <iframe
                      height="280"
                      width="100%"
                      className="pb-embed-responsive-item"
                      src={videosrc}
                      allowFullScreen
                    />
                  </div>
                )
              } else if (value.imageupload) {
                ImageMedia = <img src={value.imageupload.url} />
              }

              // const selector = value.selector || "h2";
              // const subselector = value.subselector || "h3";

              return (
                <div className={`slick-slide-item repeater-${key}`} key={key}>
                  <div
                    className={`pb-carousel-content-wrap ${value.slider_type}`}
                  >
                    {value.overlay_en === 1 && (
                      <div className="pb-carousel-overlay"></div>
                    )}
                    <div className="pb-container">
                      {value.slider_type === 'left_media' && (
                        <div className="pb-carousel-media pb-carousel-media-left">
                          {ImageMedia}
                        </div>
                      )}

                      <div
                        className={
                          value.slider_type === 'center_content'
                            ? 'pb-carousel-content-in pb-carousel-content-middle'
                            : 'pb-carousel-content-in'
                        }
                      >
                        <div
                          className="animated pb-carousel-title"
                          data-animation-in={value.title_animation?.name}
                          data-delay-in={value.title_animation?.delay + 'ms'}
                          data-duration-in={
                            value.title_animation?.duration + 'ms'
                          }
                        >
                          {value.title}
                        </div>

                        <div
                          className="animated pb-carousel-subtitle"
                          data-animation-in={value.subtitle_animation?.name}
                          data-delay-in={value.subtitle_animation?.delay + 'ms'}
                          data-duration-in={
                            value.subtitle_animation?.duration + 'ms'
                          }
                        >
                          {value.subtitle}
                        </div>

                        <div
                          className="animated pb-carousel-content"
                          data-animation-in={value.content_animation?.name}
                          data-delay-in={value.content_animation?.delay + 'ms'}
                          data-duration-in={
                            value.content_animation?.duration + 'ms'
                          }
                        >
                          {value.content}
                        </div>

                        {value.button_link && value.button_link.link && (
                          <a
                            href={value.button_link.link}
                            target={value.button_link.window ? '_blank' : ''}
                            rel={value.button_link.nofollow ? 'nofollow' : ''}
                            className="animated pb-carousel-btn pb-btn-carousel1"
                            data-animation-in={value.btn_animation1?.name}
                            data-delay-in={value.btn_animation1?.delay + 'ms'}
                            data-duration-in={
                              value.btn_animation1?.duration + 'ms'
                            }
                          >
                            {value.button_text}
                          </a>
                        )}

                        {value.button_link2 && value.button_link2.link && (
                          <a
                            href={value.button_link2.link}
                            target={value.button_link2.window ? '_blank' : ''}
                            rel={value.button_link2.nofollow ? 'nofollow' : ''}
                            className="animated pb-carousel-btn pb-btn-carousel2"
                            data-animation-in={value.btn_animation2?.name}
                            data-delay-in={value.btn_animation2?.delay + 'ms'}
                            data-duration-in={
                              value.btn_animation2?.duration + 'ms'
                            }
                          >
                            {value.button_text2}
                          </a>
                        )}
                      </div>

                      {value.slider_type === 'right_media' && (
                        <div className="pb-carousel-media pb-carousel-media-right">
                          {ImageMedia}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default Carousel
