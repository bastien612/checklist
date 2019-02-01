import CategoryList from './CategoryList'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as categoryActions from 'actions/categoryActions';
import PropTypes from 'prop-types';

CategoryList.propTypes = {
    categoryActions: PropTypes.object,
    categories: PropTypes.array
};

function mapStateToProps(state) {
    return {
        categories: state.categories
    };
}

function mapDispatchToProps(dispatch) {
    return {
        categoryActions: bindActionCreators(categoryActions, dispatch)

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList)