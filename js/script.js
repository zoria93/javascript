const pizzaPalace = {
  pizzas: ["Ultracheese", "Smoked", "Four meats"],
  order(pizzaName, makePizza, onOrderError) {
      for (const pizza of this.pizzas) {
          
          if (pizza === pizzaName) {
              return makePizza(pizzaName);
          } 
          
   }
      
  },
  
};
// Change code above this line

// Callback for onSuccess
function makePizza(pizzaName) {
  return `Your order is accepted. Cooking pizza ${pizzaName}.`;
}

// Callback for onError
function onOrderError(error) {
  return `Error! ${error}`;
}

// Method calls with callbacks
console.log(pizzaPalace.order("Smoked", makePizza, onOrderError));
pizzaPalace.order("Four meats", makePizza, onOrderError);
console.log(pizzaPalace.order("Big Mike", makePizza, onOrderError))
pizzaPalace.order("Vienna", makePizza, onOrderError);
