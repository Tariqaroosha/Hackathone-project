import React from "react";
import Image from "next/image";



function Product (){
    return(
        <div className="grid grid-flow-col p-9 ml-10 gap-0">
            
            <div >
            <Image
               src="/white.png" 
               alt="girl"
               width={200}
               height={100}
             />
              <div className='font-bold text-black p-4 ml-5'>Graphic Design</div>
             <div className='text-slate-600 ml-6 m-4 '>English Department</div>
             <span className='text-slate-700 ml-2 pl-6 p-2 font-bold'>$16.48</span> <span className='text-green-800 p-1 pl-1 font-bold'>$6.48</span>
            </div>
             <div>
             <Image
               src="/yellow.png" 
               alt="girl"
               width={200}
               height={100}
             />
              <div className='font-bold text-black p-4 ml-5'>Graphic Design</div>
             <div className='text-slate-600 ml-6 m-4'>English Department</div>
             <span className='text-slate-700 ml-2 pl-6 p-2 font-bold'>$16.48</span> <span className='text-green-800 p-1 pl-1 font-bold'>$6.48</span>
             </div>
             <div>
             <Image
               src="/red.png" 
               alt="girl"
               width={200}
               height={100}
             />
              <div className='font-bold text-black p-4 ml-5'>Graphic Design</div>
             <div className='text-slate-600 ml-6 m-4 '>English Department</div>
             <span className='text-slate-700 ml-2 pl-6 p-2 font-bold'>$16.48</span> <span className='text-green-800 p-1 pl-1 font-bold'>$6.48</span>
             </div>
             <div>
             <Image
               src="/black.png" 
               alt="girl"
               width={200}
               height={100}
             />
              <div className='font-bold text-black p-4 ml-5'>Graphic Design</div>
             <div className='text-slate-600 ml-6 m-4'>English Department</div>
             <span className='text-slate-700 ml-2 pl-6 p-2 font-bold'>$16.48</span> <span className='text-green-800 p-1 pl-1 font-bold'>$6.48</span>
             </div>
            
        </div>
    )
}

export default Product