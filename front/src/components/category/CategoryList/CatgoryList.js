import React from 'react';
import { Typography } from '@material-ui/core';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as CategoryActions from 'actions/categoryActions';
import PropTypes from 'prop-types';


class CategoryList extends React.Component {
    
    render(props) {
        { categorie } = props;
        return (
            <Typography>
                List
            </Typography>
        );
    }
}

categoryList.propTypes = {
    categoryActions: PropTypes.object,
    category: PropTypes.array
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


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(CategoryPage));