import Carousel from "../../../components/blocks/basic/Carousel/Editor";

export const pb_carousel = {
  type: "content",
  addon_name: "pb_carousel",
  title: "Carousel",
  name: "pb_carousel",
  category: "",
  Editor: Carousel,
  Preview: Carousel,
  styleJSON: {
    slide_height:
      "{{SELECTOR}} .pb-carousel-content-wrap { height: {{data.slide_height}}; }",
    "carosuel_list.content_align":
      "{{SELECTOR}} .pb-carousel-content-in { text-align: {{data.content_align}}; }",
    "carosuel_list.title_color":
      "{{SELECTOR}} .pb-carousel-title { color: {{data.title_color}}; }",
    "carosuel_list.title_fontstyle":
      "{{SELECTOR}} .pb-carousel-title{{data.title_fontstyle}}",
    "carosuel_list.title_margin":
      "{{SELECTOR}} .pb-carousel-title{ margin: {{data.title_margin}}; }",
    "carosuel_list.subtitle_color":
      "{{SELECTOR}} .pb-carousel-subtitle { color: {{data.subtitle_color}}; }",
    "carosuel_list.subtitle_fontstyle":
      "{{SELECTOR}} .pb-carousel-subtitle{{data.subtitle_fontstyle}}",
    "carosuel_list.subtitle_margin":
      "{{SELECTOR}} .pb-carousel-subtitle{ margin: {{data.subtitle_margin}}; }",
    "carosuel_list.intro_color":
      "{{SELECTOR}} .pb-carousel-content { color: {{data.intro_color}}; }",
    "carosuel_list.intro_fontstyle":
      "{{SELECTOR}} .pb-carousel-content{{data.intro_fontstyle}}",
    "carosuel_list.intro_margin":
      "{{SELECTOR}} .pb-carousel-content { margin: {{data.intro_margin}}; }",
    "carosuel_list.btn_fontstyle":
      "{{SELECTOR}} .pb-btn-carousel1{{data.btn_fontstyle}}",
    "carosuel_list.btn_color":
      "{{SELECTOR}} .pb-btn-carousel1 { color: {{data.btn_color}}; }",
    "carosuel_list.btn_hover_color":
      "{{SELECTOR}} .pb-btn-carousel1:hover { color: {{data.btn_hover_color}}; }",
    "carosuel_list.btn_background":
      "{{SELECTOR}} .pb-btn-carousel1{{data.btn_background}}",
    "carosuel_list.btn_hover_background":
      "{{SELECTOR}} .pb-btn-carousel1:before, {{SELECTOR}} .pb-btn-carousel1:hover{{data.btn_hover_background}}",
    "carosuel_list.button_border":
      "{{SELECTOR}} .pb-btn-carousel1, {{SELECTOR}} .pb-btn-carousel1:before{{data.button_border}}",
    "carosuel_list.border_hcolor":
      "{{SELECTOR}} .pb-btn-carousel1:hover, {{SELECTOR}} .pb-btn-carousel1:hover:before{{data.border_hcolor}}",
    "carosuel_list.btn_radius":
      "{{SELECTOR}} .pb-btn-carousel1, {{SELECTOR}} .pb-btn-carousel1:before { border-radius: {{data.btn_radius}}; }",
    "carosuel_list.btn_padding":
      "{{SELECTOR}} .pb-btn-carousel1 { padding: {{data.btn_padding}}; }",
    "carosuel_list.btn_margin":
      "{{SELECTOR}} .pb-btn-carousel1 { margin: {{data.btn_margin}}; }",
    "carosuel_list.btn_fontstyle2":
      "{{SELECTOR}} .pb-btn-carousel2{{data.btn_fontstyle2}}",
    "carosuel_list.btn_color2":
      "{{SELECTOR}} .pb-btn-carousel2 { color: {{data.btn_color2}}; }",
    "carosuel_list.btn_hover_color2":
      "{{SELECTOR}} .pb-btn-carousel2:hover { color: {{data.btn_hover_color2}}; }",
    "carosuel_list.btn_background2":
      "{{SELECTOR}} .pb-btn-carousel2{{data.btn_background2}}",
    "carosuel_list.btn_hover_background2":
      "{{SELECTOR}} .pb-btn-carousel2:before, {{SELECTOR}} .pb-btn-carousel2:hover{{data.btn_hover_background2}}",
    "carosuel_list.button_border2":
      "{{SELECTOR}} .pb-btn-carousel2, {{SELECTOR}} .pb-btn-carousel2:before{{data.button_border2}}",
    "carosuel_list.button_border2_hover":
      "{{SELECTOR}} .pb-btn-carousel2:hover, {{SELECTOR}} .pb-btn-carousel2:hover:before{{data.button_border2_hover}}",
    "carosuel_list.btn_radius2":
      "{{SELECTOR}} .pb-btn-carousel2, {{SELECTOR}} .pb-btn-carousel2:before { border-radius: {{data.btn_radius2}}; }",
    "carosuel_list.btn_padding2":
      "{{SELECTOR}} .pb-btn-carousel2 { padding: {{data.btn_padding2}}; }",
    "carosuel_list.btn_margin2":
      "{{SELECTOR}} .pb-btn-carousel2 { margin: {{data.btn_margin2}}; }",
    "carosuel_list.carosuel_bg": "{{SELECTOR}} .pb-carousel-content-wrap",
    "carosuel_list.carosuel_bg_overlay":
      "{{SELECTOR}} .pb-carousel-overlay{{data.carosuel_bg_overlay}}",
    nav_color:
      "{{SELECTOR}} .pb-carousel .slick-arrow { color: {{data.nav_color}}; }",
    nav_bg: "{{SELECTOR}} .pb-carousel .slick-arrow{{data.nav_bg}}",
    nav_width:
      "{{SELECTOR}} .pb-carousel .slick-arrow { width: {{data.nav_width}}; }",
    nav_height:
      "{{SELECTOR}} .pb-carousel .slick-arrow { height: {{data.nav_height}}; }{{SELECTOR}} .pb-carousel .slick-arrow { line-height: {{data.nav_height}}; }",
    nav_radius:
      "{{SELECTOR}} .pb-carousel .slick-arrow { border-radius: {{data.nav_radius}}; }",
    nav_position:
      "{{SELECTOR}} .pb-carousel .slick-arrow { top: {{data.nav_position}}; }",
    dot_bg: "{{SELECTOR}} .pb-carousel .slick-dots li button{{data.dot_bg}}",
    dots_width:
      "{{SELECTOR}} .pb-carousel .slick-dots li button,{{SELECTOR}} .pb-carousel .slick-dots li{ width: {{data.dots_width}}; }",
    dots_height:
      "{{SELECTOR}} .pb-carousel .slick-dots li button,{{SELECTOR}} .pb-carousel .slick-dots li{ height: {{data.dots_height}}; }",
    dots_radius:
      "{{SELECTOR}} .pb-carousel .slick-dots li button{ border-radius: {{data.dots_radius}}; }",
    dots_position:
      "{{SELECTOR}} .pb-carousel .slick-dots { bottom: {{data.dots_position}}; }",
    content_padding:
      "{{SELECTOR}} .pb-carousel-content-in { padding: {{data.content_padding}}; }",
    content_margin:
      "{{SELECTOR}} .pb-carousel-content-in { margin: {{data.content_margin}}; }",
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
  icon: "pb-font-full-slider",
  attr: {
    general: {
      arrow_option: {
        type: "switch",
        title: "Navigation Option",
        std: "1",
        section: "Slider Settings",
      },
      control_option: {
        type: "switch",
        title: "Control Option",
        std: "1",
        section: "Slider Settings",
      },
      autoplay_option: {
        type: "switch",
        title: "Autoplay Option",
        std: "1",
        section: "Slider Settings",
      },
      animated_speed: {
        type: "number",
        title: "Animated Speed",
        std: "600",
        section: "Slider Settings",
        depends: [["autoplay_option", "=", "1"]],
      },
      slide_height: {
        type: "slider",
        title: "Slider Height",
        unit: ["px", "%", "em"],
        range: {
          em: {
            min: 0,
            max: 90,
            step: 0.1,
          },
          px: {
            min: 0,
            max: 1200,
            step: 1,
          },
          "%": {
            min: 0,
            max: 100,
            step: 1,
          },
        },
        std: {
          md: "600px",
          sm: "",
          xs: "",
        },
        responsive: true,
        section: "Slider Settings",
        selector:
          "{{SELECTOR}} .pb-carousel-content-wrap { height: {{data.slide_height}}; }",
      },
      carosuel_list: {
        title: "Carousel",
        type: "repeatable",
        label: "title",
        std: [
          {
            title: "Unique",
            subtitle: "International Graphic Design",
            content:
              "Page builder layouts for your next project. Includes carefully crafted pre built blocks and templates. We are reaching new milestones and we appreciate the continued support from everyone.",
            slider_type: "right_media",
            media_type: "media_image",
            imageupload: {
              url: "/img/placeholder/pb-medium.jpg",
            },
            video_url: "https://www.youtube.com/watch?v=EKDZ7pvNSLs",
            intro_color: "#656565",
            button_text: "Get Started",
            button_link: {
              link: "#",
              window: false,
              nofolow: false,
            },
            btn_color: "#fff",
            btn_hover_color: "#fff",
            slide_height: {
              md: "600px",
              sm: "",
              xs: "",
            },
            title_color: "#000",
            subtitle_color: "#151515",
            carosuel_bg: {
              bgType: "color",
              bgColor: "#fff",
            },
            btn_background: {
              clip: false,
              colorType: "color",
              colorColor: "#26c266",
            },
            btn_hover_background: {
              clip: false,
              colorType: "color",
              colorColor: "#1fa957",
            },
            btn_radius: {
              md: "3px",
              sm: "",
              xs: "",
            },
            btn_padding: {
              md: {
                top: "8px",
                right: "25px",
                bottom: "8px",
                left: "25px",
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
          },
          {
            title: "Structure",
            subtitle: "Drag and Drop Builder",
            content:
              "Page builder layouts for your next project. Includes carefully crafted pre built blocks and templates. We are reaching new milestones and we appreciate the continued support from everyone.",
            slider_type: "left_media",
            media_type: "media_image",
            imageupload: {
              url: "/img/placeholder/pb-medium.jpg",
            },
            video_url: "https://www.youtube.com/watch?v=EKDZ7pvNSLs",
            intro_color: "#656565",
            button_text: "Learn More",
            button_link: {
              link: "#",
              window: false,
              nofolow: false,
            },
            slide_height: {
              md: "600px",
              sm: "",
              xs: "",
            },
            carosuel_bg: {
              bgType: "color",
              bgColor: "#fff",
            },
            title_color: "#000",
            subtitle_color: "#151515",
            btn_color: "#fff",
            btn_hover_color: "#fff",
            btn_background: {
              clip: false,
              colorType: "color",
              colorColor: "#7047eb",
            },
            btn_hover_background: {
              clip: false,
              colorType: "color",
              colorColor: "#2955ca",
            },
            btn_radius: {
              md: "3px",
              sm: "",
              xs: "",
            },
            btn_padding: {
              md: {
                top: "8px",
                right: "25px",
                bottom: "8px",
                left: "25px",
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
          },
        ],
        attr: {
          slider_type: {
            type: "select",
            title: "Content Type",
            values: {
              center_content: "Only Content",
              right_media: "Right Media",
              left_media: "Left Media",
            },
            std: "right_media",
            section: "Slide",
          },
          media_type: {
            type: "select",
            title: "Type",
            values: {
              media_image: "Image",
              media_video: "Video",
            },
            std: "media_image",
            section: "Slide",
            depends: [["slider_type", "=", ["right_media", "left_media"]]],
          },
          imageupload: {
            type: "media",
            title: "Upload content image",
            section: "Slide",
            std: {
              url: "/img/placeholder/pb-medium.jpg",
            },
            depends: [["media_type", "=", ["media_image"]]],
          },
          image_animation: {
            type: "animation",
            title: "Image Animation",
            section: "Slide",
            std: {
              name: "wow animated fadeIn",
              delay: "300",
              duration: "400",
            },
            depends: [["media_type", "=", ["media_image"]]],
          },
          video_url: {
            type: "text",
            title: "Video URL",
            std: "https://www.youtube.com/watch?v=EKDZ7pvNSLs",
            depends: [["media_type", "=", ["media_video"]]],
            section: "Slide",
          },
          video_info: {
            type: "switch",
            title: "Hide video info",
            std: "1",
            depends: [["media_type", "=", ["media_video"]]],
            section: "Slide",
          },
          video_animation: {
            type: "animation",
            title: "Video Animation",
            section: "Slide",
            std: {
              name: "wow animated fadeIn",
              delay: "300",
              duration: "400",
            },
            depends: [["media_type", "=", ["media_video"]]],
          },
          content_align: {
            type: "alignment",
            title: "Content Alignment",
            std: {
              md: "center",
              sm: "",
              xs: "",
            },
            responsive: true,
            selector:
              "{{SELECTOR}} .pb-carousel-content-in { text-align: {{data.content_align}}; }",
            section: "Slide",
          },
          title: {
            type: "text",
            title: "Title",
            section: "Title",
            std: "Slide Title",
          },
          selector: {
            type: "select",
            title: "Title Tag",
            values: {
              h1: "h1",
              h2: "h2",
              h3: "h3",
              h4: "h4",
              h5: "h5",
              h6: "h6",
            },
            std: "h2",
            section: "Title",
          },
          title_animation: {
            type: "animation",
            title: "Animation",
            section: "Title",
            std: {
              name: "wow animated fadeIn",
              delay: "300",
              duration: "400",
            },
          },
          title_color: {
            type: "color",
            title: "Title color",
            section: "Title",
            selector:
              "{{SELECTOR}} .pb-carousel-title { color: {{data.title_color}}; }",
          },
          title_fontstyle: {
            type: "typography",
            title: "Title font",
            std: {
              fontFamily: "",
              fontSize: {
                md: "25px",
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
                md: "0px",
                sm: "",
                xs: "",
              },
            },
            selector: "{{SELECTOR}} .pb-carousel-title",
            section: "Title",
          },
          title_margin: {
            type: "dimension",
            title: "Title Margin",
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
            section: "Title",
            selector:
              "{{SELECTOR}} .pb-carousel-title{ margin: {{data.title_margin}}; }",
          },
          subtitle: {
            type: "textarea",
            title: "Subtitle",
            section: "Subtitle",
            std: "WordPress page builder",
          },
          subselector: {
            type: "select",
            title: "Sub Title Tag",
            values: {
              h1: "h1",
              h2: "h2",
              h3: "h3",
              h4: "h4",
              h5: "h5",
              h6: "h6",
            },
            std: "h3",
            section: "Subtitle",
          },
          subtitle_animation: {
            type: "animation",
            title: "Sub Title Animation",
            section: "Subtitle",
            std: {
              name: "wow animated fadeInDown",
              delay: "300",
              duration: "400",
            },
          },
          subtitle_color: {
            type: "color",
            title: "Sub title color",
            section: "Subtitle",
            selector:
              "{{SELECTOR}} .pb-carousel-subtitle { color: {{data.subtitle_color}}; }",
          },
          subtitle_fontstyle: {
            type: "typography",
            title: "Sub title font",
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
                md: "0px",
                sm: "",
                xs: "",
              },
            },
            selector: "{{SELECTOR}} .pb-carousel-subtitle",
            section: "Subtitle",
          },
          subtitle_margin: {
            type: "dimension",
            title: "Sub title margin",
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
            section: "Subtitle",
            selector:
              "{{SELECTOR}} .pb-carousel-subtitle{ margin: {{data.subtitle_margin}}; }",
          },
          content: {
            type: "textarea",
            title: "Add content",
            std: "1 year customer support",
            section: "Content",
          },
          content_animation: {
            type: "animation",
            title: "Content Animation",
            section: "Content",
            std: {
              name: "wow animated fadeIn",
              delay: "300",
              duration: "400",
            },
          },
          intro_color: {
            type: "color",
            title: "Content text color",
            section: "Content",
            selector:
              "{{SELECTOR}} .pb-carousel-content { color: {{data.intro_color}}; }",
          },
          intro_fontstyle: {
            type: "typography",
            title: "Content font",
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
                md: "0px",
                sm: "",
                xs: "",
              },
            },
            selector: "{{SELECTOR}} .pb-carousel-content",
            section: "Content",
          },
          intro_margin: {
            type: "dimension",
            title: "Content margin",
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
            section: "Content",
            selector:
              "{{SELECTOR}} .pb-carousel-content { margin: {{data.intro_margin}}; }",
          },
          button_text: {
            type: "text",
            title: "Button text",
            section: "Button one",
            std: "button",
          },
          button_link: {
            type: "link",
            title: "Button link",
            section: "Button one",
          },
          btn_animation1: {
            type: "animation",
            title: "Button 1 Animation",
            section: "Button one",
            std: {
              name: "wow animated fadeInLeft",
              delay: "300",
              duration: "400",
            },
          },
          btn_fontstyle: {
            type: "typography",
            title: "Button font",
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
                md: "0px",
                sm: "",
                xs: "",
              },
            },
            selector: "{{SELECTOR}} .pb-btn-carousel1",
            section: "Button one",
          },
          btn_color: {
            type: "color",
            title: "Button Color",
            clip: true,
            std: "#fff",
            section: "Button one",
            selector:
              "{{SELECTOR}} .pb-btn-carousel1 { color: {{data.btn_color}}; }",
          },
          btn_hover_color: {
            type: "color",
            title: "Button Hover Color",
            section: "Button one",
            clip: true,
            std: "#fff",
            selector:
              "{{SELECTOR}} .pb-btn-carousel1:hover { color: {{data.btn_hover_color}}; }",
          },
          btn_background: {
            type: "color2",
            title: "Button Background",
            section: "Button one",
            clip: false,
            std: {
              clip: false,
              colorType: "color",
              colorColor: "#26c266",
            },
            selector: "{{SELECTOR}} .pb-btn-carousel1",
          },
          btn_hover_background: {
            type: "color2",
            title: "Button Hover Background",
            section: "Button one",
            clip: false,
            std: {
              clip: false,
              colorType: "color",
              colorColor: "#1fa957",
            },
            selector:
              "{{SELECTOR}} .pb-btn-carousel1:before, {{SELECTOR}} .pb-btn-carousel1:hover",
          },
          button_border: {
            type: "border",
            title: "Button Border",
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
            selector:
              "{{SELECTOR}} .pb-btn-carousel1, {{SELECTOR}} .pb-btn-carousel1:before",
            section: "Button one",
          },
          border_hcolor: {
            type: "border",
            title: "Button hover color",
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
            tab: "style",
            section: "Button one",
            selector:
              "{{SELECTOR}} .pb-btn-carousel1:hover, {{SELECTOR}} .pb-btn-carousel1:hover:before",
          },
          btn_radius: {
            type: "dimension",
            title: "Border Radius",
            unit: ["px", "%", "em"],
            std: {
              md: {
                top: "4px",
                right: "4px",
                bottom: "4px",
                left: "4px",
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
            section: "Button one",
            selector:
              "{{SELECTOR}} .pb-btn-carousel1, {{SELECTOR}} .pb-btn-carousel1:before { border-radius: {{data.btn_radius}}; }",
          },
          btn_padding: {
            type: "dimension",
            title: "Button padding",
            std: {
              md: {
                top: "10px",
                right: "15px",
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
            unit: ["px", "em", "%"],
            responsive: true,
            section: "Button one",
            selector:
              "{{SELECTOR}} .pb-btn-carousel1 { padding: {{data.btn_padding}}; }",
          },
          btn_margin: {
            type: "dimension",
            title: "Button margin",
            std: {
              md: {
                top: "0",
                right: "5px",
                bottom: "0",
                left: "0",
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
            section: "Button one",
            selector:
              "{{SELECTOR}} .pb-btn-carousel1 { margin: {{data.btn_margin}}; }",
          },
          button_text2: {
            type: "text",
            title: "Button text 2",
            section: "Button two",
            std: "button",
          },
          button_link2: {
            type: "link",
            title: "Button link 2",
            section: "Button two",
          },
          btn_animation2: {
            type: "animation",
            title: "Button 2 Animation",
            section: "Button two",
            std: {
              name: "wow animated fadeInRight",
              delay: "300",
              duration: "400",
            },
          },
          btn_fontstyle2: {
            type: "typography",
            title: "Button 2 font style",
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
            selector: "{{SELECTOR}} .pb-btn-carousel2",
            section: "Button two",
          },
          btn_color2: {
            type: "color",
            title: "Button Color 2",
            clip: true,
            std: "#fff",
            section: "Button two",
            selector:
              "{{SELECTOR}} .pb-btn-carousel2 { color: {{data.btn_color2}}; }",
          },
          btn_hover_color2: {
            type: "color",
            title: "Button Hover Color 2",
            section: "Button two",
            selector:
              "{{SELECTOR}} .pb-btn-carousel2:hover { color: {{data.btn_hover_color2}}; }",
          },
          btn_background2: {
            type: "color2",
            title: "Button Background 2",
            section: "Button two",
            clip: false,
            std: {
              clip: false,
              colorType: "color",
              colorColor: "#7047eb",
            },
            selector: "{{SELECTOR}} .pb-btn-carousel2",
          },
          btn_hover_background2: {
            type: "color2",
            title: "Button Hover Background 2",
            section: "Button two",
            clip: false,
            std: {
              clip: false,
              colorType: "color",
              colorColor: "#2955ca",
            },
            selector:
              "{{SELECTOR}} .pb-btn-carousel2:before, {{SELECTOR}} .pb-btn-carousel2:hover",
          },
          button_border2: {
            type: "border",
            title: "Button 2 Border",
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
            selector:
              "{{SELECTOR}} .pb-btn-carousel2, {{SELECTOR}} .pb-btn-carousel2:before",
            section: "Button two",
          },
          button_border2_hover: {
            type: "border",
            title: "Border hover",
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
            tab: "style",
            section: "Button two",
            selector:
              "{{SELECTOR}} .pb-btn-carousel2:hover, {{SELECTOR}} .pb-btn-carousel2:hover:before",
          },
          btn_radius2: {
            type: "dimension",
            title: "Border 2 Radius",
            unit: ["px", "%", "em"],
            responsive: true,
            section: "Button two",
            selector:
              "{{SELECTOR}} .pb-btn-carousel2, {{SELECTOR}} .pb-btn-carousel2:before { border-radius: {{data.btn_radius2}}; }",
          },
          btn_padding2: {
            type: "dimension",
            title: "Button 2 padding",
            std: {
              md: {
                top: "10px",
                right: "15px",
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
            unit: ["px", "em", "%"],
            responsive: true,
            section: "Button two",
            selector:
              "{{SELECTOR}} .pb-btn-carousel2 { padding: {{data.btn_padding2}}; }",
          },
          btn_margin2: {
            type: "dimension",
            title: "Button 2 margin",
            std: {
              md: {
                top: "0",
                right: "0",
                bottom: "0",
                left: "5px",
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
            section: "Button two",
            selector:
              "{{SELECTOR}} .pb-btn-carousel2 { margin: {{data.btn_margin2}}; }",
          },
          carosuel_bg: {
            type: "background",
            title: "Background image",
            section: "Background",
            std: "",
            selector: "{{SELECTOR}} .pb-carousel-content-wrap",
          },
          overlay_en: {
            type: "switch",
            title: "Overlay hide",
            std: "0",
            section: "Background",
          },
          carosuel_bg_overlay: {
            type: "color2",
            title: "Background Image overlay",
            section: "Background",
            clip: false,
            std: {
              clip: false,
              colorType: "color",
              colorColor: "#7047eb",
            },
            depends: [["overlay_en", "=", "1"]],
            selector: "{{SELECTOR}} .pb-carousel-overlay",
          },
        },
      },
      nav_color: {
        type: "color",
        title: "Nav Color",
        tab: "style",
        section: "Nav",
        std: "#fff",
        selector:
          "{{SELECTOR}} .pb-carousel .slick-arrow { color: {{data.nav_color}}; }",
      },
      nav_bg: {
        type: "color2",
        title: "Nav Background",
        tab: "style",
        section: "Nav",
        clip: false,
        std: {
          clip: false,
          colorType: "color",
          colorColor: "#252525",
        },
        selector: "{{SELECTOR}} .pb-carousel .slick-arrow",
      },
      nav_width: {
        type: "slider",
        title: "Nav width",
        unit: ["px", "%", "em"],
        range: {
          em: {
            min: 0,
            max: 10,
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
          md: "40px",
          sm: "",
          xs: "",
        },
        responsive: true,
        tab: "style",
        section: "Nav",
        selector:
          "{{SELECTOR}} .pb-carousel .slick-arrow { width: {{data.nav_width}}; }",
      },
      nav_height: {
        type: "slider",
        title: "Nav height",
        unit: ["px", "%", "em"],
        range: {
          em: {
            min: 0,
            max: 10,
            step: 0.1,
          },
          px: {
            min: 0,
            max: 100,
            step: 1,
          },
          "%": {
            min: 0,
            max: 100,
            step: 1,
          },
        },
        std: {
          md: "40px",
          sm: "",
          xs: "",
        },
        responsive: true,
        tab: "style",
        section: "Nav",
        selector:
          "{{SELECTOR}} .pb-carousel .slick-arrow { height: {{data.nav_height}}; }{{SELECTOR}} .pb-carousel .slick-arrow { line-height: {{data.nav_height}}; }",
      },
      nav_radius: {
        type: "dimension",
        title: "Border Radius",
        unit: ["px", "%", "em"],
        std: {
          md: {
            top: "2px",
            right: "2px",
            bottom: "2px",
            left: "2px",
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
        section: "Nav",
        selector:
          "{{SELECTOR}} .pb-carousel .slick-arrow { border-radius: {{data.nav_radius}}; }",
      },
      nav_position: {
        type: "slider",
        title: "Nav Position",
        range: {
          em: {
            min: 0,
            max: 10,
            step: 0.1,
          },
          px: {
            min: -100,
            max: 350,
            step: 1,
          },
          "%": {
            min: 0,
            max: 100,
            step: 1,
          },
        },
        unit: ["px", "%", "em"],
        std: {
          md: "50%",
          sm: "",
          xs: "",
        },
        responsive: true,
        tab: "style",
        section: "Nav",
        selector:
          "{{SELECTOR}} .pb-carousel .slick-arrow { top: {{data.nav_position}}; }",
      },
      dot_bg: {
        type: "color2",
        title: "Dots Background",
        tab: "style",
        section: "Dots",
        clip: false,
        std: {
          clip: false,
          colorType: "color",
          colorColor: "#7047eb",
        },
        selector: "{{SELECTOR}} .pb-carousel .slick-dots li button",
      },
      dots_width: {
        type: "slider",
        title: "Dots width",
        unit: ["px", "%", "em"],
        range: {
          em: {
            min: 0,
            max: 10,
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
          md: "40px",
          sm: "",
          xs: "",
        },
        responsive: true,
        tab: "style",
        section: "Dots",
        selector:
          "{{SELECTOR}} .pb-carousel .slick-dots li button,{{SELECTOR}} .pb-carousel .slick-dots li{ width: {{data.dots_width}}; }",
      },
      dots_height: {
        type: "slider",
        title: "Dots height",
        unit: ["px", "%", "em"],
        range: {
          em: {
            min: 0,
            max: 10,
            step: 0.1,
          },
          px: {
            min: 0,
            max: 100,
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
        section: "Dots",
        selector:
          "{{SELECTOR}} .pb-carousel .slick-dots li button,{{SELECTOR}} .pb-carousel .slick-dots li{ height: {{data.dots_height}}; }",
      },
      dots_radius: {
        type: "dimension",
        title: "Border Radius",
        unit: ["px", "%", "em"],
        std: {
          md: {
            top: "2px",
            right: "2px",
            bottom: "2px",
            left: "2px",
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
        section: "Dots",
        selector:
          "{{SELECTOR}} .pb-carousel .slick-dots li button{ border-radius: {{data.dots_radius}}; }",
      },
      dots_position: {
        type: "slider",
        title: "Dots Position",
        range: {
          em: {
            min: 0,
            max: 10,
            step: 0.1,
          },
          px: {
            min: -100,
            max: 350,
            step: 1,
          },
          "%": {
            min: 0,
            max: 100,
            step: 1,
          },
        },
        unit: ["px", "%", "em"],
        std: {
          md: "35px",
          sm: "",
          xs: "",
        },
        responsive: true,
        tab: "style",
        section: "Dots",
        selector:
          "{{SELECTOR}} .pb-carousel .slick-dots { bottom: {{data.dots_position}}; }",
      },
      content_padding: {
        type: "dimension",
        title: "Content padding",
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
        unit: ["px", "em", "%"],
        responsive: true,
        tab: "style",
        section: "Content",
        selector:
          "{{SELECTOR}} .pb-carousel-content-in { padding: {{data.content_padding}}; }",
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
        unit: ["px", "em", "%"],
        responsive: true,
        tab: "style",
        section: "Content",
        selector:
          "{{SELECTOR}} .pb-carousel-content-in { margin: {{data.content_margin}}; }",
      },
    },
  },
  defaultAddon: true,
group: "basic",
  js_template: true,
};
