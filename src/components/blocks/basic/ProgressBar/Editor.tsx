import React from 'react'

const ProgressBar = ({ data }) => {
  const stripped = data.stripped === 1 ? 'pb-progress-bar-striped' : ''
  const showTitleContent = data.show_title === 1 ? data.title : ''
  const showPercentContent =
    data.show_percent === 1
      ? data.progress_width
        ? data.progress_width
        : '50'
      : ''

  return (
    <div className="pb-progress-bar-addon">
      <div
        className={`pb-progressbar-addon-content progressbar-layout-${data.progress_layout}`}
      >
        {data.progress_layout === 'two' && (
          <>
            {data.show_title === 1 && (
              <div className="pb-progress-label pb-clearfix">
                {showTitleContent}
              </div>
            )}
            <div className="pb-progress">
              <div
                className={`pb-progress-bar pb-progress-bar-${data.style} ${stripped}`}
                style={{ width: `${data.progress_width}%` }}
              >
                {data.show_percent === 1 && (
                  <span className="pb-progress-percent">
                    {' '}
                    {showPercentContent}%{' '}
                  </span>
                )}
              </div>
            </div>
          </>
        )}

        {data.progress_layout === 'three' && (
          <>
            {data.show_title === 1 && (
              <div className="pb-progress-label pb-clearfix">
                {showTitleContent}
              </div>
            )}
            <div className="pb-progress">
              <div
                className={`pb-progress-bar pb-progress-bar-${data.style} ${stripped}`}
                style={{ width: `${data.progress_width}%` }}
              >
                {data.show_percent === 1 && (
                  <span className="pb-progress-percent">
                    {' '}
                    {showPercentContent}%{' '}
                  </span>
                )}
              </div>
            </div>
          </>
        )}

        {data.progress_layout !== 'two' && data.progress_layout !== 'three' && (
          <>
            {data.show_title === 1 && (
              <div className="pb-progress-label pb-clearfix">
                {showTitleContent}
              </div>
            )}
            <div className="pb-progress">
              <div
                className={`pb-progress-bar pb-progress-bar-${data.style} ${stripped}`}
                style={{ width: `${data.progress_width}%` }}
              >
                {data.show_percent === 1 && (
                  <span className="pb-progress-percent">
                    {' '}
                    {showPercentContent}%{' '}
                  </span>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default ProgressBar
