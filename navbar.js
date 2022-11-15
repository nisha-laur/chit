document.querySelector('#hamburger').addEventListener('click',()=>{
    document.querySelector("#menu").style. setProperty("opacity","1");
    document.querySelector("#hamburger").style.opacity="0";
    document.querySelector("#exit").style.opacity="1";
    document.querySelector("#exit").style.visibility="visible";
    document.querySelector("#hamburger").style.zIndex="200";
        document.querySelector("#exit").style.zIndex="300";
});


    document.querySelector('#exit').addEventListener('click',()=>{
        document.querySelector("#menu").style.opacity="0" ;
        document.querySelector("#exit").style.opacity="0" ;
        document.querySelector("#hamburger").style.opacity="1";
        document.querySelector("#hamburger").style.zIndex="300";
        document.querySelector("#exit").style.zIndex="200";
    });

 
    