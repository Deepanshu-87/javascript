const ipl_team = ['punjab','mumbai','delhi','chennai'];
const world_team = ['india','england','newzealand','bangladesh'];

//ipl_team.push(world_team); 
// console.log(ipl_team);  // push basically concat world team array to a single element in ipl team array(bad way)
// console.log(ipl_team[4][0]); 
// console.log(ipl_team[4][3]);


const merge_team = ipl_team.concat(world_team); //concat retun the new string(bad way for more then 2 array merge) 
console.log(merge_team);

const merge_team2 = [...ipl_team,...world_team]; //best way to merge is using a spread operator(best way jusy seperated by ,)
console.log(merge_team2);



console.log(Array.isArray("deepanshu")) //false means deepanshu is a string not a array
console.log(Array.from("deepanshu")) //converted into array
console.log(Array.from({name:"deepanshu"})) //returns empty array (interesting case) 
// you need to specify which type of array is going to make like value like or key array in object case


const score1 = 21
const score2 = 25
const score3 = 52
const newArr = Array.of(score1,score2,score3)
console.log(newArr)