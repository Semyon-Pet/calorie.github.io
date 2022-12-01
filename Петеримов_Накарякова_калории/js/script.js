var age = document.querySelector("#age"),
  height = document.querySelector("#height"),
  weight = document.querySelector("#weight"),
  sex = document.querySelector("#sex"),
  lifestyle = document.querySelector("#lifestyle"),
  result = document.querySelector("#result"),
  calculate = document.querySelector("#btn_calculate"),
  clear = document.querySelector("#btn_clear");

btn_calculate.onclick = function () {
  if (age.value == "" || age.value < 14 || age.value > 99) {
    alert("Введите возраст от 14 до 99!");
  } else if (age.value % 1 != 0) {
    alert("Введите возраст целым числом!");
  } else if (height.value == "" || height.value < 140 || height.value > 300) {
    alert("Введите рост от 140 до 300см!");
  } else if (weight.value == "" || weight.value < 30 || weight.value > 500) {
    alert("Введите вес от 30 до 500кг!");
  }
  else if (sex.value == 'женский' && lifestyle.value == 'сидячий') {
    result.value = (((weight.value * 10) + (height.value * 6.25) - (age.value * 5) - 161) * 1.2).toFixed(0);
    document.getElementById('result').value = result.value;
  }
  else if (sex.value == 'женский' && lifestyle.value == 'небольшая активность') {
    result.value = (((weight.value * 10) + (height.value * 6.25) - (age.value * 5) - 161) * 1.375).toFixed(0);
    document.getElementById('result').value = result.value;
  }
  else if (sex.value == 'женский' && lifestyle.value == 'средняя активность') {
    result.value = (((weight.value * 10) + (height.value * 6.25) - (age.value * 5) - 161) * 1.55).toFixed(0);
    document.getElementById('result').value = result.value;
  }
  else if (sex.value == 'женский' && lifestyle.value == 'высокая активность') {
    result.value = (((weight.value * 10) + (height.value * 6.25) - (age.value * 5) - 161) * 1.725).toFixed(0);
    document.getElementById('result').value = result.value;
  }
  else if (sex.value == 'женский' && lifestyle.value == 'очень высокая активность') {
    result.value = (((weight.value * 10) + (height.value * 6.25) - (age.value * 5) - 161) * 1.9).toFixed();
    document.getElementById('result').value = result.value;
  }
  else if (sex.value == 'мужской' && lifestyle.value == 'сидячий') {
    result.value = (((weight.value * 10) + (height.value * 6.25) - (age.value * 5) +5) * 1.2).toFixed(0);
    document.getElementById('result').value = result.value;
  }
  else if (sex.value == 'мужской' && lifestyle.value == 'небольшая активность') {
    result.value = (((weight.value * 10) + (height.value * 6.25) - (age.value * 5) +5) * 1.375).toFixed(0);
    document.getElementById('result').value = result.value;
  }
  else if (sex.value == 'мужской' && lifestyle.value == 'средняя активность') {
    result.value = (((weight.value * 10) + (height.value * 6.25) - (age.value * 5) +5) * 1.55).toFixed(0);
    document.getElementById('result').value = result.value;
  }
  else if (sex.value == 'мужской' && lifestyle.value == 'высокая активность') {
    result.value = (((weight.value * 10) + (height.value * 6.25) - (age.value * 5) +5) * 1.725).toFixed(0);
    document.getElementById('result').value = result.value;
  }
  else if (sex.value == 'мужской' && lifestyle.value == 'очень высокая активность') {
    result.value = (((weight.value * 10) + (height.value * 6.25) - (age.value * 5) +5) * 1.9).toFixed(0);
    document.getElementById('result').value = result.value;
  }
};
btn_clear.onclick = function () {
  document.getElementById('age').value = "";
  document.getElementById('height').value = "";
  document.getElementById('weight').value = "";
  document.getElementById('sex').value = "женский";
  document.getElementById('lifestyle').value = "сидячий";
  document.getElementById('result').value = "";
};