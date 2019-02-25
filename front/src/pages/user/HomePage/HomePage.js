import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { CardHeader, Typography, Grid, withStyles } from '@material-ui/core';
import Header from "components/Layouts/Header"
import Footer from "components/Layouts/Footer";
import DraftTextEditor from "components/TextEditor/DraftTextEditor"

const styles = theme => ({
    // noteCard : {
    //     padding:'10 10 10 10',
    //     display:'flex',
    //     flexWrap:'wrap',
    //     justifyContent: 'space-around',
    //     overflow: 'hidden'
    // }
})

class HomePage extends React.Component {

    handleSubmit() {
        console.log("submit");
    }

    render() {
        // const classes = this.props;


        return (
            <Grid container direction="column" spacing={16}>
                <Grid item>
                    <Header />
                </Grid>
                <Grid item >
                    <Grid container direction="row" spacing={8}>
                        <Grid item xs={3} >
                            <Grid container direction="column" spacing={8}>
                            </Grid>
                        </Grid>

                        <Grid item xs={9}>
                            <DraftTextEditor />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Footer />
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styles)(HomePage);