import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {useLocation} from "react-router";

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

function createData(name,type1,type2) {
    return { name, type1,type2};
}

const rows = [
    createData('Null', "", ""),
    createData('Null', "", ""),
    createData('Null', "", ""),
    createData('Null', "", ""),
    createData('Null', "", ""),
    createData('Null', "", ""),
];

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

export default function CustomizedTables() {
    const classes = useStyles();
    let location=useLocation();
    console.log(location.state.teamInfo.teamName);
    console.log(location.state.teamInfo.team);
    let team=location.state.teamInfo.team;
    const rows=[
        createData(team.pokemon1.name,team.pokemon1.type1,team.pokemon1.type2),
        createData(team.pokemon2.name,team.pokemon2.type1,team.pokemon2.type2),
        createData(team.pokemon3.name,team.pokemon3.type1,team.pokemon3.type2),
        createData(team.pokemon4.name,team.pokemon4.type1,team.pokemon4.type2),
        createData(team.pokemon5.name,team.pokemon5.type1,team.pokemon5.type2),
        createData(team.pokemon6.name,team.pokemon6.type1,team.pokemon6.type2),
    ]
    return (
        <div>
        <h1>TeamName:{location.state.teamInfo.teamName}</h1>
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>name</StyledTableCell>
                        <StyledTableCell align="right">type1</StyledTableCell>
                        <StyledTableCell align="right">type2</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row">
                                {row.name}
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.type1}</StyledTableCell>
                            <StyledTableCell align="right">{row.type2}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        </div>
    );
}