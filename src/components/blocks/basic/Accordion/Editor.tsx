import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Accordion(props) {
  const { data } = props

  return (
    <div className="pb-accordion-addon">
      <div className="pb-accordion-addon-content">
        <div className="pb-accordion-items">
          {data.accordion_list.map((value, key) => {
            const navigation_direction = data.navigation_direction || 'right'
            const activeClass =
              (key === 0 || data.openitem === 'show') &&
              data.openitem !== 'hide'
                ? 'active'
                : ''
            const panelStyle =
              (key !== 0 || data.openitem === 'hide') &&
              data.openitem !== 'show'
                ? { display: 'none' }
                : {}

            return (
              <div key={key} className={`pb-accordion-item repeater-${key}`}>
                <div
                  className={`pb-accordion-title pb-toggle-${navigation_direction} ${activeClass}`}
                >
                  {navigation_direction === 'left' && data.navigation && (
                    <span
                      className={`pb-toggle-direction pb-toggle-${navigation_direction}`}
                    >
                      <FontAwesomeIcon icon={['fas', data.navigation]} />
                    </span>
                  )}
                  {value.icon_position === 'left' && value.icon_list && (
                    <i className={value.icon_list}></i>
                  )}
                  <span className="pb-accordion-title-content">
                    {value.title}
                  </span>
                  {value.icon_position === 'right' && value.icon_list && (
                    <i className={value.icon_list}></i>
                  )}

                  {navigation_direction === 'right' && data.navigation && (
                    <span
                      className={`pb-toggle-direction pb-toggle-${navigation_direction}`}
                    >
                      <FontAwesomeIcon icon={['fas', data.navigation]} />
                    </span>
                  )}
                </div>

                <div className="pb-panel-collapse" style={panelStyle}>
                  <div className="pb-accordion-content">{value.content}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Accordion
