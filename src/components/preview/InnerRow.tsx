import { useEffect } from 'react';
import { CssGenerator } from '../../helpers/previewCssGenerator';
import InnerColumn from './InnerColumn';

const InnerRow = ({ data, index }) => {
  useEffect(() => {
    CssGenerator(data, 'row', 'setinline');
  }, []);

  const { settings } = data;

  const overClass = [
    'pb-row-parent',
    'pb-inner-row-parent',
    'pb-row-' + data.id,
  ];

  if (!data.visibility) {
    overClass.push('pb-builder-row-disable');
  } // Disable Class
  if (settings && settings.row_class) {
    overClass.push(settings.row_class);
  } // Extra Row Class

  // Animation
  const attribute = {
    key: data.id,
    id: settings && settings.row_id ? settings.row_id : null,
    'data-row-index': index,
  };
  if (
    settings &&
    typeof settings.row_animation !== 'undefined' &&
    settings.row_animation.itemOpen
  ) {
    if (settings.row_animation.name) {
      overClass.push('pb-wow', 'pb-animated', settings.row_animation.name);
    }
    if (settings.row_animation.delay) {
      attribute['data-wow-delay'] = settings.row_animation.delay + 'ms';
    }
    if (settings.row_animation.duration) {
      attribute['data-wow-duration'] = settings.row_animation.duration + 'ms';
    }
  }

  return (
    <div {...attribute} className={overClass.join(' ')}>
      <div className="pb-container">
        <div className="pb-row">
          {settings && settings.overlay && (
            <div className="pb-row-overlay"></div>
          )}
          {data.columns.map((column, ind) => {
            return (
              <InnerColumn
                key={column.id}
                index={ind}
                innerRow={data}
                column={column}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default InnerRow;
