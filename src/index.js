import $, { ready } from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Person from './js/agecal.js';

$(document).ready(function(){
  $("#age-calculator").submit(function(event) {
    event.preventDefault();
    const inputedAge = parseInt($("#age"));
    const inputedHeight = parseInt($("#height"));
    const inputedWeight = parseInt($("#weight"));
    const inputedFoodDiet = $("#food");
    const inputedDrink = $("#drink");
    let personInfo = new Person(inputedAge,inputedHeight,inputedWeight,inputedFoodDiet,inputedDrink)
    
  });
});
