import React from 'react'
import Button from '../Button/Button'
import Freshfruits from '../../assets/fresh-fruits.png'

export default function Discount() {
  return (
    <section className='bg-zinc-100 bg-no-repeat bg-right bg-contain' style={{backgroundImage:`url(${Freshfruits})`}}>
        <div className='md:bg-transparent bg-zinc-100 flex md:flex-row flex-col max-w-[1400] mx-auto px-10 py-10'>
            <span className='  md:text-9xl  text-5xl text-orange-500 font-bold transform md:-rotate-90 md:self-center h-fit'>20%</span>
            <div className='max-w-[700px]'>
                <h3 className=' text-4xl md:text-7xl text-zinc-800 font-bold mt-2'>
                    First Order Discount!
                </h3>
                <p className='text-zinc-600 my-6 '>Enjoy an exclusive first order discount on our grocery on our grocery website! Shop fresh essentials and save big on your first purchase. Fast Delivery  and quality guarnteed.</p>
                <Button content='Get a Discount'/>
            </div>
        </div>
    </section>
  )
}
