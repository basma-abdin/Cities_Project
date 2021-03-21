import React, {Component} from 'react'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

import OpenWith from '@material-ui/icons/OpenWith';
import IconButton from '@material-ui/core/IconButton';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

import Typography from '@material-ui/core/Typography'
import {withStyles} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

import Details from "../components/Details";
import {get_ville} from '../helper/api_request'




class Ville extends Component {
  constructor(props) {
    super(props);
    this.handleCloseDialog = this.handleCloseDialog.bind(this);
    this.state = {
      ville  : {},
      show_dialog: false,
    }
  }


  retrieveVille(id) {
    get_ville(id)
      .then((response) => {
        this.setState({
          ville: response.data.ville,
        });
      })
      .catch((e) => {
        console.log(e);
      });
   }

  showDetails (){
    const {classes} = this.props
    return(
      <Dialog
        open={this.state.show_dialog}
        onClose={()=>  this.handleCloseDialog()}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent className={classes.dialogContetn}>
        <Button color="secondary" onClick={()=> {this.handleCloseDialog();}}>
          Fermer
        </Button>
          <DialogContentText id="alert-dialog-description">
            <Details ville = {this.state.ville} />
          </DialogContentText>
        </DialogContent>
      </Dialog>
    )
  }

  handleCloseDialog = () => {
    this.setState({show_dialog: !this.state.show_dialog})
  }
  handleOpenDialog = (id) => {
    this.retrieveVille(id);
    this.setState({show_dialog: !this.state.show_dialog})
  }


  render() {
    const {classes} = this.props
    const ville = this.props.ville;
    return (
      <div>
        <Card className={classes.card}>
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              {ville.ville_nom_reel}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Code Postal: {ville.ville_code_postal}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Departement: {ville.ville_departement}
            </Typography>
          </CardContent>
          <CardActions disableSpacing={true} className={classes.cardActions}>
            <IconButton aria-label="show more" className={classes.iconButton}
              onClick={()=> this.handleOpenDialog(ville.ville_id )}
            >
              <OpenWith />
            </IconButton>
          </CardActions>
        </Card>
        {this.showDetails()}
      </div>
    )
  }
}


const styles =  theme => ({
  card: {
    maxWidth:600,
    margin: 'auto',
    marginBottom: theme.spacing.unit*3,
    borderWidth: 2,
    borderColor: '#ff6347',
    backgroundColor: '#beedeb'
  },
  cardContent: {
    padding: `${theme.spacing.unit*2}px 0px`
  },
  cardActions:{
    justifyContent: 'right',
    padding: 0,
  },
  iconButton:{
    backgroundColor: '#078891',
  },
  dialogContetn:{
    backgroundColor: '#beedeb'
  }
})


export default withStyles(styles)(Ville)

