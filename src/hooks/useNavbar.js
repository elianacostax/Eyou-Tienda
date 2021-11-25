import { useEffect, useState } from "react";

const useNavbar = () => {
    const [click, setClick] = useState(false);
const [scrollNav, setScrollNav] = useState(false);

  const ChangeClick = () => {
    setClick(!click);
  };

  const changeNav = () =>{
      if(window.scrollY >= 80){
    setScrollNav(true)
      }else{
          setScrollNav(false)
      };
  }

  useEffect(()=>{
      window.addEventListener('scroll', changeNav)
  }, [])

    return [
        click, scrollNav, ChangeClick

    ]
       
    
}

export default useNavbar
