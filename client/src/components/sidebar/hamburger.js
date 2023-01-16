import { useState ,useEffect } from "react"

const Hamburger = ( { closeNav } ) => {
    const [scroll,setScroll]=useState(true);

    const hambClick=()=>{
        hambActive();
        navAtive();   
        if(scroll){
            setScroll(false);
        }else{
            setScroll(true);
        }
    }
       
    const hambActive =()=>{
        const hamburger=document.querySelector(".hamburger");
        hamburger.classList.toggle("active");
            }
    
    const navAtive =()=>{
        const navMenu =document.querySelector(".sidebar");
        navMenu.classList.toggle("activee");

    }
          

    useEffect(() => {
        if(scroll){
            document.body.style.overflow = "scroll";
        }else{
            document.body.style.overflow = "hidden";
        }  
    },[scroll]);

    
    return ( <>
    <div className="hamburger" onClick={hambClick} ref={closeNav} >
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
    </>);
}
 
export default Hamburger;