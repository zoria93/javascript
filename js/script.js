function descendingOrder(numbers) {
    let array = [];
    array.push(numbers);
    const gog = array.sort((a, b) => b - a); 
    console.log(gog)
  
};


descendingOrder(123456789);