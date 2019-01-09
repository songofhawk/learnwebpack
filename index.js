// index.js
//import moment from 'moment';
import config from './json/config.json';


//console.log("Hello from JavaScript!");
//console.log(moment().startOf('day').fromNow());

let name = "Bob", time = "today";

console.log(`Hello ${name}, how are you ${time}?`);
console.log(`问候语: ${config.greetText}`);