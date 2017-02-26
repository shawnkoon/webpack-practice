import '../styles/image_viewer.css';
import bottles from '../assets/bottles.jpg';
import city from '../assets/city.jpg';
import vage from '../assets/vage.png';

const image = document.createElement('img');
image.src = "http://lorempixel.com/400/400";

document.body.appendChild(image);

const smallImage1 = document.createElement('img');
smallImage1.src = vage;

document.body.appendChild(smallImage1);

const smallImage2 = document.createElement('img');
smallImage2.src = bottles;

document.body.appendChild(smallImage2);

const largeImage1 = document.createElement('img');
largeImage1.src = city;

document.body.appendChild(largeImage1);