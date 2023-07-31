import Alert from "../../components/blocks/basic/Alert/Editor";

export const pb_alert = {
  type: "content",
  addon_name: "pb_alert",
  title: "Alert",
  name: "pb_alert",
  category: "",
  Editor: Alert,
  styleJSON: {
    content_color:
      "{{SELECTOR}} .pb-alert-addon-content{ background: {{data.content_color}}; }",
    close_color:
      "{{SELECTOR}} .pb-close-alert { color: {{data.close_color}}; }",
    close_hcolor:
      "{{SELECTOR}} .pb-close-alert:hover { color: {{data.close_hcolor}}; }",
    title_color:
      "{{SELECTOR}} .pb-alert-title { color: {{data.title_color}}; }",
    title_fontstyle: "{{SELECTOR}} .pb-alert-title{{data.title_fontstyle}}",
    desc_color: "{{SELECTOR}} .pb-alert-desc { color: {{data.desc_color}}; }",
    desc_fontstyle: "{{SELECTOR}} .pb-alert-desc{{data.desc_fontstyle}}",
    alert_padding:
      "{{SELECTOR}} .pb-alert-addon-content { padding: {{data.alert_padding}}; }",
    alert_radius:
      "{{SELECTOR}} .pb-alert-addon-content { border-radius: {{data.alert_radius}}; }",
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
  icon: "pb-font-alert",
  attr: {
    general: {
      alert_title: {
        type: "text",
        title: "Title",
        std: "Alert Addon",
      },
      alert_description: {
        type: "textarea",
        title: "Description",
        std: "Duis mollis est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.",
      },
      alert_close: {
        type: "switch",
        title: "Show Close Button",
        std: "1",
      },
      alert_style: {
        type: "select",
        title: "Alert style",
        values: {
          primary: "Primary",
          success: "Success",
          info: "Info",
          warning: "Warning",
          danger: "Danger",
          light: "Light",
          dark: "Dark",
          custom: "Custom",
        },
        std: "info",
        tab: "style",
      },
      content_color: {
        type: "color",
        title: "Content background color",
        tab: "style",
        depends: [["alert_style", "=", "custom"]],
        selector:
          "{{SELECTOR}} .pb-alert-addon-content{ background: {{data.content_color}}; }",
      },
      close_color: {
        type: "color",
        title: "Close color",
        tab: "style",
        std: "#e02e2e",
        selector:
          "{{SELECTOR}} .pb-close-alert { color: {{data.close_color}}; }",
      },
      close_hcolor: {
        type: "color",
        title: "Close hover color",
        tab: "style",
        selector:
          "{{SELECTOR}} .pb-close-alert:hover { color: {{data.close_hcolor}}; }",
      },
      title_color: {
        type: "color",
        title: "Color",
        tab: "style",
        section: "Title",
        depends: [["alert_style", "=", "custom"]],
        selector:
          "{{SELECTOR}} .pb-alert-title { color: {{data.title_color}}; }",
      },
      title_fontstyle: {
        type: "typography",
        title: "Typography",
        std: {
          fontFamily: "",
          fontSize: {
            md: "16px",
            sm: "",
            xs: "",
          },
          lineHeight: {
            md: "",
            sm: "",
            xs: "",
          },
          fontWeight: "600",
          textTransform: "",
          fontStyle: "",
          letterSpacing: {
            md: "",
            sm: "",
            xs: "",
          },
        },
        selector: "{{SELECTOR}} .pb-alert-title",
        tab: "style",
        section: "Title",
      },
      desc_color: {
        type: "color",
        title: "Description color",
        tab: "style",
        section: "Description",
        depends: [["alert_style", "=", "custom"]],
        selector: "{{SELECTOR}} .pb-alert-desc { color: {{data.desc_color}}; }",
      },
      desc_fontstyle: {
        type: "typography",
        title: "Typography",
        std: {
          fontFamily: "",
          fontSize: {
            md: "16px",
            sm: "",
            xs: "",
          },
          lineHeight: {
            md: "",
            sm: "",
            xs: "",
          },
          fontWeight: "600",
          textTransform: "",
          fontStyle: "",
          letterSpacing: {
            md: "",
            sm: "",
            xs: "",
          },
        },
        selector: "{{SELECTOR}} .pb-alert-desc",
        tab: "style",
        section: "Description",
      },
      alert_padding: {
        type: "dimension",
        title: "Padding",
        unit: ["px", "em", "%"],
        responsive: true,
        tab: "style",
        section: "Spacing",
        selector:
          "{{SELECTOR}} .pb-alert-addon-content { padding: {{data.alert_padding}}; }",
      },
      alert_radius: {
        type: "dimension",
        title: "Border radius",
        unit: ["px", "%", "em"],
        responsive: true,
        tab: "style",
        section: "Spacing",
        selector:
          "{{SELECTOR}} .pb-alert-addon-content { border-radius: {{data.alert_radius}}; }",
      },
    },
  },
  defaultAddon: true,
  js_template: true,
};
