import Button from "../../components/blocks/basic/Button/Editor";

export const pb_button = {
  type: "content",
  addon_name: "pb_button",
  title: "Button",
  name: "pb_button",
  category: "",
  Editor: Button,
  styleJSON: {
    button_padding:
      "{{SELECTOR}} .pb-button-addon-content .pb-btn-addons { padding: {{data.button_padding}}; }",
    buttom_radius:
      "{{SELECTOR}} .pb-button-addon-content .pb-btn-addons { border-radius: {{data.buttom_radius}} ; }",
    button_border_radius_hover:
      "{{SELECTOR}} .pb-button-addon-content .pb-btn-addons:hover{ border-radius: {{data.button_border_radius_hover}} ; }",
    button_align:
      "{{SELECTOR}} .pb-button-addon-content{ text-align: {{data.button_align}}; }",
    button_fontstyle:
      "{{SELECTOR}} .pb-button-addon-content .pb-btn-addons{{data.button_fontstyle}}",
    button_color:
      "{{SELECTOR}} .pb-button-addon-content .pb-btn-addons { color: {{data.button_color}}; }",
    button_hcolor:
      "{{SELECTOR}} .pb-button-addon-content .pb-btn-addons:hover { color: {{data.button_hcolor}}; }",
    button_bg:
      "{{SELECTOR}} .pb-button-addon-content .pb-btn-custom.pb-btn-addons{{data.button_bg}}",
    button_hover_bg:
      "{{SELECTOR}} .pb-btn-custom.pb-btn-addons:before{{data.button_hover_bg}}",
    button_border:
      "{{SELECTOR}} .pb-button-addon-content .pb-btn-addons{{data.button_border}}",
    button_border_hover:
      "{{SELECTOR}} .pb-btn-custom.pb-btn-addons:hover{{data.button_border_hover}}",
    button_boxshadow:
      "{{SELECTOR}} .pb-button-addon-content .pb-btn-addons, {{SELECTOR}} .pb-btn-custom.pb-btn-addons:before{{data.button_boxshadow}}",
    button_boxshadow_hover:
      "{{SELECTOR}} .pb-button-addon-content .pb-btn-addons:hover, {{SELECTOR}} .pb-btn-custom.pb-btn-addons:before{{data.button_boxshadow_hover}}",
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
  visibility: true,
  icon: "pb-font-button",
  attr: {
    general: {
      button_text: {
        type: "text",
        title: "Text",
        std: "Button",
      },
      button_link: {
        type: "link",
        title: "Link",
        std: {
          link: "#",
          window: false,
          nofolow: false,
        },
      },
      icon_list: {
        type: "icon",
        title: "Icon",
        std: "",
      },
      icon_position: {
        type: "select",
        title: "Icon position",
        depends: [["icon_list", "!=", ""]],
        values: {
          left: "Left",
          right: "Right",
        },
        std: "left",
      },
      btn_size: {
        type: "select",
        title: "Size",
        values: {
          standard: "Standard",
          large: "Large",
          xlarge: "Extra Large",
          small: "Small",
          xsmall: "Extra Small",
          custom: "Custom",
        },
        std: "large",
      },
      button_padding: {
        type: "dimension",
        title: "Padding",
        unit: ["px", "em", "%"],
        depends: [["btn_size", "=", ["custom"]]],
        responsive: true,
        selector:
          "{{SELECTOR}} .pb-button-addon-content .pb-btn-addons { padding: {{data.button_padding}}; }",
      },
      shape: {
        type: "select",
        title: "Shape",
        values: {
          rounded: "Rounded",
          square: "Square",
          round: "Round",
          custom: "Custom",
        },
        std: "rounded",
      },
      buttom_radius: {
        type: "dimension",
        title: "Border Radius",
        unit: ["px", "em", "%"],
        responsive: true,
        depends: [["shape", "=", ["custom"]]],
        selector:
          "{{SELECTOR}} .pb-button-addon-content .pb-btn-addons{ border-radius: {{data.buttom_radius}} ; }",
      },
      button_border_radius_hover: {
        type: "dimension",
        title: "Hover Border Radius",
        unit: ["px", "em", "%"],
        responsive: true,
        depends: [["shape", "=", ["custom"]]],
        selector:
          "{{SELECTOR}} .pb-button-addon-content .pb-btn-addons:hover{ border-radius: {{data.button_border_radius_hover}} ; }",
      },
      fullwidth_button: {
        type: "select",
        title: "Full Width",
        values: {
          "full-yes": "Yes",
          "full-no": "No",
        },
        std: "no",
      },
      button_align: {
        type: "alignment",
        title: "Alignment",
        std: {
          md: "center",
          sm: "center",
          xs: "center",
        },
        responsive: true,
        selector:
          "{{SELECTOR}} .pb-button-addon-content{ text-align: {{data.button_align}}; }",
      },
      button_fontstyle: {
        type: "typography",
        title: "Typography",
        std: {
          fontFamily: "",
          fontSize: {
            md: "14px",
            sm: "",
            xs: "",
          },
          lineHeight: {
            md: "",
            sm: "",
            xs: "",
          },
          fontWeight: "700",
          textTransform: "",
          fontStyle: "",
          letterSpacing: {
            md: "",
            sm: "",
            xs: "",
          },
        },
        section: "Font",
        selector: "{{SELECTOR}} .pb-button-addon-content .pb-btn-addons",
        tab: "style",
      },
      style: {
        type: "select",
        title: "Select Style",
        values: {
          primary: "Primary",
          success: "Success",
          info: "Info",
          warning: "Warning",
          danger: "Danger",
          light: "Light",
          dark: "Dark",
          link: "Link",
          custom: "Custom",
        },
        std: "primary",
        tab: "style",
        section: "Style",
      },
      button_color: {
        type: "color",
        title: "Color",
        tab: "style",
        section: "Style",
        depends: [["style", "=", ["custom"]]],
        selector:
          "{{SELECTOR}} .pb-button-addon-content .pb-btn-addons { color: {{data.button_color}}; }",
      },
      button_hcolor: {
        type: "color",
        title: "Button hover color",
        tab: "style",
        section: "Style",
        depends: [["style", "=", ["custom"]]],
        selector:
          "{{SELECTOR}} .pb-button-addon-content .pb-btn-addons:hover { color: {{data.button_hcolor}}; }",
      },
      button_bg: {
        type: "color2",
        title: "Button background",
        tab: "style",
        section: "Style",
        clip: false,
        depends: [["style", "=", ["custom"]]],
        selector:
          "{{SELECTOR}} .pb-button-addon-content .pb-btn-custom.pb-btn-addons",
      },
      button_hover_bg: {
        type: "color2",
        title: "Hover background",
        tab: "style",
        section: "Style",
        clip: false,
        depends: [["style", "=", ["custom"]]],
        selector: "{{SELECTOR}} .pb-btn-custom.pb-btn-addons:before",
      },
      button_border: {
        type: "border",
        title: "Border",
        std: {
          itemOpenBorder: 0,
          borderWidth: {
            top: "2px",
            right: "2px",
            bottom: "2px",
            left: "2px",
          },
          borderStyle: "solid",
          borderColor: "#cccccc",
        },
        tab: "style",
        section: "Border",
        selector: "{{SELECTOR}} .pb-button-addon-content .pb-btn-addons",
      },
      button_border_hover: {
        type: "border",
        title: "Border hover",
        std: {
          itemOpenBorder: 0,
          borderWidth: {
            top: "2px",
            right: "2px",
            bottom: "2px",
            left: "2px",
          },
          borderStyle: "solid",
          borderColor: "#cccccc",
        },
        tab: "style",
        section: "Border",
        selector: "{{SELECTOR}} .pb-btn-custom.pb-btn-addons:hover",
      },
      button_boxshadow: {
        type: "boxshadow",
        title: "Box shadow",
        std: {
          shadowValue: {
            top: "0px",
            right: "0px",
            bottom: "5px",
            left: "0px",
          },
          shadowColor: "rgba(0,0,0,.3)",
        },
        selector:
          "{{SELECTOR}} .pb-button-addon-content .pb-btn-addons, {{SELECTOR}} .pb-btn-custom.pb-btn-addons:before",
        section: "Box shadow",
        tab: "style",
      },
      button_boxshadow_hover: {
        type: "boxshadow",
        title: "Box shadow hover",
        std: {
          shadowValue: {
            top: "0px",
            right: "0px",
            bottom: "5px",
            left: "0px",
          },
          shadowColor: "rgba(0,0,0,.3)",
        },
        selector:
          "{{SELECTOR}} .pb-button-addon-content .pb-btn-addons:hover, {{SELECTOR}} .pb-btn-custom.pb-btn-addons:before",
        section: "Box shadow",
        tab: "style",
      },
    },
  },
  defaultAddon: true,
  js_template: true,
};
