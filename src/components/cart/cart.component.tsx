import { FunctionComponent, useContext } from 'react'
import { BsCart } from 'react-icons/bs'

// Components
import CustomButton from '../custom-button/custom-button.component'

// Stiles
import {
  CartContainer,
  CartContent,
  CartEscapeArea,
  CartTitle,
  CartTotal
} from './cart.styles'

// Utilities
import { CartContext } from '../../contexts/cart.context'

const Cart: FunctionComponent = () => {
  const { isVisible, toggleCart } = useContext(CartContext)
  return (
    <CartContainer isVisible={isVisible}>
      <CartEscapeArea onClick={toggleCart} />
      <CartContent>
        <CartTitle>Seu carrinho</CartTitle>
        {/* produtos */}
        <CartTotal>Total: $999</CartTotal>
        <CustomButton startIcon={<BsCart />}>Ir para o Checkout</CustomButton>
      </CartContent>
    </CartContainer>
  )
}

export default Cart
