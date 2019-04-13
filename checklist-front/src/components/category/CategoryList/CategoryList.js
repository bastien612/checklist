import { Button, Grid, Paper, Typography, ListItemText, ListItem, List } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import React from 'react';


const styles = {
    "backgroundColor": "lightblue"
}

class CategoryList extends React.Component {

    componentDidMount = () => {
        this.props.categoryActions.fetchCategories();
    }

    render() {
        const {
            categories,
            categoryActions
        } = this.props;
        return (
            <Paper>
                <Grid container>
                    <Grid item xs={12}>
                        <Typography variant="h3" align='center' gutterBottom>
                            Categories
                        </Typography>
                    </Grid>


                    <Grid item xs={12} >
                        <List>
                            {categories.map(category => {
                                return (
                                    <ListItem key={category.id}>
                                        <ListItemText>
                                            {category.name}
                                        </ListItemText>
                                    </ListItem>
                                )
                            })}
                        </List>
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" color="primary" onClick={categoryActions.fetchCategories}>Fetch</Button>
                    </Grid>
                </Grid>
            </Paper>


        );
    }
}

export default (withStyles(styles)(CategoryList));