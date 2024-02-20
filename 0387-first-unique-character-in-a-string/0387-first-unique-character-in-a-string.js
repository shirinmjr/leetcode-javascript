var firstUniqChar = function(s) {
    let sArray = s.split("")
    
    let sObj = {}

    sArray.forEach(el => {
        if(sObj.hasOwnProperty(el)){
            sObj[el]++
        }else{
            sObj[el] = 1
        }
    } )
    console.log(sObj)
    let keys = Object.keys(sObj)
    console.log(keys)
    for(let i = 0; i<keys.length; i++){
        if(sObj[keys[i]] === 1){
            return sArray.indexOf(keys[i])
        }
    }
    return -1
};