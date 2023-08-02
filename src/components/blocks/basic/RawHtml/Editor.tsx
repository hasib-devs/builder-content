const RawHtml = ({ data }) => {
  return (
    <div className="pb-raw-html-addon">
      <div
        className="pb-raw-html-content"
        dangerouslySetInnerHTML={{ __html: data.rawhtml }}
      ></div>
    </div>
  );
};

export default RawHtml;
