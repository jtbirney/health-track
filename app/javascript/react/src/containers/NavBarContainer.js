import { connect } from 'react-redux'
import { toggleLogin, toggleSignUpForm, closeLogin } from '../actions'
import { fetchPostUser } from '../actions/createUser'
import { fetchPostSession } from '../actions/session'
import { fetchDestroySession } from '../actions/destroySession'
import NavBar from '../components/NavBar'


const mapStateToProps = state => {
  return {
    navForm: state.toggleNavForm,
    user: state.user.user,
    errors: state.user.error,
    loggedIn: state.loggedInAt
  }
}

const mapDispatchToProps = {
  toggleLogin: toggleLogin,
  toggleSignUpForm: toggleSignUpForm,
  closeLogin: closeLogin,
  createUser: fetchPostUser,
  logIn: fetchPostSession,
  logOut: fetchDestroySession
}

const NavBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar)

export default NavBarContainer
