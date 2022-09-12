import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import anime from 'animejs';

import { Link } from '../Link';

class Component extends React.Component {
  static displayName = 'Brand';

  static propTypes = {
    theme: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    energy: PropTypes.object.isRequired,
    audio: PropTypes.object.isRequired,
    sounds: PropTypes.object.isRequired,
    className: PropTypes.any,
    link: PropTypes.string,
    hover: PropTypes.bool,
    stableTime: PropTypes.bool,
    onEnter: PropTypes.func,
    onExit: PropTypes.func,
    onLinkStart: PropTypes.func,
    onLinkEnd: PropTypes.func
  };

  static defaultProps = {
    link: '/'
  };

  constructor () {
    super(...arguments);

    const { energy, stableTime } = this.props;

    if (!stableTime) {
      energy.updateDuration({ enter: 820 });
    }
  }

  componentWillUnmount () {
    const paths = this.svgElement.querySelectorAll('path');
    anime.remove(paths);
  }

  enter () {
    const { energy, sounds, stableTime, onEnter } = this.props;
    const paths = this.svgElement.querySelectorAll('path');

    anime.set(this.svgElement, { opacity: 1 });

    sounds.logo.play();

    anime({
      targets: paths,
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'linear',
      delay: (path, index) => stableTime ? 0 : index * energy.duration.stagger,
      duration: path => stableTime ? energy.duration.enter : path.getTotalLength(),
      complete: () => {
        onEnter && onEnter();
      }
    });
  }

  exit () {
    const { energy, sounds, onExit } = this.props;
    const paths = this.svgElement.querySelectorAll('path');

    sounds.fade.play();

    anime({
      targets: this.svgElement,
      easing: 'easeInCubic',
      duration: energy.duration.exit,
      opacity: 0
    });
    anime({
      targets: paths,
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'linear',
      direction: 'reverse',
      duration: energy.duration.exit,
      complete: () => {
        anime.set(this.svgElement, { opacity: 0 });
        onExit && onExit();
      }
    });
  }

