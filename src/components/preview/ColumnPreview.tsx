import { useEffect } from 'react'
import { CssGenerator } from '../../helpers/previewCssGenerator'
import _ from 'lodash'
import AddonList from './AddonList'
import React from 'react'

const ColumnPreview = ({ row, column, index }) => {
  useEffect(() => {
    // CSS Generator
    const colLayoutArray = String(row.layout).split(','),
      columnWidth = colLayoutArray[index],
      newColumn = _.clone(column)

    if (typeof newColumn.settings.col_custom_width !== 'undefined') {
      newColumn.settings.col_custom_width.md = columnWidth
    }

    CssGenerator(newColumn, 'col', 'setinline')
  }, [])

  const { settings } = column

  const overClass = [
    'pb-column-parent pb-column-parent-editor',
    'pb-col-' + column.id,
  ]

  if (!column.visibility) {
    overClass.push('pb-builder-col-disable')
  }
  if (settings.col_class) {
    overClass.push(settings.col_class)
  }
  if (index < row.columns.length - 1) {
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
      <div style={{ width: '100%', paddingLeft: '0px', paddingRight: '0px' }}>
        <div
          className={
            'pb-column' + (_.isEmpty(column.addons) ? ' pb-col-empty' : '')
          }
        >
          <AddonList addons={column.addons} key={column.id} />
        </div>
      </div>
    </div>
  )
}

export default ColumnPreview
