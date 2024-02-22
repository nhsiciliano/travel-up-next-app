import Image from 'next/image'
import React from 'react'


export default function PlaceCard({ place }) {
    const BASE_URL_PHOTO="https://maps.googleapis.com/maps/api/place/photo?maxwidth=400";
    return (
        <div className='w-full h-full z-10 border-[1px] rounded-xl shadow-md hover:scale-105 transition-all cursor-pointer'>
            <Image
                src={BASE_URL_PHOTO+"&photo_reference="+place?.photos[0]?.photo_reference+"&key="+process.env.NEXT_PUBLIC_GOOGLE_PLACE_KEY}
                alt='placeholder'
                width={200}
                height={80}
                className='w-full h-[180px] object-cover rounded-t-xl'
            />
            <div className='p-2'>
                <h2 className='line-clamp-2'>{place.name}</h2>
                <div className='flex gap-2 mt-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-red-500">
                        <path fill-rule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd" />
                    </svg>
                    <h2 className='text-[12px] text-gray-400 line-clamp-2'>{place.formatted_address}</h2>
                </div>
                <div className='flex gap-2 mt-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-red-500">
                        <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
                    </svg>
                    <h2 className='text-[12px] text-gray-400 line-clamp-2 tracking-wider'>{place.rating} ({place.user_ratings_total})</h2>
                </div>
            </div>
        </div>
    )
}
