import Slider from 'react-slick';

const PersonCarousel = ({ data }) => {
  const column = data.column ? data.column : '1';
  const controlNavStyle = data.control_nav_style
    ? data.control_nav_style
    : 'nav_style1';

  const settings = {
    dots: Boolean(Number(data.control_dots)),
    autoplay: Boolean(Number(data.autoplay_option)),
    arrows: Boolean(Number(data.control_nav)),
    infinite: true,
    speed: 500,

    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="pb-person-addon">
      <div
        className={`pb-person-carousel-addon-content person-layout-${data.person_layout}`}
      >
        <div
          className={`pb-person-content-carousel pb-person-${column} ${controlNavStyle}`}
        >
          <Slider {...settings}>
            {data.person_list.map((person, key) => (
              <div className="pb-person-addon-content" key={key}>
                {person.image && (
                  <div className="pb-person-image">
                    <img
                      className="pb-person-addon-img"
                      src={person.image.url}
                    />
                  </div>
                )}
                <div className="pb-person-information-wrap">
                  <div className="pb-person-information">
                    {person.name_link ? (
                      <span className="pb-person-name">
                        <a
                          href={person.name_link.link}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {person.name}
                        </a>
                      </span>
                    ) : (
                      <span className="pb-person-name">{person.name}</span>
                    )}
                    {person.designation && (
                      <span className="pb-person-designation">
                        {person.designation}
                      </span>
                    )}
                    {person.email && (
                      <span className="pb-person-email">{person.email}</span>
                    )}
                    {person.introtext && (
                      <div className="pb-person-introtext">
                        {person.introtext}
                      </div>
                    )}
                    {person.show_social === 1 && (
                      <ul className="pb-person-social">
                        {person.socialurl1 && (
                          <li>
                            <a
                              href={person.socialurl1}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <i className={person.icon_list1}></i>
                            </a>
                          </li>
                        )}
                        {person.socialurl2 && (
                          <li>
                            <a
                              href={person.socialurl2}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <i className={person.icon_list2}></i>
                            </a>
                          </li>
                        )}
                        {person.socialurl3 && (
                          <li>
                            <a
                              href={person.socialurl3}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <i className={person.icon_list3}></i>
                            </a>
                          </li>
                        )}
                        {person.socialurl4 && (
                          <li>
                            <a
                              href={person.socialurl4}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <i className={person.icon_list4}></i>
                            </a>
                          </li>
                        )}
                        {person.socialurl5 && (
                          <li>
                            <a
                              href={person.socialurl5}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <i className={person.icon_list5}></i>
                            </a>
                          </li>
                        )}
                        {person.socialurl6 && (
                          <li>
                            <a
                              href={person.socialurl6}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <i className={person.icon_list6}></i>
                            </a>
                          </li>
                        )}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default PersonCarousel;
