function Heading({ data }) {
  const TitleSelector = data.title_selector || 'h2';
  const classess = {
    h1: 'text-5xl',
    h2: 'text-4xl',
    h3: 'text-3xl',
    h4: 'text-2xl',
    h5: 'text-xl',
    h6: 'text-lg',
  };
  return (
    <div className="pb-headline-addon">
      <div className="pb-headline-content">
        {data.title_link && data.title_link.link ? (
          <TitleSelector
            className={`pb-addon-title ${classess[TitleSelector]}`}
          >
            <a
              href={data.title_link.link}
              target={data.title_link.window ? '_blank' : ''}
              rel={data.title_link.nofolow ? 'nofollow' : ''}
            >
              {data.title}
            </a>
          </TitleSelector>
        ) : (
          <TitleSelector
            className={`pb-addon-title ${classess[TitleSelector]}`}
          >
            {data.title}
          </TitleSelector>
        )}
      </div>
    </div>
  );
}

export default Heading;
