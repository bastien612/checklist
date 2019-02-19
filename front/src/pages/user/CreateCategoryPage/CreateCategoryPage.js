import React from 'react';
import { Grid } from '@material-ui/core';
import Header from 'components/Layouts/Header';
import CreateCategoryForm from 'components/category/CreateCategoryForm/CreateCategoryFormContainer';

class CreateCategoryPage extends React.Component {



    render() {
        return (
            <Grid container>
                <Grid item xs={12}>
                    <Header />
                </Grid>

                <Grid item xs={3}>
                    <CreateCategoryForm />
                </Grid>
            </Grid>
        )
    }
}

export default CreateCategoryPage;