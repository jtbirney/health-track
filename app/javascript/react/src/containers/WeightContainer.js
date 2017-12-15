import { connect } from 'react-redux'
import { fetchWeights } from '../actions/weight'
import { fetchPostWeight } from '../actions/postWeight'
import Weight from '../components/Weight'


const mapStateToProps = state => {
  return {
    weights: state.weight.weights,
    errors: state.weight.errors,
    user: state.user.userId
  }
}

const mapDispatchToProps = {
  fetchWeights: fetchWeights,
  fetchPostWeight: fetchPostWeight
}

const WeightContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Weight)

export default WeightContainer
