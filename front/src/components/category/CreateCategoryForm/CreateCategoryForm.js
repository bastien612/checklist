import { Button, Grid, TextField } from '@material-ui/core';
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link, withRouter } from 'react-router-dom';

class CreateCategoryForm extends React.Component {


    handleSubmitCategory = (values) => {

        console.log("submit !! ");
        console.log(values);
        console.log(values.category_name);
        // console.log(this.props.form);
        // categoryActions.postCategory(values.category_name);
        // this.props.history.push("/category");
    }

    render() {
        const { handleSubmit } = this.props;

        const renderTextField = ({
            input,
            label,
            meta: { touched, error },
            ...custom
        }) => (
                <TextField
                    hintText={label}
                    floatingLabelText={label}
                    errorText={touched && error}
                    {...input}
                    {...custom}
                />
            )

        return (
            <Grid container>
                <form onSubmit={handleSubmit(this.handleSubmitCategory)}>

                    <Grid item xs={12}>
                        <Field
                            name='category_name'
                            component={renderTextField}
                            label='Nom de la catégorie'
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Field
                            name='type'
                            component="input"
                            label='Type de la catégorie'
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <Button type='submit' variant="contained" color="primary">Create</Button>
                    </Grid>
                </form>
            </Grid>
        )
    }
}

export default withRouter(reduxForm({
    form: 'createCategory'
})(CreateCategoryForm));