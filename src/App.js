import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import YoutubeBackground from 'react-youtube-background';
import Footer from './Footer';
import './fontface.css';

// For styling for all components
const styles = theme => ({
    root: {
      flexGrow: 1,
      backgroundColor: '#141414',
        fontFamily: 'Encode Sans'
    },
    ytbg: {
      color: '#fff'
    },
    promo: {
      height: '90vh',
      zIndex: 999
    },
    promocontainer: {
      position: 'relative',
      top: 200,
      zIndex: 999
    },
    imgbox: {
      width:500,
      paddingLeft: 45,
      margin: '0 auto'
    },
    brand: {
      width: '100%'
    },
    container: {
      width: '100%',
      height: '50%',
      backgroundColor: '#141414',
    },
    commentbox: {
      position: 'relative',
      top: 20
    },
    comment: {
      color: '#fff',
      textAlign: 'center',
      fontSize: '2.6rem'
    }
});

/* For whole promo page */
// linear-gradient(transparent, rgba(20, 20, 20));

class Promo extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <YoutubeBackground 
          videoId='RcwkDcSPkzs'
          aspectRatio='16:9'
          overlay='rgba(20, 20, 20, 0.85)'
        >
          <div className={classes.promo}>
            <div className={classes.promocontainer}>
              <div className={classes.imgbox}>
                <img className="brand" src="kiihoii_250px_white.png" width='450'/>
              </div>
              <div className={classes.commentbox}>
                <div className={classes.comment}>
                  Nantikan kemunculannya!
                </div>
              </div>
            </div>
          </div>
        </YoutubeBackground>
        <Footer />
      </div>
    );
  }
}

Promo.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Promo);
