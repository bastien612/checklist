import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { checkPropTypes } from 'prop-types';

const styles = {
    grow: {
        flexGrow: 1,
    }
}

function Header(props) {
    const { classes } = props;
    return (
        <div>
            <h1>Header</h1>
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