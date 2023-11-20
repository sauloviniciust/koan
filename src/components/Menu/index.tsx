import { useEffect, useState } from "react";

const Menu = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
  
    return(

        <div className={`w-full fixed top-0 z-20 
         transition duration-500 ease-in-out ${
            isScrolled ? "bg-black" : "bg-transparent" }`}>
<div className="p-3 flex lg:flex-row lg:justify-between md:flex-col items-center font-sans">
   <div className="hidden w-full md:block md:w-auto">
       <a href="#">
           <img className="animate-pulse w-56" src="KOAN LOGO1.png"
               alt="koan Logo"  /></a>
   </div>
   <div className="hidden w-full md:block md:w-auto">
       <ul className="flex space-x-8">
           <li><a className="text-2xl  hover:text-lime-500 " href="#caminhada">Historia</a></li>
           <li><a className="text-2xl  hover:text-lime-500 " href=".#conheça">Conheça</a></li>
           <li><a className="text-2xl  hover:text-lime-500 " href="#contato">Contato</a></li>
           <li><a className="text-2xl  hover:text-lime-500  mr-8" href="https://drive.google.com/drive/folders/1_ygTsJVfKWKFkVKbzYacy9AtvRHD6rnt?usp=sharing" target="blank">Presskit</a></li>
       </ul>
   </div>
</div>
<div className="flex justify-center md:hidden ">
   <a href="#">
       <img className="mb-6n w-48 hover:animate-pulse " src="KOAN LOGO1.png"
           alt="koan Logo"  /></a>
</div>
</div>
    )
}

export { Menu }

