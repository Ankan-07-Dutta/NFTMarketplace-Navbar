// import React, { useState } from 'react';
// import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
// import { BsImages } from 'react-icons/bs';
// import Image from 'next/image';


// //Internal Import
// import Style from './NFTCard.module.css';
// import images from '../../img';

// const NFTCard = () => {
//     const featuredArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//     const [like, setLike] = useState(true);

//     const likeNft = () => {
//         if (!like) {
//             setLike(true);
//         } else {
//             setLike(false);
//         }
//     }


//     return (
//         <div className="card">
//             <div className={Style.NFTCard}>

//             {
//                 featuredArray.map((item, index) => (
//                     <div className={Style.NFTCard_box} key={index + 1}>

//                         {/* card image */}
//                         <div className={Style.NFTCard_box_img}>
//                             <Image src={images.nft_image_1}
//                                 alt='NFT images'
//                                 // width={500}
//                                 // height={400}
//                                 // layout='responsive'
//                                 className={Style.NFTCard_box_img_img}
//                             />
//                         </div>

//                         {/* like and remaining time */}
//                         <div className={Style.NFTCard_box_update}>
//                             <div className={Style.NFTCard_box_update_left}>
//                                 <div className={Style.NFTCard_box_update_left_like}
//                                     onClick={() => likeNft()}>
//                                     {
//                                         like ? (
//                                             <AiOutlineHeart />
//                                         ) : (
//                                             <AiFillHeart
//                                                 className={Style.NFTCard_box_update_left_like_icon}
//                                             />
//                                         )
//                                     }

//                                     {""} 22
//                                 </div>
//                             </div>

//                             <div className={Style.NFTCard_box_update_right}>
//                                 <div className={Style.NFTCard_box_update_right_info}>
//                                     <small>Remaining time</small>
//                                     <p>3h : 15m :20s</p>
//                                 </div>
//                             </div>
//                         </div>
                        
                        
//                         <div className={Style.NFTCard_box_update_details}>
//                             <div className={Style.NFTCard_box_update_details_price}>
//                                 <div className={Style.NFTCard_box_update_details_price_box}>
//                                     <h4>Clone #17373</h4>

//                                     <div className={Style.NFTCard_box_update_details_price_box_box}>
//                                         <div className={Style.NFTCard_box_update_details_price_box_bid}>
//                                             <small>Current Bid</small>
//                                             <p>1.000ETH</p>
//                                         </div>
//                                         <div className={Style.NFTCard_box_update_details_price_box_stock}>
//                                             <small>61 in stock</small>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className={Style.NFTCard_box_update_details_category}>
//                                 <BsImages />
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//         </div>
//         </div>
        
//     )
// }

// export default NFTCard

import React, { useState, useCallback, useMemo } from 'react';
import Image from 'next/image';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { BsImages, BsClock, BsEyeFill } from 'react-icons/bs';
import { MdVerified } from 'react-icons/md';
import PropTypes from 'prop-types';

import Style from './NFTCard.module.css';
import images from '../../img';

