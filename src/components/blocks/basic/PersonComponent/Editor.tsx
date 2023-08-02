function PersonComponent({ data }) {
  const {
    person_layout,
    person_image,
    name_link,
    name,
    designation,
    email,
    introtext,
    show_social,
    social_item,
  } = data;

  const personImage = person_image && person_image.url && (
    <div className="pb-person-image">
      <img className="pb-person-addon-img" src={person_image.url} />
    </div>
  );

  const personName = (
    <span className="pb-person-name">
      {name_link && name_link.link ? (
        <a
          href={name_link.link}
          target={name_link.window ? '_blank' : undefined}
          rel={name_link.nofolow ? 'nofolow' : undefined}
        >
          {name}
        </a>
      ) : (
        name
      )}
    </span>
  );

  const personDesignation = designation && (
    <span className="pb-person-designation">{designation}</span>
  );
  const personEmail = email && <span className="pb-person-email">{email}</span>;
  const personIntrotext = introtext && (
    <span className="pb-person-introtext">{introtext}</span>
  );

  const personSocial = show_social == 1 && (
    <ul className="pb-person-social">
      {social_item.map((value, key) => (
        <li className={`repeater-${key}`} key={key}>
          <span className="pb-person-social-list">
            <a href={value.socialurl} target="_blank">
              <i className={value.icon_list}></i>
            </a>
          </span>
        </li>
      ))}
    </ul>
  );

  const getLayout = (layout) => {
    switch (layout) {
      case 'two':
        return (
          <>
            {personImage}
            <div className="pb-person-information-wrap">
              <div className="pb-person-information">
                {personName}
                {personDesignation}
                {personEmail}
                {personIntrotext}
              </div>
              {personSocial}
            </div>
          </>
        );

      case 'three':
        return (
          <div className="pb-person-media">
            {personImage}
            <div className="pb-person-media-body">
              <div className="pb-person-information">
                {personName}
                {personDesignation}
                {personEmail}
                {personIntrotext}
              </div>
              {personSocial}
            </div>
          </div>
        );

      case 'four':
        return (
          <div className="pb-person-media">
            {personImage}
            <div className="pb-person-media-body">
              <div className="pb-person-information">
                {personName}
                {personDesignation}
                {personEmail}
                {personIntrotext}
              </div>
              {personSocial}
            </div>
          </div>
        );

      case 'five':
        return (
          <div className="pb-person-five-wrap">
            {personImage}
            <div className="pb-person-information-wrap pb-person-five-overlay">
              {personSocial}
              <div className="pb-person-information">
                {personName}
                {personDesignation}
                {personEmail}
                {personIntrotext}
              </div>
            </div>
          </div>
        );
      default:
        return (
          <>
            {personImage}
            <div className="pb-person-information-wrap">
              <div className="pb-person-information">
                {personName}
                {personDesignation}
                {personEmail}
                {personIntrotext}
              </div>
              {personSocial}
            </div>
          </>
        );
    }
  };

  return (
    <div className="pb-person-addon">
      <div className={`pb-person-addon-content person-layout-${person_layout}`}>
        {getLayout(person_layout)}
      </div>
    </div>
  );
}

export default PersonComponent;
