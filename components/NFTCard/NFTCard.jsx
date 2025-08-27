import React, { useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { BsImages } from 'react-icons/bs';
import Image from 'next/image';


//Internal Import
import Style from './NFTCard.module.css';
import images from '../../img';

const NFTCard = () => {
    const featuredArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const [like, setLike] = useState(true);

    const likeNft = () => {
        if (!like) {
            setLike(true);
        } else {
            setLike(false);
        }
    }


    return (
        <div className="card">
            <div className={Style.NFTCard}>

            {
                featuredArray.map((item, index) => (
                    <div className={Style.NFTCard_box} key={index + 1}>

                        {/* card image */}
                        <div className={Style.NFTCard_box_img}>
                            <Image src={images.nft_image_1}
                                alt='NFT images'
                                // width={500}
                                // height={400}
                                // layout='responsive'
                                className={Style.NFTCard_box_img_img}
                            />
                        </div>

                        {/* like and remaining time */}
                        <div className={Style.NFTCard_box_update}>
                            <div className={Style.NFTCard_box_update_left}>
                                <div className={Style.NFTCard_box_update_left_like}
                                    onClick={() => likeNft()}>
                                    {
                                        like ? (
                                            <AiOutlineHeart />
                                        ) : (
                                            <AiFillHeart
                                                className={Style.NFTCard_box_update_left_like_icon}
                                            />
                                        )
                                    }

                                    {""} 22
                                </div>
                            </div>

                            <div className={Style.NFTCard_box_update_right}>
                                <div className={Style.NFTCard_box_update_right_info}>
                                    <small>Remaining time</small>
                                    <p>3h : 15m :20s</p>
                                </div>
                            </div>
                        </div>
                        
                        
                        <div className={Style.NFTCard_box_update_details}>
                            <div className={Style.NFTCard_box_update_details_price}>
                                <div className={Style.NFTCard_box_update_details_price_box}>
                                    <h4>Clone #17373</h4>

                                    <div className={Style.NFTCard_box_update_details_price_box_box}>
                                        <div className={Style.NFTCard_box_update_details_price_box_bid}>
                                            <small>Current Bid</small>
                                            <p>1.000ETH</p>
                                        </div>
                                        <div className={Style.NFTCard_box_update_details_price_box_stock}>
                                            <small>61 in stock</small>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={Style.NFTCard_box_update_details_category}>
                                <BsImages />
                            </div>
                        </div>
                    </div>
                ))}
        </div>
        </div>
        
    )
}

export default NFTCard
