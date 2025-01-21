import { useState } from "react";
import { NavLink } from "react-router-dom";
import Card from "./Card";

function Home(){
    let data=[
        {
            img:'https://cdn.sareeka.com/image/cache/data2021/pink-engagement-lehenga-choli-173005-1000x1375.jpg',
            name:"Ethnic Wear",
            off:"50-60% OFF",
            shop:"Shop Now",
        },
        {
            img:'https://i.pinimg.com/236x/5f/ba/62/5fba627e2d0dcbdb4c412dea872f8a38.jpg',
            name:"Casual Wear",
            off:"30-40% OFF",
            shop:"Shop Now",
        },
        {
            img:'https://img.ltwebstatic.com/images3_spmp/2023/12/29/df/17037803028ef58b0d8c224501624941ca55fc86d6_thumbnail_750x999.webp',
            name:"Men's Activewear",
            off:"60-70% OFF",
            shop:"Shop Now",
        },
        {
            img:'https://diariesofnomad.com/cdn/shop/files/VivaHandmadeEyewearChain01_01ff3d9e-9d56-4c99-9234-434078d912f0.jpg?v=1714094553&width=2048',
            name:"Eyewears",
            off:"70-80% OFF",
            shop:"Shop Now",
        },
        {
            img:'https://wholetex.sgp1.cdn.digitaloceanspaces.com/full/rafta-heavy-rayon-long-western-wear-dress-470.jpg',
            name:"Western Wear",
            off:"50-60% OFF",
            shop:"Shop Now",
        },
        {
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIDkQyBu0ubnOewhrjfepR7MSPFm-Vw9dYVA&s',
            name:"Sports Wear",
            off:"30-40% OFF",
            shop:"Shop Now",
        },
        {
            img:'https://m.media-amazon.com/images/I/61PwYqnDOUL._AC_UY1100_.jpg',
            name:"Lounge Wear",
            off:"50-60% OFF",
            shop:"Shop Now",
        },
        {
            img:'https://www.jockey.in/cdn/shop/products/1805_WHITE_0105_S123_JKY_1.webp?v=1700034126',
            name:"InnerWear",
            off:"40-50% OFF",
            shop:"Shop Now",
        },
        {
            img:'https://www.patanjaliparidhan.com/pub/media/catalog/product/cache/2d10fdd5f2c9e29bc0fb816e3f3e598c/p/i/piwkbrdpbocor6049black_1_3.jpg',
            name:"Lingerie",
            off:"50-60% OFF",
            shop:"Shop Now",
        },
        {
            img:'https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/2466412/2023/2/23/f98fb842-58a0-477e-9448-956821729a101677146618712DanielKleinWomenRoseGoldAnalogueWatchDK11467-31.jpg',
            name:"Watches",
            off:"50-60% OFF",
            shop:"Shop Now",
        },
        {
            img:'https://dujour.com/wp-content/uploads/6/653_eaae339c4d89fc102edd9dbdb6a28915.jpg',
            name:"Grooming",
            off:"50-60% OFF",
            shop:"Shop Now",
        },
        {
            img:'https://rukminim2.flixcart.com/image/1100/1300/xif0q/makeup-kit/r/4/n/complete-makeup-kit-box-set-of-32-products-for-daily-care-bridal-original-imagj3tjpek3fhww.jpeg?q=20&crop=false',
            name:"Beauty & Makeup",
            off:"50-60% OFF",
            shop:"Shop Now",
        },
        {
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpmaA7WTIaDGDbt1tkUcGJ_wlSiYWtY3n4kw&s',
            name:"Kid's Wear",
            off:"50-60% OFF",
            shop:"Shop Now",
        },
        {
            img:'https://assets.ajio.com/medias/sys_master/root/20230720/zA9Y/64b94f60eebac147fc7ec9d2/-473Wx593H-469520254-brown-MODEL.jpg',
            name:"Men's Footwear",
            off:"50-60% OFF",
            shop:"Shop Now",
        },
        {
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbOaTjXx4RObYpiVfFJgxzDwKGnlrHsldw_w&s',
            name:"Women's Footwear",
            off:"50-60% OFF",
            shop:"Shop Now",
        },
        {
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwaC8sUK5Y9LwXliQdPcQJFZzQtH4b3aMUCw&s',
            name:"Bags,wallets,belts",
            off:"50-60% OFF",
            shop:"Shop Now",
        },
       
        {
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVJ9T5UQsodkITEpg6pAX3Zmm3dbqrkEtPuA&s',
            name:"Office Wear",
            off:"50-60% OFF",
            shop:"Shop Now",
        },
        {
            img:'https://5.imimg.com/data5/PI/BP/ZW/SELLER-7424477/mans-ethnic-wear.jpeg',
            name:"Men's Ethnic Wear",
            off:"50-60% OFF",
            shop:"Shop Now",
        },
        {
            img:'https://hips.hearstapps.com/hmg-prod/images/sheffieldhousedesign-sonyasellersphoto-66f1d31a86001.jpg?crop=1xw:0.9866666666666667xh;center,top&resize=980:*',
            name:"Home Decor",
            off:"50-60% OFF",
            shop:"Shop Now",
        },
        {
            img:'https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/27158764/2024/1/24/53e32679-0e5b-4f28-8e5a-7addac92f6cf1706073498944Inc5StructuredHandheldBagwithTasselled1.jpg',
            name:"Handbags",
            off:"50-60% OFF",
            shop:"Shop Now",
        },
        {
            img:'https://thumbs.dreamstime.com/b/close-up-cool-young-black-guy-listening-to-music-headphones-portrait-92170771.jpg',
            name:"Headphones",
            off:"50-60% OFF",
            shop:"Shop Now",
        },
        {
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ07coRtqNWFJqJagVexXNcQJPa6rAIpMbGdA&s',
            name:"Jewellery",
            off:"50-60% OFF",
            shop:"Shop Now",
        },
        {
            img:'https://www.shopanomaly.com/cdn/shop/products/341SS20CT-1.jpg?v=1584099921',
            name:"Workwear",
            off:"50-60% OFF",
            shop:"Shop Now",
        },
        {
            img:'https://m.media-amazon.com/images/I/91BS05QNsoL._AC_UY1100_.jpg',
            name:"Sleepwear",
            off:"50-60% OFF",
            shop:"Shop Now",
        },

    ];

    const[bio,setBio]=useState(data);
    return(
        
          

      <div className='  bg-gradient-to-r from-white to-purple-700  via-blue-300 h-full py-32 px-4 w-full'>
        <h2 className='text-5xl font-serif font-normal text-center text-fuchsia-800'>Shop By Category</h2>
        <div className='grid grid-cols-5 my-10 gap-8 justify-items-center'>
            {bio.map(items=>{
                return(<Card {...items}></Card>);
            })
            }     
          
        </div>
        
      </div>

        
    );
}

export default Home;