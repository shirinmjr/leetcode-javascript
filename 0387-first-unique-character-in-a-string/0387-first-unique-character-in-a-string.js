var firstUniqChar = function(s) {
    let sArray = s.split("")
    
    let sObj = {}//create an empty object to track the repetition of letters

    sArray.forEach(el => {
        if(sObj.hasOwnProperty(el)){
            sObj[el]++ //if the key already exists in the object, increment at sObj[<<KEY>>]
            
        }else{//if the key does not exists create the key and set the value to 1
            sObj[el] = 1 
        }
    } )
    console.log(sObj)
    let keys = Object.keys(sObj)
    //console.log(keys)
    for(let i = 0; i<keys.length; i++){
        if(sObj[keys[i]] === 1){
            return sArray.indexOf(keys[i])
        }
    }
    return -1
};