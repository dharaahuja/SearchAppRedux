import { connect } from "react-redux";
import { fetchSearchResults } from "./action";
import SearchComponent from "./SearchComponent";

const mapStateToProps = (state) => ({
    results: state.search.results,
    loading: state.search.loading,
    error: state.search.error,
});

const mapDispatchToProps = {
    fetchSearchResults,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchComponent);