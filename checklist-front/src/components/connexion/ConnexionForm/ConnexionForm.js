import React from 'react';
import { Grid, Button } from '@material-ui/core';
import { Field, reduxForm } from 'redux-form';
import { withRouter } from 'react-router-dom';
import { renderTextField } from 'components/ReduxFormFieldRenderer';


class ConnexionForm extends React.Component {

    handleSubmit = (values) => {
        this.props.connexionActions.login(values.username, values.password);
    }

    render() {
        const { handleSubmit } = this.props;

        return (

            <form onSubmit={handleSubmit(this.handleSubmit)}>
                <Grid container spacing={16}>
                    <Grid item xs={12}>
                        <Field
                            name='username'
                            component={renderTextField}
                            label="Nom d'utilisateur"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Field
                            name='password'
                            component={renderTextField}
                            label="Mot de passe"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button type='submit' variant="contained" color="primary">Connection</Button>
                    </Grid>
                </Grid>
            </form>

        )
    }
}

export default withRouter(reduxForm({
    form: 'connexionForm'
})(ConnexionForm));