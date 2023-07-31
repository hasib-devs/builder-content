import React from 'react'
import { FC } from 'react'

export interface WppbBlockNumberProps {
  data: {
    number?: string
    number_title?: string
    number_description?: string
  }
}

const BlockNumber: FC<WppbBlockNumberProps> = ({ data }) => {
  const { number, number_title, number_description } = data

  return (
    <div className="pb-blocknumber-addon">
      <div className="pb-blocknumber-addon-content">
        <div className="pb-blocknumber-media">
          {number && (
            <div className="pb-blocknumber-number">
              <span>{number}</span>
            </div>
          )}
          {(number_title || number_description) && (
            <div className="pb-blocknumber-body">
              {number_title && (
                <h5 className="pb-blocknumber-title">{number_title}</h5>
              )}
              {number_description && (
                <div className="pb-blocknumber-desc">{number_description}</div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default BlockNumber
