import { renderWithRedux } from '../../helpers/test.helpers'
import Cart from './cart.component'

describe('Cart', () => {
  it('should show correct cart products', () => {
    const { getByText } = renderWithRedux(<Cart />, {
      preloadedState: {
        cartReducer: {
          products: [
            {
              id: '1',
              imageUrl: 'image_url',
              name: 'teste',
              price: 100,
              quantity: 2
            }
          ]
        }
      } as any
    })

    getByText(/teste/i)
    getByText('R$100')
    getByText('2')
    getByText('Total: R$200')
    getByText(/ir para o checkout/i)
  })

  it('should not show checkout button and should show an empty message if cart is empty', () => {
    const { getByText, queryByText } = renderWithRedux(<Cart />, {
      preloadedState: {
        cartReducer: {
          products: []
        }
      } as any
    })

    getByText('Seu carrinho está vazio!')
    expect(queryByText(/ir para o checkout/i)).toBeNull()
  })
})
