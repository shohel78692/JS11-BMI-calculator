// function BMI(){
//     const height = document.getElementById(height).value;
//     const weight = document.getElementById(weight).value;
//     const bmi = document.getElementById(bmi).value;
//     const result = (weight/height/height)*10000;

//     bmi.innerHTML = result.toFixed(2)

// } 


let height = document.getElementById("height");
let weight = document.getElementById("weight");
// let btn = document.getElementById("submit");
let bmi = document.getElementById("bmi");
let stat = document.getElementById("status");

function check() {
    let h = height.value;
    let w = weight.value;

    let result = (w/ h/ h) * 10000;
    bmi.innerHTML = result.toFixed(2);
    if(result < 18.5){
        stat.innerHTML = "Underweight";
    }else if(result >= 18.5 && result <= 24.9){
        stat.innerHTML = "Normal";
    }else if(result >= 25 && result <= 29.9){
        stat.innerHTML = "Overweight";
    }else if(result >= 30){
        stat.innerHTML = "Obese";
    }
}