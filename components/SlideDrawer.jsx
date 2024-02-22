import Image from 'next/image';
import React from 'react'

export default function SlideDrawer({ place, close }) {
    const onDirectionClick = () => {
        window.open('https://www.google.com/maps/search/?api=1&query='+place.name+place.formatted_address)
    }
    const BASE_URL_PHOTO = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400";
    return (
        <div className='h-screen w-screen md:w-[400px] bg-white shadow-md p-5 z-20'>
            <button onClick={() => close()}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                    <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                </svg>
            </button>
            <div>
                <h2 className='line-clamp-2 text-[20px] font-semibold mb-3'>{place.name}</h2>
                <Image
                    src={BASE_URL_PHOTO + "&photo_reference=" + place?.photos[0]?.photo_reference + "&key=" + process.env.NEXT_PUBLIC_GOOGLE_PLACE_KEY}
                    alt='placeholder'
                    width={200}
                    height={80}
                    className='w-full h-[200px] object-fill rounded-xl'
                />
                <div className='flex gap-2 mt-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-red-500">
                        <path fill-rule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd" />
                    </svg>
                    <h2 className='line-clamp-2 text-[16px] text-gray-400'>{place.formatted_address}</h2>
                </div>
                <div className='flex justify-center gap-5 mt-3'>
                    <button 
                        className='flex gap-2 p-1 px-3 bg-red-500 rounded-xl text-white hover:scale-105 transition-all'
                        onClick={() => onDirectionClick()}    
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                            <path fill-rule="evenodd" d="M8.161 2.58a1.875 1.875 0 0 1 1.678 0l4.993 2.498c.106.052.23.052.336 0l3.869-1.935A1.875 1.875 0 0 1 21.75 4.82v12.485c0 .71-.401 1.36-1.037 1.677l-4.875 2.437a1.875 1.875 0 0 1-1.676 0l-4.994-2.497a.375.375 0 0 0-.336 0l-3.868 1.935A1.875 1.875 0 0 1 2.25 19.18V6.695c0-.71.401-1.36 1.036-1.677l4.875-2.437ZM9 6a.75.75 0 0 1 .75.75V15a.75.75 0 0 1-1.5 0V6.75A.75.75 0 0 1 9 6Zm6.75 3a.75.75 0 0 0-1.5 0v8.25a.75.75 0 0 0 1.5 0V9Z" clip-rule="evenodd" />
                        </svg>
                        <span>Direction</span>
                    </button>
                    <button className='flex gap-2 p-1 px-3 bg-red-500 rounded-xl text-white hover:scale-105 transition-all'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                            <path fill-rule="evenodd" d="M15.75 4.5a3 3 0 1 1 .825 2.066l-8.421 4.679a3.002 3.002 0 0 1 0 1.51l8.421 4.679a3 3 0 1 1-.729 1.31l-8.421-4.678a3 3 0 1 1 0-4.132l8.421-4.679a3 3 0 0 1-.096-.755Z" clip-rule="evenodd" />
                        </svg>
                        <span>Share</span>
                    </button>
                </div>
                <div className='mt-5'>
                    <iframe
                        width={450}
                        height={250}
                        loading="lazy"
                        className='w-full h-[200px] rounded-lg'
                        src={"https://www.google.com/maps/embed/v1/place?key="+process.env.NEXT_PUBLIC_GOOGLE_PLACE_KEY+ "&q="+place.formatted_address}
                    >
                    </iframe>
                </div>
            </div>
        </div>
    )
}
