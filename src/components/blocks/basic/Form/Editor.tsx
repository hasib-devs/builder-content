import _ from 'lodash'
import React from 'react'

const Form = ({ data }) => {
  const classList = `pb-btn-${data.fullwidth_button}`

  const renderFieldType = (field) => {
    switch (field.field_type) {
      case 'text':
        return (
          <span className="pb-form-field-item pb-form-field-input">
            <input type="text" placeholder={field.placeholder || ''} />
          </span>
        )

      case 'email':
        return (
          <span className="pb-form-field-item pb-form-field-email">
            <input type="email" placeholder={field.placeholder || ''} />
          </span>
        )

      case 'textarea':
        return (
          <span
            className={`pb-form-field-item pb-form-field-textarea pb-textarea-disbale-${data.textarea_resize}`}
          >
            <textarea placeholder={field.placeholder || ''} />
          </span>
        )

      case 'radio':
        return field.radio_field_options.map((radioField) => (
          <span
            key={radioField.label}
            className="pb-form-field-item pb-form-field-radio"
          >
            <input type="radio" value={radioField.label} />
            <label htmlFor={radioField.label}>{radioField.label}</label>
          </span>
        ))

      case 'checkbox':
        return field.checkbox_field_options.map((checkBoxField) => (
          <span
            key={checkBoxField.label}
            className="pb-form-field-item pb-form-field-checkbox"
          >
            <input type="checkbox" value={checkBoxField.label} />
            <label htmlFor={checkBoxField.label}>{checkBoxField.label}</label>
          </span>
        ))

      case 'select':
        return (
          <span className="pb-form-field-item pb-form-field-select">
            <select>
              {field.select_options.map((selectOption) => (
                <option key={selectOption.label} value={selectOption.label}>
                  {selectOption.label}
                </option>
              ))}
            </select>
          </span>
        )

      default:
        return null
    }
  }

  return (
    <div className="pb-forms-addon">
      <div className="pb-form-content">
        {data.pb_default_form && data.form_type === 'pb_default_form' ? (
          <>
            <div className="pb-form-field-item-wrap">
              {_.map(data.pb_default_form, (field, key) => (
                <div
                  key={key}
                  className={`pb-form-field-repeat repeater-${key}`}
                >
                  <div className="pb-form-field-wrap">
                    {data.label_show === 1 && field.label && (
                      <label className="pb-form-field-label">
                        {field.label}
                        {field.require === 1 && (
                          <span className="require-sign">*</span>
                        )}
                      </label>
                    )}
                    {renderFieldType(field)}
                  </div>
                </div>
              ))}
            </div>

            {data.enable_simple_recaptcha === 1 && (
              <div className="pb-custom-recaptcha">
                <span className="pb-form-recaptcha-input">
                  <input
                    type="text"
                    placeholder="10+5 = ?"
                    name="pb_default_form[pb_form_recaptcha_answer]"
                  />
                </span>
              </div>
            )}

            {
              // data.enable_google_recaptcha === 1 && (
              //   <div className="pb-form-google-recaptcha google_recaptcha_wrap">
              //     {/* Replace the image src with your actual image source */}
              //     <img src="your-recaptcha-img-source.png" alt="recaptcha-img" />
              //   </div>
              // )
            }

            <div className="pb-form-btn-wrap">
              <button className={`pb-btn-forms ${classList}`} type="button">
                {data.icon_position === 'left' &&
                  !_.isEmpty(data.icon_list) && (
                    <i className={data.icon_list} />
                  )}
                <span>
                  {data.button_text ? data.button_text : 'Submit Form'}
                </span>
                {data.icon_position === 'right' &&
                  !_.isEmpty(data.icon_list) && (
                    <i className={data.icon_list} />
                  )}
              </button>
            </div>
          </>
        ) : (
          <div>
            {/* The ajax logic is not included. Consider moving this to another React effect or function */}
            Your formHtmlContainer logic here...
          </div>
        )}
      </div>
    </div>
  )
}

export default Form
