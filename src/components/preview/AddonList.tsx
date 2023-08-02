import Addon from './Addon';
import InnerRow from './InnerRow';

const AddonList = ({ addons }) => {
  const addonsClass = 'pb-builder-addons';
  return (
    <div className={addonsClass}>
      {addons.map(
        (addon, index) =>
          addon && (
            <div
              key={index}
              className={addon.type == 'inner_row' ? 'pb-inner-row-addons' : ''}
            >
              {addon.type === 'inner_row' ? (
                <InnerRow key={addon.id} data={addon} index={index} />
              ) : (
                <Addon key={addon.id} addon={addon} />
              )}
            </div>
          )
      )}
    </div>
  );
};

export default AddonList;
