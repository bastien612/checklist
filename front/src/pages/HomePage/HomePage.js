import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from'@material-ui/core/CardContent';
import { CardHeader, Typography, Drawer, MuiThemeProvider, Paper, Grid } from '@material-ui/core';
import { getNotes } from 'services/NotesService';

function HomePage(props) {
    const notes = getNotes();
    const cardList = notes.map(note => 
        <Grid item>
            <Card key={note.id}>
                <CardHeader></CardHeader>
                <CardContent>
                    <Typography>{note.title}</Typography>
                    <Typography>{note.content}</Typography>
                </CardContent>
            </Card>
        </Grid>
        );

    return (
        <React.Fragment>
            {/* <Drawer
            anchor='left'
            variant='temporary'
            open={true}
            ModalProps={{
                keepMounted: true,
            }}>
                {cardList}
                
            </Drawer>
             */}
             <Grid container xs={3}>
                 {cardList}
             </Grid>
            
            <Paper>
                Pouet
            </Paper>
        </React.Fragment>
    )
}

export default HomePage;