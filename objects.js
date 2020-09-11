//Quest3A
let details =[
    {
        name : "ram",
        age : 40,
        country : "India",
        hobbies : ['singing','dancing','cricket'],

    },

    {
        name : "jacob",
        age : 25,
        country : "USA",
        hobbies :['cricket','basketball','cooking'],
    

    },

    {
        name : "riya",
        age :22,
        country : "India",
        hobbies :['reading','swimming','badminton'],
    },

    {
        name : "seena",
        age :29,
        country : "India",
        hobbies :['cooking','singing','sketching'],
    }

];
// Quest3B
console.log(details);


// Quest4A
console.log("Quest4A age<=30")
for (let i=0;i<=3;i++){
    
  // console.log(details[i].age <=30);
  if(details[i].age <=30 ){
      console.log(details[i]);
  }
   

}

//Quest4B
console.log("Quest4B country=India ")
for(let i=0;i<=3;i++){
    if(details[i].country == 'India'){
        console.log(details[i]);
    }
}
