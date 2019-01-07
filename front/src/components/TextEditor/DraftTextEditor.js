import React from 'react';
import { Paper, withStyles, Grid, Typography, Divider, Button } from '@material-ui/core';
import { EditorState, Editor, RichUtils, convertToRaw } from 'draft-js';
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
        // color: "blue",
        // height: "10em",
        // width: "50em",
    }
});


class DraftTextEditor extends React.Component {

    constructor(props) {
        super(props);

        this.state = { editorState: EditorState.createEmpty() };

        this.focus = () => {
            this.refs.editor.focus()
        };

        this.onChange = this.onChange.bind(this);
        this.handleKeyCommand = this.handleKeyCommand.bind(this);
        this.toggleBlockType = this.toggleBlockType.bind(this);
        this.toggleInlineStyle = this.toggleInlineStyle.bind(this);
        this.submit = this.submit.bind(this);
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

    submit() {
        console.log("submit");
        console.log(JSON.stringify(convertToRaw(this.state.editorState.getCurrentContent())));
    }

    render() {
        const { classes } = this.props;
        return (
            <Grid container diretion="column" justify="center" alignItems="center" spacing={16}>
                <Grid item xs={10} >
                    
                    <Paper className={classes.custom} >
                        <BlockStyleControls
                        editorState={this.state.editorState}
                        onToggle={this.toggleBlockType}/>
                        <InlineStyleControls
                        editorState={this.state.editorState}
                        onToggle={this.toggleInlineStyle}
                        />
                        <Divider variant="middle"></Divider>
                    <div onClick={this.focus} style={{height:"10em"}}>
                        <Editor
                            editorState={this.state.editorState}
                            onChange={this.onChange}
                            handleKeyCommand={this.handleKeyCommand}
                            ref='editor'
                        />
                    </div>
                   </Paper>
                </Grid>
                <Grid item xs={10}>
                    <Button style={{padding:5}} onClick={this.submit} color="primary">Ok</Button>
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(DraftTextEditor);