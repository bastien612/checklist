import React from 'react';
import { Paper, withStyles, Grid, Typography, Divider } from '@material-ui/core';
import { EditorState, Editor, RichUtils, CompositeDecorator } from 'draft-js';
import BlockStyleControls from './BlockStyleControls';
import InlineStyleControls from './InlineStyleControls';

const styles = theme => ({
    paper: {
        padding: theme.spacing.unit * 2,
        height: '100%',
        color: theme.palette.text.secondary,
    },
    hashtag: {
        color: "blue"
    },
    superFancyBlockquote: {
        color: "#999",
        fontFamily: "'Hoefler Text', Georgia, serif",
        fontStyle: "italic",
        textAlign: "center",
    },
    custom: {
        color: "blue",
    }
});

// function myBlockStyleFn(contentBlock) {
//     const type = contentBlock.getType();
//     console.log("type: " + type)
//     if (type === 'blockquote') {
//         //   return 'superFancyBlockquote';
//     }
// }

class DraftTextEditor extends React.Component {

    constructor(props) {
        super(props);

        this.state = { editorState: EditorState.createEmpty() };

        this.onChange = this.onChange.bind(this);
        this.handleKeyCommand = this.handleKeyCommand.bind(this);
        this.toggleBlockType = this.toggleBlockType.bind(this);
        this.toggleInlineStyle = this.toggleInlineStyle.bind(this);
    }
    
    onChange(editorState){
        return this.setState({ editorState });
    }

    handleKeyCommand(command, editorState) {
        const newState = RichUtils.handleKeyCommand(editorState, command)
        if (newState) {
            this.onChange(newState)
            return 'handled';
        }
        return 'not-handled'
    }

    toggleBlockType(blockType) {
        this.onChange(RichUtils.toggleBlockType(this.state.editorState, blockType));
    }

    toggleInlineStyle(inlineStyle){
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, inlineStyle));
    }

    render() {
        const { classes } = this.props;
        return (
            <Grid container diretion="column" justify="center" alignItems="center" spacing={16}>
                <Grid item xs={10} >
                    <Paper className={classes.blue} >
                        <Typography>Pouet</Typography>
                        <BlockStyleControls
                        editorState={this.state.editorState}
                        onToggle={this.toggleBlockType}/>
                        <InlineStyleControls
                        editorState={this.state.editorState}
                        onToggle={this.toggleInlineStyle}
                        />
                        <Divider variant="middle"></Divider>
                        <Editor
                            editorState={this.state.editorState}
                            onChange={this.onChange}
                            handleKeyCommand={this.handleKeyCommand}
                        />
                    </Paper>
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(DraftTextEditor);