import { ReactElement, useEffect, useState } from 'react';
import PageData from '@/page-data';

const AddonContent = ({ addon }) => {
  const [htmlContent, setHtmlContent] = useState<ReactElement>(<></>);

  useEffect(() => {
    setHtmlContent(() => {
      const { Editor } = PageData.addonsJSON[addon.name];
      return <Editor data={addon.settings} />;
    });
  }, []);

  return <div className="pb-addon">{htmlContent}</div>;
};

export default AddonContent;
