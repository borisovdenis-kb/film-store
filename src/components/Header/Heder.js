import {connect} from 'react-redux';
import HeaderUI from './HeaderUI';

export const Header = connect(
  state => ({
    isVisible: state.filter.isVisible
  })
)(HeaderUI);
