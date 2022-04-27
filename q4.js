function mostExpensive(obj) {
    let array = Object.values(obj);
    let Max= Math.max(...array);
    let Expensive = Object.keys(obj).find( key => obj[key] === Max)
    return `The most expensive one is the ${Expensive}`
  }

  console.log(mostExpensive({
      "Silver Bracelet": 280,
      "Gemstone Earrings": 180,
      "Diamond Ring": 3500
  }));