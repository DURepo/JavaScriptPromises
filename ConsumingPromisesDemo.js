let DemogoodURL = "https://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=97330"
let DemobadURL="https://search.ams.usda/farmersmarkets/v1/data.svc/zipSearch?zip=97330"

let url = DemogoodURL

const fetchPromise = new Promise((resolve,reject)=>{

fetch(url)
.then( (res) => {return res.json()})
.then((result)=>{resolve(result)})
.catch((error)=>{ reject(error)})
})

//fetchPromise: This promise fetches Farmers Market data for a given ZIP Code using API
//Let's consume the promise and get the data/error