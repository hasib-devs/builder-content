import Accordion from "../../components/blocks/basic/Accordion/Editor";

export const pb_accordion = {
  type: "content",
  addon_name: "pb_accordion",
  title: "Accordion",
  name: "pb_accordion",
  category: "",
  Editor: Accordion,
  Preview: Accordion,
  styleJSON: {
    title_style: "{{SELECTOR}} .pb-accordion-title{{data.title_style}}",
    title_color: "{{SELECTOR}} .pb-accordion-title-content{{data.title_color}}",
    title_bg2: "{{SELECTOR}} .pb-accordion-title{{data.title_bg2}}",
    title_active_color:
      "{{SELECTOR}} .pb-accordion-title.active .pb-accordion-title-content{{data.title_active_color}}",
    title_active_bg:
      "{{SELECTOR}} .pb-accordion-title.active{{data.title_active_bg}}",
    title_active_border:
      "{{SELECTOR}} .pb-accordion-title.active { border-color: {{data.title_active_border}}; }",
    title_border_radius:
      "{{SELECTOR}} .pb-accordion-title { border-radius: {{data.title_border_radius}}; }",
    title_sept_space:
      "{{SELECTOR}} .pb-accordion-title:not(.active) { margin-top: {{data.title_sept_space}}; }",
    title_padding:
      "{{SELECTOR}} .pb-accordion-title { padding: {{data.title_padding}}; }",
    icon_size:
      "{{SELECTOR}} .pb-accordion-title > i{ font-size: {{data.icon_size}}; }",
    icon_color:
      "{{SELECTOR}} .pb-accordion-title > i{ color: {{data.icon_color}}; }",
    icon_active_color:
      "{{SELECTOR}} .pb-accordion-title.active > i { color: {{data.icon_active_color}}; }",
    nav_icon_size:
      "{{SELECTOR}} .pb-accordion-title .pb-toggle-direction{ font-size: {{data.nav_icon_size}}; }",
    nav_icon_color:
      "{{SELECTOR}} .pb-accordion-title .pb-toggle-direction{ color: {{data.nav_icon_color}}; }",
    nav_icon_active_color:
      "{{SELECTOR}} .pb-accordion-title.active .pb-toggle-direction{ color: {{data.nav_icon_active_color}}; }",
    content_color:
      "{{SELECTOR}} .pb-accordion-content { color: {{data.content_color}}; }",
    content_bgcolor:
      "{{SELECTOR}} .pb-accordion-content { background: {{data.content_bgcolor}}; }",
    content_style: "{{SELECTOR}} .pb-accordion-content{{data.content_style}}",
    content_border_radius:
      "{{SELECTOR}} .pb-accordion-content { border-radius: {{data.content_border_radius}}; }",
    content_margin:
      "{{SELECTOR}} .pb-accordion-content { margin: {{data.content_margin}}; }",
    content_padding:
      "{{SELECTOR}} .pb-accordion-content{ padding: {{data.content_padding}}; }",
    content_align:
      "{{SELECTOR}} .pb-accordion-content { text-align: {{data.content_align}}; }",
    item_border: "{{SELECTOR}} .pb-accordion-title{{data.item_border}}",
    content_border: "{{SELECTOR}} .pb-accordion-content{{data.content_border}}",
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
  icon: "pb-font-accordian",
  attr: {
    general: {
      accordion_list: {
        title: "Accordion",
        type: "repeatable",
        label: "title",
        std: [
          {
            title: "Page Builder",
            icon_list: "far fa-star",
            icon_position: "left",
            content:
              "Reprehenderit enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor",
          },
          {
            title: "Drag and Drop",
            icon_list: "fas fa-arrows-alt",
            icon_position: "right",
            content:
              "Anim pariatur cliche reprehenderit enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor",
          },
          {
            title: "WordPress Theme",
            icon_position: "right",
            content:
              "Cliche reprehenderit enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor",
          },
        ],
        attr: {
          title: {
            type: "text",
            title: "Item title",
            std: "1 year customer support",
          },
          icon_list: {
            type: "icon",
            title: "Icon",
            std: "",
          },
          icon_position: {
            type: "select",
            title: "Title icon position",
            depends: [["icon_list", "!=", ""]],
            values: {
              left: "Left",
              right: "Right",
            },
            std: "left",
          },
          content: {
            type: "editor",
            title: "Contents",
            std: "1 year customer support",
          },
        },
      },
      openitem: {
        type: "select",
        title: "Behavior",
        values: {
          "": "Open first item",
          show: "Open all items",
          hide: "Close all items",
        },
        std: "",
      },
      navigation: {
        type: "select",
        title: "Navigation style",
        values: {
          "": "None",
          "fas fa-plus": "Plus",
          "fas fa-plus-circle": "Plus circle",
          "fas fa-plus-square": "Plus fill square",
          "fas fa-arrow-circle-right": "Arrow fill circle",
          "fas fa-angle-right": "Angle",
          "fas fa-angle-double-right": "Angle double",
          "fas fa-chevron-right": "Chevron",
          "fas fa-chevron-circle-right": "Chevron circle",
          "fas fa-caret-right": "Caret",
        },
        std: "fas fa-angle-right",
      },
      navigation_direction: {
        type: "select",
        title: "Navigation Direction",
        values: {
          left: "Left",
          right: "Right",
        },
        std: "right",
      },
      title_style: {
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
        tab: "style",
        selector: "{{SELECTOR}} .pb-accordion-title",
        section: "Title",
      },
      title_color: {
        type: "color2",
        title: "Color",
        clip: true,
        selector: "{{SELECTOR}} .pb-accordion-title-content",
        tab: "style",
        std: {
          colorType: "color",
          clip: true,
          colorColor: "#666666",
        },
        section: "Title",
      },
      title_bg2: {
        type: "color2",
        title: "Background color",
        selector: "{{SELECTOR}} .pb-accordion-title",
        tab: "style",
        clip: false,
        std: {
          colorType: "color",
          colorColor: "#f8f8f8",
          clip: false,
        },
        section: "Title",
      },
      title_active_color: {
        type: "color2",
        title: "Active color",
        tab: "style",
        section: "Title",
        clip: true,
        std: {
          colorType: "color",
          clip: true,
          colorColor: "#101010",
        },
        selector:
          "{{SELECTOR}} .pb-accordion-title.active .pb-accordion-title-content",
      },
      title_active_bg: {
        type: "color2",
        title: "Active background",
        selector: "{{SELECTOR}} .pb-accordion-title.active",
        tab: "style",
        clip: false,
        std: {
          clip: false,
          colorType: "color",
          colorColor: "#f8f8f8",
        },
        section: "Title",
      },
      title_active_border: {
        type: "color",
        std: "#e5e5e5",
        title: "Active Border",
        tab: "style",
        section: "Title",
        selector:
          "{{SELECTOR}} .pb-accordion-title.active { border-color: {{data.title_active_border}}; }",
      },
      title_border_radius: {
        type: "dimension",
        title: "Title border radius",
        responsive: true,
        tab: "style",
        section: "Title",
        selector:
          "{{SELECTOR}} .pb-accordion-title { border-radius: {{data.title_border_radius}}; }",
      },
      title_sept_space: {
        type: "slider",
        title: "Title separator spacing",
        unit: ["px", "em"],
        range: {
          em: {
            min: -10,
            max: 20,
            step: 1,
          },
          px: {
            min: -20,
            max: 150,
            step: 1,
          },
        },
        std: {
          md: "-1px",
          sm: "",
          xs: "",
        },
        responsive: true,
        tab: "style",
        section: "Title",
        selector:
          "{{SELECTOR}} .pb-accordion-title:not(.active) { margin-top: {{data.title_sept_space}}; }",
      },
      title_padding: {
        type: "dimension",
        title: "Padding",
        std: {
          md: {
            top: "10px",
            right: "30px",
            bottom: "10px",
            left: "15px",
          },
          sm: {
            top: "",
            right: "",
            bottom: "",
            left: "",
          },
          xs: {
            top: "",
            right: "",
            bottom: "",
            left: "",
          },
        },
        responsive: true,
        tab: "style",
        section: "Title",
        selector:
          "{{SELECTOR}} .pb-accordion-title { padding: {{data.title_padding}}; }",
      },
      icon_size: {
        type: "slider",
        title: "Icon Size",
        unit: ["px", "em"],
        range: {
          em: {
            min: 0,
            max: 100,
            step: 0.1,
          },
          px: {
            min: 0,
            max: 100,
            step: 1,
          },
        },
        std: {
          md: "12px",
          sm: "",
          xs: "",
        },
        responsive: true,
        section: "Icon",
        tab: "style",
        selector:
          "{{SELECTOR}} .pb-accordion-title > i{ font-size: {{data.icon_size}}; }",
      },
      icon_color: {
        type: "color",
        title: "Color",
        tab: "style",
        section: "Icon",
        std: "#666666",
        selector:
          "{{SELECTOR}} .pb-accordion-title > i{ color: {{data.icon_color}}; }",
      },
      icon_active_color: {
        type: "color",
        title: "Active color",
        tab: "style",
        section: "Icon",
        std: "#101010",
        selector:
          "{{SELECTOR}} .pb-accordion-title.active > i { color: {{data.icon_active_color}}; }",
      },
      nav_icon_size: {
        type: "slider",
        title: "Navigation Icon Size",
        unit: ["px", "em"],
        range: {
          em: {
            min: 0,
            max: 100,
            step: 0.1,
          },
          px: {
            min: 0,
            max: 100,
            step: 1,
          },
        },
        std: {
          md: "14px",
          sm: "",
          xs: "",
        },
        responsive: true,
        tab: "style",
        section: "Icon",
        selector:
          "{{SELECTOR}} .pb-accordion-title .pb-toggle-direction{ font-size: {{data.nav_icon_size}}; }",
      },
      nav_icon_color: {
        type: "color",
        title: "Navigation icon color",
        tab: "style",
        section: "Icon",
        std: "#666666",
        selector:
          "{{SELECTOR}} .pb-accordion-title .pb-toggle-direction{ color: {{data.nav_icon_color}}; }",
      },
      nav_icon_active_color: {
        type: "color",
        title: "Navigation icon active color",
        tab: "style",
        section: "Icon",
        std: "#000000",
        selector:
          "{{SELECTOR}} .pb-accordion-title.active .pb-toggle-direction{ color: {{data.nav_icon_active_color}}; }",
      },
      content_color: {
        type: "color",
        title: "Color",
        tab: "style",
        section: "Content",
        std: "#888888",
        selector:
          "{{SELECTOR}} .pb-accordion-content { color: {{data.content_color}}; }",
      },
      content_bgcolor: {
        type: "color",
        title: "Background color",
        tab: "style",
        section: "Content",
        std: "#ffffff",
        selector:
          "{{SELECTOR}} .pb-accordion-content { background: {{data.content_bgcolor}}; }",
      },
      content_style: {
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
        tab: "style",
        selector: "{{SELECTOR}} .pb-accordion-content",
        section: "Content",
      },
      content_border_radius: {
        type: "dimension",
        title: "Content border radius",
        responsive: true,
        tab: "style",
        section: "Content",
        selector:
          "{{SELECTOR}} .pb-accordion-content { border-radius: {{data.content_border_radius}}; }",
      },
      content_margin: {
        type: "dimension",
        title: "Content margin",
        std: {
          md: {
            top: "",
            right: "",
            bottom: "",
            left: "",
          },
          sm: {
            top: "",
            right: "",
            bottom: "",
            left: "",
          },
          xs: {
            top: "",
            right: "",
            bottom: "",
            left: "",
          },
        },
        responsive: true,
        tab: "style",
        section: "Content",
        selector:
          "{{SELECTOR}} .pb-accordion-content { margin: {{data.content_margin}}; }",
      },
      content_padding: {
        type: "dimension",
        title: "Padding",
        std: {
          md: {
            top: "15px",
            right: "15px",
            bottom: "15px",
            left: "15px",
          },
          sm: {
            top: "",
            right: "",
            bottom: "",
            left: "",
          },
          xs: {
            top: "",
            right: "",
            bottom: "",
            left: "",
          },
        },
        unit: ["px", "em", "%"],
        responsive: true,
        tab: "style",
        section: "Content",
        selector:
          "{{SELECTOR}} .pb-accordion-content{ padding: {{data.content_padding}}; }",
      },
      content_align: {
        type: "alignment",
        title: "Alignment",
        responsive: true,
        tab: "style",
        section: "Content",
        selector:
          "{{SELECTOR}} .pb-accordion-content { text-align: {{data.content_align}}; }",
      },
      item_border: {
        type: "border",
        title: "Title Border",
        std: {
          itemOpenBorder: 1,
          borderWidth: {
            top: "1px",
            right: "1px",
            bottom: "1px",
            left: "1px",
          },
          borderStyle: "solid",
          borderColor: "#e5e5e5",
        },
        tab: "style",
        section: "Border",
        selector: "{{SELECTOR}} .pb-accordion-title",
      },
      content_border: {
        type: "border",
        title: "Content Border",
        std: {
          itemOpenBorder: 1,
          borderWidth: {
            top: "0px",
            right: "1px",
            bottom: "1px",
            left: "1px",
          },
          borderStyle: "solid",
          borderColor: "#e5e5e5",
        },
        tab: "style",
        section: "Border",
        selector: "{{SELECTOR}} .pb-accordion-content",
      },
    },
  },
  defaultAddon: true,
group: "basic",
  js_template: true,
};
