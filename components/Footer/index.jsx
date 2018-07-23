import React from 'react';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

class Footer extends React.Component {

  static defaultProps = {
    className: 'footer0',
  };

  render() {
    const props = { ...this.props };
    delete props.isMobile;
    return (<OverPack
      {...props}
      playScale={0.05}
    >
      <TweenOne
        animation={{ y: '+=30', opacity: 0, type: 'from' }}
        key="footer"
      >
        <span id={`${props.id}-content`}>
          Copyright © 2018 Example. All Rights Reserved
        </span>
      </TweenOne>
    </OverPack>);
  }
}

export default Footer;
