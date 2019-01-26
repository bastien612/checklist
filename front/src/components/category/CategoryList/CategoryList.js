import React from 'react';
import { Typography, Grid, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as categoryActions from 'actions/categoryActions';
import PropTypes from 'prop-types';

const styles = {
    "backgroundColor": "lightblue"
}

class CategoryList extends React.Component {

    constructor(props) {
        super(props);
        this.fetchCategories = this.fetchCategories.bind(this)
    }

    fetchCategories() {
        console.log("categorylist.fetchCategory")
        this.props.categoryActions.fetchCategories()
    }

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
                <Grid item xs={12}>
                    <Button variant="contained" color="primary" onClick={this.fetchCategories}>Fetch</Button>
                </Grid>
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