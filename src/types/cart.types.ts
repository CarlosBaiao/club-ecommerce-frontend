import Product from './product.type'

interface CartProduct extends Product {
  quantity: number
}

export default CartProduct
