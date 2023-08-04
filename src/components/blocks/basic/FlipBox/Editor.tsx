import React from 'react';

function FlipBox({ data }) {
  const frontHeading = data.front_heading_selector || 'h4';
  const backHeading = data.back_heading_selector || 'h4';
  let dataFrontIntro;
  let dataBackIntro;
  let dataFrontTitle;
  let dataBackTitle;
  let dataBackButton;
  let dataFrontMedia;
  let dataBackMedia;
  let flipStyle;

  if (data.front_title) {
    dataFrontTitle = React.createElement(
      frontHeading,
      { className: 'pb-flip-front-title' },
      data.front_title
    );
  }

  if (data.front_introtext) {
    dataFrontIntro = (
      <div className="pb-flip-front-intro">{data.front_introtext}</div>
    );
  }

  if (data.front_show_icon == 1) {
    if (data.front_icon_list) {
      dataFrontMedia = (
        <div className="pb-flip-front-icon">
          <i className={data.front_icon_list}></i>
        </div>
      );
    }
  } else {
    if (data.front_image_upload.url) {
      dataFrontMedia = (
        <div className="pb-flip-front-img">
          <img src={data.front_image_upload.url} />
        </div>
      );
    }
  }

  if (data.back_title) {
    dataBackTitle = React.createElement(
      backHeading,
      { className: 'pb-flip-back-title' },
      data.back_title
    );
  }

  if (data.back_introtext) {
    dataBackIntro = (
      <div className="pb-flip-back-intro">{data.back_introtext}</div>
    );
  }

  if (data.back_show_icon == 1) {
    if (data.back_icon_list) {
      dataBackMedia = (
        <div className="pb-flip-back-icon">
          <i className={data.back_icon_list}></i>
        </div>
      );
    }
  } else {
    if (data.back_image_upload.url) {
      dataBackMedia = (
        <div className="pb-flip-back-img">
          <img src={data.back_image_upload.url} />
        </div>
      );
    }
  }

  if (data.back_btn_link && data.back_btn_link.link) {
    dataBackButton = (
      <a className="pb-back-view-btn" href={data.back_btn_link.link}>
        {data.back_button_text}
      </a>
    );
  }

  flipStyle = data.flip_style || 'rotate_style';

  if (flipStyle !== '') {
    if (flipStyle === 'slide_style') {
      flipStyle = 'slide-flipbox';
    } else if (flipStyle === 'fade_style') {
      flipStyle = 'fade-flipbox';
    } else if (flipStyle === 'threeD_style') {
      flipStyle = 'threeD_style';
    }
  }

  return (
    <div className="pb-flip-box-addon">
      <div
        className={`pb-flip-box-content ${data.flip_style} ${data.flip_direction} flipon-${data.flip_bhave}`}
      >
        {flipStyle === 'threeD_style' ? (
          <div className="threeD-content-wrap flip">
            <div className="threeD-item">
              <div className="threeD-flip-front">
                <div className="threeD-content-inner">
                  {dataFrontMedia}
                  {dataFrontTitle}
                  {dataFrontIntro}
                </div>
              </div>
              <div className="threeD-flip-back">
                <div className="threeD-content-inner">
                  {dataBackMedia}
                  {dataBackTitle}
                  {dataBackIntro}
                  {dataBackButton}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="pb-flipbox-panel">
            <div className="pb-flipbox-front flip-box">
              <div className="flip-box-inner">
                {dataFrontMedia}
                {dataFrontTitle}
                {dataFrontIntro}
              </div>
            </div>
            <div className="pb-flipbox-back flip-box">
              <div className="flip-box-inner">
                {dataBackMedia}
                {dataBackTitle}
                {dataBackIntro}
                {dataBackButton}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default FlipBox;
