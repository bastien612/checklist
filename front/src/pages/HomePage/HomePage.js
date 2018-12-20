import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from'@material-ui/core/CardContent';
import { CardHeader, Typography, Drawer, MuiThemeProvider, TextField, Paper, Grid } from '@material-ui/core';
import { getNotes } from 'services/NotesService';
import Header from "components/Layouts/Header"
import Footer from "components/Layouts/Footer";


class HomePage extends React.Component {

    handleSubmit() {
        console.log("submit");
    }

    render(props) {

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
                <Header/>
                <Grid container xs={12}>
                    <Grid item xs={3}>
                        {cardList}
                    </Grid>
                    
                    <Grid item xs={9}>
                        <Paper>
                            <form onSubmit={this.handleSubmit}>
                                <label>Ma Liste :</label>
                                <input type="text"></input> 
                            </form>
                            <form>
                                <TextField
                                id="MaNote"
                                label="TestNote"
                                defaultValue="pouet"
                                />
                            </form>
                            
                            Pouet
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam libero quam, eleifend eu elementum at, lobortis at massa. Praesent massa nibh, eleifend vel est sed, molestie gravida odio. Aliquam consequat, mi ut pretium maximus, lectus lorem vehicula ex, interdum convallis dolor nunc at erat. Maecenas pretium malesuada mattis. Pellentesque sagittis nisl eu nisl lacinia hendrerit. Nunc sed ipsum ut lorem fermentum scelerisque. In placerat interdum sapien ut commodo. Etiam fringilla augue nec mi sodales, tempus aliquam tortor dictum. Aenean pellentesque dui ac dui aliquet, nec viverra erat dictum. Maecenas at commodo mi, id dictum neque. Aliquam erat volutpat. Nullam varius, mi quis tempor interdum, urna purus aliquam justo, sed efficitur lectus velit eget leo. Morbi finibus malesuada ante at sollicitudin. Etiam in lorem tristique, ultrices massa non, euismod leo.

                            Donec non nibh vestibulum, aliquam nisi non, fermentum est. Suspendisse scelerisque felis erat, sed dapibus dui gravida vel. Curabitur ornare sit amet ante eget porttitor. Donec auctor enim ut erat dapibus, quis scelerisque ex porttitor. Sed consequat, tortor quis viverra cursus, turpis ipsum accumsan elit, nec dictum mi mi eu neque. Praesent tincidunt a eros sit amet varius. Vestibulum nec commodo est. Mauris gravida enim arcu, eu fringilla tellus dapibus eu. Curabitur blandit tincidunt volutpat. Proin et massa orci.

                            Quisque porttitor ipsum nec sem commodo egestas. Maecenas eu lectus pellentesque, scelerisque turpis eu, tempor ex. Nam bibendum tortor vel ligula fringilla efficitur. Duis suscipit tempor nulla, et euismod mauris efficitur sit amet. Cras egestas condimentum justo lacinia molestie. Quisque venenatis euismod volutpat. In faucibus vulputate sem, at lobortis turpis posuere nec. Quisque quis tristique lectus. Donec mollis mi sed mi mattis, vel auctor ante imperdiet. Vestibulum laoreet odio nunc, accumsan pellentesque erat finibus sit amet. Nulla euismod sodales nunc, a hendrerit justo luctus et. Morbi interdum diam non risus viverra sagittis. Suspendisse mattis, libero non tristique fringilla, odio libero ultricies nulla, sagittis mollis mauris nulla sed eros. Vivamus bibendum justo et quam sagittis pulvinar. Nam sit amet dolor sem. Etiam et finibus orci.
                        </Paper>
                    </Grid>
                </Grid>
                <Footer/>
            </React.Fragment>
        )
    }
}

export default HomePage;