const names = ['István', 'Katalin', 'Attila', 'Gábor', 'Péter', 'Anna', 'Kitti'];

// készítünk egy függvényt, bemeneti paraméternek megadjuk az arrayt
function myFunc(array) {
  // végigmegyünk az array tömbbön
  for (let i = 0; i < array.length; i++) {
    // ha array valamelyik eleme megegyezik Gáborral
    if (array[i] === 'Gábor') {
      // kiírjuk, hogy van a tömbben Gábor és hogy hanyadik elem a tömbben
      console.log('a tömbben van Gábor', array.indexOf(array[i]) + 1);
    }
  }
}
// meghívjuk a függvényt a names tömbre
myFunc(names);

const nums = [4, 2, 2, 1, 1];

// készítünk egy függvényt array bemeneti paraméterrel
function myFunc1(array) {
  //deklaráljuk a sum változót és 0 értéket adunk neki
  let sum = 0;
  // végigmegyünk az array tömbbön
  for (let i = 0; i < array.length; i++) {
    // a sum változóba bepakoljuk a számok összegét
    sum = sum + array[i];
  }
  // visszatérünk a sum értékével, amit kiírunk
  return console.log(sum);
}

// meghívjuk a függvényt a nums tömbre
myFunc1(nums);

const nums1 = ['a', 4, 2, 2, 1, 1];

// készítünk egy függvényt array bemeneti paraméterrel
function myFunc2(array) {
  // deklaráljuk a sum változót és 0 értéket adunk neki
  let sum = 0;
  // végigmegyünk az array tömbbön
  for (let i = 0; i < array.length; i++) {
    // ha a tömb egyik eleme nem szám
    if (typeof array[i] !== 'number') {
      // kiírjuk, hogy a tömb egyik eleme nem szám
      console.log('a tömb egyik eleme nem szám');
      // továbblépünk a következő elemre
      continue;
    }
    // a sum változóba bepakoljuk a számok összegét
    sum = sum + array[i];
  }
  // visszatérünk a sum értékével, amit kiírunk
  return console.log(sum);
}

// meghívjuk a függvényt a nums1 tömbre
myFunc2(nums1);

// készítünk egy függvényt array bemeneti paraméterrel
function myFunc3(array) {
  // deklaráljuk a sum változót és 0 értéket adunk neki
  let sum = 0;
  // végigmegyünk az array tömbbön
  for (let i = 0; i < array.length; i++) {
    // ha array egyik eleme nem szám
    if (typeof array[i] !== 'number') {
      // akkor a parseInt függvénnyel átkonvertájuk számmá, ezt betesszük egy b változóba
      const b = parseInt(array[i]);
      // megvizsgáljuk hogy a b változó egy szám
      if (!isNaN(b)) {
        // ha igen, akkor hozzáadjuk az összegét a többi elem összegéhez
        sum = sum + b;
        // ha nem
      } else {
        // akkor kiírjuk, hogy nem sikerült a konvertálás
        console.log('Nem sikerült a konvertálás');
      }
      // továbblépünk a következő elemre
      continue;
    }
    // a sum változóba bepakoljuk a számok összegét
    sum = sum + array[i];
  }
  //visszatérünk a sum értékével, amit kiírunk
  return console.log(sum);
}

// meghívjuk a függvényt a nums1 tömbre
myFunc3(nums1);