import { useState } from 'react';
import ReactHtmlParser from 'react-html-parser';

const Tab = ({ data }) => {
  const [activeTab, setActiveTab] = useState(0);

  const classList = `${
    data.tabtype ? data.tabtype + '-tab' : ' horizontal-tab'
  } 
                    ${
                      data.vertical_position
                        ? ' ' + data.vertical_position
                        : ' verticalleft'
                    } 
                    ${
                      data.horizontal_align
                        ? ' ' + data.horizontal_align
                        : ' horizontalcenter'
                    }`;

  return (
    <div className="pb-tab-addon">
      <div className={`pb-tab-addon-content ${classList}`}>
        <ul className="pb-tab-nav">
          {data.tab_list.map((value, key) => {
            const activeClass = key === activeTab ? 'active' : '';
            return (
              <li
                className={`pb-tab-nav-list pb-nav-${value.icon_position} ${activeClass}`}
                onClick={() => setActiveTab(key)}
                key={key}
              >
                <div className="pb-tab-nav-list-wrap">
                  <div>
                    {(value.icon_position === 'left' ||
                      value.icon_position === 'top') &&
                      value.icon_list && <i className={value.icon_list}></i>}
                    <span className="pb-tab-title-content">{value.title}</span>
                    {value.icon_position === 'right' && value.icon_list && (
                      <i className={value.icon_list}></i>
                    )}
                    <span className="pb-tab-subtitle-content">
                      {value.subtitle}
                    </span>
                    {value.icon_position === 'bottom' && value.icon_list && (
                      <i className={value.icon_list}></i>
                    )}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
        <div className="pb-tab-content-wrap">
          {data.tab_list.map((value, key) => {
            const activeContent = key === activeTab ? 'active' : '';
            return (
              <div
                id={`tab-${key}`}
                className={`pb-tab-content ${activeContent}`}
                key={key}
              >
                {ReactHtmlParser(value.content)}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Tab;
