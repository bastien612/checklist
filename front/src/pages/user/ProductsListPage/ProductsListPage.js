import React from 'react';
import { Grid, withStyles, Link, Hidden, Drawer } from '@material-ui/core';
import Header from "components/Layouts/Header";

const styles = theme => ({
    drawerPaper: {

    }
})

class ProductsListPage extends React.Component {

    render() {
        const { classes } = this.props;
        return (
            <Grid container direction="column" spacing={16}>
                <Grid item>
                    <Header />
                </Grid>
                <Grid item>
                    <Hidden smUp implementation="css">
                        <Drawer
                            container={this.props.container}
                            variant="temporary"
                            anchor='left'
                            open={true}
                            onClose={this.handleDrawerToggle}
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                        >
                            pouet
                        </Drawer>
                    </Hidden>
                </Grid>
                <Grid>
                    <Link to="/productList/create">Créer une liste de produits</Link>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styles)(ProductsListPage);