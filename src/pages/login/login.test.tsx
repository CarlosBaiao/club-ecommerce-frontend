import userEvent from '@testing-library/user-event'
import * as firebaseAuth from 'firebase/auth'
import { AuthErrorCodes } from 'firebase/auth'

import { renderWithRedux } from '../../helpers/test.helpers'
import LoginPage from './login.page'

jest.mock('firebase/auth')

describe('Login', () => {
  it('should show erros when trying to submit without filling all required fields', async () => {
    const { getByText, findByText } = renderWithRedux(<LoginPage />, {})

    const submitButton = getByText('Entrar')

    userEvent.click(submitButton)

    await findByText('O e-mail é obrigatório.')
    getByText('A senha é obrigatória.')
  })

  it('should show error if email is invalid', async () => {
    const { getByPlaceholderText, findByText, getByText } = renderWithRedux(
      <LoginPage />,
      {}
    )

    const emailInput = getByPlaceholderText(/digite seu e-mail/i)

    userEvent.type(emailInput, 'invalid_email')

    const submitButton = getByText('Entrar')

    userEvent.click(submitButton)

    await findByText('Por favor, insira um e-mail válido.')
  })

  it('should show an error if email is not found', async () => {
    const mockFirebaseAuth = firebaseAuth as any

    mockFirebaseAuth.signInWithEmailAndPassword.mockImplementation(() =>
      Promise.reject({
        code: AuthErrorCodes.USER_DELETED
      })
    )

    const { getByPlaceholderText, findByText, getByText } = renderWithRedux(
      <LoginPage />,
      {}
    )

    const emailInput = getByPlaceholderText(/digite seu e-mail/i)

    userEvent.type(emailInput, 'lorem_ipsum@gmail.com')

    const passwordInput = getByPlaceholderText(/digite sua senha/i)

    userEvent.type(passwordInput, '123mudar')

    const submitButton = getByText('Entrar')

    userEvent.click(submitButton)

    await findByText(/o e-mail não foi encontrado./i)
  })

  it('should show an error if password is not valid', async () => {
    const mockFirebaseAuth = firebaseAuth as any

    mockFirebaseAuth.signInWithEmailAndPassword.mockImplementation(() =>
      Promise.reject({
        code: AuthErrorCodes.INVALID_PASSWORD
      })
    )

    const { getByPlaceholderText, findByText, getByText } = renderWithRedux(
      <LoginPage />,
      {}
    )

    const emailInput = getByPlaceholderText(/digite seu e-mail/i)

    userEvent.type(emailInput, 'lorem_ipsum@gmail.com')

    const passwordInput = getByPlaceholderText(/digite sua senha/i)

    userEvent.type(passwordInput, '123123')

    const submitButton = getByText('Entrar')

    userEvent.click(submitButton)

    await findByText(/a senha é inválida./i)
  })
})
