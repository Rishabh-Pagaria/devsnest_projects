// 1
const student = {
    name : "David Rayy", 
    sclass : "VI", 
    rollno : 12
};
console.log(student.name, student.rollno);

// 2
console.log("Before Deleting ", student);
delete student.rollno;
console.log("After Deleting ", student);

// 3
student.rollno = 12;
let ctr = 0;
for (val in student){
    if(val){
        ctr += 1;
    }
}
console.log("The length of javaScript Object is ", ctr);

// 4
var library = [ 
    { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true },
    { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, 
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }
]; 
library.forEach(status => {
    if(status.readingStatus){
        console.log(`Books Name: ${status.title}\nAuthor Name: ${status.author}\nReading Staus: ${status.readingStatus}\n`)
    };
});

// 5


// 6
var library = [ 
    { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 }, 
    { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 }, 
    { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }
];
const compare = (a,b)=>{
    if(a.libraryID > b.libraryID){
        return -1;
    }else{
        return 0;
    }
}
console.log(library.sort(compare));