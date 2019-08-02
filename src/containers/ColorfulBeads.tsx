import { connect } from 'react-redux';
import { CounterState } from '../reducer';
import ColorfulBeads from '../components/ColorfulBeads';

interface StateProps {
  count: number;
}

const mapStateToProps = (state: CounterState): StateProps => ({
  count: state.count,
});

export default connect(mapStateToProps)(ColorfulBeads);