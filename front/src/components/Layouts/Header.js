import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link, NavLink } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Opacity from '@material-ui/icons/Opacity';
import { Grid, Menu, MenuItem, Button } from '@material-ui/core';

const styles = {
    grow: {
        flexGrow: 1,
    },
    navlinks: {
        textDecoration: 'none',

    },
    navTitles: {
        color: "white",
    },
    activeTab: {
        textDecoration: "line-through",
        fontWeight: 'bold',
        color: 'red'
    }

}

class Header extends React.Component {
    state = {
        categoryMenuAnchor: null
    }

    handleCategoryMenuOpen = event => {
        this.setState({ categoryMenuAnchor: event.currentTarget });
    };

    handleMenuClose = () => {
        this.setState({ categoryMenuAnchor: null });
    };

    render() {
        const { classes } = this.props;
        const { categoryMenuAnchor } = this.state;
        const isMenuOpen = Boolean(categoryMenuAnchor);

        const categoryMenu =
            <Menu
                anchorEl={categoryMenuAnchor}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                open={isMenuOpen}
                onClose={this.handleMenuClose}
                getContentAnchorEl={null}>
                <Link to="/category" className={classes.navlinks}>
                    <MenuItem>Lister</MenuItem>
                </Link>
                <Link to="/createCategory" className={classes.navlinks}>
                    <MenuItem>Créer</MenuItem>
                </Link>
                <MenuItem>Modifier</MenuItem>
            </Menu >

        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <Grid container spacing={16}>
                            <Grid item xs={2}>
                                <NavLink to="/home" activeStyle={{ textDecoration: 'underline', color: 'white' }} className={classes.navlinks}>
                                    <Typography variant="h5" className={classes.navTitles}>Checklist</Typography>
                                </NavLink >
                            </Grid>
                            <Grid item xs={10}>
                                <Grid container justify="flex-end" spacing={16}>
                                    <Grid item>
                                        <Typography onClick={this.handleCategoryMenuOpen} variant="h5" className={classes.navTitles} >Category</Typography>
                                    </Grid>
                                    <Grid item>
                                        <NavLink to="/config" activeStyle={{ textDecoration: 'underline', color: 'white' }} className={classes.navlinks}>
                                            <Typography variant="h5" className={classes.navTitles}>Configuration</Typography>
                                        </NavLink>
                                    </Grid>
                                    <Grid item>
                                        <NavLink to="/calendar" activeStyle={{ textDecoration: 'underline', color: 'white' }} className={classes.navlinks}>
                                            <Typography variant="h5" className={classes.navTitles} >Calendrier</Typography>
                                        </NavLink>
                                    </Grid>
                                    <Grid item>
                                        <NavLink to="/map" activeStyle={{ textDecoration: 'underline', color: 'white' }} className={classes.navlinks}>
                                            <Typography variant="h5" className={classes.navTitles} >Carte</Typography>
                                        </NavLink>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
                {categoryMenu}
            </div >
        );
    }
}


export default withStyles(styles)(Header)