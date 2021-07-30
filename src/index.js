import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Person from './js/agecal.js';

$(document).ready(function(){
  $("#age-calculator").submit(function(event) {
    event.preventDefault();
    const inputedAge = parseInt($("#age").val());
    const inputedHeight = parseInt($("#height").val());
    const inputedWeight = parseInt($("#weight").val());
    const inputedFoodDiet = $("#food").val();
    const inputedDrink = $("#drink").val();

    let personInfo = new Person(inputedAge,inputedHeight,inputedWeight,inputedFoodDiet,inputedDrink,80);
    
    let mercuryPersonAge = personInfo.mercuryYears();
    let venusPersonAge = personInfo.venusYears();
    let marsPersonAge = personInfo.marsYears();
    let jupiterPersonAge = personInfo.jupiterYears();
    
    let earthAgeLeft = personInfo.lifeLeftOnEarth();
    let mercuryAgeLeft = personInfo.lifeLeftOnMercury();
    let venusAgeLeft = personInfo.lifeLeftOnVenus();
    let marsAgeLeft = personInfo.lifeLeftOnMars();
    let jupiterAgeLeft = personInfo.lifeLeftOnJupiter();
    
    $("#earthage").text(inputedAge);
    $("#mercury").text(mercuryPersonAge);
    $("#venus").text(venusPersonAge);
    $("#mars").text(marsPersonAge);
    $("#jupiter").text(jupiterPersonAge);
    
    $("#ageearth").text(earthAgeLeft);
    $("#agemercury").text(mercuryAgeLeft);
    $("#agevenus").text(venusAgeLeft);
    $("#agemars").text(marsAgeLeft);
    $("#agejupiter").text(jupiterAgeLeft);
  });
});