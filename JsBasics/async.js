//make http request to object
// const getotdos=(resource,callback)=>{
//     const req=new XMLHttpRequest()

//     req.addEventListener('readystatechange',()=>{
//         //console.log(req,req.readyState)
//         if(req.readyState===4 && req.status===200){
//             const data=JSON.parse(req.responseText)
//             callback(undefined,data)
//         }else if(req.readyState===4){
//             callback('could not fetch data',undefined)
//         }
//     })

//     req.open('GET',resource)
//     req.send()
// }
// with promise
// const getotdos=(resource)=>{
//     return new Promise((resolve,reject)=>{
//         const req=new XMLHttpRequest()

//     req.addEventListener('readystatechange',()=>{
//         //console.log(req,req.readyState)
//         if(req.readyState===4 && req.status===200){
//             const data=JSON.parse(req.responseText)
//             resolve(data)
//         }else if(req.readyState===4){
//             reject('could not fetch data')
//         }
//     })

//     req.open('GET',resource)
//     req.send()
       


//     })
    
// }
// getotdos('todo.json').then(data=>{
//     return getotdos('todo1.json')
//    }).then(data=>{

// }).catch(err=>{
//     console.log(err)
// })

//const link='https://jsonplaceholder.typicode.com/todos/'
// getotdos('todo.json',(err,data)=>{
//    console.log(data)
//    getotdos('todo1.json',(err,data)=>{
//        console.log(data)

//    })

// })

//to aviod muliple nested function use promise

//promise
// const getSomething=()=>{
//     return new Promise((resolve,reject)=>{
//         resolve('sucess')
//         // reject('some error')
//     })
// }

// getSomething().then((data)=>{
//     console.log(data)

// },(err)=>{
//     console.log(err)
// })
//or
// getSomething().then(data=>{
//     console.log(data)
// }).catch(err=>{
//     console.log(err)
// })


//Fetch api
//only rejects on network error
//fetch return promises so you can use then and catch

// fetch('todo.json').then((resolve)=>{
//     console.log("Resolved",resolve)
//     return resolve.json()


// }).then(data=>{
//     console.log(data)
// }).catch((reject)=>{
//     console.log('rejected',reject)

// })

//asyn and await new featre chain promises together
//async function always return promise
// const asget=async ()=>{
//     //here fetch return promise await keyword hold not store data until promise is resolved

//     const response= await fetch('https://jsonplaceholder.typicode.com/todo/')
//     if(response.status!==200){
//         throw new Error('cant fetch data');

//     }
//     const data=await response.json()
//         return data
    


// }
//we cant get data directly from above because async return promise
//so here use then
// asget().then((data)=>{
//    console.log(data)
// }).catch(err=>console.log(err.message))



// const pObj=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         const rand=Math.random()
//         if(rand<0.5){
//          resolve()
//         }else{
//         reject()
//       }

// },3000)

// })

// pObj.then(()=>{
//     console.log("resolved")
// }).catch(()=>{
//     console.log("reject")
// })

// const rp=()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             const rand=Math.random()
//             if(rand<0.5){
//              resolve()
//             }else{
//             reject()
//           }
    
//     },3000)
    
//     })
    
    
// }
// rp().then(()=>{
//     console.log("resolved")
// }).catch(()=>{
//     console.log("reject")
// })

//chainig promise
const fakeRequest = (url) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const pages = {
				'/users'        : [
					{ id: 1, username: 'Bilbo' },
					{ id: 5, username: 'Esmerelda' }
				],
				'/users/1'      : {
					id        : 1,
					username  : 'Bilbo',
					upvotes   : 360,
					city      : 'Lisbon',
					topPostId : 454321
				},
				'/users/5'      : {
					id       : 5,
					username : 'Esmerelda',
					upvotes  : 571,
					city     : 'Honolulu'
				},
				'/posts/454321' : {
					id    : 454321,
					title :
						'Ladies & Gentlemen, may I introduce my pet pig, Hamlet'
				},
				'/about'        : 'This is the about page!'
			};
			const data = pages[url];
			if (data) {
				resolve({ status: 200, data }); //resolve with a value!
			}
			else {
				reject({ status: 404 }); //reject with a value!
			}
		}, 1000);
	});
};

// fakeRequest('/users').then((res)=>{
//     const id=res.data[0].id
    
//     fakeRequest(`/users/${id}`).then((res)=>{
// 		const postid=res.data.topPostId
// 		console.log(postid)
//         fakeRequest(`/posts/${postid}`).then((res)=>{
// 			console.log(res.data.title)
// 		})
//     })
// }).catch((data)=>{
//     console.log(data.status)
// })


//chaining promse
fakeRequest('/users').then((res)=>{
	const id=res.data[0].id
	console.log(id)
	return fakeRequest(`/users/${id}`)

}).then((res)=>{
	const postid=res.data.topPostId
	console.log(postid)
	return fakeRequest(`/posts/${postid}`)


}).then((res)=>{
	console.log(res.data.title)

}).
catch((err)=>{
	console.log(err)
})
//const id=res.data[0].id
// 	return fakeRequest('/users/${id}').then(res=>{
// 		const postid=res.data.topPostId
// 		fakeRequest('/posts/${postid').then(res=>{
// 			console.log(res.data.title)
// 		})
// 	})
// })

//promise with parameters wathc this before above

// const fakeRequest=(url)=>{
// 	return new Promise((resolve,reject)=>{
// 		setTimeout(()=>{
// 			const rand=Math.random()
// 			if(rand<0.5){
// 				const pages={
// 					'/users':[
// 						{'id':1,'name':"raam"},
// 						{'id':2,'name':"ra"}

// 					],
// 					'/about':"this is about page"
// 				}
// 				const data=pages[url]
// 				resolve({'status':200,data})
// 			}else{
// 				reject({'status':404})
// 			}
// 		},1000)
// 	})

// }
// fakeRequest('/users').then((res)=>{
// 	console.log(res.data[0].id)
// }).catch((res,a)=>{//here res is a object we pass in reject
// 	console.log('rejected',res.status,)
// })