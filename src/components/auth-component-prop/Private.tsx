import { Login } from './Login'
import { ProfileProps } from './Profile'

type PrivateProps = {
  isLoggedIn?: boolean
  Component?: React.ComponentType<ProfileProps>
}
//Here in example Props Profile is coming as a Component

export const Private: React.FC<PrivateProps> = (props) => {
  const { isLoggedIn, Component } = props
  if (isLoggedIn) {
    if (Component) {
      return <Component name='Chetan' />
    } 
    else {
      return <></>
    }
  }
  else {
    return <Login />
  }
}
