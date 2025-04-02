//find last element of array
let arr1 = [3,7,34,90,12];

let found = arr1.findLast((element) => element);
console.log({found});

let arr2 = [true, "green", "where",12,56];

 found = arr2.findLast((element) => element);
 console.log({found});

 //join array elements into a string
 let myPets = ["Cow", "Bird", "Snake", "Dog"];
 console.log(myPets.toString());
 console.log(myPets.join());
 console.log(myPets.join('+'));
 
 //sort array items
 var arr3 = [-5,9,5,3,2,-3,6,8,4,1];
 console.log(arr3.sort());

 //remove duplicates
 let arr = ["boy", "man", "girl", "school", "girl", "woman"];

 function removeDuplicates(arr){
    return [...new Set(arr)];
 }
 function findDuplicates(arr){
    const duplicates = arr.filter((item, index) => arr.indexOf(item) !== index);
    return[...new Set(duplicates)];
 }
 const newArr = removeDuplicates(arr);
 const duplicateArr = findDuplicates(arr);
 console.log("Array with duplicates:", duplicateArr);
 console.log("Array without duplicates:", newArr);

 //search world in array
 let arr5 = ["the", "way", "x",4];
 let searchWord = "food";
 if (arr5.includes(searchWord)){
    console.log(searchWord);
    
 }
 else{
    console.log("the search word was not found");
    
 }

 //sort 
 let word = "renniw"
 let newWord = word.split('').sort().join('');
 console.log({newWord});


 //insert word at index
 let fruits = ["mango", "orange", "pawpaw", "pineapple", "melon", "apple", "dates", "kiwi", "guava", "pear"]
 fruits.splice(5,0,'Tomato');
 console.log(fruits);

 
 
 
 
 
 
  
 
 
