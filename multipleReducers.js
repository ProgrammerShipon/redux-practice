const  { createStore, applyMiddleware } = require('redux')
const { default: logger } = require('redux-logger')

//  products constants 
const get_products = 'get_products';
const add_products = 'add_products'
// cart Constants 
const get_cart = 'get_cart'
const add_cart = "ädd_cart"


// Products initialize
const initialProductState = {
   products: ["sugar", "salt"],
   numberOfProducts: 2,
}

// cart initial Product
const initialCartState = {
   carts: ['cart1', 'cart2']
   , numberOfCart: 2
}

// products Reducer
const getProducts = () => {
   return {
      type: get_products,
   }
}
const addProducts = (product) => {
   return {
      type: add_products,
      payload: product,
   }
}


// cart Reducer
const getCart = () => {
   return {
      type: get_products,
   }
}

const addCart = (product) => {
   return {
      type: add_products,
      payload: product,
   }
}

const reducer = (state = initialProductState, action) => {
   switch (action.type) {
      case get_products:
         return {
            ...state,
         }

         case add_products: 
         return {
            products: [ ...state.products, action.payload],
            numberOfProducts: state.numberOfProducts + 1,
         }

         default: 
         state;
   }
}

// store 
const store = createStore(reducer, applyMiddleware(logger))

store.subscribe(() => {
   console.log(store.getState())
})

// actions
store.dispatch(getProducts())
store.dispatch(addProducts("Oil"))
