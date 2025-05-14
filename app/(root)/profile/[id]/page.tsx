import Header from '@/components/Header';
import VideoCard from '@/components/videoCard';
import { dummyCards } from '@/constants';
import React from 'react'

const page =async ({ params}: ParamsWithSearch) => {
    const { id } = await params;
  return (
    <div className='wrapper page'>
        <Header subHeader="husnainali41940@gmail.com" title="Husnian|Ali" userImg="/assets/images/dummy.jpg"/>


<section className='video-grid'>
      {dummyCards.map((card)=>(
  <VideoCard key={card.id} { ...card} />
))} 
</section>
        
      
    </div>
  )
}

export default page
