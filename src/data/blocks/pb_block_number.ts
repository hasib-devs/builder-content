import BlockNumber from "../../components/blocks/basic/BlockNumber/Editor";

export const pb_block_number = {
  type: "content",
  addon_name: "pb_block_number",
  title: "Block Number",
  name: "pb_block_number",
  category: "",
  Editor: BlockNumber,
  styleJSON: {
    number_color:
      "{{SELECTOR}} .pb-blocknumber-number span{ color: {{data.number_color}}; }",
    number_bg:
      "{{SELECTOR}} .pb-blocknumber-number span{ background: {{data.number_bg}}; }",
    number_width:
      "{{SELECTOR}} .pb-blocknumber-number span { width: {{data.number_width}}; }",
    number_height:
      "{{SELECTOR}} .pb-blocknumber-number span { height: {{data.number_height}}; }{{SELECTOR}} .pb-blocknumber-number span { line-height: {{data.number_height}}; }",
    number_border:
      "{{SELECTOR}} .pb-blocknumber-number span{{data.number_border}}",
    number_fontstyle:
      "{{SELECTOR}} .pb-blocknumber-number span{{data.number_fontstyle}}",
    number_radius:
      "{{SELECTOR}} .pb-blocknumber-number span { border-radius: {{data.number_radius}}; }",
    number_margin:
      "{{SELECTOR}} .pb-blocknumber-number span { margin: {{data.number_margin}}; }",
    title_color:
      "{{SELECTOR}} .pb-blocknumber-title { color: {{data.title_color}}; }",
    title_fontstyle:
      "{{SELECTOR}} .pb-blocknumber-title{{data.title_fontstyle}}",
    descr_color:
      "{{SELECTOR}} .pb-blocknumber-desc { color: {{data.descr_color}}; }",
    desc_fontstyle: "{{SELECTOR}} .pb-blocknumber-desc{{data.desc_fontstyle}}",
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
  icon: "pb-font-block-number",
  attr: {
    general: {
      number: {
        type: "text",
        title: "Block Number",
        std: "01",
      },
      number_title: {
        type: "text",
        title: "Title",
        std: "Number Title",
      },
      number_description: {
        type: "textarea",
        title: "Add Description",
        std: "Change this and that and try again. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.",
      },
      number_color: {
        type: "color",
        title: "Number color",
        tab: "style",
        std: "#ffffff",
        selector:
          "{{SELECTOR}} .pb-blocknumber-number span{ color: {{data.number_color}}; }",
      },
      number_bg: {
        type: "color",
        title: "Number background color",
        tab: "style",
        std: "#03E16D",
        selector:
          "{{SELECTOR}} .pb-blocknumber-number span{ background: {{data.number_bg}}; }",
      },
      number_width: {
        type: "slider",
        title: "Number Width",
        unit: ["px", "%", "em"],
        range: {
          em: {
            min: 0,
            max: 15,
            step: 0.1,
          },
          px: {
            min: 0,
            max: 200,
            step: 1,
          },
          "%": {
            min: 0,
            max: 100,
            step: 1,
          },
        },
        std: {
          md: "48px",
          sm: "",
          xs: "",
        },
        responsive: true,
        tab: "style",
        selector:
          "{{SELECTOR}} .pb-blocknumber-number span { width: {{data.number_width}}; }",
      },
      number_height: {
        type: "slider",
        title: "Number Height",
        unit: ["px", "%", "em"],
        range: {
          em: {
            min: 0,
            max: 25,
            step: 0.1,
          },
          px: {
            min: 0,
            max: 200,
            step: 1,
          },
          "%": {
            min: 0,
            max: 100,
            step: 1,
          },
        },
        std: {
          md: "48px",
          sm: "",
          xs: "",
        },
        responsive: true,
        tab: "style",
        selector: [
          "{{SELECTOR}} .pb-blocknumber-number span { height: {{data.number_height}}; }",
          "{{SELECTOR}} .pb-blocknumber-number span { line-height: {{data.number_height}}; }",
        ],
      },
      number_border: {
        type: "border",
        title: "Number Border",
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
        tab: "style",
        selector: "{{SELECTOR}} .pb-blocknumber-number span",
      },
      number_fontstyle: {
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
        selector: "{{SELECTOR}} .pb-blocknumber-number span",
        tab: "style",
      },
      number_radius: {
        type: "dimension",
        title: "Number border radius",
        unit: ["px", "%", "em"],
        responsive: true,
        tab: "style",
        selector:
          "{{SELECTOR}} .pb-blocknumber-number span { border-radius: {{data.number_radius}}; }",
      },
      number_margin: {
        type: "dimension",
        title: "Number margin",
        unit: ["px", "%", "em"],
        responsive: true,
        tab: "style",
        selector:
          "{{SELECTOR}} .pb-blocknumber-number span { margin: {{data.number_margin}}; }",
      },
      title_color: {
        type: "color",
        title: "Color",
        tab: "style",
        section: "Title",
        std: "#000000",
        selector:
          "{{SELECTOR}} .pb-blocknumber-title { color: {{data.title_color}}; }",
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
        tab: "style",
        section: "Title",
        selector: "{{SELECTOR}} .pb-blocknumber-title",
      },
      descr_color: {
        type: "color",
        title: "Description color",
        tab: "style",
        section: "Description",
        std: "#666666",
        selector:
          "{{SELECTOR}} .pb-blocknumber-desc { color: {{data.descr_color}}; }",
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
        tab: "style",
        section: "Description",
        selector: "{{SELECTOR}} .pb-blocknumber-desc",
      },
    },
  },
  defaultAddon: true,
  js_template: true,
};
