import { FaTwitter , FaYoutube , FaDiscord } from 'react-icons/fa' 

const Comp7 = () => {
  return (
    <div className="bg-[#1D1B3F] w-[1200px] h-[19px] flex justify-center items-center justify-between mt-[180px] ml-[80px]">
    <div className="w-[80px] h-[19px] flex justify-center items-center justify-between">
      <FaTwitter className='text-[#9996BA]'/>
      <FaYoutube className='text-[#9996BA]'/>
      <FaDiscord className='text-[#9996BA]'/>
      </div>     
    <div className='text-[#9996BA]'>	&#169;2020-2022 RSBITs All Rights Reserved</div>     
    </div>
  )
}

export default Comp7;