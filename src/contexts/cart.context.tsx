import { createContext, FunctionComponent, ReactNode, useState } from 'react'
import CartProduct from '../types/cart.types'

interface ICartContext {
  isVisible: boolean
  toggleCart: () => void
  products: CartProduct[]
}

interface BaseLayoutProps {
  children?: ReactNode
}

const CartContext = createContext<ICartContext>({
  isVisible: false,
  products: [],
  toggleCart: () => {}
})

const CartContextProvider: FunctionComponent<BaseLayoutProps> = ({
  children
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const [products] = useState<CartProduct[]>([])

  const toggleCart = () => {
    setIsVisible((prevState) => !prevState)
  }

  return (
    <CartContext.Provider value={{ isVisible, products, toggleCart }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
