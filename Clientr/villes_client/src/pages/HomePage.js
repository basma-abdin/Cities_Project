import React, { Component } from "react";
import Pagination from "@material-ui/lab/Pagination";
import GridListTile from '@material-ui/core/GridListTile';
import GridList from '@material-ui/core/GridList';
import { withStyles } from '@material-ui/core/styles'
import { Divider } from "@material-ui/core";

import {get_villes} from '../helper/api_request'
import Ville from "../components/Ville";
import Filters from "../components/Filters";

class HomePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      villes: [],
      order: '',
      departement:'',
      page: 1,
      count: 0,
    };

    this.handlePageChange = this.handlePageChange.bind(this);
    this.handleOrderChange = this.handleOrderChange.bind(this);
    this.handleDepartementChange = this.handleDepartementChange.bind(this);
    this.applyFilters = this.applyFilters.bind(this);
    this.pageSizes = [3, 6, 9];
  }

  componentDidMount = () => {
    this.retrieveVilles();
  }

  buildRequestParams( page =1, departement = '', order='') {
    let params = {};

    if (departement) {
      params["departement"] = departement;
    }

    if (order) {
      params["sort"] = order;
    }

    if (page) {
      params["page"] = page - 1;
    }

    return params;
  }

  retrieveVilles(withFilter=false) {
    const {page, order, departement} = this.state
    var params = withFilter?
      this.buildRequestParams(1,departement,order)
      :this.buildRequestParams(page);

    get_villes(params)
      .then((response) => {
        const { villes, totalPages } = response.data;

        this.setState({
          villes: villes,
          count: totalPages,
          ville : villes[0]
        });

      })
      .catch((e) => {
        console.log(e);
      });
  }

  handlePageChange(event, value) {
    this.setState(
      { page: value, },
      () => { this.retrieveVilles(); }
    );
  }

  handleOrderChange = (e) => {
    this.setState({ order: e.target.value });
  };
  handleDepartementChange = (e) => {
    this.setState({ departement: e.target.value });
  };

  applyFilters(){
    this.retrieveVilles(true)
  }

  render() {
    const {
      villes,
      page,
      count,
    } = this.state;

    const {classes} = this.props

    return (
      <div>
        <h1>Villes de france</h1>
        <Filters
          order={this.state.order}  handleOrderChange={this.handleOrderChange}
          departement={this.state.departement}handleDepartementChange={this.handleDepartementChange}
          ApplyFilters={this.applyFilters}
        />

        <Pagination
          className={classes.pagination}
          count={count}
          page={page}
          siblingCount={1}
          boundaryCount={1}
          shape="round"
          onChange={this.handlePageChange}
          variant="outlined" color="primary"
          size="large"
        />
        <Divider/>

        <GridList className={classes.root} cols={4}>
          {villes.map((ville) => (
            <GridListTile key={ville.id} >
                <Ville ville={ville} key={ville.id}   />
            </GridListTile>
          ))}
        </GridList>
     </div>
    )
  }
}

const styles = theme => ({
  pagination: {
    backgroundColor: '#beedeb',
    marginBottom: 20,
    color: 'white'
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
})

export default withStyles(styles)(HomePage)


