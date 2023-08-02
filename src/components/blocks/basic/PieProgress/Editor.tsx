const PieProgress = ({ data }) => {
  let progress_size;
  if (typeof data.progress_size === 'object') {
    progress_size = parseInt(data.progress_size.md);
  } else {
    progress_size = parseInt(data.progress_size)
      ? parseInt(data.progress_size)
      : 150;
  }

  let progress_percentage;
  if (typeof data.progress_percentage === 'object') {
    progress_percentage = parseInt(data.progress_percentage.md);
  } else {
    progress_percentage = parseInt(data.progress_percentage)
      ? parseInt(data.progress_percentage)
      : 75;
  }

  let progress_width;
  if (typeof data.progress_width === 'object') {
    progress_width = parseInt(data.progress_width.md);
  } else {
    progress_width = parseInt(data.progress_width)
      ? parseInt(data.progress_width)
      : 5;
  }

  return (
    <div className="pb-pie-progress-addon">
      <div className="pb-pie-progress-addon-content pb-clearfix">
        <div
          className="pb-pie-chart"
          data-size={progress_size}
          data-percent={progress_percentage}
          data-width={progress_width}
          data-barcolor={data.progress_bar_active}
          data-trackcolor={data.progress_bar}
        >
          {data.show_icon_title === 1 && data.progress_title && (
            <div className="pb-chart-title">
              <span>{data.progress_title}</span>
            </div>
          )}
          {data.show_icon_title === 2 && data.icon_list && (
            <div className="pb-chart-icon">
              <span>
                <i className={data.icon_list}></i>
              </span>
            </div>
          )}
          {data.show_icon_title !== 1 && data.show_icon_title !== 2 && (
            <div className="pb-chart-percent">
              <span></span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PieProgress;
