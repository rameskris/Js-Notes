class User{
    constructor(username,score){
        this.username=username
        this.score=score

    }
    login(){
        console.log(`${this.username}`)
        return this
    }
    incScore(){
        this.score+=1
        console.log(`${this.username} has a score of ${this.score}`)

    }

}
//inheritence
class Admin extends User{
    //this delete method is only for admin not for parent we cant access it form parent
    //userOne.deleteUser() not working
    // deleteUser(user){
    //    users=users.filter((u)=>{
    //         return u.username!==user.username
    //     })

    // }
    constructor(username,score,title){
        super(username,score)
        this.title=title

    }

}
const userOne=new User('raam')
const userTwo=new User('ra')

const userThree=new Admin('val',4,'love')
console.log(userThree)

// let users=[userOne,userTwo,userThree]
// userThree.deleteUser(userTwo)
// console.log(users)


//WITH CLASS WE CREATE OBJECTS USING CONSTRUCTOR FUNCTION

function Car(model,year){
    this.model=model
    this.year=year
    this.login=function(){
        console.log(this.model)
    }

}
const car1=new Car('apo',1992)
car1.login()

//using protype to create function to refelct all instances
function PowerUser(name,age){
    this.name=name
    this.age=age

}
PowerUser.prototype.login=function(){
    console.log(`${this.name} has loged in`)
}
PowerUser.prototype.logout=function(){
    console.log(`${this.name} has logged out`)
}
//protype inheritence for properties

function PowerAdmin(name,age,title){
    PowerUser.call(this,name,age)
    this.title=title
}
PowerAdmin.prototype.watching=function(){
    console.log("pa watching")
}

//protype inheritence for functions
PowerAdmin.prototype=Object.create(PowerUser.prototype)
//PowerAdmin.prototype=PowerUser.prototype
PowerAdmin.prototype.watching=function(){
    console.log("pa watching")
}

const p1=new PowerUser('kalyan',40)
console.log(p1)
const pA1=new PowerAdmin('kannan',32)
console.log(pA1)


//CLASS SYNTAX RELERAN
function Human(name,gender){
    this.name=name
    this.gender=gender
    this.walk=function(){
        console.log("walking")
    }

}
//if i do this its reflect all instances protypes
Human.prototype.greet=function(){
    console.log("hello h r u!")
}

const human1=new Human('ram','male')
console.log(human1)
console.log(human1.greet())
console.log(human1.walk())

///
function MetaHuman(name,gender,chipSet){
    Human.call(this,name,gender)
    this.chipset=this.chipSet


}
MetaHuman.prototype=Object.create(Human.prototype)
const meta1=new MetaHuman('th12','robo male','i9')

console.log(meta1.greet())

//new method to create class
class SuperHero{
    constructor(name,planet,power){
        this.name=name
        this.planet=planet
        this.power=power
    }
    fly(){
        console.log(`${this.name} can ${this.power}`)
    }
}
//creat instance
const superman=new SuperHero('super man','krypotian','fly')
console.log(superman.fly())

//inheritence
class Titans extends SuperHero{
    constructor(name,planet,power,isGood){
        super(name,planet,power)
        this.isGood=isGood

    }
    TeamUp(){
        let ans=this.isGood?'ok':'suck it!!!!'
        console.log(ans)
    }
    
}
const trigon=new Titans('duperman','earth','lasereye',false)
console.log(trigon)
console.log(trigon.fly())
console.log(trigon.TeamUp())