const names = ['István', 'Katalin', 'Attila', 'Gábor', 'Péter', 'Anna', 'Kitti'];

function myFunc(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'Gábor') {
      console.log('a tömbben van Gábor', array.indexOf(array[i]) + 1);
    }
  }
}
myFunc(names);

const nums = [4, 2, 2, 1, 1];

function myFunc1(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return console.log(sum);
}

myFunc1(nums);

const nums1 = ['a', 4, 2, 2, 1, 1];

function myFunc2(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] !== 'number') {
      console.log('a tömb egyik eleme nem szám');
      continue;
    }
    sum = sum + array[i];
  }
  return console.log(sum);
}

myFunc2(nums1);

function myFunc3(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] !== 'number') {
      const b = parseInt(array[i]);
      if (!isNaN(b)) {
        sum = sum + b;
      } else {
        console.log('Nem sikerült a konvertálás');
      }
      continue;
    }
    sum = sum + array[i];
  }
  return console.log(sum);
}

myFunc3(nums1);