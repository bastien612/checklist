import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { CardHeader, Typography, Grid, withStyles, Link } from '@material-ui/core';
import Header from "components/Layouts/Header";
import DraftTextEditor from "components/textEditor/DraftTextEditor";
import ProductList from "components/product/ProductList";

const styles = theme => ({
    // noteCard : {
    //     padding:'10 10 10 10',
    //     display:'flex',
    //     flexWrap:'wrap',
    //     justifyContent: 'space-around',
    //     overflow: 'hidden'
    // }
})

class ProductPage extends React.Component {

    render() {

        return (
            <Grid container direction="column" spacing={16}>
                <Grid item>
                    <Header />
                </Grid>
                <Grid item>
                    <ProductList />
                </Grid>
                <Grid>
                    <Link to="/product/create">Créer Produit</Link>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styles)(ProductPage);