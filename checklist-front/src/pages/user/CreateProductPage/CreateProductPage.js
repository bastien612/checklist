import React from 'react';
import { Grid } from '@material-ui/core';
import Header from 'components/Layouts/Header';
import CreateProductForm from 'components/product/CreateProductForm/CreateProductFormContainer';

class CreateProductPage extends React.Component {



    render() {
        return (
            <Grid container>
                <Grid item xs={12}>
                    <Header />
                </Grid>

                <Grid item xs={3}>
                    <CreateProductForm />
                </Grid>
            </Grid>
        )
    }
}

export default CreateProductPage;