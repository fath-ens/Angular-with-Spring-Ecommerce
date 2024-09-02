let sportsOne : string[] = ["Golf", "Cricket", "Tennis", "Swimming"];

/*
for(let i=0; i<sportsOne.length; i++){
    console.log(sportsOne[i]);
}
    */

for(let tempSports of sportsOne){

    if(tempSports == "Cricket"){
        console.log(tempSports + "<<My Favorite!");
    }else{
        console.log(tempSports);
    }
}