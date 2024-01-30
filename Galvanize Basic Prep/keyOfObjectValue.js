var result1 = keyOfObjectValue({cucumbers: 14, carrots: 20, peas: 400}, 20);
console.log('should log "carrots":', result1);

function keyOfObjectValue(obj, target) {
    for(let key in obj) {
        if(obj[key] === target) {
            return key
        } 
    }
}