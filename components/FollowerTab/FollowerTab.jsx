// import React, { useState } from 'react'
// import { RiUserFollowFill , RiUserUnfollowFill, RiAwardLine} from 'react-icons/ri'

// //internal import
// import Style from './FollowerTab.module.css'
// import FollowerTabCard from './FollowerTabCard/FollowerTabCard';

// const FollowerTab = () => {
//   const CardArray = [1,2,3,4,5,6,7,8];
//   const FollowingArray = [1,2,3,4,5,6];
//   const NewsArray = [1,2,3,4,5];

//   const [popular, setPopular] = useState(true);
//   const [following, setFollowing] = useState(false);
//   const [news, setNews] = useState(false);

//   const openPopular=()=> {
//     if(!popular){
//       setPopular(true);
//       setFollowing(false);
//       setNews(false);
//     }
//   }

//   const openFollower=()=> {
//     if(!following){
//       setPopular(false);
//       setFollowing(true);
//       setNews(false);
//     }
//   }

//   const openNews=()=> {

//     if(!news){
//       setPopular(false);
//       setFollowing(false);
//       setNews(true);
//     }

//   }



//   return (
//     <div className={Style.followerTab}>
//       <div className={Style.followerTab_title}>
//         <h2>Top creators List...</h2>
//         <div className={Style.followerTab_tabs}>
//           <div className={Style.followerTab_tabs_btn}>
//             <button onClick={()=> openPopular()}>
//                 <RiUserFollowFill /> Popular
//             </button>
//             <button onClick={()=> openFollower()}>
//                 <RiUserFollowFill /> Following
//             </button>
//             <button onClick={()=> openNews()}>
//                 <RiAwardLine /> NoteWorthy
//             </button>
//           </div>
//         </div>
//       </div>

//       {
//         popular && (
//           <div className={Style.followerTab_box}>
//               {
//                 CardArray.map((item, index)=> (
//                   <FollowerTabCard key={index+1} index={index} item={item} />
//                 ))
//               }
//           </div>
//         )
//       }

//       {
//         following && (
//           <div className={Style.followerTab_box}>
//               {
//                 FollowingArray.map((item, index)=> (
//                   <FollowerTabCard key={index+1} index={index} item={item} />
//                 ))
//               }
//           </div>
//         )
//       }

//       {
//         news && (
//           <div className={Style.followerTab_box}>
//               {
//                 NewsArray.map((item, index)=> (
//                   <FollowerTabCard key={index+1} index={index} item={item} />
//                 ))
//               }
//           </div>
//         )
//       }

//       <div className={Style.followerTab_member}>
//         <div className={Style.followerTab_member_box}>
//           <a href="#">Show me more</a>
//           <a href="#">Become author</a>
//         </div>
//       </div>

//     </div>
//   )
// }

// export default FollowerTab


import React, { useState } from 'react'
import { RiUserFollowFill, RiUserUnfollowFill, RiAwardLine } from 'react-icons/ri'

//internal import
import Style from './FollowerTab.module.css'
import FollowerTabCard from './FollowerTabCard/FollowerTabCard';

const FollowerTab = () => {
  const CardArray = [1, 2, 3, 4, 5, 6, 7, 8];
  const FollowingArray = [1, 2, 3, 4, 5, 6];
  const NewsArray = [1, 2, 3, 4, 5];

  const [activeTab, setActiveTab] = useState('popular');

  const tabData = [
    {
      id: 'popular',
      label: 'Popular',
      icon: RiUserFollowFill,
      data: CardArray
    },
    {
      id: 'following',
      label: 'Following',
      icon: RiUserFollowFill,
      data: FollowingArray
    },
    {
      id: 'news',
      label: 'NoteWorthy',
      icon: RiAwardLine,
      data: NewsArray
    }
  ];

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  const getCurrentTabData = () => {
    return tabData.find(tab => tab.id === activeTab)?.data || [];
  };

  return (
    <div className={Style.followerTab}>
      <div className={Style.followerTab_title}>
        <h2>Top creators List...</h2>
        <div className={Style.followerTab_tabs}>
          <div className={Style.followerTab_tabs_btn}>
            {tabData.map((tab) => {
              const IconComponent = tab.icon;
              return (
                <button 
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={activeTab === tab.id ? Style.active : ''}
                  aria-pressed={activeTab === tab.id}
                >
                  <IconComponent /> 
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className={Style.followerTab_box}>
        {getCurrentTabData().map((item, index) => (
          <FollowerTabCard key={`${activeTab}-${index}`} index={index} item={item} />
        ))}
      </div>

      <div className={Style.followerTab_member}>
        <div className={Style.followerTab_member_box}>
          <a href="#" className={Style.show_more}>Show me more</a>
          <a href="#" className={Style.become_author}>Become author</a>
        </div>
      </div>
    </div>
  )
}

export default FollowerTab