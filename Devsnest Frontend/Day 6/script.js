// 1.
const checkArray = (ar)=>{
    return Array.isArray(ar);
}
console.log(checkArray([1,2,3,4,[5,4]]));
console.log(checkArray("Rishabh Pagaria"));

// 2.
const cloneArray = (ar)=>{
    return ar.slice(0);
    // return ar.slice(0,ar.length);
}
console.log(cloneArray([3,4,2,1,[1,2]]));

// 3.
const firstElements = (ar,n)=>{
    if(n < 0){
        return [];
    }
    return ar.slice(0,n);
}
console.log(firstElements([1,2,3,4],-2));
console.log(firstElements([1,2,3,4],1));
console.log(firstElements([],3));
console.log(firstElements([7,9,0,-2],3));
console.log(firstElements([7,9,0,-2],6));

// 4.
let string = "";
myColor = ["Red","Green","White","Black"];
myColor.forEach((color) => {
    string += `${color} `;
})
console.log(string);