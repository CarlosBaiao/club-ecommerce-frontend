import * as firestore from 'firebase/firestore'
import { renderWithRedux } from '../../helpers/test.helpers'
import Category from '../../types/category.types'
import CategoriesOverview from './categories-overview.component'

jest.mock('firebase/firestore')

describe('CAtegories Overview', () => {
  it('should fetch and show categories', async () => {
    const mockedFirestore = firestore as any

    mockedFirestore.getDocs.mockImplementation(async () => [
      {
        data(): Category {
          return {
            id: '1',
            displayName: 'Lorem Ipsum',
            imageUrl: 'image_url',
            name: 'lorem-ipsum',
            products: [
              { id: '1', imageUrl: 'image_url', name: 'Boné', price: 100 }
            ]
          }
        }
      }
    ])

    mockedFirestore.collection.mockImplementation(() => ({
      withConverter: () => {}
    }))

    const { findByText, getByText } = renderWithRedux(
      <CategoriesOverview />,
      {}
    )

    await findByText(/boné/i)
    getByText('Lorem Ipsum')
    getByText('R$100')
  })
})
