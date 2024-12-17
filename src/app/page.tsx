


import ContactBanner from "./components/contactbanner";
import EditorsPick from "./components/editorspick";
import FeaturedPosts from "./components/featuredpost";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import NeuralUniverseSection from "./components/NeuralUniverseSection";
import NewCollection from "./components/newcollection";
import Product from "./components/product";
import ProductCard from "./components/productcard";
import ProductGrid from "./components/productgrid";



export default function Home() {
  return (
    <div>
     
      <ContactBanner/>
      <Navbar/>
   
      <NewCollection/>
      <EditorsPick/>
      <ProductGrid/>
      <Product/>
      <ProductCard/>
      <NeuralUniverseSection/>
      <FeaturedPosts/>
      <Footer/>
      
    
    
    </div>
  );
}
