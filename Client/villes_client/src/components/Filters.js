import React, {Component} from 'react'
import {withStyles} from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Button, Divider } from '@material-ui/core';

class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      departements:[],
    };
    this.handleOrderChange = this.handleOrderChange.bind(this);
  }

  componentDidMount(){
    this.listOfDepatements()
    .then((data)=> {
      this.setState({departements: data})
    })
  }

  listOfDepatements =  () => {
    return  fetch('../../depatements_france.json').then(response => {
      return response.json()
    }).catch((err) => console.log(err))
  }


  handleOrderChange(event){
    this.setState({ order: event.target.value}, ()=> { this.props.handleOrderChange(event.target.value)});
  }

  render() {
    const {classes} = this.props
    return (
      <div className={classes.filters}>
        <FormControl variant="filled" className={classes.formControl}>
          <InputLabel >Trier</InputLabel>
          <Select
            value={this.props.order}
            onChange={this.props.handleOrderChange}
            className={classes.select}
          >
            <MenuItem value=""> <em>None</em> </MenuItem>
            <MenuItem value='ASC'>Ascendante </MenuItem>
            <MenuItem value='DESC'>Descendance </MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="filled" className={classes.formControl}>
          <InputLabel >Departement</InputLabel>
          <Select
            value={this.props.departement}
            onChange={this.props.handleDepartementChange}
            autoWidth
            className={classes.select}
          >
            <MenuItem value=""> <em>None</em> </MenuItem>
            {this.state.departements.map((dep) =>(
              <MenuItem value={dep.departmentCode}>{dep.departmentName} </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button color="primary" onClick={this.props.ApplyFilters}>Appliquer</Button>
        <Divider className={classes.select}/>
      </div>
    )
  }
}


const styles =  theme => ({
  filters:{
    backgroundColor: '#beedeb',
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(2),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(5),
  },
  select:{
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#078891',
  }

})


export default withStyles(styles)(Filters)

