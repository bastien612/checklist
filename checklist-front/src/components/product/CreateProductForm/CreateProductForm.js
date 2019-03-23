import { Button, Grid } from '@material-ui/core';
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { withRouter } from 'react-router-dom';
import { renderTextField } from 'components/ReduxFormFieldRenderer';

class CreateProductForm extends React.Component {


    handleSubmitProduct = (values) => {
        this.props.productActions.postProduct(values.product_name);
        this.props.history.push("/product");
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.handleSubmitProduct)}>
                <Grid container spacing={16}>
                    <Grid item xs={12}>
                        <Field
                            name='product_name'
                            component={renderTextField}
                            label='Nom de la produit'
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Field
                            name='product_category'
                            component={renderTextField}
                            label='Catégorie du produit'
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
    form: 'createProduct'
})(CreateProductForm));