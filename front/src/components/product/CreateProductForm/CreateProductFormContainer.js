import CreateProductForm from 'components/product/CreateProductForm/CreateProductForm'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as productActions from 'actions/productActions';
import PropTypes from 'prop-types';

CreateProductForm.propTypes = {
    productActions: PropTypes.object,
    products: PropTypes.array
};

function mapStateToProps(state) {
    return {
        products: state.products
    };
}

function mapDispatchToProps(dispatch) {
    return {
        productActions: bindActionCreators(productActions, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProductForm)