function mapping(array) {
    return Object.fromEntries(array.map((element)=> (  
        [ element.toLowerCase() , element.toUpperCase()]
        )));  
}
console.log(mapping(["p", "s"])); 
console.log(mapping(["a", "b", "c"])); 
console.log(mapping(["a", "v", "y", "z"])); 