import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as categoryActions from 'actions/categoryActions';
import PropTypes from 'prop-types';

const styles = {
    "backgroundColor": "lightblue"
}

class CategoryList extends React.Component {

    render() {
        const { categories } = this.props;
        console.log(categories)
        return (
            <Grid container>
                {categories.map(category => {
                    return (<Grid item key={category.id}>
                        <Typography>
                            {category.name}
                        </Typography>
                    </Grid>
                    )
                })}
            </Grid>

        );
    }
}

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


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(CategoryList));