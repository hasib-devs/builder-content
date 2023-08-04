import { addonsJSON } from "./data/addonsJSON";
import { colSettings } from "./data/colSettings";
import { rowSettings } from "./data/rowSettings";

export default {
  ajaxurl: "",
  initialState: [],
  script_debug: 1,
  commonCss:
    ".pb-builder-container#pb-builder-container .pb-row-parent > .pb-container, .pb-carousel-content-wrap .pb-container{ max-width: 1140px }.pb-builder-container#pb-builder-container > .pb-row-parent > .pb-container,.pb-builder-container#pb-builder-container  .pb-row-placeholder > .pb-row-parent > .pb-container,.pb-carousel-content-wrap .pb-container, .pb-builder-container .pb-column-parent-view { padding-left: 15px; }.pb-builder-container#pb-builder-container > .pb-row-parent > .pb-container, .pb-builder-container#pb-builder-container .pb-row-placeholder > .pb-row-parent > .pb-container,.pb-carousel-content-wrap .pb-container, .pb-builder-container .pb-column-parent-view{ padding-right: 15px; }  .pb-container > .pb-row { margin-left: -15px; }.pb-container > .pb-row { margin-right: -15px; } .pb-builder-container .pb-column-parent-editor .pb-column { margin-left: 15px; } .pb-builder-container .pb-column-parent-editor .pb-column { margin-right: 15px; }",
  rowStyle: {
    row_height: "{{SELECTOR}}{ min-height: {{data.row_height}}px; }",
    row_content:
      "{{SELECTOR}}{ display: -webkit-box; display: -ms-flexbox; display: flex; -webkit-box-align: {{data.row_content}}; -ms-flex-align: {{data.row_content}}; align-items: {{data.row_content}}; }",
    row_custom_width:
      ".pb-builder-container#pb-builder-container .pb-row-parent{{SELECTOR}} > .pb-container,.pb-builder-container#pb-builder-container .pb-row-parent  .pb-container{{SELECTOR}} { max-width: {{data.row_custom_width}}px;margin-left: auto;margin-right: auto; }",
    row_custom_gutter:
      ".pb-row-parent {{SELECTOR}}.pb-container > .pb-row, .pb-row-parent{{SELECTOR}} .pb-container > .pb-row { margin-left:  -{{data.row_custom_gutter}}px; margin-right: -{{data.row_custom_gutter}}px; }.pb-builder-container {{SELECTOR}} .pb-row .pb-column-parent-editor .pb-column { margin-left: {{data.row_custom_gutter}}px; margin-right: {{data.row_custom_gutter}}px; }.pb-builder-container {{SELECTOR}} .pb-row .pb-column-parent-view { padding-left: {{data.row_custom_gutter}}px; padding-right: {{data.row_custom_gutter}}px; }.pb-builder-container#pb-builder-container .pb-row-parent{{SELECTOR}} > .pb-container,.pb-builder-container#pb-builder-container .pb-row-parent  .pb-container{{SELECTOR}} { padding-left: {{data.row_custom_gutter}}px; padding-right: {{data.row_custom_gutter}}px; }",
    row_padding:
      ".pb-builder-container > div > div > .pb-row-parent{{SELECTOR}},.pb-builder-container > .pb-row-parent{{SELECTOR}}, .pb-builder-container#pb-builder-container > .pb-row-parent .pb-container{{SELECTOR}}, .pb-builder-container#pb-builder-container .pb-row-placeholder > .pb-row-parent > .pb-container{{SELECTOR}}, .pb-builder-container .pb-inner-row-parent{{SELECTOR}} { padding: {{data.row_padding}}; }",
    row_margin: "{{SELECTOR}}{ margin: {{data.row_margin}}; }",
    row_boxshadow: "{{SELECTOR}}{{data.row_boxshadow}}",
    row_boxshadow_hover: "{{SELECTOR}}:hover{{data.row_boxshadow_hover}}",
    row_border: "{{SELECTOR}}{{data.row_border}}",
    row_border_hover: "{{SELECTOR}}:hover{{data.row_border_hover}}",
    row_border_radius:
      "{{SELECTOR}}{ border-radius: {{data.row_border_radius}} ; }",
    row_border_radius_hover:
      "{{SELECTOR}}:hover{ border-radius: {{data.row_border_radius_hover}} ; }",
    row_background: "{{SELECTOR}}",
    row_color_opacity: "{{SELECTOR}}:after{{data.row_color_opacity}}",
    row_overlay_media:
      '{{SELECTOR}}:after{ background-image: url("{{data.row_overlay_media}}"); }',
    row_overlay_position:
      "{{SELECTOR}}:after{ background-position: {{data.row_overlay_position}}; }",
    row_overlay_size:
      "{{SELECTOR}}:after{ background-size: {{data.row_overlay_size}}; }",
    row_opacity:
      '{{SELECTOR}}:after{content: " "; display: block; position: absolute; height: 100%; top: 0; left: 0; right: 0; z-index: -1; opacity: {{data.row_opacity}}; }',
    row_color_blend:
      "{{SELECTOR}}:after{ mix-blend-mode:{{data.row_color_blend}}; }",
    row_shape: "{{SELECTOR}}",
    row_shape_bottom: "{{SELECTOR}}",
    row_z_index: "{{SELECTOR}}{ z-index: {{data.row_z_index}}; }",
  },
  colStyle: {
    col_height:
      ".pb-row > {{SELECTOR}}.pb-column-parent { min-height: {{data.col_height}}; }",
    col_content:
      "{{SELECTOR}} .pb-column { display: -webkit-box; display: -ms-flexbox; display: flex; -webkit-box-align: {{data.col_content}}; -ms-flex-align: {{data.col_content}}; align-items: {{data.col_content}}; }",
    col_custom_width:
      ".pb-column-parent{{SELECTOR}} { width: {{data.col_custom_width}}%; }",
    col_addons_space:
      "{{SELECTOR}} .pb-column .pb-builder-addon{ margin-bottom: {{data.col_addons_space}}; }",
    col_padding:
      ".pb-builder-container .pb-row > .pb-column-parent{{SELECTOR}} .pb-column { padding: {{data.col_padding}}; }",
    col_margin:
      ".pb-builder-container .pb-row > .pb-column-parent{{SELECTOR}} .pb-column { margin: {{data.col_margin}}; }",
    col_border: "{{SELECTOR}} .pb-column{{data.col_border}}",
    col_border_hover: "{{SELECTOR}} .pb-column:hover{{data.col_border_hover}}",
    col_boxshadow:
      "{{SELECTOR}} > .pb-column,{{SELECTOR}} > div > .pb-column{{data.col_boxshadow}}",
    "col_boxshadow:hover":
      "{{SELECTOR}} > .pb-column:hover, {{SELECTOR}} > div > .pb-column:hover{{data.col_boxshadow:hover}}",
    col_border_radius:
      "{{SELECTOR}} .pb-column,{{SELECTOR}} .pb-column:after{ border-radius: {{data.col_border_radius}} ; }",
    col_border_radius_hover:
      "{{SELECTOR}} .pb-column:hover,{{SELECTOR}} .pb-column:hover:after{ border-radius: {{data.col_border_radius_hover}} ; }",
    col_background: "{{SELECTOR}} .pb-column",
    col_color_opacity:
      "{{SELECTOR}} .pb-column:after{{data.col_color_opacity}}",
    col_opacity:
      '{{SELECTOR}} .pb-column:after{transition: 300ms; content: " "; display: block; position: absolute; height: 100%; top: 0; left: 0; right: 0; opacity: {{data.col_opacity}}; }',
    col_color_blend:
      "{{SELECTOR}} .pb-column:after{ mix-blend-mode:{{data.col_color_blend}}; }",
    col_z_index:
      ".pb-row .pb-column-parent{{SELECTOR}} .pb-column{ z-index: {{data.col_z_index}}; }",
  },
  addonWidgetStyle: {
    addon_z_index:
      ".pb-builder-container {{SELECTOR}}{ z-index: {{data.addon_z_index}}; }",
    addon_padding: "{{SELECTOR}}{ padding: {{data.addon_padding}}; }",
    addon_margin: "{{SELECTOR}}{ margin: {{data.addon_margin}}; }",
    addon_background: "{{SELECTOR}}",
    addon_color_opacity: "{{SELECTOR}}:after{{data.addon_color_opacity}}",
    addon_opacity:
      '{{SELECTOR}}:after{ content: " "; z-index: 0; display: block; position: absolute; height: 100%; top: 0; left: 0; right: 0; opacity:{{data.addon_opacity}}; }',
    addon_color_blend:
      "{{SELECTOR}}:after{ mix-blend-mode:{{data.addon_color_blend}}; }",
    addon_border: "{{SELECTOR}}{{data.addon_border}}",
    addon_border_hover: "{{SELECTOR}}:hover{{data.addon_border_hover}}",
    addon_border_radius:
      "{{SELECTOR}}, {{SELECTOR}}:after{ border-radius: {{data.addon_border_radius}}; overflow:hidden; }",
    addon_border_radius_hover:
      "{{SELECTOR}}:hover, {{SELECTOR}}:hover:after{ border-radius: {{data.addon_border_radius_hover}};overflow:hidden; }",
    addon_boxshadow: "{{SELECTOR}}{{data.addon_boxshadow}}",
    addon_boxshadow_hover: "{{SELECTOR}}:hover{{data.addon_boxshadow_hover}}",
    addon_wrap_opacity:
      "{{SELECTOR}} .pb-addon{ opacity:{{data.addon_wrap_opacity}}; }",
    addon_wrap_opacity_hover:
      "{{SELECTOR}} .pb-addon:hover{ opacity:{{data.addon_wrap_opacity_hover}}; }",
    addon_display: "{{SELECTOR}}{ display: {{data.addon_display}} ; }",
  },
  addonsJSON: addonsJSON,
  rowSettings: rowSettings,
  colSettings: colSettings,
  globalAttr: {
    style: {
      initialize_empty: {
        type: "firstid",
        title: "ID",
        desc: "Place your ID in this section",
        std: "0",
      },
    },
    advanced: {
      addon_id: {
        type: "text",
        title: "ID",
        desc: "Place your ID in this section",
        std: "",
      },
      addon_class: {
        type: "text",
        title: "Class",
      },
      addon_z_index: {
        type: "slider",
        title: "z-index",
        range: {
          min: -10000,
          max: 10000,
          step: 1,
        },
        selector:
          ".pb-builder-container {{SELECTOR}}{ z-index: {{data.addon_z_index}}; }",
      },
      addon_padding: {
        type: "dimension",
        title: "Padding",
        unit: ["px", "em", "%"],
        responsive: true,
        selector: "{{SELECTOR}}{ padding: {{data.addon_padding}}; }",
        section: "Style",
      },
      addon_margin: {
        type: "dimension",
        title: "Margin",
        unit: ["px", "em", "%"],
        responsive: true,
        selector: "{{SELECTOR}}{ margin: {{data.addon_margin}}; }",
        section: "Style",
      },
      addon_background: {
        type: "background",
        title: "Background",
        selector: "{{SELECTOR}}",
        section: "Background",
      },
      addon_color_opacity: {
        type: "color2",
        title: "Add Overlay Color",
        std: "#00aeff",
        selector: "{{SELECTOR}}:after",
        section: "Overlay",
      },
      addon_opacity: {
        type: "slider",
        title: "Overlay Opacity",
        range: {
          min: 0,
          max: 1,
          step: 0.01,
        },
        selector:
          '{{SELECTOR}}:after{ content: " "; z-index: 0; display: block; position: absolute; height: 100%; top: 0; left: 0; right: 0; opacity:{{data.addon_opacity}}; }',
        section: "Overlay",
      },
      addon_color_blend: {
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
          "{{SELECTOR}}:after{ mix-blend-mode:{{data.addon_color_blend}}; }",
      },
      addon_border: {
        type: "border",
        title: "Border",
        std: {
          itemOpenBorder: 0,
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
      addon_border_hover: {
        type: "border",
        title: "Border Hover",
        std: {
          itemOpenBorder: 0,
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
      addon_border_radius_check: {
        type: "switch",
        title: "Border Radius",
        std: "0",
        section: "Border Radius",
      },
      addon_border_radius: {
        type: "dimension",
        title: "Border Radius",
        unit: ["px", "em", "%"],
        responsive: true,
        selector:
          "{{SELECTOR}}, {{SELECTOR}}:after{ border-radius: {{data.addon_border_radius}}; overflow:hidden; }",
        section: "Border Radius",
        depends: [["addon_border_radius_check", "=", "1"]],
      },
      addon_border_radius_hover: {
        type: "dimension",
        title: "Hover Border Radius",
        unit: ["px", "em", "%"],
        responsive: true,
        selector:
          "{{SELECTOR}}:hover, {{SELECTOR}}:hover:after{ border-radius: {{data.addon_border_radius_hover}};overflow:hidden; }",
        section: "Border Radius",
        depends: [["addon_border_radius_check", "=", "1"]],
      },
      addon_boxshadow: {
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
      addon_boxshadow_hover: {
        type: "boxshadow",
        title: "Box Shadow Hover",
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
      addon_animation: {
        type: "animation",
        title: "Animation",
        section: "Animation",
      },
      addon_wrap_opacity: {
        type: "slider",
        title: "Opacity",
        range: {
          min: 0,
          max: 1,
          step: 0.01,
        },
        selector:
          "{{SELECTOR}} .pb-addon{ opacity:{{data.addon_wrap_opacity}}; }",
        section: "Opacity",
      },
      addon_wrap_opacity_hover: {
        type: "slider",
        title: "Hover Opacity",
        range: {
          min: 0,
          max: 1,
          step: 0.01,
        },
        selector:
          "{{SELECTOR}} .pb-addon:hover{ opacity:{{data.addon_wrap_opacity_hover}}; }",
        section: "Opacity",
      },
      addon_hidden_xs: {
        type: "switch",
        title: "Hidden on Mobile",
        section: "Responsive",
        std: "0",
      },
      addon_hidden_sm: {
        type: "switch",
        title: "Hidden on Tablet",
        section: "Responsive",
        std: "0",
      },
      addon_hidden_md: {
        type: "switch",
        title: "Hidden on desktop",
        section: "Responsive",
        std: "0",
      },
      addon_hidden_lg: {
        type: "switch",
        title: "Hidden on Large Device",
        section: "Responsive",
        std: "0",
      },
      addon_display: {
        type: "select",
        title: "Display",
        values: {
          inline: "Inline",
          block: "Block",
          "inline-block": "Inline Block",
          inherit: "Inherit",
          initial: "Initial",
        },
        section: "Display",
        selector: "{{SELECTOR}}{ display: {{data.addon_display}} ; }",
      },
      addon_custom_css: {
        type: "textarea",
        title: "Custom CSS",
        section: "Custom CSS",
        placeholder:
          "Use {{SELECTOR}} before the selector to wrap element. Otherwise it works globally.",
        desc: "Use {{SELECTOR}} before the selector to wrap element. Otherwise it works globally.",
      },
    },
  },
  dashboard_page: "",
  view_page: "",
  SvgShape: {
    "clouds-flat":
      "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAwIDg2LjQ0IiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj4KICAgIDxwYXRoIGQ9Ik0xMDAwLDBIMFY2OC42NEE1MCw1MCwwLDAsMCw4NS4zOCw0OC44MXYtLjA5YTI1LjE5LDI1LjE5LDAsMCwwLDIwLjg5LTQuMzEsMzIuODUsMzIuODUsMCwwLDAsNDAuNDksMi4zOGM5LjM5LTEuNTMsMTYuNjctOC40LDE3LjY3LTE3YTE0Ljg5LDE0Ljg5LDAsMCwwLDEuNzQuNTcsMTQuNywxNC43LDAsMCwwLDExLjE1LDMuMWM0LjE3LDUuMTQsMTEuNTEsNy44MywxOS4xMSw2LjMyYTIwLjMxLDIwLjMxLDAsMCwwLDEzLjYyLTkuMzNBMjAuMzEsMjAuMzEsMCwwLDAsMjE5LDMyLjU2YTEzLjQ5LDEzLjQ5LDAsMCwwLDI0Ljg2LDcuMjUsMTMuNDMsMTMuNDMsMCwwLDAsMTAtMS45MWMyLjY2LDguMzIsMTIuMDYsMTMuMzcsMjEuOSwxMS40MmExOS45MywxOS45MywwLDAsMCwxNC43NS0xMS41OCwyNC4zLDI0LjMsMCwwLDAsMTMsLjkyLDIzLjg4LDIzLjg4LDAsMCwwLDE0LTguM0ExMy40NiwxMy40NiwwLDAsMCwzMzQsMzIuNjlhMjUuMzksMjUuMzksMCwwLDAsNy4yMy40MSwzMC4zOCwzMC4zOCwwLDAsMCw2LTEuMmMuMi40LjQuOS42LDEuM2EyMC44MSwyMC44MSwwLDAsMCwxNC42LDExYzEwLjIsMi4yLDIwLTIuOSwyMi45LTExLjVhMTMuODQsMTMuODQsMCwwLDAsMTAuMywyLjEsMTQsMTQsMCwwLDAsMTkuMjUsNC42M2wuMDUsMGExNC4xNywxNC4xNywwLDAsMCw2LjctMTEuOCwyMCwyMCwwLDAsMCw5LjMtMiwyMS4zMSwyMS4zMSwwLDAsMCwxNCw5LjljMTAuNiwyLjMsMjAuOS0zLjQsMjMuMi0xMi43YTI4LjQ2LDI4LjQ2LDAsMCwwLDM3LjIsNy4xQTIzLjUzLDIzLjUzLDAsMCwwLDUxMCwyNmwuMjQsMGE4LjkxLDguOTEsMCwwLDAsMi4wNy0uNzJBMTUuMDcsMTUuMDcsMCwwLDAsNTI4LDM1LjlhMTcuNjYsMTcuNjYsMCwwLDAsMzMuNjUtNC42NiwyNi42NSwyNi42NSwwLDAsMCw1LjY1LDMuNDYsMjguNSwyOC41LDAsMCwwLDcsMi4yLDI5LjE2LDI5LjE2LDAsMCwwLDE1LjItMS4zYzIuOCw2LjYsOS4zLDExLjgsMTcuNSwxMy4zLDExLjQsMi4xLDIyLjItMy44LDI1LjMtMTMuNCwwLS4xLjEtLjIuMS0uNC4zLjIuNy40LDEsLjZhMTUuOTMsMTUuOTMsMCwwLDAsMTAuNywxLjUsMTUuNzUsMTUuNzUsMCwwLDAsMjYuNjktLjY2QTEwLjg1LDEwLjg1LDAsMCwwLDY4Ni44NiwzNWExMC44MiwxMC44MiwwLDAsMCw3LS40OHEuNy4zMSwxLjQxLjU4YzIuMTYsNi4yMSw5LjExLDEwLjI0LDE2LjY3LDkuMjhhMTYsMTYsMCwwLDAsMTIuNDgtOC40OSwxOS41NiwxOS41NiwwLDAsMCwxMC4zNywxLjQ1LDE5LjIzLDE5LjIzLDAsMCwwLDkuMzYtMy43OCwyMS42OSwyMS42OSwwLDAsMCwyLjkzLDAsMTMuNjcsMTMuNjcsMCwwLDAsMS42My0uMTYsMTAuODQsMTAuODQsMCwwLDAsMTUuMTMtMi45MSwxMC44LDEwLjgsMCwwLDAsNy4zMiwyLjE5LDI0Ljc5LDI0Ljc5LDAsMCwwLDMuNTIsMS40OCwyNS4wOSwyNS4wOSwwLDAsMCw4LjEsMS40aC42NUExOC41MSwxOC41MSwwLDAsMCw3OTUuOSwzOC4yLDE4LjgyLDE4LjgyLDAsMCwwLDgwOS4zNCwzMGMyLjY3LDEwLDEyLjc1LDE3LjQ0LDI0LjgsMTcuNDQsOS4zOCwwLDE3LjU3LTQuNSwyMi0xMS4yYTMyLDMyLDAsMCwwLDE0LDQuNCw0Ni45LDQ2LjksMCwwLDAsNDYuMSwxNy44OUE1NSw1NSwwLDAsMCwxMDAwLDczLjA3VjBaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDApIi8+Cjwvc3ZnPg==",
    "clouds-opacity":
      "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAwIDg2LjQ3IiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48ZyBzdHlsZT0ib3BhY2l0eTowLjMzIj48cGF0aCBkPSJNODIzLDE1LjUybC4yNC0uMDdBMjcuNzIsMjcuNzIsMCwwLDAsODY0LjMsMzAuNTNhNDYuOSw0Ni45LDAsMCwwLDUxLjksMjhBNTUsNTUsMCwwLDAsMTAwMCw3My4wN1YwSDc5MkM3OTUuNzksMTIsODA5LjMyLDE4Ljg1LDgyMywxNS41MloiLz48cGF0aCBkPSJNMjMuNzEsODMuNEE1MCw1MCwwLDAsMCw4NS4zOSw0OC43N3YtLjA1YTI1LjE5LDI1LjE5LDAsMCwwLDIwLjg5LTQuMzEsMzIuNjcsMzIuNjcsMCwwLDAsMTIuODIsN0EzMi44OCwzMi44OCwwLDAsMCwxNTQuMzEsMEgwVjY4LjY0QTQ5Ljc0LDQ5Ljc0LDAsMCwwLDIzLjcxLDgzLjRaIi8+PC9nPjxnIHN0eWxlPSJvcGFjaXR5OjAuNjYiPjxwYXRoIGQ9Ik00OTkuNjMsMTkuMTNoLjA4YTguOTEsOC45MSwwLDAsMCwxMi42NCw2LjE1QTE1LjA3LDE1LjA3LDAsMCwwLDUyOCwzNS45YTE3LjY3LDE3LjY3LDAsMCwwLDMzLjY3LTkuNTV2MEE4LjksOC45LDAsMCwwLDU2Ny44NiwyMmExMS42MSwxMS42MSwwLDAsMCw3LjQ4LTIySDUwMy4wOGExMS42NSwxMS42NSwwLDAsMC0xLjcxLDQuMjEsOS4yLDkuMiwwLDAsMC0zLjg1LS4yOGMtNC42NS42NS04LDQuNTgtNy4zNyw4Ljc3UzQ5NSwxOS43OCw0OTkuNjMsMTkuMTNaIi8+PHBhdGggZD0iTTYzMS41NSwyMC42N2MxLDcuNiw4LjY4LDEyLjg3LDE3LjIyLDExLjc4YTE2LjM1LDE2LjM1LDAsMCwwLDExLjQ1LTYuNzQsMTYuMzQsMTYuMzQsMCwwLDAsNy4wNywyLjE0QTEwLjg2LDEwLjg2LDAsMCwwLDY4Ni44NiwzNWExMC44MiwxMC44MiwwLDAsMCw4LjEtMWMxLjY4LDYuODMsOSwxMS40LDE3LDEwLjM4YTE2LDE2LDAsMCwwLDEyLjQ4LTguNDksMTkuNTYsMTkuNTYsMCwwLDAsMTAuMzcsMS40NSwxOS4yNCwxOS4yNCwwLDAsMCwxMS43Mi01Ljg5LDEwLjg1LDEwLjg1LDAsMCwwLDE3LjMzLS45MkExMC44MSwxMC44MSwwLDAsMCw3NzYsMzEuMmExNy42NCwxNy42NCwwLDAsMCwzLjM4LDEsMTguNTIsMTguNTIsMCwwLDAsMTYuNTIsNkExOC44MiwxOC44MiwwLDAsMCw4MDkuMzQsMzBjMi42NywxMCwxMi43NSwxNy40NCwyNC44LDE3LjQ0LDkuMzgsMCwxNy41Ny00LjUsMjItMTEuMmEzMiwzMiwwLDAsMCwxNi41Myw0LjUsMzEuNDcsMzEuNDcsMCwwLDAsMjAuMjMtNy4xNCwxNy43NSwxNy43NSwwLDAsMCwyOC4zMiwyLjA5LDE3Ljc0LDE3Ljc0LDAsMCwwLDIyLjcxLDEuNzVjNC4xMywxMC4wNSwxNSwxNy4yMiwyNy43MiwxNy4yMiwxMy40MywwLDI0Ljc1LTgsMjguMzMtMTguODhWMEg1OTkuMzJDNjA3Ljg0LDIzLjEzLDYzMS41NSwyMC42Nyw2MzEuNTUsMjAuNjdaIi8+PHBhdGggZD0iTS43NCwzMC43M2MwLDEyLjMzLDExLjIxLDIyLjMzLDI1LjA4LDIyLjM2LDEwLjg0LDAsMjAuMDgtNi4wNywyMy42MS0xNC42MkExNS4wOSwxNS4wOSwwLDAsMCw2OC43NCwzN2ExNS4xLDE1LjEsMCwwLDAsMjQuMS0xLjc0LDI2Ljc2LDI2Ljc2LDAsMCwwLDE3LjIsNi4xLDI3LjI0LDI3LjI0LDAsMCwwLDE0LjA3LTMuODEsMjIuMzMsMjIuMzMsMCwwLDAsMTguNzEsOS41NmMxMS4yNCwwLDIwLjQ5LTcuNTYsMjEuNjItMTcuMjhhMTQuOTIsMTQuOTIsMCwwLDAsMTAuNzIuMThjMy4yOSw3LjM1LDEyLjEsMTEuNjMsMjEuMjgsOS44MWEyMC4zMSwyMC4zMSwwLDAsMCwxMy42Mi05LjMzQTIwLjMxLDIwLjMxLDAsMCwwLDIxOSwzMi41NmExMy40OSwxMy40OSwwLDAsMCwyNC44Niw3LjI1LDEzLjQzLDEzLjQzLDAsMCwwLDEwLTEuOTFjMi42Niw4LjMyLDEyLjA2LDEzLjM3LDIxLjksMTEuNDJhMTkuOTMsMTkuOTMsMCwwLDAsMTQuNzUtMTEuNTgsMjQuMywyNC4zLDAsMCwwLDEzLC45MiwyMy44OCwyMy44OCwwLDAsMCwxNC04LjMsMTMuNDcsMTMuNDcsMCwwLDAsMjEuNC0yLjYxLDEzLjQ2LDEzLjQ2LDAsMCwwLDE3LjE3LTJjNC41Niw2Ljg4LDEzLjY5LDEwLjYzLDIzLjE4LDguNzYsMTIuMTQtMi40LDIwLjI2LTEzLjA5LDE4LjEzLTIzLjg4QTczLjkzLDczLjkzLDAsMCwwLDQwMC40OCwwSDBWMjkuNDlDLjI0LDI5LjkxLjQ4LDMwLjMyLjc0LDMwLjczWiIvPjwvZz48cGF0aCBkPSJNMTYuMywxMy45YzEwLjIsMi41LDIwLjMtMS4xLDI1LjUtOC4zYTE0LjY2LDE0LjY2LDAsMCwwLDE4LjUsM0ExNC42LDE0LjYsMCwwLDAsODAsMTQuOWExMy4xNCwxMy4xNCwwLDAsMCwzLjQtMi40LDI1LjcxLDI1LjcxLDAsMCwwLDE0LjgsOS43LDI2LDI2LDAsMCwwLDE0LjEtLjQsMjEuNzUsMjEuNzUsMCwwLDAsMTUuNCwxMy4zYzEwLjYsMi42LDIxLTIuNCwyNC4zLTExLjNhMTUsMTUsMCwwLDAsMTAuNywyLjYsMTcuNjksMTcuNjksMCwwLDAsMS42LDIuMiwxNC42OSwxNC42OSwwLDAsMCwxNy42LDMuNSw3LjQ2LDcuNDYsMCwwLDAsMS4yLS43LDE0LjU0LDE0LjU0LDAsMCwwLDYuNC04LjksMTIuNjEsMTIuNjEsMCwwLDAsLjQtMi44LDIwLjYzLDIwLjYzLDAsMCwwLDkuOC0xLjgsMTEuMzUsMTEuMzUsMCwwLDAsMS41LDIuM0EyMi4zNSwyMi4zNSwwLDAsMCwyMTQsMjguNmMxMS4yLDIuOCwyMi40LTMuMSwyNC44LTEzLjFhMjQuNjMsMjQuNjMsMCwwLDAsMTYuMywxMS42YzkuOCwyLjEsMTkuNC0xLjcsMjQuMi04LjdhMTQsMTQsMCwwLDAsMTcuOCwyLjQsMTQuMDcsMTQuMDcsMCwwLDAsMTkuMSw1LjQsMTIuMjUsMTIuMjUsMCwwLDAsMy4xLTIuNCwyMi41LDIyLjUsMCwwLDAsNS44LDUuMywyNS40MiwyNS40MiwwLDAsMCwxNi4xLDQsMzAuMzgsMzAuMzgsMCwwLDAsNi0xLjJjLjIuNC40LjkuNiwxLjNhMjAuODEsMjAuODEsMCwwLDAsMTQuNiwxMWMxMC4yLDIuMiwyMC0yLjksMjIuOS0xMS41YTEzLjg0LDEzLjg0LDAsMCwwLDEwLjMsMi4xLDE0LDE0LDAsMCwwLDE5LjMsNC42LDE0LjE3LDE0LjE3LDAsMCwwLDYuNy0xMS44LDIwLDIwLDAsMCwwLDkuMy0yLDIxLjMxLDIxLjMxLDAsMCwwLDE0LDkuOWMxMC42LDIuMywyMC45LTMuNCwyMy4yLTEyLjdhMjguNDYsMjguNDYsMCwwLDAsMzcuMiw3LjEsMjMuNTQsMjMuNTQsMCwwLDAsNy4zLTcuMSwxNS43OSwxNS43OSwwLDAsMCwyMC4xLDIuMSwxNS42OSwxNS42OSwwLDAsMCwyMS42LDUuNSwxMy44OCwxMy44OCwwLDAsMCwzLjUtMi45LDI2LjY2LDI2LjY2LDAsMCwwLDkuNSw3LjIsMjguNSwyOC41LDAsMCwwLDcsMi4yLDI5LjE2LDI5LjE2LDAsMCwwLDE1LjItMS4zYzIuOCw2LjYsOS4zLDExLjgsMTcuNSwxMy4zLDExLjQsMi4xLDIyLjItMy44LDI1LjMtMTMuNCwwLS4xLjEtLjIuMS0uNC4zLjIuNy40LDEsLjZhMTUuOTMsMTUuOTMsMCwwLDAsMTAuNywxLjUsMTUuNzksMTUuNzksMCwwLDAsMjguNy02Yy4xLS40LjEtLjguMi0xLjJhMTAuODcsMTAuODcsMCwwLDAsLjEtMS44LDIyLjI2LDIyLjI2LDAsMCwwLDEwLjQtMi42LDI1LDI1LDAsMCwwLDMuOSw0LjcsMjQuNjUsMjQuNjUsMCwwLDAsMTIuMiw2QTI0LjUsMjQuNSwwLDAsMCw3MTUuMywzNGExOS4wOSwxOS4wOSwwLDAsMCwxMC4yLTEzLjRoLjVhMjEuNjgsMjEuNjgsMCwwLDAsMjEuMSwxMywxMy42NywxMy42NywwLDAsMCwxLjktLjIsMjIuMSwyMi4xLDAsMCwwLDEzLjgtNy43LDI0Ljc5LDI0Ljc5LDAsMCwwLDExLjksOC41LDI1LjA5LDI1LjA5LDAsMCwwLDguMSwxLjQsMjUuODYsMjUuODYsMCwwLDAsMTguNS02LjcsMjEuNzcsMjEuNzcsMCwwLDAsNS4yLTcuMiwxNSwxNSwwLDAsMCwxOS4xLTEsMTUsMTUsMCwwLDAsMjEsMiwxMy44MSwxMy44MSwwLDAsMCwyLjgtMy4xQTI2Ljg0LDI2Ljg0LDAsMCwwLDg2Ni4zLDI2YTI3LjM5LDI3LjM5LDAsMCwwLDE0LTMuNCwyMi4zNiwyMi4zNiwwLDAsMCwxOC4zLDkuOWMxMS4xLjMsMjAuNC03LDIxLjgtMTYuNmExNSwxNSwwLDAsMCwxMS4yLjIsMTUsMTUsMCwwLDAsMjEuMSwxLDE1LjE2LDE1LjE2LDAsMCwwLDQuNy0xMy41QTIyLjMyLDIyLjMyLDAsMCwwLDk2Ni4zLDBIMFYxLjZBMjUuMjksMjUuMjksMCwwLDAsMTYuMywxMy45WiIvPjxwYXRoIGQ9Ik05ODMuNiw3LjNBMjIuNjEsMjIuNjEsMCwwLDAsMTAwMCwxLjFWMEg5NjcuM0EyMi41MiwyMi41MiwwLDAsMCw5ODMuNiw3LjNaIi8+PC9zdmc+",
    drip: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAwIDkxLjAxIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj4KICAgIDxwYXRoIGQ9Ik0yMTEsMjFhNDI5LjczLDQyOS43MywwLDAsMSw5NC0yYzc1LjgxLDYuNjYsOTQuNTYsMjUuNTEsMTAwLDMyLDE1LjIsMTguMTQsMTcuMzgsNDAuNjgsMjYsNDAsOS4xOC0uNzIsNy42Ni0yNi4zNiwyOC0zOSwxMy4wOC04LjEzLDI3LjY4LTYuMTksMjktNiwxOS41LDIuODYsMjIuNTMsMTguNCwzNiwxOCwxNS40Ny0uNDYsMTYtMjEuMDksMzUtMjcsMTguNjMtNS43OSwyOC40NiwxMC44Miw1NiwxMSwxNy43Ni4xMSwyNy42Ni02LjcsNDMtMTMsMS42Ny0uNjgsMjcuMy04LjMxLDU2LTE0LjQ5LDAsMCwyNS42LTUuNTIsNTgtOS41MSw0MS4zLTUuMDgsMTIyLjc4LTkuOTMsMjI4LTExSDBDOTYuMTEsMjcuMywxNjUsMjYuOTEsMjExLDIxWiIvPgo8L3N2Zz4=",
    "hill-invert":
      "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAwIDEwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMS4zLDEwMEgxMDAwVjc3LjRDMTAwMCw3Ny40LDI3My4xLTEwNi4xLDEuMywxMDB6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNNDk5LjksNTEiLz4KCTxwYXRoIGQ9Ik0wLDk0LjJ2NS44aDEwMDB2LTFDOTE3LjMsNzguNiwyNTYuNy03Ni44LDAsOTQuMnoiLz4KPC9zdmc+",
    "hill-wave":
      "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAwIDEwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+CjxwYXRoIGQ9Ik0wLDB2NjcuMjZjMjMuMzktMC43NiwzNS42LTEuMTMsMzYuNjItMS4xM3MxMC42LTcuMjIsMjguNzQtMjEuNjZMMTAyLDc4LjM3bDEwMC4zNC0zMy45bDY4LjExLDMzLjkKCWM4OC4zNC0yOS4yMywxMzMuMDktNDMuODUsMTM0LjI0LTQzLjg1YzEuMTUsMCwyNy4zNSwxNC42Miw3OC42MSw0My44NWwxMTYuMjgtMjMuMzZsNTMuNzQsMTIuMjVsNjIuMTEsMjMuNjhsMTA5LjAzLTQ2LjQ4CglsNjkuNzUsNDUuNTVMOTYzLjYzLDU1TDEwMDAsNjcuMjZWMEgweiIvPgo8L3N2Zz4K",
    hill: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAwIDEwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDk5LjksNTEiLz4KCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0wLDF2OTQuMmMyNTYuNy0xNzEsOTE3LjMtMTUuNiwxMDAwLDQuOFYxSDB6Ii8+Cgk8cGF0aCBkPSJNMCwxMDBoMS4zQzI3My4xLTEwNi4xLDEwMDAsNzcuNCwxMDAwLDc3LjRWMEgwVjEwMHoiLz4KPC9zdmc+",
    "line-wave":
      "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAwIDEwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+Cgk8cGF0aCBkPSJNMCwwdjI1LjhjNC4yLDEuMSw4LjEsNC4xLDExLDkuMWM2LjMsMTAuOCwxOSwxMC44LDI1LjMsMGM3LjQtMTIuOCwyMS45LTEyLjgsMjkuMywwYzYuMywxMC44LDE5LDEwLjgsMjUuMywwCgkJYzcuNC0xMi44LDIxLjktMTIuOCwyOS4zLDBjNi4zLDEwLjgsMTksMTAuOCwyNS4zLDBjNy40LTEyLjgsMjEuOS0xMi44LDI5LjMsMGM2LjMsMTAuOCwxOSwxMC44LDI1LjMsMGMzLjctNi40LDkuMi05LjYsMTQuNi05LjYKCQljNS41LDAsMTAuOSwzLjIsMTQuNiw5LjZjNi4zLDEwLjgsMTksMTAuOCwyNS4zLDBjNy40LTEyLjgsMjEuOS0xMi44LDI5LjMsMGM2LjMsMTAuOCwxOSwxMC44LDI1LjMsMGM3LjQtMTIuOCwyMS45LTEyLjgsMjkuMywwCgkJYzYuMywxMC44LDE5LDEwLjgsMjUuMywwYzMuNy02LjQsOS4yLTkuNiwxNC42LTkuNmM1LjUsMCwxMC45LDMuMiwxNC42LDkuNmM2LjMsMTAuOCwxOSwxMC44LDI1LjMsMGM3LjQtMTIuOCwyMS45LTEyLjgsMjkuMywwCgkJYzYuMywxMC44LDE5LDEwLjgsMjUuMywwYzcuNS0xMi45LDIyLTEyLjksMjkuMywwYzYuMSwxMC45LDE5LDEwLjgsMjUuMywwYzcuNC0xMi44LDIxLjktMTIuOCwyOS4zLDBjNi4zLDEwLjgsMTksMTAuOCwyNS4zLDAKCQljNy40LTEyLjgsMjEuOS0xMi44LDI5LjMsMGM2LjMsMTAuOCwxOSwxMC44LDI1LjMsMGM3LjQtMTIuOCwyMS45LTEyLjgsMjkuMywwYzYuMywxMC44LDE5LDEwLjgsMjUuMywwYzcuNC0xMi44LDIxLjktMTIuOCwyOS4zLDAKCQljNi4zLDEwLjgsMTkuMiwxMC45LDI1LjMsMGM3LjQtMTMuMywyMS45LTEzLjIsMjkuMywwYzYuMSwxMC45LDE5LDEwLjgsMjUuMywwYzcuNC0xMi44LDIxLjktMTIuOCwyOS4zLDBjNi4zLDEwLjgsMTksMTAuOCwyNS4zLDAKCQljNy40LTEyLjgsMjEuOS0xMi44LDI5LjMsMGM2LjMsMTAuOCwxOSwxMC44LDI1LjMsMGM3LjQtMTIuOCwyMS45LTEyLjgsMjkuMywwYzYuMywxMC44LDE5LDEwLjgsMjUuMywwYzcuNC0xMi44LDIxLjktMTIuOCwyOS4zLDAKCQljMS45LDMuMiw0LjMsNS41LDcsNi44VjBIMHoiLz4KCTxwYXRoIGQ9Ik05OTMsNDAuOWMtNy40LTEyLjgtMjEuOS0xMi44LTI5LjMsMGMtNi4zLDEwLjgtMTksMTAuOC0yNS4zLDBjLTcuNC0xMi44LTIxLjktMTIuOC0yOS4zLDBjLTYuMywxMC44LTE5LDEwLjgtMjUuMywwCgkJYy03LjQtMTIuOC0yMS45LTEyLjgtMjkuMywwYy02LjMsMTAuOC0xOSwxMC44LTI1LjMsMGMtNy40LTEyLjgtMjEuOS0xMi44LTI5LjMsMGMtNi4zLDEwLjgtMTksMTAuOC0yNS4zLDAKCQljLTcuNC0xMi44LTIxLjktMTIuOC0yOS4zLDBjLTYuMywxMC44LTE5LDEwLjgtMjUuMywwYy03LjQtMTIuOC0yMS45LTEyLjgtMjkuMywwYy02LjMsMTAuOC0xOSwxMC44LTI1LjMsMAoJCWMtNy40LTEyLjgtMjEuOS0xMi44LTI5LjMsMGMtNi4zLDEwLjgtMTksMTAuOC0yNS4zLDBjLTcuNC0xMi44LTIxLjktMTIuOC0yOS4zLDBjLTYuMywxMC44LTE5LDEwLjgtMjUuMywwCgkJYy03LjQtMTIuOC0yMS45LTEyLjgtMjkuMywwYy02LjMsMTAuOC0xOSwxMC44LTI1LjMsMGMtNy40LTEyLjgtMjEuOS0xMi44LTI5LjMsMGMtNi4zLDEwLjgtMTksMTAuOC0yNS4zLDAKCQljLTcuNC0xMi44LTIxLjktMTIuOC0yOS4zLDBjLTYuMywxMC44LTE5LDEwLjgtMjUuMywwYy0zLjctNi40LTkuMi05LjYtMTQuNi05LjZjLTUuNSwwLTEwLjksMy4yLTE0LjYsOS42CgkJYy02LjMsMTAuOC0xOSwxMC44LTI1LjMsMGMtNy40LTEyLjgtMjEuOS0xMi44LTI5LjMsMGMtNi4zLDEwLjgtMTksMTAuOC0yNS4zLDBjLTcuNC0xMi44LTIxLjktMTIuOC0yOS4zLDAKCQljLTYuMywxMC44LTE5LDEwLjgtMjUuMywwYy0zLjctNi40LTkuMi05LjYtMTQuNi05LjZjLTUuNSwwLTEwLjksMy4yLTE0LjYsOS42Yy02LjMsMTAuOC0xOSwxMC44LTI1LjMsMAoJCWMtNy40LTEyLjgtMjEuOS0xMi44LTI5LjMsMGMtNi4zLDEwLjgtMTksMTAuOC0yNS4zLDBjLTcuNC0xMi44LTIxLjktMTIuOC0yOS4zLDBjLTYuMywxMC44LTE5LDEwLjgtMjUuMywwCgkJYy03LjQtMTIuOC0yMS45LTEyLjgtMjkuMywwYy02LjMsMTAuOC0xOSwxMC44LTI1LjMsMGMtMi45LTQuOS02LjgtOC0xMS05LjFWMzhjNC4yLDEuMSw4LjEsNC4xLDExLDkuMWM2LjMsMTAuOCwxOSwxMC44LDI1LjMsMAoJCWM3LjQtMTIuOCwyMS45LTEyLjgsMjkuMywwYzYuMywxMC44LDE5LDEwLjgsMjUuMywwYzcuNC0xMi44LDIxLjktMTIuOCwyOS4zLDBjNi4zLDEwLjgsMTksMTAuOCwyNS4zLDBjNy40LTEyLjgsMjEuOS0xMi44LDI5LjMsMAoJCWM2LjMsMTAuOCwxOSwxMC44LDI1LjMsMGMzLjctNi40LDkuMi05LjYsMTQuNi05LjZjNS41LDAsMTAuOSwzLjIsMTQuNiw5LjZjNi4zLDEwLjgsMTksMTAuOCwyNS4zLDBjNy40LTEyLjgsMjEuOS0xMi44LDI5LjMsMAoJCWM2LjMsMTAuOCwxOSwxMC44LDI1LjMsMGM3LjQtMTIuOCwyMS45LTEyLjgsMjkuMywwYzYuMywxMC44LDE5LDEwLjgsMjUuMywwYzMuNy02LjQsOS4yLTkuNiwxNC42LTkuNmM1LjUsMCwxMC45LDMuMiwxNC42LDkuNgoJCWM2LjMsMTAuOCwxOSwxMC44LDI1LjMsMGM3LjQtMTIuOCwyMS45LTEyLjgsMjkuMywwYzYuMywxMC44LDE5LDEwLjgsMjUuMywwYzcuNC0xMi44LDIxLjktMTIuOCwyOS4zLDBjNi4zLDEwLjgsMTksMTAuOCwyNS4zLDAKCQljNy40LTEyLjgsMjEuOS0xMi44LDI5LjMsMGM2LjMsMTAuOCwxOSwxMC44LDI1LjMsMGM3LjQtMTIuOCwyMS45LTEyLjgsMjkuMywwYzYuMywxMC44LDE5LDEwLjgsMjUuMywwYzcuNC0xMi44LDIxLjktMTIuOCwyOS4zLDAKCQljNi4zLDEwLjgsMTksMTAuOCwyNS4zLDBjNy40LTEyLjgsMjEuOS0xMi44LDI5LjMsMGM2LjMsMTAuOCwxOSwxMC44LDI1LjMsMGM3LjQtMTIuOCwyMS45LTEyLjgsMjkuMywwYzYuMywxMC44LDE5LDEwLjgsMjUuMywwCgkJYzcuNC0xMi44LDIxLjktMTIuOCwyOS4zLDBjNi4zLDEwLjgsMTksMTAuOCwyNS4zLDBjNy40LTEyLjgsMjEuOS0xMi44LDI5LjMsMGM2LjMsMTAuOCwxOSwxMC44LDI1LjMsMGM3LjQtMTIuOCwyMS45LTEyLjgsMjkuMywwCgkJYzYuMywxMC44LDE5LDEwLjgsMjUuMywwYzcuNC0xMi44LDIxLjktMTIuOCwyOS4zLDBjMS45LDMuMiw0LjMsNS41LDcsNi44di02LjJDOTk3LjMsNDYuNCw5OTQuOSw0NC4xLDk5Myw0MC45eiIvPgoJPHBhdGggZD0iTTk5MSw1MC45Yy02LjMtMTAuOC0xOS0xMC44LTI1LjMsMGMtNy40LDEyLjgtMjEuOSwxMi44LTI5LjMsMGMtNi4zLTEwLjgtMTktMTAuOC0yNS4zLDBjLTcuNCwxMi44LTIxLjksMTIuOC0yOS4zLDAKCQljLTYuMy0xMC44LTE5LTEwLjgtMjUuMywwYy03LjQsMTIuOC0yMS45LDEyLjgtMjkuMywwYy02LjMtMTAuOC0xOS0xMC44LTI1LjMsMGMtNy40LDEyLjgtMjEuOSwxMi44LTI5LjMsMAoJCWMtNi4zLTEwLjgtMTktMTAuOC0yNS4zLDBjLTcuNCwxMi44LTIxLjksMTIuOC0yOS4zLDBjLTYuMy0xMC44LTE5LTEwLjgtMjUuMywwYy03LjQsMTIuOC0yMS45LDEyLjgtMjkuMywwCgkJYy02LjMtMTAuOC0xOS0xMC44LTI1LjMsMGMtNy40LDEyLjgtMjEuOSwxMi44LTI5LjMsMGMtNi4zLTEwLjgtMTktMTAuOC0yNS4zLDBjLTcuNCwxMi44LTIxLjksMTIuOC0yOS4zLDAKCQljLTYuMy0xMC44LTE5LTEwLjgtMjUuMywwYy03LjQsMTIuOC0yMS45LDEyLjgtMjkuMywwYy02LjMtMTAuOC0xOS0xMC44LTI1LjMsMGMtNy40LDEyLjgtMjEuOSwxMi44LTI5LjMsMAoJCWMtNi4zLTEwLjgtMTktMTAuOC0yNS4zLDBjLTcuNCwxMi44LTIxLjksMTIuOC0yOS4zLDBjLTYuMy0xMC44LTE5LTEwLjgtMjUuMywwYy03LjQsMTIuOC0yMS45LDEyLjgtMjkuMywwCgkJYy02LjMtMTAuOC0xOS0xMC44LTI1LjMsMGMtNy40LDEyLjgtMjEuOSwxMi44LTI5LjMsMGMtNi4zLTEwLjgtMTktMTAuOC0yNS4zLDBjLTcuNCwxMi44LTIxLjksMTIuOC0yOS4zLDAKCQljLTYuMy0xMC44LTE5LTEwLjgtMjUuMywwYy03LjQsMTIuOC0yMS45LDEyLjgtMjkuMywwYy02LjMtMTAuOC0xOS0xMC44LTI1LjMsMGMtNy40LDEyLjgtMjEuOSwxMi44LTI5LjMsMAoJCWMtNi4zLTEwLjgtMTktMTAuOC0yNS4zLDBjLTcuNCwxMi44LTIxLjksMTIuOC0yOS4zLDBjLTYuMy0xMC44LTE5LTEwLjgtMjUuMywwYy03LjQsMTIuOC0yMS45LDEyLjgtMjkuMywwCgkJYy0yLjMtNC01LjUtNi41LTguOS03LjZWNDljNC4yLDEuMSw4LjEsNC4xLDExLDkuMWM2LjMsMTAuOCwxOSwxMC44LDI1LjMsMGM3LjQtMTIuOCwyMS45LTEyLjgsMjkuMywwYzYuMywxMC44LDE5LDEwLjgsMjUuMywwCgkJYzcuNC0xMi44LDIxLjktMTIuOCwyOS4zLDBjNi4zLDEwLjgsMTksMTAuOCwyNS4zLDBjNy40LTEyLjgsMjEuOS0xMi44LDI5LjMsMGM2LjMsMTAuOCwxOSwxMC44LDI1LjMsMGMzLjctNi40LDkuMi05LjYsMTQuNi05LjYKCQljNS41LDAsMTAuOSwzLjIsMTQuNiw5LjZjNi4zLDEwLjgsMTksMTAuOCwyNS4zLDBjNy40LTEyLjgsMjEuOS0xMi44LDI5LjMsMGM2LjMsMTAuOCwxOSwxMC44LDI1LjMsMGM3LjQtMTIuOCwyMS45LTEyLjgsMjkuMywwCgkJYzYuMywxMC44LDE5LDEwLjgsMjUuMywwYzMuNy02LjQsOS4yLTkuNiwxNC42LTkuNmM1LjUsMCwxMC45LDMuMiwxNC42LDkuNmM2LjMsMTAuOCwxOSwxMC44LDI1LjMsMGM3LjQtMTIuOCwyMS45LTEyLjgsMjkuMywwCgkJYzYuMywxMC44LDE5LDEwLjgsMjUuMywwYzcuNC0xMi44LDIxLjktMTIuOCwyOS4zLDBjNi4zLDEwLjgsMTksMTAuOCwyNS4zLDBjNy40LTEyLjgsMjEuOS0xMi44LDI5LjMsMGM2LjMsMTAuOCwxOSwxMC44LDI1LjMsMAoJCWM3LjQtMTIuOCwyMS45LTEyLjgsMjkuMywwYzYuMywxMC44LDE5LDEwLjgsMjUuMywwYzcuNC0xMi44LDIxLjktMTIuOCwyOS4zLDBjNi4zLDEwLjgsMTksMTAuOCwyNS4zLDBjNy40LTEyLjgsMjEuOS0xMi44LDI5LjMsMAoJCWM2LjMsMTAuOCwxOSwxMC44LDI1LjMsMGM3LjQtMTIuOCwyMS45LTEyLjgsMjkuMywwYzYuMywxMC44LDE5LDEwLjgsMjUuMywwYzcuNC0xMi44LDIxLjktMTIuOCwyOS4zLDBjNi4zLDEwLjgsMTksMTAuOCwyNS4zLDAKCQljNy40LTEyLjgsMjEuOS0xMi44LDI5LjMsMGM2LjMsMTAuOCwxOSwxMC44LDI1LjMsMGM3LjQtMTIuOCwyMS45LTEyLjgsMjkuMywwYzYuMywxMC44LDE5LDEwLjgsMjUuMywwYzcuNC0xMi44LDIxLjktMTIuOCwyOS4zLDAKCQljMS45LDMuMiw0LjMsNS41LDcsNi44di01LjZDOTk2LjYsNTcuOCw5OTMuNCw1NSw5OTEsNTAuOXoiLz4KPC9zdmc+Cg==",
    "paper-torn":
      "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAwIDgwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj4KICAgIDxwYXRoIGQ9Ik0wLDBWNzEuMDdsLjIyLjA1YzIuODMsMSw3LjQ1LTQuNTcsNy40NS00LjU3czEzLjM2LDYuMzQsMTQuOSw2LjZTMzAsNzYuNDUsMzAsNzYuNDVMMzYuNyw3MS41czUuNCw2LDgsNC45NSwxNi4xOS04Ljg4LDE3LjczLTMuNTVTNjQuMiw4MCw2NSw4MHM1LjQtNS41OSw2LjQyLTUuNTksMTEsMi43OSwxMS44MiwyLjc5LDcuNzEtNS44NCw5LjI1LTYuNiwxOC4yNC41MSwyMi4xLDIuNjYsMTQuMTMuMTMsMTkuNzksMCwyNS4xOCwxLjksMjUuMTgsMS45bDguNDgtMS45czAtNS40NiwxLjgtNS4yLDkuMjUuNTEsOS4yNS41MUwxODAuMzQsNjVzMjAuODEsMiwyMi4xLDIsMi4zMS0zLjgxLDQuMzctMy44MSwxNC4xMywzLjgxLDE1LjQyLDMuODEsOS4yNS0zLjU1LDExLjU2LTMuODEsOC40OCw1LjA4LDEwLjI4LDUuNTgsNTUtNi42LDU1LTYuNi0uMjYtNS4zMyw0Ljg4LTMuNTUsMTUuMTYsMS4yNywxOS41MywyLDMuMzQsNi4zNCw3LjcxLDIuNTQsNS42NS03LjM2LDguMjItNi4wOSwxMC4yOCwyLjI4LDExLDIuMjgsNC4zNy04LjEyLDcuMTktNi42LDIxLjU5LDEyLjUsMzAuMDYsMTMuNDgsMTMuMS0xMC40NCwxMy4xLTEwLjQ0bDEzLjEsMi41NHM3LjcxLDEwLjE1LDE2LjE5LDExLjE3LDExLDYuMzQsMTkuMjcsMy41NSwxNy43My05LjM5LDIwLTguMzgsMTcuNDctNi42LDE4LjI0LTYuODUsOC43NC43NiwxNi40NC4yNSw5LjUxLTUuNTIsOS41MS01LjUyLDI1LjY5LTEuMDgsMjguNzgsMS4yMSwzLjYsNC4zMSw2LjY4LDQuMzEsMTIuMzMtNS44NCwyMi4zNS0zLjU1LDI2LDYuMzQsMjcuNDksNy4xMSwxMC4yOC01LjU4LDEwLjI4LTUuNTgsNS4xNCw0LjU3LDYuNDIsNS44NCw2LjE3Ljc2LDkuMjUsMCwzLjg1LTkuMTQsMTAtNS4wOCwyMC4zLTUuMDgsMjUuNDQsMVM2NjcsNjQsNjY3LDY0czYuNjgtMTEuNDIsMTQuMzktOS45UzcxMC4xNiw2Ni4yLDcxMC4xNiw2Ni4ybDYuNDItNS40OSwyNy4yNC0xLjI3cy0xLjI4LTcuMTEsNi4xNy01LjMzLDEwLS44OSwxMS0xLjcxLDUuMTQtMy40OSw5LDAsMjUuNDQsOC4zMSwzMi44OSw4LjMxLDE1LjkzLTYuMzUsMjIuNjEtNC41NywxMy4zNi0xLjUyLDE0LjM5LTItLjc3LTQuNjUsNi40Mi0zLjQ3LDE5LS43NiwyMC41OC0uMjUsNi4xNy0uNzYsMTEuMzEtMS43OCw2LjM0LTExLjYzLDEyLjI1LTQuMjcsOC42OCw1LjI4LDExLjUxLDYuNzQsNy40NSwxLjMzLDkuMjUsMC0xLjU0LTcuOTMsNy4xOS01LjM5LDQuMTcsMy40OCwxMC4wOCwzLDE0LjEzLDQuMDYsMTQuMTMsNC4wNiwxMC43OS0yLDEzLjExLTIuMjgsOS4yNS00LjU3LDEyLjU5LTIuNzksNi4xNywxLjUyLDksMi4yOCwxMC0uNTEsMTEuODItMS43OCwyLjU3LTYuMzUsNy43MS0zLjU1YTExLjkxLDExLjkxLDAsMCwxLDMuMTQsMi4xOFYwWiIgc3R5bGU9Im9wYWNpdHk6MC42NiIvPgogICAgPHBhdGggZD0iTTAsMFY1OS4xN2M0Ljg0LTMsNC4wOCwxLDUuMzYtLjIzczAsMCwyLjU3LTEuMjcsMy4wOC41MSw3LjE5LDEsMi44MywyLjU0LDIuODMsMi41NCw4Ljc0LDUuMDgsMTAuMjgsNC41Nyw0Ljg4LTkuMTQsNC4zNy0xMC4xNVM0MCw2MS4yMiw0MCw2MS4yMmw0LjM3LDMuM3M5Ljc2LDIsMTEsMWE1OS4xMSw1OS4xMSwwLDAsMSw4LTQuNTdjMS44LS43Niw0LjExLDIuMjgsNi42OCwyLjc5czguNzQsMy44MSw4Ljc0LDMuODFTOTAuOTIsNjAuNzEsOTQsNjAuMjFzMTYuNywzLjU1LDE3LjQ3LDIsMTEuODItMywxMy4xLTIuNzksOC40OCwxMC45MSw4LjQ4LDEwLjkxbDMwLjgzLS41MXM2LjY4LTYuMDksNy40NS03LjYxLjI2LTEuNzguMjYtMS43OCw5LTQuNTcsMTAtNC41N1MxOTMuMTgsNjEsMTkzLjE4LDYxczEwLjU0LTQuMDYsMTQuMzktNS4wOCw2LjY4LDEuNTIsMTIuODUtMiwxOS43OS0yLjc5LDIwLjU2LTMuMyw3LjQ1LTYuMzQsMTIuODUtOS4zOSwxMS4zMS43NiwxMy4xLjc2LDcuNzEsNS4zMywxMC43OSw0LjU3LDEwLjI4LTUuMzMsMTMuNjItNS4zMywyLjgzLDIuMjgsMTAuMjgsMS43OCw1LjkxLjUxLDEyLjU5LDQuMzIsOC0yLjI5LDEyLjg1LTMuNTUsMS44LjI1LDQuNjMtLjUxYTE5LDE5LDAsMCwxLDUuNjUtLjc2YzEuMjksMCwyLjU3LDEuNTIsOC43NCwzLjU1czUuOTEtLjc2LDkuMjUtMS43OCw4LjIyLTMuMywxOC43Ni0xMC4xNSwyLjU3LDUuMzMsNi45NCw2Ljg1LDIyLjg3LDMuNTUsMjQuNDEsMiw0LjM3LTMsNy4yLTQuNTcsMi44Mi0uNTEsMy41OS0uNTEsOSwyLjU0LDExLjMxLDQuMDYsMy44NSw0LjU3LDYuMTcsNC41Nyw0LjYyLTIuNTQsMTEtMy41NS0uMjYsNC44MiwwLDUuNTgsMi4wNiwwLDUuNC0uMjUsNC44OC0yLjc5LDkuNzYtMi43OSw1LjE0LDMuMyw4LjQ4LDQuMDYsMi44MywwLDEwLjU0LTMuODEsNi42OC0xLjc4LDE0LjktMy41NSwyMi42MSw2Ljg1LDI0LjQxLDYuMDksNC44OC0xLjI3LDExLjMtMi41NCwxMS41NiwzLDE2LjE5LDUuNTgsNS4xNC0xLjUyLDguNzQtNS4wOCwxMi4wOC4yNSwxNC45LjI1LDkuMjUtLjI1LDEzLjM2LS41MSw1LjE0LTMsMTMuODgtNS4wOCw4LDQuNTcsMTQuNjUsMy41NSwxNC4xMy0xLjI3LDI4LTUuMDgsNi40MiwzLDEwLjc5LDUuNTgsOSwxLjc4LDExLjU2LDEuNTJTNjc2LDM5LjY1LDY3OS44NCwzNi4zNXM5LjUxLDQuMzEsMTYuMTksOC4xMiw5LjI1LDMuODEsMTQuMTMsMS43OCw5LjUxLTQuODIsMTQuOS03Ljg3LDUuNCw1Ljg0LDEwLDIuNzksMTUuNDIuNzYsMTcuMjEtLjI1LDguNDguNzYsMTUuNDItMSwxLjgsMiw3LjQ1LDYuODUsMy4wOC0yLjI5LDE1LjQyLDEsMjguNTItMi4yOSwzMi44OS0zLDQuODgsNS4zMyw5LjI1LDUuODQsNS40LTQuODIsOS43Ni03Ljg3LDE3LS43NiwyMC41Ni0yYTE3LjIyLDE3LjIyLDAsMCwwLDYuMTctNC4wNnMxMy4zNiwwLDE1LjE2LTEuNTIsMTAuMjgtLjc2LDEzLjM2LS43NiwyNiw0LjU3LDM1LjIsMi43OSwxMS44Mi03LjYyLDE2LjQ0LTEwLjkxLDIzLjEzLDIuNTQsMzAuMzIsMi41NCwyMC4zLTIuNTQsMjAuMy0yLjU0VjBaIi8+Cjwvc3ZnPg==",
    "pointy-wave":
      "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyODMgMjAuOTkiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPgogICAgPHBhdGggZD0iTTAsMFY5Ljc1YzYuMzQsMS43MywxNC4yLDUsMTguNTcsMTAuNTgsMTQtMTkuNCw0OS4xLTEzLjQ0LDYzLjA5LTEuOTMsMjUuNzYtMTcuMDUsNTIuODctOC40NSw2Mi4wOSwyLjYsMTctMTcuODEsNTcuOC0xMy4xMyw3MC43NS0uMjEsMi42Mi02LjIyLDM5LjI5LTIxLjU0LDU1LS41OCw2Ljc5LTcsOS42NC04LjQ5LDEzLjQ2LTkuMjFWMFoiLz4KPC9zdmc+",
    "rocky-mountain":
      "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAwIDkwLjEzIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj4KICAgIDxwYXRoIGQ9Ik0xLjMyLDg1LjUsNSw4OWM0LjA4LDAsOC43LjkyLDEwLjQyLTEuOC42NS0xLDIuODUtLjEsMy40Ny4zOSwyLjI4LDEuODMsNS40OSwxLjY1LDkuMTMuOS0uODktMi43Nyw1LjcyLTQuNDMsNi4wOC03VjgwYy0yLjUxLTEuMTYtLjUzLTIuNzEtMi00LS44Mi0uNy43Mi0xLjA4LDIuMzUtLjU2LDIuNzcuOSw0LjcsMiw0LjU1LDMuNTdsMS4yMywyYzMsMS4yMSw3LjI0LDEuNzQsMTAuOSwzLjgzLDAtMi4wNywwLTMuNDIsMC00Ljc4LjA4LTEuNTIsMS4wOC0yLjI5LDUuMTEtMS4yMyw0LjU5LDEuMiw1LjU0Ljg5LDUuODMtMS40NC4xOC0xLjQ0LTEuNjgtMy40NSw0LjgtMy40LDMuNTMtMS4zNywxLjY1LTMuNDgsNC4xNC01LjExLDIuODQuMjYsNC43MSwxLDUuNDEsMi4xNiwxLDEuNjMsMy4yNiwxLjY0LDYuMjIsMWE0LjI2LDQuMjYsMCwwLDEsMi40MS0uNWMxLjE0LTEuMTMsNC43OS0xLjU3LDQuODYtMy0yLjE0LS45My0xLTItLjk0LTMuMjksMi44OC43MywzLjMzLDEuNzIsMy4zNSwyLjhoMGMxLjQ3LDEuMTMsMi40NywyLjQyLDYuNDQsMi41MSw0LjE5LjEsNS0xLjI5LDYuNjEtMi4zNGEuNzguNzgsMCwwLDEsLjMtLjE5VjY3YzAtMS4yNC0uMTgtMi43OSwyLjY4LTMuM3M0LjE5LDEsNS44LDEuNzVhOCw4LDAsMCwwLDUuNzQuNjNjNC4yMS0xLjA2LDkuMTEtMSwxMy42Mi0xLjYsMy41OC0uNDcsNy4xOS0uOSwxMC43MS0xLjQyLDUuNjQtLjgzLDkuNDQtMyw5LjM1LTUuNS0uMDYtMS42Ni44Ni0zLjA5LDQuMi00LjEzLjE0LTEsMS43MS0xLjU2LDMuNjUtMiwyLTEsMy0yLjM3LDYtMywuMzUtMS4yNiwyLjYxLTEuODgsNC44NC0yLjUxaDBjLjEzLTEsMS43My0xLjU2LDMuNjQtMmEzMC4yLDMwLjIsMCwwLDEsMTEuNzQtNi43MmM0LjctMS40OCw4LjM3LTMuNTIsMTIuNS01LjMxaDBjLjcyLTEuMzgsMi43My0yLjIyLDYuMDgtMi41MSwzLjMxLTEsNy41LS4yNSwxMC45MS0xbDMuNjUtMWM3LjQ0LTIuMTEsMTMuOTItNC44NywyMi43My02LjA4LDEuNzcsMS4yNy0zLC42OS0xLjkxLDEuNTYsMS4zMywxLDQuMjUuNDMsNi40Mi43NC00LjE1LDEuNjUtOC40LDMuMDgtOC41Niw1LjY0LDAsLjM5LTEuOTIuNzctMywxLjE1LTEuNTQuNDUtNC41OS41MS00LjEsMS41MXMzLjIxLjU5LDQuNzMuNDZjNi4zNS0uNTUsNiwxLjcxLDcuODksMywzLjYzLjIzLDcuNS0uNDksMTAuOTIuNWg0LjgyYzIuMjYtMi41MSw4LjA2LTMuNjgsMTIuMTMtNS41LDEuNDEtLjY0LDIuMTUtMS42Niw0LjkxLTEuNTYsMi0xLjU3LDYuMjItMS44Niw5LjUxLTIuNjksMi4xNC0uNTQsNC45NC0uNyw2LjItMS43Nyw0LS4zNiw2LjE3LTEuODYsOS42NS0yLjUzYTM1LjksMzUuOSwwLDAsMSwxMy4zNy0zLjQ5bDIuMzUtLjUzYy4xMy0uNjMuOTQtMSwyLjUtMSwyLjA5LS45LDQuNzQtLjM1LDcuMTQtLjQ5LjYxLS4zMywxLjk0LS4xOCwyLjU2LS41MSw3LjYyLjIyLDEzLjk0LTEuMzksMjAuNi0yLjUxLDEuNjItLjczLDMuMjQuNTEsNC44NSwwbDYuMDcsMWMxLjUyLjg3LS41LDEuMzctMS4yMiwyaC0xLjIxYy0xLjE0LDEuNTYtNC41OCwxLjIzLTcuMjcsMS41YTEzLjgyLDEzLjgyLDAsMCwxLTIuNDMsMmwtMS4yMS41Yy0xLC41LTEuNTMsMSwwLDEuNWE2MS4zMiw2MS4zMiwwLDAsMCwxNC41NS0xYzEuODYtLjIzLDQtLjkxLDQuODUuNS0xLjI5LDEtMy41NywxLjMzLTYuMDYsMS41MS0xLjYuODQtMywxLjc0LTQuODYsMi41MWgwYzEuMTQuMywyLjYxLDEsMy4zNy44NCw1LjI5LS44Miw2LjIuNzYsNy41LDIuMTdoLjA2YzEuODktLjMyLDIsLjM4LDIuNC45NSw1LDEuMjYsNy0xLjMsMTAuOTEtMS41LDEuNzYuMzksMS43Ni4zOSwxLjIyLDIuNTEtMi4zOS43Ny0yLjI1LDIuMy01LjM4LDIuOTQsNy43NC4wOSwxMy0yLjM1LDE5LjkyLTIuOTRhMS41OCwxLjU4LDAsMCwxLDEuNCwwYzYuNjUtLjQ5LDEzLjMtMSwyMC0xLjQ3YTE0LjYxLDE0LjYxLDAsMCwwLDUuMzItMWw0LjgyLS41MywyLjQ2LTEuNDRjNS41NC0uOSw5LTMuMTEsMTQuNDUtNEE0My44NCw0My44NCwwLDAsMSw0NjgsMTkuMjhhMTQuNzcsMTQuNzcsMCwwLDAsNC44NCwyYy0uMSwyLjUyLDQuNzEsNC4yNCw2LjE1LDYuNSwxLjcyLjg0LDEuODUsMS42OSwwLDIuNTIsMCwxLjc2LDIuNDksMi4wOCw2LDEuNzVhMy41NiwzLjU2LDAsMCwwLC41Ny0uMDljMTMuNDEtMi40OCwyNy43Mi0yLDQxLjgzLTIuMTksNS42NS0uNjMsMTEuOC0uNTUsMTYuODktMmwyLjU2LTIuNDhjOS42LTQuNTUsMjIuNDgtNi4yMiwzNi4zLTcuMDdoMGMxMS4zNi00LjMsMjQuMS00LDM3LjI4LTIuMjFhNy4xLDcuMSwwLDAsMSwxLjYyLjIybDEwLjgtLjVjNS40MS0xLjY5LDExLjIyLS44NywxNy0uNDdsMS4zNSwxLDMuNTYsMWEyNDcuOTEsMjQ3LjkxLDAsMCwxLDI3LjgzLDQuMDcsOC4xOCw4LjE4LDAsMCwwLDMuNjEsMS41MWwuMDcuNzNoLjE4YzEuNzUuMTcsMy4xNy44Nyw1LC44LDEyLjM2LS41LDE5LjUxLDMuMTksMjcuODksNS44OGEyMS4xMiwyMS4xMiwwLDAsMCw0LjQ3LDEuMjEsNjAuODMsNjAuODMsMCwwLDEsMTcsNC40NGwxLjIuNDNjMy40NCwxLjc1LDcuNjUsMy4yMSwxMC45LDVoMGMuNjkuMjYuNzguNTcuNDguOTFsLS4yOS4wOWM3LjQ0LDIuNjgsMTYuMDcsNC44NSwyMS4yMyw4LjU0LDEuMTQuODEsMy41MiwxLjMxLDUuMzIsMkg3ODJjNi43NC0xLDEzLjQ5LTIuMDcsMjAuNjYtMi41di0uNDljMS42OC0uMDYsMy41Ni4yMSw0Ljg1LS41LDEuNjgtLjA2LDMuNTYuMjEsNC44NS0uNWE2MS4zMyw2MS4zMywwLDAsMCwxNC41NC0xLjUxbDMxLjUyLTMuNTFhMjQ5LjkzLDI0OS45MywwLDAsMSwyOS4wNy0xdi40OWM2LjU2LDEuMiw2LjY1LDEuNzcsMi4xMSw0LTIuMywxLjEyLTguMTUsMS43NS00LjU2LDQuMDZoMS4yMmMyLjQzLjE3LDQuODUuODMsNy4yOCwwLDIuMTYtLjEyLDUuMjktMSw0Ljg1LDFhNi42OCw2LjY4LDAsMCwxLTMuMTEuNTNjLTUuMjMuMTctOC4yOSwxLjMxLTksMy40OC4zNy4yMi4zNi4zOSwwLC41MWgwbDIuNDQsMS40OGE0Ni40Miw0Ni40MiwwLDAsMSw5LjY3LDJoMGM0LjUuOTIsOC40MS0uNjksMTIuNzYtLjUxLDIuMTkuMDksNC40MSwwLDYuNjIsMCwuMzguMTEuNDkuMjIuMzguMzNhLjU3LjU3LDAsMCwxLS4zOC4xN2MtLjg4LjkxLTMuMDgsMS4wOS00Ljg1LDEuNS0zLjE1LjU5LTYuMzcsMS4xMS05LjcsMS41MWwtNC44NC41aC0xLjI2Yy00LC4xNi0zLjYxLDEuMzctMy41NywyLjUxLDQuNzEsMS4zNSw4LjgzLDIuODUsOC41LDUuNTNhMzYuNTIsMzYuNTIsMCwwLDAsOC40MywxLjUyYzMuMi44Mi0uNzQsMi45LDMuNjUsMy41MWgyLjQ1YzQuMjEuNCw4LjMyLTEuMDksMTMuMjEtLjExLTIuNjgsMS00LjQ3LDIuMjMtOC4zNiwyLjEyLTEuNDQuMzctMS4xNywxLTEuMjMsMS41Mi4zNSwyLjI5LDIuMjMsNCw4LjYsNC4zMUEyNS43NCwyNS43NCwwLDAsMSw5MzUuOTUsODZjNS40OS0uMDksMTAuODQuMTMsMTYuMzYtLjgyLDQuNzctLjgyLDEwLjA4LjQ4LDE1LjE0Ljg0LDUuMzItLjIyLDEwLjUxLjI5LDE1Ljc0LjUxVjg3YzUuNjYtLjM5LDUuMTksMi4xNyw4LjM1LDNsLjEzLS4wOWE0LjMsNC4zLDAsMCwxLDIuNDUuMDdsLjMuMTNhMS41MiwxLjUyLDAsMCwxLS4xLS4zMWMxLjg5LS4xMSwzLjU5LS44Myw1LjY4LS4zNlYwSDBWODQuNDRBMS44MiwxLjgyLDAsMCwxLDEuMzIsODUuNVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTAuMDEpIi8+Cjwvc3ZnPg==",
    "single-wave":
      "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAwIDk5IiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj4KICAgIDxwYXRoIGQ9Ik01MjYuMzUsMTcuMTFDNjA3LjQxLDI4LjM4LDY4Nyw0OC4xNyw3NjguMDYsNTkuNUExMTQ5LjE5LDExNDkuMTksMCwwLDAsMTAwMCw2OC4wN1YwSDBWOTlDMTU1LjE4LDEzLjg0LDM0Ny40Mi03Ljc3LDUyNi4zNSwxNy4xMVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMC4wNCkiLz4KPC9zdmc+",
    "slope-opacity":
      "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAwIDEwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+CiAgICA8cGF0aCBkPSJNMCwyMi4zVjBIMTAwMFYxMDBaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDApIiBzdHlsZT0ib3BhY2l0eTowLjY2Ii8+CiAgICA8cGF0aCBkPSJNMCw2VjBIMTAwMFYxMDBaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDApIi8+Cjwvc3ZnPg==",
    slope:
      "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAwIDEwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+CiAgICA8cGF0aCBkPSJNMCw2VjBIMTAwMFYxMDBaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDApIi8+Cjwvc3ZnPg==",
    swirl:
      "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAwIDEwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+CjxwYXRoIGQ9Ik0wLDB2MzEuMWM0LjctMywxMC4zLTQuNiwxNi00LjZjMy40LDAsNi42LDAuNiw5LjgsMS43YzkuNCwzLjMsMTMuOSwxMS42LDEwLjksMTkuOGMtMiw1LjMtNy4xLDguOC0xMi45LDguOAoJYy0wLjMsMC0wLjcsMC0xLDBjLTMtMC4yLTUuNS0xLjQtNi45LTMuMkMxNC42LDUyLDE0LjQsNTAsMTUuMiw0OGMwLjEtMC4yLDAuMi0wLjQsMC40LTAuNmMxLjEsMi43LDIuOSw0LjksNi43LDUuMQoJYzAuMiwwLDAuNSwwLDAuNywwYzIuNywwLDUuMS0xLjEsNi44LTIuOWMxLjgtMi4xLDIuNS00LjgsMS43LTcuNWMtMS40LTUuMS03LjEtOC43LTEzLjgtOC43Yy0xLjksMC0zLjcsMC4zLTUuNSwwLjkKCWMtNC42LDEuNS04LjMsNC43LTEwLjUsOUMwLjYsNDUuNywwLDQ4LjIsMCw1MC43djAuNGMwLDIuNSwwLjYsNSwxLjgsNy40YzIsNCw1LjUsNy4zLDEwLjEsOS41YzQsMS45LDguOCwyLjksMTMuOCwyLjkKCWM0LjQsMCw4LjgtMC44LDEyLjMtMi4zYzktMy44LDEzLjktMTAuOCwxNy4xLTE2LjRjMC4zLTAuNiwwLjctMS4yLDEtMS44YzEuOS0zLjQsMy45LTYuOCw2LjEtMTBjNi41LTkuMiwxNC43LTEzLjcsMjUuMy0xMy43CgljMC45LDAsMS45LDAsMi44LDAuMWM2LjMsMC41LDExLjgsMi45LDE1LjIsNi43YzMuMSwzLjUsNC4zLDgsMy4zLDEzYy0xLDUuMS02LDkuNi0xMS40LDEwLjRjLTAuNywwLjEtMS4zLDAuMS0yLDAuMQoJYy00LjMsMC03LjgtMi04LjgtNC45Yy0wLjUtMS41LTAuNC0zLDAuMy00LjFjMC4xLTAuMSwwLjEtMC4yLDAuMi0wLjNjMSwzLjEsMy42LDUsNy4yLDUuMmMwLjEsMCwwLjIsMCwwLjQsMAoJYzQuMiwwLDcuOC0yLjcsOC41LTYuNGMwLjktNC40LTEuNy05LjEtNi4zLTExLjFjLTIuMy0xLTQuOS0xLjYtNy41LTEuNmMtNC40LDAtOC41LDEuNS0xMS43LDQuMWMtNyw1LjktOCwxNi44LTIuMSwyNC4zCgljNC4zLDUuNSwxMi41LDguOCwyMiw4LjhjNS43LDAsMTEtMS4zLDE0LjYtMy40YzYtMy43LDEwLjctOC43LDE0LjUtMTUuM2wwLjItMC40YzIuMy00LDQuNi04LjEsNy4zLTExLjkKCWM2LjItOC43LDE0LjUtMTMuMSwyNC43LTEzLjFjMS4xLDAsMi4yLDAsMy4zLDAuMWM2LjIsMC41LDExLjQsMi44LDE0LjcsNi41YzMuMSwzLjQsNC4zLDcuOSwzLjQsMTIuOGMtMC45LDUuNC02LDkuOS0xMS45LDEwLjcKCWMtMC41LDAuMS0xLjEsMC4xLTEuNywwLjFjLTMuOCwwLTcuMi0xLjctOC41LTQuMmMtMC45LTEuOS0wLjctMy44LDAuMy01LjFjMS4xLDMuMiwzLjgsNSw3LjQsNS4xbDAuMSwwYzQuMiwwLDcuOC0yLjgsOC41LTYuNAoJYzAuOS00LjYtMS44LTkuMy02LjQtMTEuMWMtMi41LTEtNS4xLTEuNS03LjYtMS41Yy0zLjIsMC02LjMsMC44LTkuMiwyLjVjLTkuMiw1LjItMTAuNCwxNy43LTUuMiwyNWM0LjMsNi4yLDEyLjgsOS44LDIyLjYsOS44CgljNC40LDAsOC42LTAuOCwxMS45LTIuMmM0LjItMS44LDEwLjQtNS4zLDE2LjYtMTUuNGMwLjktMS41LDEuOC0zLDIuNi00LjVjMS45LTMuMywzLjktNi44LDYuMy05LjljNS44LTcuOCwxNC42LTEyLjMsMjQuMi0xMi4zCgljMS45LDAsMy44LDAuMiw1LjgsMC41YzYuMiwxLjEsMTEuMyw0LjQsMTQsOC45YzIuNSw0LjEsMi42LDguOSwwLjQsMTMuM2MtMi4zLDQuNi03LjEsNy42LTEyLjQsNy42Yy0xLjMsMC0yLjUtMC4yLTMuNy0wLjUKCWMtNC4yLTEuMi02LjItNC42LTQuOS04LjFjMC4xLTAuMiwwLjItMC40LDAuNC0wLjZjMSwzLDMuNSw0LjgsNi44LDVjMC4yLDAsMC41LDAsMC43LDBjMy44LDAsNy4yLTIuMSw4LjMtNS4zCgljMS42LTQuNC0wLjktOS43LTUuNS0xMS45Yy0yLjQtMS4yLTUuMi0xLjgtOC0xLjhjLTQuMSwwLTgsMS4zLTExLDMuNWMtNy42LDUuOC05LDE3LTMuMSwyNC42YzQuNiw1LjgsMTIuNSw5LjIsMjEuOCw5LjIKCWMzLjUsMCw2LjktMC41LDEwLTEuNGM5LjctMywxNS4xLTEwLDE5LTE2LjVjMC44LTEuMywxLjYtMi43LDIuMy00YzIuMy00LDQuNy04LjEsNy43LTExLjdjNS44LTcuMSwxMy40LTEwLjcsMjIuNS0xMC43CgljMiwwLDQuMSwwLjIsNi4zLDAuNWMxMC45LDEuOCwxNy4zLDEwLDE1LjMsMTkuNGMtMS4zLDYtNi45LDEwLjMtMTMuNCwxMC4zYy0xLjIsMC0yLjQtMC4yLTMuNi0wLjVjLTIuMi0wLjYtNC0xLjktNC45LTMuNgoJYy0wLjgtMS41LTAuOC0zLjMsMC00LjhjMC4xLTAuMiwwLjItMC4zLDAuNC0wLjVjMS42LDQuNSw1LjMsNS4zLDcuNiw1LjNjMC4zLDAsMC42LDAsMC45LDBjMi4yLTAuMiw0LjMtMS4yLDUuNy0yLjgKCWMxLjYtMS43LDIuMy0zLjksMS45LTZjLTAuMy0yLTEuMi00LjEtMi40LTUuNmMtMi4zLTIuOS02LjYtNC42LTExLjUtNC42Yy0zLjMsMC02LjUsMC44LTkuMSwyLjJjLTQuMiwyLjQtNy4xLDYuMy04LjEsMTEKCWMtMC45LDQtMC40LDguNSwxLjQsMTEuOWMzLjQsNi41LDkuNCwxMC40LDE4LDExLjZjMi4yLDAuMyw0LjMsMC41LDYuMywwLjVjNy40LDAsMTMuNC0yLjEsMTguNS02LjNjNC4yLTMuNiw3LjctNy44LDEwLjYtMTMuMQoJYzIuNS00LjQsNC41LTguMSw3LjEtMTEuNmM2LjMtOC43LDE0LjctMTMuMiwyNC43LTEzLjJjMS4xLDAsMi4zLDAuMSwzLjQsMC4yYzYuMywwLjYsMTEuNSwyLjksMTQuOCw2LjZjMywzLjUsNC4xLDcuOSwzLjIsMTIuOAoJYy0xLjEsNi4xLTYuOSwxMC43LTEzLjUsMTAuN2MtMS4xLDAtMi4yLTAuMS0zLjItMC40Yy0yLjMtMC41LTQuMS0xLjgtNS4xLTMuNWMtMC45LTEuNi0xLTMuMy0wLjItNWMwLjEtMC4xLDAuMS0wLjMsMC4zLTAuNAoJYzAuNywyLjMsMi40LDMuOSw1LDQuN2MwLjksMC4zLDEuOCwwLjQsMi43LDAuNGMxLjksMCwzLjgtMC43LDUuNi0yYzMuNS0yLjYsNC4xLTcuOSwxLjItMTEuOGMtMi40LTMuMy03LjItNS40LTEyLjQtNS40CgljLTMuMywwLTYuMywwLjgtOC45LDIuM2MtNy4zLDQuNC0xMC40LDEyLjUtNy44LDIwLjNjMi4zLDYuOCw3LjQsMTEuNCwxNC45LDEzLjNjMy45LDEsNy41LDEuNSwxMC45LDEuNWM4LjMsMCwxNS4yLTIuOSwyMC44LTkKCWMyLjUtMi42LDQuNC01LjYsNi40LTguNmMwLjgtMS4yLDEuNi0yLjQsMi40LTMuNWMxLjEtMS42LDIuMi0zLjMsMy4yLTQuOWMyLjEtMy4yLDQuMy02LjYsNi45LTkuNWMxLjQtMS42LDMuMS0zLDUtNC4yCgljMC4xLTAuMSwwLjItMC4xLDAuMy0wLjJjNC41LTIuOSw5LjctNC4zLDE1LjMtNC4zYzIsMCw0LjEsMC4yLDYuMiwwLjVjMTAuOSwxLjgsMTcuMywxMCwxNS4zLDE5LjRjLTEuMyw2LTYuOSwxMC4zLTEzLjQsMTAuMwoJYy0xLjIsMC0yLjQtMC4yLTMuNi0wLjVjLTIuMi0wLjYtNC0xLjktNC45LTMuNmMtMC44LTEuNS0wLjgtMy4zLDAtNC44YzAuMS0wLjIsMC4yLTAuMywwLjQtMC41YzEuNiw0LjUsNS4zLDUuMyw3LjYsNS4zCgljMC4zLDAsMC42LDAsMC45LDBjMi4yLTAuMiw0LjMtMS4yLDUuNy0yLjhjMS42LTEuNywyLjMtMy45LDEuOS02Yy0wLjMtMi0xLjItNC4xLTIuNC01LjZjLTIuMy0yLjktNi42LTQuNi0xMS41LTQuNgoJYy0zLjMsMC02LjUsMC44LTkuMSwyLjJjLTQuMiwyLjQtNy4xLDYuMy04LjEsMTFjLTAuOSw0LTAuNCw4LjUsMS40LDExLjljMy40LDYuNSw5LjQsMTAuNCwxOCwxMS42YzIuMiwwLjMsNC4zLDAuNSw2LjMsMC41CgljNy40LDAsMTMuNC0yLjEsMTguNS02LjNjNC4yLTMuNiw3LjctNy44LDEwLjYtMTMuMWMyLjUtNC40LDQuNS04LjEsNy4xLTExLjZjMi4zLTMuMiw1LTUuOSw3LjktOGMwLDAsMi43LTEuOCw1LjgtMy4xCgljMC4yLTAuMSwwLjMtMC4xLDAuNS0wLjJjMC4xLDAsMC4yLTAuMSwwLjMtMC4xYzAuNC0wLjEsMC44LTAuMywxLjEtMC40YzAuMy0wLjEsMC42LTAuMiwwLjktMC40YzIuNy0wLjgsNS41LTEuMiw4LjMtMS4yCgljMy4zLDAsNi43LDAuNiwxMCwxLjhjNC44LDEuNyw4LjUsNC44LDEwLjQsOC44YzEuOCwzLjksMS43LDguMi0wLjIsMTIuMmMtMi4zLDQuNi03LjEsNy42LTEyLjMsNy42Yy0xLjYsMC0zLjItMC4zLTQuNy0wLjkKCWMtMy43LTEuNS01LjMtNC45LTMuOC04YzAuMS0wLjIsMC4yLTAuMywwLjQtMC41YzAuOSwyLjYsMi43LDQuOCw2LjYsNS4yYzAuMywwLDAuNiwwLDAuOSwwYzMuOCwwLDcuMS0yLjEsOC4yLTUuMwoJYzEuMS0zLjEsMC41LTYuMi0xLjctOWMtMi41LTMtNi45LTQuOC0xMS44LTQuOGMtMy42LDAtNy4xLDEtOS44LDIuOGMtOC43LDUuNy0xMC40LDE3LjUtMy44LDI1LjhjNC4zLDUuNCwxMi41LDguNiwyMS44LDguNgoJYzYsMCwxMS41LTEuNCwxNS4yLTMuOGM1LjktMy45LDEwLjUtOC44LDEzLjYtMTQuNmMzLjEtNS44LDYuMy0xMS44LDExLjEtMTYuOGM1LjYtNS44LDEzLjQtOS4xLDIxLjUtOS4xYzMuNCwwLDYuNiwwLjYsOS44LDEuNwoJYzkuNCwzLjMsMTMuOSwxMS42LDEwLjksMTkuOGMtMiw1LjMtNy4yLDguOC0xMi45LDguOGMtMC4zLDAtMC43LDAtMSwwYy0zLTAuMi01LjUtMS40LTYuOS0zLjJjLTEuMi0xLjYtMS40LTMuNi0wLjYtNS42CgljMC4xLTAuMiwwLjItMC40LDAuNC0wLjZjMS4xLDIuNywyLjksNC45LDYuNyw1LjFjMC4yLDAsMC41LDAsMC43LDBjMi43LDAsNS4xLTEuMSw2LjgtMi45YzEuOC0yLjEsMi41LTQuOCwxLjctNy41CgljLTEuNC01LjEtNy4xLTguNy0xMy44LTguN2MtMS45LDAtMy43LDAuMy01LjUsMC45Yy00LjYsMS41LTguMyw0LjctMTAuNSw5Yy0yLjQsNC45LTIuNCwxMC40LDAsMTUuMmMyLDQsNS41LDcuMywxMC4xLDkuNQoJYzQsMS45LDguOCwyLjksMTMuOCwyLjljNC40LDAsOC44LTAuOCwxMi4zLTIuM2M5LTMuOCwxMy45LTEwLjgsMTcuMS0xNi40YzAuMy0wLjYsMC43LTEuMiwxLTEuOGMxLjktMy40LDMuOS02LjgsNi4xLTEwCgljNi41LTkuMiwxNC43LTEzLjcsMjUuMy0xMy43YzAuOSwwLDEuOSwwLDIuOCwwLjFjNi4zLDAuNSwxMS44LDIuOSwxNS4yLDYuN2MzLjEsMy41LDQuMyw4LDMuMywxM2MtMSw1LjEtNiw5LjYtMTEuNCwxMC40CgljLTAuNywwLjEtMS4zLDAuMS0yLDAuMWMtNC4zLDAtNy44LTItOC44LTQuOWMtMC41LTEuNS0wLjQtMywwLjMtNC4xYzAuMS0wLjEsMC4xLTAuMiwwLjItMC4zYzEsMy4xLDMuNiw1LDcuMiw1LjIKCWMwLjEsMCwwLjIsMCwwLjQsMGM0LjIsMCw3LjctMi43LDguNS02LjRjMC45LTQuNC0xLjctOS4xLTYuMy0xMS4xYy0yLjMtMS00LjktMS42LTcuNS0xLjZjLTQuNCwwLTguNSwxLjUtMTEuNyw0LjEKCWMtNyw1LjktOCwxNi44LTIuMSwyNC4zYzQuMyw1LjUsMTIuNSw4LjgsMjIsOC44YzUuNywwLDExLTEuMywxNC42LTMuNGM2LTMuNywxMC43LTguNywxNC41LTE1LjNsMC4yLTAuNGMyLjMtNCw0LjYtOC4xLDcuMy0xMS45CgljNi4yLTguNywxNC41LTEzLjEsMjQuNy0xMy4xYzEuMSwwLDIuMiwwLDMuMywwLjFjNi4yLDAuNSwxMS40LDIuOCwxNC43LDYuNWMzLjEsMy40LDQuMyw3LjksMy40LDEyLjhjLTAuOSw1LjQtNiw5LjktMTEuOSwxMC43CgljLTAuNSwwLjEtMS4xLDAuMS0xLjcsMC4xYy0zLjgsMC03LjItMS43LTguNS00LjJjLTAuOS0xLjktMC43LTMuOCwwLjMtNS4xYzEuMSwzLjIsMy44LDUsNy40LDUuMWwwLjEsMGM0LjIsMCw3LjgtMi44LDguNS02LjQKCWMwLjktNC42LTEuOC05LjMtNi40LTExLjFjLTIuNS0xLTUuMS0xLjUtNy42LTEuNWMtMy4yLDAtNi4zLDAuOC05LjIsMi41Yy05LjIsNS4yLTEwLjQsMTcuNy01LjIsMjVjNC4zLDYuMiwxMi44LDkuOCwyMi42LDkuOAoJYzQuNCwwLDguNi0wLjgsMTEuOS0yLjJjNC4yLTEuOCwxMC40LTUuMywxNi42LTE1LjRjMC45LTEuNSwxLjgtMywyLjYtNC41YzEuOS0zLjMsMy45LTYuOCw2LjMtOS45YzUuOC03LjgsMTQuNi0xMi4zLDI0LjItMTIuMwoJYzEuOSwwLDMuOCwwLjIsNS44LDAuNWM2LjIsMS4xLDExLjMsNC40LDE0LDguOWMyLjUsNC4xLDIuNiw4LjksMC40LDEzLjNjLTIuMyw0LjYtNy4xLDcuNi0xMi40LDcuNmMtMS4zLDAtMi41LTAuMi0zLjctMC41CgljLTQuMi0xLjItNi4yLTQuNi00LjktOC4xYzAuMS0wLjIsMC4yLTAuNCwwLjQtMC42YzEsMywzLjUsNC44LDYuOCw1YzAuMiwwLDAuNSwwLDAuNywwYzMuOCwwLDcuMi0yLjEsOC4zLTUuMwoJYzEuNi00LjQtMC45LTkuNy01LjUtMTEuOWMtMi40LTEuMi01LjItMS44LTgtMS44Yy00LjEsMC04LDEuMy0xMSwzLjVjLTcuNiw1LjgtOSwxNy0zLjEsMjQuNmM0LjYsNS44LDEyLjUsOS4yLDIxLjgsOS4yCgljMy41LDAsNi45LTAuNSwxMC0xLjRjOS43LTMsMTUuMS0xMCwxOS0xNi41YzAuOC0xLjMsMS42LTIuNywyLjMtMy45YzIuMy00LDQuNy04LjEsNy43LTExLjdjNS44LTcuMSwxMy40LTEwLjcsMjIuNS0xMC43CgljMiwwLDQuMSwwLjIsNi4zLDAuNWMxMC45LDEuOCwxNy4zLDEwLDE1LjMsMTkuNGMtMS4zLDYtNi45LDEwLjMtMTMuNCwxMC4zYy0xLjIsMC0yLjQtMC4yLTMuNi0wLjVjLTIuMi0wLjYtNC0xLjktNC45LTMuNgoJYy0wLjgtMS41LTAuOC0zLjMsMC00LjhjMC4xLTAuMiwwLjItMC4zLDAuNC0wLjVjMS42LDQuNSw1LjMsNS4zLDcuNiw1LjNjMC4zLDAsMC42LDAsMC45LDBjMi4yLTAuMiw0LjMtMS4yLDUuNy0yLjgKCWMxLjYtMS43LDIuMy0zLjksMS45LTZjLTAuMy0yLTEuMi00LjEtMi40LTUuNmMtMi4zLTIuOS02LjYtNC42LTExLjUtNC42Yy0zLjMsMC02LjUsMC44LTkuMSwyLjJjLTQuMiwyLjQtNy4xLDYuMy04LjEsMTEKCWMtMC45LDQtMC40LDguNSwxLjQsMTEuOWMzLjQsNi41LDkuNCwxMC40LDE4LDExLjZjMi4yLDAuMyw0LjMsMC41LDYuMywwLjVjNy40LDAsMTMuNC0yLjEsMTguNS02LjNjNC4yLTMuNiw3LjctNy44LDEwLjYtMTMuMQoJYzIuNS00LjQsNC41LTguMSw3LjEtMTEuNmM2LjMtOC43LDE0LjctMTMuMiwyNC43LTEzLjJjMS4xLDAsMi4zLDAuMSwzLjQsMC4yYzYuMywwLjYsMTEuNSwyLjksMTQuOCw2LjZjMywzLjUsNC4xLDcuOSwzLjIsMTIuOAoJYy0xLjEsNi4xLTYuOSwxMC43LTEzLjUsMTAuN2MtMS4xLDAtMi4yLTAuMS0zLjItMC40Yy0yLjMtMC41LTQuMS0xLjgtNS4xLTMuNWMtMC45LTEuNi0xLTMuMy0wLjItNWMwLjEtMC4xLDAuMS0wLjMsMC4zLTAuNAoJYzAuNywyLjMsMi40LDMuOSw1LDQuN2MwLjksMC4zLDEuOCwwLjQsMi43LDAuNGMxLjksMCwzLjgtMC43LDUuNi0yYzMuNS0yLjYsNC4xLTcuOSwxLjItMTEuOGMtMi40LTMuMy03LjItNS40LTEyLjQtNS40CgljLTMuMywwLTYuMywwLjgtOC45LDIuM2MtNy4zLDQuNC0xMC40LDEyLjUtNy44LDIwLjNjMi4zLDYuOCw3LjQsMTEuNCwxNC45LDEzLjNjMy45LDEsNy41LDEuNSwxMC45LDEuNWM4LjMsMCwxNS4yLTIuOSwyMC44LTkKCWMyLjUtMi42LDQuNC01LjYsNi40LTguNmMwLjgtMS4yLDEuNi0yLjQsMi40LTMuNWMxLjEtMS42LDIuMi0zLjMsMy4yLTQuOWMyLjEtMy4yLDQuMy02LjYsNi45LTkuNWMxLjQtMS42LDMuMS0zLDUtNC4yCgljMCwwLDAsMCwwLjEsMGwwLDY4LjlWMEgweiIvPgo8L3N2Zz4K",
    "turning-slope":
      "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAwIDg5IiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj4KICAgIDxwb2x5Z29uIHBvaW50cz0iMCAwIDc0MSA4OSAxMDAwIDAgMCAwIi8+Cjwvc3ZnPg==",
    "waves3-opacity":
      "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAwIDg0Ljk0IiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj4KICAgIDxwYXRoIGQ9Ik0wLDBWNzIuOTRjMTQuNDYsNS44OSwzMi4zOCwxMC41LDU0LjUyLjI2LDExMC4yNS01MSwxMjAuNTEsMjMuNzEsMTkyLjYtNC4zLDE0NC43My01Ni4yMywxNTQuMzcsNDkuNDQsMjQ2LjcxLDQuNjRDNjM3LDQuMDUsNjIyLjE5LDEyNC4xNiw3NTcuMjksNjYuMjFjOTMtMzkuOTEsMTA4LjM4LDU0LjkyLDI0Mi43MS04LjI1VjBaIiBzdHlsZT0iZmlsbC1ydWxlOmV2ZW5vZGQ7b3BhY2l0eTowLjMzIi8+CiAgICA8cGF0aCBkPSJNMCwwVjUyLjgzYzEzMS4xMSw1OS45LDE0Ny0zMi45MSwyMzkuMjQsNi42NSwxMzUuMDksNTgsMTIwLjI0LTYyLjE2LDI2My40Niw3LjM0LDkyLjMzLDQ0LjgsMTAyLTYwLjg4LDI0Ni43MS00LjY0LDcyLjEsMjgsODIuMzUtNDYuNzEsMTkyLjYsNC4zLDIzLjk1LDExLjA4LDQzLDQuNzgsNTgtMS43MlYwWiIgc3R5bGU9ImZpbGwtcnVsZTpldmVub2RkO29wYWNpdHk6MC42NiIvPgogICAgPHBhdGggZD0iTTAsMFYyNC4yNmMxNS42LDYuOTUsMzUuNzcsMTUuNDEsNjEuNzgsMy4zOCwxMTAuMjUtNTEsMTIwLjUxLDIzLjcxLDE5Mi42LTQuM0MzOTkuMTEtMzIuODksNDA4Ljc1LDcyLjc5LDUwMS4wOCwyOCw2NDQuMy00MS41MSw2MjkuNDUsNzguNiw3NjQuNTQsMjAuNjUsODU1Ljg3LTE4LjUzLDg3Mi4zNCw3Mi4xMiwxMDAwLDE1LjdWMFoiIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZCIvPgo8L3N2Zz4=",
    "wavy-opacity":
      "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAwIDEwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+Cgk8cGF0aCBkPSJNMCwwdjkwLjRjNjAuNSw1LjYsMjEyLDEzLjIsMzg5LjktMjUuNWMyMzEuNC01MC40LDM0Ni00Ny41LDQ1OS44LTE5LjZDOTExLjUsNjAuNSw5NjQuNSw2NC41LDEwMDAsNjVWMEgweiIvPgoJPHBhdGggZD0iTTAsMHY4OC4zYzM5LDYsMTg0LjYsMjMuNSwzODMuOS0xMC4yQzYxOC4yLDM4LjYsNzMzLjEsNDYuOCw4NDYuNSw4MGM2My4xLDE4LjUsMTE3LjYsMTYuNCwxNTMuNSwxMC45VjBIMHoiLz4KCTxwYXRoIGQ9Ik0wLDB2OTEuMWM1Ny41LDEuNywxODkuNS0wLjMsMzY0LjctMzkuOUM2MDMtMi43LDcxOS45LDguNSw4MzUuMiw1My43QzkwNC43LDgxLDk2My45LDkxLjcsMTAwMCw5NS44VjBIMHoiLz4KCTxwYXRoIGQ9Ik0wLDB2NzYuNWMzNS41LDMsOTIsMi4xLDE1Ny44LTE5LjhDMjcwLjYsMTkuNCwzODUsMTAuMiw2MTgsNTQuN2MxOTYuNCwzNy41LDM0MS4zLDE5LjIsMzgyLDEyLjZWMEgweiIvPgo8L3N2Zz4K",
    "zigzag-shark":
      "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAwIDEwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+Cgk8cG9seWdvbiBwb2ludHM9IjAsMCAwLDQ2LjcgNDAuNywyMy40IDgyLjUsNDcuMiAxMjQuMiwyMy40IDE2Niw0Ny4yIDIwNy43LDIzLjQgMjQ5LjQsNDcuMiAyOTEuMiwyMy40IDMzMi45LDQ3LjIgMzc0LjcsMjMuNCAKCTQxNi40LDQ3LjIgNDU4LjEsMjMuNCA0OTkuOSw0Ny4yIDU0MS42LDIzLjQgNTgzLjQsNDcuMiA2MjUuMSwyMy40IDY2Ni45LDQ3LjIgNzA4LjYsMjMuNCA3NTAuMyw0Ny4yIDc5Mi4xLDIzLjQgODMzLjgsNDcuMiAKCTg3NS42LDIzLjQgOTE3LjMsNDcuMiA5NTksMjMuNCAxMDAwLDQ2LjggMTAwMCwwICIvPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTQ5OS45LDUxIi8+Cjwvc3ZnPgo=",
  },
  wppbimagesize: {
    thumbnail: "Thumbnail - (150 x 150) ",
    medium: "Medium - (300 x 300) ",
    medium_large: "Medium Large - (768 x 0) ",
    large: "Large - (1024 x 1024) ",
    "1536x1536": "1536x1536 - (1536 x 1536) ",
    "2048x2048": "2048x2048 - (2048 x 2048) ",
    "pb-medium": "Wppb Medium - (600 x 450) ",
  },

  ajax_nonce: "d9600bb77f",
  globalSettings: {
    siteSettings: {
      globalColors: {
        primary: "#76A72E",
        success: "#68d1ab",
        info: "#8460ef",
        warning: "#eab308",
        danger: "#ef4444",
        light: "#d1d5db",
        dark: "#374151",
      },
      globalFonts: {
        body_fontstyle: {
          fontFamily: "Open Sans",
          fontSize: {
            md: "16px",
            sm: "16px",
            xs: "16px",
          },
          lineHeight: {
            md: "24px",
            sm: "24px",
            xs: "24px",
          },
          fontWeight: "400",
          textTransform: "",
          fontStyle: "normal",
          letterSpacing: {
            md: "0px",
            sm: "0px",
            xs: "0px",
          },
          itemOpenFontStyle2: 1,
        },
      },
    },
  },
};
