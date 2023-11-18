/**
 * Deep copy using JSON methods:
 *
 * Utilizing JSON methods like JSON.parse(JSON.stringify()) enables a deep copy
 * of the data structure. This approach works well for arrays and objects, creating
 * entirely new copies, including all nested arrays/objects. It effectively breaks
 * references, ensuring modifications to the copied structure do not affect the original.
 */

/**Example of Deep Copy with @Arrays */
const originalArray = [
    [1, 2],
    [3, 4],
  ];
  const copyArray = JSON.parse(JSON.stringify(originalArray));
  copyArray[0][0] = 5;
  console.log(originalArray); // Output: [[1, 2], [3, 4]]
  
  /** Example of Deep Copy with @Objects */
  const originalObject = {
    a: { b: 1 },
    c: { d: 2 },
  };
  const copyObject = JSON.parse(JSON.stringify(originalObject));
  copyObject.a.b = 5;
  console.log(originalObject); // Output: { a: { b: 1 }, c: { d: 2 } }