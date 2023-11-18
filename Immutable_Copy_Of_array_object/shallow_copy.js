//shallow_copy.js

/**
 * Shallow copy using spread syntax:
 *
 * The spread syntax ([...]) or ({...}) creates a shallow copy of the data structure.
 * While it duplicates the top-level structure of the array/object, it does not perform
 * a deep copy of nested elements. Instead, it retains references to nested arrays/objects.
 * Therefore, modifications to elements within the nested structures will affect both
 * the original and copied data due to shared references.
 */

/**Example of Shallow Copy with @Arrays */
const originalArray = [
    [1, 2],
    [3, 4],
  ];
  const copyArray = [...originalArray];
  copyArray[0][0] = 5;
  console.log(originalArray); // Output: [[5, 2], [3, 4]]
  
  /** Example of Shallow Copy with @Objects */
  const originalObject = {
    a: { b: 1 },
    c: { d: 2 },
  };
  const copyObject = { ...originalObject };
  copyObject.a.b = 5;
  console.log(originalObject); // Output: { a: { b: 5 }, c: { d: 2 } }