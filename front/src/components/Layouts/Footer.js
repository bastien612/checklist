import React from 'react';
import { Tabs, Tab, Paper } from '@material-ui/core';

function Footer(props) {
    const { classes } = props;
    return (
        <Paper>
        <Tabs
          value={1}
        //   onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
        </Tabs>
      </Paper>
    );
}

export default Footer;