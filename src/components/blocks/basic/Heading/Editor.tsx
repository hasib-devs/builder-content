import React from 'react'

function Heading({ data }) {
  const TitleSelector = data.title_selector || 'h2'

  return (
    <div className="pb-headline-addon">
      <div className="pb-headline-content">
        {data.title_link && data.title_link.link ? (
          <TitleSelector className="pb-addon-title">
            <a
              href={data.title_link.link}
              target={data.title_link.window ? '_blank' : ''}
              rel={data.title_link.nofolow ? 'nofollow' : ''}
            >
              {data.title}
            </a>
          </TitleSelector>
        ) : (
          <TitleSelector className="pb-addon-title">{data.title}</TitleSelector>
        )}
      </div>
    </div>
  )
}

export default Heading
