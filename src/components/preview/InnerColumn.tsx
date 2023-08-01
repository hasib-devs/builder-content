import { useEffect } from 'react'
import { CssGenerator } from '../../helpers/previewCssGenerator'
import _ from 'lodash'
import InnerAddonList from './InnerAddonList'
import React from 'react'

const InnerColumn = ({ index, innerRow, column }) => {
  useEffect(() => {
    // CSS Generator
    const colLayoutArray = String(innerRow.layout).split(','),
      columnWidth = colLayoutArray[index],
      newColumn = _.clone(column)
    newColumn.settings.col_custom_width.md = columnWidth

    CssGenerator(newColumn, 'col', 'setinline')
  }, [])

  const { settings } = column

  const overClass = [
    'pb-column-parent pb-column-parent-editor',
    'pb-col-' + column.id,
  ]

  if (!column.visibility) {
    overClass.push('pb-builder-col-disable')
  } // Disable Class
  if (settings.col_class) {
    overClass.push(settings.col_class)
  } // Extra Row Class

  if (index < innerRow.columns.length - 1) {
    overClass.push('ui-resizable')
  }

  // Animation
  const attribute = {
    key: column.id,
    id: settings.col_id ? settings.col_id : null,
    'data-col-index': index,
  }
  if (
    typeof settings.col_animation !== 'undefined' &&
    settings.col_animation.itemOpen
  ) {
    if (settings.col_animation.name) {
      overClass.push('pb-wow', 'pb-animated', settings.col_animation.name)
    }
    if (settings.col_animation.delay) {
      attribute['data-wow-delay'] = settings.col_animation.delay + 'ms'
    }
    if (settings.col_animation.duration) {
      attribute['data-wow-duration'] = settings.col_animation.duration + 'ms'
    }
  }

  return (
    <div {...attribute} className={overClass.join(' ')}>
      <div
        className={
          'pb-column' + (_.isEmpty(column.addons) ? ' pb-col-empty' : '')
        }
      >
        <InnerAddonList key={column.id} addons={column.addons} />
      </div>
    </div>
  )
}

export default InnerColumn
