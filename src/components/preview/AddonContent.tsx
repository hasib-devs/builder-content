import { ReactElement, useEffect, useState } from 'react'
import page_data from '../../page_data'
import React from 'react'

const AddonContent = ({ addon }) => {
  const [htmlContent, setHtmlContent] = useState<ReactElement>(<></>)

  useEffect(() => {
    setHtmlContent(() => {
      const { Editor } = page_data.addonsJSON[addon.name]
      return <Editor data={addon.settings} />
    })
  }, [])

  return <div className="pb-addon">{htmlContent}</div>
}

export default AddonContent
