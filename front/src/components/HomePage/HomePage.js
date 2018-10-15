import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from'@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';


function HomePage(props) {


    return (
        <div>
            <Paper>
                <Typography variant="h5" component="h3">
                    pouet
                </Typography>
                <Typography component="p">
                    Paper can be used to build surface or other elements for your application.
                </Typography>
            </Paper>
            {/* <Card>
                <CardContent>
                    <Typography variant='h3'>Pouet</Typography>
                </CardContent>
            </Card> */}
        </div>
    );
}

export default HomePage;