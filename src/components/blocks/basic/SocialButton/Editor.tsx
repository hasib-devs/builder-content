import React from 'react'

const SocialButton = ({ data }) => {
  const socialDesign = `pb-social-${data.shape} pb-social-${data.btn_size}`

  return (
    <div className="pb-social-addon">
      <div className="pb-social-addon-content">
        <ul className={`pb-social-button pb-social-${socialDesign}`}>
          {data.social_item.map((value, key) => {
            const classList = `pb-social-${value.style}`
            return (
              <li className={`pb-social-button-list repeater-${key}`} key={key}>
                <a
                  href={value.socialurl.link || '#'}
                  target={value.socialurl.window ? '_blank' : '_self'}
                  rel={value.socialurl.nofollow ? 'nofollow' : ''}
                  className={`pb-social-btn ${classList}`}
                >
                  <i className={value.icon_list}></i>
                  <span>{value.socialtext}</span>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default SocialButton
