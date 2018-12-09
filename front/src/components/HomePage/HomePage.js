import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from'@material-ui/core/CardContent';
import { CardHeader, Typography } from '@material-ui/core';
import { getNotes } from 'services/NotesService';

function HomePage(props) {
    const notes = getNotes();
    const cardList = notes.map(note => 
        <Card key={note.id}>
            <CardHeader></CardHeader>
            <CardContent>
                <Typography>{note.title}</Typography>
                <Typography>{note.content}</Typography>
            </CardContent>
        </Card>
        );

    return (
        <React.Fragment>
            {cardList}
        </React.Fragment>
        
    )
}

export default HomePage;