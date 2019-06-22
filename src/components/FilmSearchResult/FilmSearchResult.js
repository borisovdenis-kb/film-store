import FilmSearchResultUI from './FilmSearchResultUI';
import { connect } from 'react-redux';
import _ from "lodash";

const mapStateToProps = (state) => ({
  films: _.chunk(state.films, 6)
});

const FilmSearchResult = connect(
  mapStateToProps
)(FilmSearchResultUI);

export default FilmSearchResult;
