

function Card({img,name,off,shop}){
    

    return(       
            <div className='flex flex-col   h-80 overflow-hidden w-40 p-2 bg-purple-500  items-center cursor-pointer hover:scale-105 transition-all duration-500'>
            <img className='h-56' src={img} ></img>
            <h2 className='text-md font-semibold text-white'>{name}</h2>
            <h2 className='text-md font-bold text-white'>{off}</h2>
            <h2 className='text-md font-semibold text-white'>{shop}</h2>
          </div>
        
    );
}

export default Card;