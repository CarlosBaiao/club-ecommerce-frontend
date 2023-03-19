import { FunctionComponent } from 'react'
import { BsCart } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

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
import { useAppSelector } from '../../hooks/redux.hooks'
import { toggleCart } from '../../store/toolkit/cart/cart.slice'
import { selectProductsCount, selectProductsTotalPrice } from '../../store/reducers/cart/cart.selectors'

const Cart: FunctionComponent = () => {
  const productsTotalPrice = useAppSelector(selectProductsTotalPrice)

  const productsCount = useAppSelector(selectProductsCount)

  const { isVisible, products } = useAppSelector((state) => state.cartReducer)

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const handleGoToCheckoutClick = () => {
    navigate('/checkout')
    dispatch(toggleCart())
  }

  const handleEscapeAreaClick = () => {
    dispatch(toggleCart())
  }

  return (
    <CartContainer isVisible={isVisible}>
      <CartEscapeArea onClick={handleEscapeAreaClick} />

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
