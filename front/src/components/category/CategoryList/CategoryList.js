import React from 'react';
import { Typography, Grid, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';


const styles = {
    "backgroundColor": "lightblue"
}

class CategoryList extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.fetchCategories = this.fetchCategories.bind(this)
    }

    fetchCategories() {
        this.props.categoryActions.fetchCategories()
    }

    render() {
        const { categories } = this.props;
        console.log("Categories : " + JSON.stringify(categories))
        return (
            <Grid container>
                <Grid item xs={12}>
                    <Typography variant="h1" gutterBottom>
                        Categories
                    </Typography>
                </Grid>
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




export default (withStyles(styles)(CategoryList));