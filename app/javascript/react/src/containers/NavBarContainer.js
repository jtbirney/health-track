import { connect } from 'react-redux'
import { toggleLogin, toggleSignUpForm, closeLogin } from '../actions'
import { fetchPostUser } from '../actions/createUser'
import { fetchSession, fetchPostSession } from '../actions/session'
import { fetchDestroySession } from '../actions/destroySession'
import NavBar from '../components/NavBar'


const mapStateToProps = state => {
  return {
    navForm: state.toggleNavForm,
    user: state.user.user,
    userId: state.user.userId,
    errors: state.user.error,
    loggedIn: state.loggedInAt
  }
}

const mapDispatchToProps = {
  toggleLogin: toggleLogin,
  toggleSignUpForm: toggleSignUpForm,
  closeLogin: closeLogin,
  createUser: fetchPostUser,
  fetchUser: fetchSession,
  logIn: fetchPostSession,
  logOut: fetchDestroySession
}

const NavBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar)

export default NavBarContainer
