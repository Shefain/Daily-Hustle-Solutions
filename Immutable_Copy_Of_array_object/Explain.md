# Copying Array Or Object Immutably

Let's talk about how to copy Array or Object in JavaScript.Here are two ways to do this: the **shallow copy** and the **deep copy**. 
Sure, let's discuss how to copy both Arrays and Objects in JavaScript using both shallow and deep copy methods.

## Shallow Copy

A shallow copy duplicates the top-level structure of the data but retains references to nested elements. Therefore, modifications to elements within the nested structures will affect both the original and copied data.

Here's an example of shallow copy using spread syntax for an array:

```javascript
const originalArray = [[1, 2], [3, 4]];
const copyArray = [...originalArray];
copyArray[0][0] = 5;
console.log(originalArray); // Output: [[5, 2], [3, 4]]
```

Here's an example of an object:

```javascript
const originalObject = { a: { b: 1 }, c: 2 };
const copyObject = { ...originalObject };
copyObject.a.b = 5;
console.log(originalObject); // Output: { a: { b: 5 }, c: 2 }
```

In these examples, changing the value in the copied array or object also changes the value in the original array or object.

## Deep Copy

A deep copy creates a new instance of the original data structure, duplicating every element, including all nested elements. It breaks references to the original data, ensuring modifications to the copied structure do not affect the original.

Here's an example of deep copy using `JSON.parse(JSON.stringify())` for an array:

```javascript
const originalArray = [[1, 2], [3, 4]];
const copyArray = JSON.parse(JSON.stringify(originalArray));
copyArray[0][0] = 5;
console.log(originalArray); // Output: [[1, 2], [3, 4]]
```

Here's an example of an object:

```javascript
const originalObject = { a: { b: 1 }, c: 2 };
const copyObject = JSON.parse(JSON.stringify(originalObject));
copyObject.a.b = 5;
console.log(originalObject); // Output: { a: { b: 1 }, c: 2 }
```

In these examples, changing the value in the copied array or object does not affect the original array or object.

## Conclusion

When copying data structures in JavaScript, it's important to understand the difference between shallow and deep copies. Shallow copies are quicker and use less memory, but changes to nested elements will affect the original data. Deep copies are useful when you want to duplicate and modify data without affecting the original. Choose the method that best suits your needs. Remember, `JSON.parse(JSON.stringify())` may not be suitable for all cases as it has limitations (like not being able to copy functions or handle circular references). Always choose the method that best suits your specific needs.