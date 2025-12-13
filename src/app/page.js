import Hero from "@/components/Hero";
import Video from "@/components/Video";
import Banner from "@/components/Banner";
import Drink from "@/components/Drink";
import Product from "@/components/Product";
import Banner2 from "@/components/Banner2";
import Content from "@/components/Content";
import Icon from "@/components/Icon";
import Images from "@/components/Images";
import About from "@/components/About";
import Content2 from "@/components/Content2";
import ImageContent from "@/components/ImageContent";
import Subscribe from "@/components/Suscribe";
import Social from "@/components/Social";
import Features from "@/components/Features";


export default function Home() {
  return (
    <main>
      <Hero />
      <Banner2 />
      <Drink />
      <Product />
       <Content />
      
      <Features />
      <Icon />
     
      {/* <Images /> */}
      {/* <About /> */}
      {/* <Video /> */}
      <Content2 />
      <ImageContent />
      <Social />
    </main>
  );
}