const NFTCard = ({ 
  nfts = [],
  gridColumns = 3,
  showLikes = true,
  showTimer = true,
  onNFTClick,
  onLikeClick,
  className = "",
  loading = false 
}) => {
    // Add state for view count to manage client-side rendering
  const [viewCount, setViewCount] = useState(0);
  const [likedItems, setLikedItems] = useState(new Set());

  // Default NFT data if none provided
  const defaultNFTs = useMemo(() => [
    {
      id: 1,
      title: "Cosmic Dreams #1",
      image: images.nft_image_1,
      currentBid: "2.45",
      currency: "ETH",
      timeLeft: { hours: 3, minutes: 15, seconds: 20 },
      likes: 22,
      stock: 1,
      creator: { name: "CryptoArtist", verified: true },
      category: "Digital Art"
    },
    {
      id: 2,
      title: "Neon Warriors #7",
      image: images.nft_image_1,
      currentBid: "1.89",
      currency: "ETH",
      timeLeft: { hours: 12, minutes: 45, seconds: 30 },
      likes: 156,
      stock: 3,
      creator: { name: "PixelMaster", verified: true },
      category: "Gaming"
    },
    {
      id: 3,
      title: "Abstract Minds #23",
      image: images.nft_image_1,
      currentBid: "0.95",
      currency: "ETH",
      timeLeft: { hours: 1, minutes: 30, seconds: 45 },
      likes: 89,
      stock: 1,
      creator: { name: "ArtVision", verified: false },
      category: "Abstract"
    },
    {
      id: 4,
      title: "Digital Landscapes #12",
      image: images.nft_image_1,
      currentBid: "3.21",
      currency: "ETH",
      timeLeft: { hours: 8, minutes: 20, seconds: 15 },
      likes: 234,
      stock: 2,
      creator: { name: "NatureTech", verified: true },
      category: "Landscape"
    },
    {
      id: 5,
      title: "Cyber Punk #456",
      image: images.nft_image_1,
      currentBid: "1.67",
      currency: "ETH",
      timeLeft: { hours: 5, minutes: 10, seconds: 0 },
      likes: 178,
      stock: 1,
      creator: { name: "FutureVibe", verified: true },
      category: "Cyberpunk"
    },
    {
      id: 6,
      title: "Ocean Waves #89",
      image: images.nft_image_1,
      currentBid: "2.11",
      currency: "ETH",
      timeLeft: { hours: 24, minutes: 0, seconds: 0 },
      likes: 145,
      stock: 4,
      creator: { name: "SeaArtist", verified: false },
      category: "Nature"
    }
  ], []);

  const displayNFTs = nfts.length > 0 ? nfts : defaultNFTs;

  const handleLikeToggle = useCallback((nftId, event) => {
    event.stopPropagation();
    
    setLikedItems(prev => {
      const newLiked = new Set(prev);
      if (newLiked.has(nftId)) {
        newLiked.delete(nftId);
      } else {
        newLiked.add(nftId);
      }
      return newLiked;
    });

    if (onLikeClick) {
      onLikeClick(nftId, !likedItems.has(nftId));
    }
  }, [likedItems, onLikeClick]);

  const handleNFTClick = useCallback((nft) => {
    if (onNFTClick) {
      onNFTClick(nft);
    }
  }, [onNFTClick]);

  const handleKeyDown = useCallback((event, nft) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleNFTClick(nft);
    }
  }, [handleNFTClick]);

  const formatTimeLeft = useCallback((timeLeft) => {
    if (!timeLeft) return "0h : 0m : 0s";
    const { hours = 0, minutes = 0, seconds = 0 } = timeLeft;
    return `${hours}h : ${minutes}m : ${seconds}s`;
  }, []);

  const formatPrice = useCallback((price, currency = "ETH") => {
    const numPrice = parseFloat(price);
    if (isNaN(numPrice)) return `${price} ${currency}`;
    return `${numPrice.toFixed(3)} ${currency}`;
  }, []);

  const getCategoryIcon = useCallback((category) => {
    const iconMap = {
      'Digital Art': '🎨',
      'Gaming': '🎮',
      'Abstract': '🔮',
      'Landscape': '🌄',
      'Cyberpunk': '🤖',
      'Nature': '🌊'
    };
    return iconMap[category] || '🖼️';
  }, []);

  const renderNFTCard = useCallback((nft, index) => {
    const isLiked = likedItems.has(nft.id);
    const adjustedLikes = nft.likes + (isLiked ? 1 : 0);

      
    return (
      <article
        key={nft.id}
        className={Style.nft_card_box}
        onClick={() => handleNFTClick(nft)}
        onKeyDown={(e) => handleKeyDown(e, nft)}
        tabIndex={0}
        role="button"
        aria-label={`View ${nft.title} NFT`}
      >
        {/* NFT Image */}
        <div className={Style.nft_image_container}>
          <Image
            src={nft.image}
            alt={nft.title}
            fill
            className={Style.nft_image}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={index < 3}
          />
          
          {/* Overlay Content */}
          <div className={Style.nft_overlay}>
            {/* Like Button and Timer */}
            <div className={Style.nft_top_section}>
              {showLikes && (
                <button
                  className={`${Style.like_button} ${isLiked ? Style.liked : ''}`}
                  onClick={(e) => handleLikeToggle(nft.id, e)}
                  aria-label={`${isLiked ? 'Unlike' : 'Like'} ${nft.title}`}
                  type="button"
                >
                  {isLiked ? (
                    <AiFillHeart className={Style.heart_filled} />
                  ) : (
                    <AiOutlineHeart className={Style.heart_outline} />
                  )}
                  <span>{adjustedLikes}</span>
                </button>
              )}

              {showTimer && nft.timeLeft && (
                <div className={Style.timer_section}>
                  <div className={Style.timer_content}>
                    <BsClock className={Style.clock_icon} />
                    <div className={Style.timer_info}>
                      <small>Ends in</small>
                      <p>{formatTimeLeft(nft.timeLeft)}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Details */}
            <div className={Style.nft_details}>
              <div className={Style.nft_info_section}>
                <div className={Style.nft_main_info}>
                  <h3 className={Style.nft_title}>{nft.title}</h3>
                  
                  {nft.creator && (
                    <div className={Style.creator_info}>
                      <span className={Style.creator_label}>by</span>
                      <span className={Style.creator_name}>
                        {nft.creator.name}
                        {nft.creator.verified && (
                          <MdVerified 
                            className={Style.verified_icon}
                            aria-label="Verified creator"
                          />
                        )}
                      </span>
                    </div>
                  )}

                  <div className={Style.bid_stock_section}>
                    <div className={Style.bid_info}>
                      <small>Current Bid</small>
                      <p className={Style.bid_price}>
                        {formatPrice(nft.currentBid, nft.currency)}
                      </p>
                    </div>
                    
                    {nft.stock > 1 && (
                      <div className={Style.stock_info}>
                        <small>{nft.stock} in stock</small>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className={Style.category_section}>
                <div className={Style.category_icon} title={nft.category}>
                  <span className={Style.category_emoji}>
                    {getCategoryIcon(nft.category)}
                  </span>
                  <BsImages className={Style.images_icon} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* View Count (optional) */}
        {/* <div className={Style.view_count}>
          <BsEyeFill />
          <span>{Math.floor(Math.random() * 1000) + 100}</span> 
          <span>{viewCount}</span>
        </div> */}

      </article>
    );
  }, [
    
    likedItems, 
    handleLikeToggle, 
    handleNFTClick, 
    handleKeyDown, 
    showLikes, 
    showTimer, 
    formatTimeLeft, 
    formatPrice, 
    getCategoryIcon
  ]);

  if (loading) {
    return (
      <div className={`${Style.nft_card_container} ${className}`}>
        <div className={Style.nft_grid} style={{ '--grid-columns': gridColumns }}>
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className={`${Style.nft_card_box} ${Style.loading_skeleton}`}>
              <div className={Style.skeleton_content}></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (!displayNFTs.length) {
    return (
      <div className={`${Style.nft_card_container} ${className}`}>
        <div className={Style.empty_state}>
          <BsImages className={Style.empty_icon} />
          <h3>No NFTs available</h3>
          <p>Check back later for new collections</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`${Style.nft_card_container} ${className}`}>
      <div className={Style.nft_grid} style={{ '--grid-columns': gridColumns }}>
        {displayNFTs.map((nft, index) => renderNFTCard(nft, index))}
      </div>
    </div>
  );
};

NFTCard.propTypes = {
  nfts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.any.isRequired,
    currentBid: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    currency: PropTypes.string,
    timeLeft: PropTypes.shape({
      hours: PropTypes.number,
      minutes: PropTypes.number,
      seconds: PropTypes.number,
    }),
    likes: PropTypes.number,
    stock: PropTypes.number,
    creator: PropTypes.shape({
      name: PropTypes.string,
      verified: PropTypes.bool,
    }),
    category: PropTypes.string,
  })),
  gridColumns: PropTypes.number,
  showLikes: PropTypes.bool,
  showTimer: PropTypes.bool,
  onNFTClick: PropTypes.func,
  onLikeClick: PropTypes.func,
  className: PropTypes.string,
  loading: PropTypes.bool,
};

export default NFTCard;