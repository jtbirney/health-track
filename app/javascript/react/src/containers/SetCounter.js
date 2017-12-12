import { connect } from 'react-redux'
import { increment, decrement } from '../actions'
import Counter from '../components/Counter'


const mapStateToProps = (state) => ({
    count: state.counter
  })

const mapDispatchToProps = {
  onIncrementClick: increment,
  onDecrementClick: decrement
}

const SetCounter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

export default SetCounter
