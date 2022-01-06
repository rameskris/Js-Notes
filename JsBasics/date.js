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