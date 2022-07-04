const carousel = document.querySelector('.carousel');
let sliders=[];

let slideIndex = 0; // track current slide

const createSlide = () => {
    if(slideIndex >= movies.length){
        slideIndex = 0;
    }

    // create DOM ELEMENTS
let slide = document.createElement('div');
var imgElement = document.createElement('img');
let content = document.createElement('div');
let h1 = document.createElement('h1');
let p = document.createElement('p');


