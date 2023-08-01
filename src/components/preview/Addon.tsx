import { useEffect } from 'react'
import AddonContent from './AddonContent'
import { CssGenerator } from '../../helpers/previewCssGenerator'
import React from 'react'

const Addon = ({ addon }) => {
  useEffect(() => {
    // CSS Generator
    if (addon.name) {
      CssGenerator(addon, addon.type, 'setinline')
    }
  })

  const { settings } = addon

  const overClass = ['pb-builder-addon pb-addon-' + addon.id]
  if (!addon.visibility) {
    overClass.push('pb-builder-addon-disabled')
  } // Disable Class
  if (settings.addon_class) {
    overClass.push(settings.addon_class)
  } // Extra Row Class

  // Animation
  const attribute = {
    key: addon.id,
    id: settings.addon_id ? settings.addon_id : null,
    'data-addon-id': addon.id,
  }
  if (
    typeof settings.addon_animation !== 'undefined' &&
    settings.addon_animation.itemOpen
  ) {
    if (settings.addon_animation.name) {
      overClass.push('pb-wow', 'pb-animated', settings.addon_animation.name)
    }
    if (settings.addon_animation.delay) {
      attribute['data-wow-delay'] = settings.addon_animation.delay + 'ms'
    }
    if (settings.addon_animation.duration) {
      attribute['data-wow-duration'] = settings.addon_animation.duration + 'ms'
    }
  }

  return (
    <div {...attribute} className={overClass.join(' ')}>
      <div className="addon-placeholder-top"></div>
      <AddonContent addon={addon} />
      <div className="addon-placeholder-bottom"></div>
    </div>
  )
}

export default Addon
