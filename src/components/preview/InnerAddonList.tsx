import InnerAddon from './InnerAddon';

const InnerAddonList = ({ addons }) => {
  const addonsClass = 'pb-builder-addons';
  // if (!addons.length) {
  //   addonsClass = addonsClass + " pb-builder-no-addons";
  // }

  return (
    <div className={addonsClass}>
      {addons.length > 0 &&
        addons.map((addon) => <InnerAddon key={addon.id} addon={addon} />)}
    </div>
  );
};

export default InnerAddonList;
