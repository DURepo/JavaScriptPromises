//------------CALLBACK code

const doCallbackWork = (callback)=>{
  setTimeout(()=>{
    //callback('Error message', undefined)
    callback(undefined, "result Data")
  },2000)
}

doCallback((error, result)=>{
  if(error){
    console.log(error)
  }
  else{
    console.log(result)
  }
})

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