import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '../tools/withStyles';
import { Link } from '../components/Link';
import { Main } from '../components/Main';
import { Text } from '../components/Text';
import { Fader } from '../components/Fader';
import { Secuence } from '../components/Secuence';
import joshMullisImageURL from '../images/crowdshot.jpg';

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
              <h1><Text>About</Text></h1>
            </header>
            <p><Text>DevKraft is a community group of students interested in technical advancement , along with extra curricular activities. It is a place for students to connect with others on campus interested in Coding ,  Developing , Cultural Activities , learning through hands on workshops , trainings and project building activities.</Text></p>
            <Fader>
              <img src={joshMullisImageURL} alt="Josh Mullis's photo" />
            </Fader>
            <p><Text>Team DevKraft presents "DevTalks", a series of events where we invite guests from different domains for their guidance and insights on the industry.
</Text></p>

            <Link
              href='https://fanlink.to/circalgorithm'
              target='circalgorithm'
              style={{ display: 'block' }}
            >
              <Fader style={{ display: 'block' }}>
                <img
                  src='/images/team.jpg'
                  alt='Soul Extract Circadian Algorithm album'
                  style={{ width: '100%', maxWidth: '400px' }}
                />
              </Fader>
            </Link>
            <Fader>
            <p><Text>Our first guest was Ishan Sharma, a popular internet personality with more than half a million subscribers on YouTube, a digital marketer, Freelancer and an inspiration to many college students. He has been sharing his expertise and guiding students through his Internet presence.
We are inviting the luminary Mr. Sandeep Jain, founder at GeeksforGeeks. He is an alumni of Indian Institute of Technology Roorkee who has been inspiring thousands of students from all around India. His platform GeeksforGeeks is well recognized among all the engineering students throughout all colleges in India. GeeksforGeeks has created a community of 40 Million+ 'Geeks' from across the world, 1,00,000+ Contributors, and 10,000+ Campus Ambassadors from institutions across the country.</Text></p>

              {/* <p style={{ margin: 0 }}>Source: <Link href='https://www.fixtonline.com/label/artists/soul-extract' target='about'>fixtonline.com/label/artists/soul-extract</Link>.</p> */}
            </Fader>
          </Secuence>
        </article>
      </Main>
    );
  }
}

export default withStyles(styles)(About);
