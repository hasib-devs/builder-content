const AnimatedNumber = ({ data }) => {
  const renderCounterTitle = () => {
    if (data.counter_title) {
      if (data.title_animation.itemOpen) {
        return (
          <div
            className={`pb-count-number-title pb-wow pb-animated ${data.title_animation.name}`}
            data-wow-duration={`${data.title_animation.duration}ms`}
            data-wow-delay={`${data.title_animation.delay}ms`}
          >
            {data.counter_title}
          </div>
        );
      } else {
        return (
          <div className="pb-count-number-title">{data.counter_title}</div>
        );
      }
    }
    return null;
  };

  const renderDigit = () => {
    if (data.digit) {
      if (data.prefix_text) {
        return <div className="pb-count-number-prefix">{data.prefix_text}</div>;
      }
      if (data.digit_animation.itemOpen) {
        return (
          <div
            className={`pb-counter-number pb-wow pb-animated ${data.digit_animation.name}`}
            data-wow-duration={`${data.digit_animation.duration}ms`}
            data-wow-delay={`${data.digit_animation.delay}ms`}
            data-digit={data.digit}
            data-duration={data.duration}
          >
            0
          </div>
        );
      } else {
        return (
          <div
            className="pb-counter-number"
            data-digit={data.digit}
            data-duration={data.duration}
          >
            0
          </div>
        );
      }
    }
    return null;
  };

  const renderAdditional = () => {
    if (data.additional) {
      return <div className="pb-count-number-addition">{data.additional}</div>;
    }
    return null;
  };

  return (
    <div className="pb-animated-counter-addon">
      <div
        className={`pb-animated-counter-content animated-layout-${data.animated_layout}`}
      >
        {data.animated_layout === 'two' ? (
          <>
            {renderCounterTitle()}
            {renderDigit()}
            {renderAdditional()}
          </>
        ) : (
          <>
            {renderDigit()}
            {renderAdditional()}
            {renderCounterTitle()}
          </>
        )}
      </div>
    </div>
  );
};

export default AnimatedNumber;
