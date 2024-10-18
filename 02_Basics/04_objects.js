//object  nesting

const regularUser={
    email:"some@google.com",
    fullName:{
        user_name:{
            user_fullName:"deepanshu kumar",
            user_age:18
        }
    }
}

console.log(regularUser.fullName.user_name.user_fullName);



//merging objects


const obj1 = {1:'a',2:'b'};
const obj2 = {3:'c',4:'d'};

const obj3 = {obj1,obj2};
//console.log(obj3); first way 


//Object.assign(target,source)

const obj4=Object.assign({},obj1,obj2);
console.log(obj4);//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
console.log(obj1);//{ '1': 'a', '2': 'b' }

console.log(obj4===obj1)//false

const obj5 = Object.assign(obj1,obj2)
console.log(obj5);//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
console.log(obj1); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

console.log(obj5===obj1)//true


//third way(using a spread operator)

const obj6={...obj1,...obj2}; 
console.log(obj6);


const tinder_user = new Object(); //singleton object defining
tinder_user.name = "deepanshu";
tinder_user.email = "deep@google.com";
tinder_user.age=14;

console.log(tinder_user);

console.log(Object.keys(tinder_user));//[ 'name', 'email', 'age' ] keys of array returns
console.log(Object.values(tinder_user));//[ 'deepanshu', 'deep@google.com', 14 ]
console.log(Object.entries(tinder_user));//[[ 'name', 'deepanshu' ],[ 'email', 'deep@google.com' ],[ 'age', 14 ]]
 
console.log(tinder_user.hasOwnProperty('isloggedin'))//false

//array of objects
const Arr_of_obj = [
    {
      name1:"deepanshu",
      email1:"deep@google.com"        
    },
    {
      name2:"hitesh",
      email2:"hitesh@google.com"  
    },
    {
      name3:"techgun",
      email3:"techgun@google.com"  
    }
 
]

console.log(Arr_of_obj[1].name2);
console.log(Arr_of_obj.length);




//object - destructure (nothing but syntactical sugar)


const school = {
    teacher_name:'manju chopra',
    teacher_age:45,
    teacher_gender:'female'
}

console.log(school.teacher_name);//one way

const {teacher_name:instructor_name}=school

console.log(instructor_name)



//api 
//this is json(without name object) where key type also string

// {
//     "name":"deepanshu",
//     "course":"js",
//      "price":999
// }

// [
//     {},
//     {},
//     {}
// ]