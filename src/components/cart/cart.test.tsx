import userEvent from '@testing-library/user-event'
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

  it('should decrease product quantity on decrease click', () => {
    const { getByLabelText, getByText } = renderWithRedux(<Cart />, {
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
    const increaseButton = getByLabelText(/increase quantity of teste/i)

    userEvent.click(increaseButton)

    getByText('3')
    getByText('Total: R$300')
  })
  it('should increase product quantity on increase click', () => {
    const { getByLabelText, getByText } = renderWithRedux(<Cart />, {
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
    const decreaseButton = getByLabelText(/decrease quantity of teste/i)

    userEvent.click(decreaseButton)

    getByText('1')
    getByText('Total: R$100')
  })
  it('should remove product on remove click', () => {
    const { getByLabelText, queryByText, getByText } = renderWithRedux(
      <Cart />,
      {
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
      }
    )
    const removeButton = getByLabelText(/remove teste/i)
    userEvent.click(removeButton)
    expect(queryByText(/teste/i)).toBeNull()
    getByText(/seu carrinho está vazio!/i)
  })
})
