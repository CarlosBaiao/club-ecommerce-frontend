import { renderWithRedux } from '../../helpers/test.helpers'
import Category from '../../types/category.types'
import CategoryOverview from './category-overview.component'

describe('Category Overview', () => {
  it('should show correct category and its products', () => {
    const category: Category = {
      id: '1',
      displayName: 'Lorem Ipsum',
      imageUrl: 'image_url',
      name: 'lorem-ipsum',
      products: [
        {
          id: '1',
          imageUrl: 'image_url',
          name: 'Boné',
          price: 100
        },
        {
          id: '2',
          imageUrl: 'image_url',
          name: 'Camisa',
          price: 200
        },
        {
          id: '3',
          imageUrl: 'image_url',
          name: 'Calça',
          price: 300
        },
        {
          id: '4',
          imageUrl: 'image_url',
          name: 'Blusa',
          price: 400
        },
        {
          id: '5',
          imageUrl: 'image_url',
          name: 'Tênis',
          price: 500
        }
      ]
    }
    const { getByText, queryByText } = renderWithRedux(
      <CategoryOverview category={category} />,
      {}
    )

    getByText(/Lorem Ipsum/i)
    // Products
    getByText(/Boné/i)
    getByText('R$100')

    getByText(/Camisa/i)
    getByText('R$200')

    getByText(/Calça/i)
    getByText('R$300')

    getByText(/Blusa/i)
    getByText('R$400')

    expect(queryByText(/Tênis/i)).toBeNull()
  })
})
