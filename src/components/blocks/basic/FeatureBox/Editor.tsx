/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { createElement } from 'react';
import _ from 'lodash';
import classNames from 'classnames';

const FeatureBox = ({ data }) => {
  const headingSelector = data.heading_selector || 'h3';
  const subheadingSelector = data.subheading_selector || 'h4';
  const classList = `pb-btn-${data.style}`;

  return (
    <div className="pb-addon pb-feature-box-addon">
      <div className="pb-feature-box-content">
        {data.layout === 'two' && <LayoutTwo />}
        {data.layout === 'three' && <LayoutThree />}
        {data.layout === 'four' && <LayoutFour />}
        {data.layout === 'five' && <LayoutFive />}
        {data.layout === 'six' && <LayoutSix />}
        {data.layout === 'seven' && <LayoutSeven />}
        {data.layout !== 'two' &&
          data.layout !== 'three' &&
          data.layout !== 'four' &&
          data.layout !== 'five' &&
          data.layout !== 'six' &&
          data.layout !== 'seven' && <DefaultLayout />}
      </div>
    </div>
  );

  function LayoutTwo() {
    return (
      <div className={classNames('pb-feature-box-layout-two', classList)}>
        {data.media && (
          <div className="pb-feature-box-media">
            <img src={data.media} alt={data.alt_text || ''} />
          </div>
        )}
        {data.title &&
          createElement(
            headingSelector,
            { className: 'pb-feature-box-title' },
            data.title
          )}
        {data.sub_title &&
          createElement(
            subheadingSelector,
            { className: 'pb-feature-box-subtitle' },
            data.sub_title
          )}
        {data.text && <p className="pb-feature-box-text">{data.text}</p>}
      </div>
    );
  }

  function LayoutThree() {
    return (
      <div className="pb-feature-box-layout-three">
        <div className="pb-feature-box-body">
          {data.title &&
            createElement(
              headingSelector,
              { className: 'pb-feature-box-title' },
              data.title
            )}
          {data.sub_title &&
            createElement(
              subheadingSelector,
              { className: 'pb-feature-box-subtitle' },
              data.sub_title
            )}
          {data.text && <p className="pb-feature-box-text">{data.text}</p>}
        </div>
        {data.media && (
          <div className="pb-feature-box-media">
            <img src={data.media} alt={data.alt_text || ''} />
          </div>
        )}
      </div>
    );
  }

  function LayoutFour() {
    const headingSelector = data.heading_selector || 'h3';
    const subheadingSelector = data.subheading_selector || 'h4';

    return (
      <div className="pb-addon pb-feature-box-addon feature-icontitle-wrap">
        <div className="feature-icontitle-left pb-clearfix">
          {data.show_image === 1 && data.image_upload && (
            <div className="pb-feature-box-img">
              <img src={data.image_upload.url} />
            </div>
          )}
          {!data.show_image && data.icon_list && (
            <div className="pb-feature-box-icon">
              <i className={data.icon_list}></i>
            </div>
          )}
          {data.title &&
            React.createElement(
              headingSelector,
              { className: 'pb-feature-box-title' },
              data.title
            )}
        </div>
        <div className="feature-icontitle-body">
          {data.subtitle &&
            React.createElement(
              subheadingSelector,
              { className: 'pb-feature-box-subtitle' },
              data.subtitle
            )}
          {data.introtext && (
            <div className="pb-feature-box-intro">{data.introtext}</div>
          )}
          {data.button_link && data.button_link.link && (
            <a
              href={data.button_link.link}
              target={data.button_link.window ? '_blank' : '_self'}
              rel={data.button_link.nofolow ? 'nofollow' : ''}
              className={`pb-btn-addons pb-btn-${data.style}`}
            >
              {data.icon_position === 'left' && data.btn_icon_list && (
                <i className={data.btn_icon_list}></i>
              )}
              <span>{data.button_text}</span>
              {data.icon_position === 'right' && data.btn_icon_list && (
                <i className={data.btn_icon_list}></i>
              )}
            </a>
          )}
        </div>
      </div>
    );
  }

  function LayoutFive() {
    const headingSelector = data.heading_selector || 'h3';
    const subheadingSelector = data.subheading_selector || 'h4';

    return (
      <div className="pb-addon pb-feature-box-addon feature-icon-top pb-clearfix">
        <div className="feature-icontitle-image">
          {data.show_image === 1 && data.image_upload && (
            <div className="pb-feature-box-img">
              <img src={data.image_upload.url} />
            </div>
          )}
          {!data.show_image && data.icon_list && (
            <div className="pb-feature-box-icon">
              <i className={data.icon_list}></i>
            </div>
          )}
        </div>
        <div className="feature-icontitle-content">
          {data.title &&
            React.createElement(
              headingSelector,
              { className: 'pb-feature-box-title' },
              data.title
            )}
          {data.subtitle &&
            React.createElement(
              subheadingSelector,
              { className: 'pb-feature-box-subtitle' },
              data.subtitle
            )}
          {data.introtext && (
            <div className="pb-feature-box-intro">{data.introtext}</div>
          )}
          {data.button_link && data.button_link.link && (
            <a
              href={data.button_link.link}
              target={data.button_link.window ? '_blank' : '_self'}
              rel={data.button_link.nofolow ? 'nofollow' : ''}
              className={`pb-btn-addons pb-btn-${data.style}`}
            >
              {data.icon_position === 'left' && data.btn_icon_list && (
                <i className={data.btn_icon_list}></i>
              )}
              <span>{data.button_text}</span>
              {data.icon_position === 'right' && data.btn_icon_list && (
                <i className={data.btn_icon_list}></i>
              )}
            </a>
          )}
        </div>
      </div>
    );
  }

  function LayoutSix() {
    const headingSelector = data.heading_selector || 'h3';
    const subheadingSelector = data.subheading_selector || 'h4';

    return (
      <div className="pb-addon pb-feature-box-addon feature-icon-left pb-clearfix">
        <div className="feature-icontitle-image">
          {data.show_image === 1 && data.image_upload && (
            <div className="pb-feature-box-img">
              <img src={data.image_upload.url} />
            </div>
          )}
          {!data.show_image && data.icon_list && (
            <div className="pb-feature-box-icon">
              <i className={data.icon_list}></i>
            </div>
          )}
        </div>
        <div className="feature-icontitle-content">
          {data.title &&
            React.createElement(
              headingSelector,
              { className: 'pb-feature-box-title' },
              data.title
            )}
          {data.subtitle &&
            React.createElement(
              subheadingSelector,
              { className: 'pb-feature-box-subtitle' },
              data.subtitle
            )}
          {data.introtext && (
            <div className="pb-feature-box-intro">{data.introtext}</div>
          )}
          {data.button_link && data.button_link.link && (
            <a
              href={data.button_link.link}
              target={data.button_link.window ? '_blank' : '_self'}
              rel={data.button_link.nofolow ? 'nofollow' : ''}
              className={`pb-btn-addons pb-btn-${data.style}`}
            >
              {data.icon_position === 'left' && data.btn_icon_list && (
                <i className={data.btn_icon_list}></i>
              )}
              <span>{data.button_text}</span>
              {data.icon_position === 'right' && data.btn_icon_list && (
                <i className={data.btn_icon_list}></i>
              )}
            </a>
          )}
        </div>
      </div>
    );
  }

  function LayoutSeven() {
    const headingSelector = data.heading_selector || 'h3';
    const subheadingSelector = data.subheading_selector || 'h4';

    return (
      <div className="pb-addon pb-feature-box-addon feature-icon-left pb-clearfix">
        <div className="feature-icontitle-content">
          {data.number && (
            <span className="pb-feature-box-number">{data.number}</span>
          )}
          {data.title &&
            React.createElement(
              headingSelector,
              { className: 'pb-feature-box-title' },
              data.title
            )}
          {data.subtitle &&
            React.createElement(
              subheadingSelector,
              { className: 'pb-feature-box-subtitle' },
              data.subtitle
            )}
          {data.introtext && (
            <div className="pb-feature-box-intro">{data.introtext}</div>
          )}
          {data.button_link && data.button_link.link && (
            <a
              href={data.button_link.link}
              target={data.button_link.window ? '_blank' : '_self'}
              rel={data.button_link.nofolow ? 'nofollow' : ''}
              className={`pb-btn-addons pb-btn-${data.style}`}
            >
              {data.icon_position === 'left' && data.btn_icon_list && (
                <i className={data.btn_icon_list}></i>
              )}
              <span>{data.button_text}</span>
              {data.icon_position === 'right' && data.btn_icon_list && (
                <i className={data.btn_icon_list}></i>
              )}
            </a>
          )}
        </div>
      </div>
    );
  }

  function DefaultLayout() {
    const headingSelector = data.heading_selector || 'h3';
    const subheadingSelector = data.subheading_selector || 'h4';

    return (
      <div className="pb-addon pb-feature-box-addon">
        <div className="pb-feature-box-content">
          {data.title &&
            React.createElement(
              headingSelector,
              { className: 'pb-feature-box-title' },
              data.title
            )}
          {data.subtitle &&
            React.createElement(
              subheadingSelector,
              { className: 'pb-feature-box-subtitle' },
              data.subtitle
            )}
          {data.introtext && (
            <div className="pb-feature-box-intro">{data.introtext}</div>
          )}
          {data.button_link && data.button_link.link && (
            <a
              href={data.button_link.link}
              target={data.button_link.window ? '_blank' : '_self'}
              rel={data.button_link.nofolow ? 'nofollow' : ''}
              className={`pb-btn-addons pb-btn-${data.style}`}
            >
              {data.icon_position === 'left' && data.btn_icon_list && (
                <i className={data.btn_icon_list}></i>
              )}
              <span>{data.button_text}</span>
              {data.icon_position === 'right' && data.btn_icon_list && (
                <i className={data.btn_icon_list}></i>
              )}
            </a>
          )}
        </div>
      </div>
    );
  }
};

export default FeatureBox;
