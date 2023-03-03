import { FunctionComponent, ReactNode } from 'react'

// Styled
import { InputErrorMessageContainer } from './input-error-message.styles'

interface BaseLayoutProps {
  children?: ReactNode;
}

const InputErrorMessage: FunctionComponent<BaseLayoutProps> = ({ children }) => {
  return <InputErrorMessageContainer>{children}</InputErrorMessageContainer>
}

export default InputErrorMessage
