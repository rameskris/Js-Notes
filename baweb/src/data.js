const users=[
    {name:'ram',premium:true},
    {name:'krish',premium:false},
    {name:'yoshi',premium:true},
    {name:'koshi',premium:false}
]

export const premiumUsers=(users)=>{
    return users.filter(user=>user.premium)

}
export default users

//alternative way of exporting
//export{premiumUsers,users as default}