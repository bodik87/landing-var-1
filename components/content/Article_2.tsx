import Image from 'next/image'
import React from 'react'

const Article_2 = () => {
 return (
  <section className="dark:bg-[#313131]">
   <article className='wrapper'>
    <div className="">
     <h2 className="opacity-40">
      Article title
     </h2>
     <div className="w-full flex gap-5 overflow-x-scroll snap-x snap-mandatory rounded-[32px] scroll_horisontal pb-4">
      <Image
       src={'/banner.jpg'}
       alt={`banner`}
       width={1280}
       height={512}
       className="object-cover rounded-[32px] snap-center"
       priority
       quality={100}
      />
      <Image
       src={'/banner.jpg'}
       alt={`banner`}
       width={1280}
       height={512}
       className="object-cover rounded-[32px] snap-center"
       priority
       quality={100}
      />
      <Image
       src={'/banner.jpg'}
       alt={`banner`}
       width={1280}
       height={512}
       className="object-cover rounded-[32px] snap-center"
       priority
       quality={100}
      />
     </div>
    </div>
   </article >
  </section>
 )
}

export default Article_2