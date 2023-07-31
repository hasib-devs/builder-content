import AnimatedNumber from "../../components/blocks/basic/AnimatedNumber/Editor";

export const pb_animated_number = {
  type: "content",
  addon_name: "pb_animated_number",
  title: "Animated Number",
  name: "pb_animated_number",
  category: "",
  Editor: AnimatedNumber,
  styleJSON: {
    counter_align:
      "{{SELECTOR}} .pb-animated-counter-content { text-align: {{data.counter_align}}; }",
    number_color: "{{SELECTOR}} .pb-counter-number{{data.number_color}}",
    number_fontstyle:
      "{{SELECTOR}} .pb-counter-number{{data.number_fontstyle}}",
    number_margin:
      "{{SELECTOR}} .pb-counter-number { margin: {{data.number_margin}}; }",
    title_color: "{{SELECTOR}} .pb-count-number-title{{data.title_color}}",
    title_fontstyle:
      "{{SELECTOR}} .pb-count-number-title{{data.title_fontstyle}}",
    title_margin:
      "{{SELECTOR}} .pb-count-number-title { margin: {{data.title_margin}}; }",
    additional_color:
      "{{SELECTOR}} .pb-count-number-addition{{data.additional_color}}",
    additional_fontstyle:
      "{{SELECTOR}} .pb-count-number-addition{{data.additional_fontstyle}}",
    additional_space_horizontal:
      "{{SELECTOR}} .pb-count-number-addition { left: {{data.additional_space_horizontal}}; }",
    additional_space_vertical:
      "{{SELECTOR}} .pb-count-number-addition { top: {{data.additional_space_vertical}}; }",
    prefix_color: "{{SELECTOR}} .pb-count-number-prefix{{data.prefix_color}}",
    prefix_fontstyle:
      "{{SELECTOR}} .pb-count-number-prefix{{data.prefix_fontstyle}}",
    prefix_space_horizontal:
      "{{SELECTOR}} .pb-count-number-prefix { left: {{data.prefix_space_horizontal}}; }",
    prefix_space_vertical:
      "{{SELECTOR}} .pb-count-number-prefix { top: {{data.prefix_space_vertical}}; }",
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
  icon: "pb-font-magic-wand",
  attr: {
    general: {
      animated_layout: {
        type: "radioimage",
        title: "Layout",
        values: {
          one: "/img/animated_number/number-img1.jpg",
          two: "/img/animated_number/number-img2.jpg",
        },
        std: "one",
      },
      digit: {
        type: "text",
        title: "Counter digit",
        std: "500",
      },
      digit_animation: {
        type: "animation",
        title: "Digit Animation",
        std: {
          name: "fadeIn",
          delay: "300",
          duration: "400",
        },
      },
      duration: {
        type: "text",
        title: "Animation duration",
        std: "1000",
      },
      counter_title: {
        type: "text",
        title: "Counter title",
        std: "Dokan Builder",
      },
      title_animation: {
        type: "animation",
        title: "Counter Animation",
        std: {
          name: "fadeIn",
          delay: "300",
          duration: "400",
        },
      },
      prefix_text: {
        type: "text",
        title: "Prefix Text",
        std: "",
      },
      additional: {
        type: "text",
        title: "Suffix Text",
        std: "+",
      },
      counter_align: {
        type: "alignment",
        title: "Counter alignment",
        std: {
          md: "center",
          sm: "center",
          xs: "center",
        },
        responsive: true,
        selector:
          "{{SELECTOR}} .pb-animated-counter-content { text-align: {{data.counter_align}}; }",
      },
      number_color: {
        type: "color2",
        title: "Number color",
        tab: "style",
        section: "Number",
        clip: true,
        std: {
          colorType: "color",
          clip: true,
          colorColor: "#101010",
        },
        selector: "{{SELECTOR}} .pb-counter-number",
      },
      number_fontstyle: {
        type: "typography",
        title: "Typography",
        std: {
          fontFamily: "",
          fontSize: {
            md: "60px",
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
        selector: "{{SELECTOR}} .pb-counter-number",
        section: "Number",
        tab: "style",
      },
      number_margin: {
        type: "dimension",
        title: "Number Margin",
        unit: ["px", "em", "%"],
        responsive: true,
        tab: "style",
        selector:
          "{{SELECTOR}} .pb-counter-number { margin: {{data.number_margin}}; }",
        section: "Number",
      },
      title_color: {
        type: "color2",
        title: "Color",
        tab: "style",
        section: "Title",
        clip: true,
        std: {
          colorType: "color",
          clip: true,
          colorColor: "#101010",
        },
        selector: "{{SELECTOR}} .pb-count-number-title",
      },
      title_fontstyle: {
        type: "typography",
        title: "Typography",
        std: {
          fontFamily: "",
          fontSize: {
            md: "18px",
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
        selector: "{{SELECTOR}} .pb-count-number-title",
        section: "Title",
        tab: "style",
      },
      title_margin: {
        type: "dimension",
        title: "Margin",
        unit: ["px", "em", "%"],
        responsive: true,
        tab: "style",
        selector:
          "{{SELECTOR}} .pb-count-number-title { margin: {{data.title_margin}}; }",
        section: "Title",
      },
      additional_color: {
        type: "color2",
        title: "Color",
        tab: "style",
        section: "Suffix",
        clip: true,
        std: {
          colorType: "color",
          clip: true,
          colorColor: "#101010",
        },
        depends: [["additional", "!=", ""]],
        selector: "{{SELECTOR}} .pb-count-number-addition",
      },
      additional_fontstyle: {
        type: "typography",
        title: "typography",
        std: {
          fontFamily: "",
          fontSize: {
            md: "60px",
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
        depends: [["additional", "!=", ""]],
        selector: "{{SELECTOR}} .pb-count-number-addition",
        section: "Suffix",
        tab: "style",
      },
      additional_space_horizontal: {
        type: "slider",
        title: "Space Horizontal",
        unit: ["%", "px", "em"],
        range: {
          em: {
            min: -5,
            max: 23,
            step: 0.1,
          },
          px: {
            min: -120,
            max: 120,
            step: 1,
          },
          "%": {
            min: -10,
            max: 100,
            step: 1,
          },
        },
        std: {
          md: "10px",
          sm: "",
          xs: "",
        },
        responsive: true,
        tab: "style",
        section: "Suffix",
        depends: [["additional", "!=", ""]],
        selector:
          "{{SELECTOR}} .pb-count-number-addition { left: {{data.additional_space_horizontal}}; }",
      },
      additional_space_vertical: {
        type: "slider",
        title: "Space vertically",
        unit: ["%", "px", "em"],
        range: {
          em: {
            min: -5,
            max: 23,
            step: 0.1,
          },
          px: {
            min: -50,
            max: 150,
            step: 1,
          },
          "%": {
            min: -10,
            max: 100,
            step: 1,
          },
        },
        std: {
          md: "0px",
          sm: "",
          xs: "",
        },
        responsive: true,
        tab: "style",
        section: "Suffix",
        depends: [["additional", "!=", ""]],
        selector:
          "{{SELECTOR}} .pb-count-number-addition { top: {{data.additional_space_vertical}}; }",
      },
      prefix_color: {
        type: "color2",
        title: "Color",
        tab: "style",
        section: "Prefix",
        clip: true,
        std: {
          colorType: "color",
          clip: true,
          colorColor: "#101010",
        },
        depends: [["prefix_text", "!=", ""]],
        selector: "{{SELECTOR}} .pb-count-number-prefix",
      },
      prefix_fontstyle: {
        type: "typography",
        title: "typography",
        std: {
          fontFamily: "",
          fontSize: {
            md: "60px",
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
        depends: [["prefix_text", "!=", ""]],
        selector: "{{SELECTOR}} .pb-count-number-prefix",
        section: "Prefix",
        tab: "style",
      },
      prefix_space_horizontal: {
        type: "slider",
        title: "Space Horizontal",
        unit: ["%", "px", "em"],
        range: {
          em: {
            min: -5,
            max: 23,
            step: 0.1,
          },
          px: {
            min: -120,
            max: 120,
            step: 1,
          },
          "%": {
            min: -10,
            max: 100,
            step: 1,
          },
        },
        std: {
          md: "10px",
          sm: "",
          xs: "",
        },
        responsive: true,
        tab: "style",
        section: "Prefix",
        depends: [["prefix_text", "!=", ""]],
        selector:
          "{{SELECTOR}} .pb-count-number-prefix { left: {{data.prefix_space_horizontal}}; }",
      },
      prefix_space_vertical: {
        type: "slider",
        title: "Space vertically",
        unit: ["%", "px", "em"],
        range: {
          em: {
            min: -5,
            max: 23,
            step: 0.1,
          },
          px: {
            min: -50,
            max: 150,
            step: 1,
          },
          "%": {
            min: -10,
            max: 100,
            step: 1,
          },
        },
        std: {
          md: "0px",
          sm: "",
          xs: "",
        },
        responsive: true,
        tab: "style",
        section: "Prefix",
        depends: [["prefix_text", "!=", ""]],
        selector:
          "{{SELECTOR}} .pb-count-number-prefix { top: {{data.prefix_space_vertical}}; }",
      },
    },
  },
  defaultAddon: true,
group: "basic",
  js_template: true,
};
