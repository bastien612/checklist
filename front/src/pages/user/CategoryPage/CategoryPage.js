import React from 'react';
import { Typography, withStyles, Grid } from '@material-ui/core';
import Header from "components/Layouts/Header"
import Footer from "components/Layouts/Footer";

const styles = theme => ({

})

class CategoryPage extends React.Component {

    render() {
        return (
            <Grid container direction="column" spacing={16}>
                <Grid item>
                    <Header />
                </Grid>
                <Grid item>
                    <Typography>
                        Hello Category !
                    </Typography>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styles)(CategoryPage);