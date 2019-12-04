//--------------Creating Promises----------------

const myPromise = new Promise((resolve, reject)=>{
  //code to get Data
  if(false){
    resolve('Here is your Data')
  }
  else{
    reject('Error')
  }
})

myPromise
.then((res)=>{console.log(res)})
.catch((err)=>{console.log(err)})