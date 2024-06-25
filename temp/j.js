const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelcius = document.getElementById("toCelcius");
const result = document.getElementById("result");
let temp;


function convert(){

    if(toFahrenheit.checked){
        temp = Number(textBox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "°F";
         if(temp < 32){
            result.textContent = temp.toFixed(1) + "°F, Subzero 🥶";
        }
        else if(temp == 32 || temp <= 65){
            result.textContent = temp.toFixed(1) + "°F, Ice in the air ❄";
        }
        else if(temp > 95){
            result.textContent = temp.toFixed(1) + "°F, warm enough 👌 ";
        }
        else if(temp == 95 || temp <= 97.7){
            result.textContent = temp.toFixed(1) + "°F, Getting hotter 🥵 ";
        }
        else{
            result.textContent = temp.toFixed(1) + "°F, Smoking 🔥";
        }
    }

    else if(toCelcius.checked){
        temp = Number(textBox.value);
        temp = (temp - 32) * (5 / 9);
        result.textContent = temp.toFixed(1) + "°C";
        if(temp < 0){
            result.textContent = temp.toFixed(1) + "°C, Subzero 🥶";
        }
        else if(temp == 0){
            result.textContent = temp.toFixed(1) + "°C, Ice in the air ❄";
        }
        else if(temp == 35 || temp <= 36.5){
            result.textContent = temp.toFixed(1) + "°C, Room temperature 👌";
        }
        else{
            result.textContent = temp.toFixed(1) + "°C, Smoking 🔥";
        }
    }
    else{
        result.textContent = "Select a unit";
    }
}