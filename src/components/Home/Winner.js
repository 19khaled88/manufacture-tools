import {
  useWindowSize
} from '@react-hook/window-size';
import React from 'react';
import Confetti from 'react-confetti';
import certificate1 from '../../assets/certificate-template-.jpg';
import certificate from '../../assets/certificate_completion.jpg';
import image from '../../assets/download (1).png';
import image1 from '../../assets/download.png';
import trophy from '../../assets/trophy-cup-award.jpg';

const Winner = (props) => {
    const [width, height] = useWindowSize()
  return (
    <div className='absolute w-full '>
      <p className='absolute inset-x-0 top-0  text-3xl flex w-full mx-auto justify-center items-center'>We are undefeated Winner</p>
      <Confetti
      width={width}
      height={height}
        
      />

      <div className='absolute inset-x-0 top-0 pt-16 h-auto mb-24 flex flex-row w-full mx-auto   container'>
       
        <div className='flex-1'>
          <div className='relative mb-16'>
            <div class="avatar flex flex-col absolute top-0 left-0">
              <div class="w-32 ml-6 flex mt-1 rounded-full">
                <img className='' src={certificate} />
              </div>
              <p>Certificate of completion on 2020</p>
            </div>
            <div class="avatar flex flex-col pl-64">
              <div class="w-32 rounded-full">
                <img src={certificate1} />
              </div>
              <p className='text-left'>Certificate of completion on 2021</p>
            </div>
          </div>
        
         <div className='relative'>
            <div class="avatar">
                <div class="w-32 rounded-full">
                  <img src={image} />
                </div>
            </div>
            <div class="avatar absolute top-0 right-0">
              <div class="w-32 rounded-full">
                <img src={image1} />
              </div>
            </div>
         </div>
          
        </div>
      
        <div className='flex-1 flex flex-row text-left'>
          <div className='flex flex-col'>
            <p className='text-2xl text-amber-400'>Awards</p>
            <p>Award always matters organization like us. We really deserve for this. Now it's time for us. Our journey will not end after this</p>
          </div>
          <img className='pt-8 w-96 h-96' src={trophy} alt='' />
        </div>
        </div>
    </div>
  );
}

export default Winner;
