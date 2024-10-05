import { PulseLoader } from 'react-spinners'
import { colors } from '../global'
import { LoaderDiv } from './styles'

const Loader = () => {
  return (
    <LoaderDiv>
      <PulseLoader color={colors.white} />
    </LoaderDiv>
  )
}

export default Loader
