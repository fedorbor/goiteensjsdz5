// 1
console.log("1");
const Arr1 = [1, 5, '4', 'hello',] ;
const Arr2 = [true,2, {}, ["a"], 222] ;
console.log(Arr1[2]);
console.log(Arr2[2]);
console.log(Arr1[2]+ Arr2[2]);
// 2
console.log("2");
Arr1.splice(Arr1.length , 0 ,22);
console.log(Arr1);
// 3
console.log("3");
for (const x of Arr2) {
console.log(x);
console.log(typeof(x));
}
// 4
console.log("4");
const message = 'Welcome to Ukraine!'
const arr = message.split("");
console.log(arr);
console.log(arr.indexOf("l"));
console.log(arr.join(""));
// 5
console.log("5");
const styles =["Джаз","Блюз"];
styles.push("Рок-н-ролл");
styles.splice((styles.length-1)/2,1, 'Класика');
styles.unshift("Реггі");
styles.unshift("Реп");

console.log(styles);
