import userEvent from '@testing-library/user-event'
import { renderWithRedux } from '../../helpers/test.helpers'
import LoginPage from './login.page'

describe('Login', () => {
  it('should show erros when trying to submit without filling all required fields', async () => {
    const { getByText, findByText } = renderWithRedux(<LoginPage />, {})

    const submitButton = getByText('Entrar')

    userEvent.click(submitButton)

    await findByText('O e-mail é obrigatório.')
    getByText('A senha é obrigatória.')
  })
})
