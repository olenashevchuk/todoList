import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'

import { userContext } from '../../context'

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const { currentUser } = useContext(userContext)
  console.log('current', currentUser)
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        currentUser !== null ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={'/login'} />
        )
      }
    />
  )
}
export default PrivateRoute
