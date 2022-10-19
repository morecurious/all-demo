let unique1= (arr) => {
  return arr.filter((item,index) => {
      return arr.indexOf(item) ===index;
  })
};

function unique(arr) {
  let map = new Map()
  for(let item of arr){
      map.set(item,true)
  }
  return [...map.keys()]
}

var arr = [1,1,13,4,4,5,6,77,8,8,9]
console.log([...new Set(arr)]) 

function uniqueArr3(arr){
  let res= []
  for(let i = 0 ;i<arr.length;i++){
      if(res.indexOf(arr[i]) === -1){
          res.push(arr[i])
      }
  }
  return res
}
console.log(uniqueArr3(arr))


//error  test 
// git reset --soft HEAD~2
//git commit --amend
