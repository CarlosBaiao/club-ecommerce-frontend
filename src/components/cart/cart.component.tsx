import { FunctionComponent, useContext } from 'react'
import { BsCart } from 'react-icons/bs'

// Components
import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'

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
  const { productsTotalPrice, isVisible, toggleCart, products } =
    useContext(CartContext)
  return (
    <CartContainer isVisible={isVisible}>
      <CartEscapeArea onClick={toggleCart} />
      <CartContent>
        <CartTitle>Seu carrinho</CartTitle>
        {products.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
        <CartTotal>Total: R${productsTotalPrice}</CartTotal>
        <CustomButton startIcon={<BsCart />}>Ir para o Checkout</CustomButton>
      </CartContent>
    </CartContainer>
  )
}

export default Cart
