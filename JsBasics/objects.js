//object literal
let user={}
//inside key value pair
user={
    name:'raam',
    age:30,
    email:'r@g.com',
    location:'german',
    blogs:[
        {title:'poda',likes:30},
        {title:'vada',likes:45}
    ],
    greet:()=>{
        console.log(user.blogs)
    },
    // logblogs:function(){                //uncaught ReferenceError: blogs is not defined
    //   console.log(blogs)
    // }
    logblogs(){                
       this.blogs.forEach(element => {
           console.log(element.title,element.likes)
           
       });
      },
    greetagain(){
        console.log(this.name)
    }

};
console.log(user.age)
console.log(user['name'])
console.log(user['blogs'][0])
user['name']='chu'
console.log(user['name'])

//console.log(user.logblogs())//uncaught ReferenceError: blogs is not defined
user.logblogs()
user.greetagain()
//if we use arrow function inside object this wont work its points to winndow
//object is not iterable