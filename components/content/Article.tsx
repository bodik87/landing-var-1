import React from 'react'

const Article = () => {
 return (
  <article className="wrapper">
   <div className="min-h-[500px] h-full px-5 md:px-10 pt-10 pb-28 bg-black/10 dark:bg-[#313131]">
    <h2 className='leading-none mt-5'>
     <span className=" text-app-black/50 dark:text-white/50">Текст. </span>
     Акцент на головних словах
    </h2>
    <h3 className='mt-2 mb-5 text-app-black/50 dark:text-white/50'>Підзаголовки для пояснення</h3>

    <div className='grid gap-5 te grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
     <p className='text-app-black/50 dark:text-[#939393]'>Lorem Ipsum is simply dummy text of the printing and <span className='text-accent'>typesetting industry</span>. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of <span className='text-accent'>type and scrambled it to make a type specimen book</span>.</p>

     <p className='text-app-black/50 dark:text-[#939393]'>It has survived not only five centuries, but also the leap into electronic typesetting, <span className='text-accent'>remaining essentially unchanged</span>. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like <span className='text-accent'>Aldus PageMaker</span> including versions of Lorem Ipsum.</p>

     <p className='text-app-black/50 dark:text-[#939393]'>Lorem Ipsum is simply dummy text of the printing and <span className='text-accent'>typesetting industry</span>. Lorem Ipsum, when an unknown printer took a galley of type and scrambled it to make <span className='text-accent'>a type specimen book</span>.</p>

    </div>
   </div>
  </article >
 )
}

export default Article