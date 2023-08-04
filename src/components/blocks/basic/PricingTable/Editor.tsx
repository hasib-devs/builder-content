const PricingTable = ({ data }) => {
  //   let featured_check = data.featured_check === "1" ? "pb-pricing-featured" : "";

  const pricingContent = (data) => (
    <div className="pb-pricing-content">
      {data.pricing && (
        <div className="pb-pricing-text-wrapper">
          {data.sales && (
            <span className="pb-title-sales-wrapper">
              {data.currency && (
                <span className="pb-title-currency">{data.currency}</span>
              )}
              <span className="pb-title-sales">{data.sales}</span>
            </span>
          )}
          {data.currency && (
            <sup>
              <span className="pb-title-currency">{data.currency}</span>
            </sup>
          )}
          {data.pricing && (
            <span className="pb-pricing-text">{data.pricing}</span>
          )}
          {data.period && <sub className="pb-title-period">{data.period}</sub>}
        </div>
      )}
    </div>
  );

  const features = (data) => (
    <div className="pb-pricing-feature">
      {data.pricing_feature.map((value, key) => (
        <div className={`repeater-${key}`}>
          <div className="pb-pricing-list">
            <i className={value.icon_list}></i>
            <span>{value.feature_text}</span>
          </div>
        </div>
      ))}
    </div>
  );

  const button = (data) =>
    data.btn_link.link && (
      <a
        className={`pb-btn-pricing pb-${data.button_display}`}
        rel={data.btn_link.nofolow ? 'nofollow' : ''}
        href={data.btn_link.link}
        target={data.btn_link.window ? '_blank' : '_self'}
      >
        {data.icon_position === 'left' && data.icon_list && (
          <i className={data.icon_list}></i>
        )}
        {data.button_text}
        {data.icon_position === 'right' && data.icon_list && (
          <i className={data.icon_list}></i>
        )}
      </a>
    );

  return (
    <div className="pb-pricing-addon">
      <div
        className={`pb-pricing-addon-content pricing-layout-${data.pricing_layout}`}
      >
        {data.pricing_layout === 'two' && (
          <div className="pb-pricing-content-two">
            <div className="pb-pricing-title-wrap">
              {data.title && <h3 className="pb-pricing-title">{data.title}</h3>}
              {data.subtitle && (
                <span className="pb-pricing-subtitle">{data.subtitle}</span>
              )}
              {pricingContent(data)}
            </div>
            {features(data)}
            {button(data)}
            {data.aditional_info && (
              <span className="pb-title-aditional-info">
                {data.aditional_info}
              </span>
            )}
          </div>
        )}

        {data.pricing_layout === 'three' && (
          <div className="pb-pricing-title-three">
            {data.title && <h3 className="pb-pricing-title">{data.title}</h3>}
            {pricingContent(data)}
            {features(data)}
            {button(data)}
            {data.aditional_info && (
              <span className="pb-title-aditional-info">
                {data.aditional_info}
              </span>
            )}
          </div>
        )}

        {data.pricing_layout !== 'two' && data.pricing_layout !== 'three' && (
          <div className="pb-pricing-content-two">
            <div className="pb-pricing-title-wrap">
              {data.title && <h3 className="pb-pricing-title">{data.title}</h3>}
              {data.subtitle && (
                <span className="pb-pricing-subtitle">{data.subtitle}</span>
              )}
              {pricingContent(data)}
              {features(data)}
              {button(data)}
              {data.aditional_info && (
                <span className="pb-title-aditional-info">
                  {data.aditional_info}
                </span>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PricingTable;
