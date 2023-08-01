import VendorSectionEditor from "../../../components/blocks/ecommerce/vendor/VendorSectionEditor";

export const vendor_section = {
  type: "content",
  addon_name: "vendor_section",
  title: "Vendor Section",
  name: "vendor_section",
  Editor: VendorSectionEditor,
  Preview: VendorSectionEditor,
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
