import { ReactNode, createContext, useReducer } from 'react'
import { cartReducer, coffeeCartType } from '../reduces/cart/reducer'
import { addCoffeeAction, removeAllAction, removeCoffeeAction, updateListAction } from '../reduces/cart/actions'
import { toast } from 'react-toastify'

interface CartInterfaceType {
  coffee: coffeeCartType[]
  removeCoffee: (item: coffeeCartType) => void
  addCoffee: (item: coffeeCartType) => void
  updateList: (item: coffeeCartType) => void
  removeList: (item: coffeeCartType) => void
  removeAll: () => void
}

interface CartContextPrivderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartInterfaceType)

export function CartContextProvider({ children }: CartContextPrivderProps) {
  const [cartState, dispatch] = useReducer(cartReducer, {
    cart: [],
  })

  function removeCoffee(item: coffeeCartType) {
    dispatch({
      type: 'REMOVE_COFFEE',
      payload: { item },
    })
  }

  function addCoffee(item: coffeeCartType) {
    dispatch(addCoffeeAction(item));
    toast.success("Café adicionado ao carrinho!");
  }

  function updateList(item: coffeeCartType) {
    dispatch(updateListAction(item));
  }

  function removeList(item: coffeeCartType) {
    dispatch(removeCoffeeAction(item))
  }

  function removeAll() {
    dispatch(removeAllAction())
  }

  return (
    <CartContext.Provider value={{ coffee: cartState.cart, removeCoffee, addCoffee, updateList, removeList, removeAll }}>
      {children}
    </CartContext.Provider>
  )
}