import Header from '../../components/header/header.components'

// Styles
import {
  LoginContainer,
  LoginContent,
  LoginHeadline,
  LoginInputContainer,
  LoginSubtitle
} from './login.styles'

const Login = () => {
  return (
    <>
      <Header />
      <LoginContainer>
        <LoginContent>
          <LoginHeadline>Entre com a sua conta</LoginHeadline>
          {/* {Button} */}
          <LoginSubtitle>ou entre com o seu e-mail</LoginSubtitle>
          <LoginInputContainer>{/* {email input} */}</LoginInputContainer>
          <LoginInputContainer>{/* {Password input} */}</LoginInputContainer>
          {/* {Button} */}
        </LoginContent>
      </LoginContainer>
    </>
  )
}

export default Login
