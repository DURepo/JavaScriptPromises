//------------------Promise Practice


//console.log('Starting')
const addasyncFunction = (a,b)=>{
    
  //write code to return a promise that waits for 2 seconds and 
  // gives sum of two numbers a & b
  // if a and b are positive else throws error 
  const addPromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      if(a>0 && b >0){
      resolve(a+b)
    }
    else{
      reject(" Provide positive values of a and b")
    }
    },2000)    

  })

  return addPromise
}

addasyncFunction(1 , -2)
.then((result)=>{console.log('result: ', result)})
.catch((err)=>{console.log('error: ', err)})

//console.log('Ending')