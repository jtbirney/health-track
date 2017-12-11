import { connect } from 'react-redux'
import { toggleLogin } from '../actions'
import { createUser } from '../actions/User'
import NavBar from '../components/NavBar'


const mapStateToProps = state => {
  return {
    logInForm: state.toggleLogin
  }
}

const mapDispatchToProps = {
  toggleLogin: toggleLogin,
  createUser: createUser
}

const NavBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar)

export default NavBarContainer
