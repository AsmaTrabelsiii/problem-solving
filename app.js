 "use stict"
 // // Easy Problems::////////////////////////////////////////////
 /////
const arr = [1,2,3,4,5]
console.log(arr)
arr.push(6)
console.log(arr)
////
arr.pop()
console.log(arr)
////
arr.unshift(0)
console.log(arr)
/////
arr.shift()
console.log(arr)
/////
  function check(num, arr) {
  if (arr.includes(num)) {
    console.log(`we have this number : ${num}`);
  } else {
    console.log("we dont have this number");
  }
}
check(5,arr)
////
const arr2 = [6,7,8,9,10]
const result=arr.concat(arr2)
console.log(result)
///////
const z = [6,7,8,9,10]
console.log(z)
z.reverse()
console.log(z)
////////
const h = [6,7,8,9,10,20,30,50,60]
console.log(h)
const extrait=(array,start,end)=>array.slice(start,end)
 const res=extrait(h,2,6)
console.log(res)
///////
 const u = [6,7,8,9,10,20,30,50,60]
 console.log(u)
 u.splice(2,3)
 console.log(u)
// Intermediate Problems:::://///////////////////////////////////////////////
 ///////
 const num = [2, 5, 6, 8]; 
 const sumNub=(num)=>{ let s=0
    num.forEach(element => s+=element    
  
)
return s
}
console.log(sumNub(num))
 ///////////
  const index = 2;


console.log(num);
 num.splice(index, 1);
 console.log(num);
 //////////
  const tab = [2, 5, 6, 8]; 
 console.log(tab)
 tab.splice(0,1,1)
 tab.splice(1,1,2)
 console.log(tab)
 ///////
 console.log(num)
 console.log(tab)
 const t=num.concat(tab)
 console.log(t)
 t.sort((a,b)=>a-b)
 console.log(t)
 ///////////
  const arr3 = [6, 4, 111, 3, 115];
 function max(arr) {
   let maxNumber = arr[0]; ////
   arr.forEach((num) => {
     if (num > maxNumber) {
       maxNumber = num
     }
   })
    return maxNumber

 }
 console.log(arr3);
 console.log(max(arr3));
 /////////// ******
 const arr4 = [0, 8, 6, 8, 7, 11, 13,-5,-1,-6];

const occ = (arr4, ch) => {
    let occ = 0;

    arr4.forEach(ele => {
        if (ele == ch) {
            occ++;
        }
    });

    return occ;
};

console.log(occ(arr4, 0));
////////
const negativ=(arr4)=>
    {arr4.forEach ((ele,index)=>{
        if (ele<0) {
         arr4.splice(index,1)
    console.log(arr4)
       }

    })
         
   console.log(arr4)
}
/////!!!
// Advanced Problems:://////////////////////////////////////////////////////////////////////////////
/////
// const remove=(negativ(arr4),arr4) =>
//   {arr4.forEach((ele))}

    
 ////////////
   const numbers = [1, 10, 2, 10, 5, 6, 10, 100, 6,100];
   function remove (arr,valeur) 
   { const a=[]
   
    arr.forEach((ele,)=> { if (ele!==valeur   ) {
      a.push(ele)
     
      
    }  } 
  )
return a
   } 
     console.log( remove(numbers,100))   
   
 ////////////////////
 function desc( arr)
 { arr.sort((a,b) =>  b-a).reverse()
  return arr
  }
console.log(desc(numbers))

