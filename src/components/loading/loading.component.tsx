import { FunctionComponent } from 'react'
import { LoadingContainer } from './loading.styles'
import SyncLoader from 'react-spinners/SyncLoader'

const Loading: FunctionComponent = () => {
  return (
    <LoadingContainer>
      <SyncLoader size={30} />
    </LoadingContainer>
  )
}

export default Loading
