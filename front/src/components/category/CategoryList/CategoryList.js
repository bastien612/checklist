import React from 'react';
import { Typography, Grid, Button, Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';


const styles = {
    "backgroundColor": "lightblue"
}

class CategoryList extends React.Component {

    componentDidMount = () => {
        this.props.categoryActions.fetchCategories();
    }

    render() {
        const {
            categories,
            categoryActions
        } = this.props;
        return (
            <Paper>
                <Grid container>
                    <Grid item xs={12}>
                        <Typography variant="h1" align='center' gutterBottom>
                            Categories
                        </Typography>
                    </Grid>
                    {categories.map(category => {
                        return (<Grid item xs={12} key={category.id}>
                            <Typography>
                                {category.name}
                            </Typography>
                        </Grid>
                        )
                    })}
                    <Grid item xs={12}>
                        <Button variant="contained" color="primary" onClick={categoryActions.fetchCategories}>Fetch</Button>
                    </Grid>
                </Grid>
            </Paper>


        );
    }
}

export default (withStyles(styles)(CategoryList));