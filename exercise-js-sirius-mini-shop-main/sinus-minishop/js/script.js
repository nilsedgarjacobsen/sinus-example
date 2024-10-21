let art1_h3 = document.querySelector(".art-1 h3");

art1_h3.innerText = "Potato";

let header_nav_a_start = document.querySelector("header nav a");
header_nav_a_start.innerHTML = "Start";

let header_nav_a_products = document.querySelector("header nav a:nth-of-type(2)");

let header_nav_a_contact = document.querySelector("header nav a:nth-of-type(3)");

header_nav_a_contact.innerHTML = "Mail us";

let art2_p_info = document.querySelector(".art-2 p");

art2_p_info.innerHTML = "Red shirt with Sinus logo for all of the people that live with sinus infections and are proud of it!";

let art1_button = document.querySelector(".art-1 button");

art1_button.style.backgroundColor = "blue";

let figure = document.querySelector("main article figure");

figure.style.backgroundColor = "green";

let figures = document.getElementsByTagName("figure");

figures[1].style.backgroundColor = "green";
figures[2].style.backgroundColor = "green";

let adress = document.querySelector("footer section article:nth-of-type(2) p")

adress.innerHTML = "High Chapparanda 1"

let all_the_ps = document.querySelectorAll("p");

for(let partOfMyArray of all_the_ps){
    partOfMyArray.style.color = "red";
    partOfMyArray.style.fontSize = "large"
}

let all_the_buttons = document.querySelectorAll("button");

for(let partOfMyArray of all_the_buttons){
    partOfMyArray.innerHTML = "add to cart";
}

header_nav_a_start.classList.add("active")

let logo = document.querySelector(".logo");

logo.classList.remove("logo");

let new_menu_choice = document.createElement("a");

new_menu_choice.innerText = "About";

let nav = document.querySelector("nav");

//header_nav_a_contact.insertAdjacentElement("afterend", new_menu_choice);

header_nav_a_contact.appendChild(new_menu_choice);

let article = document.createElement("article");
let img = document.createElement("img");
img.setAttribute("src", "img/hoodie-forrest.png");
let h2 = document.createElement("h2");
h2.innerHTML = "Sinus Hoodie";
let h3 = document.createElement("h3");
h3.innerHTML = "Forrest";
let p = document.createElement("p");
p.innerHTML = "lorem lorem lorem lorem";

let newFig = document.createElement("figure");

let main = document.querySelector("main");

main.appendChild(article);
article.appendChild(newFig);
newFig.appendChild(img);
article.appendChild(h2);
article.appendChild(h3);
article.appendChild(p);

logo.addEventListener("click", foundYou);

function foundYou(){
    console.log("Found you!")
}

let articles = document.querySelectorAll("article");

for(let art of articles){
    let fart = art.children[2].innerHTML;
    art.addEventListener("click", function(){console.log(`Hi, I'm article ${fart}`)})
}