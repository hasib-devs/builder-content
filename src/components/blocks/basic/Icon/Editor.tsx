import _ from 'lodash'
import React from 'react'

function Icon({ data }) {
  return (
    <div className="pb-icon-addon">
      <div className="pb-icon-content">
        {!_.isEmpty(data.icon_link.link) ? (
          <span className="pb-icon-inner">
            <a
              href={data.icon_link.link}
              target={data.icon_link.window ? '_blank' : ''}
              rel={data.icon_link.nofolow ? 'nofollow' : ''}
            >
              <i className={` ${data.icon_list}`}></i>
            </a>
          </span>
        ) : (
          <span className="pb-icon-inner">
            <i className={` ${data.icon_list}`}></i>
          </span>
        )}
      </div>
    </div>
  )
}

export default Icon
