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
    general: {},
    style: {},
  },
  defaultAddon: false,
  group: "ecommerce",
  js_template: true,
};
