// array with falsy values miscellaneous
const miscellaneous = ["Apple",NaN,"Mango", null,"Banana",0,"Orange",false,"pineapple",undefined]


//passing Bollean to array.filter() will remove falsy values from the array
const fruits= miscellaneous.filter(Boolean)

console.log(fruits); // ["Apple","Mango","Banana","Orange","pineapple"]