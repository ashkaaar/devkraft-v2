import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '../tools/withStyles';
import { Link } from '../components/Link';
import { Main } from '../components/Main';
import { Text } from '../components/Text';
import { Fader } from '../components/Fader';
import { Secuence } from '../components/Secuence';
import joshMullisImageURL from '../images/banner_max.jpg';

const styles = theme => ({
  root: {}
});

class About extends React.Component {
  static propTypes = {
    classes: PropTypes.object
  };

  render () {
    const { classes } = this.props;

    return (
      <Main className={classes.root}>
        <article>
          <Secuence stagger>
            <header>
              <h1><Text>Become a Member</Text></h1>
            </header>
            <p><Text></Text></p>
            <Fader>
              <img src={joshMullisImageURL} alt="Josh Mullis's photo" />
            </Fader>
            <p><Text>Membership forms will be available soon...</Text></p>
            <p><Text>Make sure to follow DevKraft on all social media.</Text></p>
            {/* <Link
              href='https://fanlink.to/circalgorithm'
              target='circalgorithm'
              style={{ display: 'block' }}
            >
              <Fader style={{ display: 'block' }}>
                <img
                  src='/images/circadian-algorithm.jpg'
                  alt='Soul Extract Circadian Algorithm album'
                  style={{ width: '100%', maxWidth: '400px' }}
                />
              </Fader>
            </Link> */}
            {/* <Fader>
              <p>This analytical approach to Soul Extract began to take shape in 2013, and after years spent synthesizing the sounds of metal, electronic, and orchestral music, the artist unleashed his fiery debut album, <em>Circadian Algorithm</em>. Loaded wall-to-wall with emotive vocals and explosive instrumental sections, the album has laid the foundation for a developing career with an upward trajectory.</p>
              <p>Mullis’ passion for music began at a young age, and he has traditionally pulled from deeply personal events for his creative stimulus. Finding escape from a family struggles by picking up a guitar as a teenager, Mullis discovered those early creative efforts were able to carry him through unpredictable times. As an adult, a motivating force for his music rests within humanitarian endeavors, as Mullis donates proceeds from Soul Extract to New Day Foster Home (<Link href='http://www.newdayfosterhome.com' target='newdayfosterhome'>www.newdayfosterhome.com</Link>), a charity that supported the health of his adopted daughter at an early age.</p>
              <p>For Mullis, music is an indescribable force capable of sparking intense emotion, and this force is the essence of an artist in its purest form. As the project name suggests, Soul Extract is Josh Mullis’ unaltered expression of himself, and his passionate approach to songwriting shines through on every track he produces.</p>
              <p style={{ margin: 0 }}>Source: <Link href='https://www.fixtonline.com/label/artists/soul-extract' target='about'>fixtonline.com/label/artists/soul-extract</Link>.</p>
            </Fader> */}
          </Secuence>
        </article>
      </Main>
    );
  }
}

export default withStyles(styles)(About);
