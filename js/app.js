// build the nav make nav list
const navList=document.getElementById("navbar__list");
//but sections in array to loop it easy
const sections=Array.from(document.querySelectorAll("section"));

function creatList(){
    for(sec of sections){
        item=document.createElement("li");
        item.innerHTML=`<li><a href="#${sec.id}" data-nav="${sec.id}" class="menu__link">${sec.dataset.nav}</a></li>`;
        navList.appendChild(item);
    }
}
creatList();

// Add class 'active' to section when near top of viewport
window.onscroll=function(){
    document.querySelectorAll("section").forEach(function(act){
        if(act.getBoundingClientRect().top>=-400 && act.getBoundingClientRect().top<=150){
            act.classList.add("your-active-class");
        }
        else{
            act.classList.remove("your-active-class");
        }
    });
};


// Scroll to anchor ID using scrollTO event
navList.addEventListener("click",(toSection)=>{
    toSection.preventDefault();
    if(toSection.target.dataset.nav){
        document.getElementById(`${toSection.target.dataset.nav}`).scrollIntoView({behavior:"smooth"});
    }
});



// Build menu 

// Scroll to section on link click

// Set sections as active


