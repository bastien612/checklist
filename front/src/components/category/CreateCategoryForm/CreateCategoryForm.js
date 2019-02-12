import { Button, Grid, TextField } from '@material-ui/core';
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link, withRouter } from 'react-router-dom';

class CreateCategoryForm extends React.Component {

    handleSubmitCategory = (value) => {

        console.log("submit !! ");
        console.log(value);
        // console.log(this.props.form);
        this.props.categoryActions.postCategory(value.name);
        this.props.history.push("/category");
    }

    render() {
        return (
            <form onSubmit={this.handleSubmitCategory}>
                <Grid container>
                    <Grid item xs={12}>
                        <Field
                            name='name'
                            component={TextField}
                            type='text'
                            label='Nom de la catégorie'
                            variant="filled"
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <Button type='submit' variant="contained" color="primary">Create</Button>
                    </Grid>
                </Grid>
            </form>
        )
    }
}

export default withRouter(reduxForm({
    form: 'createCategory'
})(CreateCategoryForm));