import React from 'react'
import { connect } from 'react-redux'
import NavBarContainer from './containers/NavBarContainer'
import WeightContainer from './containers/WeightContainer'

const mapStateToProps = state => {
  return {
    user: state.user.userId
  }
}

const AppComponent = props => {
  return(
    <div>
      <NavBarContainer />
      {props.user && <WeightContainer />}
    </div>
  )
}

const App = connect(
  mapStateToProps
)(AppComponent)

export default App
