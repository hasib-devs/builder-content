import React from 'react'

const TextBlock = ({ data }) => {
  const drop_cap = data.drop_cap ? 'pb-text-block-drop' : ''

  if (!data.text) {
    return null
  }

  return (
    <div className="pb-text-block-addon">
      <div className={`pb-text-block-content ${drop_cap}`}>
        <div dangerouslySetInnerHTML={{ __html: data.text }}></div>
      </div>
    </div>
  )
}

export default TextBlock
