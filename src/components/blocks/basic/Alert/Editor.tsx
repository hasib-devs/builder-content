import React from 'react'

const Alert = ({ data }) => {
  return (
    <div className="pb-alert-addon">
      <div className={`pb-alert-addon-content pb-alert-${data.alert_style}`}>
        {data.alert_title && (
          <span className="pb-alert-title">{data.alert_title}</span>
        )}
        {data.alert_description && (
          <span className="pb-alert-desc">{data.alert_description}</span>
        )}
        {data.alert_close === 1 && (
          <button
            type="button"
            className="pb-close-alert"
            data-dismiss="pb-alert"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        )}
      </div>
    </div>
  )
}

export default Alert
