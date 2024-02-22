import React, { useState } from 'react'
import PlaceCard from './PlaceCard'
import Skelto from './Skelto';
import SlideDrawer from './SlideDrawer'

export default function PlaceList({placeList}) {
    const [selectedPlace, setSelectedPlace] = useState([]);
    return (
        <div className='px-[50px] md:px-[60px] mt-7 relative z-10'>
            <h2 className='text-[20px] font-bold'>Search Results</h2>
            <div className='grid grid-cols-2 mb-4 md:grid-cols-3 lg:grid-cols-4 gap-5 relative'>
                {placeList.map((place, index) => (
                    <div key={index} className='relative z-10' onClick={(() => setSelectedPlace(place))}>
                        <PlaceCard place={place}/>
                    </div>
                ))}
            </div>
            {selectedPlace?.name? <div className='fixed top-0 right-0 z-20'>
                <SlideDrawer 
                    close={() => setSelectedPlace([])}
                    place={selectedPlace}    
                />
            </div> : null}
            {placeList?.length==0? <div className='grid grid-cols-2 mb-4 md:grid-cols-3 lg:grid-cols-4 gap-5 relative'>
                {[1,2,3,4,5,6,7,8].map((item, index) => (
                    <Skelto key={index}/>
                ))}
            </div> : null}  
        </div>
    )
}
