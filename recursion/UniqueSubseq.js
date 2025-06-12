const uniqueSubSequence = (arr, index=0, current = [], resultSet = new Set()) =>{
    //base condition
    if(index == arr.length){
       const key = current.join(',');
       if(!resultSet.has(key)){
        resultSet.add(key);
        console.log(key === ''? []: key.split(',').map(Number));
       }
       return;
    }

   //include 
   uniqueSubSequence(arr, index+1, [...current, arr[index]], resultSet);
   //exclude
   uniqueSubSequence(arr, index+1, current, resultSet);
}

const t = uniqueSubSequence([1,1,2]);
console.log(t);