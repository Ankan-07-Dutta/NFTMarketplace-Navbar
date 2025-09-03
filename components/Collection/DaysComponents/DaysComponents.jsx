// import React from 'react';
// import Image from 'next/image';
// import { MdVerified } from 'react-icons/md';

// //internal import 
// import Style from './DaysComponents.module.css';
// import images from '../../../img';

// const DaysComponents = () => {
//   return (
//     <div className={Style.daysComponent}>
//       <div className={Style.daysComponent_box}>
//         <div className={Style.daysComponent_box_img}>
//           <Image src={images.creatorbackground1}
//           className={Style.daysComponent_box_img_img} 
//           alt='profile background'
//           width={465}
//           height={300}
//           style={{ objectFit: "cover" }}
//           />
//         </div>

//         <div className={Style.daysComponent_box_profile}>
//             <Image src={images.creatorbackground2}
//             alt='profile'
//             width={150}
//             height={150}
//             style={{ objectFit: "cover" }}
//             className={Style.daysComponent_box_img_1}/>

//             <Image src={images.creatorbackground2}
//             alt='profile'
//             width={150}
//             height={150}
//             style={{ objectFit: "cover" }}
//             className={Style.daysComponent_box_img_2}/>

//             <Image src={images.creatorbackground2}
//             alt='profile'
//             width={150}
//             height={150}
//             style={{ objectFit: "cover" }}
//             className={Style.daysComponent_box_img_3}/>
//         </div>


//         <div className={Style.daysComponent_box_title}>
//             <h2>Amazing Collection</h2>
//             <div className={Style.daysComponent_box_title_info}>
//                 <div className={Style.daysComponent_box_title_info_profile}>
//                   <Image src={images.user1} 
//                     alt='profile'
//                     width={30}
//                     height={30} 
//                     objectFit='covers'
//                     className={Style.daysComponent_box_title_info_profile_img}
//                   />

//                     <p>Creator <span>Solmon Bhai <small><MdVerified /></small></span>
//                     </p>
//                 </div>

//                 <div className={Style.daysComponent_box_title_info_price}>
//                   <small>1.255 ETH</small>
//                 </div>
//             </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default DaysComponents
import React from 'react';
import Image from 'next/image';
import { MdVerified } from 'react-icons/md';
import PropTypes from 'prop-types';
import Style from './DaysComponents.module.css';
import images from '../../../img';

const DaysComponents = ({ 
  id,
  title = "Amazing Collection",
  creatorName = "Creator Name",
  creatorImage = images.user1,
  isVerified = true,
  price = "1.255",
  currency = "ETH",
  backgroundImage = images.creatorbackground1,
  collectionImages = [
    images.creatorbackground2,
    images.creatorbackground2,
    images.creatorbackground2
  ],
  onClick,
  className = ""
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick({ id, title, creatorName, price });
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleClick();
    }
  };

  const renderCollectionImages = () => {
    return collectionImages.slice(0, 3).map((imageSrc, index) => (
      <div key={index} className={`${Style.collection_image_wrapper} ${Style[`image_${index + 1}`]}`}>
        <Image 
          src={imageSrc}
          alt={`Collection item ${index + 1}`}
          width={150}
          height={150}
          className={Style.collection_image}
          sizes="(max-width: 768px) 100px, 150px"
        />
      </div>
    ));
  };

  const formatPrice = (price, currency) => {
    const numericPrice = parseFloat(price);
    if (isNaN(numericPrice)) return `${price} ${currency}`;
    
    return numericPrice >= 1000 
      ? `${(numericPrice / 1000).toFixed(1)}K ${currency}`
      : `${numericPrice.toFixed(3)} ${currency}`;
  };

  return (
    <article 
      className={`${Style.days_component} ${className}`}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`View ${title} by ${creatorName}`}
    >
      <div className={Style.days_component_box}>
        {/* Main Background Image */}
        <div className={Style.background_image_wrapper}>
          <Image 
            src={backgroundImage}
            alt={`${title} background`}
            width={465}
            height={300}
            className={Style.background_image}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={false}
          />
        </div>

        {/* Collection Preview Images */}
        <div className={Style.collection_preview}>
          {renderCollectionImages()}
        </div>

        {/* Title and Creator Info */}
        <div className={Style.component_content}>
          <header className={Style.component_header}>
            <h3 className={Style.collection_title}>{title}</h3>
          </header>

          <div className={Style.creator_info}>
            <div className={Style.creator_profile}>
              <div className={Style.creator_avatar}>
                <Image 
                  src={creatorImage}
                  alt={`${creatorName} profile`}
                  width={30}
                  height={30}
                  className={Style.avatar_image}
                />
              </div>
              
              <div className={Style.creator_details}>
                <span className={Style.creator_label}>Creator</span>
                <div className={Style.creator_name_wrapper}>
                  <span className={Style.creator_name}>{creatorName}</span>
                  {isVerified && (
                    <MdVerified 
                      className={Style.verified_icon}
                      aria-label="Verified creator"
                      title="Verified creator"
                    />
                  )}
                </div>
              </div>
            </div>

            <div className={Style.price_info}>
              <span className={Style.price_label} aria-label={`Price: ${formatPrice(price, currency)}`}>
                {formatPrice(price, currency)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

DaysComponents.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
  creatorName: PropTypes.string,
  creatorImage: PropTypes.any,
  isVerified: PropTypes.bool,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  currency: PropTypes.string,
  backgroundImage: PropTypes.any,
  collectionImages: PropTypes.arrayOf(PropTypes.any),
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default DaysComponents;