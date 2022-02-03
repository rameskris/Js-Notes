//modules needs live server to work
//default export
//only one export default per file

//this is prefed

// function showPeople(people){
//     const newPeople=people.map((person)=>{
//         const {name,job}=person
//         console.log(name,job)
//         return `<p>${name} ${job}</p>`
//     }).join('')
//     console.log(newPeople)
//     return newPeople

// }

// export default showPeople

//or
//as you default doesnot need name you can call it any name on imported
export default (people)=>{
    const newPeople=people.map((person)=>{
        const {name,job}=person
        console.log(name,job)
        return `<p>${name} ${job}</p>`
    }).join('')
    console.log(newPeople)
    return newPeople

}

 

