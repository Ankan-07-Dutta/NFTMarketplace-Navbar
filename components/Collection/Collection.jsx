// import React, { useState } from 'react'
// import { BsFillAlarmFill,
//     BsFillCalendarDateFill,
//     BsCalendar3,
//  } from 'react-icons/bs';

// //Internal import
// import Style from './Collection.module.css';
// import DaysComponents from './DaysComponents/DaysComponents';

// const Collection = () => {
//     const [popular, setPopular] = useState(true);
//     const [following, setFollowing] = useState(false);
//     const [news, setNews] = useState(false);

//     const CardArray = [1,2,3,4,5,6,7,8];
//     const followingArray = [1,2,3,4];
//     const newsArray = [1,2,3,4,5,6];

//     const openPopular = ()=> {
//         if(!popular){
//             setPopular(true);
//             setFollowing(false);
//             setNews(false);
//         }
//     }

//     const openFollower = ()=> {
//         if(!following){
//             setPopular(false);
//             setFollowing(true);
//             setNews(false);
//         }
//     }

//     const openNews = ()=> {
//         if(!news){
//             setPopular(false);
//             setFollowing(false);
//             setNews(true);
//         }
//     }


//   return (
//     <div className={Style.collection}>
        
//       <div className={Style.collection_title}> 
//         <h2>Top List Creators</h2>
//         <div className={Style.collection_collections}>
//             <div className={Style.collection_collections_btn}>
//                 <button onClick={()=> openPopular()}>
//                     <BsFillAlarmFill /> 24 Hours
//                 </button>
//                 <button onClick={()=> openFollower()}>
//                     <BsCalendar3 /> 7 Days
//                 </button>
//                 <button onClick={()=> openNews()}>
//                     <BsFillCalendarDateFill /> 30 Days
//                 </button>
//             </div>
//         </div>
//       </div>

//       {
//         popular && (
//             <div className={Style.collection_box}>
//                 {
//                     CardArray.map((item, index)=> (
//                         <DaysComponents key={index+1}/>
//                     ))
//                 }
//             </div>
//         )
//       }

//       {
//         following && (
//             <div className={Style.collection_box}>
//                 {
//                     followingArray.map((item, index)=> (
//                         <DaysComponents key={index+1}/>
//                     ))
//                 }
//             </div>
//         )
//       }

//       {
//         news && (
//             <div className={Style.collection_box}>
//                 {
//                     newsArray.map((item, index)=> (
//                         <DaysComponents key={index+1}/>
//                     ))
//                 }
//             </div>
//         )
//       }
//     </div>
//   )
// }

// export default Collection
import React, { useState } from 'react';
import { BsFillAlarmFill, BsFillCalendarDateFill, BsCalendar3 } from 'react-icons/bs';
import DaysComponents from './DaysComponents/DaysComponents';
import Style from './Collection.module.css';

// Constants for better maintainability
const TIME_PERIODS = {
  HOURS_24: '24h',
  DAYS_7: '7d',
  DAYS_30: '30d',
};

const TABS = [
  {
    id: TIME_PERIODS.HOURS_24,
    label: '24 Hours',
    icon: BsFillAlarmFill,
    itemCount: 8,
  },
  {
    id: TIME_PERIODS.DAYS_7,
    label: '7 Days', 
    icon: BsCalendar3,
    itemCount: 4,
  },
  {
    id: TIME_PERIODS.DAYS_30,
    label: '30 Days',
    icon: BsFillCalendarDateFill,
    itemCount: 6,
  },
];

const Collection = () => {
  const [activeTab, setActiveTab] = useState(TIME_PERIODS.HOURS_24);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const getActiveTabData = () => {
    return TABS.find(tab => tab.id === activeTab);
  };

  const renderTabButtons = () => {
    return TABS.map((tab) => {
      const IconComponent = tab.icon;
      return (
        <button
          key={tab.id}
          onClick={() => handleTabClick(tab.id)}
          className={`${Style.collection_collections_btn_item} ${
            activeTab === tab.id ? Style.active : ''
          }`}
          aria-pressed={activeTab === tab.id}
        >
          <IconComponent className={Style.button_icon} />
          {tab.label}
        </button>
      );
    });
  };

  const renderCollectionItems = () => {
    const activeTabData = getActiveTabData();
    if (!activeTabData) return null;

    return Array.from({ length: activeTabData.itemCount }, (_, index) => (
      <DaysComponents key={`${activeTab}-${index}`} />
    ));
  };

  return (
    <div className={Style.collection}>
      <div className={Style.collection_title}>
        <h2>Top List Creators</h2>
        <div className={Style.collection_collections}>
          <div className={Style.collection_collections_btn}>
            {renderTabButtons()}
          </div>
        </div>
      </div>

      <div className={Style.collection_box}>
        {renderCollectionItems()}
      </div>
    </div>
  );
};

export default Collection;