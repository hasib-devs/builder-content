const ButtonGroup = ({ data }) => {
  return (
    <div className="pb-button-group-addon">
      <div className="pb-button-addon-content">
        {data.button_item.map((value, key) => {
          let classList = '';
          classList += ' pb-btn-' + value.style;
          classList += ' pb-btn-' + value.shape;
          classList += ' pb-btn-' + value.btn_size;

          return (
            <div className={`pb-button-group repeater-${key}`} key={key}>
              {value.button_link && value.button_link.link && (
                <a
                  href={value.button_link.link}
                  target={value.button_link.window ? '_blank' : ''}
                  rel={value.button_link.nofolow ? 'nofollow' : ''}
                  className={`pb-btn-addons ${classList}`}
                >
                  {value.icon_list && value.icon_position === 'right' ? (
                    <>
                      <i className={value.icon_list}></i> {value.button_text}
                    </>
                  ) : (
                    <>
                      {value.button_text} <i className={value.icon_list}></i>
                    </>
                  )}
                </a>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ButtonGroup;
