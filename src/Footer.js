import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './fontface.css';

// For styling for all components
const styles = theme => ({
    root: {
      flexGrow: 1,
      backgroundColor: '#141414',
      padding: '20px 15px 20px',
        fontFamily: 'Encode Sans'
    },
    paper: {
      padding: theme.spacing.unit * 2,
      textAlign: 'center',
      color: '#fff',
      backgroundColor: '#141414'
    },
    footer: {
      height: 50,
      width: 900,
      maxWidth: 900,
      margin: '20px auto 0',
      backgroundColor: '#141414',
      padding: '0 4%'
    },
    links: {
      marginBottom: '1em'
    },
    linkwrapper: {
      width: 500,
      margin: '0 auto',
      textAlign: 'center'
    },
    anchor: {
      marginRight: 30,
      display: 'inline-block',
      verticalAlign: 'middle',
      color: 'grey',
      fontSize: 30
    },
    hover: {
      cursor: 'pointer'
    },
    away: {
      cursor: 'none'
    },
    copyright: {
      textAlign: 'center',
      color: 'grey'
    },
    brand: {
      fontWeight: 700,
      color: '#D6CAAB',
      marginLeft: 10,
      marginRight: 10
    }
});

class Footer extends React.Component {
  render(){
    const { classes } = this.props;

    return (
        <div className={classes.root}>
            <Grid container spacing={24}>
              <div className={classes.footer}>
                <div className={classes.copyright}>
                  <span>© 2019 <img src="kiihoii_beta_250px_white.png" width="60" style={{ position:'relative', top: 6, marginLeft: 15, marginRight: 15 }} /> (Powered by KDCA Youth).</span>
                </div>
              </div>
          </Grid>
        </div>
      );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
