// Question 1: 1. Write a JavaScript program to list the properties of a JavaScript object. 
//Sample object: var student = { name : "David Rayy", sclass : "VI", rollno : 12 }; Sample Output: name,scla
//ss,rollno

var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 
};
    
console.log(Object.keys(student));
   
//Question 2:
//Write a JavaScript program to delete the rollno property from the following object. Also print the object 
//before or after deleting the property. Sample object: var student = { name : "David Rayy", sclass : "VI", 
//rollno : 12 }; 

var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 
};
console.log(student.rollno)
delete student.rollno;
console.log(student.rollno);


//Question 3 
//Write a JavaScript program to get the length of a JavaScript object.
//  Sample object : var student = { name : "David Rayy", sclass : "VI", rollno : 12 };

var student = { 
    name : "David Rayy",
    sclass : "VI", 
    rollno : 12 
};
var size=0;

for(var i in student){
    size++;
}

console.log(size);

//Question 4
// Write a JavaScript program to display the reading status (i.e. display book name, 
//author name and reading status) of the following 
//books. var library = [ { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, 
//{ author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, { author: 'Suzanne Collins', title:
// 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }]; 


const objs = [{ author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, 
{ author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, 
{ author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }]

objs.map(obj =>{ 
    if(obj.readingStatus){
        console.log(`${obj.author}, ${obj.title}`);
    }
});


//Question 5 
//Write a JavaScript program to get the volume of a Cylinder with four decimal places
// using object classes. Volume of a cylinder : V = πr2h where r is the radius and h is the height of the 
//cylinder. Try To Attempt : Difficult Level Increased 


const volumeOfCylinder = (height,diameter) => {
    return height * Math.PI * diameter/2 * diameter/2;
}

console.log(volumeOfCylinder(7,7).toFixed(4)); //269.3916




//Question 6
//Write a JavaScript program to sort an array of JavaScript objects. 
 //Sample Object : var library = [ { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 },
//{ title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 },
// { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }];
// Expected Output: [[object Object] { author: "Walter Isaacson", libraryID: 4264, title: "Steve Jobs" },
// [object Object] { author: "Suzanne Collins", libraryID: 3245, title: "Mockingjay: The Final Book of The Hunger Games" }, [object Object]
// { author: "The Road Ahead", libraryID: 1254, title: "Bill Gates" }]



var library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        libraryID: 1254
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        libraryID: 4264
    },
    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        libraryID: 3245
    }
];

console.log('before sorting...');
console.log(library);

library.sort(
    function(a,b){
        if(a.title < b.title){
            return -1;
        }
        else if(a.title > b.title){
            return 1;
        }
        return 0;
});

console.log('after sorting...');
console.log(library);