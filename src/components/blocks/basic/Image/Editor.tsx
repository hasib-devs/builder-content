import _ from 'lodash';

function ImageComponent(props) {
  const { data } = props;
  const { lightbox, lightbox_icon, image_link, upload_image, caption_text } =
    data;

  return (
    <div className="pb-image-addon">
      <figure className="pb-image-addon-content-wrap">
        <div className={`pb-image-addon-content pb-${data.image_display}`}>
          {lightbox == 1 && (
            <a
              className="pb-image-popup"
              data-popup_type="image"
              data-mainclass="mfp-no-margins mfp-with-zoom"
              href={upload_image.url}
            >
              <div className="pb-addon-image-overlay">
                {lightbox_icon && (
                  <i
                    className="fas fa-plus pb-addon-image-overlay-icon"
                    aria-hidden="true"
                  ></i>
                )}
              </div>
            </a>
          )}
          {lightbox == 0 && _.isEmpty(image_link.link) && (
            <a
              href={image_link.link || undefined}
              target={image_link.window ? '_blank' : undefined}
              rel={image_link.nofolow ? 'nofolow' : undefined}
            >
              {upload_image && upload_image.url && (
                <img className="pb-image-addon-img" src={upload_image.url} />
              )}
            </a>
          )}
        </div>
        {caption_text && (
          <figcaption className="pb-addon-image-caption">
            {caption_text}
          </figcaption>
        )}
      </figure>
    </div>
  );
}

export default ImageComponent;
