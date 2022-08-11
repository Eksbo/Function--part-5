'use script' ;

// function func(arr) {
// 	for (let elem of arr) {
// 		if (typeof elem == 'object') {
// 			func(elem);
// 		} else {
// 			console.log(elem);
// 		}
// 	}
// }

// func([1, [2, 7, 8], [3, 4, [5, [6, 7]]]]);

//  Дан многомерный объект произвольного уровня вложенности, например, такой:
// {a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}}

// С помощью рекурсии выведите все примитивные элементы этого объекта в консоль. 

// let objNum = {
//     a: 1,
//      b: {c: 2, d: 3, e: 4}, 
//      f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}};

// +function func (obj){
//     for (let k in obj){
//     if (typeof obj[k] !== 'number') {
//     func(obj[k]);
//     } else {
//     console.log(obj[k]);
//     }
//     }
// }  (objNum)   ;

 //  Дан многомерный массив произвольного уровня вложенности, например, такой:
// [1, [2, 7, 8], [3, 4, [5, [6, 7]]]]

// Напишите код, который развернет наш многомерный массив в одномерный. Для приведенного выше массива это будет выглядеть вот так:
// [1, 2, 7, 8, 3, 4, 5, 6, 7]

// let arrNum = [1, [2, 7, 8], [3, 4, [5, [6, 7]]]] ;
// let arrRes = [] ;
// +function func (arr) {
  
//     for (let k of arr)
//     {
//             if (typeof k !== 'number') {
//     func(k);
//     } else {
//     arrRes.push(k)
//     }
//     }
//     return console.log(arrRes);
// }(arrNum) ;


// Дан многомерный объект произвольного уровня вложенности, например, такой:
// {a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}}

// С помощью рекурсии найдите сумму элементов этого объекта. 

// let objNum = {a: 1, 
//     b: {c: 2, d: 3, e: 4},
//     f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}
// } ;
// let sum = 0 ;
//     +function func(obj){   
//         for(let k in obj){
//             if(typeof obj[k] == 'object'){
//                 func(obj[k]) ;

//             }
//             else{
//                 sum += obj[k] ;
//             }
//         }
//         return console.log(sum);
//     }(objNum);

// Дан многомерный массив произвольного уровня вложенности, содержащий внутри себя строки, 
// например, такой:
// ['a', ['b', 'c', 'd'], ['e', 'f', ['g', ['j', 'k']]]]

// С помощью рекурсии слейте элементы этого массива в одну строку:
// 'abcdefgjk'

// let arrLeter = ['a', ['b', 'c', 'd'], ['e', 'f', ['g', ['j', 'k']]]];
// let str = [] ;
// +function string (arr){
//     for ( let k of arr){
//         if ( typeof k  !== 'string' )
//         {
//            string(k)
//         }
//         else{
//             str.push(k)
//         }
//     }
//     return console.log(str.join(''));
// }(arrLeter) ;

// ⊗jsPmFARS

// Дан многомерный массив произвольного уровня вложенности, например, такой:
// [1, [2, 7, 8], [3, 4], [5, [6, 7]]]

// Возведите все элементы-числа этого массива в квадрат. 
// let arrNum = [1, [2, 7, 8], [3, 4], [5, [6, 7]]] ;
// +function func (arr)
// {
//     for (let i = 0 ; i < arr.length ; i ++ ){
//         // let k = Number(arr[i])
//         // console.log(Number(arr[i])**2);
//         if (typeof arr[i] === 'number' ){
    
//             arr[i] = Number(arr[i])**2
//         }
//         else
//         {
//             func(arr[i]) ;
//         }

//     }
//     return console.log(arr);
// }(arrNum) ;

