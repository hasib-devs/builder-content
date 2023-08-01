import { useEffect } from 'react'
import { CssGenerator } from '../../helpers/previewCssGenerator'
import ColumnPreview from './ColumnPreview'
import page_data from './../../page_data'
import { VideoBackground } from '../../helpers/VideoBackground'
import React from 'react'

const RowPreview = ({ row, rowIndex, id }) => {
  useEffect(() => {
    CssGenerator(row, 'row', 'setinline')
  }, [])

  const { settings } = row

  const overClass = ['pb-row-parent']
  if (!row.visibility) {
    overClass.push('pb-builder-row-disable')
  } // Disable Class
  if (settings && settings.row_class) {
    overClass.push(settings.row_class)
  } // Extra Row Class

  // Animation
  const attribute = {
    key: id,
    id: settings && settings.row_id ? settings.row_id : null,
    'data-row-index': rowIndex,
  }
  if (
    settings &&
    typeof settings.row_animation !== 'undefined' &&
    settings.row_animation.itemOpen
  ) {
    if (settings.row_animation.name) {
      overClass.push('pb-wow', 'pb-animated', settings.row_animation.name)
    }
    if (settings.row_animation.delay) {
      attribute['data-wow-delay'] = settings.row_animation.delay + 'ms'
    }
    if (settings.row_animation.duration) {
      attribute['data-wow-duration'] = settings.row_animation.duration + 'ms'
    }
  }

  const rowContainer = ['pb-container']
  if (
    settings &&
    settings.row_screen &&
    settings.row_screen == 'row-container-stretch'
  ) {
    rowContainer.push('pb-container-full')
  }
  if (
    settings &&
    settings.row_screen &&
    settings.row_screen == 'container-stretch-no-gutter'
  ) {
    rowContainer.push('pb-container-full', 'pb-contaner-no-gutter')
  }
  if (!settings || settings.row_screen === 'row-default') {
    rowContainer.push('pb-container-row-default pb-row-' + row.id)
  } else {
    overClass.push('pb-row-' + row.id)
  }

  const shapeName =
    settings && settings['row_shape'] ? settings.row_shape.shapeStyle : ''
  const shapeNameBottom =
    settings && settings['row_shape_bottom']
      ? settings.row_shape_bottom.shapeStyle
      : ''

  return (
    <div className="pb-row-placeholder">
      <div className="addon-placeholder-top"></div>
      <div {...attribute} className={overClass.join(' ')}>
        {settings &&
          settings['row_background'] &&
          VideoBackground(settings, 'row')}

        {settings &&
          settings['row_shape'] &&
          settings['row_shape'].itemOpenShape == 1 &&
          settings.row_screen != 'row-default' && (
            <div
              className="pb-shape-container pb-top-shape"
              dangerouslySetInnerHTML={{
                __html: atob(page_data.SvgShape[shapeName]),
              }}
            />
          )}
        {settings &&
          settings['row_shape_bottom'] &&
          settings['row_shape_bottom'].itemOpenShape == 1 &&
          settings.row_screen != 'row-default' && (
            <div
              className="pb-shape-container pb-bottom-shape"
              dangerouslySetInnerHTML={{
                __html: atob(page_data.SvgShape[shapeNameBottom]),
              }}
            />
          )}

        <div className={rowContainer.join(' ')}>
          {settings &&
            settings['row_shape'] &&
            settings['row_shape'].itemOpenShape == 1 &&
            settings.row_screen == 'row-default' && (
              <div
                className="pb-shape-container pb-top-shape"
                dangerouslySetInnerHTML={{
                  __html: atob(page_data.SvgShape[shapeName]),
                }}
              />
            )}
          {settings &&
            settings['row_shape_bottom'] &&
            settings['row_shape_bottom'].itemOpenShape == 1 &&
            settings.row_screen == 'row-default' && (
              <div
                className="pb-shape-container pb-bottom-shape"
                dangerouslySetInnerHTML={{
                  __html: atob(page_data.SvgShape[shapeNameBottom]),
                }}
              />
            )}

          <div className="pb-row">
            {settings && settings.overlay && (
              <div
                className="pb-row-overlay"
                style={
                  settings.overlay ? { backgroundColor: settings.overlay } : {}
                }
              ></div>
            )}

            {row.columns.map((column, index) => (
              <ColumnPreview
                row={row}
                column={column}
                index={index}
                key={column.id}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="addon-placeholder-bottom"></div>
    </div>
  )
}

export default RowPreview
