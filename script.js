const places = [
    {
        id:1,
        photo:'images/image-1.png',
        title:"londan",
        price:400.00
    },
    {
        id:1,
        photo:'images/image-10.png',
        title:"new york",
        price:400.00
    },
    {
        id:1,
        photo:'images/image-3.png',
        title:"rio",
        price:1300.00
    },
    {
        id:1,
        photo:'images/image-4.png',
        title:"mexico",
        price:700.00
    },
    {
        id:1,
        photo:'images/image-5.png',
        title:"brazil",
        price:400.00
    },
    {
        id:1,
        photo:'images/image-6.png',
        title:"prais",
        price:1200.00
    },
    {
        id:1,
        photo:'images/image-7.png',
        title:"los vagas",
        price:1500.00
    },
    {
        id:1,
        photo:'images/image-8.png',
        title:"america",
        price:3000.00
    }
]

const searchInput = document.querySelector(".search-place")
const placeContainer = document.querySelector('.locations')


let newPlace = places.map((place)=>{
    return `<div class="place" data-search=${place.title}>
                <img src=${place.photo}>
                <div class="place-info">
                    <h3>${place.title}</h3>
                    <b>$${place.price}</b>
                </div>
            </div>`
}).join("")

placeContainer.innerHTML = newPlace

searchInput.addEventListener("keyup",(e)=>{
    let value= e.target.value.trim().toLowerCase()
   let searchedPlace = places.map((place)=>{
        if(place.title.includes(value)){
            return `<div class="place" data-search=${place.title}>
                <img src=${place.photo}>
                <div class="place-info">
                    <h3>${place.title}</h3>
                    <b>$${place.price}</b>
                </div>
            </div>`
        }
    }).join("")
    placeContainer.innerHTML = searchedPlace
})

const travel = [
        {
            id:1,
            photo:'images/story-1.png',
            title:"rain forest river",
            text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, ab."
        },
        {
            id:1,
            photo:'images/story-2.png',
            title:"hills",
            text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, ab."
        },
        {
            id:1,
            photo:'images/story-3.png',
            title:"rio beach",
            text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, ab."
        },
]

const travelContainer = document.querySelector(".best-travel")

let newTravel = travel.map((place)=>{
    return`<div class="best-place">
                <img src=${place.photo}>
                <div class="best-place-info">
                    <h4>${place.title}</h4>
                    <b>${place.text}</b>
                </div>
            </div>`
}).join("")

travelContainer.innerHTML = newTravel

const date = new Date().getFullYear()

const copyRightDate = document.querySelector(".date")

copyRightDate.textContent = date