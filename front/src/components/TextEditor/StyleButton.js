import React from 'react';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
  RichEditorStyleButton: {
      color: "#999",
      cursor: "pointer",
      marginRight: "16px",
      padding: "2px 0",
      display: "inline-block",
  },
  RichEditorActiveButton: {
    color: "#5890ff",
    cursor: "pointer",
    marginRight: "16px",
    padding: "2px 0",
    display: "inline-block",
  }
});

class StyleButton extends React.Component {
    constructor(props) {
      super(props);

      this.onToggle = (e) => {
        e.preventDefault();
        this.props.onToggle(this.props.style);
      };
    }
  
    render() {
      const { classes } = this.props;

      let buttonClass = classes.RichEditorStyleButton;
      if (this.props.active) {
        buttonClass = classes.RichEditorActiveButton;
      }
  
      return (
        <span className={buttonClass} onClick={this.onToggle}>
          {this.props.label}
        </span>
      );
    }
  }

export default withStyles(styles)(StyleButton);