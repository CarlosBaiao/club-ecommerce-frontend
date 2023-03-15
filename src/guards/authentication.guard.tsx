import { FunctionComponent, ReactNode, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

// Components
import Header from '../components/header/header.components'
import Loading from '../components/loading/loading.component'

// Utilities
import { UserContext } from '../contexts/user.context'

interface BaseLayoutProps {
  children?: ReactNode
}

const AuthenticationGuard: FunctionComponent<BaseLayoutProps> = ({ children }) => {
  const { isAuthenticated } = useContext(UserContext)

  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthenticated) {
      setTimeout(() => {
        navigate('/login')
      }, 3000)
    }
  }, [isAuthenticated])

  if (!isAuthenticated) {
    return (
      <>
        <Header />
        <Loading message="Você precisa estar logado para acessar esta página. Você será redirecionado para a página de login em instantes..." />
      </>
    )
  }

  return <>{children}</>
}

export default AuthenticationGuard
