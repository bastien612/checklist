import React from 'react';
import { Grid } from '@material-ui/core';
import Header from 'components/Layouts/Header';
import ConnexionForm from 'components/connexion/ConnexionForm/ConnexionFormContainer'

class ConnexionPage extends React.Component {

    handleSubmit = (values) => {

    }

    render() {
        return (
            <Grid container>
                <Grid item xs={12}>
                    <Header />
                </Grid>

                <Grid item xs={12}>
                    <ConnexionForm />
                </Grid>
            </Grid>
        )
    }
}

export default ConnexionPage;