




window.onload = function initialize(){
    console.log("init done");
    this.burger();
    if(window.innerWidth > 800) {
        this.animateFirstSection(true);
    } else{
        this.animateFirstSection(false);
    }
}
           
function burger(){
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    const links = document.querySelectorAll(".nav-links li");

    hamburger.addEventListener('click', ()=>{
        //Animate Links
        navLinks.classList.toggle("open");  
        links.forEach(link => {
            link.classList.toggle("fade");
        });
                
        //Hamburger Animation
        hamburger.classList.toggle("toggle");
    });
}

function animateFirstSection(notMobileUser){
    const un = document.querySelector(".un");
    const deux = document.querySelector(".deux");
    const trois = document.querySelector(".trois");
    const quatre = document.querySelector(".quatre");
    if(notMobileUser){
        un.classList.add("animate");
        deux.classList.add("animate");
        trois.classList.add("animate");
        quatre.classList.add("animate");
    } else{

    }


}