import React from 'react';
import Image from 'next/image';

function ProductGrid(){
  
    return(
       <div>
           <div>
              <h2 className='text-center text-slate-600 text-lg p-2'>Featured products</h2>
              <h3 className='text-center text-black text-xl font-bold p-2'>Bestseller Products</h3>
              <p className='text-center text-slate-600 p-2'>Problem trying to resolve the conflict between</p>
           </div>
           <div className='grid grid-flow-col p-9 ml-10 gap-0'>
           <div >
           <Image
               src="/rolegirl.png" 
               alt="girl"
               width={200}
               height={100}
              
             />
             <div className='font-bold text-black p-4 ml-5'>Graphic Design</div>
             <div className='text-slate-600 ml-6 m-4'>English Department</div>
             <span className='text-slate-700 ml-2 pl-6 p-2 font-bold'>$16.48</span> <span className='text-green-800 p-1 pl-1 font-bold'>$6.48</span>

            
           </div>
           <div >
           <Image
               src="/blue.png" 
               alt="boy"
               width={200}
               height={100}
               className="relative group overflow-scroll"
             />
             <div>
             <div className='font-bold text-black p-4 ml-5'>Graphic Design</div>
             <div className='text-slate-600 ml-6 m-4'>English Department</div>
             <span className='text-slate-700 ml-2 pl-6 p-2 font-bold'>$16.48</span> <span className='text-green-800 p-1 pl-1 font-bold'>$6.48</span>
            
           </div>
           </div>
           <div className='w-full h-28'>
           <Image
               src="/black.png" 
               alt="boy"
               width={200}
               height={100}
               
             />

             <div className='font-bold text-black p-4 ml-5'>Graphic Design</div>
             <div className='text-slate-600 ml-6 m-4 '>English Department</div>
             <span className='text-slate-700 ml-2 pl-6 p-2 font-bold'>$16.48</span> <span className='text-green-800 p-1 pl-1 font-bold '>$6.48</span>
           </div>
           
           <div >
           <Image
               src="/women2.png" 
               alt="girl"
               width={200}
               height={100}
             />
             <div className='font-bold text-black p-4 ml-5'>Graphic Design</div>
             <div className='text-slate-600 ml-6 m-4 '>English Department</div>
             <span className='text-slate-700 ml-2 pl-6 p-2 font-bold'>$16.48</span> <span className='text-green-800 p-1 pl-1 font-bold'>$6.48</span>
           </div>
            
           </div>
           
       
          
       
        
          
          
       </div>
    )
}
export default ProductGrid

