import React from "react";

function UseHeader() {
    const body = document.body;
    const [headState, setHeadState] = React.useState(false)
    const [headerDash, setHeaderDash] = React.useState(false)
    const [widthScreen, setWidthScreen] = React.useState(false)
    const [localization, setLocalization] = React.useState(false)

    let scrollPosition = 0

    function isBannerPassed() {

        scrollPosition = window.scrollY || window.pageYOffset;

        if ( scrollPosition >= 90 )
            return true

        return false
    
    }

    function handleHeaderOnScroll() {

        isBannerPassed() ? setHeadState(true) : setHeadState(false)

    }

    


  /*{  function handleLocation() {

        let location = window.location.href.split("/")
        
        if (location[location.length - 1] === "login"  ){
            setLocalization(true)
            console.log(localization);
        }else{
            setLocalization(false)
            console.log("deu merda");
        }     
    }}*/

    

    body.addEventListener("scroll", handleHeaderOnScroll);
    body.addEventListener("load", handleHeaderOnScroll);
    body.addEventListener("click", ( {target} ) => {

        
        if ( target.id === 'btn-list-nav-list' ){
             setHeaderDash(true)
             
        }else if (target.id === 'btn-close'){
             setHeaderDash(false)
        }
            
        if( target.id === "btnLogin"){
            setLocalization(false)
        }
        
    });


    return {
        headState,
        headerDash,
        localization,
        scrollPosition,
        widthScreen
    }
}

export default UseHeader