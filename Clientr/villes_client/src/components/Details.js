import React, {Component} from 'react'
import {withStyles} from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ville: {},
    };
  }

  render() {
    const {classes} = this.props
    const ville = this.props.ville
    return (
      <div>
        <TableContainer component={Paper} className={classes.tableContainer}>
          <Table >
            <TableBody>
              {Object.entries(ville).map(([key,value]) => (
                <TableRow key={key}>
                  <TableCell component="th" scope="row">
                    {key}
                  </TableCell>
                  <TableCell align="right">{value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table >
      </TableContainer>
    </div>

    )
  }
}


const styles =  theme => ({
  tableContainer: {
    marginTop: 20,
  },

})


export default withStyles(styles)(Details)

