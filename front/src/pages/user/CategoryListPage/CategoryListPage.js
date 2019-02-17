import React from 'react';
import { withStyles, Grid } from '@material-ui/core';
import Header from "components/Layouts/Header";
import CategoryList from "components/category/CategoryList/CategoryListContainer";
import { Link } from "react-router-dom";

const styles = () => ({

})

class CategoryListPage extends React.Component {

    render() {
        return (
            <Grid container direction="column" spacing={16}>
                <Grid item>
                    <Header />
                </Grid>
                <Grid item>
                    <CategoryList />
                </Grid>
                <Grid>
                    <Link to="/createCategory">Créer category</Link>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styles)(CategoryListPage);