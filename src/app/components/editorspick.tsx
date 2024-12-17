// components/EditorsPick.js
import Image from "next/image";
const EditorsPick = () => {
    return (
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto text-center px-6 lg:px-12">
          {/* Heading Section */}
          <h2 className="text-3xl font-bold text-gray-800 mb-4">EDITOR’S PICK</h2>
          <p className="text-gray-600 mb-8">
            Problems trying to resolve the conflict between 
          </p>
          <div className= "grid grid-flow-col auto-cols-max gap-10 ">
            <div >
            <Image
               src="/boy1.png" 
               alt="boy"
               width={200}
               height={100}
               
             />
             <div className="font-extrabold text-black">Man</div>
             </div>
          
            <div>
            <Image
               src="/women.png" 
               alt="boy"
               width={200}
               height={100}>
             </Image>
             <div className="font-extrabold text-black">Child</div>
             </div>
             <div>
            <Image
               src="/women2.png" 
               alt="boy"
               width={200}
               height={100}
             />
             <div className="font-extrabold text-black">Women</div>
             </div>
             <div>
            <Image
               src="/yellowmen.png" 
               alt="boy"
               width={200}
               height={100}
             />
             <div className="font-extrabold text-black">Accessories</div>
             </div>
          </div>


          
        
        </div>
      </div>
    );
  };
  
  export default EditorsPick;
  