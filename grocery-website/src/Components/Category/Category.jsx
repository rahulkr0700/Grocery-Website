import React from 'react'
import Heading from '../Heading/Heading'
import FruitsCat from '../../assets/fruits-and-veggies.png'
import SeafoodCat from '../../assets/meat-and-seafood.png'
import DairyCat from '../../assets/dairy-and-eggs.png'
import Button from '../Button/Button'

const category=[
   {
      id:1,
      title:'Fruits & Veggies',
      description:'Fresh, organic produce sourced daily from local farms. Explore a wide range of seasonal fruits and crisp vegetables.',
      image:FruitsCat
   },
    {
      id:2,
      title:'Dairy & Eggs',
      description:'Wholesome dairy products and free-range eggs. From creamy milk and yogurt to artisanal cheeses.',
      image:DairyCat
   },
    {
      id:3,
      title:'Meat & SeaFood',
      description:'High-quality, responsibly sourced meat and seafood. Choose from fresh cuts, marinated options, and more.',
      image:SeafoodCat
   },
]

export default function Category() {

   const renderCards=category.map(cards=>{
      return (
         <div className='flex-1 basis-[300px]' key={cards.id}>
            <div className='w-full min-h-[30vh] relative -mb-10'>
               <img src={cards.image}alt="" className='absolute bottom-0' />
            </div>
            <div className='bg-zinc-100 pt-17 p-8 rounded-xl'>
               <h3 className='text-zinc-800 text-3xl font-bold'>{cards.title}</h3>
               <p className='text-zinc-600 mt-3 mb-9'>{cards.description}</p>
               <Button content='See all'/>
            </div>
         </div>
      )
   })
  return (
     <section>
        <div className='py-20 max-w-[1400px] mx-auto px-10'>
             <Heading highlight="Shop" heading="by Category"/>

             {/* Category Card */}
             <div className='flex gap-10 md:mt-15 flex-wrap'>
               {renderCards}
             </div> 
        </div>
     </section>
  )
}


