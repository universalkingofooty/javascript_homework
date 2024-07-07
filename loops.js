loopVari = 1;

const mine = {
    firstName : 'sakthiprasath',
    age : 17,
    address : "bkprm,masianagudi",
    blood_group: "B + ve",
    parent : "nirmala"
    
    } 
    const propOwn = Object.getOwnPropertyNames(mine);
    console.log(propOwn.length);

 for (i=0;i<propOwn.length;i++){
     console.log(Object.values(mine)[i]);
     }    
while(loopVari<5){
    console.log(mine);
    loopVari = loopVari+1
    
}

     
     