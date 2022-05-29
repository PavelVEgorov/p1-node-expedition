const fs = require('fs'); // подключил модуль файловой системы

const crewList = fs.readFileSync('./src/crew.txt', 'utf-8').trim().split('\n').slice(1); // чтение файла crew.txt и создание массива с членами экипажа
const equipList = fs.readFileSync('./src/equipment.txt', 'utf-8').trim().split('\n').slice(1);
const rocketsList = fs.readFileSync('./src/rockets.txt', 'utf-8').trim().split('\n').slice(1);

function getRightCaptain() {
  const captainExperience = crewList.map((post) => { // методом map создаем новый массив
    if (post.includes('Капитан')) { // если элемент массива crewList содержит слово капитан
      return Number(post.split(',').pop()); // то возвращаем последний элемент с типом Number
    } return 0; // если не содержит но 0
  });
  const bestCapt = captainExperience.indexOf(Math.max(...captainExperience)); // определяем индекс-
  // -самого большого числа массива - это будет самы опытный капитан
  return crewList[bestCapt]; // возвращаем элемент массива с экипажем по индексу bestCapt
  // console.log(bestCapt)
}

function getRightDoc() {
  const docExperience = crewList.map((post) => { // методом map создаем новый массив
    if (post.includes('Врач') && post.includes('ж')) { // если элемент массива crewList содержит слово Врач и ж
      return Number(post.split(',').pop()); // то возвращаем последний элемент с типом Number
    } return 0; // если не содержит но 0
  });
  const bestDoc = docExperience.indexOf(Math.max(...docExperience)); // определяем индекс-
  // -самого большого числа массива - это будет самы опытный доктор
  return crewList[bestDoc]; // возвращаем элемент массива с экипажем по индексу bestDoc
  // console.log(bestDoc);
}

function getAllEngineer() {
  return crewList.filter((eng) => eng.includes('Бортмеханик')); // возвращаем массив инженеров
}

function getAllRover() {
  return equipList.filter((eng) => eng.includes('марсоход')); // возвращаем массив марсоходов
}

function getRightRovers() {
  const marsRover = equipList.filter((eng) => eng.includes('марсоход'));
  return marsRover.filter(el => el.slice(-1) > 3);
  // функция фильтра - возвращаем элементы которые по послденему значению в элементе имеют более 3
}

function getRightRocket() {
  const flightLength = rocketsList.map((el) => el.split(',')).map((el) => el[el.length-1])
  // делаю из строк масивы с характеристиками ракет по строчкамb и далее массив из последних элемен

  const result = flightLength.filter((el) => el.includes(Math.max(...flightLength))).join('').trim();
  return Number(result);
  // Math.max определяет самое максимальное занчение в массиве flightRange
  // includes определяет содержит ли елемент rocketsList это занчение
  // filter создает нвоый масси с этим элементом и делаем стринг
}

module.exports = {
  getRightCaptain,
  getAllEngineer,
  getRightDoc,
  getAllRover,
  getRightRovers,
  getRightRocket,
};
