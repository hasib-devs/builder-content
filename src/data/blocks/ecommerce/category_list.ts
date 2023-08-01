import CategoryListEditor from "../../../components/blocks/ecommerce/categories/CategoryListEditor";

export const category_list = {
  type: "content",
  addon_name: "category_list",
  title: "Category List",
  name: "category_list",
  Editor: CategoryListEditor,
  Preview: CategoryListEditor,
  styleJSON: {},
  visibility: true,
  icon: "pb-font-block-number",
  attr: {
    general: {
      title: {
        type: "text",
        title: "Title",
        std: "Categories",
      },
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
        fetch_url: "https://hasib.dokandev.com/api/v1/categories",
        istree: true,
      },
      max_item: {
        type: "number",
        title: "Max Item",
        std: "12",
        depends: [["show_custom_items", "!=", "1"]],
      },
    },
    style: {},
  },
  defaultAddon: false,
  group: "ecommerce",
  js_template: true,
};
