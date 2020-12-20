import { Button } from 'antd'
import { useUserContext } from '../../context'

const SignOut = () => {
  const { dispatch } = useUserContext()
  return (
    <Button size="large" onClick={() => dispatch({ type: 'SIGN_OUT' })}>
      SignOut
    </Button>
  )
}
export default SignOut
