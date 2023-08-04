import CategoryGridEditor from "../../../components/blocks/ecommerce/categories/CategoryGridEditor";

export const category_grid = {
  type: "content",
  addon_name: "category_grid",
  title: "Category Grid",
  name: "category_grid",
  Editor: CategoryGridEditor,
  Preview: CategoryGridEditor,
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
        type: "api-searchable-select",
        title: "Select Custom Items",
        std: "",
        depends: [["show_custom_items", "=", "1"]],
        multiple: true,
        fetch_url: "/api/v1/categories",
        valueField: "id",
        labelField: "name",
        istree: false,
      },
      max_item: {
        type: "number",
        title: "Max Item",
        std: "10",
        depends: [["show_custom_items", "!=", "1"]],
      },
    },
    style: {},
  },
  defaultAddon: false,
  group: "ecommerce",
  js_template: true,
};
