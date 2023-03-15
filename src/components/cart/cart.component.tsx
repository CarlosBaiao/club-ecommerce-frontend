import { FunctionComponent, useContext } from 'react'
import { BsCart } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

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
  const { productsTotalPrice, isVisible, toggleCart, products, productsCount } =
    useContext(CartContext)

  const navigate = useNavigate()

  const handleGoToCheckoutClick = () => {
    navigate('/checkout')
    toggleCart()
  }
  return (
    <CartContainer isVisible={isVisible}>
      <CartEscapeArea onClick={toggleCart} />

      <CartContent>
        <CartTitle>Seu carrinho</CartTitle>
        {products.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}

        {productsCount > 0 && (
          <CartTotal>Total: R${productsTotalPrice}</CartTotal>
        )}

        {productsCount > 0 && (
          <CustomButton
            startIcon={<BsCart />}
            onClick={handleGoToCheckoutClick}>
            Ir para o Checkout
          </CustomButton>
        )}

        {productsCount === 0 && <p>Seu carrinho está vazio!</p>}
      </CartContent>
    </CartContainer>
  )
}

export default Cart
