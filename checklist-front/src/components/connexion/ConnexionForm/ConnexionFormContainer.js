import ConnexionForm from 'components/connexion/ConnexionForm/ConnexionForm'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as connexionActions from 'actions/connexionActions';
import PropTypes from 'prop-types';

ConnexionForm.propTypes = {
    connexionActions: PropTypes.object,
    products: PropTypes.array
};

function mapStateToProps(state) {
    return {
        products: state.products
    };
}

function mapDispatchToProps(dispatch) {
    return {
        connexionActions: bindActionCreators(connexionActions, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ConnexionForm)