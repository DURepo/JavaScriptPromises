
let GoodURL="https://dog.ceo/api/breeds/list/all"
let BadURL="https://dog/api/breeds/list/all"


let url = GoodURL;

const fetchPromise = new Promise((resolve,reject)=>{
fetch(url)
.then( (res) => {return res.json()})
.then((result)=>{resolve(result)})
.catch((error)=>{ reject(error)})
})

//fetchPromise : This promise gets list of all Dog breeds
//Write code to consume this promise

