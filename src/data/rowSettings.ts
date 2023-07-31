export const rowSettings = {
  type: "content",
  title: "Section",
  default: {
    row_screen: "row-default",
  },
  attr: {
    general: {
      row_screen: {
        type: "select",
        title: "Screen",
        values: {
          "row-default": "Default",
          "row-stretch": "Row Stretch",
          "row-container-stretch": "Row and Container Stretch",
          "container-stretch-no-gutter": "Container Stretch Without Gutter",
        },
        std: "row-stretch",
        multiple: false,
      },
      row_height: {
        type: "slider",
        title: "Min height",
        range: {
          min: 1,
          max: 2500,
          step: 1,
        },
        responsive: true,
        selector: "{{SELECTOR}}{ min-height: {{data.row_height}}px; }",
      },
      row_content: {
        type: "select",
        title: "Content position",
        values: {
          "": "Default",
          "flex-start": "Top",
          center: "Middle",
          "flex-end": "Bottom",
        },
        std: "",
        multiple: false,
        selector:
          "{{SELECTOR}}{ display: -webkit-box; display: -ms-flexbox; display: flex; -webkit-box-align: {{data.row_content}}; -ms-flex-align: {{data.row_content}}; align-items: {{data.row_content}}; }",
      },
      row_custom_width: {
        type: "slider",
        title: "Custom width",
        range: {
          min: 0,
          max: 2500,
          step: 1,
        },
        responsive: true,
        selector:
          ".pb-builder-container#pb-builder-container .pb-row-parent{{SELECTOR}} > .pb-container,.pb-builder-container#pb-builder-container .pb-row-parent  .pb-container{{SELECTOR}} { max-width: {{data.row_custom_width}}px;margin-left: auto;margin-right: auto; }",
      },
      row_custom_gutter: {
        type: "slider",
        title: "Gutter",
        range: {
          min: 0,
          max: 200,
          step: 1,
        },
        std: "30",
        division: 2,
        responsive: true,
        selector: [
          ".pb-row-parent {{SELECTOR}}.pb-container > .pb-row, .pb-row-parent{{SELECTOR}} .pb-container > .pb-row { margin-left:  -{{data.row_custom_gutter}}px; margin-right: -{{data.row_custom_gutter}}px; }",
          ".pb-builder-container {{SELECTOR}} .pb-row .pb-column-parent-editor .pb-column { margin-left: {{data.row_custom_gutter}}px; margin-right: {{data.row_custom_gutter}}px; }",
          ".pb-builder-container {{SELECTOR}} .pb-row .pb-column-parent-view { padding-left: {{data.row_custom_gutter}}px; padding-right: {{data.row_custom_gutter}}px; }",
          ".pb-builder-container#pb-builder-container .pb-row-parent{{SELECTOR}} > .pb-container,.pb-builder-container#pb-builder-container .pb-row-parent  .pb-container{{SELECTOR}} { padding-left: {{data.row_custom_gutter}}px; padding-right: {{data.row_custom_gutter}}px; }",
        ],
      },
      row_animation: {
        type: "animation",
        title: "Animation",
        section: "Animation",
      },
    },
    style: {
      row_padding: {
        type: "dimension",
        title: "Padding",
        unit: ["px", "em", "%"],
        responsive: true,
        selector:
          ".pb-builder-container > div > div > .pb-row-parent{{SELECTOR}},.pb-builder-container > .pb-row-parent{{SELECTOR}}, .pb-builder-container#pb-builder-container > .pb-row-parent .pb-container{{SELECTOR}}, .pb-builder-container#pb-builder-container .pb-row-placeholder > .pb-row-parent > .pb-container{{SELECTOR}}, .pb-builder-container .pb-inner-row-parent{{SELECTOR}} { padding: {{data.row_padding}}; }",
      },
      row_margin: {
        type: "dimension",
        title: "Margin",
        unit: ["px", "em", "%"],
        responsive: true,
        selector: "{{SELECTOR}}{ margin: {{data.row_margin}}; }",
      },
      row_boxshadow: {
        type: "boxshadow",
        title: "Box Shadow",
        std: {
          shadowValue: {
            top: "0px",
            right: "0px",
            bottom: "5px",
            left: "0px",
          },
          shadowColor: "rgba(0,0,0,.3)",
        },
        selector: "{{SELECTOR}}",
        section: "Box Shadow",
      },
      row_boxshadow_hover: {
        type: "boxshadow",
        title: "Box Shadow hover",
        std: {
          shadowValue: {
            top: "0px",
            right: "0px",
            bottom: "5px",
            left: "0px",
          },
          shadowColor: "rgba(0,0,0,.3)",
        },
        selector: "{{SELECTOR}}:hover",
        section: "Box Shadow",
      },
      row_border: {
        type: "border",
        title: "Border",
        std: {
          borderWidth: {
            top: "0px",
            right: "0px",
            bottom: "0px",
            left: "0px",
          },
          borderStyle: "solid",
          borderColor: "#cccccc",
        },
        selector: "{{SELECTOR}}",
        section: "Border",
      },
      row_border_hover: {
        type: "border",
        title: "Hover Border",
        std: {
          borderWidth: {
            top: "0px",
            right: "0px",
            bottom: "0px",
            left: "0px",
          },
          borderStyle: "solid",
          borderColor: "#cccccc",
        },
        selector: "{{SELECTOR}}:hover",
        section: "Border",
      },
      row_border_radius_check: {
        type: "switch",
        title: "Border Radius",
        section: "Border Radius",
        std: "0",
      },
      row_border_radius: {
        type: "dimension",
        title: "Border Radius",
        unit: ["px", "em", "%"],
        responsive: true,
        depends: [["row_border_radius_check", "=", "1"]],
        selector: "{{SELECTOR}}{ border-radius: {{data.row_border_radius}} ; }",
        section: "Border Radius",
      },
      row_border_radius_hover: {
        type: "dimension",
        title: "Hover Border Radius",
        unit: ["px", "em", "%"],
        responsive: true,
        depends: [["row_border_radius_check", "=", "1"]],
        selector:
          "{{SELECTOR}}:hover{ border-radius: {{data.row_border_radius_hover}} ; }",
        section: "Border Radius",
      },
      row_background: {
        type: "background",
        title: "Background",
        video: true,
        selector: "{{SELECTOR}}",
        section: "Background",
      },
      row_color_opacity: {
        type: "color2",
        title: "Overlay Background Color",
        std: "#00aeff",
        selector: "{{SELECTOR}}:after",
        section: "Overlay",
      },
      row_overlay_media: {
        type: "media",
        title: "Overlay Image",
        section: "Overlay",
        selector:
          '{{SELECTOR}}:after{ background-image: url("{{data.row_overlay_media}}"); }',
      },
      row_overlay_position: {
        type: "select",
        title: "Image Position",
        values: {
          "": "Default",
          "left top": "left top",
          "left center": "left center",
          "left bottom": "left bottom",
          "right top": "right top",
          "right center": "right center",
          "right bottom": "right bottom",
          "center top": "center top",
          "center center": "center center",
          "center bottom": "center bottom",
        },
        section: "Overlay",
        selector:
          "{{SELECTOR}}:after{ background-position: {{data.row_overlay_position}}; }",
      },
      row_overlay_size: {
        type: "select",
        title: "Image Size",
        values: {
          "": "Default",
          cover: "Cover",
          auto: "Auto",
          contain: "Contain",
        },
        section: "Overlay",
        selector:
          "{{SELECTOR}}:after{ background-size: {{data.row_overlay_size}}; }",
      },
      row_opacity: {
        type: "slider",
        title: "Overlay Opacity",
        range: {
          min: 0,
          max: 1,
          step: 0.01,
        },
        selector:
          '{{SELECTOR}}:after{content: " "; display: block; position: absolute; height: 100%; top: 0; left: 0; right: 0; z-index: -1; opacity: {{data.row_opacity}}; }',
        section: "Overlay",
      },
      row_color_blend: {
        type: "select",
        title: "Blend Mode",
        values: {
          normal: "Normal",
          multiply: "Multiply",
          screen: "Screen",
          overlay: "Overlay",
          darken: "Darken",
          lighten: "Lighten",
          "color-dodge": "Color Dodge",
          saturation: "Saturation",
          luminosity: "Luminosity",
          color: "Color",
          "color-burn": "Color Burn",
          exclusion: "Exclusion",
          hue: "Hue",
        },
        section: "Overlay",
        selector:
          "{{SELECTOR}}:after{ mix-blend-mode:{{data.row_color_blend}}; }",
      },
      row_shape: {
        type: "shape",
        title: "Shape Top",
        selector: "{{SELECTOR}}",
        section: "Shape",
      },
      row_shape_bottom: {
        type: "shape",
        title: "Shape Bottom",
        selector: "{{SELECTOR}}",
        section: "Shape",
      },
    },
    advanced: {
      row_id: {
        type: "text",
        title: "Row ID",
      },
      row_class: {
        type: "text",
        title: "Class",
      },
      row_z_index: {
        type: "slider",
        title: "z-index",
        range: {
          min: 0,
          max: 10000,
          step: 1,
        },
        std: 0,
        selector: "{{SELECTOR}}{ z-index: {{data.row_z_index}}; }",
      },
      row_hidden_xs: {
        type: "switch",
        title: "Hidden on Mobile",
        section: "Responsive",
        std: "0",
      },
      row_hidden_sm: {
        type: "switch",
        title: "Hidden on Tablet",
        section: "Responsive",
        std: "0",
      },
      row_hidden_md: {
        type: "switch",
        title: "Hidden on desktop",
        section: "Responsive",
        std: "0",
      },
      row_hidden_lg: {
        type: "switch",
        title: "Hidden on Large Device",
        section: "Responsive",
        std: "0",
      },
      row_custom_css: {
        type: "textarea",
        title: "Custom CSS",
        section: "Custom CSS",
        placeholder:
          "Use {{SELECTOR}} before the selector to wrap element. Otherwise it works globally.",
        desc: "Use {{SELECTOR}} before the selector to wrap element. Otherwise it works globally.",
      },
    },
  },
};
