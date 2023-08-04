function ImageHover({
  data: {
    title,
    link,
    heading_selector,
    subtitle,
    subheading_selector,
    image_hover_effect,
    title_show,
    subtitle_show,
    button_show,
    layout,
    content_position,
    button_link,
    icon_position,
    btn_icon_list,
    button_text,
  },
}) {
  const HeadingTag = heading_selector || 'h3';
  const SubHeadingTag = subheading_selector || 'h4';
  const imageHoverEffect = image_hover_effect || 'slideleft';

  const dataTitle =
    title_show &&
    title &&
    (link ? (
      <HeadingTag
        className={`pb-image-hover-title pb-image-hover-title-${title_show}`}
      >
        <a href={link}>{title}</a>
      </HeadingTag>
    ) : (
      <HeadingTag
        className={`pb-image-hover-title pb-image-hover-title-${title_show}`}
      >
        {title}
      </HeadingTag>
    ));

  const dataSubTitle = subtitle_show && subtitle && (
    <SubHeadingTag
      className={`pb-image-hover-subtitle pb-image-hover-subtitle-${subtitle_show}`}
    >
      {subtitle}
    </SubHeadingTag>
  );

  const buttonContent = button_show && button_link.link && (
    <a
      href={button_link.link}
      target={button_link.window ? '_blank' : undefined}
      rel={button_link.nofolow ? 'nofollow' : undefined}
      className="pb-btn-addons pb-btn-image-hover"
    >
      {icon_position === 'left' && btn_icon_list && (
        <i className={btn_icon_list} />
      )}
      <span>{button_text}</span>
      {icon_position === 'right' && btn_icon_list && (
        <i className={btn_icon_list} />
      )}
    </a>
  );

  const layoutRender = {
    three: (
      <div className="pb-image-hover-intro">
        <div className="pb-image-hover-intro-three">
          {dataTitle}
          {dataSubTitle}
          {buttonContent}
        </div>
      </div>
    ),
    four: (
      <div className="pb-image-hover-intro">
        {dataSubTitle}
        {buttonContent}
        <div className="pb-image-hover-intro-four">{dataTitle}</div>
      </div>
    ),
    five: (
      <div className="pb-image-hover-intro">
        <div className="pb-image-hover-intro-five">
          {dataTitle}
          {dataSubTitle}
          {buttonContent}
        </div>
      </div>
    ),
    six: (
      <div className="pb-image-hover-intro">
        {dataTitle}
        <div className="pb-image-hover-intro-six">
          {dataSubTitle}
          {buttonContent}
        </div>
      </div>
    ),
    seven: (
      <div className="pb-image-hover-intro">
        <div className="pb-image-hover-intro-seven">
          {dataTitle}
          {dataSubTitle}
          {buttonContent}
        </div>
      </div>
    ),
    eight: (
      <div className="pb-image-hover-intro">
        <div className="pb-image-hover-intro-eight">
          {dataTitle}
          {dataSubTitle}
          {buttonContent}
        </div>
      </div>
    ),
    default: (
      <div className="pb-image-hover-intro">
        {dataTitle}
        {dataSubTitle}
        {buttonContent}
      </div>
    ),
  };

  return (
    <div
      className={`pb-addon pb-image-hover-addon pb-image-hover-${layout} pb-image-hover-${content_position}`}
    >
      <div className="pb-image-hover-content">
        <div
          className={`pb-image-hover-background image-hover-${imageHoverEffect}`}
        >
          <div className="pb-image-hover-bg"></div>
          <div className="pb-image-hover-overlay"></div>
        </div>
        {layoutRender[layout] || layoutRender['default']}
      </div>
    </div>
  );
}

export default ImageHover;
