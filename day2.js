// Quest1

let lang ="JavaScript";

let index = lang.toLowerCase().indexOf("s");
console.log(index);

// Quest2

let min=30;
let sec = min*60;
console.log(sec);

// Quest 3
let arr = ["java","python","javascript","aws","html"];
let search = "aws";
for (let i=0; i<arr.length;i++){
    if(search == arr[i])
    {
        console.log(arr[i]);
        console.log('Aws index ' + arr.indexOf(arr[i]));
        
    }

}


// Quest 4
function display(){
    for (let i=0;i<arr.length;i++){
        if(arr[i].includes("a")){
            console.log(arr[i] +" contains the letter'a'");
        }
    }
}
display();

// Quest5
console.log("Original array: "+ arr); 
console.log("Reversed array: "+ arr.reverse());
