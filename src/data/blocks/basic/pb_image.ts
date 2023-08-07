import Image from "@/components/blocks/basic/Image/Editor";

export const pb_image = {
    type: "content",
    addon_name: "pb_image",
    title: "Image",
    name: "pb_image",
    category: "",
    Editor: Image,
    Preview: Image,
    styleJSON: {
      image_align:
        "{{SELECTOR}} .pb-image-addon-content-wrap { text-align: {{data.image_align}}; }",
      image_width:
        "{{SELECTOR}} .pb-image-addon-img { width: {{data.image_width}}; }{{SELECTOR}} .pb-addon-image-overlay { width: {{data.image_width}}; }",
      image_height:
        "{{SELECTOR}} .pb-image-addon-img, {{SELECTOR}} .pb-addon-image-overlay { height: {{data.image_height}}; }",
      border_radius:
        "{{SELECTOR}} .pb-image-addon-content, {{SELECTOR}} .pb-image-addon-img,{{SELECTOR}} .pb-addon-image-overlay  { border-radius: {{data.border_radius}}; }",
      border_hover_radius:
        "{{SELECTOR}} .pb-image-addon-content:hover, {{SELECTOR}} .pb-image-addon-content:hover img, {{SELECTOR}} .pb-image-addon-content:hover .pb-addon-image-overlay { border-radius: {{data.border_hover_radius}}; }",
      image_border:
        "{{SELECTOR}} .pb-image-addon-img, {{SELECTOR}} .pb-addon-image-overlay{{data.image_border}}",
      image_border_hover:
        "{{SELECTOR}} .pb-image-addon-img:hover, {{SELECTOR}} .pb-addon-image-overlay:hover{{data.image_border_hover}}",
      image_boxshadow:
        "{{SELECTOR}} .pb-image-addon-img, {{SELECTOR}} .pb-addon-image-overlay{{data.image_boxshadow}}",
      image_hboxshadow:
        "{{SELECTOR}} .pb-image-addon-img:hover, {{SELECTOR}} .pb-addon-image-overlay:hover{{data.image_hboxshadow}}",
      overlay_icon:
        "{{SELECTOR}} .pb-addon-image-overlay-icon { color: {{data.overlay_icon}}; }",
      overlay_bg:
        "{{SELECTOR}} .pb-addon-image-overlay{ background: {{data.overlay_bg}}; }",
      caption_color:
        "{{SELECTOR}} .pb-addon-image-caption{ color: {{data.caption_color}}; }",
      caption_fontstyle:
        "{{SELECTOR}} .pb-addon-image-caption{{data.caption_fontstyle}}",
      caption_margin:
        "{{SELECTOR}} .pb-addon-image-caption { margin: {{data.caption_margin}}; }",
      opacity:
        "{{SELECTOR}} img.pb-image-addon-img{ opacity:{{data.opacity}}; }",
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
    icon: "pb-font-image",
    attr: {
      general: {
        upload_image: {
          type: "media",
          title: "Upload image",
          std: {
            url: "/img/placeholder/pb-medium.jpg",
          },
        },
        alt_text: {
          type: "text",
          title: "alt",
          std: "Image",
        },
        caption_text: {
          type: "text",
          title: "caption",
          std: "Your Image Caption",
        },
        lightbox: {
          type: "switch",
          title: "Enable Popup",
          std: "0",
        },
        lightbox_icon: {
          type: "switch",
          title: "Enable Icon",
          std: "0",
        },
        image_link: {
          type: "link",
          title: "Link",
          std: {
            link: "",
            window: true,
            nofolow: false,
          },
          depends: [["lightbox", "!=", "1"]],
        },
        image_display: {
          type: "select",
          title: "Image display",
          values: {
            imgblock: "Block",
            imginlineblock: "Inline Block",
            imginline: "Inline",
          },
          std: "imginlineblock",
        },
        image_align: {
          type: "alignment",
          title: "Alignment",
          responsive: true,
          selector:
            "{{SELECTOR}} .pb-image-addon-content-wrap { text-align: {{data.image_align}}; }",
        },
        image_width: {
          type: "slider",
          title: "Width",
          unit: ["px", "em", "%"],
          range: {
            em: {
              min: 0,
              max: 40,
              step: 0.1,
            },
            px: {
              min: 0,
              max: 500,
              step: 1,
            },
            "%": {
              min: 0,
              max: 100,
              step: 1,
            },
          },
          std: {
            md: "",
            sm: "",
            xs: "",
          },
          tab: "style",
          responsive: true,
          selector: [
            "{{SELECTOR}} .pb-image-addon-img { width: {{data.image_width}}; }",
            "{{SELECTOR}} .pb-addon-image-overlay { width: {{data.image_width}}; }",
          ],
        },
        image_height: {
          type: "slider",
          title: "Height",
          unit: ["px", "em", "%"],
          range: {
            em: {
              min: 0,
              max: 40,
              step: 0.1,
            },
            px: {
              min: 0,
              max: 500,
              step: 1,
            },
            "%": {
              min: 0,
              max: 100,
              step: 1,
            },
          },
          std: {
            md: "",
            sm: "",
            xs: "",
          },
          responsive: true,
          tab: "style",
          selector:
            "{{SELECTOR}} .pb-image-addon-img, {{SELECTOR}} .pb-addon-image-overlay { height: {{data.image_height}}; }",
        },
        border_radius: {
          type: "dimension",
          title: "border radius",
          unit: ["%", "px", "em"],
          responsive: true,
          tab: "style",
          section: "Border Radius",
          selector:
            "{{SELECTOR}} .pb-image-addon-content, {{SELECTOR}} .pb-image-addon-img,{{SELECTOR}} .pb-addon-image-overlay  { border-radius: {{data.border_radius}}; }",
        },
        border_hover_radius: {
          type: "dimension",
          title: "Hover border radius",
          responsive: true,
          unit: ["%", "px", "em"],
          tab: "style",
          section: "Border Radius",
          selector:
            "{{SELECTOR}} .pb-image-addon-content:hover, {{SELECTOR}} .pb-image-addon-content:hover img, {{SELECTOR}} .pb-image-addon-content:hover .pb-addon-image-overlay { border-radius: {{data.border_hover_radius}}; }",
        },
        image_border: {
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
          tab: "style",
          section: "Border",
          selector:
            "{{SELECTOR}} .pb-image-addon-img, {{SELECTOR}} .pb-addon-image-overlay",
        },
        image_border_hover: {
          type: "border",
          title: "hover Border",
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
          section: "Border",
          selector:
            "{{SELECTOR}} .pb-image-addon-img:hover, {{SELECTOR}} .pb-addon-image-overlay:hover",
        },
        image_boxshadow: {
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
            "{{SELECTOR}} .pb-image-addon-img, {{SELECTOR}} .pb-addon-image-overlay",
          tab: "style",
          section: "Box Shadow",
        },
        image_hboxshadow: {
          type: "boxshadow",
          title: "hover box shadow",
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
            "{{SELECTOR}} .pb-image-addon-img:hover, {{SELECTOR}} .pb-addon-image-overlay:hover",
          tab: "style",
          section: "Box Shadow",
        },
        overlay_icon: {
          type: "color",
          title: "icon color",
          tab: "style",
          section: "Overlay",
          depends: [["lightbox", "!=", ""]],
          selector:
            "{{SELECTOR}} .pb-addon-image-overlay-icon { color: {{data.overlay_icon}}; }",
        },
        overlay_bg: {
          type: "color",
          title: "Background color",
          tab: "style",
          section: "Overlay",
          depends: [["lightbox", "!=", ""]],
          selector:
            "{{SELECTOR}} .pb-addon-image-overlay{ background: {{data.overlay_bg}}; }",
        },
        caption_color: {
          type: "color",
          title: "Color",
          tab: "style",
          section: "Caption",
          depends: [["caption_text", "!=", ""]],
          selector:
            "{{SELECTOR}} .pb-addon-image-caption{ color: {{data.caption_color}}; }",
        },
        caption_fontstyle: {
          type: "typography",
          title: "Typography",
          std: {
            fontFamily: "",
            fontSize: {
              md: "12px",
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
          selector: "{{SELECTOR}} .pb-addon-image-caption",
          section: "Caption",
          tab: "style",
        },
        caption_margin: {
          type: "dimension",
          title: "Margin",
          unit: ["px", "em", "%"],
          responsive: true,
          tab: "style",
          section: "Caption",
          selector:
            "{{SELECTOR}} .pb-addon-image-caption { margin: {{data.caption_margin}}; }",
        },
        opacity: {
          type: "slider",
          title: "Opacity",
          range: {
            min: 0,
            max: 1,
            step: 0.01,
          },
          selector:
            "{{SELECTOR}} img.pb-image-addon-img{ opacity:{{data.opacity}}; }",
          tab: "style",
          section: "Opacity",
        },
      },
    },
    defaultAddon: true,
group: "basic",
    js_template: true,
  }