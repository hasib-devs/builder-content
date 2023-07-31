import TextBlock from "../../components/blocks/basic/TextBlock/Editor";

export const pb_text_block = {
  type: "content",
  addon_name: "pb_text_block",
  title: "Text Block",
  name: "pb_text_block",
  category: "",
  Editor: TextBlock,
  styleJSON: {
    align: "{{SELECTOR}} .pb-text-block-addon { text-align: {{data.align}}; }",
    color: "{{SELECTOR}} .pb-text-block-content { color: {{data.color}}; }",
    text_fontstyle:
      "{{SELECTOR}} .pb-text-block-content{{data.text_fontstyle}}",
    drop_color:
      "{{SELECTOR}} .pb-text-block-drop:first-letter { color: {{data.drop_color}}; }",
    drop_fontstyle:
      "{{SELECTOR}} .pb-text-block-drop:first-letter{{data.drop_fontstyle}}",
    drop_padding:
      "{{SELECTOR}} .pb-text-block-drop:first-letter { padding: {{data.drop_padding}}; }",
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
  icon: "pb-font-text",
  attr: {
    general: {
      text: {
        type: "editor",
        title: "Content",
        std: "Integer adipiscing erat eget risus sollicitudin pellentesque et non erat. Maecenas nibh dolor, malesuada et bibendum a, sagittis accumsan ipsum. Pellentesque ultrices ultrices sapien, nec tincidunt nunc posuere ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam scelerisque tristique dolor vitae tincidunt. Aenean quis massa uada mi elementum elementum. Nec sapien convallis vulputate rhoncus vel dui.",
      },

      align: {
        type: "alignment",
        title: "Alignment",
        responsive: true,
        selector:
          "{{SELECTOR}} .pb-text-block-addon { text-align: {{data.align}}; }",
      },
      color: {
        type: "color",
        title: "Content color",
        tab: "style",
        selector:
          "{{SELECTOR}} .pb-text-block-content { color: {{data.color}}; }",
      },
      text_fontstyle: {
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
          fontWeight: "400",
          textTransform: "",
          fontStyle: "",
          letterSpacing: {
            md: "",
            sm: "",
            xs: "",
          },
        },
        selector: "{{SELECTOR}} .pb-text-block-content",
        tab: "style",
      },
      drop_color: {
        type: "color",
        title: "Drop color",
        tab: "style",
        selector:
          "{{SELECTOR}} .pb-text-block-drop:first-letter { color: {{data.drop_color}}; }",
        depends: [["drop_cap", "=", "1"]],
      },
      drop_fontstyle: {
        type: "typography",
        title: "Drop Cap Typography",
        std: {
          fontFamily: "",
          fontSize: {
            md: "50px",
            sm: "",
            xs: "",
          },
          lineHeight: {
            md: "",
            sm: "",
            xs: "",
          },
          fontWeight: "400",
          textTransform: "",
          fontStyle: "",
          letterSpacing: {
            md: "",
            sm: "",
            xs: "",
          },
        },
        selector: "{{SELECTOR}} .pb-text-block-drop:first-letter",
        tab: "style",
        depends: [["drop_cap", "=", "1"]],
      },
      drop_padding: {
        type: "dimension",
        title: "Padding",
        unit: ["px", "em", "%"],
        responsive: true,
        tab: "style",
        selector:
          "{{SELECTOR}} .pb-text-block-drop:first-letter { padding: {{data.drop_padding}}; }",
        depends: [["drop_cap", "=", "1"]],
      },
    },
  },
  defaultAddon: true,
group: "basic",
  js_template: true,
};
