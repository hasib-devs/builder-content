import ProductGrid from "../../../components/blocks/ecommerce/products/ProductGrid";

export const product_grid = {
  type: "content",
  addon_name: "product_grid",
  title: "Product Grid",
  name: "product_grid",
  Editor: ProductGrid,
  Preview: ProductGrid,
  styleJSON: {
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
  icon: "pb-font-interface",
  attr: {
    general: {
      show_custom_items: {
        type: "switch",
        title: "Show Custom Items",
        std: "0",
      },
      custom_items: {
        type: "api-searchable-select",
        title: "Select Custom Items",
        std: "",
        depends: [["show_custom_items", "=", "1"]],
        multiple: true,
        fetch_url: "/api/v1/products",
        valueField: "id",
        labelField: "title",
        istree: false,
      },
      max_item: {
        type: "number",
        title: "Max Item",
        std: "8",
        depends: [["show_custom_items", "!=", "1"]],
      },
    },
    style: {},
  },
  defaultAddon: false,
  group: "ecommerce",
  js_template: true,
};
