export interface WppbButtonProps {
  data: {
    style: string;
    shape: string;
    btn_size: string;
    fullwidth_button: string;
    button_link: {
      link?: string;
      window?: boolean;
      nofollow?: boolean;
    };
    icon_position: string;
    icon_list: string;
    button_text: string;
  };
}

const Button = ({ data }: WppbButtonProps) => {
  const {
    style,
    shape,
    btn_size,
    fullwidth_button,
    button_link,
    icon_position,
    icon_list,
    button_text,
  } = data;

  const classList = `pb-btn-${style} pb-btn-${shape} pb-btn-${btn_size} pb-btn-${fullwidth_button}`;

  return (
    <div className="pb-addon pb-button-addon">
      <div className="pb-button-addon-content">
        {button_link?.link && (
          <a
            href={button_link.link}
            target={button_link.window ? '_blank' : undefined}
            rel={button_link.nofollow ? 'nofollow' : undefined}
            className={`pb-btn-addons ${classList}`}
          >
            {icon_position === 'left' && icon_list && (
              <i className={icon_list}></i>
            )}
            {button_text}
            {icon_position === 'right' && icon_list && (
              <i className={icon_list}></i>
            )}
          </a>
        )}
      </div>
    </div>
  );
};

// Button.defaultProps = {
//   data: {
//     style: "success",
//     shape: "rounded",
//     btn_size: "large",
//     fullwidth_button: "no",
//     button_link: {
//       link: "#",
//       window: false,
//       nofollow: false,
//     },
//     icon_position: "left",
//     icon_list: "",
//     button_text: "Click Me",
//   },
// };

export default Button;
