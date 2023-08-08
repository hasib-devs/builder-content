import FeatureBox from '@/components/blocks/basic/FeatureBox/Editor';
import FlipBox from '@/components/blocks/basic/FlipBox/Editor';
import Form from '@/components/blocks/basic/Form/Editor';
import Heading from '@/components/blocks/basic/Heading/Editor';
import Icon from '@/components/blocks/basic/Icon/Editor';
import ImageHover from '@/components/blocks/basic/ImageHover/Editor';
import PersonCarousel from '@/components/blocks/basic/PersonCarousel/Editor';
import PersonComponent from '@/components/blocks/basic/PersonComponent/Editor';
import PieProgress from '@/components/blocks/basic/PieProgress/Editor';
import PostGrid from '@/components/blocks/basic/PostGrid/Editor';
import PricingTable from '@/components/blocks/basic/PricingTable/Editor';
import ProgressBar from '@/components/blocks/basic/ProgressBar/Editor';
import RawHtml from '@/components/blocks/basic/RawHtml/Editor';
import SocialButton from '@/components/blocks/basic/SocialButton/Editor';
import Tab from '@/components/blocks/basic/Tab/Editor';
import Testimonial from '@/components/blocks/basic/Testimonial/Editor';
import TestimonialCarousel from '@/components/blocks/basic/TestimonialCarousel/Editor';
import VideoComponent from '@/components/blocks/basic/VideoComponent/Editor';
import VideoPopup from '@/components/blocks/basic/VideoPopup/Editor';
import { pb_accordion } from './blocks/basic/pb_accordion';
import { pb_alert } from './blocks/basic/pb_alert';
import { pb_animated_number } from './blocks/basic/pb_animated_number';
import { pb_block_number } from './blocks/basic/pb_block_number';
import { pb_button } from './blocks/basic/pb_button';
import { pb_button_group } from './blocks/basic/pb_button_group';
import { pb_carousel } from './blocks/basic/pb_carousel';
import { pb_image } from './blocks/basic/pb_image';
import { pb_text_block } from './blocks/basic/pb_text_block';
import { category_grid } from './blocks/ecommerce/category_grid';
import { category_list } from './blocks/ecommerce/category_list';
import { product_grid } from './blocks/ecommerce/product_grid';
import { vendor_section } from './blocks/ecommerce/vendor_section';
import { site_header } from './blocks/site/site_header';

export const addonGroups = {
  basic: 'Basic',
  ecommerce: 'Ecommerce',
  site: 'Site',
};

export type AddonGroupType = keyof typeof addonGroups;

export const addonsJSON = {
  // Site
  site_header,
  // Ecommerce
  category_grid,
  category_list,
  product_grid,
  vendor_section,
  // Basic
  pb_accordion,
  pb_alert,
  pb_animated_number,
  pb_block_number,
  pb_button,
  pb_button_group,
  pb_carousel,
  pb_text_block,
  pb_form: {
    type: 'content',
    addon_name: 'pb_form',
    title: 'Form',
    name: 'pb_form',
    category: '',
    Editor: Form,
    Preview: Form,
    styleJSON: {
      'pb_default_form.field_width':
        '{{SELECTOR}} { width: {{data.field_width}}; }',
      vertical_form_space:
        '{{SELECTOR}} .pb-form-field-item-wrap { margin-left: -{{data.vertical_form_space}}; }{{SELECTOR}} .pb-form-field-item-wrap { margin-right: -{{data.vertical_form_space}}; }{{SELECTOR}} .pb-form-field-repeat { padding-left: {{data.vertical_form_space}}; }{{SELECTOR}} .pb-form-field-repeat { padding-right: {{data.vertical_form_space}}; }',
      horizontal_form_space:
        '{{SELECTOR}} .pb-form-field-repeat { margin-bottom: {{data.horizontal_form_space}}; }',
      input_fontstyle:
        '{{SELECTOR}} ul.wpuf-form li .wpuf-fields select, {{SELECTOR}} ul.wpuf-form li .wpuf-fields textarea, {{SELECTOR}} ul.wpuf-form li .wpuf-fields input[type=url], {{SELECTOR}} ul.wpuf-form li .wpuf-fields input[type=email], {{SELECTOR}} ul.wpuf-form li .wpuf-fields input[type=text], {{SELECTOR}} select, {{SELECTOR}} input[type=text], {{SELECTOR}} input[type=email], {{SELECTOR}} textarea, {{SELECTOR}} .pb-form-field-input input, {{SELECTOR}} .pb-form-field-email input, {{SELECTOR}} .pb-form-field-textarea textarea{{data.input_fontstyle}}',
      input_color:
        '{{SELECTOR}} ul.wpuf-form li .wpuf-fields select, {{SELECTOR}} ul.wpuf-form li .wpuf-fields textarea, {{SELECTOR}} ul.wpuf-form li .wpuf-fields input[type=url], {{SELECTOR}} ul.wpuf-form li .wpuf-fields input[type=email], {{SELECTOR}} ul.wpuf-form li .wpuf-fields input[type=text], {{SELECTOR}} select, {{SELECTOR}} input[type=text], {{SELECTOR}} input[type=email], {{SELECTOR}} textarea, {{SELECTOR}} .pb-form-field-input input, {{SELECTOR}} .pb-form-field-email input, {{SELECTOR}} .pb-form-field-textarea textarea { color: {{data.input_color}}; }',
      input_shadow:
        '{{SELECTOR}} ul.wpuf-form li .wpuf-fields select, {{SELECTOR}} ul.wpuf-form li .wpuf-fields textarea, {{SELECTOR}} ul.wpuf-form li .wpuf-fields input[type=url], {{SELECTOR}} ul.wpuf-form li .wpuf-fields input[type=email], {{SELECTOR}} ul.wpuf-form li .wpuf-fields input[type=text], {{SELECTOR}} select, {{SELECTOR}} input[type=text], {{SELECTOR}} input[type=email], {{SELECTOR}} textarea, {{SELECTOR}} .pb-form-field-input input, {{SELECTOR}} .pb-form-field-email input, {{SELECTOR}} .pb-form-field-textarea textarea{{data.input_shadow}}',
      paceholder_color:
        '{{SELECTOR}} .pb-form-field-input input::-webkit-input-placeholder, {{SELECTOR}} .pb-form-field-email input[type=email]::-webkit-input-placeholder, {{SELECTOR}} .pb-form-field-textarea textarea::-webkit-input-placeholder, span.pb-form-field-item.pb-form-field-select select { color: {{data.paceholder_color}}; }',
      input_bg:
        '{{SELECTOR}} ul.wpuf-form li .wpuf-fields select, {{SELECTOR}} ul.wpuf-form li .wpuf-fields textarea, {{SELECTOR}} ul.wpuf-form li .wpuf-fields input[type=url], {{SELECTOR}} ul.wpuf-form li .wpuf-fields input[type=email], {{SELECTOR}} ul.wpuf-form li .wpuf-fields input[type=text], {{SELECTOR}} select, {{SELECTOR}} input[type=text], {{SELECTOR}} input[type=email], {{SELECTOR}} textarea, {{SELECTOR}} .pb-form-field-input input, {{SELECTOR}} .pb-form-field-email input, {{SELECTOR}} .pb-form-field-textarea textarea { background: {{data.input_bg}}; }',
      radio_bg:
        '{{SELECTOR}} .pb-form-field-radio input[type="radio"]:checked + label:before, {{SELECTOR}} .pb-form-field-checkbox input[type="checkbox"]:checked + label:before  { background: {{data.radio_bg}}; }',
      input_border:
        '{{SELECTOR}} ul.wpuf-form li .wpuf-fields textarea, {{SELECTOR}} ul.wpuf-form li .wpuf-fields input[type=url], {{SELECTOR}} ul.wpuf-form li .wpuf-fields input[type=email], {{SELECTOR}} ul.wpuf-form li .wpuf-fields input[type=text], {{SELECTOR}} select, {{SELECTOR}} input[type=text], {{SELECTOR}} input[type=email], {{SELECTOR}} textarea, {{SELECTOR}} .pb-form-field-input input, {{SELECTOR}} .pb-form-field-email input, {{SELECTOR}} .pb-form-field-textarea textarea{{data.input_border}}',
      input_focus_color:
        '{{SELECTOR}} ul.wpuf-form li .wpuf-fields select:focus, {{SELECTOR}} ul.wpuf-form li .wpuf-fields textarea:focus, {{SELECTOR}} ul.wpuf-form li .wpuf-fields input[type=url]:focus, {{SELECTOR}} ul.wpuf-form li .wpuf-fields input[type=email]:focus, {{SELECTOR}} ul.wpuf-form li .wpuf-fields input[type=text]:focus, {{SELECTOR}} select:focus, {{SELECTOR}} input[type=text]:focus, {{SELECTOR}} input[type=email]:focus, {{SELECTOR}} textarea:focus, {{SELECTOR}} .pb-form-field-input input:focus, {{SELECTOR}} .pb-form-field-email input:focus, {{SELECTOR}} .pb-form-field-textarea textarea:focus{{data.input_focus_color}}',
      input_radius:
        '{{SELECTOR}} ul.wpuf-form li .wpuf-fields textarea, {{SELECTOR}} ul.wpuf-form li .wpuf-fields input[type=url], {{SELECTOR}} ul.wpuf-form li .wpuf-fields input[type=email], {{SELECTOR}} ul.wpuf-form li .wpuf-fields input[type=text], {{SELECTOR}} input[type=text], {{SELECTOR}} input[type=email], {{SELECTOR}} textarea, {{SELECTOR}} .pb-form-field-input input, {{SELECTOR}} .pb-form-field-email input, {{SELECTOR}} .pb-form-field-textarea textarea, span.pb-form-field-item.pb-form-field-select select { border-radius: {{data.input_radius}}; }',
      input_padding:
        '{{SELECTOR}} ul.wpuf-form li .wpuf-fields textarea, {{SELECTOR}} ul.wpuf-form li .wpuf-fields input[type=url], {{SELECTOR}} ul.wpuf-form li .wpuf-fields input[type=email], {{SELECTOR}} ul.wpuf-form li .wpuf-fields input[type=text], {{SELECTOR}} input[type=text], {{SELECTOR}} input[type=email], {{SELECTOR}} textarea, {{SELECTOR}} .pb-form-field-input input, {{SELECTOR}} .pb-form-field-email input, {{SELECTOR}} .pb-form-field-textarea textarea, span.pb-form-field-item.pb-form-field-select select { padding: {{data.input_padding}}; }',
      label_fontstyle:
        '{{SELECTOR}} .pb-form-field-label, {{SELECTOR}} .pb-global-form-content label, {{SELECTOR}} label{{data.label_fontstyle}}',
      label_color:
        '{{SELECTOR}} .pb-form-field-label, {{SELECTOR}} .pb-global-form-content label, {{SELECTOR}} label { color: {{data.label_color}}; min-height: 24px; min-width: 20px; }',
      label_margin:
        '{{SELECTOR}} .pb-form-field-label, {{SELECTOR}} .pb-global-form-content label, {{SELECTOR}} label { margin: {{data.label_margin}}; }',
      button_fontstyle:
        '{{SELECTOR}} .pb-btn-forms, {{SELECTOR}} .wpcf7-submit, {{SELECTOR}} .wpuf-form-add.wpuf-style ul.wpuf-form .wpuf-submit input[type=submit]{{data.button_fontstyle}}',
      button_color:
        '{{SELECTOR}} .pb-btn-forms, {{SELECTOR}} .wpcf7-submit, {{SELECTOR}} .wpuf-form-add.wpuf-style ul.wpuf-form .wpuf-submit input[type=submit] { color: {{data.button_color}}; }',
      button_hcolor:
        '{{SELECTOR}} .pb-btn-forms:hover, {{SELECTOR}} .wpcf7-submit:hover, {{SELECTOR}} .wpuf-form-add.wpuf-style ul.wpuf-form .wpuf-submit input[type=submit]:hover { color: {{data.button_hcolor}}; }',
      button_bg:
        '{{SELECTOR}} .pb-btn-forms, {{SELECTOR}} .wpcf7-submit, {{SELECTOR}} .wpuf-form-add.wpuf-style ul.wpuf-form .wpuf-submit input[type=submit]{{data.button_bg}}',
      button_hover_bg:
        '{{SELECTOR}} .pb-btn-forms:before, {{SELECTOR}} .wpcf7-submit:hover, {{SELECTOR}} .wpuf-form-add.wpuf-style ul.wpuf-form .wpuf-submit input[type=submit]:hover{{data.button_hover_bg}}',
      button_border:
        '{{SELECTOR}} .pb-btn-forms, {{SELECTOR}} .wpcf7-submit, {{SELECTOR}} .wpuf-form-add.wpuf-style ul.wpuf-form .wpuf-submit input[type=submit]{{data.button_border}}',
      button_border_hcolor:
        '{{SELECTOR}} .pb-btn-forms:hover, {{SELECTOR}} .wpcf7-submit:hover, {{SELECTOR}} .wpuf-form-add.wpuf-style ul.wpuf-form .wpuf-submit input[type=submit]:hover{{data.button_border_hcolor}}',
      button_radius:
        '{{SELECTOR}} .pb-btn-forms, {{SELECTOR}} .wpcf7-submit, {{SELECTOR}} .wpuf-form-add.wpuf-style ul.wpuf-form .wpuf-submit input[type=submit] { border-radius: {{data.button_radius}}; }',
      button_hover_radius:
        '{{SELECTOR}} .pb-btn-forms:hover, {{SELECTOR}} .wpcf7-submit:hover, {{SELECTOR}} .wpuf-form-add.wpuf-style ul.wpuf-form .wpuf-submit input[type=submit]:hover { border-radius: {{data.button_hover_radius}}; }',
      button_padding:
        '{{SELECTOR}} .pb-btn-forms, {{SELECTOR}} .wpcf7-submit, {{SELECTOR}} .wpuf-form-add.wpuf-style ul.wpuf-form .wpuf-submit input[type=submit] { padding: {{data.button_padding}}; }',
      button_margin:
        '{{SELECTOR}} .pb-btn-forms, {{SELECTOR}} .wpcf7-submit, {{SELECTOR}} .wpuf-form-add.wpuf-style ul.wpuf-form .wpuf-submit input[type=submit] { margin: {{data.button_margin}}; }',
      button_align:
        '{{SELECTOR}} .pb-form-btn-wrap { text-align: {{data.button_align}}; }',
      addon_z_index:
        '.pb-builder-container {{SELECTOR}}{ z-index: {{data.addon_z_index}}; }',
      addon_padding: '{{SELECTOR}}{ padding: {{data.addon_padding}}; }',
      addon_margin: '{{SELECTOR}}{ margin: {{data.addon_margin}}; }',
      addon_background: '{{SELECTOR}}',
      addon_color_opacity: '{{SELECTOR}}:after{{data.addon_color_opacity}}',
      addon_opacity:
        '{{SELECTOR}}:after{ content: " "; z-index: 0; display: block; position: absolute; height: 100%; top: 0; left: 0; right: 0; opacity:{{data.addon_opacity}}; }',
      addon_color_blend:
        '{{SELECTOR}}:after{ mix-blend-mode:{{data.addon_color_blend}}; }',
      addon_border: '{{SELECTOR}}{{data.addon_border}}',
      addon_border_hover: '{{SELECTOR}}:hover{{data.addon_border_hover}}',
      addon_border_radius:
        '{{SELECTOR}}, {{SELECTOR}}:after{ border-radius: {{data.addon_border_radius}}; overflow:hidden; }',
      addon_border_radius_hover:
        '{{SELECTOR}}:hover, {{SELECTOR}}:hover:after{ border-radius: {{data.addon_border_radius_hover}};overflow:hidden; }',
      addon_boxshadow: '{{SELECTOR}}{{data.addon_boxshadow}}',
      addon_boxshadow_hover: '{{SELECTOR}}:hover{{data.addon_boxshadow_hover}}',
      addon_wrap_opacity:
        '{{SELECTOR}} .pb-addon{ opacity:{{data.addon_wrap_opacity}}; }',
      addon_wrap_opacity_hover:
        '{{SELECTOR}} .pb-addon:hover{ opacity:{{data.addon_wrap_opacity_hover}}; }',
      addon_display: '{{SELECTOR}}{ display: {{data.addon_display}} ; }',
    },
    visibility: true,
    icon: 'pb-font-envelope',
    attr: {
      general: {
        form_type: {
          type: 'select',
          title: 'Select Plugin',
          placeholder: 'Select Placeholder',
          values: {
            pb_default_form: 'Default Form',
            cf7_form_not_installed: 'Contact Form 7 (not installed)',
            we_form_not_installed: 'weForms (not installed)',
          },
          std: 'pb_default_form',
          multiple: false,
        },
        cf7_form: {
          type: 'select',
          title: 'Contact form 7',
          values: [],
          depends: [['form_type', '=', ['cf7_form']]],
        },
        we_form: {
          type: 'select',
          title: 'WeForm',
          values: [],
          depends: [['form_type', '=', ['we_form']]],
        },
        pb_default_form: {
          title: 'Form Fields',
          type: 'repeatable',
          label: 'label',
          std: [
            {
              label: 'First Name',
              field_type: 'text',
              placeholder: 'First Name',
              field_width: {
                md: '50%',
                sm: '',
                xs: '',
              },
            },
            {
              label: 'Last Name',
              field_type: 'text',
              placeholder: 'Last Name',
              field_width: {
                md: '50%',
                sm: '',
                xs: '',
              },
            },
            {
              label: 'Email',
              field_type: 'email',
              placeholder: 'Email',
              require: '1',
              field_width: {
                md: '50%',
                sm: '',
                xs: '',
              },
            },
            {
              label: 'Subject',
              field_type: 'text',
              placeholder: 'Subject',
              field_width: {
                md: '50%',
                sm: '',
                xs: '',
              },
            },
            {
              label: 'Comment',
              field_type: 'textarea',
              placeholder: 'Add Comment Here',
              field_width: {
                md: '100%',
                sm: '',
                xs: '',
              },
            },
          ],
          attr: {
            label: {
              type: 'text',
              title: 'Label',
            },
            field_id: {
              type: 'text',
              title: 'Field ID',
              desc: 'Define the unique ID of this field. Use only English characters without special characters and spaces.',
            },
            placeholder: {
              type: 'text',
              title: 'Placeholder',
              std: '',
              depends: [['field_type', '=', ['text', 'email', 'textarea']]],
            },
            require: {
              type: 'switch',
              title: 'Required Field',
              std: '1',
              desc: 'Define whether the field should be required or optional',
            },
            field_width: {
              type: 'slider',
              title: 'Field Width',
              unit: ['px', 'em', '%'],
              range: {
                em: {
                  min: 0,
                  max: 50,
                  step: 0.1,
                },
                px: {
                  min: 1,
                  max: 400,
                  step: 1,
                },
                '%': {
                  min: 0,
                  max: 100,
                  step: 1,
                },
              },
              std: {
                md: '50%',
                sm: '50%',
              },
              responsive: true,
              selector: '{{SELECTOR}} { width: {{data.field_width}}; }',
            },
            field_type: {
              type: 'select',
              title: 'Field Type',
              values: {
                text: 'Text',
                email: 'E-Mail',
                radio: 'Radio',
                checkbox: 'Checkbox',
                textarea: 'Textarea',
                select: 'Dropdown',
              },
              std: 'text',
            },
            radio_field_options: {
              title: 'Add Option',
              type: 'repeatable',
              label: 'label',
              std: [],
              attr: {
                label: {
                  type: 'text',
                  title: 'Radio Name',
                  std: '',
                },
              },
              depends: [['field_type', '=', 'radio']],
            },
            checkbox_field_options: {
              title: 'Add Option',
              type: 'repeatable',
              std: [],
              label: 'label',
              attr: {
                label: {
                  type: 'text',
                  title: 'Checkbox Name',
                  std: '',
                },
              },
              depends: [['field_type', '=', 'checkbox']],
            },
            select_options: {
              title: 'Select Option',
              type: 'repeatable',
              std: [],
              label: 'label',
              attr: {
                label: {
                  type: 'text',
                  title: 'Option Name',
                  std: '',
                },
              },
              depends: [['field_type', '=', 'select']],
            },
          },
          depends: [['form_type', '=', ['pb_default_form']]],
        },
        pb_default_form_to_email: {
          type: 'text',
          title: 'Recipient E-Mail',
          std: 'hasib.active@gmail.com',
          section: 'Email',
          depends: [['form_type', '=', ['pb_default_form']]],
        },
        pb_default_form_from_email: {
          type: 'text',
          title: 'From E-Mail',
          std: 'hasib.active@gmail.com',
          section: 'Email',
          depends: [['form_type', '=', ['pb_default_form']]],
        },
        pb_default_form_subject: {
          type: 'text',
          title: 'Subject',
          std: 'A new query has been placed at {datetime}',
          section: 'Email',
          desc: 'You can set veraible for date time, available variable, <strong>{date}, {time}, {datetime}</strong>',
          depends: [['form_type', '=', ['pb_default_form']]],
        },
        email_format: {
          type: 'textarea',
          title: 'Message Format',
          std: '',
          section: 'Email',
          desc: 'Custom Message format for this form, should be use like, <strong>My Message is {Message}</strong>',
          depends: [['form_type', '=', ['pb_default_form']]],
        },
        success_message: {
          type: 'text',
          title: 'Success Message',
          std: '',
          section: 'Email',
          desc: 'Type the message you want to display after successful form submission. Leave blank for default',
          depends: [['form_type', '=', ['pb_default_form']]],
        },
        enable_redirect_url: {
          type: 'switch',
          title: 'Enable Redirect URL',
          std: '0',
          section: 'Redirect',
          desc: 'Define whether the field should be required or optional',
          depends: [['form_type', '=', ['pb_default_form']]],
        },
        redirect_url: {
          type: 'text',
          title: 'Redirect URL',
          std: '',
          section: 'Redirect',
          desc: 'Your redirect URL will be here',
          depends: [
            ['form_type', '=', 'pb_default_form'],
            ['enable_redirect_url', '=', '1'],
          ],
        },
        enable_simple_recaptcha: {
          type: 'switch',
          title: 'Enable Simple ReCAPTCHA',
          std: '0',
          section: 'Security',
          desc: 'Enable or disable Simple ReCAPTCHA',
          depends: [
            ['form_type', '=', ['pb_default_form']],
            ['enable_google_recaptcha', '!=', '1'],
          ],
        },
        enable_google_recaptcha: {
          type: 'switch',
          title: 'Enable Google ReCAPTCHA',
          std: '0',
          section: 'Security',
          desc: 'Enable or disable Google ReCAPTCHA',
          depends: [
            ['form_type', '=', ['pb_default_form']],
            ['enable_simple_recaptcha', '!=', '1'],
          ],
        },
        google_recaptcha_site_key: {
          type: 'text',
          title: 'Site key',
          std: '',
          desc: 'Use this in the HTML code your site serves to users.',
          section: 'Security',
          depends: [
            ['form_type', '=', ['pb_default_form']],
            ['enable_google_recaptcha', '=', '1'],
          ],
        },
        google_recaptcha_secret_key: {
          type: 'text',
          title: 'Secret key',
          std: '',
          desc: 'Use this for communication between your site and Google. Be sure to keep it a secret.',
          section: 'Security',
          depends: [
            ['form_type', '=', ['pb_default_form']],
            ['enable_google_recaptcha', '=', '1'],
          ],
        },
        button_text: {
          type: 'text',
          title: 'Button text',
          std: 'Submit Form',
          section: 'Button',
          depends: [['form_type', '=', ['pb_default_form']]],
        },
        icon_list: {
          type: 'icon',
          title: 'Button icon',
          std: '',
          section: 'Button',
          depends: [['form_type', '=', ['pb_default_form']]],
        },
        icon_position: {
          type: 'select',
          title: 'Button icon position',
          depends: [['form_type', '=', ['pb_default_form']]],
          values: {
            left: 'Left',
            right: 'Right',
          },
          std: 'left',
          section: 'Button',
        },
        fullwidth_button: {
          type: 'select',
          section: 'Button',
          title: 'Full Width',
          values: {
            'full-yes': 'Yes',
            'full-no': 'No',
          },
          std: 'no',
        },
        vertical_form_space: {
          type: 'slider',
          title: 'Vertical Spacing',
          unit: ['px', '%', 'em'],
          range: {
            em: {
              min: 0,
              max: 15,
              step: 0.1,
            },
            px: {
              min: 0,
              max: 200,
              step: 1,
            },
            '%': {
              min: 0,
              max: 100,
              step: 1,
            },
          },
          std: {
            md: '15px',
            sm: '',
            xs: '',
          },
          responsive: true,
          tab: 'style',
          section: 'Form Style',
          selector: [
            '{{SELECTOR}} .pb-form-field-item-wrap { margin-left: -{{data.vertical_form_space}}; }',
            '{{SELECTOR}} .pb-form-field-item-wrap { margin-right: -{{data.vertical_form_space}}; }',
            '{{SELECTOR}} .pb-form-field-repeat { padding-left: {{data.vertical_form_space}}; }',
            '{{SELECTOR}} .pb-form-field-repeat { padding-right: {{data.vertical_form_space}}; }',
          ],
          depends: [['form_type', '=', ['pb_default_form']]],
        },
        horizontal_form_space: {
          type: 'slider',
          title: 'Horizontal Spacing',
          unit: ['px', '%', 'em'],
          range: {
            em: {
              min: 0,
              max: 15,
              step: 0.1,
            },
            px: {
              min: 0,
              max: 200,
              step: 1,
            },
            '%': {
              min: 0,
              max: 100,
              step: 1,
            },
          },
          std: {
            md: '25px',
            sm: '',
            xs: '',
          },
          responsive: true,
          tab: 'style',
          section: 'Form Style',
          selector: [
            '{{SELECTOR}} .pb-form-field-repeat { margin-bottom: {{data.horizontal_form_space}}; }',
          ],
          depends: [['form_type', '=', ['pb_default_form']]],
        },
        input_fontstyle: {
          type: 'typography',
          title: 'Input Typography',
          std: {
            fontFamily: '',
            fontSize: {
              md: '14px',
              sm: '',
              xs: '',
            },
            lineHeight: {
              md: '',
              sm: '',
              xs: '',
            },
            fontWeight: '400',
            textTransform: '',
            fontStyle: '',
            letterSpacing: {
              md: '',
              sm: '',
              xs: '',
            },
          },
          selector:
            '{{SELECTOR}} ul.wpuf-form li .wpuf-fields select, {{SELECTOR}} ul.wpuf-form li .wpuf-fields textarea, {{SELECTOR}} ul.wpuf-form li .wpuf-fields input[type=url], {{SELECTOR}} ul.wpuf-form li .wpuf-fields input[type=email], {{SELECTOR}} ul.wpuf-form li .wpuf-fields input[type=text], {{SELECTOR}} select, {{SELECTOR}} input[type=text], {{SELECTOR}} input[type=email], {{SELECTOR}} textarea, {{SELECTOR}} .pb-form-field-input input, {{SELECTOR}} .pb-form-field-email input, {{SELECTOR}} .pb-form-field-textarea textarea',
          depends: [['label_show', '=', '1']],
          section: 'Form Style',
          tab: 'style',
        },
        input_color: {
          type: 'color',
          title: 'Input color',
          tab: 'style',
          section: 'Form Style',
          std: '#454545',
          selector:
            '{{SELECTOR}} ul.wpuf-form li .wpuf-fields select, {{SELECTOR}} ul.wpuf-form li .wpuf-fields textarea, {{SELECTOR}} ul.wpuf-form li .wpuf-fields input[type=url], {{SELECTOR}} ul.wpuf-form li .wpuf-fields input[type=email], {{SELECTOR}} ul.wpuf-form li .wpuf-fields input[type=text], {{SELECTOR}} select, {{SELECTOR}} input[type=text], {{SELECTOR}} input[type=email], {{SELECTOR}} textarea, {{SELECTOR}} .pb-form-field-input input, {{SELECTOR}} .pb-form-field-email input, {{SELECTOR}} .pb-form-field-textarea textarea { color: {{data.input_color}}; }',
        },
        input_shadow: {
          type: 'boxshadow',
          tab: 'style',
          section: 'Form Style',
          title: 'Input Boxshadow',
          std: {
            shadowValue: {
              top: '0px',
              right: '0px',
              bottom: '10px',
              left: '0px',
            },
            shadowColor: '#333',
          },
          selector:
            '{{SELECTOR}} ul.wpuf-form li .wpuf-fields select, {{SELECTOR}} ul.wpuf-form li .wpuf-fields textarea, {{SELECTOR}} ul.wpuf-form li .wpuf-fields input[type=url], {{SELECTOR}} ul.wpuf-form li .wpuf-fields input[type=email], {{SELECTOR}} ul.wpuf-form li .wpuf-fields input[type=text], {{SELECTOR}} select, {{SELECTOR}} input[type=text], {{SELECTOR}} input[type=email], {{SELECTOR}} textarea, {{SELECTOR}} .pb-form-field-input input, {{SELECTOR}} .pb-form-field-email input, {{SELECTOR}} .pb-form-field-textarea textarea',
        },
        paceholder_color: {
          type: 'color',
          title: 'Placeholder color',
          tab: 'style',
          section: 'Form Style',
          std: '#d5d5d5',
          selector:
            '{{SELECTOR}} .pb-form-field-input input::-webkit-input-placeholder, {{SELECTOR}} .pb-form-field-email input[type=email]::-webkit-input-placeholder, {{SELECTOR}} .pb-form-field-textarea textarea::-webkit-input-placeholder, span.pb-form-field-item.pb-form-field-select select { color: {{data.paceholder_color}}; }',
        },
        input_bg: {
          type: 'color',
          title: 'Input background color',
          tab: 'style',
          section: 'Form Style',
          std: '',
          selector:
            '{{SELECTOR}} ul.wpuf-form li .wpuf-fields select, {{SELECTOR}} ul.wpuf-form li .wpuf-fields textarea, {{SELECTOR}} ul.wpuf-form li .wpuf-fields input[type=url], {{SELECTOR}} ul.wpuf-form li .wpuf-fields input[type=email], {{SELECTOR}} ul.wpuf-form li .wpuf-fields input[type=text], {{SELECTOR}} select, {{SELECTOR}} input[type=text], {{SELECTOR}} input[type=email], {{SELECTOR}} textarea, {{SELECTOR}} .pb-form-field-input input, {{SELECTOR}} .pb-form-field-email input, {{SELECTOR}} .pb-form-field-textarea textarea { background: {{data.input_bg}}; }',
        },
        radio_bg: {
          type: 'color',
          title: 'Radio/Checkbok active bg color',
          tab: 'style',
          section: 'Form Style',
          std: '#00a7ff',
          depends: [['form_type', '=', ['pb_default_form']]],
          selector:
            '{{SELECTOR}} .pb-form-field-radio input[type="radio"]:checked + label:before, {{SELECTOR}} .pb-form-field-checkbox input[type="checkbox"]:checked + label:before  { background: {{data.radio_bg}}; }',
        },
        input_border: {
          type: 'border',
          title: 'Input Border',
          std: {
            itemOpenBorder: 1,
            borderWidth: {
              top: '1px',
              right: '1px',
              bottom: '1px',
              left: '1px',
            },
            borderStyle: 'solid',
            borderColor: '#e5e5e5',
          },
          tab: 'style',
          section: 'Form Style',
          selector:
            '{{SELECTOR}} ul.wpuf-form li .wpuf-fields textarea, {{SELECTOR}} ul.wpuf-form li .wpuf-fields input[type=url], {{SELECTOR}} ul.wpuf-form li .wpuf-fields input[type=email], {{SELECTOR}} ul.wpuf-form li .wpuf-fields input[type=text], {{SELECTOR}} select, {{SELECTOR}} input[type=text], {{SELECTOR}} input[type=email], {{SELECTOR}} textarea, {{SELECTOR}} .pb-form-field-input input, {{SELECTOR}} .pb-form-field-email input, {{SELECTOR}} .pb-form-field-textarea textarea',
        },
        input_focus_color: {
          type: 'border',
          title: 'Input focus boder color',
          tab: 'style',
          section: 'Form Style',
          std: {
            itemOpenBorder: 1,
            borderWidth: {
              top: '1px',
              right: '1px',
              bottom: '1px',
              left: '1px',
            },
            borderStyle: 'solid',
            borderColor: '#7047eb',
          },
          selector:
            '{{SELECTOR}} ul.wpuf-form li .wpuf-fields select:focus, {{SELECTOR}} ul.wpuf-form li .wpuf-fields textarea:focus, {{SELECTOR}} ul.wpuf-form li .wpuf-fields input[type=url]:focus, {{SELECTOR}} ul.wpuf-form li .wpuf-fields input[type=email]:focus, {{SELECTOR}} ul.wpuf-form li .wpuf-fields input[type=text]:focus, {{SELECTOR}} select:focus, {{SELECTOR}} input[type=text]:focus, {{SELECTOR}} input[type=email]:focus, {{SELECTOR}} textarea:focus, {{SELECTOR}} .pb-form-field-input input:focus, {{SELECTOR}} .pb-form-field-email input:focus, {{SELECTOR}} .pb-form-field-textarea textarea:focus',
        },
        input_radius: {
          type: 'dimension',
          title: 'Input border radius',
          unit: ['px', '%', 'em'],
          std: {
            md: {
              top: '3px',
              right: '3px',
              bottom: '3px',
              left: '3px',
            },
            sm: {
              top: '',
              right: '',
              bottom: '',
              left: '',
            },
            xs: {
              top: '',
              right: '',
              bottom: '',
              left: '',
            },
          },
          responsive: true,
          tab: 'style',
          section: 'Form Style',
          selector:
            '{{SELECTOR}} ul.wpuf-form li .wpuf-fields textarea, {{SELECTOR}} ul.wpuf-form li .wpuf-fields input[type=url], {{SELECTOR}} ul.wpuf-form li .wpuf-fields input[type=email], {{SELECTOR}} ul.wpuf-form li .wpuf-fields input[type=text], {{SELECTOR}} input[type=text], {{SELECTOR}} input[type=email], {{SELECTOR}} textarea, {{SELECTOR}} .pb-form-field-input input, {{SELECTOR}} .pb-form-field-email input, {{SELECTOR}} .pb-form-field-textarea textarea, span.pb-form-field-item.pb-form-field-select select { border-radius: {{data.input_radius}}; }',
        },
        input_padding: {
          type: 'dimension',
          title: 'Input padding',
          std: {
            md: {
              top: '10px',
              right: '15px',
              bottom: '10px',
              left: '15px',
            },
            sm: {
              top: '',
              right: '',
              bottom: '',
              left: '',
            },
            xs: {
              top: '',
              right: '',
              bottom: '',
              left: '',
            },
          },
          unit: ['px', 'em', '%'],
          responsive: true,
          section: 'Form Style',
          tab: 'style',
          selector:
            '{{SELECTOR}} ul.wpuf-form li .wpuf-fields textarea, {{SELECTOR}} ul.wpuf-form li .wpuf-fields input[type=url], {{SELECTOR}} ul.wpuf-form li .wpuf-fields input[type=email], {{SELECTOR}} ul.wpuf-form li .wpuf-fields input[type=text], {{SELECTOR}} input[type=text], {{SELECTOR}} input[type=email], {{SELECTOR}} textarea, {{SELECTOR}} .pb-form-field-input input, {{SELECTOR}} .pb-form-field-email input, {{SELECTOR}} .pb-form-field-textarea textarea, span.pb-form-field-item.pb-form-field-select select { padding: {{data.input_padding}}; }',
        },
        textarea_resize: {
          type: 'switch',
          title: 'Textarea resize',
          std: '0',
          tab: 'style',
          section: 'Form Style',
        },
        label_show: {
          type: 'switch',
          title: 'Label button',
          std: '1',
          tab: 'style',
          section: 'Label',
        },
        label_fontstyle: {
          type: 'typography',
          title: 'Label Typography',
          std: {
            fontFamily: '',
            fontSize: {
              md: '14px',
              sm: '',
              xs: '',
            },
            lineHeight: {
              md: '',
              sm: '',
              xs: '',
            },
            fontWeight: '400',
            textTransform: '',
            fontStyle: '',
            letterSpacing: {
              md: '',
              sm: '',
              xs: '',
            },
          },
          selector:
            '{{SELECTOR}} .pb-form-field-label, {{SELECTOR}} .pb-global-form-content label, {{SELECTOR}} label',
          depends: [['label_show', '=', '1']],
          section: 'Label',
          tab: 'style',
        },
        label_color: {
          type: 'color',
          title: 'label Color',
          tab: 'style',
          section: 'Label',
          std: '#353535',
          depends: [['label_show', '=', '1']],
          selector:
            '{{SELECTOR}} .pb-form-field-label, {{SELECTOR}} .pb-global-form-content label, {{SELECTOR}} label { color: {{data.label_color}}; min-height: 24px; min-width: 20px; }',
        },
        label_margin: {
          type: 'dimension',
          title: 'Label margin',
          std: {
            md: {
              top: '0px',
              right: '0px',
              bottom: '10px',
              left: '0px',
            },
            sm: {
              top: '',
              right: '',
              bottom: '',
              left: '',
            },
            xs: {
              top: '',
              right: '',
              bottom: '',
              left: '',
            },
          },
          unit: ['px', 'em', '%'],
          responsive: true,
          tab: 'style',
          section: 'Label',
          depends: [['label_show', '=', '1']],
          selector:
            '{{SELECTOR}} .pb-form-field-label, {{SELECTOR}} .pb-global-form-content label, {{SELECTOR}} label { margin: {{data.label_margin}}; }',
        },
        button_fontstyle: {
          type: 'typography',
          title: 'Typography',
          std: {
            fontFamily: '',
            fontSize: {
              md: '12px',
              sm: '',
              xs: '',
            },
            lineHeight: {
              md: '',
              sm: '',
              xs: '',
            },
            fontWeight: '400',
            textTransform: '',
            fontStyle: '',
            letterSpacing: {
              md: '',
              sm: '',
              xs: '',
            },
          },
          selector:
            '{{SELECTOR}} .pb-btn-forms, {{SELECTOR}} .wpcf7-submit, {{SELECTOR}} .wpuf-form-add.wpuf-style ul.wpuf-form .wpuf-submit input[type=submit]',
          section: 'Button',
          tab: 'style',
        },
        button_color: {
          type: 'color',
          title: 'Color',
          tab: 'style',
          section: 'Button',
          std: '#ffffff',
          selector:
            '{{SELECTOR}} .pb-btn-forms, {{SELECTOR}} .wpcf7-submit, {{SELECTOR}} .wpuf-form-add.wpuf-style ul.wpuf-form .wpuf-submit input[type=submit] { color: {{data.button_color}}; }',
        },
        button_hcolor: {
          type: 'color',
          title: 'Hover color',
          tab: 'style',
          section: 'Button',
          std: '#ffffff',
          selector:
            '{{SELECTOR}} .pb-btn-forms:hover, {{SELECTOR}} .wpcf7-submit:hover, {{SELECTOR}} .wpuf-form-add.wpuf-style ul.wpuf-form .wpuf-submit input[type=submit]:hover { color: {{data.button_hcolor}}; }',
        },
        button_bg: {
          type: 'color2',
          title: 'Background',
          tab: 'style',
          section: 'Button',
          clip: false,
          std: {
            clip: false,
            colorType: 'color',
            colorColor: '#7047EB',
          },
          selector:
            '{{SELECTOR}} .pb-btn-forms, {{SELECTOR}} .wpcf7-submit, {{SELECTOR}} .wpuf-form-add.wpuf-style ul.wpuf-form .wpuf-submit input[type=submit]',
        },
        button_hover_bg: {
          type: 'color2',
          title: 'Hover background',
          tab: 'style',
          section: 'Button',
          clip: false,
          std: {
            clip: false,
            colorType: 'color',
            colorColor: '#1fae51',
          },
          selector:
            '{{SELECTOR}} .pb-btn-forms:before, {{SELECTOR}} .wpcf7-submit:hover, {{SELECTOR}} .wpuf-form-add.wpuf-style ul.wpuf-form .wpuf-submit input[type=submit]:hover',
        },
        button_border: {
          type: 'border',
          title: 'Border',
          std: {
            itemOpenBorder: 1,
            borderWidth: {
              top: '0px',
              right: '0px',
              bottom: '0px',
              left: '0px',
            },
            borderStyle: 'solid',
            borderColor: '#cccccc',
          },
          tab: 'style',
          section: 'Button',
          selector:
            '{{SELECTOR}} .pb-btn-forms, {{SELECTOR}} .wpcf7-submit, {{SELECTOR}} .wpuf-form-add.wpuf-style ul.wpuf-form .wpuf-submit input[type=submit]',
        },
        button_border_hcolor: {
          type: 'border',
          title: 'Border hover',
          std: {
            itemOpenBorder: 1,
            borderWidth: {
              top: '0px',
              right: '0px',
              bottom: '0px',
              left: '0px',
            },
            borderStyle: 'solid',
            borderColor: '#cccccc',
          },
          tab: 'style',
          section: 'Button',
          selector:
            '{{SELECTOR}} .pb-btn-forms:hover, {{SELECTOR}} .wpcf7-submit:hover, {{SELECTOR}} .wpuf-form-add.wpuf-style ul.wpuf-form .wpuf-submit input[type=submit]:hover',
        },
        button_radius: {
          type: 'dimension',
          title: 'Button radius',
          unit: ['px', '%', 'em'],
          std: {
            md: {
              top: '5px',
              right: '5px',
              bottom: '5px',
              left: '5px',
            },
            sm: {
              top: '',
              right: '',
              bottom: '',
              left: '',
            },
            xs: {
              top: '',
              right: '',
              bottom: '',
              left: '',
            },
          },
          responsive: true,
          tab: 'style',
          section: 'Button',
          selector:
            '{{SELECTOR}} .pb-btn-forms, {{SELECTOR}} .wpcf7-submit, {{SELECTOR}} .wpuf-form-add.wpuf-style ul.wpuf-form .wpuf-submit input[type=submit] { border-radius: {{data.button_radius}}; }',
        },
        button_hover_radius: {
          type: 'dimension',
          title: 'Button hover radius',
          unit: ['px', '%', 'em'],
          std: {
            md: {
              top: '5px',
              right: '5px',
              bottom: '5px',
              left: '5px',
            },
            sm: {
              top: '',
              right: '',
              bottom: '',
              left: '',
            },
            xs: {
              top: '',
              right: '',
              bottom: '',
              left: '',
            },
          },
          responsive: true,
          tab: 'style',
          section: 'Button',
          selector:
            '{{SELECTOR}} .pb-btn-forms:hover, {{SELECTOR}} .wpcf7-submit:hover, {{SELECTOR}} .wpuf-form-add.wpuf-style ul.wpuf-form .wpuf-submit input[type=submit]:hover { border-radius: {{data.button_hover_radius}}; }',
        },
        button_padding: {
          type: 'dimension',
          title: 'Button padding',
          std: {
            md: {
              top: '10px',
              right: '20px',
              bottom: '10px',
              left: '20px',
            },
            sm: {
              top: '',
              right: '',
              bottom: '',
              left: '',
            },
            xs: {
              top: '',
              right: '',
              bottom: '',
              left: '',
            },
          },
          unit: ['px', 'em', '%'],
          responsive: true,
          section: 'Button',
          tab: 'style',
          selector:
            '{{SELECTOR}} .pb-btn-forms, {{SELECTOR}} .wpcf7-submit, {{SELECTOR}} .wpuf-form-add.wpuf-style ul.wpuf-form .wpuf-submit input[type=submit] { padding: {{data.button_padding}}; }',
        },
        button_margin: {
          type: 'dimension',
          title: 'Button margin',
          std: {
            md: {
              top: '15px',
              right: '0px',
              bottom: '0',
              left: '0',
            },
            sm: {
              top: '',
              right: '',
              bottom: '',
              left: '',
            },
            xs: {
              top: '',
              right: '',
              bottom: '',
              left: '',
            },
          },
          unit: ['px', 'em', '%'],
          responsive: true,
          tab: 'style',
          section: 'Button',
          selector:
            '{{SELECTOR}} .pb-btn-forms, {{SELECTOR}} .wpcf7-submit, {{SELECTOR}} .wpuf-form-add.wpuf-style ul.wpuf-form .wpuf-submit input[type=submit] { margin: {{data.button_margin}}; }',
        },
        button_align: {
          type: 'alignment',
          title: 'Alignment',
          std: {
            md: 'left',
            sm: '',
            xs: '',
          },
          responsive: true,
          tab: 'style',
          section: 'Button',
          selector:
            '{{SELECTOR}} .pb-form-btn-wrap { text-align: {{data.button_align}}; }',
          depends: [['form_type', '=', ['pb_default_form']]],
        },
      },
    },
    defaultAddon: true,
    group: 'basic',
    js_template: true,
  },
  pb_feature_box: {
    type: 'content',
    addon_name: 'pb_feature_box',
    title: 'Feature Box',
    name: 'pb_feature_box',
    category: '',
    Editor: FeatureBox,
    Preview: FeatureBox,
    styleJSON: {
      flip_height:
        '{{SELECTOR}} .pb-flipbox-panel, {{SELECTOR}} .threeD-item { height: {{data.flip_height}}; }',
      flip_radius:
        '{{SELECTOR}} .pb-flipbox-front.flip-box:before, {{SELECTOR}} .threeD-flip-front:before,{{SELECTOR}} .pb-flipbox-back.flip-box:before, {{SELECTOR}} .threeD-flip-back:before { border-radius: {{data.flip_radius}}; }',
      front_bg:
        '{{SELECTOR}} .pb-flipbox-front.flip-box:before, {{SELECTOR}} .threeD-flip-front:before',
      front_align:
        '{{SELECTOR}} .pb-flipbox-front, {{SELECTOR}} .threeD-flip-front{ text-align: {{data.front_align}}; }',
      back_bg:
        '{{SELECTOR}} .pb-flipbox-back.flip-box:before, {{SELECTOR}} .threeD-flip-back:before',
      back_align:
        '{{SELECTOR}} .pb-flipbox-back, .threeD-flip-back { text-align: {{data.back_align}}; }',
      front_title_color:
        '{{SELECTOR}} .pb-flip-front-title{{data.front_title_color}}',
      front_title_style:
        '{{SELECTOR}} .pb-flip-front-title{{data.front_title_style}}',
      front_title_margin:
        '{{SELECTOR}} .pb-flip-front-title { margin: {{data.front_title_margin}}; }',
      front_intro_color:
        '{{SELECTOR}} .pb-flip-front-intro { color: {{data.front_intro_color}}; }',
      front_intro_style:
        '{{SELECTOR}} .pb-flip-front-intro{{data.front_intro_style}}',
      front_intro_margin:
        '{{SELECTOR}} .pb-flip-front-intro { margin: {{data.front_intro_margin}}; }',
      front_img_width:
        '{{SELECTOR}} .pb-flip-front-img img { width: {{data.front_img_width}}; }',
      front_img_height:
        '{{SELECTOR}} .pb-flip-front-img img { height: {{data.front_img_height}}; }',
      front_border_radius:
        '{{SELECTOR}} .pb-flip-front-img img { border-radius: {{data.front_border_radius}}; }',
      front_img_margin:
        '{{SELECTOR}} .pb-flip-front-img img { margin: {{data.front_img_margin}}; }',
      front_icon_size:
        '{{SELECTOR}} .pb-flip-front-icon i { font-size: {{data.front_icon_size}}; }',
      front_icon_width:
        '{{SELECTOR}} .pb-flip-front-icon { width: {{data.front_icon_width}}; }',
      front_icon_height:
        '{{SELECTOR}} .pb-flip-front-icon { height: {{data.front_icon_height}}; }{{SELECTOR}} .pb-flip-front-icon i { line-height: {{data.front_icon_height}}; }',
      front_icon_radius:
        '{{SELECTOR}}  .pb-flip-front-icon { border-radius: {{data.front_icon_radius}}; }',
      front_icon_color:
        '{{SELECTOR}} .pb-flip-front-icon { color: {{data.front_icon_color}}; }',
      front_icon_hcolor:
        '{{SELECTOR}} .pb-flip-front-icon:hover { color: {{data.front_icon_hcolor}}; }',
      front_icon_bg:
        '{{SELECTOR}} .pb-flip-front-icon { background: {{data.front_icon_bg}}; }',
      front_icon_hover_bg:
        '{{SELECTOR}} .pb-flip-front-icon:hover{ background: {{data.front_icon_hover_bg}}; }',
      front_icon_margin:
        '{{SELECTOR}} .pb-flip-front-icon { margin: {{data.front_icon_margin}}; }',
      back_title_color:
        '{{SELECTOR}} .pb-flip-back-title { color: {{data.back_title_color}}; }',
      back_title_style:
        '{{SELECTOR}} .pb-flip-back-title{{data.back_title_style}}',
      back_title_margin:
        '{{SELECTOR}} .pb-flip-back-title { margin: {{data.back_title_margin}}; }',
      back_intro_color:
        '{{SELECTOR}} .pb-flip-back-intro { color: {{data.back_intro_color}}; }',
      back_intro_style:
        '{{SELECTOR}} .pb-flip-back-intro{{data.back_intro_style}}',
      back_intro_margin:
        '{{SELECTOR}} .pb-flip-back-intro { margin: {{data.back_intro_margin}}; }',
      back_img_width:
        '{{SELECTOR}} .pb-flip-back-img img { width: {{data.back_img_width}}; }',
      back_img_height:
        '{{SELECTOR}} .pb-flip-back-img img { height: {{data.back_img_height}}; }',
      back_border_radius:
        '{{SELECTOR}} .pb-flip-back-img img { border-radius: {{data.back_border_radius}}; }',
      back_img_margin:
        '{{SELECTOR}} .pb-flip-back-img img { margin: {{data.back_img_margin}}; }',
      back_icon_size:
        '{{SELECTOR}} .pb-flip-back-icon i { font-size: {{data.back_icon_size}}; }',
      back_icon_width:
        '{{SELECTOR}} .pb-flip-back-icon { width: {{data.back_icon_width}}; }',
      back_icon_height:
        '{{SELECTOR}} .pb-flip-back-icon { height: {{data.back_icon_height}}; }{{SELECTOR}} .pb-flip-back-icon i { line-height: {{data.back_icon_height}}; }',
      back_icon_radius:
        '{{SELECTOR}}  .pb-flip-back-icon { border-radius: {{data.back_icon_radius}}; }',
      back_icon_color:
        '{{SELECTOR}} .pb-flip-back-icon { color: {{data.back_icon_color}}; }',
      back_icon_hcolor:
        '{{SELECTOR}} .pb-flip-back-icon:hover { color: {{data.back_icon_hcolor}}; }',
      back_icon_bg:
        '{{SELECTOR}} .pb-flip-back-icon { background: {{data.back_icon_bg}}; }',
      back_icon_hover_bg:
        '{{SELECTOR}} .pb-flip-back-icon:hover{ background: {{data.back_icon_hover_bg}}; }',
      back_icon_margin:
        '{{SELECTOR}} .pb-flip-back-icon { margin: {{data.back_icon_margin}}; }',
      back_button_typo:
        '{{SELECTOR}} .pb-back-view-btn{{data.back_button_typo}}',
      back_button_color:
        '{{SELECTOR}} .pb-back-view-btn{ color: {{data.back_button_color}}; }',
      back_button_hcolor:
        '{{SELECTOR}} .pb-back-view-btn:hover { color: {{data.back_button_hcolor}}; }',
      back_button_bg:
        '{{SELECTOR}} .pb-back-view-btn{ background: {{data.back_button_bg}}; }',
      back_button_hover_bg:
        '{{SELECTOR}} .pb-back-view-btn:hover{ background: {{data.back_button_hover_bg}}; }',
      back_btn_border: '{{SELECTOR}} .pb-back-view-btn{{data.back_btn_border}}',
      icon_border_hcolor:
        '{{SELECTOR}} .pb-back-view-btn:hover{{data.icon_border_hcolor}}',
      button_radius:
        '{{SELECTOR}} .pb-back-view-btn { border-radius: {{data.button_radius}}; }',
      button_hradius:
        '{{SELECTOR}} .pb-back-view-btn:hover { border-radius: {{data.button_hradius}}; }',
      button_padding:
        '{{SELECTOR}} .pb-back-view-btn{ padding: {{data.button_padding}}; }',
      button_margin:
        '{{SELECTOR}} .pb-back-view-btn{ margin: {{data.button_margin}}; }',
      addon_z_index:
        '.pb-builder-container {{SELECTOR}}{ z-index: {{data.addon_z_index}}; }',
      addon_padding: '{{SELECTOR}}{ padding: {{data.addon_padding}}; }',
      addon_margin: '{{SELECTOR}}{ margin: {{data.addon_margin}}; }',
      addon_background: '{{SELECTOR}}',
      addon_color_opacity: '{{SELECTOR}}:after{{data.addon_color_opacity}}',
      addon_opacity:
        '{{SELECTOR}}:after{ content: " "; z-index: 0; display: block; position: absolute; height: 100%; top: 0; left: 0; right: 0; opacity:{{data.addon_opacity}}; }',
      addon_color_blend:
        '{{SELECTOR}}:after{ mix-blend-mode:{{data.addon_color_blend}}; }',
      addon_border: '{{SELECTOR}}{{data.addon_border}}',
      addon_border_hover: '{{SELECTOR}}:hover{{data.addon_border_hover}}',
      addon_border_radius:
        '{{SELECTOR}}, {{SELECTOR}}:after{ border-radius: {{data.addon_border_radius}}; overflow:hidden; }',
      addon_border_radius_hover:
        '{{SELECTOR}}:hover, {{SELECTOR}}:hover:after{ border-radius: {{data.addon_border_radius_hover}};overflow:hidden; }',
      addon_boxshadow: '{{SELECTOR}}{{data.addon_boxshadow}}',
      addon_boxshadow_hover: '{{SELECTOR}}:hover{{data.addon_boxshadow_hover}}',
      addon_wrap_opacity:
        '{{SELECTOR}} .pb-addon{ opacity:{{data.addon_wrap_opacity}}; }',
      addon_wrap_opacity_hover:
        '{{SELECTOR}} .pb-addon:hover{ opacity:{{data.addon_wrap_opacity_hover}}; }',
      addon_display: '{{SELECTOR}}{ display: {{data.addon_display}} ; }',
    },
    visibility: true,
    icon: 'pb-font-rocket',
    attr: {
      general: {
        layout: {
          type: 'radioimage',
          title: 'Layout',
          values: {
            one: '/img/feature_box/feature-img1.png',
            two: '/img/feature_box/feature-img2.png',
            three: '/img/feature_box/feature-img3.png',
            four: '/img/feature_box/feature-img4.png',
            five: '/img/feature_box/feature-img5.png',
            six: '/img/feature_box/feature-img6.png',
            seven: '/img/feature_box/feature-img7.png',
          },
          std: 'one',
        },
        title: {
          type: 'text',
          title: 'Title',
          std: 'Feature Box',
        },
        heading_selector: {
          type: 'select',
          title: 'Title Tag',
          values: {
            h1: 'h1',
            h2: 'h2',
            h3: 'h3',
            h4: 'h4',
            h5: 'h5',
            h6: 'h6',
            span: 'span',
            p: 'p',
            div: 'div',
          },
          std: 'h3',
        },
        title_link: {
          type: 'link',
          std: {
            link: '',
            window: false,
            nofolow: false,
          },
          title: 'Link',
          depends: [['title', '!=', '']],
        },
        title_animation: {
          type: 'animation',
          title: 'Title Animation',
          std: {
            name: 'fadeIn',
            delay: '300',
            duration: '400',
          },
        },
        subtitle: {
          type: 'text',
          title: 'Sub title',
          std: '',
        },
        subheading_selector: {
          type: 'select',
          title: 'Sub Title Tag',
          values: {
            h1: 'h1',
            h2: 'h2',
            h3: 'h3',
            h4: 'h4',
            h5: 'h5',
            h6: 'h6',
            span: 'span',
            p: 'p',
            div: 'div',
          },
          std: 'h4',
        },
        subtitle_animation: {
          type: 'animation',
          title: 'Sub Title Animation',
          std: {
            name: 'fadeIn',
            delay: '300',
            duration: '400',
          },
        },
        number: {
          type: 'text',
          title: 'Number',
          depends: [['layout', '=', ['seven']]],
          std: '01',
        },
        number_animation: {
          type: 'animation',
          title: 'Number Animation',
          depends: [['layout', '=', ['seven']]],
          std: {
            name: 'fadeIn',
            delay: '300',
            duration: '400',
          },
        },
        introtext: {
          type: 'textarea',
          title: 'Intro text',
          std: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer adipiscing erat eget risus sollicitudin pellentesque',
        },
        intro_animation: {
          type: 'animation',
          title: 'Intro Animation',
          std: {
            name: 'fadeIn',
            delay: '300',
            duration: '400',
          },
        },
        show_image: {
          type: 'switch',
          title: 'Show Image',
          std: '0',
          depends: [['layout', '!=', ['seven']]],
        },
        icon_list: {
          type: 'icon',
          title: 'Icon list',
          std: 'pb-font-rocket',
          depends: [
            ['show_image', '!=', '1'],
            ['layout', '!=', ['seven']],
          ],
        },
        icon_animation: {
          type: 'animation',
          title: 'Icon Animation',
          std: {
            name: 'fadeIn',
            delay: '300',
            duration: '400',
          },
          depends: [['show_image', '!=', '1']],
        },
        image_upload: {
          type: 'media',
          title: 'Upload feature image',
          std: {
            url: '/img/placeholder/pb-small.jpg',
          },
          depends: [['show_image', '!=', '0']],
        },
        image_animation: {
          type: 'animation',
          title: 'Image Animation',
          std: {
            name: 'fadeIn',
            delay: '300',
            duration: '400',
          },
          depends: [['show_image', '!=', '0']],
        },
        button_text: {
          type: 'text',
          title: 'Button text',
          std: 'Button',
        },
        button_link: {
          type: 'link',
          title: 'Button Link',
          std: {
            link: '#',
            window: false,
            nofolow: false,
          },
        },
        btn_icon_list: {
          type: 'icon',
          title: 'Button icon',
          std: '',
        },
        icon_position: {
          type: 'select',
          title: 'Button icon position',
          depends: [['btn_icon_list', '!=', '']],
          values: {
            left: 'Left',
            right: 'Right',
          },
          std: 'left',
        },
        feature_align: {
          type: 'alignment',
          title: 'Alignment',
          responsive: true,
          selector:
            '{{SELECTOR}} .pb-feature-box-content{ text-align: {{data.feature_align}}; }',
          depends: [['layout', '=', ['one', 'six']]],
        },
        box_title_color: {
          type: 'color2',
          title: 'Color',
          clip: true,
          std: {
            colorType: 'color',
            clip: true,
            colorColor: '',
          },
          selector:
            '{{SELECTOR}} .pb-feature-box-title, {{SELECTOR}} .pb-feature-box-title a',
          tab: 'style',
          section: 'Box Title',
        },
        box_title_hcolor: {
          type: 'color2',
          title: 'Hover color',
          clip: true,
          std: {
            colorType: 'color',
            clip: true,
            colorColor: '',
          },
          selector:
            '{{SELECTOR}} .pb-feature-box-title:hover, {{SELECTOR}} .pb-feature-box-title a:hover',
          tab: 'style',
          section: 'Box Title',
        },
        box_title_fontstyle: {
          type: 'typography',
          title: 'Typography',
          std: {
            fontFamily: '',
            fontSize: {
              md: '20px',
              sm: '',
              xs: '',
            },
            lineHeight: {
              md: '',
              sm: '',
              xs: '',
            },
            fontWeight: '500',
            textTransform: '',
            fontStyle: '',
            letterSpacing: {
              md: '',
              sm: '',
              xs: '',
            },
          },
          selector: '{{SELECTOR}} .pb-feature-box-title',
          section: 'Box Title',
          tab: 'style',
        },
        title_margin: {
          type: 'dimension',
          title: 'Margin',
          tab: 'style',
          section: 'Box Title',
          responsive: true,
          unit: ['px', 'em', '%'],
          selector:
            '{{SELECTOR}} .pb-feature-box-title, {{SELECTOR}} .feature-icontitle-six .pb-feature-box-title { margin: {{data.title_margin}}; }',
        },
        title_padding: {
          type: 'dimension',
          title: 'padding',
          tab: 'style',
          section: 'Box Title',
          responsive: true,
          unit: ['px', 'em', '%'],
          selector:
            '{{SELECTOR}} .pb-feature-box-title, {{SELECTOR}} .feature-icontitle-six .pb-feature-box-title { padding: {{data.title_padding}}; }',
        },
        box_subtitle_color: {
          type: 'color2',
          title: 'Color',
          clip: true,
          std: {
            colorType: 'color',
            clip: true,
            colorColor: '',
          },
          selector: '{{SELECTOR}} .pb-feature-box-subtitle',
          tab: 'style',
          section: 'Box Sub Title',
        },
        box_subtitle_fontstyle: {
          type: 'typography',
          title: 'Typography',
          std: {
            fontFamily: '',
            fontSize: {
              md: '20px',
              sm: '',
              xs: '',
            },
            lineHeight: {
              md: '',
              sm: '',
              xs: '',
            },
            fontWeight: '500',
            textTransform: '',
            fontStyle: '',
            letterSpacing: {
              md: '',
              sm: '',
              xs: '',
            },
          },
          selector: '{{SELECTOR}} .pb-feature-box-subtitle',
          section: 'Box Sub Title',
          tab: 'style',
        },
        subtitle_margin: {
          type: 'dimension',
          title: 'Margin',
          tab: 'style',
          section: 'Box Sub Title',
          responsive: true,
          unit: ['px', 'em', '%'],
          selector:
            '{{SELECTOR}} .pb-feature-box-subtitle { margin: {{data.subtitle_margin}}; }',
        },
        subtitle_padding: {
          type: 'dimension',
          title: 'Padding',
          tab: 'style',
          section: 'Box Sub Title',
          responsive: true,
          unit: ['px', 'em', '%'],
          selector:
            '{{SELECTOR}} .pb-feature-box-subtitle { padding: {{data.subtitle_padding}}; }',
        },
        intro_color: {
          type: 'color',
          title: 'color',
          tab: 'style',
          section: 'Intro Text',
          selector:
            '{{SELECTOR}} .pb-feature-box-intro { color: {{data.intro_color}}; }',
        },
        intro_size: {
          type: 'typography',
          title: 'Typography',
          std: {
            fontFamily: '',
            fontSize: {
              md: '14px',
              sm: '',
              xs: '',
            },
            lineHeight: {
              md: '',
              sm: '',
              xs: '',
            },
            fontWeight: '400',
            textTransform: '',
            fontStyle: '',
            letterSpacing: {
              md: '',
              sm: '',
              xs: '',
            },
          },
          selector: '{{SELECTOR}} .pb-feature-box-intro',
          section: 'Intro Text',
          tab: 'style',
        },
        intro_margin: {
          type: 'dimension',
          title: 'margin',
          tab: 'style',
          section: 'Intro Text',
          responsive: true,
          unit: ['px', 'em', '%'],
          selector:
            '{{SELECTOR}} .pb-feature-box-intro { margin: {{data.intro_margin}}; }',
        },
        intro_padding: {
          type: 'dimension',
          title: 'padding',
          tab: 'style',
          section: 'Intro Text',
          responsive: true,
          unit: ['px', 'em', '%'],
          selector:
            '{{SELECTOR}} .pb-feature-box-intro { padding: {{data.intro_padding}}; }',
        },
        number_color: {
          type: 'color2',
          title: 'color',
          clip: true,
          std: {
            colorType: 'color',
            clip: true,
            colorColor: '',
          },
          selector: '{{SELECTOR}} .pb-feature-box-number',
          tab: 'style',
          section: 'Number',
          depends: [['layout', '=', ['seven']]],
        },
        number_horizontal: {
          type: 'slider',
          title: 'Horizontal',
          std: {
            md: '-25px',
            sm: '',
            xs: '',
          },
          unit: ['px', '%', 'em'],
          range: {
            em: {
              min: -10,
              max: 10,
              step: 0.1,
            },
            px: {
              min: -150,
              max: 150,
              step: 1,
            },
            '%': {
              min: 0,
              max: 100,
              step: 1,
            },
          },
          responsive: true,
          tab: 'style',
          section: 'Number',
          selector:
            '{{SELECTOR}} .pb-feature-box-number { top: {{data.number_horizontal}}; }',
          depends: [['layout', '=', ['seven']]],
        },
        number_vertical: {
          type: 'slider',
          title: 'Vertical',
          std: {
            md: '15px',
            sm: '',
            xs: '',
          },
          unit: ['px', '%', 'em'],
          range: {
            em: {
              min: -10,
              max: 10,
              step: 0.1,
            },
            px: {
              min: -100,
              max: 150,
              step: 1,
            },
            '%': {
              min: 0,
              max: 100,
              step: 1,
            },
          },
          responsive: true,
          tab: 'style',
          section: 'Number',
          selector:
            '{{SELECTOR}} .pb-feature-box-number { left: {{data.number_vertical}}; }',
          depends: [['layout', '=', ['seven']]],
        },
        number_size: {
          type: 'typography',
          title: 'Typography',
          std: {
            fontFamily: '',
            fontSize: {
              md: '14px',
              sm: '',
              xs: '',
            },
            lineHeight: {
              md: '',
              sm: '',
              xs: '',
            },
            fontWeight: '400',
            textTransform: '',
            fontStyle: '',
            letterSpacing: {
              md: '',
              sm: '',
              xs: '',
            },
          },
          selector: '{{SELECTOR}} .pb-feature-box-number',
          section: 'Number',
          tab: 'style',
          depends: [['layout', '=', ['seven']]],
        },
        number_padding: {
          type: 'dimension',
          title: 'padding',
          tab: 'style',
          section: 'Number',
          responsive: true,
          unit: ['px', 'em', '%'],
          selector:
            '{{SELECTOR}} .pb-feature-box-number { padding: {{data.number_padding}}; }',
          depends: [['layout', '=', ['seven']]],
        },
        icon_size: {
          type: 'slider',
          title: 'Size',
          unit: ['px', '%', 'em'],
          range: {
            em: {
              min: 0,
              max: 25,
              step: 0.1,
            },
            px: {
              min: 0,
              max: 250,
              step: 1,
            },
            '%': {
              min: 0,
              max: 100,
              step: 1,
            },
          },
          std: {
            md: '48px',
            sm: '',
            xs: '',
          },
          responsive: true,
          tab: 'style',
          section: 'Icon',
          selector:
            '{{SELECTOR}} .pb-feature-box-icon i { font-size: {{data.icon_size}}; }',
        },
        icon_line_height: {
          type: 'slider',
          title: 'Line Height',
          unit: ['px', '%', 'em'],
          responsive: true,
          max: 300,
          section: 'Icon',
          tab: 'style',
          selector:
            '{{SELECTOR}} .pb-feature-box-icon i { line-height: {{data.icon_line_height}}; }',
        },
        icon_width: {
          type: 'slider',
          title: 'Width',
          unit: ['px', '%', 'em'],
          range: {
            em: {
              min: 0,
              max: 25,
              step: 0.1,
            },
            px: {
              min: 0,
              max: 300,
              step: 1,
            },
            '%': {
              min: 0,
              max: 100,
              step: 1,
            },
          },
          responsive: true,
          tab: 'style',
          section: 'Icon',
          selector:
            '{{SELECTOR}} .pb-feature-box-icon { width: {{data.icon_width}}; }',
        },
        icon_height: {
          type: 'slider',
          title: 'Height',
          unit: ['px', '%', 'em'],
          range: {
            em: {
              min: 0,
              max: 25,
              step: 0.1,
            },
            px: {
              min: 0,
              max: 300,
              step: 1,
            },
            '%': {
              min: 0,
              max: 100,
              step: 1,
            },
          },
          responsive: true,
          tab: 'style',
          selector:
            '{{SELECTOR}} .pb-feature-box-icon { height: {{data.icon_height}}; }',
        },
        icon_color: {
          type: 'color2',
          title: 'Color',
          clip: true,
          std: {
            colorType: 'color',
            clip: true,
            colorColor: '',
          },
          selector: '{{SELECTOR}} .pb-feature-box-icon i',
          tab: 'style',
          section: 'Icon',
        },
        icon_hcolor: {
          type: 'color2',
          title: 'Hover Color',
          clip: true,
          std: {
            colorType: 'color',
            clip: true,
            colorColor: '',
          },
          selector:
            '{{SELECTOR}} .pb-feature-box-content:hover .pb-feature-box-icon i',
          tab: 'style',
          section: 'Icon',
        },
        icon_bg: {
          type: 'color2',
          title: 'background',
          clip: false,
          selector: '{{SELECTOR}} .pb-feature-box-icon',
          tab: 'style',
          section: 'Icon',
        },
        icon_hover_bg: {
          type: 'color2',
          title: 'hover background',
          clip: false,
          selector:
            '{{SELECTOR}} .pb-feature-box-content:hover .pb-feature-box-icon',
          tab: 'style',
          section: 'Icon',
        },
        icon_border: {
          type: 'border',
          title: 'Border',
          std: {
            borderWidth: {
              top: '2px',
              right: '2px',
              bottom: '2px',
              left: '2px',
            },
            borderStyle: 'solid',
            borderColor: '#cccccc',
          },
          tab: 'style',
          section: 'Icon',
          selector: '{{SELECTOR}} .pb-feature-box-icon',
        },
        icon_border_hcolor: {
          type: 'border',
          title: 'hover color',
          std: {
            borderWidth: {
              top: '2px',
              right: '2px',
              bottom: '2px',
              left: '2px',
            },
            borderStyle: 'solid',
            borderColor: '#cccccc',
          },
          tab: 'style',
          section: 'Icon',
          selector:
            '{{SELECTOR}} .pb-feature-box-content:hover .pb-feature-box-icon',
        },
        icon_boxshadow: {
          type: 'boxshadow',
          title: 'Box shadow',
          std: {
            shadowValue: {
              top: '0px',
              right: '0px',
              bottom: '5px',
              left: '0px',
            },
            shadowColor: 'rgba(0,0,0,.3)',
          },
          selector: '{{SELECTOR}} .pb-feature-box-icon',
          tab: 'style',
          section: 'Icon',
        },
        icon_hboxshadow: {
          type: 'boxshadow',
          title: 'Hover box shadow',
          std: {
            shadowValue: {
              top: '0px',
              right: '0px',
              bottom: '5px',
              left: '0px',
            },
            shadowColor: 'rgba(0,0,0,.3)',
          },
          selector:
            '{{SELECTOR}} .pb-feature-box-content:hover .pb-feature-box-icon',
          tab: 'style',
          section: 'Icon',
        },
        icon_radius: {
          type: 'slider',
          title: 'Border radius',
          unit: ['%', 'px', 'em'],
          responsive: true,
          tab: 'style',
          section: 'Icon',
          selector:
            '{{SELECTOR}} .pb-feature-box-icon { border-radius: {{data.icon_radius}}; }',
        },
        icon_margin: {
          type: 'dimension',
          title: 'Margin',
          tab: 'style',
          section: 'Icon',
          responsive: true,
          unit: ['px', 'em', '%'],
          selector:
            '{{SELECTOR}} .pb-feature-box-icon { margin: {{data.icon_margin}}; }',
        },
        img_width: {
          type: 'slider',
          title: 'Width',
          unit: ['px', '%', 'em'],
          range: {
            em: {
              min: 0,
              max: 30,
              step: 0.1,
            },
            px: {
              min: 0,
              max: 400,
              step: 1,
            },
            '%': {
              min: 0,
              max: 100,
              step: 1,
            },
          },
          std: {
            md: '100px',
            sm: '',
            xs: '',
          },
          responsive: true,
          tab: 'style',
          section: 'Image',
          selector:
            '{{SELECTOR}} .pb-feature-box-img img { width: {{data.img_width}}; max-width:{{data.img_width}} }',
        },
        img_height: {
          type: 'slider',
          title: 'Height',
          unit: ['px', '%', 'em'],
          range: {
            em: {
              min: 0,
              max: 30,
              step: 0.1,
            },
            px: {
              min: 0,
              max: 400,
              step: 1,
            },
            '%': {
              min: 0,
              max: 100,
              step: 1,
            },
          },
          responsive: true,
          tab: 'style',
          section: 'Image',
          selector:
            '{{SELECTOR}} .pb-feature-box-img img { height: {{data.img_height}}; }',
        },
        border_radius: {
          type: 'dimension',
          title: 'Border Radius',
          unit: ['px', '%', 'em'],
          responsive: true,
          tab: 'style',
          section: 'Image',
          selector:
            '{{SELECTOR}} .pb-feature-box-img img { border-radius: {{data.border_radius}}; }',
        },
        image_border: {
          type: 'border',
          title: 'Border',
          std: {
            borderWidth: {
              top: '2px',
              right: '2px',
              bottom: '2px',
              left: '2px',
            },
            borderStyle: 'solid',
            borderColor: '#cccccc',
          },
          tab: 'style',
          section: 'Image',
          selector: '{{SELECTOR}} .pb-feature-box-img img',
        },
        img_border_hcolor: {
          type: 'border',
          title: 'Hover Border',
          std: {
            borderWidth: {
              top: '2px',
              right: '2px',
              bottom: '2px',
              left: '2px',
            },
            borderStyle: 'solid',
            borderColor: '#cccccc',
          },
          tab: 'style',
          section: 'Image',
          selector: '{{SELECTOR}} .pb-feature-box-img img:hover',
        },
        img_boxshadow: {
          type: 'boxshadow',
          title: 'Box shadow',
          std: {
            shadowValue: {
              top: '0px',
              right: '0px',
              bottom: '5px',
              left: '0px',
            },
            shadowColor: 'rgba(0,0,0,.3)',
          },
          selector: '{{SELECTOR}} .pb-feature-box-img img',
          tab: 'style',
          section: 'Image',
        },
        img_hboxshadow: {
          type: 'boxshadow',
          title: 'hover box shadow',
          std: {
            shadowValue: {
              top: '0px',
              right: '0px',
              bottom: '5px',
              left: '0px',
            },
            shadowColor: 'rgba(0,0,0,.3)',
          },
          selector: '{{SELECTOR}} .pb-feature-box-img img:hover',
          tab: 'style',
          section: 'Image',
        },
        img_margin: {
          type: 'dimension',
          title: 'margin',
          tab: 'style',
          section: 'Image',
          unit: ['px', 'em', '%'],
          responsive: true,
          selector:
            '{{SELECTOR}} .pb-feature-box-img img { margin: {{data.img_margin}}; }',
        },
        button_fontstyle: {
          type: 'typography',
          title: 'Typography',
          std: {
            fontFamily: '',
            fontSize: {
              md: '14px',
              sm: '',
              xs: '',
            },
            lineHeight: {
              md: '',
              sm: '',
              xs: '',
            },
            fontWeight: '700',
            textTransform: '',
            fontStyle: '',
            letterSpacing: {
              md: '',
              sm: '',
              xs: '',
            },
          },
          selector: '{{SELECTOR}} .pb-feature-box-content .pb-btn-addons',
          section: 'Button',
          tab: 'style',
        },
        button_color: {
          type: 'color',
          title: 'Color',
          std: '#ffffff',
          selector:
            '{{SELECTOR}} .pb-feature-box-content .pb-btn-addons { color: {{data.button_color}}; }',
          tab: 'style',
          section: 'Button',
        },
        button_hcolor: {
          type: 'color',
          title: 'Hover Color',
          std: '#ffffff',
          selector:
            '{{SELECTOR}} .pb-feature-box-content .pb-btn-addons:hover { color: {{data.button_hcolor}}; }',
          tab: 'style',
          section: 'Button',
        },
        button_bg: {
          type: 'color2',
          title: 'background',
          clip: false,
          std: {
            colorType: 'color',
            colorColor: '#0080FE',
            clip: false,
          },
          selector: '{{SELECTOR}} .pb-feature-box-content .pb-btn-addons',
          tab: 'style',
          section: 'Button',
        },
        button_hover_bg: {
          type: 'color2',
          title: 'hover background',
          clip: false,
          std: {
            colorType: 'color',
            colorColor: '#0074e6',
            clip: false,
          },
          selector:
            '{{SELECTOR}} .pb-feature-box-content .pb-btn-addons:before',
          tab: 'style',
          section: 'Button',
        },
        button_border: {
          type: 'border',
          title: 'Border',
          std: {
            borderWidth: {
              top: '2px',
              right: '2px',
              bottom: '2px',
              left: '2px',
            },
            borderStyle: 'solid',
            borderColor: '#cccccc',
          },
          tab: 'style',
          section: 'Button',
          selector: '{{SELECTOR}} .pb-feature-box-content .pb-btn-addons',
        },
        border_hcolor: {
          type: 'border',
          title: 'hover Border',
          std: {
            borderWidth: {
              top: '2px',
              right: '2px',
              bottom: '2px',
              left: '2px',
            },
            borderStyle: 'solid',
            borderColor: '#cccccc',
          },
          tab: 'style',
          section: 'Button',
          selector: '{{SELECTOR}} .pb-feature-box-content .pb-btn-addons:hover',
        },
        buttom_radius: {
          type: 'dimension',
          title: 'Border radius',
          unit: ['%', 'px', 'em'],
          std: {
            md: {
              top: '4px',
              right: '4px',
              bottom: '4px',
              left: '4px',
            },
            sm: {
              top: '',
              right: '',
              bottom: '',
              left: '',
            },
            xs: {
              top: '',
              right: '',
              bottom: '',
              left: '',
            },
          },
          responsive: true,
          tab: 'style',
          section: 'Button',
          selector:
            '{{SELECTOR}} .pb-feature-box-content .pb-btn-addons { border-radius: {{data.buttom_radius}}; }',
        },
        buttom_hradius: {
          type: 'dimension',
          title: 'hover border radius',
          unit: ['%', 'px', 'em'],
          std: {
            md: {
              top: '4px',
              right: '4px',
              bottom: '4px',
              left: '4px',
            },
            sm: {
              top: '',
              right: '',
              bottom: '',
              left: '',
            },
            xs: {
              top: '',
              right: '',
              bottom: '',
              left: '',
            },
          },
          responsive: true,
          tab: 'style',
          section: 'Button',
          selector:
            '{{SELECTOR}} .pb-feature-box-content .pb-btn-addons:hover { border-radius: {{data.buttom_hradius}}; }',
        },
        button_padding: {
          type: 'dimension',
          title: 'Padding',
          unit: ['px', 'em', '%'],
          responsive: true,
          tab: 'style',
          section: 'Button',
          selector:
            '{{SELECTOR}} .pb-feature-box-content .pb-btn-addons { padding: {{data.button_padding}}; }',
        },
        btn_margin: {
          type: 'dimension',
          title: 'margin',
          tab: 'style',
          section: 'Button',
          unit: ['px', 'em', '%'],
          responsive: true,
          selector:
            '{{SELECTOR}} .pb-feature-box-content .pb-btn-addons { margin: {{data.btn_margin}}; }',
        },
        bar_width: {
          type: 'slider',
          title: 'Width',
          std: {
            md: '50%',
            sm: '',
            xs: '',
          },
          unit: ['%', 'px', 'em'],
          responsive: true,
          range: {
            em: {
              min: 0,
              max: 25,
              step: 0.1,
            },
            px: {
              min: 0,
              max: 200,
              step: 1,
            },
            '%': {
              min: 0,
              max: 100,
              step: 1,
            },
          },
          tab: 'style',
          section: 'Bar Style',
          selector:
            '{{SELECTOR}} .feature-icontitle-six .pb-feature-box-title:after { width: {{data.bar_width}}; }',
          depends: [['layout', '=', ['six']]],
        },
        bar_height: {
          type: 'slider',
          title: 'Bar Height',
          unit: ['px', '%', 'em'],
          range: {
            em: {
              min: 0,
              max: 25,
              step: 0.1,
            },
            px: {
              min: 0,
              max: 200,
              step: 1,
            },
            '%': {
              min: 0,
              max: 100,
              step: 1,
            },
          },
          std: {
            md: '2px',
            sm: '',
            xs: '',
          },
          responsive: true,
          tab: 'style',
          section: 'Bar Style',
          selector:
            '{{SELECTOR}} .feature-icontitle-six .pb-feature-box-title:after { height: {{data.bar_height}}; }',
          depends: [['layout', '=', ['six']]],
        },
        bar_horizontal: {
          type: 'slider',
          title: 'Bar Horizontal',
          unit: ['%', 'px', 'em'],
          range: {
            em: {
              min: -25,
              max: 25,
              step: 0.1,
            },
            px: {
              min: -200,
              max: 200,
              step: 1,
            },
            '%': {
              min: -100,
              max: 100,
              step: 1,
            },
          },
          std: {
            md: '100%',
            sm: '',
            xs: '',
          },
          responsive: true,
          tab: 'style',
          section: 'Bar Style',
          selector:
            '{{SELECTOR}} .feature-icontitle-six .pb-feature-box-title:after { top: {{data.bar_horizontal}}; }',
          depends: [['layout', '=', ['six']]],
        },
        bar_vertical: {
          type: 'slider',
          title: 'Bar Vertical',
          unit: ['%', 'px', 'em'],
          range: {
            em: {
              min: 0,
              max: 25,
              step: 0.1,
            },
            px: {
              min: 0,
              max: 200,
              step: 1,
            },
            '%': {
              min: 0,
              max: 100,
              step: 1,
            },
          },
          std: {
            md: '0%',
            sm: '',
            xs: '',
          },
          responsive: true,
          tab: 'style',
          section: 'Bar Style',
          selector:
            '{{SELECTOR}} .feature-icontitle-six .pb-feature-box-title:after { left: {{data.bar_vertical}}; }',
          depends: [['layout', '=', ['six']]],
        },
        bar_background: {
          type: 'color2',
          title: 'Bar Background',
          clip: false,
          selector:
            '{{SELECTOR}} .feature-icontitle-six .pb-feature-box-title:after',
          tab: 'style',
          section: 'Bar Style',
          depends: [['layout', '=', ['six']]],
        },
      },
    },
    defaultAddon: true,
    group: 'basic',
    js_template: true,
  },
  pb_flip_box: {
    type: 'content',
    addon_name: 'pb_flip_box',
    title: 'Flip Box',
    name: 'pb_flip_box',
    category: '',
    Editor: FlipBox,
    Preview: FlipBox,
    styleJSON: {
      flip_height:
        '{{SELECTOR}} .pb-flipbox-panel, {{SELECTOR}} .threeD-item { height: {{data.flip_height}}; }',
      flip_radius:
        '{{SELECTOR}} .pb-flipbox-front.flip-box:before, {{SELECTOR}} .threeD-flip-front:before,{{SELECTOR}} .pb-flipbox-back.flip-box:before, {{SELECTOR}} .threeD-flip-back:before { border-radius: {{data.flip_radius}}; }',
      front_bg:
        '{{SELECTOR}} .pb-flipbox-front.flip-box:before, {{SELECTOR}} .threeD-flip-front:before',
      front_align:
        '{{SELECTOR}} .pb-flipbox-front, {{SELECTOR}} .threeD-flip-front{ text-align: {{data.front_align}}; }',
      back_bg:
        '{{SELECTOR}} .pb-flipbox-back.flip-box:before, {{SELECTOR}} .threeD-flip-back:before',
      back_align:
        '{{SELECTOR}} .pb-flipbox-back, .threeD-flip-back { text-align: {{data.back_align}}; }',
      front_title_color:
        '{{SELECTOR}} .pb-flip-front-title{{data.front_title_color}}',
      front_title_style:
        '{{SELECTOR}} .pb-flip-front-title{{data.front_title_style}}',
      front_title_margin:
        '{{SELECTOR}} .pb-flip-front-title { margin: {{data.front_title_margin}}; }',
      front_intro_color:
        '{{SELECTOR}} .pb-flip-front-intro { color: {{data.front_intro_color}}; }',
      front_intro_style:
        '{{SELECTOR}} .pb-flip-front-intro{{data.front_intro_style}}',
      front_intro_margin:
        '{{SELECTOR}} .pb-flip-front-intro { margin: {{data.front_intro_margin}}; }',
      front_img_width:
        '{{SELECTOR}} .pb-flip-front-img img { width: {{data.front_img_width}}; }',
      front_img_height:
        '{{SELECTOR}} .pb-flip-front-img img { height: {{data.front_img_height}}; }',
      front_border_radius:
        '{{SELECTOR}} .pb-flip-front-img img { border-radius: {{data.front_border_radius}}; }',
      front_img_margin:
        '{{SELECTOR}} .pb-flip-front-img img { margin: {{data.front_img_margin}}; }',
      front_icon_size:
        '{{SELECTOR}} .pb-flip-front-icon i { font-size: {{data.front_icon_size}}; }',
      front_icon_width:
        '{{SELECTOR}} .pb-flip-front-icon { width: {{data.front_icon_width}}; }',
      front_icon_height:
        '{{SELECTOR}} .pb-flip-front-icon { height: {{data.front_icon_height}}; }{{SELECTOR}} .pb-flip-front-icon i { line-height: {{data.front_icon_height}}; }',
      front_icon_radius:
        '{{SELECTOR}}  .pb-flip-front-icon { border-radius: {{data.front_icon_radius}}; }',
      front_icon_color:
        '{{SELECTOR}} .pb-flip-front-icon { color: {{data.front_icon_color}}; }',
      front_icon_hcolor:
        '{{SELECTOR}} .pb-flip-front-icon:hover { color: {{data.front_icon_hcolor}}; }',
      front_icon_bg:
        '{{SELECTOR}} .pb-flip-front-icon { background: {{data.front_icon_bg}}; }',
      front_icon_hover_bg:
        '{{SELECTOR}} .pb-flip-front-icon:hover{ background: {{data.front_icon_hover_bg}}; }',
      front_icon_margin:
        '{{SELECTOR}} .pb-flip-front-icon { margin: {{data.front_icon_margin}}; }',
      back_title_color:
        '{{SELECTOR}} .pb-flip-back-title { color: {{data.back_title_color}}; }',
      back_title_style:
        '{{SELECTOR}} .pb-flip-back-title{{data.back_title_style}}',
      back_title_margin:
        '{{SELECTOR}} .pb-flip-back-title { margin: {{data.back_title_margin}}; }',
      back_intro_color:
        '{{SELECTOR}} .pb-flip-back-intro { color: {{data.back_intro_color}}; }',
      back_intro_style:
        '{{SELECTOR}} .pb-flip-back-intro{{data.back_intro_style}}',
      back_intro_margin:
        '{{SELECTOR}} .pb-flip-back-intro { margin: {{data.back_intro_margin}}; }',
      back_img_width:
        '{{SELECTOR}} .pb-flip-back-img img { width: {{data.back_img_width}}; }',
      back_img_height:
        '{{SELECTOR}} .pb-flip-back-img img { height: {{data.back_img_height}}; }',
      back_border_radius:
        '{{SELECTOR}} .pb-flip-back-img img { border-radius: {{data.back_border_radius}}; }',
      back_img_margin:
        '{{SELECTOR}} .pb-flip-back-img img { margin: {{data.back_img_margin}}; }',
      back_icon_size:
        '{{SELECTOR}} .pb-flip-back-icon i { font-size: {{data.back_icon_size}}; }',
      back_icon_width:
        '{{SELECTOR}} .pb-flip-back-icon { width: {{data.back_icon_width}}; }',
      back_icon_height:
        '{{SELECTOR}} .pb-flip-back-icon { height: {{data.back_icon_height}}; }{{SELECTOR}} .pb-flip-back-icon i { line-height: {{data.back_icon_height}}; }',
      back_icon_radius:
        '{{SELECTOR}}  .pb-flip-back-icon { border-radius: {{data.back_icon_radius}}; }',
      back_icon_color:
        '{{SELECTOR}} .pb-flip-back-icon { color: {{data.back_icon_color}}; }',
      back_icon_hcolor:
        '{{SELECTOR}} .pb-flip-back-icon:hover { color: {{data.back_icon_hcolor}}; }',
      back_icon_bg:
        '{{SELECTOR}} .pb-flip-back-icon { background: {{data.back_icon_bg}}; }',
      back_icon_hover_bg:
        '{{SELECTOR}} .pb-flip-back-icon:hover{ background: {{data.back_icon_hover_bg}}; }',
      back_icon_margin:
        '{{SELECTOR}} .pb-flip-back-icon { margin: {{data.back_icon_margin}}; }',
      back_button_typo:
        '{{SELECTOR}} .pb-back-view-btn{{data.back_button_typo}}',
      back_button_color:
        '{{SELECTOR}} .pb-back-view-btn{ color: {{data.back_button_color}}; }',
      back_button_hcolor:
        '{{SELECTOR}} .pb-back-view-btn:hover { color: {{data.back_button_hcolor}}; }',
      back_button_bg:
        '{{SELECTOR}} .pb-back-view-btn{ background: {{data.back_button_bg}}; }',
      back_button_hover_bg:
        '{{SELECTOR}} .pb-back-view-btn:hover{ background: {{data.back_button_hover_bg}}; }',
      back_btn_border: '{{SELECTOR}} .pb-back-view-btn{{data.back_btn_border}}',
      icon_border_hcolor:
        '{{SELECTOR}} .pb-back-view-btn:hover{{data.icon_border_hcolor}}',
      button_radius:
        '{{SELECTOR}} .pb-back-view-btn { border-radius: {{data.button_radius}}; }',
      button_hradius:
        '{{SELECTOR}} .pb-back-view-btn:hover { border-radius: {{data.button_hradius}}; }',
      button_padding:
        '{{SELECTOR}} .pb-back-view-btn{ padding: {{data.button_padding}}; }',
      button_margin:
        '{{SELECTOR}} .pb-back-view-btn{ margin: {{data.button_margin}}; }',
      addon_z_index:
        '.pb-builder-container {{SELECTOR}}{ z-index: {{data.addon_z_index}}; }',
      addon_padding: '{{SELECTOR}}{ padding: {{data.addon_padding}}; }',
      addon_margin: '{{SELECTOR}}{ margin: {{data.addon_margin}}; }',
      addon_background: '{{SELECTOR}}',
      addon_color_opacity: '{{SELECTOR}}:after{{data.addon_color_opacity}}',
      addon_opacity:
        '{{SELECTOR}}:after{ content: " "; z-index: 0; display: block; position: absolute; height: 100%; top: 0; left: 0; right: 0; opacity:{{data.addon_opacity}}; }',
      addon_color_blend:
        '{{SELECTOR}}:after{ mix-blend-mode:{{data.addon_color_blend}}; }',
      addon_border: '{{SELECTOR}}{{data.addon_border}}',
      addon_border_hover: '{{SELECTOR}}:hover{{data.addon_border_hover}}',
      addon_border_radius:
        '{{SELECTOR}}, {{SELECTOR}}:after{ border-radius: {{data.addon_border_radius}}; overflow:hidden; }',
      addon_border_radius_hover:
        '{{SELECTOR}}:hover, {{SELECTOR}}:hover:after{ border-radius: {{data.addon_border_radius_hover}};overflow:hidden; }',
      addon_boxshadow: '{{SELECTOR}}{{data.addon_boxshadow}}',
      addon_boxshadow_hover: '{{SELECTOR}}:hover{{data.addon_boxshadow_hover}}',
      addon_wrap_opacity:
        '{{SELECTOR}} .pb-addon{ opacity:{{data.addon_wrap_opacity}}; }',
      addon_wrap_opacity_hover:
        '{{SELECTOR}} .pb-addon:hover{ opacity:{{data.addon_wrap_opacity_hover}}; }',
      addon_display: '{{SELECTOR}}{ display: {{data.addon_display}} ; }',
    },
    visibility: true,
    icon: 'pb-font-flip',
    attr: {
      general: {
        flip_bhave: {
          type: 'select',
          title: 'Behavior',
          values: {
            hover: 'Hover',
            click: 'Click',
          },
          section: 'Flip Options',
          std: 'hover',
        },
        flip_style: {
          type: 'select',
          title: 'Style',
          values: {
            rotate_style: 'Rotate',
            slide_style: 'Slide',
            fade_style: 'Fade',
            threeD_style: '3D',
          },
          section: 'Flip Options',
          std: 'rotate_style',
        },
        flip_direction: {
          type: 'select',
          title: 'Direction',
          values: {
            flip_top: 'From top',
            flip_bottom: 'From bottom',
            flip_left: 'From left',
            flip_right: 'From right',
          },
          section: 'Flip Options',
          std: 'flip_right',
        },
        flip_height: {
          type: 'slider',
          title: 'Height',
          unit: ['px', '%', 'em'],
          range: {
            em: {
              min: 0,
              max: 40,
              step: 0.1,
            },
            px: {
              min: 0,
              max: 600,
              step: 1,
            },
            '%': {
              min: 0,
              max: 100,
              step: 1,
            },
          },
          responsive: true,
          section: 'Flip Options',
          selector:
            '{{SELECTOR}} .pb-flipbox-panel, {{SELECTOR}} .threeD-item { height: {{data.flip_height}}; }',
        },
        flip_radius: {
          type: 'dimension',
          title: 'Border Radius',
          unit: ['%', 'px', 'em'],
          responsive: true,
          section: 'Flip Options',
          selector:
            '{{SELECTOR}} .pb-flipbox-front.flip-box:before, {{SELECTOR}} .threeD-flip-front:before,{{SELECTOR}} .pb-flipbox-back.flip-box:before, {{SELECTOR}} .threeD-flip-back:before { border-radius: {{data.flip_radius}}; }',
        },
        front_title: {
          type: 'text',
          title: 'Title',
          section: 'Front View',
          std: 'Product Design',
        },
        front_heading_selector: {
          type: 'select',
          title: 'Title Tag',
          values: {
            h1: 'h1',
            h2: 'h2',
            h3: 'h3',
            h4: 'h4',
            h5: 'h5',
            h6: 'h6',
            span: 'span',
            p: 'p',
            div: 'div',
          },
          section: 'Front View',
          std: 'h4',
        },
        front_introtext: {
          type: 'textarea',
          title: 'Content',
          std: 'Duis mollis est non commodo luctus. Cras mattis consectetur purus sit amet fermentum.',
          section: 'Front View',
        },
        front_show_icon: {
          type: 'switch',
          title: 'Show icon',
          section: 'Front View',
          std: '1',
        },
        front_icon_list: {
          type: 'icon',
          title: 'Icon list',
          std: 'pb-font-puzzle',
          depends: [['front_show_icon', '!=', '0']],
          section: 'Front View',
        },
        front_image_upload: {
          type: 'media',
          title: 'Upload feature image',
          std: {
            url: '/img/placeholder/pb-small.jpg',
          },
          depends: [['front_show_icon', '!=', '1']],
          section: 'Front View',
        },
        front_image_alt: {
          type: 'text',
          title: 'Image alt text',
          std: 'Image',
          depends: [['front_show_icon', '!=', '1']],
          section: 'Front View',
        },
        front_bg: {
          type: 'background',
          disableHover: true,
          title: 'background',
          std: {
            bgType: 'color',
            bgColor: '#3375dc',
          },
          section: 'Front View',
          selector:
            '{{SELECTOR}} .pb-flipbox-front.flip-box:before, {{SELECTOR}} .threeD-flip-front:before',
        },
        front_align: {
          type: 'alignment',
          title: 'Alignment',
          responsive: true,
          section: 'Front View',
          selector:
            '{{SELECTOR}} .pb-flipbox-front, {{SELECTOR}} .threeD-flip-front{ text-align: {{data.front_align}}; }',
        },
        back_title: {
          type: 'text',
          title: 'Title',
          section: 'Back View',
          std: 'Creative Idea',
        },
        back_heading_selector: {
          type: 'select',
          title: 'Title Tag',
          values: {
            h1: 'h1',
            h2: 'h2',
            h3: 'h3',
            h4: 'h4',
            h5: 'h5',
            h6: 'h6',
            span: 'span',
            p: 'p',
            div: 'div',
          },
          section: 'Back View',
          std: 'h4',
        },
        back_introtext: {
          type: 'textarea',
          title: 'Content',
          std: 'Successful businesses have many things in common, today we’ll look at the big',
          section: 'Back View',
        },
        back_button_text: {
          type: 'text',
          title: 'Button text',
          std: 'Button',
          section: 'Back View',
        },
        back_btn_link: {
          type: 'link',
          title: 'BUTTON LINK',
          std: {
            link: '#',
            window: false,
            nofolow: false,
          },
          section: 'Back View',
        },
        back_show_icon: {
          type: 'switch',
          title: 'Show icon',
          section: 'Back View',
          std: '1',
        },
        back_icon_list: {
          type: 'icon',
          title: 'Icon list',
          std: 'pb-font-suitcase',
          depends: [['back_show_icon', '!=', '0']],
          section: 'Back View',
        },
        back_image_upload: {
          type: 'media',
          title: 'Upload feature image',
          std: {
            url: '/img/placeholder/pb-small.jpg',
          },
          depends: [['back_show_icon', '!=', '1']],
          section: 'Back View',
        },
        back_image_alt: {
          type: 'text',
          title: 'Image alt text',
          std: 'Image',
          depends: [['back_show_icon', '!=', '1']],
          section: 'Back View',
        },
        back_bg: {
          type: 'background',
          title: 'background',
          std: {
            bgType: 'color',
            bgColor: '#22cc96',
          },
          section: 'Back View',
          selector:
            '{{SELECTOR}} .pb-flipbox-back.flip-box:before, {{SELECTOR}} .threeD-flip-back:before',
        },
        back_align: {
          type: 'alignment',
          title: 'Alignment',
          responsive: true,
          section: 'Back View',
          selector:
            '{{SELECTOR}} .pb-flipbox-back, .threeD-flip-back { text-align: {{data.back_align}}; }',
        },
        front_title_color: {
          type: 'color2',
          title: 'Color',
          tab: 'style',
          clip: true,
          std: {
            colorType: 'color',
            clip: true,
            colorColor: '',
          },
          section: 'Front Style',
          selector: '{{SELECTOR}} .pb-flip-front-title',
        },
        front_title_style: {
          type: 'typography',
          title: 'Typography',
          std: {
            fontFamily: '',
            fontSize: {
              md: '22px',
              sm: '',
              xs: '',
            },
            lineHeight: {
              md: '',
              sm: '',
              xs: '',
            },
            fontWeight: '400',
            textTransform: '',
            fontStyle: '',
            letterSpacing: {
              md: '',
              sm: '',
              xs: '',
            },
          },
          selector: '{{SELECTOR}} .pb-flip-front-title',
          section: 'Front Style',
          tab: 'style',
        },
        front_title_margin: {
          type: 'dimension',
          title: 'MARGIN',
          tab: 'style',
          section: 'Front Style',
          responsive: true,
          unit: ['px', 'em', '%'],
          selector:
            '{{SELECTOR}} .pb-flip-front-title { margin: {{data.front_title_margin}}; }',
        },
        intro_separator: {
          type: 'separator',
          title: 'Intro Style',
          tab: 'style',
          section: 'Front Style',
        },
        front_intro_color: {
          type: 'color',
          title: 'color',
          tab: 'style',
          section: 'Front Style',
          selector:
            '{{SELECTOR}} .pb-flip-front-intro { color: {{data.front_intro_color}}; }',
        },
        front_intro_style: {
          type: 'typography',
          title: 'Typography',
          std: {
            fontFamily: '',
            fontSize: {
              md: '14px',
              sm: '',
              xs: '',
            },
            lineHeight: {
              md: '',
              sm: '',
              xs: '',
            },
            fontWeight: '400',
            textTransform: '',
            fontStyle: '',
            letterSpacing: {
              md: '',
              sm: '',
              xs: '',
            },
          },
          selector: '{{SELECTOR}} .pb-flip-front-intro',
          section: 'Front Style',
          tab: 'style',
        },
        front_intro_margin: {
          type: 'dimension',
          title: 'Intro text margin',
          tab: 'style',
          section: 'Front Style',
          unit: ['px', 'em', '%'],
          responsive: true,
          selector:
            '{{SELECTOR}} .pb-flip-front-intro { margin: {{data.front_intro_margin}}; }',
        },
        image_separator: {
          type: 'separator',
          title: 'Image Style',
          tab: 'style',
          section: 'Front Style',
        },
        front_img_width: {
          type: 'slider',
          title: 'Image Width',
          unit: ['px', '%', 'em'],
          range: {
            em: {
              min: 0,
              max: 20,
              step: 0.1,
            },
            px: {
              min: 0,
              max: 250,
              step: 1,
            },
            '%': {
              min: 0,
              max: 100,
              step: 1,
            },
          },
          responsive: true,
          section: 'Front Style',
          tab: 'style',
          depends: [['show_icon', '!=', '1']],
          selector:
            '{{SELECTOR}} .pb-flip-front-img img { width: {{data.front_img_width}}; }',
        },
        front_img_height: {
          type: 'slider',
          title: 'Image Height',
          unit: ['px', '%', 'em'],
          range: {
            em: {
              min: 0,
              max: 20,
              step: 0.1,
            },
            px: {
              min: 0,
              max: 250,
              step: 1,
            },
            '%': {
              min: 0,
              max: 100,
              step: 1,
            },
          },
          responsive: true,
          section: 'Front Style',
          tab: 'style',
          depends: [['show_icon', '!=', '1']],
          selector:
            '{{SELECTOR}} .pb-flip-front-img img { height: {{data.front_img_height}}; }',
        },
        front_border_radius: {
          type: 'dimension',
          title: 'Border Radius',
          responsive: true,
          unit: ['px', '%', 'em'],
          section: 'Front Style',
          tab: 'style',
          depends: [['show_icon', '!=', '1']],
          selector:
            '{{SELECTOR}} .pb-flip-front-img img { border-radius: {{data.front_border_radius}}; }',
        },
        front_img_margin: {
          type: 'dimension',
          title: 'Image margin',
          tab: 'style',
          section: 'Front Style',
          unit: ['px', 'em', '%'],
          responsive: true,
          selector:
            '{{SELECTOR}} .pb-flip-front-img img { margin: {{data.front_img_margin}}; }',
        },
        icon_separator: {
          type: 'separator',
          title: 'Icon Style',
          tab: 'style',
          depends: [['show_icon', '!=', '0']],
          section: 'Front Style',
        },
        front_icon_size: {
          type: 'slider',
          title: 'Icon size',
          unit: ['px', '%', 'em'],
          range: {
            em: {
              min: 0,
              max: 20,
              step: 0.1,
            },
            px: {
              min: 0,
              max: 250,
              step: 1,
            },
            '%': {
              min: 0,
              max: 100,
              step: 1,
            },
          },
          std: {
            md: '36px',
            sm: '',
            xs: '',
          },
          responsive: true,
          tab: 'style',
          section: 'Front Style',
          depends: [['show_icon', '!=', '0']],
          selector:
            '{{SELECTOR}} .pb-flip-front-icon i { font-size: {{data.front_icon_size}}; }',
        },
        front_icon_width: {
          type: 'slider',
          title: 'Width',
          unit: ['px', '%', 'em'],
          range: {
            em: {
              min: 0,
              max: 5,
              step: 0.1,
            },
            px: {
              min: 0,
              max: 200,
              step: 1,
            },
            '%': {
              min: 0,
              max: 100,
              step: 1,
            },
          },
          std: {
            md: '',
            sm: '',
            xs: '',
          },
          responsive: true,
          tab: 'style',
          section: 'Front Style',
          depends: [['show_icon', '!=', '0']],
          selector:
            '{{SELECTOR}} .pb-flip-front-icon { width: {{data.front_icon_width}}; }',
        },
        front_icon_height: {
          type: 'slider',
          title: 'Icon height',
          unit: ['px', '%', 'em'],
          range: {
            em: {
              min: 0,
              max: 5,
              step: 0.1,
            },
            px: {
              min: 0,
              max: 200,
              step: 1,
            },
            '%': {
              min: 0,
              max: 100,
              step: 1,
            },
          },
          std: {
            md: '',
            sm: '',
            xs: '',
          },
          responsive: true,
          tab: 'style',
          section: 'Front Style',
          depends: [['show_icon', '!=', '0']],
          selector: [
            '{{SELECTOR}} .pb-flip-front-icon { height: {{data.front_icon_height}}; }',
            '{{SELECTOR}} .pb-flip-front-icon i { line-height: {{data.front_icon_height}}; }',
          ],
        },
        front_icon_radius: {
          type: 'dimension',
          title: 'Border radius',
          unit: ['px', '%', 'em'],
          responsive: true,
          tab: 'style',
          section: 'Front Style',
          depends: [['show_icon', '!=', '0']],
          selector:
            '{{SELECTOR}}  .pb-flip-front-icon { border-radius: {{data.front_icon_radius}}; }',
        },
        front_icon_color: {
          type: 'color',
          title: 'Icon color',
          tab: 'style',
          section: 'Front Style',
          depends: [['show_icon', '!=', '0']],
          selector:
            '{{SELECTOR}} .pb-flip-front-icon { color: {{data.front_icon_color}}; }',
        },
        front_icon_hcolor: {
          type: 'color',
          title: 'Icon hover color',
          tab: 'style',
          section: 'Front Style',
          selector:
            '{{SELECTOR}} .pb-flip-front-icon:hover { color: {{data.front_icon_hcolor}}; }',
        },
        front_icon_bg: {
          type: 'color',
          title: 'Icon background',
          tab: 'style',
          section: 'Front Style',
          depends: [['show_icon', '!=', '0']],
          selector:
            '{{SELECTOR}} .pb-flip-front-icon { background: {{data.front_icon_bg}}; }',
        },
        front_icon_hover_bg: {
          type: 'color',
          title: 'Icon hover background',
          tab: 'style',
          section: 'Front Style',
          depends: [['show_icon', '!=', '0']],
          selector:
            '{{SELECTOR}} .pb-flip-front-icon:hover{ background: {{data.front_icon_hover_bg}}; }',
        },
        front_icon_margin: {
          type: 'dimension',
          title: 'Icon margin',
          tab: 'style',
          section: 'Front Style',
          unit: ['px', 'em', '%'],
          responsive: true,
          selector:
            '{{SELECTOR}} .pb-flip-front-icon { margin: {{data.front_icon_margin}}; }',
        },
        back_title_color: {
          type: 'color',
          title: 'Back Color',
          tab: 'style',
          section: 'Back Style',
          selector:
            '{{SELECTOR}} .pb-flip-back-title { color: {{data.back_title_color}}; }',
        },
        back_title_style: {
          type: 'typography',
          title: 'Typography',
          std: {
            fontFamily: '',
            fontSize: {
              md: '22px',
              sm: '',
              xs: '',
            },
            lineHeight: {
              md: '',
              sm: '',
              xs: '',
            },
            fontWeight: '400',
            textTransform: '',
            fontStyle: '',
            letterSpacing: {
              md: '',
              sm: '',
              xs: '',
            },
          },
          selector: '{{SELECTOR}} .pb-flip-back-title',
          section: 'Back Style',
          tab: 'style',
        },
        back_title_margin: {
          type: 'dimension',
          title: 'MARGIN',
          tab: 'style',
          section: 'Back Style',
          responsive: true,
          unit: ['px', 'em', '%'],
          selector:
            '{{SELECTOR}} .pb-flip-back-title { margin: {{data.back_title_margin}}; }',
        },
        back_intro_separator: {
          type: 'separator',
          title: 'Intro Style',
          tab: 'style',
          section: 'Back Style',
        },
        back_intro_color: {
          type: 'color',
          title: 'Back Intro text color',
          tab: 'style',
          section: 'Back Style',
          selector:
            '{{SELECTOR}} .pb-flip-back-intro { color: {{data.back_intro_color}}; }',
        },
        back_intro_style: {
          type: 'typography',
          title: 'Typography',
          std: {
            fontFamily: '',
            fontSize: {
              md: '14px',
              sm: '',
              xs: '',
            },
            lineHeight: {
              md: '',
              sm: '',
              xs: '',
            },
            fontWeight: '400',
            textTransform: '',
            fontStyle: '',
            letterSpacing: {
              md: '',
              sm: '',
              xs: '',
            },
          },
          selector: '{{SELECTOR}} .pb-flip-back-intro',
          section: 'Back Style',
          tab: 'style',
        },
        back_intro_margin: {
          type: 'dimension',
          title: 'Intro text margin',
          tab: 'style',
          section: 'Back Style',
          unit: ['px', 'em', '%'],
          responsive: true,
          selector:
            '{{SELECTOR}} .pb-flip-back-intro { margin: {{data.back_intro_margin}}; }',
        },
        back_img_separator: {
          type: 'separator',
          title: 'Image Style',
          tab: 'style',
          section: 'Back Style',
        },
        back_img_width: {
          type: 'slider',
          title: 'Image Width',
          unit: ['px', '%', 'em'],
          range: {
            em: {
              min: 0,
              max: 20,
              step: 0.1,
            },
            px: {
              min: 0,
              max: 250,
              step: 1,
            },
            '%': {
              min: 0,
              max: 100,
              step: 1,
            },
          },
          responsive: true,
          tab: 'style',
          section: 'Back Style',
          depends: [['show_icon', '!=', '1']],
          selector:
            '{{SELECTOR}} .pb-flip-back-img img { width: {{data.back_img_width}}; }',
        },
        back_img_height: {
          type: 'slider',
          title: 'Image Height',
          unit: ['px', '%', 'em'],
          range: {
            em: {
              min: 0,
              max: 20,
              step: 0.1,
            },
            px: {
              min: 0,
              max: 250,
              step: 1,
            },
            '%': {
              min: 0,
              max: 100,
              step: 1,
            },
          },
          responsive: true,
          section: 'Back Style',
          tab: 'style',
          depends: [['show_icon', '!=', '1']],
          selector:
            '{{SELECTOR}} .pb-flip-back-img img { height: {{data.back_img_height}}; }',
        },
        back_border_radius: {
          type: 'dimension',
          title: 'Border Radius',
          responsive: true,
          unit: ['px', '%', 'em'],
          section: 'Back Style',
          tab: 'style',
          depends: [['show_icon', '!=', '1']],
          selector:
            '{{SELECTOR}} .pb-flip-back-img img { border-radius: {{data.back_border_radius}}; }',
        },
        back_img_margin: {
          type: 'dimension',
          title: 'Image margin',
          tab: 'style',
          section: 'Back Style',
          unit: ['px', 'em', '%'],
          responsive: true,
          selector:
            '{{SELECTOR}} .pb-flip-back-img img { margin: {{data.back_img_margin}}; }',
        },
        back_icon_separator: {
          type: 'separator',
          title: 'Icon Style',
          tab: 'style',
          depends: [['show_icon', '!=', '0']],
          section: 'Back Style',
        },
        back_icon_size: {
          type: 'slider',
          title: 'Icon size',
          unit: ['px', '%', 'em'],
          range: {
            em: {
              min: 0,
              max: 20,
              step: 0.1,
            },
            px: {
              min: 0,
              max: 250,
              step: 1,
            },
            '%': {
              min: 0,
              max: 100,
              step: 1,
            },
          },
          std: {
            md: '36px',
            sm: '',
            xs: '',
          },
          responsive: true,
          tab: 'style',
          section: 'Back Style',
          depends: [['show_icon', '!=', '0']],
          selector:
            '{{SELECTOR}} .pb-flip-back-icon i { font-size: {{data.back_icon_size}}; }',
        },
        back_icon_width: {
          type: 'slider',
          title: 'Width',
          unit: ['px', '%', 'em'],
          range: {
            em: {
              min: 0,
              max: 5,
              step: 0.1,
            },
            px: {
              min: 0,
              max: 200,
              step: 1,
            },
            '%': {
              min: 0,
              max: 100,
              step: 1,
            },
          },
          std: {
            md: '',
            sm: '',
            xs: '',
          },
          responsive: true,
          tab: 'style',
          section: 'Back Style',
          depends: [['show_icon', '!=', '0']],
          selector:
            '{{SELECTOR}} .pb-flip-back-icon { width: {{data.back_icon_width}}; }',
        },
        back_icon_height: {
          type: 'slider',
          title: 'Icon height',
          unit: ['px', '%', 'em'],
          range: {
            em: {
              min: 0,
              max: 5,
              step: 0.1,
            },
            px: {
              min: 0,
              max: 200,
              step: 1,
            },
            '%': {
              min: 0,
              max: 100,
              step: 1,
            },
          },
          std: {
            md: '',
            sm: '',
            xs: '',
          },
          responsive: true,
          tab: 'style',
          section: 'Back Style',
          depends: [['show_icon', '!=', '0']],
          selector: [
            '{{SELECTOR}} .pb-flip-back-icon { height: {{data.back_icon_height}}; }',
            '{{SELECTOR}} .pb-flip-back-icon i { line-height: {{data.back_icon_height}}; }',
          ],
        },
        back_icon_radius: {
          type: 'dimension',
          title: 'Border radius',
          unit: ['px', '%', 'em'],
          responsive: true,
          tab: 'style',
          section: 'Back Style',
          depends: [['show_icon', '!=', '0']],
          selector:
            '{{SELECTOR}}  .pb-flip-back-icon { border-radius: {{data.back_icon_radius}}; }',
        },
        back_icon_color: {
          type: 'color',
          title: 'Icon color',
          tab: 'style',
          section: 'Back Style',
          depends: [['show_icon', '!=', '0']],
          selector:
            '{{SELECTOR}} .pb-flip-back-icon { color: {{data.back_icon_color}}; }',
        },
        back_icon_hcolor: {
          type: 'color',
          title: 'Icon hover color',
          tab: 'style',
          section: 'Back Style',
          selector:
            '{{SELECTOR}} .pb-flip-back-icon:hover { color: {{data.back_icon_hcolor}}; }',
        },
        back_icon_bg: {
          type: 'color',
          title: 'Icon background',
          tab: 'style',
          section: 'Back Style',
          depends: [['show_icon', '!=', '0']],
          selector:
            '{{SELECTOR}} .pb-flip-back-icon { background: {{data.back_icon_bg}}; }',
        },
        back_icon_hover_bg: {
          type: 'color',
          title: 'Icon hover background',
          tab: 'style',
          section: 'Back Style',
          depends: [['show_icon', '!=', '0']],
          selector:
            '{{SELECTOR}} .pb-flip-back-icon:hover{ background: {{data.back_icon_hover_bg}}; }',
        },
        back_icon_margin: {
          type: 'dimension',
          title: 'Icon margin',
          tab: 'style',
          section: 'Back Style',
          unit: ['px', 'em', '%'],
          responsive: true,
          selector:
            '{{SELECTOR}} .pb-flip-back-icon { margin: {{data.back_icon_margin}}; }',
        },
        back_btn_separator: {
          type: 'separator',
          title: 'Button Style',
          tab: 'style',
          section: 'Back Style',
        },
        back_button_typo: {
          type: 'typography',
          title: 'Typography',
          std: {
            fontFamily: '',
            fontSize: {
              md: '14px',
              sm: '',
              xs: '',
            },
            lineHeight: {
              md: '',
              sm: '',
              xs: '',
            },
            fontWeight: '400',
            textTransform: '',
            fontStyle: '',
            letterSpacing: {
              md: '',
              sm: '',
              xs: '',
            },
          },
          selector: '{{SELECTOR}} .pb-back-view-btn',
          section: 'Back Style',
          tab: 'style',
        },
        back_button_color: {
          type: 'color',
          title: 'Button color',
          tab: 'style',
          section: 'Back Style',
          selector:
            '{{SELECTOR}} .pb-back-view-btn{ color: {{data.back_button_color}}; }',
        },
        back_button_hcolor: {
          type: 'color',
          title: 'Button hover color',
          tab: 'style',
          section: 'Back Style',
          selector:
            '{{SELECTOR}} .pb-back-view-btn:hover { color: {{data.back_button_hcolor}}; }',
        },
        back_button_bg: {
          type: 'color',
          title: 'Button background',
          tab: 'style',
          section: 'Back Style',
          selector:
            '{{SELECTOR}} .pb-back-view-btn{ background: {{data.back_button_bg}}; }',
        },
        back_button_hover_bg: {
          type: 'color',
          title: 'Button hover background',
          tab: 'style',
          section: 'Back Style',
          selector:
            '{{SELECTOR}} .pb-back-view-btn:hover{ background: {{data.back_button_hover_bg}}; }',
        },
        back_btn_border: {
          type: 'border',
          title: 'Button Border',
          std: {
            borderWidth: {
              top: '2px',
              right: '2px',
              bottom: '2px',
              left: '2px',
            },
            borderStyle: 'solid',
            borderColor: '#cccccc',
          },
          tab: 'style',
          section: 'Back Style',
          selector: '{{SELECTOR}} .pb-back-view-btn',
        },
        icon_border_hcolor: {
          type: 'border',
          title: 'Button Border',
          std: {
            borderWidth: {
              top: '2px',
              right: '2px',
              bottom: '2px',
              left: '2px',
            },
            borderStyle: 'solid',
            borderColor: '#cccccc',
          },
          tab: 'style',
          section: 'Back Style',
          selector: '{{SELECTOR}} .pb-back-view-btn:hover',
        },
        button_radius: {
          type: 'dimension',
          title: 'Border Radius',
          unit: ['px', '%', 'em'],
          std: {
            md: {
              top: '48px',
              right: '48px',
              bottom: '48px',
              left: '48px',
            },
            sm: {
              top: '',
              right: '',
              bottom: '',
              left: '',
            },
            xs: {
              top: '',
              right: '',
              bottom: '',
              left: '',
            },
          },
          responsive: true,
          tab: 'style',
          section: 'Back Style',
          selector:
            '{{SELECTOR}} .pb-back-view-btn { border-radius: {{data.button_radius}}; }',
        },
        button_hradius: {
          type: 'dimension',
          title: 'Border Radius hover',
          unit: ['px', '%', 'em'],
          std: {
            md: {
              top: '48px',
              right: '48px',
              bottom: '48px',
              left: '48px',
            },
            sm: {
              top: '',
              right: '',
              bottom: '',
              left: '',
            },
            xs: {
              top: '',
              right: '',
              bottom: '',
              left: '',
            },
          },
          responsive: true,
          tab: 'style',
          section: 'Back Style',
          selector:
            '{{SELECTOR}} .pb-back-view-btn:hover { border-radius: {{data.button_hradius}}; }',
        },
        button_padding: {
          type: 'dimension',
          title: 'Button Padding',
          tab: 'style',
          section: 'Back Style',
          unit: ['px', 'em', '%'],
          responsive: true,
          selector:
            '{{SELECTOR}} .pb-back-view-btn{ padding: {{data.button_padding}}; }',
        },
        button_margin: {
          type: 'dimension',
          title: 'Button Margin',
          tab: 'style',
          section: 'Back Style',
          responsive: true,
          unit: ['px', 'em', '%'],
          selector:
            '{{SELECTOR}} .pb-back-view-btn{ margin: {{data.button_margin}}; }',
        },
      },
    },
    defaultAddon: true,
    group: 'basic',
    js_template: true,
  },
  pb_heading: {
    type: 'content',
    addon_name: 'pb_heading',
    title: 'Heading',
    name: 'pb_heading',
    category: '',
    Editor: Heading,
    Preview: Heading,
    styleJSON: {
      align: '{{SELECTOR}} .pb-addon-title { text-align: {{data.align}}; }',
      title_color:
        '{{SELECTOR}} .pb-addon-title, {{SELECTOR}} .pb-addon-title a{{data.title_color}}',
      title_link_hcolor:
        '{{SELECTOR}} .pb-addon-title a:hover{ color: {{data.title_link_hcolor}}; }',
      title_fontstyle: '{{SELECTOR}} .pb-addon-title{{data.title_fontstyle}}',
      addon_z_index:
        '.pb-builder-container {{SELECTOR}}{ z-index: {{data.addon_z_index}}; }',
      addon_padding: '{{SELECTOR}}{ padding: {{data.addon_padding}}; }',
      addon_margin: '{{SELECTOR}}{ margin: {{data.addon_margin}}; }',
      addon_background: '{{SELECTOR}}',
      addon_color_opacity: '{{SELECTOR}}:after{{data.addon_color_opacity}}',
      addon_opacity:
        '{{SELECTOR}}:after{ content: " "; z-index: 0; display: block; position: absolute; height: 100%; top: 0; left: 0; right: 0; opacity:{{data.addon_opacity}}; }',
      addon_color_blend:
        '{{SELECTOR}}:after{ mix-blend-mode:{{data.addon_color_blend}}; }',
      addon_border: '{{SELECTOR}}{{data.addon_border}}',
      addon_border_hover: '{{SELECTOR}}:hover{{data.addon_border_hover}}',
      addon_border_radius:
        '{{SELECTOR}}, {{SELECTOR}}:after{ border-radius: {{data.addon_border_radius}}; overflow:hidden; }',
      addon_border_radius_hover:
        '{{SELECTOR}}:hover, {{SELECTOR}}:hover:after{ border-radius: {{data.addon_border_radius_hover}};overflow:hidden; }',
      addon_boxshadow: '{{SELECTOR}}{{data.addon_boxshadow}}',
      addon_boxshadow_hover: '{{SELECTOR}}:hover{{data.addon_boxshadow_hover}}',
      addon_wrap_opacity:
        '{{SELECTOR}} .pb-addon{ opacity:{{data.addon_wrap_opacity}}; }',
      addon_wrap_opacity_hover:
        '{{SELECTOR}} .pb-addon:hover{ opacity:{{data.addon_wrap_opacity_hover}}; }',
      addon_display: '{{SELECTOR}}{ display: {{data.addon_display}} ; }',
    },
    visibility: true,
    icon: 'pb-font-heading',
    attr: {
      general: {
        title: {
          type: 'textarea',
          title: 'Title',
          std: 'This is Title',
        },
        title_selector: {
          type: 'select',
          title: 'Title Tag',
          values: {
            h1: 'h1',
            h2: 'h2',
            h3: 'h3',
            h4: 'h4',
            h5: 'h5',
            h6: 'h6',
            span: 'span',
            p: 'p',
            div: 'div',
          },
          std: 'h2',
        },
        title_link: {
          type: 'link',
          title: 'Link',
          std: {
            link: '',
            window: false,
            nofolow: false,
          },
        },
        align: {
          type: 'alignment',
          title: 'Alignment',
          responsive: true,
          selector:
            '{{SELECTOR}} .pb-addon-title { text-align: {{data.align}}; }',
        },
        title_color: {
          type: 'color2',
          title: 'Color',
          tab: 'style',
          clip: true,
          std: {
            colorType: 'color',
            clip: true,
            colorColor: '',
          },
          selector:
            '{{SELECTOR}} .pb-addon-title, {{SELECTOR}} .pb-addon-title a',
        },
        title_link_hcolor: {
          type: 'color',
          title: 'link hover color',
          tab: 'style',
          selector:
            '{{SELECTOR}} .pb-addon-title a:hover{ color: {{data.title_link_hcolor}}; }',
        },
        title_fontstyle: {
          type: 'typography',
          title: 'Typography',
          std: {
            fontFamily: '',
            fontSize: {
              md: '28px',
              sm: '',
              xs: '',
            },
            lineHeight: {
              md: '',
              sm: '',
              xs: '',
            },
            fontWeight: '700',
            textTransform: '',
            fontStyle: '',
            letterSpacing: {
              md: '',
              sm: '',
              xs: '',
            },
          },
          selector: '{{SELECTOR}} .pb-addon-title',
          tab: 'style',
        },
      },
    },
    defaultAddon: true,
    group: 'basic',
    js_template: true,
  },
  pb_icon: {
    type: 'content',
    addon_name: 'pb_icon',
    title: 'Icon',
    name: 'pb_icon',
    category: '',
    Editor: Icon,
    Preview: Icon,
    styleJSON: {
      icon_align:
        '{{SELECTOR}} .pb-icon-content { text-align: {{data.icon_align}}; }',
      icon_size:
        '{{SELECTOR}} .pb-icon-content .pb-icon-inner i { font-size: {{data.icon_size}}; }',
      icon_width:
        '{{SELECTOR}} .pb-icon-content .pb-icon-inner { width: {{data.icon_width}}; }',
      icon_height:
        '{{SELECTOR}} .pb-icon-content .pb-icon-inner { height: {{data.icon_height}}; }{{SELECTOR}} .pb-icon-content .pb-icon-inner i { line-height: {{data.icon_height}}; }',
      icon_line_height:
        '{{SELECTOR}} .pb-icon-content .pb-icon-inner { line-height: {{data.icon_line_height}}; }',
      icon_color:
        '{{SELECTOR}} .pb-icon-content .pb-icon-inner i, {{SELECTOR}} .pb-icon-content .pb-icon-inner a i{{data.icon_color}}',
      icon_hcolor:
        '{{SELECTOR}} .pb-icon-content .pb-icon-inner:hover i, {{SELECTOR}} .pb-icon-content .pb-icon-inner:hover a i{{data.icon_hcolor}}',
      icon_bg: '{{SELECTOR}} .pb-icon-content .pb-icon-inner{{data.icon_bg}}',
      icon_hover_bg:
        '{{SELECTOR}} .pb-icon-content .pb-icon-inner:before, {{SELECTOR}} .pb-icon-content .pb-icon-inner:hover{{data.icon_hover_bg}}',
      icon_border:
        '{{SELECTOR}} .pb-icon-content .pb-icon-inner{{data.icon_border}}',
      border_hcolor:
        '{{SELECTOR}} .pb-icon-content .pb-icon-inner:hover, {{SELECTOR}} .pb-icon-content .pb-icon-inner:before{{data.border_hcolor}}',
      icon_radius:
        '{{SELECTOR}} .pb-icon-content .pb-icon-inner, {{SELECTOR}} .pb-icon-content .pb-icon-inner:before { border-radius: {{data.icon_radius}}; }',
      icon_hover_radius:
        '{{SELECTOR}} .pb-icon-content .pb-icon-inner:hover, {{SELECTOR}} .pb-icon-content .pb-icon-inner:hover:before { border-radius: {{data.icon_hover_radius}}; }',
      icon_boxshadow:
        '{{SELECTOR}} .pb-icon-content .pb-icon-inner, {{SELECTOR}} .pb-icon-content .pb-icon-inner:before{{data.icon_boxshadow}}',
      icon_hboxshadow:
        '{{SELECTOR}} .pb-icon-content .pb-icon-inner:hover, {{SELECTOR}} .pb-icon-content .pb-icon-inner:hover:before{{data.icon_hboxshadow}}',
      addon_z_index:
        '.pb-builder-container {{SELECTOR}}{ z-index: {{data.addon_z_index}}; }',
      addon_padding: '{{SELECTOR}}{ padding: {{data.addon_padding}}; }',
      addon_margin: '{{SELECTOR}}{ margin: {{data.addon_margin}}; }',
      addon_background: '{{SELECTOR}}',
      addon_color_opacity: '{{SELECTOR}}:after{{data.addon_color_opacity}}',
      addon_opacity:
        '{{SELECTOR}}:after{ content: " "; z-index: 0; display: block; position: absolute; height: 100%; top: 0; left: 0; right: 0; opacity:{{data.addon_opacity}}; }',
      addon_color_blend:
        '{{SELECTOR}}:after{ mix-blend-mode:{{data.addon_color_blend}}; }',
      addon_border: '{{SELECTOR}}{{data.addon_border}}',
      addon_border_hover: '{{SELECTOR}}:hover{{data.addon_border_hover}}',
      addon_border_radius:
        '{{SELECTOR}}, {{SELECTOR}}:after{ border-radius: {{data.addon_border_radius}}; overflow:hidden; }',
      addon_border_radius_hover:
        '{{SELECTOR}}:hover, {{SELECTOR}}:hover:after{ border-radius: {{data.addon_border_radius_hover}};overflow:hidden; }',
      addon_boxshadow: '{{SELECTOR}}{{data.addon_boxshadow}}',
      addon_boxshadow_hover: '{{SELECTOR}}:hover{{data.addon_boxshadow_hover}}',
      addon_wrap_opacity:
        '{{SELECTOR}} .pb-addon{ opacity:{{data.addon_wrap_opacity}}; }',
      addon_wrap_opacity_hover:
        '{{SELECTOR}} .pb-addon:hover{ opacity:{{data.addon_wrap_opacity_hover}}; }',
      addon_display: '{{SELECTOR}}{ display: {{data.addon_display}} ; }',
    },
    visibility: true,
    icon: 'pb-font-heart-thin',
    attr: {
      general: {
        icon_list: {
          type: 'icon',
          title: 'Icon',
          std: 'fas fa-home',
        },
        icon_link: {
          type: 'link',
          std: {
            link: '',
            window: false,
            nofolow: false,
          },
          title: 'Link',
        },
        icon_align: {
          type: 'alignment',
          title: 'Alignment',
          std: {
            md: 'center',
            sm: 'center',
            xs: 'center',
          },
          responsive: true,
          selector:
            '{{SELECTOR}} .pb-icon-content { text-align: {{data.icon_align}}; }',
        },
        icon_size: {
          type: 'slider',
          title: 'Size',
          unit: ['px', '%', 'em'],
          range: {
            em: {
              min: 0,
              max: 200,
              step: 0.1,
            },
            px: {
              min: 0,
              max: 400,
              step: 1,
            },
            '%': {
              min: 0,
              max: 100,
              step: 1,
            },
          },
          std: {
            md: '36px',
            sm: '',
            xs: '',
          },
          responsive: true,
          tab: 'style',
          selector:
            '{{SELECTOR}} .pb-icon-content .pb-icon-inner i { font-size: {{data.icon_size}}; }',
        },
        icon_width: {
          type: 'slider',
          title: 'Width',
          unit: ['px', '%', 'em'],
          range: {
            em: {
              min: 0,
              max: 50,
              step: 0.1,
            },
            px: {
              min: 0,
              max: 500,
              step: 1,
            },
            '%': {
              min: 0,
              max: 100,
              step: 1,
            },
          },
          std: {
            md: '100px',
            sm: '',
            xs: '',
          },
          responsive: true,
          tab: 'style',
          selector:
            '{{SELECTOR}} .pb-icon-content .pb-icon-inner { width: {{data.icon_width}}; }',
        },
        icon_height: {
          type: 'slider',
          title: 'Height',
          unit: ['px', '%', 'em'],
          range: {
            em: {
              min: 0,
              max: 50,
              step: 0.1,
            },
            px: {
              min: 0,
              max: 500,
              step: 1,
            },
            '%': {
              min: 0,
              max: 100,
              step: 1,
            },
          },
          std: {
            md: '100px',
            sm: '',
            xs: '',
          },
          responsive: true,
          tab: 'style',
          selector: [
            '{{SELECTOR}} .pb-icon-content .pb-icon-inner { height: {{data.icon_height}}; }',
            '{{SELECTOR}} .pb-icon-content .pb-icon-inner i { line-height: {{data.icon_height}}; }',
          ],
        },
        icon_line_height: {
          type: 'slider',
          title: 'Line Height',
          unit: ['px', '%', 'em'],
          range: {
            em: {
              min: 0,
              max: 50,
              step: 0.1,
            },
            px: {
              min: 0,
              max: 500,
              step: 1,
            },
            '%': {
              min: 0,
              max: 100,
              step: 1,
            },
          },
          std: {
            md: '100px',
            sm: '',
            xs: '',
          },
          responsive: true,
          tab: 'style',
          selector:
            '{{SELECTOR}} .pb-icon-content .pb-icon-inner { line-height: {{data.icon_line_height}}; }',
        },
        icon_color: {
          type: 'color2',
          title: 'Color',
          tab: 'style',
          clip: true,
          std: {
            clip: true,
            colorType: 'color',
            colorColor: '#ffffff',
          },
          section: 'Color',
          selector:
            '{{SELECTOR}} .pb-icon-content .pb-icon-inner i, {{SELECTOR}} .pb-icon-content .pb-icon-inner a i',
        },
        icon_hcolor: {
          type: 'color2',
          title: 'Hover Color',
          tab: 'style',
          clip: true,
          std: {
            clip: true,
            colorType: 'color',
            colorColor: '#ffffff',
          },
          section: 'Color',
          selector:
            '{{SELECTOR}} .pb-icon-content .pb-icon-inner:hover i, {{SELECTOR}} .pb-icon-content .pb-icon-inner:hover a i',
        },
        icon_bg: {
          type: 'color2',
          title: 'background',
          tab: 'style',
          section: 'Color',
          clip: false,
          std: {
            clip: false,
            colorType: 'color',
            colorColor: '#0080FE',
          },
          selector: '{{SELECTOR}} .pb-icon-content .pb-icon-inner',
        },
        icon_hover_bg: {
          type: 'color2',
          title: 'Hover background',
          tab: 'style',
          clip: false,
          std: {
            clip: false,
            colorType: 'color',
            colorColor: '#0170dc',
          },
          section: 'Color',
          selector:
            '{{SELECTOR}} .pb-icon-content .pb-icon-inner:before, {{SELECTOR}} .pb-icon-content .pb-icon-inner:hover',
        },
        icon_border: {
          type: 'border',
          title: 'Border',
          std: {
            borderWidth: {
              top: '2px',
              right: '2px',
              bottom: '2px',
              left: '2px',
            },
            borderStyle: 'solid',
            borderColor: '#cccccc',
          },
          tab: 'style',
          section: 'Border',
          selector: '{{SELECTOR}} .pb-icon-content .pb-icon-inner',
        },
        border_hcolor: {
          type: 'border',
          title: 'Hover Border',
          std: {
            borderWidth: {
              top: '2px',
              right: '2px',
              bottom: '2px',
              left: '2px',
            },
            borderStyle: 'solid',
            borderColor: '#cccccc',
          },
          tab: 'style',
          section: 'Border',
          selector:
            '{{SELECTOR}} .pb-icon-content .pb-icon-inner:hover, {{SELECTOR}} .pb-icon-content .pb-icon-inner:before',
        },
        icon_radius: {
          type: 'dimension',
          title: 'Border radius',
          unit: ['px', 'em', '%'],
          std: {
            md: {
              top: '100px',
              right: '100px',
              bottom: '100px',
              left: '100px',
            },
            sm: {
              top: '',
              right: '',
              bottom: '',
              left: '',
            },
            xs: {
              top: '',
              right: '',
              bottom: '',
              left: '',
            },
          },
          responsive: true,
          tab: 'style',
          section: 'Border Radius',
          selector:
            '{{SELECTOR}} .pb-icon-content .pb-icon-inner, {{SELECTOR}} .pb-icon-content .pb-icon-inner:before { border-radius: {{data.icon_radius}}; }',
        },
        icon_hover_radius: {
          type: 'dimension',
          title: 'Hover Border radius',
          unit: ['px', 'em', '%'],
          responsive: true,
          std: {
            md: {
              top: '100px',
              right: '100px',
              bottom: '100px',
              left: '100px',
            },
            sm: {
              top: '',
              right: '',
              bottom: '',
              left: '',
            },
            xs: {
              top: '',
              right: '',
              bottom: '',
              left: '',
            },
          },
          tab: 'style',
          section: 'Border Radius',
          selector:
            '{{SELECTOR}} .pb-icon-content .pb-icon-inner:hover, {{SELECTOR}} .pb-icon-content .pb-icon-inner:hover:before { border-radius: {{data.icon_hover_radius}}; }',
        },
        icon_boxshadow: {
          type: 'boxshadow',
          title: 'Icon box shadow',
          std: {
            shadowValue: {
              top: '0px',
              right: '0px',
              bottom: '5px',
              left: '0px',
            },
            shadowColor: 'rgba(0,0,0,.3)',
          },
          selector:
            '{{SELECTOR}} .pb-icon-content .pb-icon-inner, {{SELECTOR}} .pb-icon-content .pb-icon-inner:before',
          tab: 'style',
          section: 'Box Shadow',
        },
        icon_hboxshadow: {
          type: 'boxshadow',
          title: 'Icon hover box shadow',
          std: {
            shadowValue: {
              top: '0px',
              right: '0px',
              bottom: '5px',
              left: '0px',
            },
            shadowColor: 'rgba(0,0,0,.3)',
          },
          selector:
            '{{SELECTOR}} .pb-icon-content .pb-icon-inner:hover, {{SELECTOR}} .pb-icon-content .pb-icon-inner:hover:before',
          tab: 'style',
          section: 'Box Shadow',
        },
      },
    },
    defaultAddon: true,
    group: 'basic',
    js_template: true,
  },
  pb_image: pb_image,
  pb_image_hover: {
    type: 'content',
    addon_name: 'pb_image_hover',
    title: 'Image Hover',
    name: 'pb_image_hover',
    category: '',
    Editor: ImageHover,
    Preview: ImageHover,
    styleJSON: {
      front_bg: '{{SELECTOR}} .pb-image-hover-bg',
      overlay_bg:
        '{{SELECTOR}} .pb-image-hover-content .pb-image-hover-overlay { background: {{data.overlay_bg}}; }',
      back_bg:
        '{{SELECTOR}} .pb-image-hover-content:hover .pb-image-hover-overlay{ background-color: {{data.back_bg}}; }',
      image_height:
        '{{SELECTOR}} .pb-image-hover-content { height: {{data.image_height}}; }',
      wrap_padding:
        '{{SELECTOR}} .pb-image-hover-content { padding: {{data.wrap_padding}}; }',
      box_title_color:
        '{{SELECTOR}} .pb-image-hover-title, {{SELECTOR}} .pb-image-hover-title a { color: {{data.box_title_color}}; }',
      box_title_hcolor:
        '{{SELECTOR}} .pb-image-hover-title a:hover { color: {{data.box_title_hcolor}};}',
      box_title_bg:
        '{{SELECTOR}} .pb-image-hover-four .pb-image-hover-intro-four .pb-image-hover-title { background: {{data.box_title_bg}}; }',
      box_title_fontstyle:
        '{{SELECTOR}} .pb-image-hover-title{{data.box_title_fontstyle}}',
      title_margin:
        '{{SELECTOR}} .pb-image-hover-title, {{SELECTOR}} .feature-icontitle-six .pb-image-hover-title { margin: {{data.title_margin}}; }',
      title_padding:
        '{{SELECTOR}} .pb-image-hover-title, {{SELECTOR}} .feature-icontitle-six .pb-image-hover-title, {{SELECTOR}} .pb-image-hover-four .pb-image-hover-intro-four .pb-image-hover-title { padding: {{data.title_padding}}; }',
      box_subtitle_color:
        '{{SELECTOR}} .pb-image-hover-subtitle { color: {{data.box_subtitle_color}}; }',
      box_subtitle_fontstyle:
        '{{SELECTOR}} .pb-image-hover-subtitle{{data.box_subtitle_fontstyle}}',
      subtitle_margin:
        '{{SELECTOR}} .pb-image-hover-subtitle { margin: {{data.subtitle_margin}}; }',
      subtitle_padding:
        '{{SELECTOR}} .pb-image-hover-subtitle { padding: {{data.subtitle_padding}}; }',
      button_fontstyle:
        '{{SELECTOR}} .pb-image-hover-content .pb-btn-addons{{data.button_fontstyle}}',
      button_color:
        '{{SELECTOR}} .pb-image-hover-content .pb-btn-addons { color: {{data.button_color}}; }',
      button_hcolor:
        '{{SELECTOR}} .pb-image-hover-content .pb-btn-addons:hover { color: {{data.button_hcolor}}; }',
      button_bg:
        '{{SELECTOR}} .pb-image-hover-content .pb-btn-addons{{data.button_bg}}',
      button_hover_bg:
        '{{SELECTOR}} .pb-image-hover-content .pb-btn-image-hover:before{{data.button_hover_bg}}',
      button_border:
        '{{SELECTOR}} .pb-image-hover-content .pb-btn-addons{{data.button_border}}',
      border_hcolor:
        '{{SELECTOR}} .pb-image-hover-content .pb-btn-addons:hover{{data.border_hcolor}}',
      buttom_radius:
        '{{SELECTOR}} .pb-image-hover-content .pb-btn-addons { border-radius: {{data.buttom_radius}}; }',
      buttom_hradius:
        '{{SELECTOR}} .pb-image-hover-content .pb-btn-addons:hover { border-radius: {{data.buttom_hradius}}; }',
      button_padding:
        '{{SELECTOR}} .pb-image-hover-content .pb-btn-addons { padding: {{data.button_padding}}; }',
      btn_margin:
        '{{SELECTOR}} .pb-image-hover-content .pb-btn-addons { margin: {{data.btn_margin}}; }',
      three_border_top:
        '{{SELECTOR}} .pb-image-hover-three .pb-image-hover-intro:before, {{SELECTOR}} .pb-image-hover-seven .pb-image-hover-content .pb-image-hover-intro::before{{data.three_border_top}}',
      three_border_left:
        '{{SELECTOR}} .pb-image-hover-three .pb-image-hover-intro:after, {{SELECTOR}} .pb-image-hover-seven .pb-image-hover-content .pb-image-hover-intro::after{{data.three_border_left}}',
      five_border:
        '{{SELECTOR}} .pb-image-hover-five .pb-image-hover-content .pb-image-hover-intro::before{{data.five_border}}',
      six_border:
        '{{SELECTOR}} .pb-image-hover-six .pb-image-hover-title:after{{data.six_border}}',
      six_border_width:
        '{{SELECTOR}} .pb-image-hover-six .pb-image-hover-title:after { height: {{data.six_border_width}}; }',
      eight_border:
        '{{SELECTOR}} .pb-image-hover-eight .pb-image-hover-title::after{{data.eight_border}}',
      eight_border_width:
        '{{SELECTOR}} .pb-image-hover-eight .pb-image-hover-title::after { height: {{data.eight_border_width}}; }',
      addon_z_index:
        '.pb-builder-container {{SELECTOR}}{ z-index: {{data.addon_z_index}}; }',
      addon_padding: '{{SELECTOR}}{ padding: {{data.addon_padding}}; }',
      addon_margin: '{{SELECTOR}}{ margin: {{data.addon_margin}}; }',
      addon_background: '{{SELECTOR}}',
      addon_color_opacity: '{{SELECTOR}}:after{{data.addon_color_opacity}}',
      addon_opacity:
        '{{SELECTOR}}:after{ content: " "; z-index: 0; display: block; position: absolute; height: 100%; top: 0; left: 0; right: 0; opacity:{{data.addon_opacity}}; }',
      addon_color_blend:
        '{{SELECTOR}}:after{ mix-blend-mode:{{data.addon_color_blend}}; }',
      addon_border: '{{SELECTOR}}{{data.addon_border}}',
      addon_border_hover: '{{SELECTOR}}:hover{{data.addon_border_hover}}',
      addon_border_radius:
        '{{SELECTOR}}, {{SELECTOR}}:after{ border-radius: {{data.addon_border_radius}}; overflow:hidden; }',
      addon_border_radius_hover:
        '{{SELECTOR}}:hover, {{SELECTOR}}:hover:after{ border-radius: {{data.addon_border_radius_hover}};overflow:hidden; }',
      addon_boxshadow: '{{SELECTOR}}{{data.addon_boxshadow}}',
      addon_boxshadow_hover: '{{SELECTOR}}:hover{{data.addon_boxshadow_hover}}',
      addon_wrap_opacity:
        '{{SELECTOR}} .pb-addon{ opacity:{{data.addon_wrap_opacity}}; }',
      addon_wrap_opacity_hover:
        '{{SELECTOR}} .pb-addon:hover{ opacity:{{data.addon_wrap_opacity_hover}}; }',
      addon_display: '{{SELECTOR}}{ display: {{data.addon_display}} ; }',
    },
    visibility: true,
    icon: 'pb-font-image3',
    attr: {
      general: {
        layout: {
          type: 'radioimage',
          title: 'Select layout',
          values: {
            one: '/img/image_hover1.png',
            three: '/img/image_hover2.png',
            four: '/img/image_hover3.png',
            five: '/img/image_hover4.png',
            six: '/img/image_hover5.png',
            seven: '/img/image_hover6.png',
            eight: '/img/image_hover7.png',
          },
          std: 'one',
        },
        content_position: {
          type: 'select',
          title: 'Content Position',
          values: {
            topleft: 'Top Left',
            topcenter: 'Top Center',
            topright: 'Top Right',
            middletop: 'Middle Left',
            middlecenter: 'Middle Center',
            middleright: 'Middle Right',
            bottomleft: 'Bottom Left',
            bottomcenter: 'Bottom Center',
            bottomright: 'Bottom Right',
          },
          depends: [['layout', '=', ['one']]],
          std: 'bottomleft',
        },
        title_show: {
          type: 'switch',
          title: 'Show Title',
          std: '1',
          section: 'Title',
        },
        title: {
          type: 'text',
          title: 'Title',
          std: 'Feature Box',
          depends: [['title_show', '=', '1']],
          section: 'Title',
        },
        heading_selector: {
          type: 'select',
          title: 'Title HTML Element',
          values: {
            h1: 'h1',
            h2: 'h2',
            h3: 'h3',
            h4: 'h4',
            h5: 'h5',
            h6: 'h6',
            span: 'span',
            p: 'p',
            div: 'div',
          },
          std: 'h3',
          depends: [['title_show', '=', '1']],
          section: 'Title',
        },
        title_link: {
          type: 'link',
          std: {
            link: '',
            window: false,
            nofolow: false,
          },
          title: 'Add title link',
          depends: [['title_show', '=', '1']],
          section: 'Title',
        },
        subtitle_show: {
          type: 'switch',
          title: 'Show Sub Title',
          std: '1',
          section: 'Sub Title',
        },
        subtitle: {
          type: 'textarea',
          title: 'Sub title',
          std: 'Feature Box sub title',
          depends: [['subtitle_show', '=', '1']],
          section: 'Sub Title',
        },
        subheading_selector: {
          type: 'select',
          title: 'Sub title HTML Element',
          values: {
            h1: 'h1',
            h2: 'h2',
            h3: 'h3',
            h4: 'h4',
            h5: 'h5',
            h6: 'h6',
            span: 'span',
            p: 'p',
            div: 'div',
          },
          std: 'h4',
          depends: [['subtitle_show', '=', '1']],
          section: 'Sub Title',
        },
        button_show: {
          type: 'switch',
          title: 'Hide button',
          std: '0',
          section: 'Button',
        },
        button_text: {
          type: 'text',
          title: 'Button text',
          std: 'Learn More',
          depends: [['button_show', '=', '1']],
          section: 'Button',
        },
        button_link: {
          type: 'link',
          title: 'Add button link',
          std: {
            link: '#',
            window: false,
            nofolow: false,
          },
          depends: [['button_show', '=', '1']],
          section: 'Button',
        },
        btn_icon_list: {
          type: 'icon',
          title: 'Button icon',
          depends: [['button_show', '=', '1']],
          std: '',
          section: 'Button',
        },
        icon_position: {
          type: 'select',
          title: 'Button icon position',
          depends: [['btn_icon_list', '!=', '']],
          values: {
            left: 'Left',
            right: 'Right',
          },
          std: 'left',
          section: 'Button',
        },
        front_bg: {
          type: 'background',
          title: 'Background',
          selector: '{{SELECTOR}} .pb-image-hover-bg',
          std: {
            bgType: 'image',
            bgImage: {
              url: '/img/placeholder/pb-large.jpg',
            },
          },
          section: 'Background',
          disableHover: true,
        },
        overlay_bg: {
          type: 'color',
          title: 'Overlay Background',
          std: '#0180fe',
          selector:
            '{{SELECTOR}} .pb-image-hover-content .pb-image-hover-overlay { background: {{data.overlay_bg}}; }',
          section: 'Background',
        },
        back_bg: {
          type: 'color',
          title: 'Overlay Hover Background',
          std: '#377133',
          selector:
            '{{SELECTOR}} .pb-image-hover-content:hover .pb-image-hover-overlay{ background-color: {{data.back_bg}}; }',
          section: 'Background',
        },
        image_hover_effect: {
          type: 'select',
          title: 'Animation image effect',
          values: {
            slideright: 'Slide from Right',
            slideleft: 'Slide From Left',
            slidetop: 'Slide From Top',
            slidebottom: 'Slide From Bottom',
            zoomin: 'Zoom Out',
            zoomout: 'Zoom In',
          },
          tab: 'style',
          std: 'slideleft',
        },
        image_height: {
          type: 'slider',
          title: 'Height',
          unit: ['%', 'px', 'em'],
          range: {
            em: {
              min: 0,
              max: 70,
              step: 0.1,
            },
            px: {
              min: 0,
              max: 800,
              step: 1,
            },
            '%': {
              min: 0,
              max: 100,
              step: 1,
            },
          },
          std: {
            md: '300px',
            sm: '',
            xs: '',
          },
          responsive: true,
          tab: 'style',
          selector:
            '{{SELECTOR}} .pb-image-hover-content { height: {{data.image_height}}; }',
        },
        wrap_padding: {
          type: 'dimension',
          title: 'Wrap padding',
          tab: 'style',
          responsive: true,
          unit: ['px', 'em', '%'],
          selector:
            '{{SELECTOR}} .pb-image-hover-content { padding: {{data.wrap_padding}}; }',
        },
        box_title_color: {
          type: 'color',
          title: 'Title Color',
          std: '#fff',
          selector:
            '{{SELECTOR}} .pb-image-hover-title, {{SELECTOR}} .pb-image-hover-title a { color: {{data.box_title_color}}; }',
          tab: 'style',
          section: 'Title',
          depends: [['title_show', '=', '1']],
        },
        box_title_hcolor: {
          type: 'color',
          title: 'Title hover color',
          std: '#fff',
          selector:
            '{{SELECTOR}} .pb-image-hover-title a:hover { color: {{data.box_title_hcolor}};}',
          tab: 'style',
          section: 'Title',
          depends: [['title_show', '=', '1']],
        },
        box_title_bg: {
          type: 'color',
          title: 'Title Background Color',
          std: '#0180fe',
          selector:
            '{{SELECTOR}} .pb-image-hover-four .pb-image-hover-intro-four .pb-image-hover-title { background: {{data.box_title_bg}}; }',
          tab: 'style',
          section: 'Title',
          depends: [
            ['layout', '=', ['four']],
            ['title_show', '=', '1'],
          ],
        },
        box_title_fontstyle: {
          type: 'typography',
          title: 'Typography',
          std: {
            fontFamily: '',
            fontSize: {
              md: '20px',
              sm: '',
              xs: '',
            },
            lineHeight: {
              md: '',
              sm: '',
              xs: '',
            },
            fontWeight: '500',
            textTransform: '',
            fontStyle: '',
            letterSpacing: {
              md: '',
              sm: '',
              xs: '',
            },
          },
          selector: '{{SELECTOR}} .pb-image-hover-title',
          section: 'Title',
          tab: 'style',
          depends: [['title_show', '=', '1']],
        },
        title_margin: {
          type: 'dimension',
          title: 'Title margin',
          tab: 'style',
          section: 'Title',
          responsive: true,
          unit: ['px', 'em', '%'],
          std: {
            md: {
              top: '0',
              right: '0',
              bottom: '0',
              left: '0',
            },
            sm: {
              top: '',
              right: '',
              bottom: '',
              left: '',
            },
            xs: {
              top: '',
              right: '',
              bottom: '',
              left: '',
            },
          },
          depends: [['title_show', '=', '1']],
          selector:
            '{{SELECTOR}} .pb-image-hover-title, {{SELECTOR}} .feature-icontitle-six .pb-image-hover-title { margin: {{data.title_margin}}; }',
        },
        title_padding: {
          type: 'dimension',
          title: 'Title padding',
          tab: 'style',
          section: 'Title',
          responsive: true,
          unit: ['px', 'em', '%'],
          depends: [['title_show', '=', '1']],
          selector:
            '{{SELECTOR}} .pb-image-hover-title, {{SELECTOR}} .feature-icontitle-six .pb-image-hover-title, {{SELECTOR}} .pb-image-hover-four .pb-image-hover-intro-four .pb-image-hover-title { padding: {{data.title_padding}}; }',
        },
        box_subtitle_color: {
          type: 'color',
          title: 'Sub title Color',
          clip: true,
          std: '#fff',
          selector:
            '{{SELECTOR}} .pb-image-hover-subtitle { color: {{data.box_subtitle_color}}; }',
          tab: 'style',
          section: 'Sub Title',
          depends: [['subtitle_show', '=', '1']],
        },
        box_subtitle_fontstyle: {
          type: 'typography',
          title: 'Typography',
          std: {
            fontFamily: '',
            fontSize: {
              md: '20px',
              sm: '',
              xs: '',
            },
            lineHeight: {
              md: '',
              sm: '',
              xs: '',
            },
            fontWeight: '500',
            textTransform: '',
            fontStyle: '',
            letterSpacing: {
              md: '',
              sm: '',
              xs: '',
            },
          },
          selector: '{{SELECTOR}} .pb-image-hover-subtitle',
          section: 'Sub Title',
          tab: 'style',
          depends: [['subtitle_show', '=', '1']],
        },
        subtitle_margin: {
          type: 'dimension',
          title: 'Sub title margin',
          tab: 'style',
          section: 'Sub Title',
          responsive: true,
          unit: ['px', 'em', '%'],
          std: {
            md: {
              top: '0',
              right: '0',
              bottom: '0',
              left: '0',
            },
            sm: {
              top: '',
              right: '',
              bottom: '',
              left: '',
            },
            xs: {
              top: '',
              right: '',
              bottom: '',
              left: '',
            },
          },
          selector:
            '{{SELECTOR}} .pb-image-hover-subtitle { margin: {{data.subtitle_margin}}; }',
          depends: [['subtitle_show', '=', '1']],
        },
        subtitle_padding: {
          type: 'dimension',
          title: 'Title padding',
          tab: 'style',
          section: 'Sub Title',
          responsive: true,
          unit: ['px', 'em', '%'],
          selector:
            '{{SELECTOR}} .pb-image-hover-subtitle { padding: {{data.subtitle_padding}}; }',
          depends: [['subtitle_show', '=', '1']],
        },
        button_fontstyle: {
          type: 'typography',
          title: 'Typography',
          std: {
            fontFamily: '',
            fontSize: {
              md: '14px',
              sm: '',
              xs: '',
            },
            lineHeight: {
              md: '',
              sm: '',
              xs: '',
            },
            fontWeight: '700',
            textTransform: '',
            fontStyle: '',
            letterSpacing: {
              md: '',
              sm: '',
              xs: '',
            },
          },
          selector: '{{SELECTOR}} .pb-image-hover-content .pb-btn-addons',
          section: 'Button',
          tab: 'style',
          depends: [['button_show', '=', '1']],
        },
        button_color: {
          type: 'color',
          title: 'Button Color',
          std: '#fff',
          selector:
            '{{SELECTOR}} .pb-image-hover-content .pb-btn-addons { color: {{data.button_color}}; }',
          tab: 'style',
          section: 'Button',
          depends: [['button_show', '=', '1']],
        },
        button_hcolor: {
          type: 'color',
          title: 'Button hover Color',
          std: '#fff',
          selector:
            '{{SELECTOR}} .pb-image-hover-content .pb-btn-addons:hover { color: {{data.button_hcolor}}; }',
          tab: 'style',
          section: 'Button',
          depends: [['button_show', '=', '1']],
        },
        button_bg: {
          type: 'color2',
          title: 'Button background',
          clip: false,
          std: {
            colorType: 'color',
            colorColor: '#2e56ff',
            clip: false,
          },
          selector: '{{SELECTOR}} .pb-image-hover-content .pb-btn-addons',
          tab: 'style',
          section: 'Button',
          depends: [['button_show', '=', '1']],
        },
        button_hover_bg: {
          type: 'color2',
          title: 'Button hover background',
          clip: false,
          std: {
            colorType: 'color',
            colorColor: '#2347e2',
            clip: false,
          },
          selector:
            '{{SELECTOR}} .pb-image-hover-content .pb-btn-image-hover:before',
          tab: 'style',
          section: 'Button',
          depends: [['button_show', '=', '1']],
        },
        button_border: {
          type: 'border',
          title: 'Button Border',
          std: {
            borderWidth: {
              top: '2px',
              right: '2px',
              bottom: '2px',
              left: '2px',
            },
            borderStyle: 'solid',
            borderColor: '#cccccc',
          },
          tab: 'style',
          section: 'Button',
          selector: '{{SELECTOR}} .pb-image-hover-content .pb-btn-addons',
          depends: [['button_show', '=', '1']],
        },
        border_hcolor: {
          type: 'border',
          title: 'Button hover Border',
          std: {
            borderWidth: {
              top: '2px',
              right: '2px',
              bottom: '2px',
              left: '2px',
            },
            borderStyle: 'solid',
            borderColor: '#cccccc',
          },
          tab: 'style',
          section: 'Button',
          selector: '{{SELECTOR}} .pb-image-hover-content .pb-btn-addons:hover',
          depends: [['button_show', '=', '1']],
        },
        buttom_radius: {
          type: 'dimension',
          title: 'Border radius',
          unit: ['%', 'px', 'em'],
          std: {
            md: {
              top: '3px',
              right: '3px',
              bottom: '3px',
              left: '3px',
            },
            sm: {
              top: '',
              right: '',
              bottom: '',
              left: '',
            },
            xs: {
              top: '',
              right: '',
              bottom: '',
              left: '',
            },
          },
          responsive: true,
          tab: 'style',
          section: 'Button',
          selector:
            '{{SELECTOR}} .pb-image-hover-content .pb-btn-addons { border-radius: {{data.buttom_radius}}; }',
          depends: [['button_show', '=', '1']],
        },
        buttom_hradius: {
          type: 'dimension',
          title: 'Border hover radius',
          unit: ['%', 'px', 'em'],
          std: {
            md: {
              top: '3px',
              right: '3px',
              bottom: '3px',
              left: '3px',
            },
            sm: {
              top: '',
              right: '',
              bottom: '',
              left: '',
            },
            xs: {
              top: '',
              right: '',
              bottom: '',
              left: '',
            },
          },
          responsive: true,
          tab: 'style',
          section: 'Button',
          selector:
            '{{SELECTOR}} .pb-image-hover-content .pb-btn-addons:hover { border-radius: {{data.buttom_hradius}}; }',
          depends: [['button_show', '=', '1']],
        },
        button_padding: {
          type: 'dimension',
          title: 'Button Padding',
          unit: ['px', 'em', '%'],
          std: {
            md: {
              top: '5px',
              right: '15px',
              bottom: '5px',
              left: '15px',
            },
            sm: {
              top: '',
              right: '',
              bottom: '',
              left: '',
            },
            xs: {
              top: '',
              right: '',
              bottom: '',
              left: '',
            },
          },
          responsive: true,
          tab: 'style',
          section: 'Button',
          selector:
            '{{SELECTOR}} .pb-image-hover-content .pb-btn-addons { padding: {{data.button_padding}}; }',
          depends: [['button_show', '=', '1']],
        },
        btn_margin: {
          type: 'dimension',
          title: 'Button margin',
          tab: 'style',
          section: 'Button',
          unit: ['px', 'em', '%'],
          responsive: true,
          selector:
            '{{SELECTOR}} .pb-image-hover-content .pb-btn-addons { margin: {{data.btn_margin}}; }',
          depends: [['button_show', '=', '1']],
        },
        three_border_top: {
          type: 'border',
          title: 'Border top & bottom',
          std: {
            borderWidth: {
              top: '1px',
              right: '0px',
              bottom: '1px',
              left: '0px',
            },
            borderStyle: 'solid',
            borderColor: '#fff',
          },
          tab: 'style',
          depends: [['layout', '=', ['three', 'seven']]],
          section: 'Border',
          selector:
            '{{SELECTOR}} .pb-image-hover-three .pb-image-hover-intro:before, {{SELECTOR}} .pb-image-hover-seven .pb-image-hover-content .pb-image-hover-intro::before',
        },
        three_border_left: {
          type: 'border',
          title: 'Border left & right',
          std: {
            borderWidth: {
              top: '0px',
              right: '1px',
              bottom: '0px',
              left: '1px',
            },
            borderStyle: 'solid',
            borderColor: '#fff',
          },
          tab: 'style',
          depends: [['layout', '=', ['three', 'seven']]],
          section: 'Border',
          selector:
            '{{SELECTOR}} .pb-image-hover-three .pb-image-hover-intro:after, {{SELECTOR}} .pb-image-hover-seven .pb-image-hover-content .pb-image-hover-intro::after',
        },
        five_border: {
          type: 'border',
          title: 'Border',
          std: {
            borderWidth: {
              top: '1px',
              right: '1px',
              bottom: '1px',
              left: '1px',
            },
            borderStyle: 'solid',
            borderColor: '#fff',
          },
          tab: 'style',
          depends: [['layout', '=', ['five']]],
          section: 'Border',
          selector:
            '{{SELECTOR}} .pb-image-hover-five .pb-image-hover-content .pb-image-hover-intro::before',
        },
        six_border: {
          type: 'color2',
          title: 'Background',
          tab: 'style',
          depends: [['layout', '=', ['six']]],
          section: 'Border',
          selector:
            '{{SELECTOR}} .pb-image-hover-six .pb-image-hover-title:after',
        },
        six_border_width: {
          type: 'slider',
          title: 'Bar Height',
          unit: ['px', 'em', '%'],
          range: {
            em: {
              min: 0,
              max: 30,
              step: 0.1,
            },
            px: {
              min: 0,
              max: 400,
              step: 1,
            },
            '%': {
              min: 0,
              max: 100,
              step: 1,
            },
          },
          std: {
            md: '3px',
            sm: '',
            xs: '',
          },
          responsive: true,
          tab: 'style',
          section: 'Border',
          depends: [['layout', '=', ['six']]],
          selector:
            '{{SELECTOR}} .pb-image-hover-six .pb-image-hover-title:after { height: {{data.six_border_width}}; }',
        },
        eight_border: {
          type: 'color2',
          title: 'Background',
          tab: 'style',
          depends: [['layout', '=', ['eight']]],
          section: 'Border',
          selector:
            '{{SELECTOR}} .pb-image-hover-eight .pb-image-hover-title::after',
        },
        eight_border_width: {
          type: 'slider',
          title: 'Bar Height',
          unit: ['px', 'em', '%'],
          range: {
            em: {
              min: 0,
              max: 30,
              step: 0.1,
            },
            px: {
              min: 0,
              max: 400,
              step: 1,
            },
            '%': {
              min: 0,
              max: 100,
              step: 1,
            },
          },
          std: {
            md: '3px',
            sm: '',
            xs: '',
          },
          responsive: true,
          tab: 'style',
          section: 'Border',
          depends: [['layout', '=', ['eight']]],
          selector:
            '{{SELECTOR}} .pb-image-hover-eight .pb-image-hover-title::after { height: {{data.eight_border_width}}; }',
        },
      },
    },
    defaultAddon: true,
    group: 'basic',
    js_template: true,
  },
  pb_person: {
    type: 'content',
    addon_name: 'pb_person',
    title: 'Person',
    name: 'pb_person',
    category: '',
    Editor: PersonComponent,
    Preview: PersonComponent,
    styleJSON: {
      'social_item.icon_color':
        '{{SELECTOR}} .pb-person-social-list a { color: {{data.icon_color}}; }',
      'social_item.icon_hcolor':
        '{{SELECTOR}}  .pb-person-social-list a:hover { color: {{data.icon_hcolor}}; }',
      'social_item.icon_bg':
        '{{SELECTOR}} .pb-person-social-list a{{data.icon_bg}}',
      'social_item.icon_hover_bg':
        '{{SELECTOR}} .pb-person-social-list a:hover{{data.icon_hover_bg}}',
      persion_align:
        '{{SELECTOR}} .pb-person-addon-content{ text-align: {{data.persion_align}}; }',
      img_width:
        '{{SELECTOR}} .pb-person-addon-img, {{SELECTOR}} .person-layout-one .pb-person-addon-img, {{SELECTOR}} .person-layout-four .pb-person-addon-img, {{SELECTOR}} .person-layout-three .pb-person-addon-img { width: {{data.img_width}}; }',
      img_height:
        '{{SELECTOR}} .pb-person-addon-img, {{SELECTOR}} .person-layout-one .pb-person-addon-img, {{SELECTOR}} .person-layout-four .pb-person-addon-img, {{SELECTOR}} .person-layout-three .pb-person-addon-img { height: {{data.img_height}}; }',
      img_radius:
        '{{SELECTOR}} .pb-person-addon-img, {{SELECTOR}} .person-layout-one .pb-person-addon-img, {{SELECTOR}} .person-layout-four .pb-person-addon-img, {{SELECTOR}} .person-layout-three .pb-person-addon-img { border-radius: {{data.img_radius}}; }',
      image_border: '{{SELECTOR}} .pb-person-addon-img{{data.image_border}}',
      image_margin:
        '{{SELECTOR}} .pb-person-addon-img { margin: {{data.image_margin}}; }',
      name_color:
        '{{SELECTOR}} .pb-person-information .pb-person-name, {{SELECTOR}} .pb-person-name a, {{SELECTOR}} .pb-person-five-overlay .pb-person-name{{data.name_color}}',
      name_fontstyle: '{{SELECTOR}} .pb-person-name{{data.name_fontstyle}}',
      name_margin:
        '{{SELECTOR}} .pb-person-name { margin: {{data.name_margin}}; }',
      desgn_color:
        '{{SELECTOR}} .pb-person-information .pb-person-designation, {{SELECTOR}} .pb-person-five-overlay .pb-person-designation { color: {{data.desgn_color}}; }',
      desgn_fontstyle:
        '{{SELECTOR}} .pb-person-information .pb-person-designation{{data.desgn_fontstyle}}',
      desgn_margin:
        '{{SELECTOR}} .pb-person-information .pb-person-designation { margin: {{data.desgn_margin}}; }',
      email_color:
        '{{SELECTOR}} .pb-person-email, {{SELECTOR}} .pb-person-five-overlay .pb-person-email { color: {{data.email_color}}; }',
      email_fontstyle:
        '{{SELECTOR}} .pb-person-information .pb-person-email{{data.email_fontstyle}}',
      email_margin:
        '{{SELECTOR}} .pb-person-information .pb-person-email { margin: {{data.email_margin}}; }',
      intro_color:
        '{{SELECTOR}} .pb-person-introtext, {{SELECTOR}} .pb-person-five-overlay .pb-person-introtext { color: {{data.intro_color}}; }',
      intro_fontstyle:
        '{{SELECTOR}} .pb-person-introtext{{data.intro_fontstyle}}',
      icon_color:
        '{{SELECTOR}} .pb-person-social li a { color: {{data.icon_color}}; }',
      icon_hcolor:
        '{{SELECTOR}}  .pb-person-social li a i:hover { color: {{data.icon_hcolor}}; }',
      icon_bg:
        '{{SELECTOR}} .pb-person-social li a { background: {{data.icon_bg}}; }',
      icon_hover_bg:
        '{{SELECTOR}} .pb-person-social li a:hover{ background: {{data.icon_hover_bg}}; }',
      icon_size:
        '{{SELECTOR}} .pb-person-social li a { font-size: {{data.icon_size}}; }',
      icon_width:
        '{{SELECTOR}} .pb-person-social li a { width: {{data.icon_width}}; }',
      icon_height:
        '{{SELECTOR}} .pb-person-social li a { height: {{data.icon_height}}; }{{SELECTOR}} .pb-person-social li a { line-height: {{data.icon_height}}; }',
      icon_line_height:
        '{{SELECTOR}} .pb-person-social li a { line-height: {{data.icon_line_height}}; }',
      icon_radius:
        '{{SELECTOR}} .pb-person-social li a { border-radius: {{data.icon_radius}}; }',
      icon_border: '{{SELECTOR}} .pb-person-social li a{{data.icon_border}}',
      border_hcolor:
        '{{SELECTOR}} .pb-person-social li a:hover{{data.border_hcolor}}',
      social_margin:
        '{{SELECTOR}} .pb-person-social-list { margin: {{data.social_margin}}; }',
      content_background:
        '{{SELECTOR}} .person-layout-two .pb-person-information-wrap,{{SELECTOR}} .pb-person-five-overlay:after{{data.content_background}}',
      content_boxshadow:
        '{{SELECTOR}} .pb-person-five-overlay, {{SELECTOR}} .pb-person-five-overlay:after{{data.content_boxshadow}}',
      content_radius:
        '{{SELECTOR}} .pb-person-five-wrap .pb-person-image img, {{SELECTOR}} .pb-person-five-overlay,{{SELECTOR}} .pb-person-five-overlay:after { border-radius: {{data.content_radius}}; }',
      content_wrap:
        '{{SELECTOR}} .person-layout-one, {{SELECTOR}} .person-layout-two .pb-person-information-wrap,{{SELECTOR}} .pb-person-five-overlay { padding: {{data.content_wrap}}; }',
      addon_z_index:
        '.pb-builder-container {{SELECTOR}}{ z-index: {{data.addon_z_index}}; }',
      addon_padding: '{{SELECTOR}}{ padding: {{data.addon_padding}}; }',
      addon_margin: '{{SELECTOR}}{ margin: {{data.addon_margin}}; }',
      addon_background: '{{SELECTOR}}',
      addon_color_opacity: '{{SELECTOR}}:after{{data.addon_color_opacity}}',
      addon_opacity:
        '{{SELECTOR}}:after{ content: " "; z-index: 0; display: block; position: absolute; height: 100%; top: 0; left: 0; right: 0; opacity:{{data.addon_opacity}}; }',
      addon_color_blend:
        '{{SELECTOR}}:after{ mix-blend-mode:{{data.addon_color_blend}}; }',
      addon_border: '{{SELECTOR}}{{data.addon_border}}',
      addon_border_hover: '{{SELECTOR}}:hover{{data.addon_border_hover}}',
      addon_border_radius:
        '{{SELECTOR}}, {{SELECTOR}}:after{ border-radius: {{data.addon_border_radius}}; overflow:hidden; }',
      addon_border_radius_hover:
        '{{SELECTOR}}:hover, {{SELECTOR}}:hover:after{ border-radius: {{data.addon_border_radius_hover}};overflow:hidden; }',
      addon_boxshadow: '{{SELECTOR}}{{data.addon_boxshadow}}',
      addon_boxshadow_hover: '{{SELECTOR}}:hover{{data.addon_boxshadow_hover}}',
      addon_wrap_opacity:
        '{{SELECTOR}} .pb-addon{ opacity:{{data.addon_wrap_opacity}}; }',
      addon_wrap_opacity_hover:
        '{{SELECTOR}} .pb-addon:hover{ opacity:{{data.addon_wrap_opacity_hover}}; }',
      addon_display: '{{SELECTOR}}{ display: {{data.addon_display}} ; }',
    },
    visibility: true,
    icon: 'pb-font-person',
    attr: {
      general: {
        person_layout: {
          type: 'radioimage',
          title: 'Layout',
          values: {
            one: '/img/person/person-img1.png',
            two: '/img/person/person-img2.png',
            three: '/img/person/person-img3.png',
            four: '/img/person/person-img4.png',
            five: '/img/person/person-img5.png',
          },
          std: 'one',
        },
        person_image: {
          type: 'media',
          title: 'Image',
          std: {
            url: '/img/placeholder/pb-large.jpg',
          },
        },
        name: {
          type: 'text',
          title: 'Name',
          std: 'John Doe',
        },
        name_link: {
          type: 'link',
          std: {
            link: '',
            window: true,
            nofolow: false,
          },
          title: 'Profile URL',
        },
        designation: {
          type: 'text',
          title: 'Designation',
          std: 'Creative Designer',
        },
        email: {
          type: 'text',
          title: 'Email',
          placeholder: 'example@example.com',
        },
        introtext: {
          type: 'textarea',
          title: 'Intro text',
          std: 'Photographs are a way of preserving a moment in our lives for the rest of our lives.',
        },
        show_social: {
          type: 'switch',
          title: 'Show Social Media',
          std: '1',
        },
        social_item: {
          title: 'Social Media URL',
          depends: [['show_social', '!=', '']],
          type: 'repeatable',
          label: 'icon_list',
          std: [
            {
              icon_list: 'fab fa-facebook-f',
              socialurl: '#',
            },
            {
              icon_list: 'fab fa-linkedin',
              socialurl: '#',
            },
            {
              icon_list: 'fab fa-flickr',
              socialurl: '#',
            },
          ],
          attr: {
            icon_list: {
              type: 'iconsocial',
              title: 'Icon List',
              std: 'fab fa-facebook-f',
            },
            socialurl: {
              type: 'text',
              title: 'Social URL',
              std: '#',
            },
            icon_color: {
              type: 'color',
              title: 'Color',
              selector:
                '{{SELECTOR}} .pb-person-social-list a { color: {{data.icon_color}}; }',
            },
            icon_hcolor: {
              type: 'color',
              title: 'Hover color',
              selector:
                '{{SELECTOR}}  .pb-person-social-list a:hover { color: {{data.icon_hcolor}}; }',
            },
            icon_bg: {
              type: 'color2',
              title: 'background',
              clip: false,
              std: {
                colorType: 'color',
                colorColor: '#3D88E4',
              },
              selector: '{{SELECTOR}} .pb-person-social-list a',
            },
            icon_hover_bg: {
              type: 'color2',
              title: 'Hover background',
              clip: false,
              std: {
                colorType: 'color',
                colorColor: '#3D88E4',
              },
              selector: '{{SELECTOR}} .pb-person-social-list a:hover',
            },
          },
        },
        persion_align: {
          type: 'alignment',
          title: 'Alignment',
          responsive: true,
          selector:
            '{{SELECTOR}} .pb-person-addon-content{ text-align: {{data.persion_align}}; }',
        },
        img_width: {
          type: 'slider',
          title: 'Width',
          unit: ['px', '%', 'em'],
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
            '%': {
              min: 0,
              max: 100,
              step: 1,
            },
          },
          responsive: true,
          tab: 'style',
          section: 'Image',
          selector:
            '{{SELECTOR}} .pb-person-addon-img, {{SELECTOR}} .person-layout-one .pb-person-addon-img, {{SELECTOR}} .person-layout-four .pb-person-addon-img, {{SELECTOR}} .person-layout-three .pb-person-addon-img { width: {{data.img_width}}; }',
        },
        img_height: {
          type: 'slider',
          title: 'Height',
          unit: ['px', '%', 'em'],
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
            '%': {
              min: 0,
              max: 100,
              step: 1,
            },
          },
          responsive: true,
          tab: 'style',
          section: 'Image',
          selector:
            '{{SELECTOR}} .pb-person-addon-img, {{SELECTOR}} .person-layout-one .pb-person-addon-img, {{SELECTOR}} .person-layout-four .pb-person-addon-img, {{SELECTOR}} .person-layout-three .pb-person-addon-img { height: {{data.img_height}}; }',
        },
        img_radius: {
          type: 'dimension',
          title: 'Border Radius',
          unit: ['px', '%', 'em'],
          responsive: true,
          tab: 'style',
          section: 'Image',
          selector:
            '{{SELECTOR}} .pb-person-addon-img, {{SELECTOR}} .person-layout-one .pb-person-addon-img, {{SELECTOR}} .person-layout-four .pb-person-addon-img, {{SELECTOR}} .person-layout-three .pb-person-addon-img { border-radius: {{data.img_radius}}; }',
        },
        image_border: {
          type: 'border',
          title: 'Border',
          std: {
            borderWidth: {
              top: '0px',
              right: '0px',
              bottom: '0px',
              left: '0px',
            },
            borderStyle: 'solid',
            borderColor: '#cccccc',
          },
          tab: 'style',
          section: 'Image',
          selector: '{{SELECTOR}} .pb-person-addon-img',
        },
        image_margin: {
          type: 'dimension',
          title: 'Image Margin',
          unit: ['px', 'em', '%'],
          responsive: true,
          tab: 'style',
          selector:
            '{{SELECTOR}} .pb-person-addon-img { margin: {{data.image_margin}}; }',
          section: 'Image',
        },
        name_color: {
          type: 'color2',
          title: 'Color',
          tab: 'style',
          clip: true,
          std: {
            colorType: 'color',
            clip: true,
            colorColor: '',
          },
          section: 'Name',
          selector:
            '{{SELECTOR}} .pb-person-information .pb-person-name, {{SELECTOR}} .pb-person-name a, {{SELECTOR}} .pb-person-five-overlay .pb-person-name',
        },
        name_fontstyle: {
          type: 'typography',
          title: 'Typography',
          std: {
            fontFamily: '',
            fontSize: {
              md: '18px',
              sm: '',
              xs: '',
            },
            lineHeight: {
              md: '',
              sm: '',
              xs: '',
            },
            fontWeight: '700',
            textTransform: '',
            fontStyle: '',
            letterSpacing: {
              md: '',
              sm: '',
              xs: '',
            },
          },
          selector: '{{SELECTOR}} .pb-person-name',
          section: 'Name',
          tab: 'style',
        },
        name_margin: {
          type: 'dimension',
          title: 'Name Margin',
          unit: ['px', 'em', '%'],
          responsive: true,
          tab: 'style',
          selector:
            '{{SELECTOR}} .pb-person-name { margin: {{data.name_margin}}; }',
          section: 'Name',
        },
        desgn_color: {
          type: 'color',
          title: 'Color',
          tab: 'style',
          section: 'Designation',
          selector:
            '{{SELECTOR}} .pb-person-information .pb-person-designation, {{SELECTOR}} .pb-person-five-overlay .pb-person-designation { color: {{data.desgn_color}}; }',
        },
        desgn_fontstyle: {
          type: 'typography',
          title: 'Typography',
          std: {
            fontFamily: '',
            fontSize: {
              md: '18px',
              sm: '',
              xs: '',
            },
            lineHeight: {
              md: '',
              sm: '',
              xs: '',
            },
            fontWeight: '700',
            textTransform: '',
            fontStyle: '',
            letterSpacing: {
              md: '',
              sm: '',
              xs: '',
            },
          },
          selector:
            '{{SELECTOR}} .pb-person-information .pb-person-designation',
          section: 'Designation',
          tab: 'style',
        },
        desgn_margin: {
          type: 'dimension',
          title: 'Margin',
          unit: ['px', 'em', '%'],
          responsive: true,
          tab: 'style',
          selector:
            '{{SELECTOR}} .pb-person-information .pb-person-designation { margin: {{data.desgn_margin}}; }',
          section: 'Designation',
        },
        email_color: {
          type: 'color',
          title: 'Color',
          tab: 'style',
          section: 'Email',
          selector:
            '{{SELECTOR}} .pb-person-email, {{SELECTOR}} .pb-person-five-overlay .pb-person-email { color: {{data.email_color}}; }',
        },
        email_fontstyle: {
          type: 'typography',
          title: 'Typography',
          std: {
            fontFamily: '',
            fontSize: {
              md: '18px',
              sm: '',
              xs: '',
            },
            lineHeight: {
              md: '',
              sm: '',
              xs: '',
            },
            fontWeight: '700',
            textTransform: '',
            fontStyle: '',
            letterSpacing: {
              md: '',
              sm: '',
              xs: '',
            },
          },
          selector: '{{SELECTOR}} .pb-person-information .pb-person-email',
          section: 'Email',
          tab: 'style',
        },
        email_margin: {
          type: 'dimension',
          title: 'Margin',
          unit: ['px', 'em', '%'],
          responsive: true,
          tab: 'style',
          selector:
            '{{SELECTOR}} .pb-person-information .pb-person-email { margin: {{data.email_margin}}; }',
          section: 'Email',
        },
        intro_color: {
          type: 'color',
          title: 'Color',
          tab: 'style',
          section: 'Intro Text',
          selector:
            '{{SELECTOR}} .pb-person-introtext, {{SELECTOR}} .pb-person-five-overlay .pb-person-introtext { color: {{data.intro_color}}; }',
        },
        intro_fontstyle: {
          type: 'typography',
          title: 'Typography',
          std: {
            fontFamily: '',
            fontSize: {
              md: '18px',
              sm: '',
              xs: '',
            },
            lineHeight: {
              md: '',
              sm: '',
              xs: '',
            },
            fontWeight: '700',
            textTransform: '',
            fontStyle: '',
            letterSpacing: {
              md: '',
              sm: '',
              xs: '',
            },
          },
          selector: '{{SELECTOR}} .pb-person-introtext',
          section: 'Intro Text',
          tab: 'style',
        },
        icon_color: {
          type: 'color',
          title: 'Color',
          tab: 'style',
          section: 'Social Share',
          selector:
            '{{SELECTOR}} .pb-person-social li a { color: {{data.icon_color}}; }',
        },
        icon_hcolor: {
          type: 'color',
          title: 'Hover color',
          tab: 'style',
          section: 'Social Share',
          selector:
            '{{SELECTOR}}  .pb-person-social li a i:hover { color: {{data.icon_hcolor}}; }',
        },
        icon_bg: {
          type: 'color',
          title: 'background',
          tab: 'style',
          section: 'Social Share',
          selector:
            '{{SELECTOR}} .pb-person-social li a { background: {{data.icon_bg}}; }',
        },
        icon_hover_bg: {
          type: 'color',
          title: 'Hover background',
          tab: 'style',
          section: 'Social Share',
          selector:
            '{{SELECTOR}} .pb-person-social li a:hover{ background: {{data.icon_hover_bg}}; }',
        },
        icon_size: {
          type: 'slider',
          title: 'Size',
          unit: ['px', '%', 'em'],
          range: {
            em: {
              min: 0,
              max: 25,
              step: 0.1,
            },
            px: {
              min: 0,
              max: 200,
              step: 1,
            },
            '%': {
              min: 0,
              max: 100,
              step: 1,
            },
          },
          std: {
            md: '18px',
            sm: '',
            xs: '',
          },
          responsive: true,
          tab: 'style',
          section: 'Social Share',
          selector:
            '{{SELECTOR}} .pb-person-social li a { font-size: {{data.icon_size}}; }',
        },
        icon_width: {
          type: 'slider',
          title: 'Width',
          unit: ['px', '%', 'em'],
          std: {
            md: '',
            sm: '',
            xs: '',
          },
          range: {
            em: {
              min: 0,
              max: 25,
              step: 0.1,
            },
            px: {
              min: 0,
              max: 200,
              step: 1,
            },
            '%': {
              min: 0,
              max: 100,
              step: 1,
            },
          },
          responsive: true,
          tab: 'style',
          section: 'Social Share',
          selector:
            '{{SELECTOR}} .pb-person-social li a { width: {{data.icon_width}}; }',
        },
        icon_height: {
          type: 'slider',
          title: 'Height',
          unit: ['px', '%', 'em'],
          responsive: true,
          std: {
            md: '',
            sm: '',
            xs: '',
          },
          tab: 'style',
          section: 'Social Share',
          selector: [
            '{{SELECTOR}} .pb-person-social li a { height: {{data.icon_height}}; }',
            '{{SELECTOR}} .pb-person-social li a { line-height: {{data.icon_height}}; }',
          ],
        },
        icon_line_height: {
          type: 'slider',
          title: 'Line Height',
          unit: ['px', '%', 'em'],
          responsive: true,
          std: {
            md: '',
            sm: '',
            xs: '',
          },
          tab: 'style',
          section: 'Social Share',
          selector:
            '{{SELECTOR}} .pb-person-social li a { line-height: {{data.icon_line_height}}; }',
        },
        icon_radius: {
          type: 'dimension',
          title: 'Border radius',
          unit: ['px', '%', 'em'],
          std: {
            md: {
              top: '',
              right: '',
              bottom: '',
              left: '',
            },
            sm: {
              top: '',
              right: '',
              bottom: '',
              left: '',
            },
            xs: {
              top: '',
              right: '',
              bottom: '',
              left: '',
            },
          },
          responsive: true,
          tab: 'style',
          section: 'Social Share',
          selector:
            '{{SELECTOR}} .pb-person-social li a { border-radius: {{data.icon_radius}}; }',
        },
        icon_border: {
          type: 'border',
          title: 'Icon Border',
          std: {
            borderWidth: {
              top: '2px',
              right: '2px',
              bottom: '2px',
              left: '2px',
            },
            borderStyle: 'solid',
            borderColor: '#cccccc',
          },
          tab: 'style',
          section: 'Social Share',
          selector: '{{SELECTOR}} .pb-person-social li a',
        },
        border_hcolor: {
          type: 'border',
          title: 'Border hover color',
          std: {
            borderWidth: {
              top: '2px',
              right: '2px',
              bottom: '2px',
              left: '2px',
            },
            borderStyle: 'solid',
            borderColor: '#cccccc',
          },
          tab: 'style',
          section: 'Social Share',
          selector: '{{SELECTOR}} .pb-person-social li a:hover',
        },
        social_margin: {
          type: 'dimension',
          title: 'Social margin',
          unit: ['px', 'em', '%'],
          responsive: true,
          tab: 'style',
          selector:
            '{{SELECTOR}} .pb-person-social-list { margin: {{data.social_margin}}; }',
          section: 'Social Share',
        },
        content_background: {
          type: 'color2',
          title: 'Background Color',
          tab: 'style',
          section: 'Content wrap',
          clip: false,
          std: {
            colorType: 'color',
            colorColor: 'rgba(4, 190, 254, 1)',
            clip: false,
          },
          depends: [['person_layout', '=', ['two', 'five']]],
          selector:
            '{{SELECTOR}} .person-layout-two .pb-person-information-wrap,{{SELECTOR}} .pb-person-five-overlay:after',
        },
        content_boxshadow: {
          type: 'boxshadow',
          title: 'Box shadow',
          std: {
            shadowValue: {
              top: '0px',
              right: '0px',
              bottom: '5px',
              left: '0px',
            },
            shadowColor: 'rgba(0,0,0,.3)',
          },
          tab: 'style',
          section: 'Content wrap',
          depends: [['person_layout', '=', ['five']]],
          selector:
            '{{SELECTOR}} .pb-person-five-overlay, {{SELECTOR}} .pb-person-five-overlay:after',
        },
        content_radius: {
          type: 'dimension',
          title: 'Border radius',
          unit: ['px', '%', 'em'],
          responsive: true,
          tab: 'style',
          section: 'Content wrap',
          depends: [['person_layout', '=', ['five']]],
          selector:
            '{{SELECTOR}} .pb-person-five-wrap .pb-person-image img, {{SELECTOR}} .pb-person-five-overlay,{{SELECTOR}} .pb-person-five-overlay:after { border-radius: {{data.content_radius}}; }',
        },
        content_wrap: {
          type: 'dimension',
          title: 'Padding',
          unit: ['px', 'em', '%'],
          responsive: true,
          tab: 'style',
          selector:
            '{{SELECTOR}} .person-layout-one, {{SELECTOR}} .person-layout-two .pb-person-information-wrap,{{SELECTOR}} .pb-person-five-overlay { padding: {{data.content_wrap}}; }',
          section: 'Content wrap',
        },
      },
    },
    defaultAddon: true,
    group: 'basic',
    js_template: true,
  },
  pb_person_carousel: {
    type: 'content',
    addon_name: 'pb_person_carousel',
    title: 'Person Carousel',
    name: 'pb_person_carousel',
    category: '',
    Editor: PersonCarousel,
    Preview: PersonCarousel,
    styleJSON: {
      person_align:
        '{{SELECTOR}} .pb-person-carousel-addon-content{ text-align: {{data.person_align}}; }',
      img_width:
        '{{SELECTOR}} .pb-person-addon-img { width: {{data.img_width}}; }',
      img_height:
        '{{SELECTOR}} .pb-person-addon-img, {{SELECTOR}} .person-layout-layoutone .pb-person-addon-img { height: {{data.img_height}}; }',
      img_radius:
        '{{SELECTOR}} .pb-person-addon-img { border-radius: {{data.img_radius}}; }',
      image_border: '{{SELECTOR}} .pb-person-addon-img{{data.image_border}}',
      name_color:
        '{{SELECTOR}} .pb-person-name, {{SELECTOR}} .pb-person-name a{{data.name_color}}',
      name_fontstyle: '{{SELECTOR}} .pb-person-name{{data.name_fontstyle}}',
      name_padding:
        '{{SELECTOR}} .pb-person-name { padding: {{data.name_padding}}; }',
      name_margin:
        '{{SELECTOR}} .pb-person-name { margin: {{data.name_margin}}; }',
      desgn_color:
        '{{SELECTOR}} .pb-person-designation { color: {{data.desgn_color}}; }',
      desgn_fontstyle:
        '{{SELECTOR}} .pb-person-designation{{data.desgn_fontstyle}}',
      email_color:
        '{{SELECTOR}} .pb-person-email { color: {{data.email_color}}; }',
      email_fontstyle: '{{SELECTOR}} .pb-person-email{{data.email_fontstyle}}',
      email_margin:
        '{{SELECTOR}} .pb-person-email { margin: {{data.email_margin}}; }',
      intro_color:
        '{{SELECTOR}} .pb-person-introtext { color: {{data.intro_color}}; }',
      intro_fontstyle:
        '{{SELECTOR}} .pb-person-introtext{{data.intro_fontstyle}}',
      message_margin:
        '{{SELECTOR}} .pb-person-introtext { margin: {{data.message_margin}}; }',
      icon_size:
        '{{SELECTOR}} .pb-person-social li a { font-size: {{data.icon_size}}; }',
      icon_width:
        '{{SELECTOR}} .pb-person-social li a { width: {{data.icon_width}}; }',
      icon_height:
        '{{SELECTOR}} .pb-person-social li a { height: {{data.icon_height}}; }{{SELECTOR}} .pb-person-social li a { line-height: {{data.icon_height}}; }',
      icon_line_height:
        '{{SELECTOR}} .pb-person-social li a { line-height: {{data.icon_line_height}}; }',
      icon_color:
        '{{SELECTOR}} .pb-person-social li a { color: {{data.icon_color}}; }',
      icon_hcolor:
        '{{SELECTOR}}  .pb-person-social li a i:hover { color: {{data.icon_hcolor}}; }',
      icon_bg:
        '{{SELECTOR}} .pb-person-social li a { background: {{data.icon_bg}}; }',
      icon_hover_bg:
        '{{SELECTOR}} .pb-person-social li a:hover{ background: {{data.icon_hover_bg}}; }',
      icon_radius:
        '{{SELECTOR}} .pb-person-social li a { border-radius: {{data.icon_radius}}; }',
      icon_border: '{{SELECTOR}} .pb-person-social li a{{data.icon_border}}',
      border_hcolor:
        '{{SELECTOR}} .pb-person-social li a:hover{{data.border_hcolor}}',
      share_margin:
        '{{SELECTOR}} .pb-person-social { margin: {{data.share_margin}}; }',
      dot_position:
        '{{SELECTOR}} .pb-person-content-carousel .slick-dots { bottom: {{data.dot_position}}; }',
      dot_bg_color:
        '{{SELECTOR}} .pb-person-content-carousel .slick-dots li button { background: {{data.dot_bg_color}}; }',
      dot_bg_hcolor:
        '{{SELECTOR}} .pb-person-content-carousel .slick-dots li.slick-active button, {{SELECTOR}} .pb-person-content-carousel .slick-dots li button:hover { background: {{data.dot_bg_hcolor}}; }',
      dot_width:
        '{{SELECTOR}} .pb-person-content-carousel .slick-dots li button, {{SELECTOR}} .pb-person-content-carousel .slick-dots li { width: {{data.dot_width}}; }',
      dot_height:
        '{{SELECTOR}} .pb-person-content-carousel .slick-dots li button, {{SELECTOR}} .pb-person-content-carousel .slick-dots li { height: {{data.dot_height}}; }',
      dot_radius:
        '{{SELECTOR}} .pb-person-content-carousel .slick-dots li button { border-radius: {{data.dot_radius}}; }',
      nav_position:
        '{{SELECTOR}} .pb-person-content-carousel .pb-carousel-prev,{{SELECTOR}} .pb-person-content-carousel .pb-carousel-next { top: {{data.nav_position}}; }',
      nav_left_position:
        '{{SELECTOR}} .pb-person-content-carousel.nav_style2 .pb-carousel-next { right: {{data.nav_left_position}}; }',
      nav_right_position:
        '{{SELECTOR}} .pb-person-content-carousel.nav_style3 .pb-carousel-prev { left: {{data.nav_right_position}}; }',
      nav_font_size:
        '{{SELECTOR}} .pb-person-content-carousel .pb-carousel-next, {{SELECTOR}} .pb-person-content-carousel .pb-carousel-prev { font-size: {{data.nav_font_size}}; }',
      nav_color:
        '{{SELECTOR}} .pb-person-content-carousel .pb-carousel-prev, {{SELECTOR}} .pb-person-content-carousel .pb-carousel-next { color: {{data.nav_color}}; }',
      nav_bg_color:
        '{{SELECTOR}} .pb-person-content-carousel .pb-carousel-prev, {{SELECTOR}} .pb-person-content-carousel .pb-carousel-next { background: {{data.nav_bg_color}}; }',
      nav_hcolor:
        '{{SELECTOR}} .pb-person-content-carousel .pb-carousel-prev:hover, {{SELECTOR}} .pb-person-content-carousel .pb-carousel-next:hover { color: {{data.nav_hcolor}}; }',
      nav_bg_hcolor:
        '{{SELECTOR}} .pb-person-content-carousel .pb-carousel-prev:hover, {{SELECTOR}} .pb-person-content-carousel .pb-carousel-next:hover { background: {{data.nav_bg_hcolor}}; }',
      nav_width:
        '{{SELECTOR}} .pb-person-content-carousel .pb-carousel-prev, {{SELECTOR}} .pb-person-content-carousel .pb-carousel-next { width: {{data.nav_width}}; }',
      nav_height:
        '{{SELECTOR}} .pb-person-content-carousel .pb-carousel-prev, {{SELECTOR}} .pb-person-content-carousel .pb-carousel-next { height: {{data.nav_height}}; }',
      nav_line_height:
        '{{SELECTOR}} .pb-person-content-carousel .pb-carousel-prev, {{SELECTOR}} .pb-person-content-carousel .pb-carousel-next { line-height: {{data.nav_line_height}}; }',
      nav_radius:
        '{{SELECTOR}} .pb-person-content-carousel .pb-carousel-prev, {{SELECTOR}} .pb-person-content-carousel .pb-carousel-next { border-radius: {{data.nav_radius}}; }',
      nav_border:
        '{{SELECTOR}} .pb-person-content-carousel .pb-carousel-prev,{{SELECTOR}} .pb-person-content-carousel .pb-carousel-next{{data.nav_border}}',
      nav_border_hcolor:
        '{{SELECTOR}} .pb-person-content-carousel .pb-carousel-prev:hover, {{SELECTOR}} .pb-person-content-carousel .pb-carousel-next:hover{{data.nav_border_hcolor}}',
      wrap_background: '{{SELECTOR}} .pb-person-addon-content',
      wrap_border: '{{SELECTOR}} .pb-person-addon-content{{data.wrap_border}}',
      wrap_radius:
        '{{SELECTOR}} .pb-person-addon-content { border-radius: {{data.wrap_radius}}; }',
      wrap_boxshadow:
        '{{SELECTOR}} .pb-person-addon-content.slick-active{{data.wrap_boxshadow}}',
      wrap_padding:
        '{{SELECTOR}} .pb-person-addon-content { padding: {{data.wrap_padding}}; }',
      wrap_margin:
        '{{SELECTOR}} .pb-person-content-carousel .slick-slide { margin-right: {{data.wrap_margin}}; }{{SELECTOR}} .pb-person-content-carousel .slick-list { margin-right: -{{data.wrap_margin}}; }',
      inner_background:
        '{{SELECTOR}} .pb-person-information-wrap { background: {{data.inner_background}}; }',
      inner_boxshadow:
        '{{SELECTOR}} .pb-person-information-wrap{{data.inner_boxshadow}}',
      inner_padding:
        '{{SELECTOR}} .person-layout-layoutone, {{SELECTOR}} .pb-person-information-wrap { padding: {{data.inner_padding}}; }',
      addon_z_index:
        '.pb-builder-container {{SELECTOR}}{ z-index: {{data.addon_z_index}}; }',
      addon_padding: '{{SELECTOR}}{ padding: {{data.addon_padding}}; }',
      addon_margin: '{{SELECTOR}}{ margin: {{data.addon_margin}}; }',
      addon_background: '{{SELECTOR}}',
      addon_color_opacity: '{{SELECTOR}}:after{{data.addon_color_opacity}}',
      addon_opacity:
        '{{SELECTOR}}:after{ content: " "; z-index: 0; display: block; position: absolute; height: 100%; top: 0; left: 0; right: 0; opacity:{{data.addon_opacity}}; }',
      addon_color_blend:
        '{{SELECTOR}}:after{ mix-blend-mode:{{data.addon_color_blend}}; }',
      addon_border: '{{SELECTOR}}{{data.addon_border}}',
      addon_border_hover: '{{SELECTOR}}:hover{{data.addon_border_hover}}',
      addon_border_radius:
        '{{SELECTOR}}, {{SELECTOR}}:after{ border-radius: {{data.addon_border_radius}}; overflow:hidden; }',
      addon_border_radius_hover:
        '{{SELECTOR}}:hover, {{SELECTOR}}:hover:after{ border-radius: {{data.addon_border_radius_hover}};overflow:hidden; }',
      addon_boxshadow: '{{SELECTOR}}{{data.addon_boxshadow}}',
      addon_boxshadow_hover: '{{SELECTOR}}:hover{{data.addon_boxshadow_hover}}',
      addon_wrap_opacity:
        '{{SELECTOR}} .pb-addon{ opacity:{{data.addon_wrap_opacity}}; }',
      addon_wrap_opacity_hover:
        '{{SELECTOR}} .pb-addon:hover{ opacity:{{data.addon_wrap_opacity_hover}}; }',
      addon_display: '{{SELECTOR}}{ display: {{data.addon_display}} ; }',
    },
    visibility: true,
    icon: 'pb-font-full-slider',
    attr: {
      general: {
        person_layout: {
          type: 'radioimage',
          title: 'Layout',
          values: {
            layoutone: '/img/person/person-img1.png',
            layouttwo: '/img/person/person-img2.png',
            layoutthree: '/img/person/person-img3.png',
            layoutfour: '/img/person/person-img4.png',
          },
          std: 'layoutone',
        },
        person_list: {
          title: 'Person List',
          type: 'repeatable',
          label: 'name',
          std: [
            {
              image: {
                url: '/img/placeholder/pb-large.jpg',
              },
              name: 'Michel Clark',
              name_link: {
                link: '',
                window: true,
                nofolow: false,
              },
              designation: 'Developer',
              introtext:
                'Reprehenderit enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor',
              show_social: '1',
              icon_list1: 'fab fa-facebook-f',
              socialurl1: '#',
              icon_list2: 'fab fa-twitter',
              socialurl2: '#',
              icon_list3: 'fab fa-flickr',
              socialurl3: '#',
            },
            {
              image: {
                url: '/img/placeholder/pb-medium.jpg',
              },
              name: 'Jhon Doe',
              name_link: {
                link: '',
                window: true,
                nofolow: false,
              },
              designation: 'Designer',
              introtext:
                'Reprehenderit enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor',
              show_social: '1',
              icon_list1: 'fab fa-facebook-f',
              socialurl1: '#',
              icon_list2: 'fab fa-twitter',
              socialurl2: '#',
              icon_list3: 'fab fa-flickr',
              socialurl3: '#',
            },
            {
              image: {
                url: '/img/placeholder/pb-medium.jpg',
              },
              name: 'Stephen Fleming',
              name_link: {
                link: '',
                window: true,
                nofolow: false,
              },
              designation: 'Founder',
              introtext:
                'Reprehenderit enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor',
              show_social: '1',
              icon_list1: 'fab fa-facebook-f',
              socialurl1: '#',
              icon_list2: 'fab fa-twitter',
              socialurl2: '#',
              icon_list3: 'fab fa-flickr',
              socialurl3: '#',
            },
          ],
          attr: {
            image: {
              type: 'media',
              title: 'Image',
              std: {
                url: '/img/placeholder/pb-medium.jpg',
              },
            },
            name: {
              type: 'text',
              title: 'Name',
              std: 'Jhon Doe',
            },
            name_link: {
              type: 'link',
              title: 'Profile URL',
              std: {
                link: '',
                window: false,
                nofolow: false,
              },
            },
            email: {
              type: 'text',
              title: 'email',
              placeholder: 'example@example.com',
            },
            designation: {
              type: 'text',
              title: 'designation',
              std: 'Designer',
            },
            introtext: {
              type: 'textarea',
              title: 'Message text',
              std: 'She was bouncing away, when a cry from the two women, who had turned towards the bed, caused her to look round.',
            },
            show_social: {
              type: 'switch',
              title: 'Show Social Media URL',
              std: '1',
            },
            icon_list1: {
              type: 'iconsocial',
              title: 'Icon 1',
              std: 'fab fa-facebook-f',
              depends: [['show_social', '!=', '']],
            },
            socialurl1: {
              type: 'text',
              title: 'social URL 1',
              std: '#',
              depends: [['show_social', '!=', '']],
            },
            icon_list2: {
              type: 'iconsocial',
              title: 'Icon 2',
              std: 'fab fa-facebook-f',
              depends: [['show_social', '!=', '']],
            },
            socialurl2: {
              type: 'text',
              title: 'social URL 2',
              std: '#',
              depends: [['show_social', '!=', '']],
            },
            icon_list3: {
              type: 'iconsocial',
              title: 'Icon 3',
              std: 'fab fa-facebook-f',
              depends: [['show_social', '!=', '']],
            },
            socialurl3: {
              type: 'text',
              title: 'social URL 3',
              std: '#',
              depends: [['show_social', '!=', '']],
            },
            icon_list4: {
              type: 'iconsocial',
              title: 'Icon 4',
              std: 'fab fa-facebook-f',
              depends: [['show_social', '!=', '']],
            },
            socialurl4: {
              type: 'text',
              title: 'social URL 4',
              std: '#',
              depends: [['show_social', '!=', '']],
            },
            icon_list5: {
              type: 'iconsocial',
              title: 'Icon 4',
              std: 'fab fa-facebook-f',
              depends: [['show_social', '!=', '']],
            },
            socialurl5: {
              type: 'text',
              title: 'social URL 5',
              std: '#',
              depends: [['show_social', '!=', '']],
            },
            icon_list6: {
              type: 'iconsocial',
              title: 'Icon 6',
              std: 'fab fa-facebook-f',
              depends: [['show_social', '!=', '']],
            },
            socialurl6: {
              type: 'text',
              title: 'social URL 6',
              std: '#',
              depends: [['show_social', '!=', '']],
            },
          },
        },
        autoplay_option: {
          type: 'switch',
          title: 'Autoplay Option',
          std: '1',
          section: 'Slide Settings',
        },
        speed_option: {
          type: 'number',
          title: 'Animated Speed',
          std: '600',
          section: 'Slide Settings',
          depends: [['autoplay_option', '=', '1']],
        },
        control_dots: {
          type: 'switch',
          title: 'Control Dots',
          std: '0',
          section: 'Slide Settings',
        },
        control_nav: {
          type: 'switch',
          title: 'Control Nav',
          std: '1',
          section: 'Slide Settings',
        },
        control_nav_style: {
          type: 'select',
          title: 'Style',
          values: {
            nav_style1: 'Nav Style 1',
            nav_style2: 'Nav Style 2',
            nav_style3: 'Nav Style 3',
            nav_style4: 'Nav Style 4',
          },
          std: 'nav_style1',
          depends: [['control_nav', '!=', '']],
          section: 'Slide Settings',
        },
        column: {
          type: 'select',
          title: 'Column',
          values: {
            '1': 'Column 1',
            '2': 'Column 2',
            '3': 'Column 3',
            '4': 'Column 4',
            '5': 'Column 5',
            '6': 'Column 6',
          },
          std: '1',
          section: 'Slide Settings',
        },
        person_align: {
          type: 'alignment',
          title: 'Alignment',
          responsive: true,
          section: 'Slide Settings',
          selector:
            '{{SELECTOR}} .pb-person-carousel-addon-content{ text-align: {{data.person_align}}; }',
        },
        img_width: {
          type: 'slider',
          title: 'Width',
          unit: ['px', '%', 'em'],
          range: {
            em: {
              min: 0,
              max: 55,
              step: 0.1,
            },
            px: {
              min: 0,
              max: 550,
              step: 1,
            },
            '%': {
              min: 0,
              max: 100,
              step: 1,
            },
          },
          std: {
            md: '',
            sm: '',
            xs: '',
          },
          responsive: true,
          tab: 'style',
          section: 'Image',
          selector:
            '{{SELECTOR}} .pb-person-addon-img { width: {{data.img_width}}; }',
        },
        img_height: {
          type: 'slider',
          title: 'Height',
          unit: ['px', '%', 'em'],
          range: {
            em: {
              min: 0,
              max: 20,
              step: 0.1,
            },
            px: {
              min: 0,
              max: 250,
              step: 1,
            },
            '%': {
              min: 0,
              max: 100,
              step: 1,
            },
          },
          std: {
            md: '',
            sm: '',
            xs: '',
          },
          responsive: true,
          tab: 'style',
          section: 'Image',
          selector:
            '{{SELECTOR}} .pb-person-addon-img, {{SELECTOR}} .person-layout-layoutone .pb-person-addon-img { height: {{data.img_height}}; }',
        },
        img_radius: {
          type: 'dimension',
          title: 'Border Radius',
          unit: ['px', '%', 'em'],
          responsive: true,
          tab: 'style',
          section: 'Image',
          selector:
            '{{SELECTOR}} .pb-person-addon-img { border-radius: {{data.img_radius}}; }',
        },
        image_border: {
          type: 'border',
          title: 'Border',
          std: {
            borderWidth: {
              top: '0px',
              right: '0px',
              bottom: '0px',
              left: '0px',
            },
            borderStyle: 'solid',
            borderColor: '#cccccc',
          },
          tab: 'style',
          section: 'Image',
          selector: '{{SELECTOR}} .pb-person-addon-img',
        },
        name_color: {
          type: 'color2',
          title: 'Color',
          tab: 'style',
          clip: true,
          std: {
            colorType: 'color',
            clip: true,
            colorColor: '#666666',
          },
          section: 'Name',
          selector:
            '{{SELECTOR}} .pb-person-name, {{SELECTOR}} .pb-person-name a',
        },
        name_fontstyle: {
          type: 'typography',
          title: 'Typography',
          std: {
            fontFamily: '',
            fontSize: {
              md: '18px',
              sm: '',
              xs: '',
            },
            lineHeight: {
              md: '',
              sm: '',
              xs: '',
            },
            fontWeight: '700',
            textTransform: '',
            fontStyle: '',
            letterSpacing: {
              md: '',
              sm: '',
              xs: '',
            },
          },
          selector: '{{SELECTOR}} .pb-person-name',
          section: 'Name',
          tab: 'style',
        },
        name_padding: {
          type: 'dimension',
          title: 'Padding',
          unit: ['px', 'em', '%'],
          responsive: true,
          tab: 'style',
          selector:
            '{{SELECTOR}} .pb-person-name { padding: {{data.name_padding}}; }',
          section: 'Name',
        },
        name_margin: {
          type: 'dimension',
          title: 'Margin',
          unit: ['px', 'em', '%'],
          responsive: true,
          tab: 'style',
          selector:
            '{{SELECTOR}} .pb-person-name { margin: {{data.name_margin}}; }',
          section: 'Name',
        },
        desgn_color: {
          type: 'color',
          title: 'Color',
          tab: 'style',
          section: 'Designation',
          selector:
            '{{SELECTOR}} .pb-person-designation { color: {{data.desgn_color}}; }',
        },
        desgn_fontstyle: {
          type: 'typography',
          title: 'Typography',
          std: {
            fontFamily: '',
            fontSize: {
              md: '12px',
              sm: '',
              xs: '',
            },
            lineHeight: {
              md: '',
              sm: '',
              xs: '',
            },
            fontWeight: '700',
            textTransform: '',
            fontStyle: '',
            letterSpacing: {
              md: '',
              sm: '',
              xs: '',
            },
          },
          selector: '{{SELECTOR}} .pb-person-designation',
          section: 'Designation',
          tab: 'style',
        },
        email_color: {
          type: 'color',
          title: 'color',
          tab: 'style',
          section: 'Email',
          selector:
            '{{SELECTOR}} .pb-person-email { color: {{data.email_color}}; }',
        },
        email_fontstyle: {
          type: 'typography',
          title: 'Typography',
          std: {
            fontFamily: '',
            fontSize: {
              md: '18px',
              sm: '',
              xs: '',
            },
            lineHeight: {
              md: '',
              sm: '',
              xs: '',
            },
            fontWeight: '700',
            textTransform: '',
            fontStyle: '',
            letterSpacing: {
              md: '',
              sm: '',
              xs: '',
            },
          },
          selector: '{{SELECTOR}} .pb-person-email',
          section: 'Email',
          tab: 'style',
        },
        email_margin: {
          type: 'dimension',
          title: 'Margin',
          unit: ['px', 'em', '%'],
          responsive: true,
          tab: 'style',
          selector:
            '{{SELECTOR}} .pb-person-email { margin: {{data.email_margin}}; }',
          section: 'Email',
        },
        intro_color: {
          type: 'color',
          title: 'color',
          tab: 'style',
          section: 'Message text',
          selector:
            '{{SELECTOR}} .pb-person-introtext { color: {{data.intro_color}}; }',
        },
        intro_fontstyle: {
          type: 'typography',
          title: 'Typography',
          std: {
            fontFamily: '',
            fontSize: {
              md: '18px',
              sm: '',
              xs: '',
            },
            lineHeight: {
              md: '',
              sm: '',
              xs: '',
            },
            fontWeight: '700',
            textTransform: '',
            fontStyle: '',
            letterSpacing: {
              md: '',
              sm: '',
              xs: '',
            },
          },
          selector: '{{SELECTOR}} .pb-person-introtext',
          section: 'Message text',
          tab: 'style',
        },
        message_margin: {
          type: 'dimension',
          title: 'Margin',
          unit: ['px', 'em', '%'],
          responsive: true,
          tab: 'style',
          selector:
            '{{SELECTOR}} .pb-person-introtext { margin: {{data.message_margin}}; }',
          section: 'Message text',
        },
        icon_size: {
          type: 'slider',
          title: 'Size',
          unit: ['px', '%', 'em'],
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
            '%': {
              min: 0,
              max: 100,
              step: 1,
            },
          },
          std: {
            md: '18px',
            sm: '',
            xs: '',
          },
          responsive: true,
          tab: 'style',
          section: 'Social Share',
          selector:
            '{{SELECTOR}} .pb-person-social li a { font-size: {{data.icon_size}}; }',
        },
        icon_width: {
          type: 'slider',
          title: 'Width',
          unit: ['px', '%', 'em'],
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
            '%': {
              min: 0,
              max: 100,
              step: 1,
            },
          },
          std: {
            md: '',
            sm: '',
            xs: '',
          },
          responsive: true,
          tab: 'style',
          section: 'Social Share',
          selector:
            '{{SELECTOR}} .pb-person-social li a { width: {{data.icon_width}}; }',
        },
        icon_height: {
          type: 'slider',
          title: 'Height',
          unit: ['px', '%', 'em'],
          range: {
            em: {
              min: 0,
              max: 20,
              step: 0.1,
            },
            px: {
              min: 0,
              max: 200,
              step: 1,
            },
            '%': {
              min: 0,
              max: 100,
              step: 1,
            },
          },
          std: {
            md: '',
            sm: '',
            xs: '',
          },
          responsive: true,
          tab: 'style',
          section: 'Social Share',
          selector: [
            '{{SELECTOR}} .pb-person-social li a { height: {{data.icon_height}}; }',
            '{{SELECTOR}} .pb-person-social li a { line-height: {{data.icon_height}}; }',
          ],
        },
        icon_line_height: {
          type: 'slider',
          title: 'Line Height',
          unit: ['px', '%', 'em'],
          range: {
            em: {
              min: 0,
              max: 20,
              step: 0.1,
            },
            px: {
              min: 0,
              max: 200,
              step: 1,
            },
            '%': {
              min: 0,
              max: 100,
              step: 1,
            },
          },
          std: {
            md: '',
            sm: '',
            xs: '',
          },
          responsive: true,
          tab: 'style',
          section: 'Social Share',
          selector:
            '{{SELECTOR}} .pb-person-social li a { line-height: {{data.icon_line_height}}; }',
        },
        icon_color: {
          type: 'color',
          title: 'Color',
          tab: 'style',
          section: 'Social Share',
          selector:
            '{{SELECTOR}} .pb-person-social li a { color: {{data.icon_color}}; }',
        },
        icon_hcolor: {
          type: 'color',
          title: 'Hover color',
          tab: 'style',
          section: 'Social Share',
          selector:
            '{{SELECTOR}}  .pb-person-social li a i:hover { color: {{data.icon_hcolor}}; }',
        },
        icon_bg: {
          type: 'color',
          title: 'background',
          tab: 'style',
          section: 'Social Share',
          selector:
            '{{SELECTOR}} .pb-person-social li a { background: {{data.icon_bg}}; }',
        },
        icon_hover_bg: {
          type: 'color',
          title: 'Hover background',
          tab: 'style',
          section: 'Social Share',
          selector:
            '{{SELECTOR}} .pb-person-social li a:hover{ background: {{data.icon_hover_bg}}; }',
        },
        icon_radius: {
          type: 'dimension',
          title: 'Border radius',
          unit: ['px', '%', 'em'],
          std: {
            md: {
              top: '50px',
              right: '50px',
              bottom: '50px',
              left: '50px',
            },
            sm: {
              top: '',
              right: '',
              bottom: '',
              left: '',
            },
            xs: {
              top: '',
              right: '',
              bottom: '',
              left: '',
            },
          },
          responsive: true,
          tab: 'style',
          section: 'Social Share',
          selector:
            '{{SELECTOR}} .pb-person-social li a { border-radius: {{data.icon_radius}}; }',
        },
        icon_border: {
          type: 'border',
          title: 'Icon Border',
          std: {
            borderWidth: {
              top: '2px',
              right: '2px',
              bottom: '2px',
              left: '2px',
            },
            borderStyle: 'solid',
            borderColor: '#cccccc',
          },
          tab: 'style',
          section: 'Social Share',
          selector: '{{SELECTOR}} .pb-person-social li a',
        },
        border_hcolor: {
          type: 'border',
          title: 'Border hover color',
          std: {
            borderWidth: {
              top: '2px',
              right: '2px',
              bottom: '2px',
              left: '2px',
            },
            borderStyle: 'solid',
            borderColor: '#cccccc',
          },
          tab: 'style',
          section: 'Social Share',
          selector: '{{SELECTOR}} .pb-person-social li a:hover',
        },
        share_margin: {
          type: 'dimension',
          title: 'Margin',
          unit: ['px', 'em', '%'],
          responsive: true,
          tab: 'style',
          selector:
            '{{SELECTOR}} .pb-person-social { margin: {{data.share_margin}}; }',
          section: 'Social Share',
        },
        dot_position: {
          type: 'slider',
          title: 'Position',
          unit: ['%', 'px', 'em'],
          range: {
            em: {
              min: -20,
              max: 40,
              step: 0.1,
            },
            px: {
              min: -200,
              max: 550,
              step: 1,
            },
            '%': {
              min: 0,
              max: 100,
              step: 1,
            },
          },
          std: {
            md: '0px',
            sm: '',
            xs: '',
          },
          responsive: true,
          tab: 'style',
          section: 'Dots Style',
          depends: [['control_dots', '!=', '']],
          selector:
            '{{SELECTOR}} .pb-person-content-carousel .slick-dots { bottom: {{data.dot_position}}; }',
        },
        dot_bg_color: {
          type: 'color',
          title: 'background',
          tab: 'style',
          section: 'Dots Style',
          selector:
            '{{SELECTOR}} .pb-person-content-carousel .slick-dots li button { background: {{data.dot_bg_color}}; }',
        },
        dot_bg_hcolor: {
          type: 'color',
          title: 'Hover/active background',
          tab: 'style',
          section: 'Dots Style',
          selector:
            '{{SELECTOR}} .pb-person-content-carousel .slick-dots li.slick-active button, {{SELECTOR}} .pb-person-content-carousel .slick-dots li button:hover { background: {{data.dot_bg_hcolor}}; }',
        },
        dot_width: {
          type: 'slider',
          title: 'Width',
          unit: ['px', '%', 'em'],
          std: {
            md: '16px',
            sm: '',
            xs: '',
          },
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
            '%': {
              min: 0,
              max: 100,
              step: 1,
            },
          },
          responsive: true,
          tab: 'style',
          section: 'Dots Style',
          selector:
            '{{SELECTOR}} .pb-person-content-carousel .slick-dots li button, {{SELECTOR}} .pb-person-content-carousel .slick-dots li { width: {{data.dot_width}}; }',
        },
        dot_height: {
          type: 'slider',
          title: 'Height',
          unit: ['px', '%', 'em'],
          range: {
            em: {
              min: 0,
              max: 20,
              step: 0.1,
            },
            px: {
              min: 0,
              max: 250,
              step: 1,
            },
            '%': {
              min: 0,
              max: 100,
              step: 1,
            },
          },
          std: {
            md: '16px',
            sm: '',
            xs: '',
          },
          responsive: true,
          tab: 'style',
          section: 'Dots Style',
          selector:
            '{{SELECTOR}} .pb-person-content-carousel .slick-dots li button, {{SELECTOR}} .pb-person-content-carousel .slick-dots li { height: {{data.dot_height}}; }',
        },
        dot_radius: {
          type: 'dimension',
          title: 'Border Radius',
          unit: ['px', '%', 'em'],
          std: {
            md: {
              top: '100px',
              right: '100px',
              bottom: '100px',
              left: '100px',
            },
            sm: {
              top: '',
              right: '',
              bottom: '',
              left: '',
            },
            xs: {
              top: '',
              right: '',
              bottom: '',
              left: '',
            },
          },
          responsive: true,
          tab: 'style',
          section: 'Dots Style',
          selector:
            '{{SELECTOR}} .pb-person-content-carousel .slick-dots li button { border-radius: {{data.dot_radius}}; }',
        },
        nav_position: {
          type: 'slider',
          title: 'Position',
          unit: ['%', 'px', 'em'],
          range: {
            em: {
              min: 0,
              max: 55,
              step: 0.1,
            },
            px: {
              min: 0,
              max: 550,
              step: 1,
            },
            '%': {
              min: 0,
              max: 100,
              step: 1,
            },
          },
          std: {
            md: '35%',
            sm: '',
            xs: '',
          },
          responsive: true,
          tab: 'style',
          section: 'Nav Style',
          depends: [['control_nav', '!=', '']],
          selector:
            '{{SELECTOR}} .pb-person-content-carousel .pb-carousel-prev,{{SELECTOR}} .pb-person-content-carousel .pb-carousel-next { top: {{data.nav_position}}; }',
        },
        nav_left_position: {
          type: 'slider',
          title: 'Prev Position',
          unit: ['px', 'em', '%'],
          std: {
            md: '',
            sm: '',
            xs: '',
          },
          responsive: true,
          tab: 'style',
          section: 'Nav Style',
          depends: [['control_nav_style', '=', 'nav_style2']],
          selector:
            '{{SELECTOR}} .pb-person-content-carousel.nav_style2 .pb-carousel-next { right: {{data.nav_left_position}}; }',
        },
        nav_right_position: {
          type: 'slider',
          title: 'Next Position',
          unit: ['px', 'em', '%'],
          range: {
            em: {
              min: -50,
              max: 80,
              step: 0.1,
            },
            px: {
              min: -100,
              max: 1000,
              step: 1,
            },
            '%': {
              min: -100,
              max: 100,
              step: 1,
            },
          },
          std: {
            md: '',
            sm: '',
            xs: '',
          },
          responsive: true,
          tab: 'style',
          section: 'Nav Style',
          depends: [['control_nav_style', '=', 'nav_style3']],
          selector:
            '{{SELECTOR}} .pb-person-content-carousel.nav_style3 .pb-carousel-prev { left: {{data.nav_right_position}}; }',
        },
        nav_font_size: {
          type: 'slider',
          title: 'Nav Font Size',
          responsive: true,
          std: {
            md: '',
            sm: '',
            xs: '',
          },
          tab: 'style',
          unit: ['px', 'em', '%'],
          range: {
            em: {
              min: 0,
              max: 5,
              step: 0.1,
            },
            px: {
              min: 0,
              max: 150,
              step: 1,
            },
            '%': {
              min: 0,
              max: 100,
              step: 1,
            },
          },
          section: 'Nav Style',
          selector:
            '{{SELECTOR}} .pb-person-content-carousel .pb-carousel-next, {{SELECTOR}} .pb-person-content-carousel .pb-carousel-prev { font-size: {{data.nav_font_size}}; }',
        },
        nav_color: {
          type: 'color',
          title: 'color',
          tab: 'style',
          section: 'Nav Style',
          depends: [['control_nav', '!=', '']],
          selector:
            '{{SELECTOR}} .pb-person-content-carousel .pb-carousel-prev, {{SELECTOR}} .pb-person-content-carousel .pb-carousel-next { color: {{data.nav_color}}; }',
        },
        nav_bg_color: {
          type: 'color',
          title: 'Background color',
          tab: 'style',
          section: 'Nav Style',
          depends: [['control_nav', '!=', '']],
          selector:
            '{{SELECTOR}} .pb-person-content-carousel .pb-carousel-prev, {{SELECTOR}} .pb-person-content-carousel .pb-carousel-next { background: {{data.nav_bg_color}}; }',
        },
        nav_hcolor: {
          type: 'color',
          title: 'Hover color',
          tab: 'style',
          section: 'Nav Style',
          depends: [['control_nav', '!=', '']],
          selector:
            '{{SELECTOR}} .pb-person-content-carousel .pb-carousel-prev:hover, {{SELECTOR}} .pb-person-content-carousel .pb-carousel-next:hover { color: {{data.nav_hcolor}}; }',
        },
        nav_bg_hcolor: {
          type: 'color',
          title: 'Background hover color',
          tab: 'style',
          section: 'Nav Style',
          depends: [['control_nav', '!=', '']],
          selector:
            '{{SELECTOR}} .pb-person-content-carousel .pb-carousel-prev:hover, {{SELECTOR}} .pb-person-content-carousel .pb-carousel-next:hover { background: {{data.nav_bg_hcolor}}; }',
        },
        nav_width: {
          type: 'slider',
          title: 'Width',
          unit: ['px', '%', 'em'],
          range: {
            em: {
              min: 0,
              max: 25,
              step: 0.1,
            },
            px: {
              min: 0,
              max: 250,
              step: 1,
            },
            '%': {
              min: 0,
              max: 100,
              step: 1,
            },
          },
          std: {
            md: '30px',
            sm: '',
            xs: '',
          },
          responsive: true,
          tab: 'style',
          section: 'Nav Style',
          depends: [['control_nav', '!=', '']],
          selector:
            '{{SELECTOR}} .pb-person-content-carousel .pb-carousel-prev, {{SELECTOR}} .pb-person-content-carousel .pb-carousel-next { width: {{data.nav_width}}; }',
        },
        nav_height: {
          type: 'slider',
          title: 'Height',
          unit: ['px', '%', 'em'],
          range: {
            em: {
              min: 0,
              max: 25,
              step: 0.1,
            },
            px: {
              min: 0,
              max: 250,
              step: 1,
            },
            '%': {
              min: 0,
              max: 100,
              step: 1,
            },
          },
          std: {
            md: '30px',
            sm: '',
            xs: '',
          },
          responsive: true,
          tab: 'style',
          section: 'Nav Style',
          depends: [['control_nav', '!=', '']],
          selector:
            '{{SELECTOR}} .pb-person-content-carousel .pb-carousel-prev, {{SELECTOR}} .pb-person-content-carousel .pb-carousel-next { height: {{data.nav_height}}; }',
        },
        nav_line_height: {
          type: 'slider',
          title: 'Line Height',
          unit: ['px', '%', 'em'],
          range: {
            em: {
              min: 0,
              max: 25,
              step: 0.1,
            },
            px: {
              min: 0,
              max: 250,
              step: 1,
            },
            '%': {
              min: 0,
              max: 100,
              step: 1,
            },
          },
          std: {
            md: '30px',
            sm: '',
            xs: '',
          },
          responsive: true,
          tab: 'style',
          section: 'Nav Style',
          depends: [['control_nav', '!=', '']],
          selector:
            '{{SELECTOR}} .pb-person-content-carousel .pb-carousel-prev, {{SELECTOR}} .pb-person-content-carousel .pb-carousel-next { line-height: {{data.nav_line_height}}; }',
        },
        nav_radius: {
          type: 'dimension',
          title: 'Border Radius',
          unit: ['px', '%', 'em'],
          std: {
            md: {
              top: '100px',
              right: '100px',
              bottom: '100px',
              left: '100px',
            },
            sm: {
              top: '',
              right: '',
              bottom: '',
              left: '',
            },
            xs: {
              top: '',
              right: '',
              bottom: '',
              left: '',
            },
          },
          responsive: true,
          tab: 'style',
          section: 'Nav Style',
          depends: [['control_nav', '!=', '']],
          selector:
            '{{SELECTOR}} .pb-person-content-carousel .pb-carousel-prev, {{SELECTOR}} .pb-person-content-carousel .pb-carousel-next { border-radius: {{data.nav_radius}}; }',
        },
        nav_border: {
          type: 'border',
          title: 'Nav Border',
          std: {
            borderWidth: {
              top: '0px',
              right: '0px',
              bottom: '0px',
              left: '0px',
            },
            borderStyle: 'solid',
            borderColor: '#cccccc',
          },
          tab: 'style',
          section: 'Nav Style',
          depends: [['control_nav', '!=', '']],
          selector:
            '{{SELECTOR}} .pb-person-content-carousel .pb-carousel-prev,{{SELECTOR}} .pb-person-content-carousel .pb-carousel-next',
        },
        nav_border_hcolor: {
          type: 'border',
          title: 'Border hover color',
          std: {
            borderWidth: {
              top: '0px',
              right: '0px',
              bottom: '0px',
              left: '0px',
            },
            borderStyle: 'solid',
            borderColor: '#cccccc',
          },
          tab: 'style',
          section: 'Nav Style',
          depends: [['control_nav', '!=', '']],
          selector:
            '{{SELECTOR}} .pb-person-content-carousel .pb-carousel-prev:hover, {{SELECTOR}} .pb-person-content-carousel .pb-carousel-next:hover',
        },
        wrap_background: {
          type: 'background',
          title: '',
          selector: '{{SELECTOR}} .pb-person-addon-content',
          tab: 'style',
          section: 'Person Wrapper',
        },
        wrap_border: {
          type: 'border',
          title: 'Border',
          std: {
            borderWidth: {
              top: '0px',
              right: '0px',
              bottom: '0px',
              left: '0px',
            },
            borderStyle: 'solid',
            borderColor: '#cccccc',
          },
          tab: 'style',
          section: 'Person Wrapper',
          selector: '{{SELECTOR}} .pb-person-addon-content',
        },
        wrap_radius: {
          type: 'dimension',
          title: 'Border radius',
          unit: ['px', '%', 'em'],
          responsive: true,
          tab: 'style',
          section: 'Person Wrapper',
          selector:
            '{{SELECTOR}} .pb-person-addon-content { border-radius: {{data.wrap_radius}}; }',
        },
        wrap_boxshadow: {
          type: 'boxshadow',
          title: 'Box shadow',
          std: {
            shadowValue: {
              top: '0px',
              right: '0px',
              bottom: '5px',
              left: '0px',
            },
            shadowColor: 'rgba(0,0,0,.3)',
          },
          tab: 'style',
          section: 'Person Wrapper',
          selector: '{{SELECTOR}} .pb-person-addon-content.slick-active',
        },
        wrap_padding: {
          type: 'dimension',
          title: 'Padding',
          unit: ['px', 'em', '%'],
          responsive: true,
          tab: 'style',
          selector:
            '{{SELECTOR}} .pb-person-addon-content { padding: {{data.wrap_padding}}; }',
          section: 'Person Wrapper',
        },
        wrap_margin: {
          type: 'slider',
          title: 'Margin Right',
          unit: ['px', '%', 'em'],
          range: {
            em: {
              min: 0,
              max: 55,
              step: 0.1,
            },
            px: {
              min: 0,
              max: 550,
              step: 1,
            },
            '%': {
              min: 0,
              max: 100,
              step: 1,
            },
          },
          std: {
            md: '20px',
            sm: '',
            xs: '',
          },
          responsive: true,
          tab: 'style',
          section: 'Person Wrapper',
          selector: [
            '{{SELECTOR}} .pb-person-content-carousel .slick-slide { margin-right: {{data.wrap_margin}}; }',
            '{{SELECTOR}} .pb-person-content-carousel .slick-list { margin-right: -{{data.wrap_margin}}; }',
          ],
        },
        inner_background: {
          type: 'color',
          title: 'Inner content Background',
          selector:
            '{{SELECTOR}} .pb-person-information-wrap { background: {{data.inner_background}}; }',
          tab: 'style',
          section: 'Inner content Wrapper',
          depends: [['person_layout', '=', 'layouttwo']],
        },
        inner_boxshadow: {
          type: 'boxshadow',
          title: 'Inner content box shadow',
          std: {
            shadowValue: {
              top: '0px',
              right: '0px',
              bottom: '5px',
              left: '0px',
            },
            shadowColor: 'rgba(0,0,0,.3)',
          },
          tab: 'style',
          selector: '{{SELECTOR}} .pb-person-information-wrap',
          section: 'Inner content Wrapper',
          depends: [['person_layout', '=', 'layouttwo']],
        },
        inner_padding: {
          type: 'dimension',
          title: 'Inner Padding',
          unit: ['px', 'em', '%'],
          responsive: true,
          tab: 'style',
          selector:
            '{{SELECTOR}} .person-layout-layoutone, {{SELECTOR}} .pb-person-information-wrap { padding: {{data.inner_padding}}; }',
          section: 'Inner content Wrapper',
        },
      },
    },
    defaultAddon: true,
    group: 'basic',
    js_template: true,
  },
  pb_pie_progress: {
    type: 'content',
    addon_name: 'pb_pie_progress',
    title: 'Pie Progress',
    name: 'pb_pie_progress',
    category: '',
    Editor: PieProgress,
    Preview: PieProgress,
    styleJSON: {
      progress_size:
        '{{SELECTOR}} .pb-pie-chart { height: {{data.progress_size}}px; width: {{data.progress_size}}px; }',
      align:
        '{{SELECTOR}} .pb-pie-progress-addon-content { text-align: {{data.align}}; }',
      title_color:
        '{{SELECTOR}} .pb-chart-title, {{SELECTOR}} .pb-pie-chart .pb-chart-percent{{data.title_color}}',
      title_style:
        '{{SELECTOR}} .pb-chart-title, {{SELECTOR}} .pb-pie-chart .pb-chart-percent{{data.title_style}}',
      icon_size:
        '{{SELECTOR}} .pb-chart-icon i { font-size: {{data.icon_size}}; }',
      icon_color:
        '{{SELECTOR}} .pb-chart-icon span i{ color: {{data.icon_color}}; }',
      icon_bg:
        '{{SELECTOR}} .pb-chart-icon span i{ background: {{data.icon_bg}}; }',
      icon_width:
        '{{SELECTOR}} .pb-chart-icon span i{ width: {{data.icon_width}}; }',
      icon_height:
        '{{SELECTOR}} .pb-chart-icon span i{ height: {{data.icon_height}}; }{{SELECTOR}} .pb-chart-icon i { line-height: {{data.icon_height}}; }',
      icon_radius:
        '{{SELECTOR}}  .pb-chart-icon span i{ border-radius: {{data.icon_radius}}; }',
      addon_z_index:
        '.pb-builder-container {{SELECTOR}}{ z-index: {{data.addon_z_index}}; }',
      addon_padding: '{{SELECTOR}}{ padding: {{data.addon_padding}}; }',
      addon_margin: '{{SELECTOR}}{ margin: {{data.addon_margin}}; }',
      addon_background: '{{SELECTOR}}',
      addon_color_opacity: '{{SELECTOR}}:after{{data.addon_color_opacity}}',
      addon_opacity:
        '{{SELECTOR}}:after{ content: " "; z-index: 0; display: block; position: absolute; height: 100%; top: 0; left: 0; right: 0; opacity:{{data.addon_opacity}}; }',
      addon_color_blend:
        '{{SELECTOR}}:after{ mix-blend-mode:{{data.addon_color_blend}}; }',
      addon_border: '{{SELECTOR}}{{data.addon_border}}',
      addon_border_hover: '{{SELECTOR}}:hover{{data.addon_border_hover}}',
      addon_border_radius:
        '{{SELECTOR}}, {{SELECTOR}}:after{ border-radius: {{data.addon_border_radius}}; overflow:hidden; }',
      addon_border_radius_hover:
        '{{SELECTOR}}:hover, {{SELECTOR}}:hover:after{ border-radius: {{data.addon_border_radius_hover}};overflow:hidden; }',
      addon_boxshadow: '{{SELECTOR}}{{data.addon_boxshadow}}',
      addon_boxshadow_hover: '{{SELECTOR}}:hover{{data.addon_boxshadow_hover}}',
      addon_wrap_opacity:
        '{{SELECTOR}} .pb-addon{ opacity:{{data.addon_wrap_opacity}}; }',
      addon_wrap_opacity_hover:
        '{{SELECTOR}} .pb-addon:hover{ opacity:{{data.addon_wrap_opacity_hover}}; }',
      addon_display: '{{SELECTOR}}{ display: {{data.addon_display}} ; }',
    },
    visibility: true,
    icon: 'pb-font-pie-progress',
    attr: {
      general: {
        show_icon_title: {
          type: 'radioimage',
          title: 'Layout',
          values: [
            '/img/pie_progress/pie-img1.png',
            '/img/pie_progress/pie-img2.png',
            '/img/pie_progress/pie-img3.png',
          ],
          std: '0',
        },
        progress_percentage: {
          type: 'slider',
          title: 'Percentage',
          std: 75,
          responsive: false,
          range: {
            min: 0,
            max: 100,
            step: 1,
          },
        },
        progress_size: {
          type: 'slider',
          title: 'Bar size',
          std: 150,
          responsive: false,
          range: {
            em: {
              min: 0,
              max: 40,
              step: 0.1,
            },
            px: {
              min: 0,
              max: 400,
              step: 1,
            },
            '%': {
              min: 0,
              max: 100,
              step: 1,
            },
          },
          selector:
            '{{SELECTOR}} .pb-pie-chart { height: {{data.progress_size}}px; width: {{data.progress_size}}px; }',
        },
        progress_width: {
          type: 'slider',
          title: 'Border width',
          responsive: false,
          range: {
            min: 0,
            max: 20,
            step: 1,
          },
        },
        progress_title: {
          type: 'text',
          title: 'Title',
          std: 'Dokan Builder',
          depends: [['show_icon_title', '=', '1']],
        },
        icon_list: {
          type: 'icon',
          title: 'Icon list',
          std: 'fas fa-star',
          depends: [['show_icon_title', '=', '2']],
        },
        align: {
          type: 'alignment',
          title: 'Alignment',
          std: {
            md: 'center',
            sm: 'center',
            xs: 'center',
          },
          responsive: true,
          selector:
            '{{SELECTOR}} .pb-pie-progress-addon-content { text-align: {{data.align}}; }',
        },
        progress_bar: {
          type: 'color',
          title: 'Color',
          tab: 'style',
          std: '#F1F8FF',
        },
        progress_bar_active: {
          type: 'color',
          title: 'Active color',
          tab: 'style',
          std: '#22A1FB',
        },
        title_color: {
          type: 'color2',
          title: '',
          tab: 'style',
          clip: true,
          std: {
            clip: true,
            colorType: 'color',
            colorColor: '#333',
          },
          section: 'Title and Percentage',
          selector:
            '{{SELECTOR}} .pb-chart-title, {{SELECTOR}} .pb-pie-chart .pb-chart-percent',
        },
        title_style: {
          type: 'typography',
          title: 'Typography',
          std: {
            fontFamily: '',
            fontSize: {
              md: '16px',
              sm: '',
              xs: '',
            },
            lineHeight: {
              md: '',
              sm: '',
              xs: '',
            },
            fontWeight: '600',
            textTransform: '',
            fontStyle: '',
            letterSpacing: {
              md: '',
              sm: '',
              xs: '',
            },
          },
          section: 'Title and Percentage',
          selector:
            '{{SELECTOR}} .pb-chart-title, {{SELECTOR}} .pb-pie-chart .pb-chart-percent',
          tab: 'style',
        },
        icon_size: {
          type: 'slider',
          title: 'Size',
          unit: ['px', '%', 'em'],
          range: {
            em: {
              min: 0,
              max: 20,
              step: 0.1,
            },
            px: {
              min: 0,
              max: 250,
              step: 1,
            },
            '%': {
              min: 0,
              max: 100,
              step: 1,
            },
          },
          std: {
            md: '20px',
            sm: '',
            xs: '',
          },
          responsive: true,
          tab: 'style',
          section: 'Icon',
          selector:
            '{{SELECTOR}} .pb-chart-icon i { font-size: {{data.icon_size}}; }',
        },
        icon_color: {
          type: 'color',
          title: 'Color',
          tab: 'style',
          section: 'Icon',
          selector:
            '{{SELECTOR}} .pb-chart-icon span i{ color: {{data.icon_color}}; }',
        },
        icon_bg: {
          type: 'color',
          title: 'background',
          tab: 'style',
          section: 'Icon',
          selector:
            '{{SELECTOR}} .pb-chart-icon span i{ background: {{data.icon_bg}}; }',
        },
        icon_width: {
          type: 'slider',
          title: 'Width',
          unit: ['px', '%', 'em'],
          range: {
            em: {
              min: 0,
              max: 25,
              step: 0.1,
            },
            px: {
              min: 0,
              max: 200,
              step: 1,
            },
            '%': {
              min: 0,
              max: 100,
              step: 1,
            },
          },
          std: {
            md: '50px',
            sm: '',
            xs: '',
          },
          responsive: true,
          tab: 'style',
          section: 'Icon',
          selector:
            '{{SELECTOR}} .pb-chart-icon span i{ width: {{data.icon_width}}; }',
        },
        icon_height: {
          type: 'slider',
          title: 'Height',
          unit: ['px', '%', 'em'],
          range: {
            em: {
              min: 0,
              max: 25,
              step: 0.1,
            },
            px: {
              min: 0,
              max: 200,
              step: 1,
            },
            '%': {
              min: 0,
              max: 100,
              step: 1,
            },
          },
          std: {
            md: '50px',
            sm: '',
            xs: '',
          },
          responsive: true,
          tab: 'style',
          section: 'Icon',
          selector: [
            '{{SELECTOR}} .pb-chart-icon span i{ height: {{data.icon_height}}; }',
            '{{SELECTOR}} .pb-chart-icon i { line-height: {{data.icon_height}}; }',
          ],
        },
        icon_radius: {
          type: 'dimension',
          title: 'Border radius',
          unit: ['px', '%', 'em'],
          std: {
            md: {
              top: '100px',
              right: '100px',
              bottom: '100px',
              left: '100px',
            },
            sm: {
              top: '',
              right: '',
              bottom: '',
              left: '',
            },
            xs: {
              top: '',
              right: '',
              bottom: '',
              left: '',
            },
          },
          responsive: true,
          tab: 'style',
          section: 'Icon',
          selector:
            '{{SELECTOR}}  .pb-chart-icon span i{ border-radius: {{data.icon_radius}}; }',
        },
      },
    },
    defaultAddon: true,
    group: 'basic',
    js_template: true,
  },
  pb_posts_grid: {
    type: 'content',
    addon_name: 'pb_posts_grid',
    title: 'Posts Grid',
    name: 'pb_posts_grid',
    category: '',
    Editor: PostGrid,
    Preview: PostGrid,
    styleJSON: {
      post_title_color:
        '{{SELECTOR}} .pb-post-grid-title a { color: {{data.post_title_color}}; }',
      post_title_hcolor:
        '{{SELECTOR}} .pb-post-grid-title a:hover { color: {{data.post_title_hcolor}}; }',
      post_title_size:
        '{{SELECTOR}} .pb-post-grid-title{{data.post_title_size}}',
      title_item_margin:
        '{{SELECTOR}} .pb-post-grid-title { margin: {{data.title_item_margin}}; }',
      post_meta_item_color:
        '{{SELECTOR}} .pb-post-grid-meta,{{SELECTOR}} .pb-post-grid-meta a { color: {{data.post_meta_item_color}}; }',
      post_meta_item_hcolor:
        '{{SELECTOR}} .pb-post-grid-meta a:hover { color: {{data.post_meta_item_hcolor}}; }',
      post_meta_item: '{{SELECTOR}} .pb-post-grid-meta{{data.post_meta_item}}',
      post_meta_item_margin:
        '{{SELECTOR}} .pb-post-grid-meta { margin: {{data.post_meta_item_margin}}; }',
      post_meta_size:
        '{{SELECTOR}} .pb-postmeta-sept { font-size: {{data.post_meta_size}}; }',
      post_meta_height:
        '{{SELECTOR}} .pb-postmeta-sept { line-height: {{data.post_meta_height}}; }',
      post_meta_separator:
        '{{SELECTOR}} .pb-postmeta-sept { color: {{data.post_meta_separator}}; }',
      post_meta_margin:
        '{{SELECTOR}} .pb-postmeta-sept { margin: {{data.post_meta_margin}}; }',
      post_img_width:
        '{{SELECTOR}} .pb-post-grid-img img { width: {{data.post_img_width}}; }',
      post_img_height:
        '{{SELECTOR}} .pb-post-grid-img img { height: {{data.post_img_height}}; }',
      post_border_radius:
        '{{SELECTOR}} .pb-post-grid-img img { border-radius: {{data.post_border_radius}}; }',
      post_img_margin:
        '{{SELECTOR}} .pb-post-grid-img img { margin: {{data.post_img_margin}}; }',
      post_content_color:
        '{{SELECTOR}} .pb-post-grid-intro { color: {{data.post_content_color}}; }',
      post_content_size:
        '{{SELECTOR}} .pb-post-grid-intro{{data.post_content_size}}',
      post_content_margin:
        '{{SELECTOR}} .pb-post-grid-intro { margin: {{data.post_content_margin}}; }',
      post_button_color:
        '{{SELECTOR}} .pb-post-grid-btn { color: {{data.post_button_color}}; }',
      post_button_hcolor:
        '{{SELECTOR}} .pb-post-grid-btn:hover { color: {{data.post_button_hcolor}}; }',
      post_btton_bg: '{{SELECTOR}} .pb-post-grid-btn{{data.post_btton_bg}}',
      post_btton_hover_bg:
        '{{SELECTOR}} .pb-post-grid-btn:hover{{data.post_btton_hover_bg}}',
      post_button_size:
        '{{SELECTOR}} .pb-post-grid-btn{{data.post_button_size}}',
      post_button_border:
        '{{SELECTOR}} .pb-post-grid-btn{{data.post_button_border}}',
      post_border_hcolor:
        '{{SELECTOR}} .pb-post-grid-btn:hover{{data.post_border_hcolor}}',
      post_buttom_radius:
        '{{SELECTOR}} .pb-post-grid-btn { border-radius: {{data.post_buttom_radius}}; }',
      post_buttom_hradius:
        '{{SELECTOR}} .pb-post-grid-btn:hover { border-radius: {{data.post_buttom_hradius}}; }',
      post_button_margin:
        '{{SELECTOR}} .pb-post-grid-btn { margin: {{data.post_button_margin}}; }',
      post_button_padding:
        '{{SELECTOR}} .pb-post-grid-btn { padding: {{data.post_button_padding}}; }',
      post_button_align:
        '{{SELECTOR}} .pb-post-grid-btn-wrap { text-align: {{data.post_button_align}}; }',
      post_load_more_color:
        '{{SELECTOR}} .pb-posts-addon-loadmore-btn { color: {{data.post_load_more_color}}; }',
      post_load_more_hcolor:
        '{{SELECTOR}} .pb-posts-addon-loadmore-btn:hover { color: {{data.post_load_more_hcolor}}; }',
      post_load_more_bg:
        '{{SELECTOR}} .pb-posts-addon-loadmore-btn{{data.post_load_more_bg}}',
      post_load_more_hover_bg:
        '{{SELECTOR}} .pb-posts-addon-loadmore-btn:hover{{data.post_load_more_hover_bg}}',
      post_load_more_size:
        '{{SELECTOR}} .pb-posts-addon-loadmore-btn{{data.post_load_more_size}}',
      post_load_more_border:
        '{{SELECTOR}} .pb-posts-addon-loadmore-btn{{data.post_load_more_border}}',
      post_loadmore_border_hcolor:
        '{{SELECTOR}} .pb-posts-addon-loadmore-btn:hover{{data.post_loadmore_border_hcolor}}',
      post_load_more_radius:
        '{{SELECTOR}} .pb-posts-addon-loadmore-btn { border-radius: {{data.post_load_more_radius}}; }',
      post_load_more_hradius:
        '{{SELECTOR}} .pb-posts-addon-loadmore-btn:hover { border-radius: {{data.post_load_more_hradius}}; }',
      post_load_more_margin:
        '{{SELECTOR}} .pb-posts-addon-loadmore-btn { margin: {{data.post_load_more_margin}}; }',
      post_load_more_padding:
        '{{SELECTOR}} .pb-posts-addon-loadmore-btn { padding: {{data.post_load_more_padding}}; }',
      post_load_more_align:
        '{{SELECTOR}} .pb-posts-addon-pagination{ text-align: {{data.post_load_more_align}}; }',
      post_nav_color:
        '{{SELECTOR}} .pb-posts-paginate-link { color: {{data.post_nav_color}}; }',
      post_nav_hcolor:
        '{{SELECTOR}} .pb-posts-paginate-link:hover,{{SELECTOR}} .paginate-active { color: {{data.post_nav_hcolor}}; }',
      post_nav_bg: '{{SELECTOR}} .pb-posts-paginate-link{{data.post_nav_bg}}',
      post_nav_hover_bg:
        '{{SELECTOR}} .pb-posts-paginate-link:hover, {{SELECTOR}} .paginate-active{{data.post_nav_hover_bg}}',
      post_nav_size:
        '{{SELECTOR}} .pb-posts-paginate-link{{data.post_nav_size}}',
      post_navborder:
        '{{SELECTOR}} .pb-posts-paginate-link{{data.post_navborder}}',
      post_nav_border_hcolor:
        '{{SELECTOR}} .pb-posts-paginate-link:hover,{{SELECTOR}} .paginate-active{{data.post_nav_border_hcolor}}',
      post_nav_radius:
        '{{SELECTOR}} .pb-posts-paginate-link { border-radius: {{data.post_nav_radius}}; }',
      post_nav_margin:
        '{{SELECTOR}} .pb-posts-paginate-link { margin: {{data.post_nav_margin}}; }',
      post_nav_padding:
        '{{SELECTOR}} .pb-posts-paginate-link { padding: {{data.post_nav_padding}}; }',
      post_nav_align:
        '{{SELECTOR}} .pb-posts-addon-pagination{ text-align: {{data.post_nav_align}}; }',
      addon_z_index:
        '.pb-builder-container {{SELECTOR}}{ z-index: {{data.addon_z_index}}; }',
      addon_padding: '{{SELECTOR}}{ padding: {{data.addon_padding}}; }',
      addon_margin: '{{SELECTOR}}{ margin: {{data.addon_margin}}; }',
      addon_background: '{{SELECTOR}}',
      addon_color_opacity: '{{SELECTOR}}:after{{data.addon_color_opacity}}',
      addon_opacity:
        '{{SELECTOR}}:after{ content: " "; z-index: 0; display: block; position: absolute; height: 100%; top: 0; left: 0; right: 0; opacity:{{data.addon_opacity}}; }',
      addon_color_blend:
        '{{SELECTOR}}:after{ mix-blend-mode:{{data.addon_color_blend}}; }',
      addon_border: '{{SELECTOR}}{{data.addon_border}}',
      addon_border_hover: '{{SELECTOR}}:hover{{data.addon_border_hover}}',
      addon_border_radius:
        '{{SELECTOR}}, {{SELECTOR}}:after{ border-radius: {{data.addon_border_radius}}; overflow:hidden; }',
      addon_border_radius_hover:
        '{{SELECTOR}}:hover, {{SELECTOR}}:hover:after{ border-radius: {{data.addon_border_radius_hover}};overflow:hidden; }',
      addon_boxshadow: '{{SELECTOR}}{{data.addon_boxshadow}}',
      addon_boxshadow_hover: '{{SELECTOR}}:hover{{data.addon_boxshadow_hover}}',
      addon_wrap_opacity:
        '{{SELECTOR}} .pb-addon{ opacity:{{data.addon_wrap_opacity}}; }',
      addon_wrap_opacity_hover:
        '{{SELECTOR}} .pb-addon:hover{ opacity:{{data.addon_wrap_opacity_hover}}; }',
      addon_display: '{{SELECTOR}}{ display: {{data.addon_display}} ; }',
    },
    visibility: true,
    icon: 'pb-font-interface',
    attr: {
      general: {
        posts_column: {
          type: 'slider',
          title: 'Column',
          responsive: true,
          std: {
            md: '3',
            sm: '2',
            xs: '1',
          },
          step: 1,
          max: 6,
          min: 1,
        },
        posts_per_page: {
          type: 'number',
          title: 'Posts Per Page',
          std: '3',
        },
        posts_image_size: {
          type: 'select',
          title: 'Image Size',
          values: {
            thumbnail: 'Thumbnail - (150 x 150) ',
            medium: 'Medium - (300 x 300) ',
            medium_large: 'Medium Large - (768 x 0) ',
            large: 'Large - (1024 x 1024) ',
            '1536x1536': '1536x1536 - (1536 x 1536) ',
            '2048x2048': '2048x2048 - (2048 x 2048) ',
            'pb-medium': 'Wppb Medium - (600 x 450) ',
          },
          std: 'pb-medium',
        },
        posts_title_position: {
          type: 'select',
          title: 'Title Position',
          values: {
            above_meta: 'Above Meta',
            below_meta: 'Below Meta',
          },
          std: 'above_meta',
        },
        posts_title: {
          type: 'switch',
          title: 'Title',
          std: '1',
        },
        posts_title_tag: {
          type: 'select',
          title: 'Title Tag',
          values: {
            h1: 'H1',
            h2: 'H2',
            h3: 'H3',
            h4: 'H4',
            h5: 'H5',
            h6: 'H6',
            span: 'span',
            p: 'p',
            div: 'div',
          },
          std: 'h3',
        },
        posts_excerpt: {
          type: 'switch',
          title: 'Excerpt',
          std: '1',
        },
        posts_excerpt_length: {
          type: 'number',
          title: 'Excerpt Length',
          std: '30',
        },
        posts_metadata: {
          type: 'select',
          multiple: true,
          title: 'Meta Data',
          values: {
            author: 'Author',
            date: 'Date',
            time: 'Time',
            comments: 'Comments',
            tags: 'Tags',
            categories: 'Categories',
          },
          std: ['author', 'date', 'comments'],
        },
        posts_separator: {
          type: 'text',
          title: 'Separator',
          std: '/',
        },
        posts_read_more: {
          type: 'switch',
          title: 'Read More',
          std: '1',
        },
        posts_read_more_text: {
          type: 'text',
          title: 'Read More Text',
          std: 'Read More »',
        },
        post_type: {
          type: 'select',
          title: 'Post Type',
          values: {
            post: 'post',
            page: 'page',
            attachment: 'attachment',
          },
          std: 'post',
          section: 'Advanced_Query',
        },
        posts_categories: {
          type: 'select',
          multiple: true,
          title: 'Categories',
          values: {
            '1': 'Uncategorized',
          },
          std: [],
          section: 'Advanced_Query',
        },
        posts_tags: {
          type: 'select',
          multiple: true,
          title: 'Tags',
          values: [],
          std: [],
          section: 'Advanced_Query',
        },
        post_order_by: {
          type: 'select',
          title: 'Order By',
          values: {
            title: 'Title',
            date: 'Date',
            menu_order: 'Menu Order',
            comments_count: 'Comment Count',
            random: 'Random',
          },
          std: 'date',
          section: 'Advanced_Query',
        },
        post_order: {
          type: 'select',
          title: 'Order',
          values: {
            desc: 'DESC',
            asc: 'ASC',
          },
          std: 'desc',
          section: 'Advanced_Query',
        },
        posts_ids: {
          type: 'text',
          title: 'IDS',
          std: '',
          section: 'Advanced_Query',
        },
        posts_exclude_ids: {
          type: 'text',
          title: 'Exclude IDS',
          std: '',
          section: 'Advanced_Query',
          desc: 'Exclude these ids from the query',
        },
        posts_enable_pagination: {
          type: 'switch',
          title: 'Pagination',
          std: '0',
          section: 'Pagination',
        },
        post_pagination_type: {
          type: 'select',
          title: 'Pagination Type',
          values: {
            numbers_next_previous: 'Numbers With Next/Previous',
            next_previous: 'Next/Previous',
            numbers: 'Numbers',
            load_more: 'Load More Page Ends',
          },
          std: 'numbers_next_previous',
          section: 'Pagination',
        },
        post_title_color: {
          type: 'color',
          title: 'Title color',
          tab: 'style',
          section: 'Post Title',
          selector:
            '{{SELECTOR}} .pb-post-grid-title a { color: {{data.post_title_color}}; }',
        },
        post_title_hcolor: {
          type: 'color',
          title: 'Title hover color',
          tab: 'style',
          section: 'Post Title',
          selector:
            '{{SELECTOR}} .pb-post-grid-title a:hover { color: {{data.post_title_hcolor}}; }',
        },
        post_title_size: {
          type: 'typography',
          title: 'Typography',
          std: {
            fontFamily: '',
            fontSize: {
              md: '16px',
              sm: '',
              xs: '',
            },
            lineHeight: {
              md: '',
              sm: '',
              xs: '',
            },
            fontWeight: '400',
            textTransform: '',
            fontStyle: '',
            letterSpacing: {
              md: '',
              sm: '',
              xs: '',
            },
          },
          selector: '{{SELECTOR}} .pb-post-grid-title',
          section: 'Post Title',
          tab: 'style',
        },
        title_item_margin: {
          type: 'dimension',
          title: 'Margin',
          unit: ['px', 'em', '%'],
          std: {
            md: {
              top: '0px',
              right: '0px',
              bottom: '10px',
              left: '0px',
            },
            sm: {
              top: '',
              right: '',
              bottom: '',
              left: '',
            },
            xs: {
              top: '',
              right: '',
              bottom: '',
              left: '',
            },
          },
          responsive: true,
          tab: 'style',
          selector:
            '{{SELECTOR}} .pb-post-grid-title { margin: {{data.title_item_margin}}; }',
          section: 'Post Title',
        },
        post_meta_item_color: {
          type: 'color',
          title: 'Meta item color',
          tab: 'style',
          section: 'Post Meta Item',
          selector:
            '{{SELECTOR}} .pb-post-grid-meta,{{SELECTOR}} .pb-post-grid-meta a { color: {{data.post_meta_item_color}}; }',
        },
        post_meta_item_hcolor: {
          type: 'color',
          title: 'Meta item hover color',
          tab: 'style',
          section: 'Post Meta Item',
          selector:
            '{{SELECTOR}} .pb-post-grid-meta a:hover { color: {{data.post_meta_item_hcolor}}; }',
        },
        post_meta_item: {
          type: 'typography',
          title: 'Typography',
          std: {
            fontFamily: '',
            fontSize: {
              md: '12px',
              sm: '',
              xs: '',
            },
            lineHeight: {
              md: '',
              sm: '',
              xs: '',
            },
            fontWeight: '400',
            textTransform: '',
            fontStyle: '',
            letterSpacing: {
              md: '',
              sm: '',
              xs: '',
            },
          },
          selector: '{{SELECTOR}} .pb-post-grid-meta',
          section: 'Post Meta Item',
          tab: 'style',
        },
        post_meta_item_margin: {
          type: 'dimension',
          title: 'Margin',
          unit: ['px', 'em', '%'],
          responsive: true,
          tab: 'style',
          selector:
            '{{SELECTOR}} .pb-post-grid-meta { margin: {{data.post_meta_item_margin}}; }',
          section: 'Post Meta Item',
        },
        post_meta_size: {
          type: 'slider',
          title: 'Font Size',
          unit: ['px', '%', 'em'],
          range: {
            em: {
              min: 0,
              max: 10,
              step: 0.1,
            },
            px: {
              min: 5,
              max: 100,
              step: 1,
            },
            '%': {
              min: 0,
              max: 100,
              step: 1,
            },
          },
          std: {
            md: '',
            sm: '',
            xs: '',
          },
          responsive: true,
          tab: 'style',
          section: 'Meta Separator',
          selector:
            '{{SELECTOR}} .pb-postmeta-sept { font-size: {{data.post_meta_size}}; }',
        },
        post_meta_height: {
          type: 'slider',
          title: 'Line height',
          std: {
            md: '',
            sm: '',
            xs: '',
          },
          unit: ['px', '%', 'em'],
          responsive: true,
          range: {
            em: {
              min: 0,
              max: 10,
              step: 0.1,
            },
            px: {
              min: 5,
              max: 100,
              step: 1,
            },
            '%': {
              min: 0,
              max: 100,
              step: 1,
            },
          },
          tab: 'style',
          section: 'Meta Separator',
          selector:
            '{{SELECTOR}} .pb-postmeta-sept { line-height: {{data.post_meta_height}}; }',
        },
        post_meta_separator: {
          type: 'color',
          title: 'Color',
          tab: 'style',
          section: 'Meta Separator',
          selector:
            '{{SELECTOR}} .pb-postmeta-sept { color: {{data.post_meta_separator}}; }',
        },
        post_meta_margin: {
          type: 'dimension',
          title: 'Margin',
          unit: ['px', 'em', '%'],
          responsive: true,
          std: {
            md: {
              top: '0px',
              right: '8px',
              bottom: '0px',
              left: '8px',
            },
            sm: {
              top: '',
              right: '',
              bottom: '',
              left: '',
            },
            xs: {
              top: '',
              right: '',
              bottom: '',
              left: '',
            },
          },
          tab: 'style',
          selector:
            '{{SELECTOR}} .pb-postmeta-sept { margin: {{data.post_meta_margin}}; }',
          section: 'Meta Separator',
        },
        post_img_width: {
          type: 'slider',
          title: 'Image width',
          unit: ['px', '%', 'em'],
          range: {
            em: {
              min: 0,
              max: 50,
              step: 0.1,
            },
            px: {
              min: 0,
              max: 500,
              step: 1,
            },
            '%': {
              min: 0,
              max: 100,
              step: 1,
            },
          },
          responsive: true,
          tab: 'style',
          section: 'Post image',
          selector:
            '{{SELECTOR}} .pb-post-grid-img img { width: {{data.post_img_width}}; }',
        },
        post_img_height: {
          type: 'slider',
          title: 'Image height',
          unit: ['px', '%', 'em'],
          range: {
            em: {
              min: 0,
              max: 50,
              step: 0.1,
            },
            px: {
              min: 0,
              max: 500,
              step: 1,
            },
            '%': {
              min: 0,
              max: 100,
              step: 1,
            },
          },
          responsive: true,
          tab: 'style',
          section: 'Post image',
          selector:
            '{{SELECTOR}} .pb-post-grid-img img { height: {{data.post_img_height}}; }',
        },
        post_border_radius: {
          type: 'dimension',
          title: 'Border Radius',
          unit: ['px', '%', 'em'],
          responsive: true,
          tab: 'style',
          section: 'Post image',
          selector:
            '{{SELECTOR}} .pb-post-grid-img img { border-radius: {{data.post_border_radius}}; }',
        },
        post_img_margin: {
          type: 'dimension',
          title: 'margin',
          tab: 'style',
          section: 'Post image',
          unit: ['px', 'em', '%'],
          std: {
            md: {
              top: '0px',
              right: '0px',
              bottom: '15px',
              left: '0px',
            },
            sm: {
              top: '',
              right: '',
              bottom: '',
              left: '',
            },
            xs: {
              top: '',
              right: '',
              bottom: '',
              left: '',
            },
          },
          responsive: true,
          selector:
            '{{SELECTOR}} .pb-post-grid-img img { margin: {{data.post_img_margin}}; }',
        },
        post_content_color: {
          type: 'color',
          title: 'Content color',
          tab: 'style',
          section: 'Post content',
          selector:
            '{{SELECTOR}} .pb-post-grid-intro { color: {{data.post_content_color}}; }',
        },
        post_content_size: {
          type: 'typography',
          title: 'Typography',
          std: {
            fontFamily: '',
            fontSize: {
              md: '16px',
              sm: '',
              xs: '',
            },
            lineHeight: {
              md: '',
              sm: '',
              xs: '',
            },
            fontWeight: '400',
            textTransform: '',
            fontStyle: '',
            letterSpacing: {
              md: '',
              sm: '',
              xs: '',
            },
          },
          selector: '{{SELECTOR}} .pb-post-grid-intro',
          section: 'Post content',
          tab: 'style',
        },
        post_content_margin: {
          type: 'dimension',
          title: 'Margin',
          unit: ['px', 'em', '%'],
          responsive: true,
          tab: 'style',
          std: {
            md: {
              top: '10px',
              right: '0px',
              bottom: '15px',
              left: '0px',
            },
            sm: {
              top: '',
              right: '',
              bottom: '',
              left: '',
            },
            xs: {
              top: '',
              right: '',
              bottom: '',
              left: '',
            },
          },
          selector:
            '{{SELECTOR}} .pb-post-grid-intro { margin: {{data.post_content_margin}}; }',
          section: 'Post content',
        },
        post_button_color: {
          type: 'color',
          title: 'Button color',
          tab: 'style',
          section: 'Post button',
          selector:
            '{{SELECTOR}} .pb-post-grid-btn { color: {{data.post_button_color}}; }',
        },
        post_button_hcolor: {
          type: 'color',
          title: 'Button hover color',
          tab: 'style',
          section: 'Post button',
          selector:
            '{{SELECTOR}} .pb-post-grid-btn:hover { color: {{data.post_button_hcolor}}; }',
        },
        post_btton_bg: {
          type: 'color2',
          title: 'Button background',
          clip: false,
          selector: '{{SELECTOR}} .pb-post-grid-btn',
          tab: 'style',
          section: 'Post button',
        },
        post_btton_hover_bg: {
          type: 'color2',
          title: 'Button hover background',
          clip: false,
          selector: '{{SELECTOR}} .pb-post-grid-btn:hover',
          tab: 'style',
          section: 'Post button',
        },
        post_button_size: {
          type: 'typography',
          title: 'Typography',
          std: {
            fontFamily: '',
            fontSize: {
              md: '12px',
              sm: '',
              xs: '',
            },
            lineHeight: {
              md: '',
              sm: '',
              xs: '',
            },
            fontWeight: '400',
            textTransform: '',
            fontStyle: '',
            letterSpacing: {
              md: '',
              sm: '',
              xs: '',
            },
          },
          selector: '{{SELECTOR}} .pb-post-grid-btn',
          section: 'Post button',
          tab: 'style',
        },
        post_button_border: {
          type: 'border',
          title: 'Border',
          std: {
            borderWidth: {
              top: '0px',
              right: '0px',
              bottom: '0px',
              left: '0px',
            },
            borderStyle: 'solid',
            borderColor: '#cccccc',
          },
          tab: 'style',
          section: 'Post button',
          selector: '{{SELECTOR}} .pb-post-grid-btn',
        },
        post_border_hcolor: {
          type: 'border',
          title: 'hover Border',
          std: {
            borderWidth: {
              top: '0px',
              right: '0px',
              bottom: '0px',
              left: '0px',
            },
            borderStyle: 'solid',
            borderColor: '#cccccc',
          },
          tab: 'style',
          section: 'Post button',
          selector: '{{SELECTOR}} .pb-post-grid-btn:hover',
        },
        post_buttom_radius: {
          type: 'dimension',
          title: 'Border radius',
          unit: ['%', 'px', 'em'],
          responsive: true,
          tab: 'style',
          section: 'Post button',
          selector:
            '{{SELECTOR}} .pb-post-grid-btn { border-radius: {{data.post_buttom_radius}}; }',
        },
        post_buttom_hradius: {
          type: 'dimension',
          title: 'hover border radius',
          unit: ['%', 'px', 'em'],
          responsive: true,
          tab: 'style',
          section: 'Post button',
          selector:
            '{{SELECTOR}} .pb-post-grid-btn:hover { border-radius: {{data.post_buttom_hradius}}; }',
        },
        post_button_margin: {
          type: 'dimension',
          title: 'Margin',
          unit: ['px', 'em', '%'],
          responsive: true,
          tab: 'style',
          selector:
            '{{SELECTOR}} .pb-post-grid-btn { margin: {{data.post_button_margin}}; }',
          section: 'Post button',
        },
        post_button_padding: {
          type: 'dimension',
          title: 'Padding',
          unit: ['px', 'em', '%'],
          responsive: true,
          tab: 'style',
          selector:
            '{{SELECTOR}} .pb-post-grid-btn { padding: {{data.post_button_padding}}; }',
          section: 'Post button',
        },
        post_button_align: {
          type: 'alignment',
          title: 'Alignment',
          responsive: true,
          tab: 'style',
          section: 'Post button',
          selector:
            '{{SELECTOR}} .pb-post-grid-btn-wrap { text-align: {{data.post_button_align}}; }',
        },
        post_load_more_color: {
          type: 'color',
          title: 'Button color',
          tab: 'style',
          section: 'Load More',
          std: '#fff',
          depends: [['post_pagination_type', '=', ['load_more']]],
          selector:
            '{{SELECTOR}} .pb-posts-addon-loadmore-btn { color: {{data.post_load_more_color}}; }',
        },
        post_load_more_hcolor: {
          type: 'color',
          title: 'Button hover color',
          tab: 'style',
          section: 'Load More',
          std: '#fff',
          depends: [['post_pagination_type', '=', ['load_more']]],
          selector:
            '{{SELECTOR}} .pb-posts-addon-loadmore-btn:hover { color: {{data.post_load_more_hcolor}}; }',
        },
        post_load_more_bg: {
          type: 'color2',
          title: 'Button background',
          clip: false,
          std: {
            colorType: 'color',
            colorColor: '#7047eb',
            clip: false,
          },
          selector: '{{SELECTOR}} .pb-posts-addon-loadmore-btn',
          tab: 'style',
          depends: [['post_pagination_type', '=', ['load_more']]],
          section: 'Load More',
        },
        post_load_more_hover_bg: {
          type: 'color2',
          title: 'Button hover background',
          clip: false,
          std: {
            colorType: 'color',
            colorColor: '#2a55c5',
            clip: false,
          },
          selector: '{{SELECTOR}} .pb-posts-addon-loadmore-btn:hover',
          tab: 'style',
          depends: [['post_pagination_type', '=', ['load_more']]],
          section: 'Load More',
        },
        post_load_more_size: {
          type: 'typography',
          title: 'Typography',
          std: {
            fontFamily: '',
            fontSize: {
              md: '12px',
              sm: '',
              xs: '',
            },
            lineHeight: {
              md: '',
              sm: '',
              xs: '',
            },
            fontWeight: '400',
            textTransform: '',
            fontStyle: '',
            letterSpacing: {
              md: '',
              sm: '',
              xs: '',
            },
          },
          selector: '{{SELECTOR}} .pb-posts-addon-loadmore-btn',
          section: 'Load More',
          depends: [['post_pagination_type', '=', ['load_more']]],
          tab: 'style',
        },
        post_load_more_border: {
          type: 'border',
          title: 'Border',
          std: {
            borderWidth: {
              top: '1px',
              right: '1px',
              bottom: '1px',
              left: '1px',
            },
            borderStyle: 'solid',
            borderColor: '#cccccc',
          },
          tab: 'style',
          section: 'Load More',
          depends: [['post_pagination_type', '=', ['load_more']]],
          selector: '{{SELECTOR}} .pb-posts-addon-loadmore-btn',
        },
        post_loadmore_border_hcolor: {
          type: 'border',
          title: 'hover Border',
          std: {
            borderWidth: {
              top: '1px',
              right: '1px',
              bottom: '1px',
              left: '1px',
            },
            borderStyle: 'solid',
            borderColor: '#cccccc',
          },
          tab: 'style',
          section: 'Load More',
          depends: [['post_pagination_type', '=', ['load_more']]],
          selector: '{{SELECTOR}} .pb-posts-addon-loadmore-btn:hover',
        },
        post_load_more_radius: {
          type: 'dimension',
          title: 'Border radius',
          unit: ['%', 'px', 'em'],
          std: {
            md: {
              top: '4px',
              right: '4px',
              bottom: '4px',
              left: '4px',
            },
            sm: {
              top: '',
              right: '',
              bottom: '',
              left: '',
            },
            xs: {
              top: '',
              right: '',
              bottom: '',
              left: '',
            },
          },
          responsive: true,
          tab: 'style',
          section: 'Load More',
          depends: [['post_pagination_type', '=', ['load_more']]],
          selector:
            '{{SELECTOR}} .pb-posts-addon-loadmore-btn { border-radius: {{data.post_load_more_radius}}; }',
        },
        post_load_more_hradius: {
          type: 'dimension',
          title: 'hover border radius',
          unit: ['%', 'px', 'em'],
          responsive: true,
          tab: 'style',
          section: 'Load More',
          depends: [['post_pagination_type', '=', ['load_more']]],
          selector:
            '{{SELECTOR}} .pb-posts-addon-loadmore-btn:hover { border-radius: {{data.post_load_more_hradius}}; }',
        },
        post_load_more_margin: {
          type: 'dimension',
          title: 'Margin',
          unit: ['px', 'em', '%'],
          responsive: true,
          tab: 'style',
          depends: [['post_pagination_type', '=', ['load_more']]],
          selector:
            '{{SELECTOR}} .pb-posts-addon-loadmore-btn { margin: {{data.post_load_more_margin}}; }',
          section: 'Load More',
        },
        post_load_more_padding: {
          type: 'dimension',
          title: 'Padding',
          unit: ['px', 'em', '%'],
          responsive: true,
          tab: 'style',
          std: {
            md: {
              top: '10px',
              right: '25px',
              bottom: '10px',
              left: '25px',
            },
            sm: {
              top: '',
              right: '',
              bottom: '',
              left: '',
            },
            xs: {
              top: '',
              right: '',
              bottom: '',
              left: '',
            },
          },
          depends: [['post_pagination_type', '=', ['load_more']]],
          selector:
            '{{SELECTOR}} .pb-posts-addon-loadmore-btn { padding: {{data.post_load_more_padding}}; }',
          section: 'Load More',
        },
        post_load_more_align: {
          type: 'alignment',
          title: 'Alignment',
          responsive: true,
          tab: 'style',
          section: 'Load More',
          std: {
            md: 'center',
            sm: '',
            xs: '',
          },
          depends: [['post_pagination_type', '=', ['load_more']]],
          selector:
            '{{SELECTOR}} .pb-posts-addon-pagination{ text-align: {{data.post_load_more_align}}; }',
        },
        post_nav_color: {
          type: 'color',
          title: 'Navigation color',
          tab: 'style',
          section: 'Navigation',
          std: '#000',
          depends: [['post_pagination_type', '!=', ['load_more']]],
          selector:
            '{{SELECTOR}} .pb-posts-paginate-link { color: {{data.post_nav_color}}; }',
        },
        post_nav_hcolor: {
          type: 'color',
          title: 'Navigation hover color',
          tab: 'style',
          std: '#fff',
          section: 'Navigation',
          depends: [['post_pagination_type', '!=', ['load_more']]],
          selector:
            '{{SELECTOR}} .pb-posts-paginate-link:hover,{{SELECTOR}} .paginate-active { color: {{data.post_nav_hcolor}}; }',
        },
        post_nav_bg: {
          type: 'color2',
          title: 'Navigation background',
          clip: false,
          std: {
            colorType: 'color',
            colorColor: '#fff',
            clip: false,
          },
          selector: '{{SELECTOR}} .pb-posts-paginate-link',
          tab: 'style',
          depends: [['post_pagination_type', '!=', ['load_more']]],
          section: 'Navigation',
        },
        post_nav_hover_bg: {
          type: 'color2',
          title: 'Navigation hover background',
          clip: false,
          std: {
            colorType: 'color',
            colorColor: '#7047eb',
            clip: false,
          },
          selector:
            '{{SELECTOR}} .pb-posts-paginate-link:hover, {{SELECTOR}} .paginate-active',
          tab: 'style',
          depends: [['post_pagination_type', '!=', ['load_more']]],
          section: 'Navigation',
        },
        post_nav_size: {
          type: 'typography',
          title: 'Typography',
          std: {
            fontFamily: '',
            fontSize: {
              md: '12px',
              sm: '',
              xs: '',
            },
            lineHeight: {
              md: '',
              sm: '',
              xs: '',
            },
            fontWeight: '400',
            textTransform: '',
            fontStyle: '',
            letterSpacing: {
              md: '',
              sm: '',
              xs: '',
            },
          },
          selector: '{{SELECTOR}} .pb-posts-paginate-link',
          section: 'Navigation',
          depends: [['post_pagination_type', '!=', ['load_more']]],
          tab: 'style',
        },
        post_navborder: {
          type: 'border',
          title: 'Border',
          std: {
            itemOpenBorder: 1,
            borderWidth: {
              top: '1px',
              right: '1px',
              bottom: '1px',
              left: '1px',
            },
            borderStyle: 'solid',
            borderColor: '#f5f5f5',
          },
          tab: 'style',
          section: 'Navigation',
          depends: [['post_pagination_type', '!=', ['load_more']]],
          selector: '{{SELECTOR}} .pb-posts-paginate-link',
        },
        post_nav_border_hcolor: {
          type: 'border',
          title: 'hover Border',
          std: {
            itemOpenBorder: 1,
            borderWidth: {
              top: '1px',
              right: '1px',
              bottom: '1px',
              left: '1px',
            },
            borderStyle: 'solid',
            borderColor: '#7047eb',
          },
          tab: 'style',
          section: 'Navigation',
          depends: [['post_pagination_type', '!=', ['load_more']]],
          selector:
            '{{SELECTOR}} .pb-posts-paginate-link:hover,{{SELECTOR}} .paginate-active',
        },
        post_nav_radius: {
          type: 'dimension',
          title: 'Border radius',
          unit: ['%', 'px', 'em'],
          responsive: true,
          tab: 'style',
          section: 'Navigation',
          depends: [['post_pagination_type', '!=', ['load_more']]],
          selector:
            '{{SELECTOR}} .pb-posts-paginate-link { border-radius: {{data.post_nav_radius}}; }',
        },
        post_nav_margin: {
          type: 'dimension',
          title: 'Margin',
          unit: ['px', 'em', '%'],
          responsive: true,
          tab: 'style',
          std: {
            md: {
              top: '0px',
              right: '5px',
              bottom: '0px',
              left: '0px',
            },
            sm: {
              top: '',
              right: '',
              bottom: '',
              left: '',
            },
            xs: {
              top: '',
              right: '',
              bottom: '',
              left: '',
            },
          },
          depends: [['post_pagination_type', '!=', ['load_more']]],
          selector:
            '{{SELECTOR}} .pb-posts-paginate-link { margin: {{data.post_nav_margin}}; }',
          section: 'Navigation',
        },
        post_nav_padding: {
          type: 'dimension',
          title: 'Padding',
          unit: ['px', 'em', '%'],
          responsive: true,
          tab: 'style',
          depends: [['post_pagination_type', '!=', ['load_more']]],
          std: {
            md: {
              top: '5px',
              right: '15px',
              bottom: '5px',
              left: '15px',
            },
            sm: {
              top: '',
              right: '',
              bottom: '',
              left: '',
            },
            xs: {
              top: '',
              right: '',
              bottom: '',
              left: '',
            },
          },
          selector:
            '{{SELECTOR}} .pb-posts-paginate-link { padding: {{data.post_nav_padding}}; }',
          section: 'Navigation',
        },
        post_nav_align: {
          type: 'alignment',
          title: 'Alignment',
          responsive: true,
          tab: 'style',
          section: 'Navigation',
          std: {
            md: 'center',
            sm: '',
            xs: '',
          },
          depends: [['post_pagination_type', '!=', ['load_more']]],
          selector:
            '{{SELECTOR}} .pb-posts-addon-pagination{ text-align: {{data.post_nav_align}}; }',
        },
      },
    },
    defaultAddon: true,
    group: 'basic',
    js_template: false,
  },
  pb_pricing_table: {
    type: 'content',
    addon_name: 'pb_pricing_table',
    title: 'Pricing Table',
    name: 'pb_pricing_table',
    category: '',
    Editor: PricingTable,
    Preview: PricingTable,
    styleJSON: {
      'pricing_feature.icon_list_color':
        '{{SELECTOR}} .pb-pricing-list i { color: {{data.icon_list_color}}; }',
      pricing_align:
        '{{SELECTOR}} .pb-pricing-addon-content{ text-align: {{data.pricing_align}}; }',
      pricing_content_color:
        '{{SELECTOR}} .pb-pricing-feature { color: {{data.pricing_content_color}}; }',
      pricing_content_odd:
        '{{SELECTOR}} .pb-pricing-feature div:nth-child(odd) .pb-pricing-list { background: {{data.pricing_content_odd}}; }',
      pricing_content_even:
        '{{SELECTOR}} .pb-pricing-feature div:nth-child(even) .pb-pricing-list { background: {{data.pricing_content_even}}; }',
      content_fontstyle:
        '{{SELECTOR}} .pb-pricing-feature{{data.content_fontstyle}}',
      content_margin:
        '{{SELECTOR}} .pb-pricing-feature { margin: {{data.content_margin}}; }',
      content_border: '{{SELECTOR}} .pb-pricing-list{{data.content_border}}',
      title_color:
        '{{SELECTOR}} .pb-pricing-title, {{SELECTOR}} .pricing-layout-two .pb-pricing-title, {{SELECTOR}} .pricing-layout-one .pb-pricing-title { color: {{data.title_color}}; }',
      title_bg:
        '{{SELECTOR}} .pricing-layout-two .pb-pricing-title-wrap,{{SELECTOR}} .pricing-layout-one .pb-pricing-title-wrap{{data.title_bg}}',
      title_fontstyle: '{{SELECTOR}} .pb-pricing-title{{data.title_fontstyle}}',
      title_radius:
        '{{SELECTOR}} .pb-pricing-title-wrap { border-radius: {{data.title_radius}}; }',
      title_padding:
        '{{SELECTOR}} .pb-pricing-title-wrap { padding: {{data.title_padding}}; }',
      title_margin:
        '{{SELECTOR}} .pb-pricing-title { margin: {{data.title_margin}}; }',
      pricing_subtitle:
        '{{SELECTOR}} .pb-pricing-subtitle,{{SELECTOR}} .pricing-layout-two .pb-pricing-subtitle, {{SELECTOR}} .pricing-layout-one .pb-pricing-subtitle { color: {{data.pricing_subtitle}}; }',
      subtitle_fontstyle:
        '{{SELECTOR}} .pb-pricing-subtitle{{data.subtitle_fontstyle}}',
      subtitle_margin:
        '{{SELECTOR}} .pb-pricing-subtitle { margin-bottom: {{data.subtitle_margin}}; display: block; }',
      icon_color:
        '{{SELECTOR}} .pb-pricing-table-icon i { color: {{data.icon_color}}; }',
      icon_bg:
        '{{SELECTOR}} .pb-pricing-table-icon i { background: {{data.icon_bg}}; }',
      icon_section_bg:
        '{{SELECTOR}} .pb-pricing-table-icon,{{SELECTOR}} .pricing-layout-two .pb-pricing-table-icon,{{SELECTOR}} .pricing-layout-one .pb-pricing-table-icon{{data.icon_section_bg}}',
      icon_size:
        '{{SELECTOR}} .pb-pricing-table-icon i { font-size: {{data.icon_size}}; }',
      icon_line_height:
        '{{SELECTOR}} .pb-pricing-table-icon i { line-height: {{data.icon_line_height}}; }',
      icon_width:
        '{{SELECTOR}} .pb-pricing-table-icon i { width: {{data.icon_width}}; }',
      icon_height:
        '{{SELECTOR}} .pb-pricing-table-icon i{ height: {{data.icon_height}}; }',
      icon_border: '{{SELECTOR}} .pb-pricing-table-icon i{{data.icon_border}}',
      icon_radius:
        '{{SELECTOR}} .pb-pricing-table-icon i { border-radius: {{data.icon_radius}}; }',
      icon_section_padding:
        '{{SELECTOR}} .pb-pricing-table-icon { padding: {{data.icon_section_padding}}; }',
      pricing_symbol:
        '{{SELECTOR}} .pb-pricing-addon-content .pb-title-currency { color: {{data.pricing_symbol}}; }',
      currency_fontstyle:
        '{{SELECTOR}} .pb-title-currency{{data.currency_fontstyle}}',
      pricing_sales:
        '{{SELECTOR}} .pb-pricing-addon-content .pb-title-sales, {{SELECTOR}} .pb-pricing-addon-content .pb-title-sales-wrapper .pb-title-currency{ color: {{data.pricing_sales}}; }',
      sales_fontstyle: '{{SELECTOR}} .pb-title-sales{{data.sales_fontstyle}}',
      pricing_color:
        '{{SELECTOR}} .pb-pricing-addon-content .pb-pricing-text { color: {{data.pricing_color}}; }',
      pricing_fontstyle:
        '{{SELECTOR}} .pb-pricing-text{{data.pricing_fontstyle}}',
      pricing_margin:
        '{{SELECTOR}} .pb-pricing-text { margin: {{data.pricing_margin}}; }',
      period_color:
        '{{SELECTOR}} .pb-pricing-addon-content .pb-title-period { color: {{data.period_color}}; }',
      period_fontstyle:
        '{{SELECTOR}} .pb-title-period{{data.period_fontstyle}}',
      button_fontstyle:
        '{{SELECTOR}} .pb-pricing-addon-content .pb-btn-pricing{{data.button_fontstyle}}',
      button_color:
        '{{SELECTOR}} .pb-pricing-addon-content .pb-btn-pricing { color: {{data.button_color}}; }',
      button_hcolor:
        '{{SELECTOR}} .pb-pricing-addon-content .pb-btn-pricing:hover { color: {{data.button_hcolor}}; }',
      button_bg:
        '{{SELECTOR}} .pb-pricing-addon-content .pb-btn-pricing{ background: {{data.button_bg}}; }',
      button_hover_bg:
        '{{SELECTOR}} .pb-pricing-addon-content .pb-btn-pricing:hover{ background: {{data.button_hover_bg}}; }',
      button_border:
        '{{SELECTOR}} .pb-pricing-addon-content .pb-btn-pricing{{data.button_border}}',
      button_border_hcolor:
        '{{SELECTOR}} .pb-pricing-addon-content .pb-btn-pricing:hover{{data.button_border_hcolor}}',
      button_radius:
        '{{SELECTOR}} .pb-pricing-addon-content .pb-btn-pricing { border-radius: {{data.button_radius}}; }',
      button_padding:
        '{{SELECTOR}} .pb-pricing-addon-content .pb-btn-pricing { padding: {{data.button_padding}}; }',
      button_margin:
        '{{SELECTOR}} .pb-pricing-addon-content .pb-btn-pricing { margin: {{data.button_margin}}; }',
      addition_text:
        '{{SELECTOR}} .pb-title-aditional-info { color: {{data.addition_text}}; }',
      addition_fontstyle:
        '{{SELECTOR}} .pb-title-aditional-info{{data.addition_fontstyle}}',
      wrap_background: '{{SELECTOR}} .pb-pricing-addon-content',
      wrap_border: '{{SELECTOR}} .pb-pricing-addon-content{{data.wrap_border}}',
      wrap_border_hcolor:
        '{{SELECTOR}} .pb-pricing-addon-content:hover{ border-color: {{data.button_border_hcolor}}; }',
      wrap_radius:
        '{{SELECTOR}} .pb-pricing-addon-content { border-radius: {{data.wrap_radius}}; }',
      wrap_padding:
        '{{SELECTOR}} .pb-pricing-addon-content { padding: {{data.wrap_padding}}; }',
      wrap_margin:
        '{{SELECTOR}} .pb-pricing-addon-content { margin: {{data.wrap_margin}}; }',
      two_title_background:
        '{{SELECTOR}} .pb-pricing-content-one,{{SELECTOR}} .pb-pricing-content-two',
      two_border:
        '{{SELECTOR}} .pb-pricing-content-one, {{SELECTOR}} .pb-pricing-content-two{{data.two_border}}',
      two_border_hcolor:
        '{{SELECTOR}} .pb-pricing-content-one:hover, {{SELECTOR}} .pb-pricing-content-two:hover{ border-color: {{data.button_border_hcolor}}; }',
      two_title_radius:
        '{{SELECTOR}} .pb-pricing-content-one,{{SELECTOR}} .pb-pricing-content-two { border-radius: {{data.two_title_radius}}; }',
      two_title_padding:
        '{{SELECTOR}} .pb-pricing-content-one, {{SELECTOR}} .pb-pricing-content-two { padding: {{data.two_title_padding}}; }',
      addon_z_index:
        '.pb-builder-container {{SELECTOR}}{ z-index: {{data.addon_z_index}}; }',
      addon_padding: '{{SELECTOR}}{ padding: {{data.addon_padding}}; }',
      addon_margin: '{{SELECTOR}}{ margin: {{data.addon_margin}}; }',
      addon_background: '{{SELECTOR}}',
      addon_color_opacity: '{{SELECTOR}}:after{{data.addon_color_opacity}}',
      addon_opacity:
        '{{SELECTOR}}:after{ content: " "; z-index: 0; display: block; position: absolute; height: 100%; top: 0; left: 0; right: 0; opacity:{{data.addon_opacity}}; }',
      addon_color_blend:
        '{{SELECTOR}}:after{ mix-blend-mode:{{data.addon_color_blend}}; }',
      addon_border: '{{SELECTOR}}{{data.addon_border}}',
      addon_border_hover: '{{SELECTOR}}:hover{{data.addon_border_hover}}',
      addon_border_radius:
        '{{SELECTOR}}, {{SELECTOR}}:after{ border-radius: {{data.addon_border_radius}}; overflow:hidden; }',
      addon_border_radius_hover:
        '{{SELECTOR}}:hover, {{SELECTOR}}:hover:after{ border-radius: {{data.addon_border_radius_hover}};overflow:hidden; }',
      addon_boxshadow: '{{SELECTOR}}{{data.addon_boxshadow}}',
      addon_boxshadow_hover: '{{SELECTOR}}:hover{{data.addon_boxshadow_hover}}',
      addon_wrap_opacity:
        '{{SELECTOR}} .pb-addon{ opacity:{{data.addon_wrap_opacity}}; }',
      addon_wrap_opacity_hover:
        '{{SELECTOR}} .pb-addon:hover{ opacity:{{data.addon_wrap_opacity_hover}}; }',
      addon_display: '{{SELECTOR}}{ display: {{data.addon_display}} ; }',
    },
    visibility: true,
    icon: 'pb-font-pricing-table',
    attr: {
      general: {
        pricing_layout: {
          type: 'radioimage',
          title: 'Select layout',
          values: {
            one: '/img/pricing_table/pricing-img1.png',
            two: '/img/pricing_table/pricing-img2.png',
            three: '/img/pricing_table/pricing-img3.png',
          },
          std: 'one',
        },
        title: {
          type: 'text',
          title: 'Title',
          std: 'Standards',
        },
        subtitle: {
          type: 'text',
          title: 'Sub title',
          std: 'Best plan for you',
          depends: [['pricing_layout', '!=', ['three']]],
        },
        currency: {
          type: 'text',
          title: 'Currency symbol',
          std: '$',
        },
        pricing: {
          type: 'text',
          title: 'Sales Price',
          std: '89',
        },
        sales: {
          type: 'text',
          title: 'Regular Price',
          std: '',
        },
        period: {
          type: 'text',
          title: 'Period',
          std: '/ Month',
        },
        pt_icon_list: {
          type: 'icon',
          title: 'Icon list',
          std: 'far fa-star',
          depends: [['pricing_layout', '!=', ['three']]],
        },
        pricing_feature: {
          title: 'Pricing Features',
          type: 'repeatable',
          label: 'feature_text',
          std: [
            {
              feature_text: 'One year support',
              icon_list: 'fas fa-check',
              icon_list_color: '#23c131',
            },
            {
              feature_text: 'Unlimited ready theme',
              icon_list: 'fas fa-times',
              icon_list_color: '#ff0000',
            },
            {
              feature_text: 'Unlimited Free addons',
              icon_list: 'fas fa-check',
              icon_list_color: '#23c131',
            },
            {
              feature_text: 'Five site support',
              icon_list: 'fas fa-check',
              icon_list_color: '#23c131',
            },
          ],
          attr: {
            feature_text: {
              type: 'text',
              title: 'Title',
              std: 'One year support',
            },
            icon_list: {
              type: 'icon',
              title: 'Icon',
              std: 'fas fa-check',
            },
            icon_list_color: {
              type: 'color',
              title: 'Icon color',
              selector:
                '{{SELECTOR}} .pb-pricing-list i { color: {{data.icon_list_color}}; }',
            },
          },
        },
        button_text: {
          type: 'text',
          title: 'Button text',
          std: 'Buy Now',
          placeholder: 'Button',
        },
        btn_link: {
          type: 'link',
          title: 'Button Link',
          std: {
            link: '#',
            window: true,
            nofolow: false,
          },
          depends: [['button_text', '!=', '']],
        },
        icon_list: {
          type: 'icon',
          title: 'Button icon',
          std: '',
          depends: [['button_text', '!=', '']],
        },
        icon_position: {
          type: 'select',
          title: 'Button icon position',
          depends: [['icon_list', '!=', '']],
          values: {
            left: 'Left',
            right: 'Right',
          },
          std: 'left',
        },
        aditional_info: {
          type: 'text',
          title: 'Aditional Info',
          std: 'Support Time 24 hrs',
        },
        pricing_align: {
          type: 'alignment',
          title: 'Alignment',
          std: {
            md: 'center',
            sm: 'center',
            xs: 'center',
          },
          responsive: true,
          selector:
            '{{SELECTOR}} .pb-pricing-addon-content{ text-align: {{data.pricing_align}}; }',
        },
        pricing_content_color: {
          type: 'color',
          title: 'Color',
          tab: 'style',
          section: 'Pricing Feature',
          selector:
            '{{SELECTOR}} .pb-pricing-feature { color: {{data.pricing_content_color}}; }',
        },
        pricing_content_odd: {
          type: 'color',
          title: 'Odd number bg color',
          tab: 'style',
          section: 'Pricing Feature',
          selector:
            '{{SELECTOR}} .pb-pricing-feature div:nth-child(odd) .pb-pricing-list { background: {{data.pricing_content_odd}}; }',
        },
        pricing_content_even: {
          type: 'color',
          title: 'Even number bg color',
          tab: 'style',
          section: 'Pricing Feature',
          selector:
            '{{SELECTOR}} .pb-pricing-feature div:nth-child(even) .pb-pricing-list { background: {{data.pricing_content_even}}; }',
        },
        content_fontstyle: {
          type: 'typography',
          title: 'Typography',
          std: {
            fontFamily: '',
            fontSize: {
              md: '14px',
              sm: '',
              xs: '',
            },
            lineHeight: {
              md: '',
              sm: '',
              xs: '',
            },
            fontWeight: '400',
            textTransform: '',
            fontStyle: '',
            letterSpacing: {
              md: '',
              sm: '',
              xs: '',
            },
          },
          selector: '{{SELECTOR}} .pb-pricing-feature',
          section: 'Pricing Feature',
          tab: 'style',
        },
        content_margin: {
          type: 'dimension',
          title: 'Margin',
          unit: ['px', 'em', '%'],
          responsive: true,
          tab: 'style',
          selector:
            '{{SELECTOR}} .pb-pricing-feature { margin: {{data.content_margin}}; }',
          section: 'Pricing Feature',
        },
        content_border: {
          type: 'border',
          title: 'Border bottom',
          std: {
            borderWidth: {
              bottom: '1px',
            },
            borderStyle: 'solid',
            borderColor: '#e5e5e5',
          },
          tab: 'style',
          section: 'Pricing Feature',
          selector: '{{SELECTOR}} .pb-pricing-list',
        },
        title_color: {
          type: 'color',
          title: 'Color',
          tab: 'style',
          section: 'Pricing Title',
          selector:
            '{{SELECTOR}} .pb-pricing-title, {{SELECTOR}} .pricing-layout-two .pb-pricing-title, {{SELECTOR}} .pricing-layout-one .pb-pricing-title { color: {{data.title_color}}; }',
        },
        title_bg: {
          type: 'color2',
          title: 'Background',
          tab: 'style',
          clip: false,
          std: {
            colorType: 'color',
            colorColor: '#36ADFF',
            clip: false,
          },
          section: 'Pricing Title',
          selector:
            '{{SELECTOR}} .pricing-layout-two .pb-pricing-title-wrap,{{SELECTOR}} .pricing-layout-one .pb-pricing-title-wrap',
          depends: [['pricing_layout', '!=', ['three']]],
        },
        title_fontstyle: {
          type: 'typography',
          title: 'Typography',
          std: {
            fontFamily: '',
            fontSize: {
              md: '28px',
              sm: '',
              xs: '',
            },
            lineHeight: {
              md: '',
              sm: '',
              xs: '',
            },
            fontWeight: '700',
            textTransform: '',
            fontStyle: '',
            letterSpacing: {
              md: '',
              sm: '',
              xs: '',
            },
          },
          selector: '{{SELECTOR}} .pb-pricing-title',
          section: 'Pricing Title',
          tab: 'style',
        },
        title_radius: {
          type: 'dimension',
          title: 'Border radius',
          responsive: true,
          tab: 'style',
          unit: ['px', '%', 'em'],
          section: 'Pricing Title',
          depends: [['pricing_layout', '!=', ['three']]],
          selector:
            '{{SELECTOR}} .pb-pricing-title-wrap { border-radius: {{data.title_radius}}; }',
        },
        title_padding: {
          type: 'dimension',
          title: 'Padding',
          unit: ['px', 'em', '%'],
          responsive: true,
          tab: 'style',
          selector:
            '{{SELECTOR}} .pb-pricing-title-wrap { padding: {{data.title_padding}}; }',
          section: 'Pricing Title',
          depends: [['pricing_layout', '!=', ['three']]],
        },
        title_margin: {
          type: 'dimension',
          title: 'Margin',
          unit: ['px', 'em', '%'],
          responsive: true,
          tab: 'style',
          selector:
            '{{SELECTOR}} .pb-pricing-title { margin: {{data.title_margin}}; }',
          section: 'Pricing Title',
        },
        pricing_subtitle: {
          type: 'color',
          title: 'Pricing sub Color',
          tab: 'style',
          section: 'Pricing Sub title',
          selector:
            '{{SELECTOR}} .pb-pricing-subtitle,{{SELECTOR}} .pricing-layout-two .pb-pricing-subtitle, {{SELECTOR}} .pricing-layout-one .pb-pricing-subtitle { color: {{data.pricing_subtitle}}; }',
          depends: [['pricing_layout', '!=', ['three']]],
        },
        subtitle_fontstyle: {
          type: 'typography',
          title: 'Typography',
          std: {
            fontFamily: '',
            fontSize: {
              md: '28px',
              sm: '',
              xs: '',
            },
            lineHeight: {
              md: '',
              sm: '',
              xs: '',
            },
            fontWeight: '700',
            textTransform: '',
            fontStyle: '',
            letterSpacing: {
              md: '',
              sm: '',
              xs: '',
            },
          },
          selector: '{{SELECTOR}} .pb-pricing-subtitle',
          section: 'Pricing Sub title',
          tab: 'style',
          depends: [['pricing_layout', '!=', ['three']]],
        },
        subtitle_margin: {
          type: 'slider',
          title: 'Margin bottom',
          unit: ['px', '%', 'em'],
          range: {
            em: {
              min: 0,
              max: 25,
              step: 0.1,
            },
            px: {
              min: 0,
              max: 200,
              step: 1,
            },
            '%': {
              min: 0,
              max: 100,
              step: 1,
            },
          },
          std: {
            md: '10px',
            sm: '',
            xs: '',
          },
          responsive: true,
          tab: 'style',
          section: 'Pricing Sub title',
          selector:
            '{{SELECTOR}} .pb-pricing-subtitle { margin-bottom: {{data.subtitle_margin}}; display: block; }',
          depends: [['pricing_layout', '!=', ['three']]],
        },
        icon_color: {
          type: 'color',
          title: 'Icon',
          tab: 'style',
          section: 'Icon',
          selector:
            '{{SELECTOR}} .pb-pricing-table-icon i { color: {{data.icon_color}}; }',
        },
        icon_bg: {
          type: 'color',
          title: 'Icon Background',
          tab: 'style',
          section: 'Icon',
          selector:
            '{{SELECTOR}} .pb-pricing-table-icon i { background: {{data.icon_bg}}; }',
        },
        icon_section_bg: {
          type: 'color2',
          title: 'Icon section background color',
          tab: 'style',
          section: 'Icon',
          clip: false,
          std: {
            colorType: 'color',
            colorColor: '#2399ea',
            clip: false,
          },
          selector:
            '{{SELECTOR}} .pb-pricing-table-icon,{{SELECTOR}} .pricing-layout-two .pb-pricing-table-icon,{{SELECTOR}} .pricing-layout-one .pb-pricing-table-icon',
          depends: [['pricing_layout', '!=', ['three']]],
        },
        icon_size: {
          type: 'slider',
          title: 'Icon Size',
          unit: ['px', '%', 'em'],
          range: {
            em: {
              min: 0,
              max: 100,
              step: 0.1,
            },
            px: {
              min: 0,
              max: 300,
              step: 1,
            },
            '%': {
              min: 0,
              max: 100,
              step: 1,
            },
          },
          std: {
            md: '20px',
            sm: '',
            xs: '',
          },
          responsive: true,
          tab: 'style',
          section: 'Icon',
          selector:
            '{{SELECTOR}} .pb-pricing-table-icon i { font-size: {{data.icon_size}}; }',
        },
        icon_line_height: {
          type: 'slider',
          title: 'Icon line height',
          unit: ['px', '%', 'em'],
          range: {
            em: {
              min: 0,
              max: 100,
              step: 0.1,
            },
            px: {
              min: 0,
              max: 300,
              step: 1,
            },
            '%': {
              min: 0,
              max: 100,
              step: 1,
            },
          },
          std: {
            md: '60px',
            sm: '',
            xs: '',
          },
          responsive: true,
          tab: 'style',
          section: 'Icon',
          selector:
            '{{SELECTOR}} .pb-pricing-table-icon i { line-height: {{data.icon_line_height}}; }',
        },
        icon_width: {
          type: 'slider',
          title: 'Icon Width',
          unit: ['px', '%', 'em'],
          range: {
            em: {
              min: 0,
              max: 20,
              step: 0.1,
            },
            px: {
              min: 0,
              max: 300,
              step: 1,
            },
            '%': {
              min: 0,
              max: 100,
              step: 1,
            },
          },
          std: {
            md: '60px',
            sm: '',
            xs: '',
          },
          responsive: true,
          tab: 'style',
          section: 'Icon',
          selector:
            '{{SELECTOR}} .pb-pricing-table-icon i { width: {{data.icon_width}}; }',
        },
        icon_height: {
          type: 'slider',
          title: 'Icon Height',
          unit: ['px', '%', 'em'],
          range: {
            em: {
              min: 0,
              max: 20,
              step: 0.1,
            },
            px: {
              min: 0,
              max: 300,
              step: 1,
            },
            '%': {
              min: 0,
              max: 100,
              step: 1,
            },
          },
          std: {
            md: '60px',
            sm: '',
            xs: '',
          },
          responsive: true,
          tab: 'style',
          section: 'Icon',
          selector:
            '{{SELECTOR}} .pb-pricing-table-icon i{ height: {{data.icon_height}}; }',
        },
        icon_border: {
          type: 'border',
          title: 'Icon Border',
          std: {
            borderWidth: {
              top: '0px',
              right: '0px',
              bottom: '0px',
              left: '0px',
            },
            borderStyle: 'solid',
            borderColor: '#cccccc',
          },
          tab: 'style',
          section: 'Icon',
          selector: '{{SELECTOR}} .pb-pricing-table-icon i',
        },
        icon_radius: {
          type: 'dimension',
          title: 'Icon border radius',
          unit: ['px', '%', 'em'],
          std: {
            md: {
              top: '100px',
              right: '100px',
              bottom: '100px',
              left: '100px',
            },
            sm: {
              top: '',
              right: '',
              bottom: '',
              left: '',
            },
            xs: {
              top: '',
              right: '',
              bottom: '',
              left: '',
            },
          },
          responsive: true,
          tab: 'style',
          section: 'Icon',
          selector:
            '{{SELECTOR}} .pb-pricing-table-icon i { border-radius: {{data.icon_radius}}; }',
        },
        icon_section_padding: {
          type: 'dimension',
          title: 'Icon padding',
          unit: ['px', 'em', '%'],
          responsive: true,
          tab: 'style',
          selector:
            '{{SELECTOR}} .pb-pricing-table-icon { padding: {{data.icon_section_padding}}; }',
          section: 'Icon',
        },
        pricing_symbol: {
          type: 'color',
          title: 'Currency symbol color',
          tab: 'style',
          section: 'Currency symbol',
          selector:
            '{{SELECTOR}} .pb-pricing-addon-content .pb-title-currency { color: {{data.pricing_symbol}}; }',
        },
        currency_fontstyle: {
          type: 'typography',
          title: 'Typography',
          std: {
            fontFamily: '',
            fontSize: {
              md: '28px',
              sm: '',
              xs: '',
            },
            lineHeight: {
              md: '',
              sm: '',
              xs: '',
            },
            fontWeight: '700',
            textTransform: '',
            fontStyle: '',
            letterSpacing: {
              md: '',
              sm: '',
              xs: '',
            },
          },
          selector: '{{SELECTOR}} .pb-title-currency',
          section: 'Currency symbol',
          tab: 'style',
        },
        pricing_sales: {
          type: 'color',
          title: 'Pricing sales color',
          tab: 'style',
          section: 'Sales',
          selector:
            '{{SELECTOR}} .pb-pricing-addon-content .pb-title-sales, {{SELECTOR}} .pb-pricing-addon-content .pb-title-sales-wrapper .pb-title-currency{ color: {{data.pricing_sales}}; }',
        },
        sales_fontstyle: {
          type: 'typography',
          title: 'Typography',
          std: {
            fontFamily: '',
            fontSize: {
              md: '16px',
              sm: '',
              xs: '',
            },
            lineHeight: {
              md: '',
              sm: '',
              xs: '',
            },
            fontWeight: '400',
            textTransform: '',
            fontStyle: '',
            letterSpacing: {
              md: '',
              sm: '',
              xs: '',
            },
          },
          selector: '{{SELECTOR}} .pb-title-sales',
          section: 'Sales',
          tab: 'style',
        },
        pricing_color: {
          type: 'color',
          title: 'Pricing text color',
          tab: 'style',
          section: 'Pricing',
          selector:
            '{{SELECTOR}} .pb-pricing-addon-content .pb-pricing-text { color: {{data.pricing_color}}; }',
        },
        pricing_fontstyle: {
          type: 'typography',
          title: 'Typography',
          std: {
            fontFamily: '',
            fontSize: {
              md: '32px',
              sm: '',
              xs: '',
            },
            lineHeight: {
              md: '',
              sm: '',
              xs: '',
            },
            fontWeight: '400',
            textTransform: '',
            fontStyle: '',
            letterSpacing: {
              md: '',
              sm: '',
              xs: '',
            },
          },
          selector: '{{SELECTOR}} .pb-pricing-text',
          section: 'Pricing',
          tab: 'style',
        },
        pricing_margin: {
          type: 'dimension',
          title: 'Margin',
          unit: ['px', 'em', '%'],
          responsive: true,
          tab: 'style',
          selector:
            '{{SELECTOR}} .pb-pricing-text { margin: {{data.pricing_margin}}; }',
          section: 'Pricing',
        },
        period_color: {
          type: 'color',
          title: 'Color',
          tab: 'style',
          section: 'Period',
          selector:
            '{{SELECTOR}} .pb-pricing-addon-content .pb-title-period { color: {{data.period_color}}; }',
        },
        period_fontstyle: {
          type: 'typography',
          title: 'Typography',
          std: {
            fontFamily: '',
            fontSize: {
              md: '14px',
              sm: '',
              xs: '',
            },
            lineHeight: {
              md: '',
              sm: '',
              xs: '',
            },
            fontWeight: '400',
            textTransform: '',
            fontStyle: '',
            letterSpacing: {
              md: '',
              sm: '',
              xs: '',
            },
          },
          selector: '{{SELECTOR}} .pb-title-period',
          section: 'Period',
          tab: 'style',
        },
        button_fontstyle: {
          type: 'typography',
          title: 'Typography',
          std: {
            fontFamily: '',
            fontSize: {
              md: '14px',
              sm: '',
              xs: '',
            },
            lineHeight: {
              md: '',
              sm: '',
              xs: '',
            },
            fontWeight: '400',
            textTransform: '',
            fontStyle: '',
            letterSpacing: {
              md: '',
              sm: '',
              xs: '',
            },
          },
          selector: '{{SELECTOR}} .pb-pricing-addon-content .pb-btn-pricing',
          section: 'Button',
          tab: 'style',
        },
        button_color: {
          type: 'color',
          title: 'Color',
          tab: 'style',
          section: 'Button',
          std: '#ffffff',
          selector:
            '{{SELECTOR}} .pb-pricing-addon-content .pb-btn-pricing { color: {{data.button_color}}; }',
        },
        button_hcolor: {
          type: 'color',
          title: 'Hover color',
          tab: 'style',
          section: 'Button',
          std: '#ffffff',
          selector:
            '{{SELECTOR}} .pb-pricing-addon-content .pb-btn-pricing:hover { color: {{data.button_hcolor}}; }',
        },
        button_bg: {
          type: 'color',
          title: 'Background',
          tab: 'style',
          section: 'Button',
          std: '#36ADFF',
          selector:
            '{{SELECTOR}} .pb-pricing-addon-content .pb-btn-pricing{ background: {{data.button_bg}}; }',
        },
        button_hover_bg: {
          type: 'color',
          title: 'Hover background',
          tab: 'style',
          section: 'Button',
          std: '#0074e6',
          selector:
            '{{SELECTOR}} .pb-pricing-addon-content .pb-btn-pricing:hover{ background: {{data.button_hover_bg}}; }',
        },
        button_border: {
          type: 'border',
          title: 'Border',
          std: {
            borderWidth: {
              top: '0px',
              right: '0px',
              bottom: '0px',
              left: '0px',
            },
            borderStyle: 'solid',
            borderColor: '#cccccc',
          },
          tab: 'style',
          section: 'Button',
          selector: '{{SELECTOR}} .pb-pricing-addon-content .pb-btn-pricing',
        },
        button_border_hcolor: {
          type: 'border',
          title: 'Border hover',
          std: {
            borderWidth: {
              top: '0px',
              right: '0px',
              bottom: '0px',
              left: '0px',
            },
            borderStyle: 'solid',
            borderColor: '#cccccc',
          },
          tab: 'style',
          section: 'Button',
          selector:
            '{{SELECTOR}} .pb-pricing-addon-content .pb-btn-pricing:hover',
        },
        button_radius: {
          type: 'dimension',
          title: 'Border radius',
          unit: ['px', '%', 'em'],
          std: {
            md: {
              top: '0px',
              right: '0px',
              bottom: '0px',
              left: '0px',
            },
            sm: {
              top: '',
              right: '',
              bottom: '',
              left: '',
            },
            xs: {
              top: '',
              right: '',
              bottom: '',
              left: '',
            },
          },
          responsive: true,
          tab: 'style',
          section: 'Button',
          selector:
            '{{SELECTOR}} .pb-pricing-addon-content .pb-btn-pricing { border-radius: {{data.button_radius}}; }',
        },
        button_padding: {
          type: 'dimension',
          title: 'Padding',
          unit: ['px', 'em', '%'],
          responsive: true,
          tab: 'style',
          selector:
            '{{SELECTOR}} .pb-pricing-addon-content .pb-btn-pricing { padding: {{data.button_padding}}; }',
          section: 'Button',
        },
        button_margin: {
          type: 'dimension',
          title: 'Margin',
          unit: ['px', 'em', '%'],
          responsive: true,
          tab: 'style',
          selector:
            '{{SELECTOR}} .pb-pricing-addon-content .pb-btn-pricing { margin: {{data.button_margin}}; }',
          section: 'Button',
        },
        button_display: {
          type: 'select',
          title: 'Button display',
          values: {
            btnblock: 'Block',
            btninlineblock: 'Inline Block',
            btninline: 'Inline',
          },
          std: 'btninlineblock',
          tab: 'style',
          section: 'Button',
        },
        addition_text: {
          type: 'color',
          title: 'Text color',
          tab: 'style',
          section: 'Addition Info',
          selector:
            '{{SELECTOR}} .pb-title-aditional-info { color: {{data.addition_text}}; }',
        },
        addition_fontstyle: {
          type: 'typography',
          title: 'Typography',
          std: {
            fontFamily: '',
            fontSize: {
              md: '14px',
              sm: '',
              xs: '',
            },
            lineHeight: {
              md: '',
              sm: '',
              xs: '',
            },
            fontWeight: '400',
            textTransform: '',
            fontStyle: '',
            letterSpacing: {
              md: '',
              sm: '',
              xs: '',
            },
          },
          selector: '{{SELECTOR}} .pb-title-aditional-info',
          section: 'Addition Info',
          tab: 'style',
        },
        wrap_background: {
          type: 'background',
          title: '',
          selector: '{{SELECTOR}} .pb-pricing-addon-content',
          tab: 'style',
          section: 'Price Wrapper',
        },
        wrap_border: {
          type: 'border',
          title: 'Border',
          std: {
            borderWidth: {
              top: '0px',
              right: '0px',
              bottom: '0px',
              left: '0px',
            },
            borderStyle: 'solid',
            borderColor: '#cccccc',
          },
          tab: 'style',
          section: 'Price Wrapper',
          selector: '{{SELECTOR}} .pb-pricing-addon-content',
        },
        wrap_border_hcolor: {
          type: 'color',
          title: 'hover color',
          tab: 'style',
          section: 'Price Wrapper',
          selector:
            '{{SELECTOR}} .pb-pricing-addon-content:hover{ border-color: {{data.button_border_hcolor}}; }',
        },
        wrap_radius: {
          type: 'dimension',
          title: 'Border radius',
          responsive: true,
          tab: 'style',
          unit: ['px', '%', 'em'],
          section: 'Price Wrapper',
          selector:
            '{{SELECTOR}} .pb-pricing-addon-content { border-radius: {{data.wrap_radius}}; }',
        },
        wrap_padding: {
          type: 'dimension',
          title: 'Padding',
          unit: ['px', 'em', '%'],
          responsive: true,
          tab: 'style',
          selector:
            '{{SELECTOR}} .pb-pricing-addon-content { padding: {{data.wrap_padding}}; }',
          section: 'Price Wrapper',
        },
        wrap_margin: {
          type: 'dimension',
          title: 'Margin',
          unit: ['px', 'em', '%'],
          responsive: true,
          tab: 'style',
          selector:
            '{{SELECTOR}} .pb-pricing-addon-content { margin: {{data.wrap_margin}}; }',
          section: 'Price Wrapper',
        },
        two_title_background: {
          type: 'background',
          title: '',
          selector:
            '{{SELECTOR}} .pb-pricing-content-one,{{SELECTOR}} .pb-pricing-content-two',
          tab: 'style',
          section: 'Content wrap',
          depends: [['pricing_layout', '=', ['one', 'two']]],
        },
        two_border: {
          type: 'border',
          title: 'Border',
          std: {
            borderWidth: {
              top: '0px',
              right: '0px',
              bottom: '0px',
              left: '0px',
            },
            borderStyle: 'solid',
            borderColor: '#cccccc',
          },
          tab: 'style',
          section: 'Content wrap',
          selector:
            '{{SELECTOR}} .pb-pricing-content-one, {{SELECTOR}} .pb-pricing-content-two',
          depends: [['pricing_layout', '=', ['one', 'two']]],
        },
        two_border_hcolor: {
          type: 'color',
          title: 'hover color',
          tab: 'style',
          section: 'Content wrap',
          selector:
            '{{SELECTOR}} .pb-pricing-content-one:hover, {{SELECTOR}} .pb-pricing-content-two:hover{ border-color: {{data.button_border_hcolor}}; }',
          depends: [['pricing_layout', '=', ['one', 'two']]],
        },
        two_title_radius: {
          type: 'dimension',
          title: 'Border radius',
          responsive: true,
          tab: 'style',
          unit: ['px', '%', 'em'],
          section: 'Content wrap',
          depends: [['pricing_layout', '=', ['one', 'two']]],
          selector:
            '{{SELECTOR}} .pb-pricing-content-one,{{SELECTOR}} .pb-pricing-content-two { border-radius: {{data.two_title_radius}}; }',
        },
        two_title_padding: {
          type: 'dimension',
          title: 'Padding',
          unit: ['px', 'em', '%'],
          responsive: true,
          tab: 'style',
          selector:
            '{{SELECTOR}} .pb-pricing-content-one, {{SELECTOR}} .pb-pricing-content-two { padding: {{data.two_title_padding}}; }',
          section: 'Content wrap',
          depends: [['pricing_layout', '=', ['one', 'two']]],
        },
      },
    },
    defaultAddon: true,
    group: 'basic',
    js_template: true,
  },
  pb_progress_bar: {
    type: 'content',
    addon_name: 'pb_progress_bar',
    title: 'Progress Bar',
    name: 'pb_progress_bar',
    category: '',
    Editor: ProgressBar,
    Preview: ProgressBar,
    styleJSON: {
      progress_height:
        '{{SELECTOR}} .pb-progress{ height: {{data.progress_height}}px; }',
      border_radius:
        '{{SELECTOR}} .pb-progress { border-radius: {{data.border_radius}}; }',
      overlay_radius:
        '{{SELECTOR}} .pb-progress-bar { border-radius: {{data.overlay_radius}}; }',
      progress_bg: '{{SELECTOR}} .pb-progress{{data.progress_bg}}',
      progress_bg_overlay:
        '{{SELECTOR}} .pb-progress-bar{{data.progress_bg_overlay}}',
      title_color: '{{SELECTOR}} .pb-progress-label{{data.title_color}}',
      font_fontstyle: '{{SELECTOR}} .pb-progress-label{{data.font_fontstyle}}',
      title_margin_bottom:
        '{{SELECTOR}} .pb-progress-label { margin-bottom: {{data.title_margin_bottom}}px; }',
      percent_text_color:
        '{{SELECTOR}} .pb-progress-percent, {{SELECTOR}} .progressbar-layout-two .pb-progress-bar span, {{SELECTOR}} .progressbar-layout-three .pb-progress-bar span{{data.percent_text_color}}',
      percent_text_bg:
        '{{SELECTOR}} .progressbar-layout-three .pb-progress-bar span { background: {{data.percent_text_bg}}; }{{SELECTOR}} .progressbar-layout-three .pb-progress-bar span:after { border-color: {{data.percent_text_bg}} rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0); }',
      percent_fontstyle:
        '{{SELECTOR}} .pb-progress-percent{{data.percent_fontstyle}}',
      percent_margin_bottom:
        '{{SELECTOR}} .pb-progress-percent { margin-bottom: {{data.percent_margin_bottom}}px; }{{SELECTOR}} .progressbar-layout-one .pb-progress-bar span { top: {{data.percent_margin_bottom}}px; }',
      addon_z_index:
        '.pb-builder-container {{SELECTOR}}{ z-index: {{data.addon_z_index}}; }',
      addon_padding: '{{SELECTOR}}{ padding: {{data.addon_padding}}; }',
      addon_margin: '{{SELECTOR}}{ margin: {{data.addon_margin}}; }',
      addon_background: '{{SELECTOR}}',
      addon_color_opacity: '{{SELECTOR}}:after{{data.addon_color_opacity}}',
      addon_opacity:
        '{{SELECTOR}}:after{ content: " "; z-index: 0; display: block; position: absolute; height: 100%; top: 0; left: 0; right: 0; opacity:{{data.addon_opacity}}; }',
      addon_color_blend:
        '{{SELECTOR}}:after{ mix-blend-mode:{{data.addon_color_blend}}; }',
      addon_border: '{{SELECTOR}}{{data.addon_border}}',
      addon_border_hover: '{{SELECTOR}}:hover{{data.addon_border_hover}}',
      addon_border_radius:
        '{{SELECTOR}}, {{SELECTOR}}:after{ border-radius: {{data.addon_border_radius}}; overflow:hidden; }',
      addon_border_radius_hover:
        '{{SELECTOR}}:hover, {{SELECTOR}}:hover:after{ border-radius: {{data.addon_border_radius_hover}};overflow:hidden; }',
      addon_boxshadow: '{{SELECTOR}}{{data.addon_boxshadow}}',
      addon_boxshadow_hover: '{{SELECTOR}}:hover{{data.addon_boxshadow_hover}}',
      addon_wrap_opacity:
        '{{SELECTOR}} .pb-addon{ opacity:{{data.addon_wrap_opacity}}; }',
      addon_wrap_opacity_hover:
        '{{SELECTOR}} .pb-addon:hover{ opacity:{{data.addon_wrap_opacity_hover}}; }',
      addon_display: '{{SELECTOR}}{ display: {{data.addon_display}} ; }',
    },
    visibility: true,
    icon: 'pb-font-progress-bar',
    attr: {
      general: {
        progress_layout: {
          type: 'radioimage',
          title: 'Layout',
          values: {
            one: '/img/progress_bar/progress-img1.png',
            two: '/img/progress_bar/progress-img2.png',
            three: '/img/progress_bar/progress-img3.png',
          },
          std: 'one',
        },
        title: {
          type: 'text',
          title: 'Title',
          std: 'WordPress',
        },
        progress_width: {
          type: 'slider',
          title: 'Width',
          range: {
            min: 0,
            max: 100,
            step: 1,
          },
          std: '50',
          responsive: false,
        },
        progress_height: {
          type: 'slider',
          title: 'Height',
          range: {
            min: 5,
            max: 100,
            step: 1,
          },
          std: '20',
          responsive: false,
          depends: [['progress_layout', '!=', ['three']]],
          selector:
            '{{SELECTOR}} .pb-progress{ height: {{data.progress_height}}px; }',
        },
        stripped: {
          type: 'switch',
          title: 'Show Striped',
          std: '0',
        },
        show_title: {
          type: 'switch',
          title: 'Show title',
          std: '1',
        },
        show_percent: {
          type: 'switch',
          title: 'Show percentage',
          std: '1',
        },
        border_radius: {
          type: 'dimension',
          title: 'Border Radius',
          unit: ['px', '%', 'em'],
          responsive: true,
          tab: 'style',
          selector:
            '{{SELECTOR}} .pb-progress { border-radius: {{data.border_radius}}; }',
        },
        overlay_radius: {
          type: 'dimension',
          title: 'Overlay Radius',
          unit: ['px', 'em', '%'],
          std: {
            md: {
              top: '4px',
              right: '4px',
              bottom: '4px',
              left: '4px',
            },
            sm: {
              top: '',
              right: '',
              bottom: '',
              left: '',
            },
            xs: {
              top: '',
              right: '',
              bottom: '',
              left: '',
            },
          },
          responsive: true,
          tab: 'style',
          selector:
            '{{SELECTOR}} .pb-progress-bar { border-radius: {{data.overlay_radius}}; }',
        },
        style: {
          type: 'select',
          title: 'Select Style',
          values: {
            primary: 'Primary',
            success: 'Success',
            info: 'Info',
            warning: 'Warning',
            danger: 'Danger',
            light: 'Light',
            dark: 'Dark',
            custom: 'Custom',
          },
          std: 'primary',
          tab: 'style',
          section: 'Style',
        },
        progress_bg: {
          type: 'color2',
          title: 'Custom background color',
          tab: 'style',
          clip: false,
          std: {
            colorType: 'color',
            colorColor: '#f5f5f5',
            clip: false,
          },
          selector: '{{SELECTOR}} .pb-progress',
          depends: [['style', '=', ['custom']]],
          section: 'Style',
        },
        progress_bg_overlay: {
          type: 'color2',
          title: 'Custom overlay background',
          tab: 'style',
          clip: false,
          std: {
            colorType: 'color',
            colorColor: '#3D88E4',
            clip: false,
          },
          selector: '{{SELECTOR}} .pb-progress-bar',
          depends: [['style', '=', ['custom']]],
          section: 'Style',
        },
        title_color: {
          type: 'color2',
          title: 'Color',
          tab: 'style',
          clip: true,
          std: {
            clip: true,
            colorType: 'color',
            colorColor: '#333',
          },
          section: 'Title',
          selector: '{{SELECTOR}} .pb-progress-label',
        },
        font_fontstyle: {
          type: 'typography',
          title: 'Typography',
          std: {
            fontFamily: '',
            fontSize: {
              md: '14px',
              sm: '',
              xs: '',
            },
            lineHeight: {
              md: '',
              sm: '',
              xs: '',
            },
            fontWeight: '700',
            textTransform: '',
            fontStyle: '',
            letterSpacing: {
              md: '',
              sm: '',
              xs: '',
            },
          },
          section: 'Title',
          selector: '{{SELECTOR}} .pb-progress-label',
          tab: 'style',
        },
        title_margin_bottom: {
          type: 'slider',
          title: 'Margin bottom',
          range: {
            min: 0,
            max: 150,
            step: 1,
          },
          std: 4,
          responsive: true,
          tab: 'style',
          section: 'Title',
          selector:
            '{{SELECTOR}} .pb-progress-label { margin-bottom: {{data.title_margin_bottom}}px; }',
        },
        percent_text_color: {
          type: 'color2',
          title: 'Color',
          clip: true,
          tab: 'style',
          std: {
            clip: true,
            colorType: 'color',
            colorColor: '#333',
          },
          section: 'Percentage',
          selector:
            '{{SELECTOR}} .pb-progress-percent, {{SELECTOR}} .progressbar-layout-two .pb-progress-bar span, {{SELECTOR}} .progressbar-layout-three .pb-progress-bar span',
        },
        percent_text_bg: {
          type: 'color',
          title: 'Box Background',
          tab: 'style',
          section: 'Percentage',
          depends: [['progress_layout', '=', ['three']]],
          selector: [
            '{{SELECTOR}} .progressbar-layout-three .pb-progress-bar span { background: {{data.percent_text_bg}}; }',
            '{{SELECTOR}} .progressbar-layout-three .pb-progress-bar span:after { border-color: {{data.percent_text_bg}} rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0); }',
          ],
        },
        percent_fontstyle: {
          type: 'typography',
          title: 'Typography',
          std: {
            fontFamily: '',
            fontSize: {
              md: '14px',
              sm: '',
              xs: '',
            },
            lineHeight: {
              md: '',
              sm: '',
              xs: '',
            },
            fontWeight: '700',
            textTransform: '',
            fontStyle: '',
            letterSpacing: {
              md: '',
              sm: '',
              xs: '',
            },
          },
          section: 'Percentage',
          selector: '{{SELECTOR}} .pb-progress-percent',
          tab: 'style',
        },
        percent_margin_bottom: {
          type: 'slider',
          title: 'Margin bottom',
          range: {
            min: -80,
            max: 100,
            step: 1,
          },
          std: 4,
          responsive: true,
          tab: 'style',
          section: 'Percentage',
          selector: [
            '{{SELECTOR}} .pb-progress-percent { margin-bottom: {{data.percent_margin_bottom}}px; }',
            '{{SELECTOR}} .progressbar-layout-one .pb-progress-bar span { top: {{data.percent_margin_bottom}}px; }',
          ],
        },
      },
    },
    defaultAddon: true,
    group: 'basic',
    js_template: true,
  },
  pb_raw_html: {
    type: 'content',
    addon_name: 'pb_raw_html',
    title: 'Raw HTML',
    name: 'pb_raw_html',
    category: '',
    Editor: RawHtml,
    Preview: RawHtml,
    styleJSON: {
      align:
        '{{SELECTOR}} .pb-raw-html-content { text-align: {{data.align}}; }',
      color: '{{SELECTOR}} .pb-raw-html-content { color: {{data.color}}; }',
      link_color:
        '{{SELECTOR}} .pb-raw-html-content a { color: {{data.link_color}}; }',
      link_hcolor:
        '{{SELECTOR}} .pb-raw-html-content a:hover { color: {{data.link_hcolor}}; }',
      typo_fontstyle:
        '{{SELECTOR}} .pb-raw-html-content{{data.typo_fontstyle}}',
      addon_z_index:
        '.pb-builder-container {{SELECTOR}}{ z-index: {{data.addon_z_index}}; }',
      addon_padding: '{{SELECTOR}}{ padding: {{data.addon_padding}}; }',
      addon_margin: '{{SELECTOR}}{ margin: {{data.addon_margin}}; }',
      addon_background: '{{SELECTOR}}',
      addon_color_opacity: '{{SELECTOR}}:after{{data.addon_color_opacity}}',
      addon_opacity:
        '{{SELECTOR}}:after{ content: " "; z-index: 0; display: block; position: absolute; height: 100%; top: 0; left: 0; right: 0; opacity:{{data.addon_opacity}}; }',
      addon_color_blend:
        '{{SELECTOR}}:after{ mix-blend-mode:{{data.addon_color_blend}}; }',
      addon_border: '{{SELECTOR}}{{data.addon_border}}',
      addon_border_hover: '{{SELECTOR}}:hover{{data.addon_border_hover}}',
      addon_border_radius:
        '{{SELECTOR}}, {{SELECTOR}}:after{ border-radius: {{data.addon_border_radius}}; overflow:hidden; }',
      addon_border_radius_hover:
        '{{SELECTOR}}:hover, {{SELECTOR}}:hover:after{ border-radius: {{data.addon_border_radius_hover}};overflow:hidden; }',
      addon_boxshadow: '{{SELECTOR}}{{data.addon_boxshadow}}',
      addon_boxshadow_hover: '{{SELECTOR}}:hover{{data.addon_boxshadow_hover}}',
      addon_wrap_opacity:
        '{{SELECTOR}} .pb-addon{ opacity:{{data.addon_wrap_opacity}}; }',
      addon_wrap_opacity_hover:
        '{{SELECTOR}} .pb-addon:hover{ opacity:{{data.addon_wrap_opacity_hover}}; }',
      addon_display: '{{SELECTOR}}{ display: {{data.addon_display}} ; }',
    },
    visibility: true,
    icon: 'pb-font-html5',
    attr: {
      general: {
        rawhtml: {
          type: 'textarea',
          title: 'Content',
          std: '<p>Insert raw html here.<br/>Here is an example of hyperlink <a href="http://www.themeum.com">Themeum</a></p>',
        },
        align: {
          type: 'alignment',
          title: 'Alignment',
          responsive: true,
          selector:
            '{{SELECTOR}} .pb-raw-html-content { text-align: {{data.align}}; }',
        },
        color: {
          type: 'color',
          title: 'Color',
          tab: 'style',
          selector:
            '{{SELECTOR}} .pb-raw-html-content { color: {{data.color}}; }',
        },
        link_color: {
          type: 'color',
          title: 'Link Color',
          tab: 'style',
          selector:
            '{{SELECTOR}} .pb-raw-html-content a { color: {{data.link_color}}; }',
        },
        link_hcolor: {
          type: 'color',
          title: 'Link Hover Color',
          tab: 'style',
          selector:
            '{{SELECTOR}} .pb-raw-html-content a:hover { color: {{data.link_hcolor}}; }',
        },
        typo_fontstyle: {
          type: 'typography',
          title: 'Typography',
          std: {
            fontFamily: '',
            fontSize: {
              md: '14px',
              sm: '',
              xs: '',
            },
            lineHeight: {
              md: '',
              sm: '',
              xs: '',
            },
            fontWeight: '400',
            textTransform: '',
            fontStyle: '',
            letterSpacing: {
              md: '',
              sm: '',
              xs: '',
            },
          },
          selector: '{{SELECTOR}} .pb-raw-html-content',
          tab: 'style',
        },
      },
    },
    defaultAddon: true,
    group: 'basic',
    js_template: true,
  },
  pb_social_button: {
    type: 'content',
    addon_name: 'pb_social_button',
    title: 'Social Button',
    name: 'pb_social_button',
    category: '',
    Editor: SocialButton,
    Preview: SocialButton,
    styleJSON: {
      'social_item.button_color':
        '{{SELECTOR}} .pb-social-btn { color: {{data.button_color}}; }',
      'social_item.button_hcolor':
        '{{SELECTOR}} .pb-social-btn:hover { color: {{data.button_hcolor}}; }',
      'social_item.button_bg': '{{SELECTOR}} .pb-social-btn{{data.button_bg}}',
      'social_item.button_hover_bg':
        '{{SELECTOR}} .pb-social-btn:hover{{data.button_hover_bg}}',
      'social_item.social_border':
        '{{SELECTOR}} .pb-social-btn{{data.social_border}}',
      'social_item.social_hcolor':
        '{{SELECTOR}} .pb-social-btn:hover{{data.social_hcolor}}',
      social_radius:
        '{{SELECTOR}} .pb-social-button li a { border-radius: {{data.social_radius}}; }',
      hover_social_radius:
        '{{SELECTOR}} .pb-social-button li a:hover { border-radius: {{data.hover_social_radius}}; }',
      social_padding:
        '{{SELECTOR}} .pb-social-button li a { padding: {{data.social_padding}}; }',
      social_align:
        '{{SELECTOR}} .pb-social-addon-content { text-align: {{data.social_align}}; }',
      social_icon_font:
        '{{SELECTOR}} .pb-social-button li a i { font-size: {{data.social_icon_font}}; }',
      social_icon_line:
        '{{SELECTOR}} .pb-social-button li a i { line-height: {{data.social_icon_line}}; }',
      social_fontstyle:
        '{{SELECTOR}} .pb-social-button li a span{{data.social_fontstyle}}',
      social_margin:
        '{{SELECTOR}} .pb-social-button { margin-left: -{{data.social_margin}}; }{{SELECTOR}} .pb-social-button { margin-right: -{{data.social_margin}}; }{{SELECTOR}} .pb-social-button .pb-social-button-list { padding-right: {{data.social_margin}}; }{{SELECTOR}} .pb-social-button .pb-social-button-list { padding-left: {{data.social_margin}}; }',
      addon_z_index:
        '.pb-builder-container {{SELECTOR}}{ z-index: {{data.addon_z_index}}; }',
      addon_padding: '{{SELECTOR}}{ padding: {{data.addon_padding}}; }',
      addon_margin: '{{SELECTOR}}{ margin: {{data.addon_margin}}; }',
      addon_background: '{{SELECTOR}}',
      addon_color_opacity: '{{SELECTOR}}:after{{data.addon_color_opacity}}',
      addon_opacity:
        '{{SELECTOR}}:after{ content: " "; z-index: 0; display: block; position: absolute; height: 100%; top: 0; left: 0; right: 0; opacity:{{data.addon_opacity}}; }',
      addon_color_blend:
        '{{SELECTOR}}:after{ mix-blend-mode:{{data.addon_color_blend}}; }',
      addon_border: '{{SELECTOR}}{{data.addon_border}}',
      addon_border_hover: '{{SELECTOR}}:hover{{data.addon_border_hover}}',
      addon_border_radius:
        '{{SELECTOR}}, {{SELECTOR}}:after{ border-radius: {{data.addon_border_radius}}; overflow:hidden; }',
      addon_border_radius_hover:
        '{{SELECTOR}}:hover, {{SELECTOR}}:hover:after{ border-radius: {{data.addon_border_radius_hover}};overflow:hidden; }',
      addon_boxshadow: '{{SELECTOR}}{{data.addon_boxshadow}}',
      addon_boxshadow_hover: '{{SELECTOR}}:hover{{data.addon_boxshadow_hover}}',
      addon_wrap_opacity:
        '{{SELECTOR}} .pb-addon{ opacity:{{data.addon_wrap_opacity}}; }',
      addon_wrap_opacity_hover:
        '{{SELECTOR}} .pb-addon:hover{ opacity:{{data.addon_wrap_opacity_hover}}; }',
      addon_display: '{{SELECTOR}}{ display: {{data.addon_display}} ; }',
    },
    visibility: true,
    icon: 'pb-font-social-button',
    attr: {
      general: {
        social_item: {
          title: 'Button List',
          type: 'repeatable',
          label: 'icon_list',
          std: [
            {
              icon_list: 'fab fa-facebook-f',
              socialurl: {
                link: 'www.facebook.com',
                window: false,
                nofolow: false,
              },
              socialtext: 'facebook',
              style: 'primary',
            },
            {
              icon_list: 'fab fa-twitter',
              socialurl: {
                link: 'www.twitter.com',
                window: false,
                nofolow: false,
              },
              socialtext: 'twitter',
              style: 'info',
            },
            {
              icon_list: 'fab fa-youtube',
              socialurl: {
                link: 'www.youtube.com/user/themeumwp',
                window: false,
                nofolow: false,
              },
              socialtext: 'youtube',
              style: 'danger',
            },
          ],
          attr: {
            icon_list: {
              type: 'iconsocial',
              title: 'Title',
              std: 'fab fa-facebook-f',
            },
            socialurl: {
              type: 'link',
              title: 'Social URL',
              std: {
                link: '#',
                window: false,
                nofolow: false,
              },
            },
            socialtext: {
              type: 'text',
              title: 'Social text',
            },
            style: {
              type: 'select',
              title: 'Style',
              values: {
                primary: 'Primary',
                success: 'Success',
                info: 'Info',
                warning: 'Warning',
                danger: 'Danger',
                light: 'Light',
                dark: 'Dark',
                link: 'Link',
                custom: 'Custom',
              },
              std: 'primary',
            },
            button_color: {
              type: 'color',
              title: 'Button color',
              depends: [['style', '=', ['custom', 'gradient']]],
              selector:
                '{{SELECTOR}} .pb-social-btn { color: {{data.button_color}}; }',
            },
            button_hcolor: {
              type: 'color',
              title: 'Button hover color',
              depends: [['style', '=', ['custom', 'gradient']]],
              selector:
                '{{SELECTOR}} .pb-social-btn:hover { color: {{data.button_hcolor}}; }',
            },
            button_bg: {
              type: 'color2',
              std: {
                colorType: 'color',
                clip: false,
              },
              title: 'Button Background',
              depends: [['style', '=', ['custom']]],
              selector: '{{SELECTOR}} .pb-social-btn',
            },
            button_hover_bg: {
              type: 'color2',
              std: {
                colorType: 'color',
                clip: false,
              },
              title: 'Button hover background',
              depends: [['style', '=', ['custom']]],
              selector: '{{SELECTOR}} .pb-social-btn:hover',
            },
            social_border: {
              type: 'border',
              title: 'Border',
              std: {
                borderWidth: {
                  top: '2px',
                  right: '2px',
                  bottom: '2px',
                  left: '2px',
                },
                borderStyle: 'solid',
                borderColor: '#cccccc',
              },
              selector: '{{SELECTOR}} .pb-social-btn',
            },
            social_hcolor: {
              type: 'border',
              title: 'Hover Border',
              std: {
                borderWidth: {
                  top: '2px',
                  right: '2px',
                  bottom: '2px',
                  left: '2px',
                },
                borderStyle: 'solid',
                borderColor: '#cccccc',
              },
              selector: '{{SELECTOR}} .pb-social-btn:hover',
            },
          },
        },
        shape: {
          type: 'select',
          title: 'Social Shape',
          values: {
            rounded: 'Rounded',
            square: 'Square',
            round: 'Round',
            custom: 'Custom',
          },
          std: 'rounded',
        },
        social_radius: {
          type: 'dimension',
          title: 'Border radius',
          unit: ['px', 'em', '%'],
          responsive: true,
          depends: [['shape', '=', ['custom']]],
          selector:
            '{{SELECTOR}} .pb-social-button li a { border-radius: {{data.social_radius}}; }',
        },
        hover_social_radius: {
          type: 'dimension',
          title: 'Hover border radius',
          unit: ['px', 'em', '%'],
          responsive: true,
          depends: [['shape', '=', ['custom']]],
          selector:
            '{{SELECTOR}} .pb-social-button li a:hover { border-radius: {{data.hover_social_radius}}; }',
        },
        btn_size: {
          type: 'select',
          title: 'Button Size',
          values: {
            standard: 'Standard',
            large: 'Large',
            xlarge: 'Extra Large',
            small: 'Small',
            xsmall: 'Extra Small',
            custom: 'Custom',
          },
          std: 'large',
        },
        social_padding: {
          type: 'dimension',
          title: 'Social Padding',
          unit: ['px', 'em', '%'],
          depends: [['btn_size', '=', ['custom']]],
          responsive: true,
          selector:
            '{{SELECTOR}} .pb-social-button li a { padding: {{data.social_padding}}; }',
        },
        social_align: {
          type: 'alignment',
          title: 'Social alignment',
          responsive: true,
          selector:
            '{{SELECTOR}} .pb-social-addon-content { text-align: {{data.social_align}}; }',
        },
        social_icon_font: {
          type: 'slider',
          title: 'Icon Size',
          unit: ['%', 'px', 'em'],
          range: {
            em: {
              min: 0,
              max: 10,
              step: 0.1,
            },
            px: {
              min: 0,
              max: 150,
              step: 1,
            },
            '%': {
              min: 0,
              max: 100,
              step: 1,
            },
          },
          std: {
            md: '14px',
            sm: '',
            xs: '',
          },
          responsive: true,
          tab: 'style',
          selector:
            '{{SELECTOR}} .pb-social-button li a i { font-size: {{data.social_icon_font}}; }',
        },
        social_icon_line: {
          type: 'slider',
          title: 'Line height',
          unit: ['%', 'px', 'em'],
          range: {
            em: {
              min: 0,
              max: 10,
              step: 0.1,
            },
            px: {
              min: 0,
              max: 150,
              step: 1,
            },
            '%': {
              min: 0,
              max: 100,
              step: 1,
            },
          },
          std: {
            md: '20px',
            sm: '',
            xs: '',
          },
          responsive: true,
          tab: 'style',
          selector:
            '{{SELECTOR}} .pb-social-button li a i { line-height: {{data.social_icon_line}}; }',
        },
        social_fontstyle: {
          type: 'typography',
          title: 'Title Typography',
          std: {
            fontFamily: '',
            fontSize: {
              md: '14px',
              sm: '',
              xs: '',
            },
            lineHeight: {
              md: '',
              sm: '',
              xs: '',
            },
            fontWeight: '700',
            textTransform: '',
            fontStyle: '',
            letterSpacing: {
              md: '',
              sm: '',
              xs: '',
            },
          },
          selector: '{{SELECTOR}} .pb-social-button li a span',
          tab: 'style',
        },
        social_margin: {
          type: 'slider',
          title: 'Margin',
          unit: ['px', 'em', '%'],
          range: {
            em: {
              min: 0,
              max: 15,
              step: 0.1,
            },
            px: {
              min: 0,
              max: 150,
              step: 1,
            },
            '%': {
              min: 0,
              max: 100,
              step: 1,
            },
          },
          std: {
            md: '5px',
            sm: '',
            xs: '',
          },
          responsive: true,
          tab: 'style',
          selector: [
            '{{SELECTOR}} .pb-social-button { margin-left: -{{data.social_margin}}; }',
            '{{SELECTOR}} .pb-social-button { margin-right: -{{data.social_margin}}; }',
            '{{SELECTOR}} .pb-social-button .pb-social-button-list { padding-right: {{data.social_margin}}; }',
            '{{SELECTOR}} .pb-social-button .pb-social-button-list { padding-left: {{data.social_margin}}; }',
          ],
        },
      },
    },
    defaultAddon: true,
    group: 'basic',
    js_template: true,
  },
  pb_tab: {
    type: 'content',
    addon_name: 'pb_tab',
    title: 'Tab',
    name: 'pb_tab',
    category: '',
    Editor: Tab,
    Preview: Tab,
    styleJSON: {
      navbar_width:
        '{{SELECTOR}} .vertical-tab ul.pb-tab-nav, {{SELECTOR}} .horizontal-tab .pb-tab-nav-list { width: {{data.navbar_width}}; }',
      nav_bar_wrap_bg:
        '{{SELECTOR}} ul.pb-tab-nav { background: {{data.nav_bar_wrap_bg}}; }',
      nav_wrap_radius:
        '{{SELECTOR}} ul.pb-tab-nav { border-radius: {{data.nav_wrap_radius}}; }',
      nav_wrap_padding:
        '{{SELECTOR}} ul.pb-tab-nav { padding: {{data.nav_wrap_padding}}; }',
      nav_wrap_margin:
        '{{SELECTOR}} ul.pb-tab-nav { margin: {{data.nav_wrap_margin}}; }',
      nav_bar_bg:
        '{{SELECTOR}} ul.pb-tab-nav .pb-tab-nav-list .pb-tab-nav-list-wrap { background: {{data.nav_bar_bg}}; }',
      nav_hover_bg:
        '{{SELECTOR}} ul.pb-tab-nav .pb-tab-nav-list:hover .pb-tab-nav-list-wrap { background: {{data.nav_hover_bg}}; }',
      nav_active_bg:
        '{{SELECTOR}} ul.pb-tab-nav .pb-tab-nav-list.active .pb-tab-nav-list-wrap { background: {{data.nav_active_bg}}; }',
      nav_active_boxshadow:
        '{{SELECTOR}} ul.pb-tab-nav .pb-tab-nav-list.active .pb-tab-nav-list-wrap,{{SELECTOR}} ul.pb-tab-nav .pb-tab-nav-list:hover .pb-tab-nav-list-wrap{{data.nav_active_boxshadow}}',
      nav_radius:
        '{{SELECTOR}} ul.pb-tab-nav .pb-tab-nav-list .pb-tab-nav-list-wrap { border-radius: {{data.nav_radius}}; }',
      nav_margin:
        '{{SELECTOR}} ul.pb-tab-nav .pb-tab-nav-list .pb-tab-nav-list-wrap { margin: {{data.nav_margin}}; }',
      nav_padding:
        '{{SELECTOR}} ul.pb-tab-nav .pb-tab-nav-list .pb-tab-nav-list-wrap { padding: {{data.nav_padding}}; }',
      navbar_align:
        '{{SELECTOR}} ul.pb-tab-nav .pb-tab-nav-list .pb-tab-nav-list-wrap { text-align: {{data.navbar_align}}; }',
      navbar_border: '{{SELECTOR}} .pb-tab-nav{{data.navbar_border}}',
      navbar_list_border:
        '{{SELECTOR}} ul.pb-tab-nav .pb-tab-nav-list .pb-tab-nav-list-wrap{{data.navbar_list_border}}',
      navbar_list_border_last:
        '{{SELECTOR}} ul.pb-tab-nav .pb-tab-nav-list:last-child .pb-tab-nav-list-wrap{{data.navbar_list_border_last}}',
      navbar_vertical_wrap_border:
        '{{SELECTOR}} .vertical-tab ul.pb-tab-nav{{data.navbar_vertical_wrap_border}}',
      navbar_vertical_list_border:
        '{{SELECTOR}} .vertical-tab ul.pb-tab-nav .pb-tab-nav-list .pb-tab-nav-list-wrap{{data.navbar_vertical_list_border}}',
      content_border:
        '{{SELECTOR}} .pb-tab-content-wrap{{data.content_border}}',
      title_style: '{{SELECTOR}} .pb-tab-title-content{{data.title_style}}',
      title_color:
        '{{SELECTOR}} .pb-tab-title-content { color: {{data.title_color}}; }',
      title_active_color:
        '{{SELECTOR}} .pb-tab-nav-list.active .pb-tab-title-content,{{SELECTOR}} .pb-tab-nav-list:hover .pb-tab-title-content{ color: {{data.title_active_color}}; }',
      title_margin:
        '{{SELECTOR}} .pb-tab-nav-list .pb-tab-title-content { margin: {{data.title_margin}}; }',
      subtitle_style:
        '{{SELECTOR}} .pb-tab-subtitle-content{{data.subtitle_style}}',
      subtitle_color:
        '{{SELECTOR}} .pb-tab-subtitle-content { color: {{data.subtitle_color}}; }',
      subtitle_active_color:
        '{{SELECTOR}} .pb-tab-nav-list.active .pb-tab-subtitle-content,{{SELECTOR}} .pb-tab-nav-list:hover .pb-tab-subtitle-content{ color: {{data.subtitle_active_color}}; }',
      subtitle_margin:
        '{{SELECTOR}} .pb-tab-nav-list .pb-tab-subtitle-content { margin: {{data.subtitle_margin}}; }',
      icon_size:
        '{{SELECTOR}} .pb-tab-nav-list i { font-size: {{data.icon_size}}; }',
      icon_line_height:
        '{{SELECTOR}} .pb-tab-nav-list i { line-height: {{data.icon_line_height}}; }',
      icon_color:
        '{{SELECTOR}} .pb-tab-nav-list i { color: {{data.icon_color}}; }',
      icon_active_color:
        '{{SELECTOR}} .pb-tab-nav-list.active i,{{SELECTOR}} .pb-tab-nav-list:hover i { color: {{data.icon_active_color}}; }',
      icon_bg_color:
        '{{SELECTOR}} .pb-tab-nav-list i{ background: {{data.icon_bg_color}}; }',
      icon_bg_active_color:
        '{{SELECTOR}} .pb-tab-nav-list.active i,{{SELECTOR}} .pb-tab-nav-list:hover i { background: {{data.icon_bg_active_color}}; }',
      icon_width:
        '{{SELECTOR}} .pb-tab-nav-list i { width: {{data.icon_width}}; }',
      icon_height:
        '{{SELECTOR}} .pb-tab-nav-list i { height: {{data.icon_height}}; }{{SELECTOR}} .pb-tab-nav-list i { line-height: {{data.icon_height}}; }',
      icon_radius:
        '{{SELECTOR}} .pb-tab-nav-list i { border-radius: {{data.icon_radius}}; }',
      icon_align:
        '{{SELECTOR}} .pb-tab-nav-list i { text-align: {{data.icon_align}}; }',
      icon_margin:
        '{{SELECTOR}} .pb-tab-nav-list i{ margin: {{data.icon_margin}}; }',
      content_color:
        '{{SELECTOR}} .pb-tab-content { color: {{data.content_color}}; }',
      content_bg:
        '{{SELECTOR}} .pb-tab-content-wrap { background: {{data.content_bg}}; }',
      content_style: '{{SELECTOR}} .pb-tab-content-wrap{{data.content_style}}',
      content_radius:
        '{{SELECTOR}} .pb-tab-content-wrap{ border-radius: {{data.content_radius}}; }',
      content_margin:
        '{{SELECTOR}} .pb-tab-content-wrap{ margin: {{data.content_margin}}; }',
      content_padding:
        '{{SELECTOR}} .pb-tab-content-wrap{ padding: {{data.content_padding}}; }',
      content_align:
        '{{SELECTOR}} .pb-tab-content-wrap { text-align: {{data.content_align}}; }',
      addon_z_index:
        '.pb-builder-container {{SELECTOR}}{ z-index: {{data.addon_z_index}}; }',
      addon_padding: '{{SELECTOR}}{ padding: {{data.addon_padding}}; }',
      addon_margin: '{{SELECTOR}}{ margin: {{data.addon_margin}}; }',
      addon_background: '{{SELECTOR}}',
      addon_color_opacity: '{{SELECTOR}}:after{{data.addon_color_opacity}}',
      addon_opacity:
        '{{SELECTOR}}:after{ content: " "; z-index: 0; display: block; position: absolute; height: 100%; top: 0; left: 0; right: 0; opacity:{{data.addon_opacity}}; }',
      addon_color_blend:
        '{{SELECTOR}}:after{ mix-blend-mode:{{data.addon_color_blend}}; }',
      addon_border: '{{SELECTOR}}{{data.addon_border}}',
      addon_border_hover: '{{SELECTOR}}:hover{{data.addon_border_hover}}',
      addon_border_radius:
        '{{SELECTOR}}, {{SELECTOR}}:after{ border-radius: {{data.addon_border_radius}}; overflow:hidden; }',
      addon_border_radius_hover:
        '{{SELECTOR}}:hover, {{SELECTOR}}:hover:after{ border-radius: {{data.addon_border_radius_hover}};overflow:hidden; }',
      addon_boxshadow: '{{SELECTOR}}{{data.addon_boxshadow}}',
      addon_boxshadow_hover: '{{SELECTOR}}:hover{{data.addon_boxshadow_hover}}',
      addon_wrap_opacity:
        '{{SELECTOR}} .pb-addon{ opacity:{{data.addon_wrap_opacity}}; }',
      addon_wrap_opacity_hover:
        '{{SELECTOR}} .pb-addon:hover{ opacity:{{data.addon_wrap_opacity_hover}}; }',
      addon_display: '{{SELECTOR}}{ display: {{data.addon_display}} ; }',
    },
    visibility: true,
    icon: 'pb-font-tabs',
    attr: {
      general: {
        tabtype: {
          type: 'radioimage',
          title: 'Type',
          values: {
            horizontal: '/img/tab/tab-img1.png',
            vertical: '/img/tab/tab-img2.png',
          },
          std: 'horizontal',
        },
        horizontal_align: {
          type: 'select',
          title: 'Horizontal Alignment',
          depends: [['tabtype', '=', 'horizontal']],
          values: {
            horizontalleft: 'Left',
            horizontalcenter: 'Center',
            horizontalright: 'Right',
          },
          std: 'horizontalleft',
        },
        vertical_position: {
          type: 'select',
          title: 'Navbar Position',
          depends: [['tabtype', '=', 'vertical']],
          values: {
            verticalleft: 'Left',
            verticalright: 'Right',
          },
          std: 'verticalleft',
        },
        navbar_width: {
          type: 'slider',
          title: 'Nav Bar width',
          unit: ['%', 'px', 'em'],
          range: {
            em: {
              min: 0,
              max: 20,
              step: 0.1,
            },
            px: {
              min: 0,
              max: 300,
              step: 1,
            },
            '%': {
              min: 0,
              max: 100,
              step: 1,
            },
          },
          responsive: true,
          selector:
            '{{SELECTOR}} .vertical-tab ul.pb-tab-nav, {{SELECTOR}} .horizontal-tab .pb-tab-nav-list { width: {{data.navbar_width}}; }',
        },
        tab_list: {
          title: 'Add Tab Item',
          type: 'repeatable',
          label: 'title',
          std: [
            {
              title: 'Page Builder',
              icon_list: 'far fa-star',
              icon_position: 'left',
              content:
                'Reprehenderit enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor',
            },
            {
              title: 'Drag and Drop',
              icon_list: 'fas fa-arrows-alt',
              icon_position: 'right',
              content:
                'Anim pariatur cliche reprehenderit enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor',
            },
            {
              title: 'WordPress Theme',
              icon_position: 'right',
              content:
                'Cliche reprehenderit enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor',
            },
          ],
          attr: {
            title: {
              type: 'text',
              title: 'Title',
              std: 'WP page builder',
            },
            subtitle: {
              type: 'text',
              title: 'Sub title',
              std: 'Plenty of elements',
            },
            icon_list: {
              type: 'icon',
              title: 'Icon',
              std: 'fas fa-home',
            },
            icon_position: {
              type: 'select',
              title: 'Icon position',
              depends: [['icon_list', '!=', '']],
              values: {
                left: 'Left',
                right: 'Right',
                top: 'Top',
                bottom: 'Bottom',
              },
              std: 'left',
            },
            content: {
              type: 'editor',
              title: 'Content',
              std: 'Anim pariatur cliche reprehenderit enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor',
            },
          },
        },
        nav_bar_wrap_bg: {
          type: 'color',
          title: 'Background Color',
          tab: 'style',
          section: 'Nav bar wrap',
          selector:
            '{{SELECTOR}} ul.pb-tab-nav { background: {{data.nav_bar_wrap_bg}}; }',
        },
        nav_wrap_radius: {
          type: 'dimension',
          title: 'Border Radius',
          unit: ['px', 'em', '%'],
          responsive: true,
          tab: 'style',
          section: 'Nav bar wrap',
          selector:
            '{{SELECTOR}} ul.pb-tab-nav { border-radius: {{data.nav_wrap_radius}}; }',
        },
        nav_wrap_padding: {
          type: 'dimension',
          title: 'Padding',
          unit: ['px', 'em', '%'],
          responsive: true,
          tab: 'style',
          section: 'Nav bar wrap',
          selector:
            '{{SELECTOR}} ul.pb-tab-nav { padding: {{data.nav_wrap_padding}}; }',
        },
        nav_wrap_margin: {
          type: 'dimension',
          title: 'Margin',
          unit: ['px', 'em', '%'],
          responsive: true,
          tab: 'style',
          section: 'Nav bar wrap',
          selector:
            '{{SELECTOR}} ul.pb-tab-nav { margin: {{data.nav_wrap_margin}}; }',
        },
        nav_bar_bg: {
          type: 'color',
          title: 'Background Color',
          tab: 'style',
          section: 'Nav bar item',
          selector:
            '{{SELECTOR}} ul.pb-tab-nav .pb-tab-nav-list .pb-tab-nav-list-wrap { background: {{data.nav_bar_bg}}; }',
        },
        nav_hover_bg: {
          type: 'color',
          title: 'Hover background Color',
          tab: 'style',
          section: 'Nav bar item',
          std: '#fafafa',
          selector:
            '{{SELECTOR}} ul.pb-tab-nav .pb-tab-nav-list:hover .pb-tab-nav-list-wrap { background: {{data.nav_hover_bg}}; }',
        },
        nav_active_bg: {
          type: 'color',
          title: 'Active background Color',
          tab: 'style',
          section: 'Nav bar item',
          std: '#fff',
          selector:
            '{{SELECTOR}} ul.pb-tab-nav .pb-tab-nav-list.active .pb-tab-nav-list-wrap { background: {{data.nav_active_bg}}; }',
        },
        nav_active_boxshadow: {
          type: 'boxshadow',
          title: 'Active box shadow',
          std: {
            shadowValue: {
              top: '0px',
              right: '0px',
              bottom: '5px',
              left: '0px',
            },
            shadowColor: 'rgba(0,0,0,.3)',
          },
          tab: 'style',
          section: 'Nav bar item',
          selector:
            '{{SELECTOR}} ul.pb-tab-nav .pb-tab-nav-list.active .pb-tab-nav-list-wrap,{{SELECTOR}} ul.pb-tab-nav .pb-tab-nav-list:hover .pb-tab-nav-list-wrap',
        },
        nav_radius: {
          type: 'dimension',
          title: 'Border Radius',
          unit: ['px', 'em', '%'],
          responsive: true,
          tab: 'style',
          section: 'Nav bar item',
          selector:
            '{{SELECTOR}} ul.pb-tab-nav .pb-tab-nav-list .pb-tab-nav-list-wrap { border-radius: {{data.nav_radius}}; }',
        },
        nav_margin: {
          type: 'dimension',
          title: 'Margin',
          unit: ['px', 'em', '%'],
          responsive: true,
          tab: 'style',
          section: 'Nav bar item',
          selector:
            '{{SELECTOR}} ul.pb-tab-nav .pb-tab-nav-list .pb-tab-nav-list-wrap { margin: {{data.nav_margin}}; }',
        },
        nav_padding: {
          type: 'dimension',
          title: 'Padding',
          std: {
            md: {
              top: '15px',
              right: '20px',
              bottom: '15px',
              left: '20px',
            },
            sm: {
              top: '',
              right: '',
              bottom: '',
              left: '',
            },
            xs: {
              top: '',
              right: '',
              bottom: '',
              left: '',
            },
          },
          unit: ['px', 'em', '%'],
          responsive: true,
          tab: 'style',
          section: 'Nav bar item',
          selector:
            '{{SELECTOR}} ul.pb-tab-nav .pb-tab-nav-list .pb-tab-nav-list-wrap { padding: {{data.nav_padding}}; }',
        },
        navbar_align: {
          type: 'alignment',
          title: 'Alignment',
          responsive: true,
          tab: 'style',
          section: 'Nav bar item',
          selector:
            '{{SELECTOR}} ul.pb-tab-nav .pb-tab-nav-list .pb-tab-nav-list-wrap { text-align: {{data.navbar_align}}; }',
        },
        navbar_border: {
          type: 'border',
          title: 'Nav wrapper border',
          std: {
            itemOpenBorder: 1,
            borderWidth: {
              top: '0',
              right: '0',
              bottom: '1px',
              left: '0',
            },
            borderStyle: 'solid',
            borderColor: '#e5e5e5',
          },
          tab: 'style',
          section: 'Border',
          depends: [['tabtype', '=', 'horizontal']],
          selector: '{{SELECTOR}} .pb-tab-nav',
        },
        navbar_list_border: {
          type: 'border',
          title: 'Nav list border',
          std: {
            itemOpenBorder: 1,
            borderWidth: {
              top: '1px',
              right: '0px',
              bottom: '1px',
              left: '1px',
            },
            borderStyle: 'solid',
            borderColor: '#e5e5e5',
          },
          tab: 'style',
          section: 'Border',
          depends: [['tabtype', '=', 'horizontal']],
          selector:
            '{{SELECTOR}} ul.pb-tab-nav .pb-tab-nav-list .pb-tab-nav-list-wrap',
        },
        navbar_list_border_last: {
          type: 'border',
          title: 'Nav last child Border',
          std: {
            itemOpenBorder: 1,
            borderWidth: {
              top: '1px',
              right: '1px',
              bottom: '1px',
              left: '1px',
            },
            borderStyle: 'solid',
            borderColor: '#e5e5e5',
          },
          tab: 'style',
          section: 'Border',
          depends: [['tabtype', '=', 'horizontal']],
          selector:
            '{{SELECTOR}} ul.pb-tab-nav .pb-tab-nav-list:last-child .pb-tab-nav-list-wrap',
        },
        navbar_vertical_wrap_border: {
          type: 'border',
          title: 'Vertical Wrap item Border',
          std: {
            itemOpenBorder: 1,
            borderWidth: {
              top: '1px',
              right: '1px',
              bottom: '1px',
              left: '1px',
            },
            borderStyle: 'solid',
            borderColor: '#e5e5e5',
          },
          tab: 'style',
          section: 'Border',
          depends: [['tabtype', '=', 'vertical']],
          selector: '{{SELECTOR}} .vertical-tab ul.pb-tab-nav',
        },
        navbar_vertical_list_border: {
          type: 'border',
          title: 'Vartical list items',
          std: {
            itemOpenBorder: 1,
            borderWidth: {
              top: '1px',
              right: '0px',
              bottom: '0px',
              left: '0px',
            },
            borderStyle: 'solid',
            borderColor: '#e5e5e5',
          },
          tab: 'style',
          section: 'Border',
          depends: [['tabtype', '=', 'vertical']],
          selector:
            '{{SELECTOR}} .vertical-tab ul.pb-tab-nav .pb-tab-nav-list .pb-tab-nav-list-wrap',
        },
        content_border: {
          type: 'border',
          title: 'Content border',
          std: {
            itemOpenBorder: 1,
            borderWidth: {
              top: '1px',
              right: '1px',
              bottom: '1px',
              left: '1px',
            },
            borderStyle: 'solid',
            borderColor: '#e5e5e5',
          },
          tab: 'style',
          section: 'Border',
          selector: '{{SELECTOR}} .pb-tab-content-wrap',
        },
        title_style: {
          type: 'typography',
          title: 'Typography',
          std: {
            fontFamily: '',
            fontSize: {
              md: '14px',
              sm: '',
              xs: '',
            },
            lineHeight: {
              md: '',
              sm: '',
              xs: '',
            },
            fontWeight: '700',
            textTransform: '',
            fontStyle: '',
            letterSpacing: {
              md: '',
              sm: '',
              xs: '',
            },
          },
          tab: 'style',
          selector: '{{SELECTOR}} .pb-tab-title-content',
          section: 'Title',
        },
        title_color: {
          type: 'color',
          title: 'Color',
          tab: 'style',
          section: 'Title',
          selector:
            '{{SELECTOR}} .pb-tab-title-content { color: {{data.title_color}}; }',
        },
        title_active_color: {
          type: 'color',
          title: 'Active Color',
          tab: 'style',
          section: 'Title',
          selector:
            '{{SELECTOR}} .pb-tab-nav-list.active .pb-tab-title-content,{{SELECTOR}} .pb-tab-nav-list:hover .pb-tab-title-content{ color: {{data.title_active_color}}; }',
        },
        title_margin: {
          type: 'dimension',
          title: 'Margin',
          unit: ['px', 'em', '%'],
          responsive: true,
          tab: 'style',
          section: 'Title',
          selector:
            '{{SELECTOR}} .pb-tab-nav-list .pb-tab-title-content { margin: {{data.title_margin}}; }',
        },
        subtitle_style: {
          type: 'typography',
          title: 'Typography',
          std: {
            fontFamily: '',
            fontSize: {
              md: '14px',
              sm: '',
              xs: '',
            },
            lineHeight: {
              md: '',
              sm: '',
              xs: '',
            },
            fontWeight: '700',
            textTransform: '',
            fontStyle: '',
            letterSpacing: {
              md: '',
              sm: '',
              xs: '',
            },
          },
          tab: 'style',
          selector: '{{SELECTOR}} .pb-tab-subtitle-content',
          section: 'Sub title',
        },
        subtitle_color: {
          type: 'color',
          title: 'Color',
          tab: 'style',
          section: 'Sub title',
          selector:
            '{{SELECTOR}} .pb-tab-subtitle-content { color: {{data.subtitle_color}}; }',
        },
        subtitle_active_color: {
          type: 'color',
          title: 'Active color',
          tab: 'style',
          section: 'Sub title',
          selector:
            '{{SELECTOR}} .pb-tab-nav-list.active .pb-tab-subtitle-content,{{SELECTOR}} .pb-tab-nav-list:hover .pb-tab-subtitle-content{ color: {{data.subtitle_active_color}}; }',
        },
        subtitle_margin: {
          type: 'dimension',
          title: 'Margin',
          unit: ['px', 'em', '%'],
          responsive: true,
          tab: 'style',
          section: 'Sub title',
          selector:
            '{{SELECTOR}} .pb-tab-nav-list .pb-tab-subtitle-content { margin: {{data.subtitle_margin}}; }',
        },
        icon_size: {
          type: 'slider',
          title: 'Size',
          unit: ['%', 'px', 'em'],
          range: {
            em: {
              min: 0,
              max: 25,
              step: 0.1,
            },
            px: {
              min: 0,
              max: 200,
              step: 1,
            },
            '%': {
              min: 0,
              max: 100,
              step: 1,
            },
          },
          std: {
            md: '14px',
            sm: '',
            xs: '',
          },
          responsive: true,
          tab: 'style',
          section: 'Icon',
          selector:
            '{{SELECTOR}} .pb-tab-nav-list i { font-size: {{data.icon_size}}; }',
        },
        icon_line_height: {
          type: 'slider',
          title: 'Line height',
          unit: ['%', 'px', 'em'],
          range: {
            em: {
              min: 0,
              max: 25,
              step: 0.1,
            },
            px: {
              min: 0,
              max: 200,
              step: 1,
            },
            '%': {
              min: 0,
              max: 100,
              step: 1,
            },
          },
          std: {
            md: '14px',
            sm: '',
            xs: '',
          },
          responsive: true,
          tab: 'style',
          section: 'Icon',
          selector:
            '{{SELECTOR}} .pb-tab-nav-list i { line-height: {{data.icon_line_height}}; }',
        },
        icon_color: {
          type: 'color',
          title: 'Color',
          tab: 'style',
          section: 'Icon',
          selector:
            '{{SELECTOR}} .pb-tab-nav-list i { color: {{data.icon_color}}; }',
        },
        icon_active_color: {
          type: 'color',
          title: 'Active/hover color',
          tab: 'style',
          section: 'Icon',
          selector:
            '{{SELECTOR}} .pb-tab-nav-list.active i,{{SELECTOR}} .pb-tab-nav-list:hover i { color: {{data.icon_active_color}}; }',
        },
        icon_bg_color: {
          type: 'color',
          title: 'Background color',
          tab: 'style',
          section: 'Icon',
          selector:
            '{{SELECTOR}} .pb-tab-nav-list i{ background: {{data.icon_bg_color}}; }',
        },
        icon_bg_active_color: {
          type: 'color',
          title: 'Active/hover Background color',
          tab: 'style',
          section: 'Icon',
          selector:
            '{{SELECTOR}} .pb-tab-nav-list.active i,{{SELECTOR}} .pb-tab-nav-list:hover i { background: {{data.icon_bg_active_color}}; }',
        },
        icon_width: {
          type: 'slider',
          title: 'Width',
          unit: ['%', 'px', 'em'],
          range: {
            em: {
              min: 0,
              max: 20,
              step: 0.1,
            },
            px: {
              min: 0,
              max: 300,
              step: 1,
            },
            '%': {
              min: 0,
              max: 100,
              step: 1,
            },
          },
          std: {
            md: '',
            sm: '',
            xs: '',
          },
          responsive: true,
          tab: 'style',
          section: 'Icon',
          selector:
            '{{SELECTOR}} .pb-tab-nav-list i { width: {{data.icon_width}}; }',
        },
        icon_height: {
          type: 'slider',
          title: 'Height',
          unit: ['%', 'px', 'em'],
          range: {
            em: {
              min: 0,
              max: 20,
              step: 0.1,
            },
            px: {
              min: 0,
              max: 300,
              step: 1,
            },
            '%': {
              min: 0,
              max: 100,
              step: 1,
            },
          },
          std: {
            md: '',
            sm: '',
            xs: '',
          },
          responsive: true,
          tab: 'style',
          section: 'Icon',
          selector: [
            '{{SELECTOR}} .pb-tab-nav-list i { height: {{data.icon_height}}; }',
            '{{SELECTOR}} .pb-tab-nav-list i { line-height: {{data.icon_height}}; }',
          ],
        },
        icon_radius: {
          type: 'dimension',
          title: 'Border radius',
          responsive: false,
          tab: 'style',
          unit: ['%', 'px', 'em'],
          section: 'Icon',
          selector:
            '{{SELECTOR}} .pb-tab-nav-list i { border-radius: {{data.icon_radius}}; }',
        },
        icon_align: {
          type: 'alignment',
          title: 'Alignment',
          std: {
            md: 'center',
            sm: 'center',
            xs: 'center',
          },
          responsive: true,
          tab: 'style',
          section: 'Icon',
          selector:
            '{{SELECTOR}} .pb-tab-nav-list i { text-align: {{data.icon_align}}; }',
        },
        icon_margin: {
          type: 'dimension',
          title: 'Margin',
          std: {
            md: {
              top: '0px',
              right: '0px',
              bottom: '0px',
              left: '0px',
            },
            sm: {
              top: '0px',
              right: '0px',
              bottom: '0px',
              left: '0px',
            },
            xs: {
              top: '0px',
              right: '0px',
              bottom: '0px',
              left: '0px',
            },
          },
          unit: ['px', 'em', '%'],
          responsive: true,
          tab: 'style',
          section: 'Icon',
          selector:
            '{{SELECTOR}} .pb-tab-nav-list i{ margin: {{data.icon_margin}}; }',
        },
        content_color: {
          type: 'color',
          title: 'Color',
          tab: 'style',
          section: 'Tab Content',
          std: '#000',
          selector:
            '{{SELECTOR}} .pb-tab-content { color: {{data.content_color}}; }',
        },
        content_bg: {
          type: 'color',
          title: 'Background color',
          tab: 'style',
          section: 'Tab Content',
          std: '#fff',
          selector:
            '{{SELECTOR}} .pb-tab-content-wrap { background: {{data.content_bg}}; }',
        },
        content_style: {
          type: 'typography',
          title: 'Typography',
          tab: 'style',
          std: {
            fontFamily: '',
            fontSize: {
              md: '14px',
              sm: '',
              xs: '',
            },
            lineHeight: {
              md: '',
              sm: '',
              xs: '',
            },
            fontWeight: '700',
            textTransform: '',
            fontStyle: '',
            letterSpacing: {
              md: '',
              sm: '',
              xs: '',
            },
          },
          selector: '{{SELECTOR}} .pb-tab-content-wrap',
          section: 'Tab Content',
        },
        content_radius: {
          type: 'dimension',
          title: 'Border Radius',
          unit: ['px', 'em', '%'],
          responsive: true,
          tab: 'style',
          section: 'Tab Content',
          selector:
            '{{SELECTOR}} .pb-tab-content-wrap{ border-radius: {{data.content_radius}}; }',
        },
        content_margin: {
          type: 'dimension',
          title: 'Margin',
          std: {
            md: {
              top: '0px',
              right: '0px',
              bottom: '0px',
              left: '0px',
            },
            sm: {
              top: '0px',
              right: '0px',
              bottom: '0px',
              left: '0px',
            },
            xs: {
              top: '0px',
              right: '0px',
              bottom: '0px',
              left: '0px',
            },
          },
          unit: ['px', 'em', '%'],
          responsive: true,
          tab: 'style',
          section: 'Tab Content',
          selector:
            '{{SELECTOR}} .pb-tab-content-wrap{ margin: {{data.content_margin}}; }',
        },
        content_padding: {
          type: 'dimension',
          title: 'Padding',
          std: {
            md: {
              top: '15px',
              right: '15px',
              bottom: '15px',
              left: '15px',
            },
            sm: {
              top: '',
              right: '',
              bottom: '',
              left: '',
            },
            xs: {
              top: '',
              right: '',
              bottom: '',
              left: '',
            },
          },
          unit: ['px', 'em', '%'],
          responsive: true,
          tab: 'style',
          section: 'Tab Content',
          selector:
            '{{SELECTOR}} .pb-tab-content-wrap{ padding: {{data.content_padding}}; }',
        },
        content_align: {
          type: 'alignment',
          title: 'Alignment',
          responsive: true,
          tab: 'style',
          section: 'Tab Content',
          selector:
            '{{SELECTOR}} .pb-tab-content-wrap { text-align: {{data.content_align}}; }',
        },
      },
    },
    defaultAddon: true,
    group: 'basic',
    js_template: true,
  },
  pb_testimonial: {
    type: 'content',
    addon_name: 'pb_testimonial',
    title: 'Testimonial',
    name: 'pb_testimonial',
    category: '',
    Editor: Testimonial,
    Preview: Testimonial,
    styleJSON: {
      testimonial_align:
        '{{SELECTOR}} .pb-testimonial-addon-content{ text-align: {{data.testimonial_align}}; }',
      img_width:
        '{{SELECTOR}} .pb-testimonial-addon-img { width: {{data.img_width}}; }',
      img_height:
        '{{SELECTOR}} .pb-testimonial-addon-img { height: {{data.img_height}}; }',
      img_radius:
        '{{SELECTOR}} .pb-testimonial-addon-img { border-radius: {{data.img_radius}}; }',
      image_border:
        '{{SELECTOR}} .pb-testimonial-addon-img{{data.image_border}}',
      image_margin:
        '{{SELECTOR}} .pb-testimonial-addon-img { margin: {{data.image_margin}}; }',
      name_color:
        '{{SELECTOR}} .pb-testimonial-name, {{SELECTOR}} .pb-testimonial-name a { color: {{data.name_color}}; }',
      name_fontstyle:
        '{{SELECTOR}} .pb-testimonial-name{{data.name_fontstyle}}',
      name_margin:
        '{{SELECTOR}} .pb-testimonial-name { margin: {{data.name_margin}}; }',
      desgn_color:
        '{{SELECTOR}} .pb-testimonial-designation { color: {{data.desgn_color}}; }',
      desgn_fontstyle:
        '{{SELECTOR}} .pb-testimonial-designation{{data.desgn_fontstyle}}',
      intro_color:
        '{{SELECTOR}} .pb-testimonial-introtext { color: {{data.intro_color}}; }',
      intro_fontstyle:
        '{{SELECTOR}} .pb-testimonial-introtext, {{SELECTOR}} .testimonial-layout-four .pb-testimonial-introtext{{data.intro_fontstyle}}',
      message_margin:
        '{{SELECTOR}} .pb-testimonial-introtext, {{SELECTOR}} .testimonial-layout-four .pb-testimonial-introtext { margin: {{data.message_margin}}; }',
      quote_color:
        '{{SELECTOR}} .testimonial-layout-four .pb-testimonial-quote { color: {{data.quote_color}}; }',
      quote_fontsize:
        '{{SELECTOR}} .testimonial-layout-four .pb-testimonial-quote { font-size: {{data.quote_fontsize}}; }',
      quote_line_height:
        '{{SELECTOR}} .testimonial-layout-four .pb-testimonial-quote { line-height: {{data.quote_line_height}}; }',
      wrap_background: '{{SELECTOR}} .pb-testimonial-addon-content',
      wrap_border:
        '{{SELECTOR}} .pb-testimonial-addon-content{{data.wrap_border}}',
      wrap_radius:
        '{{SELECTOR}} .pb-testimonial-addon-content { border-radius: {{data.wrap_radius}}; }',
      wrap_boxshadow:
        '{{SELECTOR}} .pb-testimonial-addon-content{{data.wrap_boxshadow}}',
      wrap_hover_boxshadow:
        '{{SELECTOR}} .pb-testimonial-addon-content:hover{{data.wrap_hover_boxshadow}}',
      wrap_padding:
        '{{SELECTOR}} .pb-testimonial-addon-content { padding: {{data.wrap_padding}}; }',
      addon_z_index:
        '.pb-builder-container {{SELECTOR}}{ z-index: {{data.addon_z_index}}; }',
      addon_padding: '{{SELECTOR}}{ padding: {{data.addon_padding}}; }',
      addon_margin: '{{SELECTOR}}{ margin: {{data.addon_margin}}; }',
      addon_background: '{{SELECTOR}}',
      addon_color_opacity: '{{SELECTOR}}:after{{data.addon_color_opacity}}',
      addon_opacity:
        '{{SELECTOR}}:after{ content: " "; z-index: 0; display: block; position: absolute; height: 100%; top: 0; left: 0; right: 0; opacity:{{data.addon_opacity}}; }',
      addon_color_blend:
        '{{SELECTOR}}:after{ mix-blend-mode:{{data.addon_color_blend}}; }',
      addon_border: '{{SELECTOR}}{{data.addon_border}}',
      addon_border_hover: '{{SELECTOR}}:hover{{data.addon_border_hover}}',
      addon_border_radius:
        '{{SELECTOR}}, {{SELECTOR}}:after{ border-radius: {{data.addon_border_radius}}; overflow:hidden; }',
      addon_border_radius_hover:
        '{{SELECTOR}}:hover, {{SELECTOR}}:hover:after{ border-radius: {{data.addon_border_radius_hover}};overflow:hidden; }',
      addon_boxshadow: '{{SELECTOR}}{{data.addon_boxshadow}}',
      addon_boxshadow_hover: '{{SELECTOR}}:hover{{data.addon_boxshadow_hover}}',
      addon_wrap_opacity:
        '{{SELECTOR}} .pb-addon{ opacity:{{data.addon_wrap_opacity}}; }',
      addon_wrap_opacity_hover:
        '{{SELECTOR}} .pb-addon:hover{ opacity:{{data.addon_wrap_opacity_hover}}; }',
      addon_display: '{{SELECTOR}}{ display: {{data.addon_display}} ; }',
    },
    visibility: true,
    icon: 'pb-font-quote',
    attr: {
      general: {
        testimonial_layout: {
          type: 'radioimage',
          title: 'Layout',
          values: {
            one: '/img/testimonial/testimonial-img1.png',
            two: '/img/testimonial/testimonial-img2.png',
            three: '/img/testimonial/testimonial-img3.png',
            four: '/img/testimonial/testimonial-img4.png',
          },
          std: 'one',
        },
        image: {
          type: 'media',
          title: 'Image',
          std: {
            url: '/img/placeholder/pb-small.jpg',
          },
        },
        name: {
          type: 'text',
          title: 'Name',
          std: 'John Doe',
        },
        name_link: {
          type: 'link',
          title: 'Link',
          std: {
            link: '',
            window: true,
            nofolow: false,
          },
        },
        designation: {
          type: 'text',
          title: 'Designation',
          std: 'Designer',
        },
        introtext: {
          type: 'textarea',
          title: 'Message text',
          std: 'She was bouncing away, when a cry from the two women, who had turned towards the bed, caused her to look round.',
        },
        testimonial_align: {
          type: 'alignment',
          title: 'Alignment',
          responsive: true,
          selector:
            '{{SELECTOR}} .pb-testimonial-addon-content{ text-align: {{data.testimonial_align}}; }',
        },
        img_width: {
          type: 'slider',
          title: 'Width',
          unit: ['px', '%', 'em'],
          range: {
            em: {
              min: 0,
              max: 25,
              step: 0.1,
            },
            px: {
              min: 0,
              max: 250,
              step: 1,
            },
            '%': {
              min: 0,
              max: 100,
              step: 1,
            },
          },
          std: {
            md: '50px',
            sm: '',
            xs: '',
          },
          responsive: true,
          tab: 'style',
          section: 'Image',
          selector:
            '{{SELECTOR}} .pb-testimonial-addon-img { width: {{data.img_width}}; }',
        },
        img_height: {
          type: 'slider',
          title: 'Height',
          unit: ['px', '%', 'em'],
          range: {
            em: {
              min: 0,
              max: 25,
              step: 0.1,
            },
            px: {
              min: 0,
              max: 250,
              step: 1,
            },
            '%': {
              min: 0,
              max: 100,
              step: 1,
            },
          },
          std: {
            md: '50px',
            sm: '',
            xs: '',
          },
          responsive: true,
          tab: 'style',
          section: 'Image',
          selector:
            '{{SELECTOR}} .pb-testimonial-addon-img { height: {{data.img_height}}; }',
        },
        img_radius: {
          type: 'dimension',
          title: 'Border Radius',
          unit: ['px', '%', 'em'],
          std: {
            md: {
              top: '100px',
              right: '100px',
              bottom: '100px',
              left: '100px',
            },
            sm: {
              top: '',
              right: '',
              bottom: '',
              left: '',
            },
            xs: {
              top: '',
              right: '',
              bottom: '',
              left: '',
            },
          },
          responsive: true,
          tab: 'style',
          section: 'Image',
          selector:
            '{{SELECTOR}} .pb-testimonial-addon-img { border-radius: {{data.img_radius}}; }',
        },
        image_border: {
          type: 'border',
          title: 'Border',
          std: {
            borderWidth: {
              top: '0px',
              right: '0px',
              bottom: '0px',
              left: '0px',
            },
            borderStyle: 'solid',
            borderColor: '#cccccc',
          },
          tab: 'style',
          section: 'Image',
          selector: '{{SELECTOR}} .pb-testimonial-addon-img',
        },
        image_margin: {
          type: 'dimension',
          title: 'Margin',
          unit: ['px', 'em', '%'],
          responsive: true,
          tab: 'style',
          section: 'Image',
          selector:
            '{{SELECTOR}} .pb-testimonial-addon-img { margin: {{data.image_margin}}; }',
        },
        name_color: {
          type: 'color',
          title: 'Color',
          tab: 'style',
          section: 'Name',
          selector:
            '{{SELECTOR}} .pb-testimonial-name, {{SELECTOR}} .pb-testimonial-name a { color: {{data.name_color}}; }',
        },
        name_fontstyle: {
          type: 'typography',
          title: 'Typography',
          std: {
            fontFamily: '',
            fontSize: {
              md: '18px',
              sm: '',
              xs: '',
            },
            lineHeight: {
              md: '',
              sm: '',
              xs: '',
            },
            fontWeight: '700',
            textTransform: '',
            fontStyle: '',
            letterSpacing: {
              md: '',
              sm: '',
              xs: '',
            },
          },
          selector: '{{SELECTOR}} .pb-testimonial-name',
          section: 'Name',
          tab: 'style',
        },
        name_margin: {
          type: 'dimension',
          title: 'Margin',
          unit: ['px', 'em', '%'],
          responsive: true,
          tab: 'style',
          selector:
            '{{SELECTOR}} .pb-testimonial-name { margin: {{data.name_margin}}; }',
          section: 'Name',
        },
        desgn_color: {
          type: 'color',
          title: 'Color',
          tab: 'style',
          section: 'Designation',
          selector:
            '{{SELECTOR}} .pb-testimonial-designation { color: {{data.desgn_color}}; }',
        },
        desgn_fontstyle: {
          type: 'typography',
          title: 'Typography',
          std: {
            fontFamily: '',
            fontSize: {
              md: '12px',
              sm: '',
              xs: '',
            },
            lineHeight: {
              md: '',
              sm: '',
              xs: '',
            },
            fontWeight: '700',
            textTransform: '',
            fontStyle: '',
            letterSpacing: {
              md: '',
              sm: '',
              xs: '',
            },
          },
          selector: '{{SELECTOR}} .pb-testimonial-designation',
          section: 'Designation',
          tab: 'style',
        },
        intro_color: {
          type: 'color',
          title: 'Color',
          tab: 'style',
          section: 'Message text',
          selector:
            '{{SELECTOR}} .pb-testimonial-introtext { color: {{data.intro_color}}; }',
        },
        intro_fontstyle: {
          type: 'typography',
          title: 'Typography',
          std: {
            fontFamily: '',
            fontSize: {
              md: '18px',
              sm: '',
              xs: '',
            },
            lineHeight: {
              md: '',
              sm: '',
              xs: '',
            },
            fontWeight: '700',
            textTransform: '',
            fontStyle: '',
            letterSpacing: {
              md: '',
              sm: '',
              xs: '',
            },
          },
          selector:
            '{{SELECTOR}} .pb-testimonial-introtext, {{SELECTOR}} .testimonial-layout-four .pb-testimonial-introtext',
          section: 'Message text',
          tab: 'style',
        },
        message_margin: {
          type: 'dimension',
          title: 'Margin',
          unit: ['px', 'em', '%'],
          responsive: true,
          tab: 'style',
          selector:
            '{{SELECTOR}} .pb-testimonial-introtext, {{SELECTOR}} .testimonial-layout-four .pb-testimonial-introtext { margin: {{data.message_margin}}; }',
          section: 'Message text',
        },
        quote_color: {
          type: 'color',
          title: 'Color',
          tab: 'style',
          section: 'Quote Style',
          depends: [['testimonial_layout', '=', ['four']]],
          selector:
            '{{SELECTOR}} .testimonial-layout-four .pb-testimonial-quote { color: {{data.quote_color}}; }',
        },
        quote_fontsize: {
          type: 'slider',
          title: 'Size',
          unit: ['px', '%', 'em'],
          range: {
            em: {
              min: 0,
              max: 20,
              step: 0.1,
            },
            px: {
              min: 0,
              max: 300,
              step: 1,
            },
            '%': {
              min: 0,
              max: 100,
              step: 1,
            },
          },
          std: {
            md: '48px',
            sm: '',
            xs: '',
          },
          responsive: true,
          tab: 'style',
          section: 'Quote Style',
          depends: [['testimonial_layout', '=', ['four']]],
          selector:
            '{{SELECTOR}} .testimonial-layout-four .pb-testimonial-quote { font-size: {{data.quote_fontsize}}; }',
        },
        quote_line_height: {
          type: 'slider',
          title: 'Line height',
          unit: ['px', '%', 'em'],
          range: {
            em: {
              min: 0,
              max: 20,
              step: 0.1,
            },
            px: {
              min: 0,
              max: 300,
              step: 1,
            },
            '%': {
              min: 0,
              max: 100,
              step: 1,
            },
          },
          std: {
            md: '48px',
            sm: '',
            xs: '',
          },
          responsive: true,
          tab: 'style',
          section: 'Quote Style',
          depends: [['testimonial_layout', '=', ['four']]],
          selector:
            '{{SELECTOR}} .testimonial-layout-four .pb-testimonial-quote { line-height: {{data.quote_line_height}}; }',
        },
        wrap_background: {
          type: 'background',
          title: '',
          selector: '{{SELECTOR}} .pb-testimonial-addon-content',
          tab: 'style',
          section: 'Testimonial Wrapper',
        },
        wrap_border: {
          type: 'border',
          title: 'Border',
          std: {
            borderWidth: {
              top: '0px',
              right: '0px',
              bottom: '0px',
              left: '0px',
            },
            borderStyle: 'solid',
            borderColor: '#cccccc',
          },
          tab: 'style',
          section: 'Testimonial Wrapper',
          selector: '{{SELECTOR}} .pb-testimonial-addon-content',
        },
        wrap_radius: {
          type: 'dimension',
          title: 'Border radius',
          unit: ['px', '%', 'em'],
          responsive: true,
          tab: 'style',
          section: 'Testimonial Wrapper',
          selector:
            '{{SELECTOR}} .pb-testimonial-addon-content { border-radius: {{data.wrap_radius}}; }',
        },
        wrap_boxshadow: {
          type: 'boxshadow',
          title: 'Box shadow',
          std: {
            shadowValue: {
              top: '2px',
              right: '2px',
              bottom: '2px',
              left: '2px',
            },
            shadowColor: '#ffffff',
          },
          selector: '{{SELECTOR}} .pb-testimonial-addon-content',
          tab: 'style',
          section: 'Testimonial Wrapper',
        },
        wrap_hover_boxshadow: {
          type: 'boxshadow',
          title: 'hover box shadow',
          std: {
            shadowValue: {
              top: '2px',
              right: '2px',
              bottom: '2px',
              left: '2px',
            },
            shadowColor: '#ffffff',
          },
          selector: '{{SELECTOR}} .pb-testimonial-addon-content:hover',
          tab: 'style',
          section: 'Testimonial Wrapper',
        },
        wrap_padding: {
          type: 'dimension',
          title: 'Padding',
          unit: ['px', 'em', '%'],
          responsive: true,
          tab: 'style',
          selector:
            '{{SELECTOR}} .pb-testimonial-addon-content { padding: {{data.wrap_padding}}; }',
          section: 'Testimonial Wrapper',
        },
      },
    },
    defaultAddon: true,
    group: 'basic',
    js_template: true,
  },
  pb_testimonial_carousel: {
    type: 'content',
    addon_name: 'pb_testimonial_carousel',
    title: 'Testimonial Carousel',
    name: 'pb_testimonial_carousel',
    category: '',
    Editor: TestimonialCarousel,
    Preview: TestimonialCarousel,
    styleJSON: {
      testimonial_align:
        '{{SELECTOR}} .pb-testimonial-carousel-addon-content{ text-align: {{data.testimonial_align}}; }',
      img_width:
        '{{SELECTOR}} .pb-testimonial-addon-img { width: {{data.img_width}}; }',
      img_height:
        '{{SELECTOR}} .pb-testimonial-addon-img { height: {{data.img_height}}; }',
      img_radius:
        '{{SELECTOR}} .pb-testimonial-addon-img { border-radius: {{data.img_radius}}; }',
      image_border:
        '{{SELECTOR}} .pb-testimonial-addon-img{{data.image_border}}',
      image_margin:
        '{{SELECTOR}} .pb-testimonial-addon-img { margin: {{data.image_margin}}; }',
      name_color:
        '{{SELECTOR}} .pb-testimonial-name, {{SELECTOR}} .pb-testimonial-name a { color: {{data.name_color}}; }',
      name_fontstyle:
        '{{SELECTOR}} .pb-testimonial-name{{data.name_fontstyle}}',
      name_margin:
        '{{SELECTOR}} .pb-testimonial-name { margin: {{data.name_margin}}; }',
      desgn_color:
        '{{SELECTOR}} .pb-testimonial-designation { color: {{data.desgn_color}}; }',
      desgn_fontstyle:
        '{{SELECTOR}} .pb-testimonial-designation{{data.desgn_fontstyle}}',
      intro_color:
        '{{SELECTOR}} .pb-testimonial-introtext { color: {{data.intro_color}}; }',
      intro_fontstyle:
        '{{SELECTOR}} .pb-testimonial-introtext{{data.intro_fontstyle}}',
      message_margin:
        '{{SELECTOR}} .pb-testimonial-introtext { margin: {{data.message_margin}}; }',
      quote_color:
        '{{SELECTOR}} .testimonial-layout-layoutfour .pb-testimonial-quote { color: {{data.quote_color}}; }',
      quote_fontstyle:
        '{{SELECTOR}} .testimonial-layout-layoutfour .pb-testimonial-quote{{data.quote_fontstyle}}',
      dot_position:
        '{{SELECTOR}} .pb-testimonial-content-carousel .slick-dots { bottom: {{data.dot_position}}; }',
      dot_bg_color:
        '{{SELECTOR}} .pb-testimonial-content-carousel .slick-dots li button { background: {{data.dot_bg_color}}; }',
      dot_bg_hcolor:
        '{{SELECTOR}} .pb-testimonial-content-carousel .slick-dots li.slick-active button,{{SELECTOR}} .pb-testimonial-content-carousel .slick-dots li button:hover { background: {{data.dot_bg_hcolor}}; }',
      dot_width:
        '{{SELECTOR}} .pb-testimonial-content-carousel .slick-dots li button, {{SELECTOR}} .pb-testimonial-content-carousel .slick-dots li { width: {{data.dot_width}}; }',
      dot_height:
        '{{SELECTOR}} .pb-testimonial-content-carousel .slick-dots li button, {{SELECTOR}} .pb-testimonial-content-carousel .slick-dots li { height: {{data.dot_height}}; }',
      dot_margin:
        '{{SELECTOR}} .pb-testimonial-content-carousel .slick-dots li { margin: {{data.dot_margin}}; }',
      dot_radius:
        '{{SELECTOR}} .pb-testimonial-content-carousel .slick-dots li button { border-radius: {{data.dot_radius}}; }',
      nav_position:
        '{{SELECTOR}} .pb-testimonial-carousel-addon-content .pb-testimonial-content-carousel .pb-carousel-prev,{{SELECTOR}} .pb-testimonial-carousel-addon-content .pb-testimonial-content-carousel .pb-carousel-next { top: {{data.nav_position}}; }',
      nav_left_position:
        '{{SELECTOR}} .pb-testimonial-carousel-addon-content .pb-testimonial-content-carousel .pb-carousel-next { left: {{data.nav_left_position}}; }',
      nav_right_position:
        '{{SELECTOR}} .pb-testimonial-carousel-addon-content .pb-testimonial-content-carousel .pb-carousel-prev { right: {{data.nav_right_position}}; }',
      nav_font_size:
        '{{SELECTOR}} .pb-testimonial-content-carousel .pb-carousel-next, {{SELECTOR}} .pb-testimonial-content-carousel .pb-carousel-prev { font-size: {{data.nav_font_size}}; }',
      nav_color:
        '{{SELECTOR}} .pb-testimonial-content-carousel .pb-carousel-prev, {{SELECTOR}} .pb-testimonial-content-carousel .pb-carousel-next { color: {{data.nav_color}}; }',
      nav_bg_color:
        '{{SELECTOR}} .pb-testimonial-content-carousel .pb-carousel-prev, {{SELECTOR}} .pb-testimonial-content-carousel .pb-carousel-next { background: {{data.nav_bg_color}}; }',
      nav_hcolor:
        '{{SELECTOR}} .pb-testimonial-content-carousel .pb-carousel-prev:hover, {{SELECTOR}} .pb-testimonial-content-carousel .pb-carousel-next:hover { color: {{data.nav_hcolor}}; }',
      nav_bg_hcolor:
        '{{SELECTOR}} .pb-testimonial-content-carousel .pb-carousel-prev:hover, {{SELECTOR}} .pb-testimonial-content-carousel .pb-carousel-next:hover { background: {{data.nav_bg_hcolor}}; }',
      nav_width:
        '{{SELECTOR}} .pb-testimonial-content-carousel .pb-carousel-prev, {{SELECTOR}} .pb-testimonial-content-carousel .pb-carousel-next { width: {{data.nav_width}}; }',
      nav_height:
        '{{SELECTOR}} .pb-testimonial-content-carousel .pb-carousel-prev, {{SELECTOR}} .pb-testimonial-content-carousel .pb-carousel-next { height: {{data.nav_height}}; }{{SELECTOR}} .pb-testimonial-content-carousel .pb-carousel-prev, {{SELECTOR}} .pb-testimonial-content-carousel .pb-carousel-next { line-height: {{data.nav_height}}; }',
      nav_radius:
        '{{SELECTOR}} .pb-testimonial-content-carousel .pb-carousel-prev, {{SELECTOR}} .pb-testimonial-content-carousel .pb-carousel-next { border-radius: {{data.nav_radius}}; }',
      nav_border:
        '{{SELECTOR}} .pb-testimonial-content-carousel .pb-carousel-prev,{{SELECTOR}} .pb-testimonial-content-carousel .pb-carousel-next{{data.nav_border}}',
      border_hcolor:
        '{{SELECTOR}} .pb-testimonial-content-carousel .pb-carousel-prev:hover,{{SELECTOR}} .pb-testimonial-content-carousel .pb-carousel-next:hover{{data.border_hcolor}}',
      wrap_background:
        '{{SELECTOR}} .pb-testimonial-content .pb-testimonial-content-in',
      wrap_border:
        '{{SELECTOR}} .pb-testimonial-content .pb-testimonial-content-in{{data.wrap_border}}',
      wrap_radius:
        '{{SELECTOR}} .pb-testimonial-content .pb-testimonial-content-in { border-radius: {{data.wrap_radius}}; }',
      wrap_boxshadow:
        '{{SELECTOR}} .pb-testimonial-content.slick-active .pb-testimonial-content-in{{data.wrap_boxshadow}}',
      wrap_padding:
        '{{SELECTOR}} .pb-testimonial-content .pb-testimonial-content-in { padding: {{data.wrap_padding}}; }',
      wrap_margin:
        '{{SELECTOR}} .pb-testimonial-content-carousel .slick-slide { margin-right: {{data.wrap_margin}}; }{{SELECTOR}} .pb-testimonial-content-carousel .slick-list { margin-right: -{{data.wrap_margin}}; }',
      addon_z_index:
        '.pb-builder-container {{SELECTOR}}{ z-index: {{data.addon_z_index}}; }',
      addon_padding: '{{SELECTOR}}{ padding: {{data.addon_padding}}; }',
      addon_margin: '{{SELECTOR}}{ margin: {{data.addon_margin}}; }',
      addon_background: '{{SELECTOR}}',
      addon_color_opacity: '{{SELECTOR}}:after{{data.addon_color_opacity}}',
      addon_opacity:
        '{{SELECTOR}}:after{ content: " "; z-index: 0; display: block; position: absolute; height: 100%; top: 0; left: 0; right: 0; opacity:{{data.addon_opacity}}; }',
      addon_color_blend:
        '{{SELECTOR}}:after{ mix-blend-mode:{{data.addon_color_blend}}; }',
      addon_border: '{{SELECTOR}}{{data.addon_border}}',
      addon_border_hover: '{{SELECTOR}}:hover{{data.addon_border_hover}}',
      addon_border_radius:
        '{{SELECTOR}}, {{SELECTOR}}:after{ border-radius: {{data.addon_border_radius}}; overflow:hidden; }',
      addon_border_radius_hover:
        '{{SELECTOR}}:hover, {{SELECTOR}}:hover:after{ border-radius: {{data.addon_border_radius_hover}};overflow:hidden; }',
      addon_boxshadow: '{{SELECTOR}}{{data.addon_boxshadow}}',
      addon_boxshadow_hover: '{{SELECTOR}}:hover{{data.addon_boxshadow_hover}}',
      addon_wrap_opacity:
        '{{SELECTOR}} .pb-addon{ opacity:{{data.addon_wrap_opacity}}; }',
      addon_wrap_opacity_hover:
        '{{SELECTOR}} .pb-addon:hover{ opacity:{{data.addon_wrap_opacity_hover}}; }',
      addon_display: '{{SELECTOR}}{ display: {{data.addon_display}} ; }',
    },
    visibility: true,
    icon: 'pb-font-full-slider',
    attr: {
      general: {
        testimonial_layout: {
          type: 'radioimage',
          title: 'Layout',
          values: {
            layoutone: '/img/testimonial/testimonial-img1.png',
            layouttwo: '/img/testimonial/testimonial-img2.png',
            layoutthree: '/img/testimonial/testimonial-img3.png',
            layoutfour: '/img/testimonial/testimonial-img4.png',
          },
          std: 'layoutone',
        },
        testimonial_list: {
          title: 'Testimonial Item',
          type: 'repeatable',
          label: 'name',
          std: [
            {
              image: {
                url: '/img/placeholder/pb-small.jpg',
              },
              name: 'Michel Clark',
              name_link: {
                link: '#',
              },
              designation: 'Developer',
              introtext:
                'Reprehenderit enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor',
            },
            {
              image: {
                url: '/img/placeholder/pb-small.jpg',
              },
              name: 'John Doe',
              name_link: {
                link: '#',
              },
              designation: 'Designer',
              introtext:
                'Reprehenderit enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor',
            },
            {
              image: {
                url: '/img/placeholder/pb-small.jpg',
              },
              name: 'Stephen Fleming',
              name_link: {
                link: '#',
              },
              designation: 'Founder',
              introtext:
                'Reprehenderit enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor',
            },
          ],
          attr: {
            image: {
              type: 'media',
              title: 'Image',
              std: {
                url: '/img/placeholder/pb-small.jpg',
              },
            },
            name: {
              type: 'text',
              title: 'Name',
              std: 'John Doe',
            },
            name_link: {
              type: 'link',
              title: 'Link',
              std: {
                link: '#',
              },
            },
            designation: {
              type: 'text',
              title: 'Designation',
              std: 'Designer',
            },
            introtext: {
              type: 'textarea',
              title: 'Message Text',
              std: 'She was bouncing away, when a cry from the two women, who had turned towards the bed, caused her to look round.',
            },
          },
        },
        autoplay_option: {
          type: 'switch',
          title: 'Autoplay',
          std: '1',
          section: 'Slide Settings',
        },
        speed_option: {
          type: 'number',
          title: 'Animated Speed',
          std: '600',
          section: 'Slide Settings',
          depends: [['autoplay_option', '=', '1']],
        },
        control_dots: {
          type: 'switch',
          title: 'Control Dots',
          std: '1',
          section: 'Slide Settings',
        },
        control_nav: {
          type: 'switch',
          title: 'Control Nav',
          std: '0',
          section: 'Slide Settings',
        },
        control_nav_style: {
          type: 'select',
          title: 'Nav Style',
          values: {
            nav_style1: 'Nav Style 1',
            nav_style2: 'Nav Style 2',
            nav_style3: 'Nav Style 3',
            nav_style4: 'Nav Style 4',
          },
          std: 'nav_style1',
          depends: [['control_nav', '!=', '']],
          section: 'Slide Settings',
        },
        column: {
          type: 'select',
          title: 'Column',
          values: {
            '1': 'Column 1',
            '2': 'Column 2',
            '3': 'Column 3',
            '4': 'Column 4',
            '5': 'Column 5',
            '6': 'Column 6',
          },
          std: '1',
          section: 'Slide Settings',
        },
        testimonial_align: {
          type: 'alignment',
          title: 'Testimonial alignment',
          responsive: true,
          section: 'Slide Settings',
          selector:
            '{{SELECTOR}} .pb-testimonial-carousel-addon-content{ text-align: {{data.testimonial_align}}; }',
        },
        img_width: {
          type: 'slider',
          title: 'Width',
          std: {
            md: '50px',
            sm: '',
            xs: '',
          },
          unit: ['px', '%', 'em'],
          range: {
            em: {
              min: 0,
              max: 25,
              step: 0.1,
            },
            px: {
              min: 0,
              max: 250,
              step: 1,
            },
            '%': {
              min: 0,
              max: 100,
              step: 1,
            },
          },
          responsive: true,
          tab: 'style',
          section: 'Image',
          selector:
            '{{SELECTOR}} .pb-testimonial-addon-img { width: {{data.img_width}}; }',
        },
        img_height: {
          type: 'slider',
          title: 'Height',
          unit: ['px', '%', 'em'],
          range: {
            em: {
              min: 0,
              max: 25,
              step: 0.1,
            },
            px: {
              min: 0,
              max: 250,
              step: 1,
            },
            '%': {
              min: 0,
              max: 100,
              step: 1,
            },
          },
          std: {
            md: '50px',
            sm: '',
            xs: '',
          },
          responsive: true,
          tab: 'style',
          section: 'Image',
          selector:
            '{{SELECTOR}} .pb-testimonial-addon-img { height: {{data.img_height}}; }',
        },
        img_radius: {
          type: 'dimension',
          title: 'Border Radius',
          unit: ['px', '%', 'em'],
          std: {
            md: {
              top: '100px',
              right: '100px',
              bottom: '100px',
              left: '100px',
            },
            sm: {
              top: '',
              right: '',
              bottom: '',
              left: '',
            },
            xs: {
              top: '',
              right: '',
              bottom: '',
              left: '',
            },
          },
          responsive: true,
          tab: 'style',
          section: 'Image',
          selector:
            '{{SELECTOR}} .pb-testimonial-addon-img { border-radius: {{data.img_radius}}; }',
        },
        image_border: {
          type: 'border',
          title: 'Border',
          std: {
            borderWidth: {
              top: '0px',
              right: '0px',
              bottom: '0px',
              left: '0px',
            },
            borderStyle: 'solid',
            borderColor: '#cccccc',
          },
          tab: 'style',
          section: 'Image',
          selector: '{{SELECTOR}} .pb-testimonial-addon-img',
        },
        image_margin: {
          type: 'dimension',
          title: 'Margin',
          unit: ['px', 'em', '%'],
          responsive: true,
          tab: 'style',
          section: 'Image',
          selector:
            '{{SELECTOR}} .pb-testimonial-addon-img { margin: {{data.image_margin}}; }',
        },
        name_color: {
          type: 'color',
          title: 'color',
          tab: 'style',
          section: 'Name',
          selector:
            '{{SELECTOR}} .pb-testimonial-name, {{SELECTOR}} .pb-testimonial-name a { color: {{data.name_color}}; }',
        },
        name_fontstyle: {
          type: 'typography',
          title: 'Typography',
          std: {
            fontFamily: '',
            fontSize: {
              md: '18px',
              sm: '',
              xs: '',
            },
            lineHeight: {
              md: '',
              sm: '',
              xs: '',
            },
            fontWeight: '700',
            textTransform: '',
            fontStyle: '',
            letterSpacing: {
              md: '',
              sm: '',
              xs: '',
            },
          },
          selector: '{{SELECTOR}} .pb-testimonial-name',
          section: 'Name',
          tab: 'style',
        },
        name_margin: {
          type: 'dimension',
          title: 'Margin',
          unit: ['px', 'em', '%'],
          responsive: true,
          tab: 'style',
          selector:
            '{{SELECTOR}} .pb-testimonial-name { margin: {{data.name_margin}}; }',
          section: 'Name',
        },
        desgn_color: {
          type: 'color',
          title: 'Color',
          tab: 'style',
          section: 'Designation',
          selector:
            '{{SELECTOR}} .pb-testimonial-designation { color: {{data.desgn_color}}; }',
        },
        desgn_fontstyle: {
          type: 'typography',
          title: 'Typography',
          std: {
            fontFamily: '',
            fontSize: {
              md: '12px',
              sm: '',
              xs: '',
            },
            lineHeight: {
              md: '',
              sm: '',
              xs: '',
            },
            fontWeight: '700',
            textTransform: '',
            fontStyle: '',
            letterSpacing: {
              md: '',
              sm: '',
              xs: '',
            },
          },
          selector: '{{SELECTOR}} .pb-testimonial-designation',
          section: 'Designation',
          tab: 'style',
        },
        intro_color: {
          type: 'color',
          title: 'Text color',
          tab: 'style',
          section: 'Message text',
          selector:
            '{{SELECTOR}} .pb-testimonial-introtext { color: {{data.intro_color}}; }',
        },
        intro_fontstyle: {
          type: 'typography',
          title: 'Typography',
          std: {
            fontFamily: '',
            fontSize: {
              md: '18px',
              sm: '',
              xs: '',
            },
            lineHeight: {
              md: '',
              sm: '',
              xs: '',
            },
            fontWeight: '700',
            textTransform: '',
            fontStyle: '',
            letterSpacing: {
              md: '',
              sm: '',
              xs: '',
            },
          },
          selector: '{{SELECTOR}} .pb-testimonial-introtext',
          section: 'Message text',
          tab: 'style',
        },
        message_margin: {
          type: 'dimension',
          title: 'Margin',
          unit: ['px', 'em', '%'],
          responsive: true,
          tab: 'style',
          selector:
            '{{SELECTOR}} .pb-testimonial-introtext { margin: {{data.message_margin}}; }',
          section: 'Message text',
        },
        quote_color: {
          type: 'color',
          title: 'Color',
          tab: 'style',
          section: 'Quote Style',
          depends: [['testimonial_layout', '=', ['layoutfour']]],
          selector:
            '{{SELECTOR}} .testimonial-layout-layoutfour .pb-testimonial-quote { color: {{data.quote_color}}; }',
        },
        quote_fontstyle: {
          type: 'typography',
          title: 'Typography',
          std: {
            fontFamily: '',
            fontSize: {
              md: '18px',
              sm: '',
              xs: '',
            },
            lineHeight: {
              md: '',
              sm: '',
              xs: '',
            },
            fontWeight: '700',
            textTransform: '',
            fontStyle: '',
            letterSpacing: {
              md: '',
              sm: '',
              xs: '',
            },
          },
          selector:
            '{{SELECTOR}} .testimonial-layout-layoutfour .pb-testimonial-quote',
          section: 'Quote Style',
          depends: [['testimonial_layout', '=', ['layoutfour']]],
          tab: 'style',
        },
        dot_position: {
          type: 'slider',
          title: 'Position',
          responsive: true,
          max: 550,
          min: -200,
          range: {
            em: {
              min: -20,
              max: 50,
              step: 0.1,
            },
            px: {
              min: -220,
              max: 550,
              step: 1,
            },
            '%': {
              min: -100,
              max: 100,
              step: 1,
            },
          },
          tab: 'style',
          std: {
            md: '',
            sm: '',
            xs: '',
          },
          unit: ['%', 'px', 'em'],
          section: 'Dots Style',
          depends: [['control_dots', '!=', '']],
          selector:
            '{{SELECTOR}} .pb-testimonial-content-carousel .slick-dots { bottom: {{data.dot_position}}; }',
        },
        dot_bg_color: {
          type: 'color',
          title: 'background',
          tab: 'style',
          section: 'Dots Style',
          selector:
            '{{SELECTOR}} .pb-testimonial-content-carousel .slick-dots li button { background: {{data.dot_bg_color}}; }',
        },
        dot_bg_hcolor: {
          type: 'color',
          title: 'hover/active background',
          tab: 'style',
          section: 'Dots Style',
          selector:
            '{{SELECTOR}} .pb-testimonial-content-carousel .slick-dots li.slick-active button,{{SELECTOR}} .pb-testimonial-content-carousel .slick-dots li button:hover { background: {{data.dot_bg_hcolor}}; }',
        },
        dot_width: {
          type: 'slider',
          title: 'Width',
          unit: ['px', '%', 'em'],
          std: {
            md: '16px',
            sm: '',
            xs: '',
          },
          range: {
            em: {
              min: 0,
              max: 5,
              step: 0.1,
            },
            px: {
              min: 0,
              max: 50,
              step: 1,
            },
            '%': {
              min: 0,
              max: 100,
              step: 1,
            },
          },
          responsive: true,
          tab: 'style',
          section: 'Dots Style',
          selector:
            '{{SELECTOR}} .pb-testimonial-content-carousel .slick-dots li button, {{SELECTOR}} .pb-testimonial-content-carousel .slick-dots li { width: {{data.dot_width}}; }',
        },
        dot_height: {
          type: 'slider',
          title: 'Height',
          unit: ['px', '%', 'em'],
          std: {
            md: '16px',
            sm: '',
            xs: '',
          },
          range: {
            em: {
              min: 0,
              max: 5,
              step: 0.1,
            },
            px: {
              min: 0,
              max: 50,
              step: 1,
            },
            '%': {
              min: 0,
              max: 100,
              step: 1,
            },
          },
          responsive: true,
          tab: 'style',
          section: 'Dots Style',
          selector:
            '{{SELECTOR}} .pb-testimonial-content-carousel .slick-dots li button, {{SELECTOR}} .pb-testimonial-content-carousel .slick-dots li { height: {{data.dot_height}}; }',
        },
        dot_margin: {
          type: 'dimension',
          title: 'Dot Margin',
          tab: 'style',
          section: 'Dots Style',
          responsive: true,
          unit: ['px', 'em', '%'],
          selector:
            '{{SELECTOR}} .pb-testimonial-content-carousel .slick-dots li { margin: {{data.dot_margin}}; }',
        },
        dot_radius: {
          type: 'dimension',
          title: 'Border Radius',
          unit: ['px', '%', 'em'],
          std: {
            md: {
              top: '100px',
              right: '100px',
              bottom: '100px',
              left: '100px',
            },
            sm: {
              top: '',
              right: '',
              bottom: '',
              left: '',
            },
            xs: {
              top: '',
              right: '',
              bottom: '',
              left: '',
            },
          },
          responsive: true,
          tab: 'style',
          section: 'Dots Style',
          selector:
            '{{SELECTOR}} .pb-testimonial-content-carousel .slick-dots li button { border-radius: {{data.dot_radius}}; }',
        },
        nav_position: {
          type: 'slider',
          title: 'Position',
          responsive: true,
          unit: ['%', 'px', 'em'],
          range: {
            em: {
              min: 0,
              max: 20,
              step: 0.1,
            },
            px: {
              min: 0,
              max: 550,
              step: 1,
            },
            '%': {
              min: 0,
              max: 100,
              step: 1,
            },
          },
          std: {
            md: '0px',
            sm: '',
            xs: '',
          },
          tab: 'style',
          section: 'Nav Style',
          depends: [['control_nav', '!=', '']],
          selector:
            '{{SELECTOR}} .pb-testimonial-carousel-addon-content .pb-testimonial-content-carousel .pb-carousel-prev,{{SELECTOR}} .pb-testimonial-carousel-addon-content .pb-testimonial-content-carousel .pb-carousel-next { top: {{data.nav_position}}; }',
        },
        nav_left_position: {
          type: 'slider',
          title: 'Prev Position',
          unit: ['px', 'em', '%'],
          range: {
            em: {
              min: -10,
              max: 20,
              step: 0.1,
            },
            px: {
              min: -200,
              max: 1000,
              step: 1,
            },
            '%': {
              min: 0,
              max: 100,
              step: 1,
            },
          },
          std: {
            md: '',
            sm: '',
            xs: '',
          },
          responsive: true,
          tab: 'style',
          section: 'Nav Style',
          depends: [['control_nav_style', '=', ['nav_style1', 'nav_style2']]],
          selector:
            '{{SELECTOR}} .pb-testimonial-carousel-addon-content .pb-testimonial-content-carousel .pb-carousel-next { left: {{data.nav_left_position}}; }',
        },
        nav_right_position: {
          type: 'slider',
          title: 'Next Position',
          responsive: true,
          std: {
            md: '',
            sm: '',
            xs: '',
          },
          tab: 'style',
          unit: ['px', 'em', '%'],
          range: {
            em: {
              min: -10,
              max: 20,
              step: 0.1,
            },
            px: {
              min: -200,
              max: 1000,
              step: 1,
            },
            '%': {
              min: 0,
              max: 100,
              step: 1,
            },
          },
          section: 'Nav Style',
          depends: [['control_nav_style', '=', ['nav_style1', 'nav_style3']]],
          selector:
            '{{SELECTOR}} .pb-testimonial-carousel-addon-content .pb-testimonial-content-carousel .pb-carousel-prev { right: {{data.nav_right_position}}; }',
        },
        nav_font_size: {
          type: 'slider',
          title: 'Nav Font Size',
          responsive: true,
          std: {
            md: '',
            sm: '',
            xs: '',
          },
          tab: 'style',
          unit: ['px', 'em', '%'],
          range: {
            em: {
              min: 0,
              max: 5,
              step: 0.1,
            },
            px: {
              min: 0,
              max: 150,
              step: 1,
            },
            '%': {
              min: 0,
              max: 100,
              step: 1,
            },
          },
          section: 'Nav Style',
          selector:
            '{{SELECTOR}} .pb-testimonial-content-carousel .pb-carousel-next, {{SELECTOR}} .pb-testimonial-content-carousel .pb-carousel-prev { font-size: {{data.nav_font_size}}; }',
        },
        nav_color: {
          type: 'color',
          title: 'Color',
          tab: 'style',
          section: 'Nav Style',
          depends: [['control_nav', '!=', '']],
          selector:
            '{{SELECTOR}} .pb-testimonial-content-carousel .pb-carousel-prev, {{SELECTOR}} .pb-testimonial-content-carousel .pb-carousel-next { color: {{data.nav_color}}; }',
        },
        nav_bg_color: {
          type: 'color',
          title: 'background color',
          tab: 'style',
          section: 'Nav Style',
          depends: [['control_nav', '!=', '']],
          selector:
            '{{SELECTOR}} .pb-testimonial-content-carousel .pb-carousel-prev, {{SELECTOR}} .pb-testimonial-content-carousel .pb-carousel-next { background: {{data.nav_bg_color}}; }',
        },
        nav_hcolor: {
          type: 'color',
          title: 'hover color',
          tab: 'style',
          section: 'Nav Style',
          depends: [['control_nav', '!=', '']],
          selector:
            '{{SELECTOR}} .pb-testimonial-content-carousel .pb-carousel-prev:hover, {{SELECTOR}} .pb-testimonial-content-carousel .pb-carousel-next:hover { color: {{data.nav_hcolor}}; }',
        },
        nav_bg_hcolor: {
          type: 'color',
          title: 'background hover color',
          tab: 'style',
          section: 'Nav Style',
          depends: [['control_nav', '!=', '']],
          selector:
            '{{SELECTOR}} .pb-testimonial-content-carousel .pb-carousel-prev:hover, {{SELECTOR}} .pb-testimonial-content-carousel .pb-carousel-next:hover { background: {{data.nav_bg_hcolor}}; }',
        },
        nav_width: {
          type: 'slider',
          title: 'Width',
          unit: ['px', '%', 'em'],
          range: {
            em: {
              min: 0,
              max: 25,
              step: 0.1,
            },
            px: {
              min: 0,
              max: 250,
              step: 1,
            },
            '%': {
              min: 0,
              max: 100,
              step: 1,
            },
          },
          std: {
            md: '30px',
            sm: '',
            xs: '',
          },
          responsive: true,
          tab: 'style',
          section: 'Nav Style',
          depends: [['control_nav', '!=', '']],
          selector:
            '{{SELECTOR}} .pb-testimonial-content-carousel .pb-carousel-prev, {{SELECTOR}} .pb-testimonial-content-carousel .pb-carousel-next { width: {{data.nav_width}}; }',
        },
        nav_height: {
          type: 'slider',
          title: 'Height',
          unit: ['px', '%', 'em'],
          range: {
            em: {
              min: 0,
              max: 25,
              step: 0.1,
            },
            px: {
              min: 0,
              max: 250,
              step: 1,
            },
            '%': {
              min: 0,
              max: 100,
              step: 1,
            },
          },
          std: {
            md: '30px',
            sm: '',
            xs: '',
          },
          responsive: true,
          tab: 'style',
          section: 'Nav Style',
          depends: [['control_nav', '!=', '']],
          selector: [
            '{{SELECTOR}} .pb-testimonial-content-carousel .pb-carousel-prev, {{SELECTOR}} .pb-testimonial-content-carousel .pb-carousel-next { height: {{data.nav_height}}; }',
            '{{SELECTOR}} .pb-testimonial-content-carousel .pb-carousel-prev, {{SELECTOR}} .pb-testimonial-content-carousel .pb-carousel-next { line-height: {{data.nav_height}}; }',
          ],
        },
        nav_radius: {
          type: 'dimension',
          title: 'Border Radius',
          unit: ['px', '%', 'em'],
          std: {
            md: {
              top: '100px',
              right: '100px',
              bottom: '100px',
              left: '100px',
            },
            sm: {
              top: '',
              right: '',
              bottom: '',
              left: '',
            },
            xs: {
              top: '',
              right: '',
              bottom: '',
              left: '',
            },
          },
          responsive: true,
          tab: 'style',
          section: 'Nav Style',
          depends: [['control_nav', '!=', '']],
          selector:
            '{{SELECTOR}} .pb-testimonial-content-carousel .pb-carousel-prev, {{SELECTOR}} .pb-testimonial-content-carousel .pb-carousel-next { border-radius: {{data.nav_radius}}; }',
        },
        nav_border: {
          type: 'border',
          title: 'Border',
          std: {
            borderWidth: {
              top: '0px',
              right: '0px',
              bottom: '0px',
              left: '0px',
            },
            borderStyle: 'solid',
            borderColor: '#cccccc',
          },
          tab: 'style',
          section: 'Nav Style',
          depends: [['control_nav', '!=', '']],
          selector:
            '{{SELECTOR}} .pb-testimonial-content-carousel .pb-carousel-prev,{{SELECTOR}} .pb-testimonial-content-carousel .pb-carousel-next',
        },
        border_hcolor: {
          type: 'border',
          title: 'Border hover color',
          std: {
            borderWidth: {
              top: '0px',
              right: '0px',
              bottom: '0px',
              left: '0px',
            },
            borderStyle: 'solid',
            borderColor: '#cccccc',
          },
          tab: 'style',
          section: 'Nav Style',
          depends: [['control_nav', '!=', '']],
          selector:
            '{{SELECTOR}} .pb-testimonial-content-carousel .pb-carousel-prev:hover,{{SELECTOR}} .pb-testimonial-content-carousel .pb-carousel-next:hover',
        },
        wrap_background: {
          type: 'background',
          title: '',
          selector:
            '{{SELECTOR}} .pb-testimonial-content .pb-testimonial-content-in',
          tab: 'style',
          section: 'Testimonial Wrapper',
        },
        wrap_border: {
          type: 'border',
          title: 'Border',
          std: {
            borderWidth: {
              top: '0px',
              right: '0px',
              bottom: '0px',
              left: '0px',
            },
            borderStyle: 'solid',
            borderColor: '#cccccc',
          },
          tab: 'style',
          section: 'Testimonial Wrapper',
          selector:
            '{{SELECTOR}} .pb-testimonial-content .pb-testimonial-content-in',
        },
        wrap_radius: {
          type: 'dimension',
          title: 'Border radius',
          unit: ['px', '%', 'em'],
          responsive: true,
          tab: 'style',
          section: 'Testimonial Wrapper',
          selector:
            '{{SELECTOR}} .pb-testimonial-content .pb-testimonial-content-in { border-radius: {{data.wrap_radius}}; }',
        },
        wrap_boxshadow: {
          type: 'boxshadow',
          title: 'Box shadow',
          std: {
            shadowValue: {
              top: '0px',
              right: '0px',
              bottom: '5px',
              left: '0px',
            },
            shadowColor: 'rgba(0,0,0,.3)',
          },
          tab: 'style',
          section: 'Testimonial Wrapper',
          selector:
            '{{SELECTOR}} .pb-testimonial-content.slick-active .pb-testimonial-content-in',
        },
        wrap_padding: {
          type: 'dimension',
          title: 'Padding',
          unit: ['px', 'em', '%'],
          responsive: true,
          tab: 'style',
          selector:
            '{{SELECTOR}} .pb-testimonial-content .pb-testimonial-content-in { padding: {{data.wrap_padding}}; }',
          section: 'Testimonial Wrapper',
        },
        wrap_margin: {
          type: 'slider',
          title: 'Margin Right',
          unit: ['px', '%', 'em'],
          range: {
            em: {
              min: 0,
              max: 150,
              step: 0.1,
            },
            px: {
              min: 0,
              max: 150,
              step: 1,
            },
            '%': {
              min: 0,
              max: 100,
              step: 1,
            },
          },
          std: {
            md: '',
            sm: '',
            xs: '',
          },
          responsive: true,
          tab: 'style',
          section: 'Testimonial Wrapper',
          selector: [
            '{{SELECTOR}} .pb-testimonial-content-carousel .slick-slide { margin-right: {{data.wrap_margin}}; }',
            '{{SELECTOR}} .pb-testimonial-content-carousel .slick-list { margin-right: -{{data.wrap_margin}}; }',
          ],
        },
      },
    },
    defaultAddon: true,
    group: 'basic',
    js_template: true,
  },

  pb_video: {
    type: 'content',
    addon_name: 'pb_video',
    title: 'Video',
    name: 'pb_video',
    category: '',
    Editor: VideoComponent,
    Preview: VideoComponent,
    styleJSON: {
      video_width:
        '{{SELECTOR}} .pb-video-block.pb-embed-responsive iframe { width: {{data.video_width}}; }',
      video_height:
        '{{SELECTOR}} .pb-video-block.pb-embed-responsive iframe { height: {{data.video_height}}; }',
      video_radius:
        '{{SELECTOR}} .pb-video-block.pb-embed-responsive{ border-radius: {{data.video_radius}}; }',
      addon_z_index:
        '.pb-builder-container {{SELECTOR}}{ z-index: {{data.addon_z_index}}; }',
      addon_padding: '{{SELECTOR}}{ padding: {{data.addon_padding}}; }',
      addon_margin: '{{SELECTOR}}{ margin: {{data.addon_margin}}; }',
      addon_background: '{{SELECTOR}}',
      addon_color_opacity: '{{SELECTOR}}:after{{data.addon_color_opacity}}',
      addon_opacity:
        '{{SELECTOR}}:after{ content: " "; z-index: 0; display: block; position: absolute; height: 100%; top: 0; left: 0; right: 0; opacity:{{data.addon_opacity}}; }',
      addon_color_blend:
        '{{SELECTOR}}:after{ mix-blend-mode:{{data.addon_color_blend}}; }',
      addon_border: '{{SELECTOR}}{{data.addon_border}}',
      addon_border_hover: '{{SELECTOR}}:hover{{data.addon_border_hover}}',
      addon_border_radius:
        '{{SELECTOR}}, {{SELECTOR}}:after{ border-radius: {{data.addon_border_radius}}; overflow:hidden; }',
      addon_border_radius_hover:
        '{{SELECTOR}}:hover, {{SELECTOR}}:hover:after{ border-radius: {{data.addon_border_radius_hover}};overflow:hidden; }',
      addon_boxshadow: '{{SELECTOR}}{{data.addon_boxshadow}}',
      addon_boxshadow_hover: '{{SELECTOR}}:hover{{data.addon_boxshadow_hover}}',
      addon_wrap_opacity:
        '{{SELECTOR}} .pb-addon{ opacity:{{data.addon_wrap_opacity}}; }',
      addon_wrap_opacity_hover:
        '{{SELECTOR}} .pb-addon:hover{ opacity:{{data.addon_wrap_opacity_hover}}; }',
      addon_display: '{{SELECTOR}}{ display: {{data.addon_display}} ; }',
    },
    visibility: true,
    icon: 'pb-font-video',
    attr: {
      general: {
        video_type: {
          type: 'select',
          title: 'Video Source',
          values: {
            youtube: 'Youtube',
            vimeo: 'Vimeo',
            'self-hosted': 'Self-hosted',
          },
          std: 'youtube',
        },
        video_url: {
          type: 'text',
          title: 'Video URL',
          std: 'https://www.youtube.com/watch?v=AHNDYPRgiKs',
        },
        video_hide_logo: {
          type: 'switch',
          title: 'Logo',
          std: '1',
          depends: [['video_type', '=', 'youtube']],
        },
        video_controls: {
          type: 'switch',
          title: 'Controls',
          std: '1',
          depends: [['video_type', '=', 'youtube']],
        },
        video_width: {
          type: 'slider',
          title: 'Width',
          responsive: true,
          tab: 'style',
          std: {
            md: '100%',
            sm: '',
            xs: '',
          },
          unit: ['px', '%', 'em'],
          range: {
            em: {
              min: 0,
              max: 90,
              step: 0.1,
            },
            px: {
              min: 0,
              max: 500,
              step: 1,
            },
            '%': {
              min: 0,
              max: 100,
              step: 1,
            },
          },
          selector:
            '{{SELECTOR}} .pb-video-block.pb-embed-responsive iframe { width: {{data.video_width}}; }',
        },
        video_height: {
          type: 'slider',
          title: 'Height',
          responsive: true,
          tab: 'style',
          std: {
            md: '100%',
            sm: '',
            xs: '',
          },
          unit: ['px', '%', 'em'],
          range: {
            em: {
              min: 0,
              max: 90,
              step: 0.1,
            },
            px: {
              min: 0,
              max: 500,
              step: 1,
            },
            '%': {
              min: 0,
              max: 100,
              step: 1,
            },
          },
          selector:
            '{{SELECTOR}} .pb-video-block.pb-embed-responsive iframe { height: {{data.video_height}}; }',
        },
        video_radius: {
          type: 'dimension',
          title: 'Border Radius',
          responsive: true,
          tab: 'style',
          unit: ['px', '%', 'em'],
          selector:
            '{{SELECTOR}} .pb-video-block.pb-embed-responsive{ border-radius: {{data.video_radius}}; }',
        },
      },
    },
    defaultAddon: true,
    group: 'basic',
    js_template: true,
  },
  pb_video_popup: {
    type: 'content',
    addon_name: 'pb_video_popup',
    title: 'Video Popup',
    name: 'pb_video_popup',
    category: '',
    Editor: VideoPopup,
    Preview: VideoPopup,
    styleJSON: {
      icon_color:
        '{{SELECTOR}} .pb-video-popup-icon i { color: {{data.icon_color}}; }',
      icon_hcolor:
        '{{SELECTOR}} .pb-video-popup-icon:hover i { color: {{data.icon_hcolor}}; }',
      icon_bg_color:
        '{{SELECTOR}} .pb-video-popup-icon { background: {{data.icon_bg_color}}; }',
      icon_bg_hcolor:
        '{{SELECTOR}} .pb-video-popup-icon:hover { background: {{data.icon_bg_hcolor}}; }',
      icon_boxshadow:
        '{{SELECTOR}} .pb-video-popup-icon{{data.icon_boxshadow}}',
      icon_hover_boxshadow:
        '{{SELECTOR}} .pb-video-popup-icon:hover{{data.icon_hover_boxshadow}}',
      icon_size:
        '{{SELECTOR}} .pb-video-popup-icon i { font-size: {{data.icon_size}}; }',
      icon_line_height:
        '{{SELECTOR}} .pb-video-popup-icon i { line-height: {{data.icon_line_height}}; }',
      icon_width:
        '{{SELECTOR}} .pb-video-popup-icon { width: {{data.icon_width}}; }',
      icon_height:
        '{{SELECTOR}} .pb-video-popup-icon { height: {{data.icon_height}}; }',
      icon_radius:
        '{{SELECTOR}} .pb-video-popup-icon { border-radius: {{data.icon_radius}}; }',
      before_color:
        '{{SELECTOR}} .pb-video-popup-before-text a, {{SELECTOR}} .pb-video-popup-before-text a:hover { color: {{data.before_color}}; }',
      before_fontstyle:
        '{{SELECTOR}} .pb-video-popup-before-text{{data.before_fontstyle}}',
      before_margin:
        '{{SELECTOR}} .pb-video-popup-before-text { margin: {{data.before_margin}}; }',
      after_color:
        '{{SELECTOR}} .pb-video-popup-after-text a,{{SELECTOR}} .pb-video-popup-after-text a:hover { color: {{data.after_color}}; }',
      after_fontstyle:
        '{{SELECTOR}} .pb-video-popup-after-text{{data.after_fontstyle}}',
      after_margin:
        '{{SELECTOR}} .pb-video-popup-after-text { margin: {{data.after_margin}}; }',
      addon_z_index:
        '.pb-builder-container {{SELECTOR}}{ z-index: {{data.addon_z_index}}; }',
      addon_padding: '{{SELECTOR}}{ padding: {{data.addon_padding}}; }',
      addon_margin: '{{SELECTOR}}{ margin: {{data.addon_margin}}; }',
      addon_background: '{{SELECTOR}}',
      addon_color_opacity: '{{SELECTOR}}:after{{data.addon_color_opacity}}',
      addon_opacity:
        '{{SELECTOR}}:after{ content: " "; z-index: 0; display: block; position: absolute; height: 100%; top: 0; left: 0; right: 0; opacity:{{data.addon_opacity}}; }',
      addon_color_blend:
        '{{SELECTOR}}:after{ mix-blend-mode:{{data.addon_color_blend}}; }',
      addon_border: '{{SELECTOR}}{{data.addon_border}}',
      addon_border_hover: '{{SELECTOR}}:hover{{data.addon_border_hover}}',
      addon_border_radius:
        '{{SELECTOR}}, {{SELECTOR}}:after{ border-radius: {{data.addon_border_radius}}; overflow:hidden; }',
      addon_border_radius_hover:
        '{{SELECTOR}}:hover, {{SELECTOR}}:hover:after{ border-radius: {{data.addon_border_radius_hover}};overflow:hidden; }',
      addon_boxshadow: '{{SELECTOR}}{{data.addon_boxshadow}}',
      addon_boxshadow_hover: '{{SELECTOR}}:hover{{data.addon_boxshadow_hover}}',
      addon_wrap_opacity:
        '{{SELECTOR}} .pb-addon{ opacity:{{data.addon_wrap_opacity}}; }',
      addon_wrap_opacity_hover:
        '{{SELECTOR}} .pb-addon:hover{ opacity:{{data.addon_wrap_opacity_hover}}; }',
      addon_display: '{{SELECTOR}}{ display: {{data.addon_display}} ; }',
    },
    visibility: true,
    icon: 'pb-font-video-camera',
    attr: {
      general: {
        video_url: {
          type: 'text',
          title: 'Video URL',
          std: 'https://www.youtube.com/watch?v=AHNDYPRgiKs',
        },
        before_text: {
          type: 'text',
          title: 'Before Video text',
        },
        after_text: {
          type: 'text',
          title: 'After Video text',
        },
        video_align: {
          type: 'select',
          title: 'Video icon alignment',
          responsive: true,
          values: {
            video_left: 'Left',
            video_center: 'Center',
            video_right: 'Right',
          },
          std: 'video_center',
        },
        icon_color: {
          type: 'color',
          title: 'color',
          tab: 'style',
          section: 'Icon',
          selector:
            '{{SELECTOR}} .pb-video-popup-icon i { color: {{data.icon_color}}; }',
        },
        icon_hcolor: {
          type: 'color',
          title: 'hover color',
          tab: 'style',
          section: 'Icon',
          selector:
            '{{SELECTOR}} .pb-video-popup-icon:hover i { color: {{data.icon_hcolor}}; }',
        },
        icon_bg_color: {
          type: 'color',
          title: 'background color',
          tab: 'style',
          section: 'Icon',
          std: '#f5f5f5',
          selector:
            '{{SELECTOR}} .pb-video-popup-icon { background: {{data.icon_bg_color}}; }',
        },
        icon_bg_hcolor: {
          type: 'color',
          title: 'hover Background color',
          tab: 'style',
          section: 'Icon',
          std: '#e5e5e5',
          selector:
            '{{SELECTOR}} .pb-video-popup-icon:hover { background: {{data.icon_bg_hcolor}}; }',
        },
        icon_boxshadow: {
          type: 'boxshadow',
          title: 'Box shadow',
          std: {
            shadowValue: {
              top: '0px',
              right: '0px',
              bottom: '5px',
              left: '0px',
            },
            shadowColor: 'rgba(0,0,0,.3)',
          },
          tab: 'style',
          section: 'Icon',
          selector: '{{SELECTOR}} .pb-video-popup-icon',
        },
        icon_hover_boxshadow: {
          type: 'boxshadow',
          title: 'hover box shadow',
          std: {
            shadowValue: {
              top: '0px',
              right: '0px',
              bottom: '5px',
              left: '0px',
            },
            shadowColor: 'rgba(0,0,0,.3)',
          },
          tab: 'style',
          section: 'Icon',
          selector: '{{SELECTOR}} .pb-video-popup-icon:hover',
        },
        icon_size: {
          type: 'slider',
          title: 'Size',
          unit: ['px', '%', 'em'],
          range: {
            em: {
              min: 0,
              max: 23,
              step: 0.1,
            },
            px: {
              min: 0,
              max: 350,
              step: 1,
            },
            '%': {
              min: 0,
              max: 100,
              step: 1,
            },
          },
          std: {
            md: '32px',
            sm: '',
            xs: '',
          },
          responsive: true,
          tab: 'style',
          section: 'Icon',
          selector:
            '{{SELECTOR}} .pb-video-popup-icon i { font-size: {{data.icon_size}}; }',
        },
        icon_line_height: {
          type: 'slider',
          title: 'line height',
          unit: ['px', '%', 'em'],
          range: {
            em: {
              min: 0,
              max: 23,
              step: 0.1,
            },
            px: {
              min: 0,
              max: 350,
              step: 1,
            },
            '%': {
              min: 0,
              max: 100,
              step: 1,
            },
          },
          std: {
            md: '100px',
            sm: '',
            xs: '',
          },
          responsive: true,
          tab: 'style',
          section: 'Icon',
          selector:
            '{{SELECTOR}} .pb-video-popup-icon i { line-height: {{data.icon_line_height}}; }',
        },
        icon_width: {
          type: 'slider',
          title: 'Width',
          unit: ['px', '%', 'em'],
          range: {
            em: {
              min: 0,
              max: 23,
              step: 0.1,
            },
            px: {
              min: 0,
              max: 350,
              step: 1,
            },
            '%': {
              min: 0,
              max: 100,
              step: 1,
            },
          },
          std: {
            md: '100px',
            sm: '',
            xs: '',
          },
          responsive: true,
          tab: 'style',
          section: 'Icon',
          selector:
            '{{SELECTOR}} .pb-video-popup-icon { width: {{data.icon_width}}; }',
        },
        icon_height: {
          type: 'slider',
          title: 'Icon Height',
          unit: ['px', '%', 'em'],
          range: {
            em: {
              min: 0,
              max: 23,
              step: 0.1,
            },
            px: {
              min: 0,
              max: 350,
              step: 1,
            },
            '%': {
              min: 0,
              max: 100,
              step: 1,
            },
          },
          std: {
            md: '100px',
            sm: '',
            xs: '',
          },
          responsive: true,
          tab: 'style',
          section: 'Icon',
          selector:
            '{{SELECTOR}} .pb-video-popup-icon { height: {{data.icon_height}}; }',
        },
        icon_radius: {
          type: 'dimension',
          title: 'Icon Radius',
          unit: ['px', '%', 'em'],
          std: {
            md: {
              top: '100px',
              right: '100px',
              bottom: '100px',
              left: '100px',
            },
            sm: {
              top: '',
              right: '',
              bottom: '',
              left: '',
            },
            xs: {
              top: '',
              right: '',
              bottom: '',
              left: '',
            },
          },
          responsive: true,
          tab: 'style',
          section: 'Icon',
          selector:
            '{{SELECTOR}} .pb-video-popup-icon { border-radius: {{data.icon_radius}}; }',
        },
        before_color: {
          type: 'color',
          title: 'Before color',
          tab: 'style',
          section: 'Before text',
          selector:
            '{{SELECTOR}} .pb-video-popup-before-text a, {{SELECTOR}} .pb-video-popup-before-text a:hover { color: {{data.before_color}}; }',
        },
        before_fontstyle: {
          type: 'typography',
          title: 'Typography',
          std: {
            fontFamily: '',
            fontSize: {
              md: '18px',
              sm: '',
              xs: '',
            },
            lineHeight: {
              md: '',
              sm: '',
              xs: '',
            },
            fontWeight: '700',
            textTransform: '',
            fontStyle: '',
            letterSpacing: {
              md: '',
              sm: '',
              xs: '',
            },
          },
          selector: '{{SELECTOR}} .pb-video-popup-before-text',
          section: 'Before text',
          tab: 'style',
        },
        before_margin: {
          type: 'dimension',
          title: 'Before text Margin',
          unit: ['px', 'em', '%'],
          responsive: true,
          tab: 'style',
          selector:
            '{{SELECTOR}} .pb-video-popup-before-text { margin: {{data.before_margin}}; }',
          section: 'Before text',
        },
        after_color: {
          type: 'color',
          title: 'After color',
          tab: 'style',
          section: 'After text',
          selector:
            '{{SELECTOR}} .pb-video-popup-after-text a,{{SELECTOR}} .pb-video-popup-after-text a:hover { color: {{data.after_color}}; }',
        },
        after_fontstyle: {
          type: 'typography',
          title: 'Typography',
          std: {
            fontFamily: '',
            fontSize: {
              md: '18px',
              sm: '',
              xs: '',
            },
            lineHeight: {
              md: '',
              sm: '',
              xs: '',
            },
            fontWeight: '700',
            textTransform: '',
            fontStyle: '',
            letterSpacing: {
              md: '',
              sm: '',
              xs: '',
            },
          },
          selector: '{{SELECTOR}} .pb-video-popup-after-text',
          section: 'After text',
          tab: 'style',
        },
        after_margin: {
          type: 'dimension',
          title: 'After text Margin',
          unit: ['px', 'em', '%'],
          responsive: true,
          tab: 'style',
          selector:
            '{{SELECTOR}} .pb-video-popup-after-text { margin: {{data.after_margin}}; }',
          section: 'After text',
        },
      },
    },
    defaultAddon: true,
    group: 'basic',
    js_template: true,
  },
};
