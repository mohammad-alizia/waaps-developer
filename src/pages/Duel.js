import React from 'react'
import DuelBag from  '../components/Duel_components/duel arena/index'
import DuelBagHeader from  '../components/Duel_components/duel-arena-header/index'
import Comp7 from  '../components/Home_Components/comp7'

const Duel = () => {
  return (
    <div>
      <div className='mt-[40px] ml-[80px] w-[65%]'>
      <DuelBagHeader/>
      </div>
    <div className='flex flex-wrap items-center mt-[20px] ml-[80px] w-[90%] overflow-y-scroll break-words  w-full h-[520px]'>
        <DuelBag/>
        <DuelBag/>
        <DuelBag/>
        <DuelBag/>
        <DuelBag/>
        <DuelBag/>
        <DuelBag/>
        <DuelBag/>
        <DuelBag/>
        <DuelBag/>
        <DuelBag/>     
        <DuelBag/>     
        <DuelBag/>     
        <DuelBag/>     
    </div>

      <Comp7/>
    
    </div>
  )
}

export default Duel