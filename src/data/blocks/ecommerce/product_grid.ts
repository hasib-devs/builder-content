import ProductGrid from "../../../components/blocks/ecommerce/products/ProductGrid";

export const product_grid = {
  type: "content",
  addon_name: "product_grid",
  title: "Product Grid",
  name: "product_grid",
  Editor: ProductGrid,
  Preview: ProductGrid,
  styleJSON: {},
  visibility: true,
  icon: "pb-font-block-number",
  attr: {
    general: {
      show_custom_items: {
        type: "switch",
        title: "Show Custom Items",
        std: "0",
      },
      custom_items: {
        type: "categoryselect",
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
