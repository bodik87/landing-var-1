import { imageSection } from '@/data'
import Image from 'next/image'
import React from 'react'

const ImageSection = () => {
 return (
  <section className="dark:bg-[#313131]">
   <article className='wrapper'>
    <div className="">
     <h2 className="opacity-40">
      Ваші фографії
     </h2>
     <div className="w-full flex gap-5 overflow-x-scroll snap-x snap-mandatory rounded-[32px] scroll_horisontal pb-4">
      {imageSection.map(item => (
       <Image
        key={item.id}
        src={item.image}
        alt={item.title}
        width={1280}
        height={512}
        className={`object-cover rounded-[32px] snap-center`}
        priority
        quality={100}
       />
      ))}
     </div>
    </div>
   </article >
  </section>
 )
}

export default ImageSection