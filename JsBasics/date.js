//date and times
const now=new Date();
console.log(now.getFullYear())
console.log(now.getMonth())

//YEAR MONTHS DAY TIMES
console.log("get full year",now.getFullYear())
//now janaury js is zero indexded so it show 0
console.log("get full Months",now.getMonth())
console.log("get Day",now.getDay())
console.log("get Date",now.getDate())

console.log("get Hours",now.getHours())
console.log("get MinutesgetMinutes",now.getMinutes())
console.log("get seconds",now.getSeconds())

//timestamp the no of millisecond since jan
console.log("get Timestamp",now.getTime())

//date strings
console.log(now.toDateString())
console.log(now.toTimeString())
console.log(now.toLocaleString())


//if we get time stamp before or future dates
const before=new Date('January 7 2020 11:25:50')
const diff =now.getTime()-before.getTime()

//now we convert above milliseconds in minutes
//first we divide by milliseconds to get seconds then we divide that 60 to get min
const min=Math.round(diff/1000/60)
//60 mins in hour
//to get hours
const hours=Math.round(min/60)
//now get days
console.log(Math.round(hours/24))

//converting time stamps to date objects
const timeStamps=1675938474990
console.log(new Date(timeStamps))

//Digital clock

const clock=document.querySelector('.clock')

const tick=()=>{
    const now=new Date()
    const hour=now.getHours()
    const min=now.getMinutes()
    const sec=now.getSeconds()

    const set=`<span>${hour}</span> :
                <span>${min}</span> :
                <span>${sec}</span> 
    `
    clock.innerHTML=set
}

setInterval(tick,1000)