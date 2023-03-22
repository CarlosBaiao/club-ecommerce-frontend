import * as firestore from 'firebase/firestore'
import { renderWithRedux } from '../../helpers/test.helpers'
import Categories from './categories.component'

jest.mock('firebase/firestore')

describe('Categories', () => {
  it('should fetch and show categories', async () => {
    const mockedFirestore = firestore as any
    mockedFirestore.getDocs.mockImplementation(async () => [
      {
        data() {
          return {
            id: '1',
            displayName: 'Lorem Ipsum'
          }
        }
      }
    ])

    mockedFirestore.collection.mockImplementation(() => ({
      withConverter: () => {}
    }))

    const { findByText, getByText } = renderWithRedux(<Categories />, {})

    await findByText('Lorem Ipsum')
    getByText(/Explorar/i)
  })
})
