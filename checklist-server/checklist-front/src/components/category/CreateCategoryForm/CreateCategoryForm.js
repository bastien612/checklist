import { Button, Grid } from '@material-ui/core';
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { withRouter } from 'react-router-dom';
import { renderTextField } from 'components/ReduxFormFieldRenderer';

class CreateCategoryForm extends React.Component {


    handleSubmitCategory = (values) => {
        this.props.categoryActions.postCategory(values.category_name);
        this.props.history.push("/category");
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.handleSubmitCategory)}>
                <Grid container spacing={16}>
                    <Grid item xs={12}>
                        <Field
                            name='category_name'
                            component={renderTextField}
                            label='Nom de la catégorie'
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