  render () {
    const {
      theme,
      classes,
      energy,
      audio,
      sounds,
      className,
      link,
      hover,
      stableTime,
      onEnter,
      onExit,
      onLinkStart,
      onLinkEnd,
      ...etc
    } = this.props;

    return (
      <h1 className={cx(classes.root, hover && classes.hover, className)} {...etc}>
        <Link
          className={classes.link}
          href={link}
          title='DevKraft logo'
          onLinkStart={onLinkStart}
          onLinkEnd={onLinkEnd}
        
        >
          <span className={classes.title}>DevKraft</span>
          <svg
            ref={ref => (this.svgElement = ref)}
            className={classes.svg}
            viewBox='0 0 1400 120'
            xmlns='http://www.w3.org/2000/svg'
            onMouseEnter={() => sounds.hover.play()
            }
          >
            <path className={classes.path}  d="M 93.75 125 L 0 125 L 0 0 L 156.25 0 L 125 31.25 L 31.25 31.25 L 31.25 93.75 L 78.125 93.75 L 156.25 15.625 L 156.25 62.5 L 93.75 125 Z M 295.898 125 L 170.898 125 L 170.898 31.25 L 202.148 0 L 327.148 0 L 327.148 31.25 L 202.148 31.25 L 202.148 93.75 L 327.148 93.75 L 295.898 125 Z M 559.57 125 L 528.32 125 L 528.32 0 L 559.57 0 L 559.57 78.125 L 637.695 0 L 684.57 0 L 559.57 125 Z M 1103.516 125 L 1072.266 125 L 1072.266 0 L 1228.516 0 L 1228.516 31.25 L 1103.516 31.25 L 1103.516 125 Z M 730.469 125 L 699.219 125 L 699.219 0 L 808.594 0 L 777.344 31.25 L 730.469 31.25 L 730.469 125 Z M 388.672 125 L 341.797 125 L 466.797 0 L 513.672 0 L 388.672 125 Z M 871.094 125 L 824.219 125 L 761.719 62.5 L 824.219 0 L 871.094 0 L 808.594 62.5 L 871.094 125 Z M 1057.617 125 L 1010.742 125 L 885.742 0 L 932.617 0 L 1057.617 125 Z M 1399.414 31.25 L 1243.164 31.25 L 1274.414 0 L 1399.414 0 L 1399.414 31.25 Z M 916.992 125 L 885.742 125 L 885.742 15.625 L 916.992 46.875 L 916.992 62.5 L 932.617 62.5 L 963.867 93.75 L 916.992 93.75 L 916.992 125 Z M 373.047 78.125 L 341.797 109.375 L 341.797 0 L 373.047 0 L 373.047 78.125 Z M 1336.914 125 L 1305.664 125 L 1305.664 46.875 L 1336.914 46.875 L 1336.914 125 Z M 684.57 125 L 637.695 125 L 606.445 93.75 L 629.883 70.313 L 684.57 125 Z M 1166.016 78.125 L 1119.141 78.125 L 1119.141 46.875 L 1197.266 46.875 L 1166.016 78.125 Z M 280.273 78.125 L 217.773 78.125 L 217.773 46.875 L 280.273 46.875 L 280.273 78.125 Z"/>
            {/* <path className={classes.path} d="M 50 50 L 0 50 L 0 12.5 L 12.5 0 L 62.5 0 L 62.5 12.5 L 12.5 12.5 L 12.5 37.5 L 62.5 37.5 L 50 50 Z M 43.75 31.25 L 18.75 31.25 L 18.75 18.75 L 43.75 18.75 L 43.75 31.25 Z" />
            <path className={classes.path} d="M 18.75 50 L 0 50 L 50 0 L 68.75 0 L 18.75 50 Z M 12.5 31.25 L 0 43.75 L 0 0 L 12.5 0 L 12.5 31.25 Z" />
            <path className={classes.path}  d="M 62.5 50 L 43.75 50 L 18.75 25 L 43.75 0 L 62.5 0 L 37.5 25 L 62.5 50 Z M 12.5 50 L 0 50 L 0 0 L 12.5 0 L 12.5 31.25 L 15.625 28.125 L 25 37.5 L 12.5 50 Z" />
            <path className={classes.path} d="M 12.5 50 L 0 50 L 0 0 L 43.75 0 L 31.25 12.5 L 12.5 12.5 L 12.5 50 Z M 68.75 50 L 50 50 L 25 25 L 50 0 L 68.75 0 L 43.75 25 L 68.75 50 Z" />
            <path className={classes.path} d="M 68.75 50 L 50 50 L 0 0 L 18.75 0 L 68.75 50 Z M 12.5 50 L 0 50 L 0 6.25 L 12.5 18.75 L 12.5 25 L 18.75 25 L 31.25 37.5 L 12.5 37.5 L 12.5 50 Z" />
            <path className={classes.path} d="M 12.5 50 L 0 50 L 0 0 L 62.5 0 L 62.5 12.5 L 12.5 12.5 L 12.5 50 Z M 37.5 31.25 L 18.75 31.25 L 18.75 18.75 L 50 18.75 L 37.5 31.25 Z"  />
            <path className={classes.path} d="M 62.5 12.5 L 0 12.5 L 12.5 0 L 62.5 0 L 62.5 12.5 Z M 37.5 50 L 25 50 L 25 18.75 L 37.5 18.75 L 37.5 50 Z" /> */}
            {/* <path className={classes.path} d='M953,89 L953,10 L1041,10 L1041,89 M961,46 L1033,46' />
            <path className={classes.path} d='M1126,10 L1068,10 L1068,81 L1181,81' />
            <path className={classes.path} d='M1141,10 L1400,10 M1199,18 L1199,89' /> */}
          </svg>
        </Link>
      </h1>
    );
  }
}

export { Component };
