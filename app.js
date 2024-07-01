import { Bird, Reptiles } from "./script.js"
import alrt from "./alrt.js";

const animalName = document.getElementById("name");
const type = document.getElementById("animals-type");
const btn = document.getElementById("add-animals");
const listItem = document.getElementById("list");
const ageSpan = document.getElementById("age-span");
const alrt_show = document.getElementById("alrt-show");

let animals_list = JSON.parse(localStorage.getItem("animals"))

animals_list = animals_list ? animals_list : []

console.log(animals_list);

btn.addEventListener("click", (e) => {

   if (animalName.value === '' || ageSpan.value === '') {

      e.preventDefault();

   } else {

      addNew()
   }
})

function addNew() {

   let newAnimal;

   if (type.value === "birds") {

      newAnimal = new Bird(animalName.value, type.value, ageSpan.value)

   } else if (type.value === "Reptiles") {

      newAnimal = new Reptiles(animalName.value, type.value, ageSpan.value)

   }

   animals_list.push(newAnimal)

   const setStorag = JSON.stringify(animals_list)

   localStorage.setItem("animals", setStorag)

   alrt(alrt_show)

   animalName.value = ""
   
   ageSpan.value = ""

   show_animals_fun()

}

function show_animals_fun() {

   const crawlImg = `<img src="./image/Crawl.jpg">`
   const flyImg = `<img src="./image/bird.jpg">`

   let show_animal = '';

   animals_list.forEach((_item) => {

      show_animal +=

      `<div class='div-list'>

         <p>${_item.name}</p>

         <p>age span : ${_item.lifeSpan}</p>

         ${_item.flyOrCrawl === "fly" ? flyImg : crawlImg}

      </div>`;
   });

   listItem.innerHTML = show_animal

}

show_animals_fun()