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

//-----------Promise Code

const doPromiseWork = new Promise ((resolve, reject)=>{
  setTimeout(()=>{
    //resolve("result Data")
    reject("error message")
  },2000)
})

doPromiseWork
.then((res)=>{console.log(res)})
.catch((err)=>{console.log(err)})

//                          Fullfilled
//                        /
//Promise  -- Pending --> 
//                        \
//                          Rejected