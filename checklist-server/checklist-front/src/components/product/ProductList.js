import { Button, Grid, Paper, Table, Typography, ListItemText, ListItem, List, TableRow, TableCell, TableBody, TableHead } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import React from 'react';


const styles = {
}

class ProductList extends React.Component {

    render() {

        return (
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Produit</TableCell>
                        <TableCell>Categorie</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>

                </TableBody>

            </Table>
        )
    }
}

export default ProductList;