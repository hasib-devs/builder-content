import React from 'react'
import ReactHtmlParser from 'react-html-parser'

const Testimonial = ({ data }) => {
  return (
    <div className="pb-testimonial-addon">
      <div
        className={`pb-testimonial-addon-content testimonial-layout-${data.testimonial_layout}`}
      >
        {data.testimonial_layout === 'two' && (
          <div className="pb-testimonial-content">
            {data.image.url && (
              <div className="pb-testimonial-image">
                <img
                  className="pb-testimonial-addon-img"
                  src={data.image.url}
                />
              </div>
            )}
            {data.introtext && (
              <div className="pb-testimonial-introtext">
                {ReactHtmlParser(data.introtext)}
              </div>
            )}
            {(data.name || data.designation) && (
              <div className="pb-testimonial-title">
                {data.name_link.link ? (
                  <h4 className="pb-testimonial-name">
                    <a
                      href={data.name_link.link}
                      target={data.name_link.window ? '_blank' : ''}
                      rel={data.name_link.nofolow ? 'nofollow' : ''}
                    >
                      {ReactHtmlParser(data.name)}
                    </a>
                  </h4>
                ) : (
                  <h4 className="pb-testimonial-name">
                    {ReactHtmlParser(data.name)}
                  </h4>
                )}
                {data.designation && (
                  <span className="pb-testimonial-designation">
                    {ReactHtmlParser(data.designation)}
                  </span>
                )}
              </div>
            )}
          </div>
        )}

        {data.testimonial_layout === 'three' && (
          <div className="pb-testimonial-content">
            {data.introtext && (
              <div className="pb-testimonial-introtext">
                {ReactHtmlParser(data.introtext)}
              </div>
            )}
            {data.image.url && (
              <div className="pb-testimonial-image">
                <img
                  className="pb-testimonial-addon-img"
                  src={data.image.url}
                />
              </div>
            )}
            {(data.name || data.designation) && (
              <div className="pb-testimonial-title">
                {data.name_link.link ? (
                  <h4 className="pb-testimonial-name">
                    <a
                      href={data.name_link.link}
                      target={data.name_link.window ? '_blank' : ''}
                      rel={data.name_link.nofolow ? 'nofollow' : ''}
                    >
                      {ReactHtmlParser(data.name)}
                    </a>
                  </h4>
                ) : (
                  <h4 className="pb-testimonial-name">
                    {ReactHtmlParser(data.name)}
                  </h4>
                )}
                {data.designation && (
                  <span className="pb-testimonial-designation">
                    {ReactHtmlParser(data.designation)}
                  </span>
                )}
              </div>
            )}
          </div>
        )}

        {data.testimonial_layout === 'four' && (
          <div className="pb-testimonial-content">
            <span className="pb-testimonial-quote pb-font-quote"></span>
            {data.introtext && (
              <div className="pb-testimonial-introtext">
                {ReactHtmlParser(data.introtext)}
              </div>
            )}
            {data.image.url && (
              <div className="pb-testimonial-image">
                <img
                  className="pb-testimonial-addon-img"
                  src={data.image.url}
                />
              </div>
            )}
            {(data.name || data.designation) && (
              <div className="pb-testimonial-title">
                {data.name_link.link ? (
                  <h4 className="pb-testimonial-name">
                    <a
                      href={data.name_link.link}
                      target={data.name_link.window ? '_blank' : ''}
                      rel={data.name_link.nofolow ? 'nofollow' : ''}
                    >
                      {ReactHtmlParser(data.name)}
                    </a>
                  </h4>
                ) : (
                  <h4 className="pb-testimonial-name">
                    {ReactHtmlParser(data.name)}
                  </h4>
                )}
                {data.designation && (
                  <span className="pb-testimonial-designation">
                    {ReactHtmlParser(data.designation)}
                  </span>
                )}
              </div>
            )}
          </div>
        )}

        {(!data.testimonial_layout || data.testimonial_layout === 'one') && (
          <div className="pb-testimonial-content">
            {data.introtext && (
              <div className="pb-testimonial-introtext">
                {ReactHtmlParser(data.introtext)}
              </div>
            )}
            {(data.name || data.designation) && (
              <div className="pb-testimonial-information">
                {data.image.url && (
                  <div className="pb-testimonial-image">
                    <img
                      className="pb-testimonial-addon-img"
                      src={data.image.url}
                    />
                  </div>
                )}
                <div className="pb-testimonial-title">
                  {data.name_link.link ? (
                    <h4 className="pb-testimonial-name">
                      <a
                        href={data.name_link.link}
                        target={data.name_link.window ? '_blank' : ''}
                        rel={data.name_link.nofolow ? 'nofollow' : ''}
                      >
                        {ReactHtmlParser(data.name)}
                      </a>
                    </h4>
                  ) : (
                    <h4 className="pb-testimonial-name">
                      {ReactHtmlParser(data.name)}
                    </h4>
                  )}
                  {data.designation && (
                    <span className="pb-testimonial-designation">
                      {ReactHtmlParser(data.designation)}
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default Testimonial
