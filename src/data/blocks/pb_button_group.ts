import ButtonGroup from "../../components/blocks/basic/ButtonGroup/Editor";

export const pb_button_group = {
  type: "content",
  addon_name: "pb_button_group",
  title: "Button Group",
  name: "pb_button_group",
  category: "",
  Editor: ButtonGroup,
  Preview: ButtonGroup,
  styleJSON: {
    "button_item.button_color":
      "{{SELECTOR}} .pb-btn-addons { color: {{data.button_color}}; }",
    "button_item.button_hcolor":
      "{{SELECTOR}} .pb-btn-addons:hover { color: {{data.button_hcolor}}; }",
    "button_item.button_bg": "{{SELECTOR}} .pb-btn-addons{{data.button_bg}}",
    "button_item.button_hover_bg":
      "{{SELECTOR}} .pb-btn-custom.pb-btn-addons:before{{data.button_hover_bg}}",
    "button_item.button_padding":
      "{{SELECTOR}} .pb-btn-addons { padding: {{data.button_padding}}; }",
    "button_item.buttom_radius":
      "{{SELECTOR}} .pb-btn-addons { border-radius: {{data.buttom_radius}}; }",
    "button_item.button_border":
      "{{SELECTOR}} .pb-btn-addons{{data.button_border}}",
    "button_item.border_hcolor":
      "{{SELECTOR}} .pb-btn-addons:hover{{data.border_hcolor}}",
    button_align:
      "{{SELECTOR}} .pb-button-addon-content{ text-align: {{data.button_align}}; }",
    button_fontstyle:
      "{{SELECTOR}} .pb-button-addon-content .pb-btn-addons{{data.button_fontstyle}}",
    button_margin:
      "{{SELECTOR}} .pb-button-addon-content { margin-left: -{{data.button_margin}}; }{{SELECTOR}} .pb-button-addon-content { margin-right: -{{data.button_margin}}; }{{SELECTOR}} .pb-button-group { padding-right: {{data.button_margin}}; }{{SELECTOR}} .pb-button-group { padding-left: {{data.button_margin}}; }",
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
  icon: "pb-font-button-group",
  attr: {
    general: {
      button_item: {
        title: "Button",
        type: "repeatable",
        label: "button_text",
        std: [
          {
            button_text: "Button 1",
            button_link: {
              link: "#",
              window: false,
              nofolow: false,
            },
            style: "primary",
            btn_size: "standard",
            shape: "rounded",
          },
          {
            button_text: "Button 2",
            button_link: {
              link: "#",
              window: false,
              nofolow: false,
            },
            style: "info",
            btn_size: "standard",
            shape: "square",
            icon_list: "fas fa-cog",
            icon_position: "left",
          },
          {
            button_text: "Button 3",
            button_link: {
              link: "#",
              window: false,
              nofolow: false,
            },
            style: "success",
            btn_size: "standard",
            shape: "rounded",
            icon_list: "fab fa-apple",
            icon_position: "right",
          },
        ],
        attr: {
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
          style: {
            type: "select",
            title: "Style",
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
          },
          button_color: {
            type: "color",
            title: "Color",
            depends: [["style", "=", ["custom"]]],
            selector:
              "{{SELECTOR}} .pb-btn-addons { color: {{data.button_color}}; }",
          },
          button_hcolor: {
            type: "color",
            title: "Hover color",
            depends: [["style", "=", ["custom"]]],
            selector:
              "{{SELECTOR}} .pb-btn-addons:hover { color: {{data.button_hcolor}}; }",
          },
          button_bg: {
            type: "color2",
            title: "Background",
            depends: [["style", "=", ["custom"]]],
            selector: "{{SELECTOR}} .pb-btn-addons",
          },
          button_hover_bg: {
            type: "color2",
            title: "Hover background",
            depends: [["style", "=", ["custom"]]],
            selector: "{{SELECTOR}} .pb-btn-custom.pb-btn-addons:before",
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
            std: "standard",
          },
          button_padding: {
            type: "dimension",
            title: "Padding",
            unit: ["px", "em", "%"],
            depends: [["btn_size", "=", ["custom"]]],
            responsive: true,
            selector:
              "{{SELECTOR}} .pb-btn-addons { padding: {{data.button_padding}}; }",
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
            title: "Border radius",
            unit: ["%", "px", "em"],
            responsive: true,
            depends: [["shape", "=", ["custom"]]],
            selector:
              "{{SELECTOR}} .pb-btn-addons { border-radius: {{data.buttom_radius}}; }",
          },
          icon_list: {
            type: "icon",
            title: "Icon",
            std: "",
          },
          icon_position: {
            type: "select",
            title: "Icon position",
            values: {
              left: "Left",
              right: "Right",
            },
            std: "left",
          },
          button_border: {
            type: "border",
            title: "Border",
            std: {
              borderWidth: {
                top: "2px",
                right: "2px",
                bottom: "2px",
                left: "2px",
              },
              borderStyle: "solid",
              borderColor: "#cccccc",
            },
            selector: "{{SELECTOR}} .pb-btn-addons",
          },
          border_hcolor: {
            type: "border",
            title: "Border Hover",
            std: {
              borderWidth: {
                top: "2px",
                right: "2px",
                bottom: "2px",
                left: "2px",
              },
              borderStyle: "solid",
              borderColor: "#cccccc",
            },
            selector: "{{SELECTOR}} .pb-btn-addons:hover",
          },
        },
      },
      button_align: {
        type: "alignment",
        title: "Alignment",
        responsive: true,
        std: {
          md: "center",
        },
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
        selector: "{{SELECTOR}} .pb-button-addon-content .pb-btn-addons",
        tab: "style",
      },
      button_margin: {
        type: "slider",
        title: "Margin",
        unit: ["px", "em", "%"],
        range: {
          em: {
            min: 0,
            max: 15,
            step: 0.1,
          },
          px: {
            min: 0,
            max: 150,
            step: 1,
          },
          "%": {
            min: 0,
            max: 100,
            step: 1,
          },
        },
        std: {
          md: "5px",
          sm: "",
          xs: "",
        },
        responsive: true,
        tab: "style",
        selector: [
          "{{SELECTOR}} .pb-button-addon-content { margin-left: -{{data.button_margin}}; }",
          "{{SELECTOR}} .pb-button-addon-content { margin-right: -{{data.button_margin}}; }",
          "{{SELECTOR}} .pb-button-group { padding-right: {{data.button_margin}}; }",
          "{{SELECTOR}} .pb-button-group { padding-left: {{data.button_margin}}; }",
        ],
      },
    },
  },
  defaultAddon: true,
group: "basic",
  js_template: true,
};
