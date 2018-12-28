import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
    grow: {
        flexGrow: 1,
    }
}

function Header(props) {
    // const { classes } = props;
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h5" color="inherit" >
                        Checklist
                    </Typography>
                </Toolbar>
            </AppBar>
            {/* <AppBar color='primary'>
                <Toolbar>
                    <IconButton color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" className={classes.grow}> Checklist </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar> */}
        </div>
    );
}


export default withStyles(styles)(Header)