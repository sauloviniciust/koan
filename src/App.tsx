import { Card } from "./components/Card";
import { Carousel } from "./components/Carousel";
import { MobileCarrousel } from "./components/Carousel/mobile";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Main } from "./components/Main";
import { Menu } from "./components/Menu";
import { Socials } from "./components/Socials";
import { Support } from "./components/Support";

export default function App() {

  return (
    <>
      <Menu/>
      <div className=" hidden sm:block ">
      <Carousel/>
      </div>
      <div className=" block sm:hidden">
      <MobileCarrousel/>
      </div>
      <Main/>
      <Socials/>
      <Card/>
      <Support/>
      <Contact/>
      <Footer/>
    </>
  )
}


