import React from 'react'
import Slider from 'react-slick'

const TestimonialCarousel = ({ data }) => {
  const column = data.column ? data.column : '1'
  const control_nav_style = data.control_nav_style
    ? data.control_nav_style
    : 'nav_style1'

  const settings = {
    dots: Boolean(Number(data.control_dots)),
    autoplay: Boolean(Number(data.autoplay_option)),
    arrows: Boolean(Number(data.control_nav)),
    infinite: true,
    speed: 500,

    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div className="pb-testimonial-addon">
      <div
        className={`pb-testimonial-carousel-addon-content testimonial-layout-${data.testimonial_layout}`}
      >
        <div
          className={`pb-testimonial-content-carousel pb-testimonial-${column} ${control_nav_style}`}
        >
          <Slider {...settings}>
            {data.testimonial_list.map((value, key) => (
              <div key={key} className="pb-testimonial-content">
                <div className="pb-testimonial-content-in">
                  {value.image && (
                    <div className="pb-testimonial-image">
                      <img
                        className="pb-testimonial-addon-img"
                        src={value.image.url}
                      />
                    </div>
                  )}
                  <div className="pb-testimonial-introtext">
                    {value.introtext}
                  </div>
                  <div className="pb-testimonial-title">
                    {value.name_link ? (
                      <h4 className="pb-testimonial-name">
                        <a
                          href={value.name_link.link || '#'}
                          target={value.name_link.window ? '_blank' : '_self'}
                          rel={value.name_link.nofollow ? 'nofollow' : ''}
                        >
                          {value.name}
                        </a>
                      </h4>
                    ) : (
                      <h4 className="pb-testimonial-name">{value.name}</h4>
                    )}
                    <span className="pb-testimonial-designation">
                      {value.designation}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCarousel
