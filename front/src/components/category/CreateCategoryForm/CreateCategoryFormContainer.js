import CreateCategoryForm from 'components/category/CreateCategoryForm/CreateCategoryForm'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as categoryActions from 'actions/categoryActions';
import PropTypes from 'prop-types';

CreateCategoryForm.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(CreateCategoryForm)