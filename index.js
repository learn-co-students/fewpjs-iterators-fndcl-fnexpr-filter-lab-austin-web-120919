// Code your solution here
function findMatching(array,string){
   return array.filter(word => (word.toLowerCase() === string.toLowerCase()));
}

function fuzzyMatch(array,string){
    return array.filter()
}

function fuzzyMatch(array,string){
    return array.filter(word => {
        let len = string.length;
        if (word.slice(0,len) == string){
            return word;
        }
    });
}

function matchName(array,string){
    return array.filter( word => word.name == string)
}
