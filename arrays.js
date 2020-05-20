"use strict";


// 1. printIndices
function printIndices(items) {
  //Print each item in the list, followed by its index.

//   The output should look like this:
//   apple 0
//   berry 1
//   cherry 2

// Arguments:
//   items (list)

// Returns:
  // None//
  for (const item of items) {
    console.log(item, items.indexOf(item))
    } 
}


// 2. everyOtherItem
function everyOtherItem(items) {
  //Print a list of every other item in `items`

  //   Start with index 0.

  //   Arguments:
  //       items (list)

  const result = []

  for (const i in items) {
    if (i % 2 === 0){
      result.push(items[i]);
    }
  }
  console.log(result);
}


// 3. smallestNItems
function smallestNItems(items, n) {
  // Print a list of the `n` smallest integers in `items`.

  // Order the integers in descending order.

  // You can assume that `n` will be less than the length of the list.

  // Arguments:
  //     items (list[int]): A list of integers
  //     n (int): Desired length for the resulting list
  // 

  const sorteditems = items.sort((a,b) => a - b).slice(0,n);
  sorteditems.reverse();

  console.log(sorteditems);

}
