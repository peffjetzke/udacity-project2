/*Global Variables*/
const sections = document.querySelectorAll("h2");

/*Nav menu builder
Create li element
Add class to li element
Add li child to ul
Add links to li child
call event listener function with li and section
*/
function buildNav(){
    const nav = document.querySelector(".nav-bar");
    //const numSections = document.querySelectorAll("h2");

    for (let x of sections){ 
        let navItem = document.createElement("li");
        let navLink = document.createElement("a");

        navItem.classList.add("nav-item")
        navItem.textContent = x.textContent;
        //navItem.setAttribute("id", x.id);
        navLink.innerHTML = "<a href='#" + x.id + "'></a>"
        //navLink.setAttribute("href", '#'+x.id);

        nav.appendChild(navItem);
        navItem.appendChild(navLink);

        scrolltoSection(navItem, x);
    }   
}

/*scrolling to element*/
function scrolltoSection(clicker, target){
    clicker.addEventListener("click", (event)=>{
        event.preventDefault();
        target.scrollIntoView({behavior: "smooth"})
        })
}

/*Check active section anytime there's a scroll*/
function checkActiveSection(){
    window.addEventListener("scroll", setActiveSection);
}

/*Set or remove active section, called from checkActiveSection after a scroll*/
function setActiveSection(){
    for (let x of sections){
        var rect = x.getBoundingClientRect();
        if(rect.top > 0 && rect.top < 210){ //210 to take into account margins, section height, and content
            //console.log(x + " should be active: " + rect.top); //debug console.log
            x.classList.add("newActive"); 
            console.log(rect.top);
        }
        else{
            //console.log(x + " should be inactive!" + rect.top); //debug console.log
            x.classList.remove("newActive");
        }
    }
}

/*Call functions*/
buildNav();
checkActiveSection();
