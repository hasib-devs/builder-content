export const colSettings = {
  type: 'content',
  title: 'Section',
  attr: {
    general: {
      col_height: {
        type: 'slider',
        title: 'Min Height',
        std: {
          md: '0px',
          sm: '0px',
          xs: '0px',
        },
        unit: ['px', 'em', '%'],
        range: {
          em: {
            min: 0,
            max: 250,
            step: 0.1,
          },
          px: {
            min: 0,
            max: 2000,
            step: 1,
          },
          '%': {
            min: 0,
            max: 100,
            step: 1,
          },
        },
        responsive: true,
        selector:
          '.pb-row > {{SELECTOR}}.pb-column-parent { min-height: {{data.col_height}}; }',
      },
      col_content: {
        type: 'select',
        title: 'Content position',
        values: {
          '': 'Default',
          'flex-start': 'Top',
          center: 'Middle',
          'flex-end': 'Bottom',
        },
        std: '',
        multiple: false,
        selector:
          '{{SELECTOR}} .pb-column { display: -webkit-box; display: -ms-flexbox; display: flex; -webkit-box-align: {{data.col_content}}; -ms-flex-align: {{data.col_content}}; align-items: {{data.col_content}}; }',
      },
      col_custom_width: {
        type: 'columnWidth',
        title: 'Width',
        range: {
          min: 10,
          max: 100,
          step: 1,
        },
        responsive: true,
        selector:
          '.pb-column-parent{{SELECTOR}} { width: {{data.col_custom_width}}%; }',
      },
      col_addons_space: {
        type: 'slider',
        title: 'Addons Space',
        std: {
          md: '0',
          sm: '',
          xs: '',
        },
        unit: ['px', 'em', '%'],
        range: {
          em: {
            min: 0,
            max: 20,
            step: 0.1,
          },
          px: {
            min: 0,
            max: 250,
            step: 1,
          },
          '%': {
            min: 0,
            max: 100,
            step: 1,
          },
        },
        responsive: true,
        selector:
          '{{SELECTOR}} .pb-column .pb-builder-addon{ margin-bottom: {{data.col_addons_space}}; }',
      },
      col_animation: {
        type: 'animation',
        title: 'Animation',
        section: 'Animation',
      },
    },
    style: {
      col_padding: {
        type: 'dimension',
        title: 'Padding',
        unit: ['px', 'em', '%'],
        responsive: true,
        selector:
          '.pb-builder-container .pb-row > .pb-column-parent{{SELECTOR}} .pb-column { padding: {{data.col_padding}}; }',
      },
      col_margin: {
        type: 'dimension',
        title: 'Margin',
        unit: ['px', 'em', '%'],
        responsive: true,
        selector:
          '.pb-builder-container .pb-row > .pb-column-parent{{SELECTOR}} .pb-column { margin: {{data.col_margin}}; }',
      },
      col_border: {
        type: 'border',
        title: 'Border',
        std: {
          itemOpenBorder: 1,
          borderWidth: {
            top: '1px',
            right: '1px',
            bottom: '1px',
            left: '1px',
          },
          borderStyle: 'solid',
          borderColor: '#f5f5f5',
        },
        selector: '{{SELECTOR}} .pb-column',
        section: 'Border',
      },
      col_border_hover: {
        type: 'border',
        title: 'Hover Border',
        std: {
          itemOpenBorder: 1,
          borderWidth: {
            top: '1px',
            right: '1px',
            bottom: '1px',
            left: '1px',
          },
          borderStyle: 'solid',
          borderColor: '#e5e5e5',
        },
        selector: '{{SELECTOR}} .pb-column:hover',
        section: 'Border',
      },
      col_boxshadow: {
        type: 'boxshadow',
        title: 'Box shadow',
        std: {
          itemOpenShadow: true,
          shadowValue: {
            top: '1px',
            right: '1px',
            bottom: '1px',
            left: '1px',
          },
          shadowColor: '#f5f5f5',
        },
        section: 'Box shadow',
        selector: '{{SELECTOR}} > .pb-column,{{SELECTOR}} > div > .pb-column',
      },
      'col_boxshadow:hover': {
        type: 'boxshadow',
        title: 'Hover box shadow',
        std: {
          itemOpenShadow: true,
          shadowValue: {
            top: '1px',
            right: '1px',
            bottom: '1px',
            left: '1px',
          },
          shadowColor: '#f5f5f5',
        },
        section: 'Box shadow',
        selector:
          '{{SELECTOR}} > .pb-column:hover, {{SELECTOR}} > div > .pb-column:hover',
      },
      col_border_radius_check: {
        type: 'switch',
        title: 'Border Radius',
        section: 'Border Radius',
        std: '0',
      },
      col_border_radius: {
        type: 'dimension',
        title: 'Border Radius',
        unit: ['px', 'em', '%'],
        responsive: true,
        depends: [['col_border_radius_check', '=', '1']],
        selector:
          '{{SELECTOR}} .pb-column,{{SELECTOR}} .pb-column:after{ border-radius: {{data.col_border_radius}} ; }',
        section: 'Border Radius',
      },
      col_border_radius_hover: {
        type: 'dimension',
        title: 'Hover Border Radius',
        unit: ['px', 'em', '%'],
        responsive: true,
        depends: [['col_border_radius_check', '=', '1']],
        selector:
          '{{SELECTOR}} .pb-column:hover,{{SELECTOR}} .pb-column:hover:after{ border-radius: {{data.col_border_radius_hover}} ; }',
        section: 'Border Radius',
      },
      col_background: {
        type: 'background',
        title: 'Background',
        video: true,
        selector: '{{SELECTOR}} .pb-column',
        section: 'Background',
      },
      col_color_opacity: {
        type: 'color2',
        title: 'Add Overlay Color',
        std: '#00aeff',
        selector: '{{SELECTOR}} .pb-column:after',
        section: 'Overlay',
      },
      col_opacity: {
        type: 'slider',
        title: 'Overlay Opacity',
        range: {
          min: 0,
          max: 1,
          step: 0.01,
        },
        selector:
          '{{SELECTOR}} .pb-column:after{transition: 300ms; content: " "; display: block; position: absolute; height: 100%; top: 0; left: 0; right: 0; opacity: {{data.col_opacity}}; }',
        section: 'Overlay',
      },
      col_color_blend: {
        type: 'select',
        title: 'Blend Mode',
        values: {
          normal: 'Normal',
          multiply: 'Multiply',
          screen: 'Screen',
          overlay: 'Overlay',
          darken: 'Darken',
          lighten: 'Lighten',
          'color-dodge': 'Color Dodge',
          saturation: 'Saturation',
          luminosity: 'Luminosity',
          color: 'Color',
          'color-burn': 'Color Burn',
          exclusion: 'Exclusion',
          hue: 'Hue',
        },
        section: 'Overlay',
        selector:
          '{{SELECTOR}} .pb-column:after{ mix-blend-mode:{{data.col_color_blend}}; }',
      },
    },
    advanced: {
      col_id: {
        type: 'text',
        title: 'Column ID',
      },
      col_class: {
        type: 'text',
        title: 'Class',
      },
      col_z_index: {
        type: 'slider',
        title: 'z-index',
        range: {
          min: -10000,
          max: 10000,
          step: 1,
        },
        selector:
          '.pb-row .pb-column-parent{{SELECTOR}} .pb-column{ z-index: {{data.col_z_index}}; }',
      },
      col_hidden_xs: {
        type: 'switch',
        title: 'Hidden on Mobile',
        section: 'Responsive',
        std: '0',
      },
      col_hidden_sm: {
        type: 'switch',
        title: 'Hidden on Tablet',
        section: 'Responsive',
        std: '0',
      },
      col_hidden_md: {
        type: 'switch',
        title: 'Hidden on desktop',
        section: 'Responsive',
        std: '0',
      },
      col_hidden_lg: {
        type: 'switch',
        title: 'Hidden on Large Device',
        section: 'Responsive',
        std: '0',
      },
      col_custom_css: {
        type: 'textarea',
        title: 'Custom CSS',
        section: 'Custom CSS',
        placeholder:
          'Use {{SELECTOR}} before the selector to wrap element. Otherwise it works globally.',
        desc: 'Use {{SELECTOR}} before the selector to wrap element. Otherwise it works globally.',
      },
    },
  },
};
