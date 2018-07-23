import React from 'react';
import PropTypes from 'prop-types';
import TweenOne from 'rc-tween-one';
import { Menu } from 'antd';

import Link, { prefetch } from '../../components/Link/index';

const Item = Menu.Item;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneOpen: false,
    };
  }

  phoneClick = () => {
    this.setState({
      phoneOpen: !this.state.phoneOpen,
    });
  }

  render() {
    const props = { ...this.props };
    const isMobile = props.isMobile;
    delete props.isMobile;
    const navData = { menu1: 'Index', menu2: 'Article_1', menu3: 'Article_2', menu4: 'Article_3' };
    const linkList = ['0', '1', "2", "3"];
    const navChildren = Object.keys(navData)
      .map((key, i) => (<Item key={i}>
          <Link href={`/article?id=${linkList[i]}`} prefetch withData>
              <a>{`Article ${linkList[i]}` } </a>
          </Link>
      </Item>));
    return (<TweenOne
      component="header"
      animation={{ opacity: 0, type: 'from' }}
      {...props}
    >
      <TweenOne
        className={`${this.props.className}-logo`}
        animation={{ x: -30, type: 'from', ease: 'easeOutQuad' }}
        id={`${this.props.id}-logo`}
      >
        <a href='/'>
          <img src="/static/icon.jpg" style={{ width: '27%', margin: '68px 50px'}} />
        </a>
      </TweenOne>
      {isMobile ? (<div
        className={`${this.props.className}-phone-nav${this.state.phoneOpen ? ' open' : ''}`}
        id={`${this.props.id}-menu`}
      >
        <div
          className={`${this.props.className}-phone-nav-bar`}
          onClick={() => {
            this.phoneClick();
          }}
        >
          <em />
          <em />
          <em />
        </div>
        <div
          className={`${this.props.className}-phone-nav-text`}
        >
          <Menu
            defaultSelectedKeys={['0']}
            mode="inline"
          >
            {navChildren}
          </Menu>
        </div>
      </div>) : (<TweenOne
        className={`${this.props.className}-nav`}
        animation={{ x: 30, type: 'from', ease: 'easeOutQuad' }}
      >
        <Menu
          mode="horizontal"
          id={`${this.props.id}-menu`}
        >
          {navChildren}
        </Menu>
      </TweenOne>)}
    </TweenOne>);
  }
}

Header.propTypes = {
  className: PropTypes.string,
  dataSource: PropTypes.object,
  id: PropTypes.string,
};

Header.defaultProps = {
  className: 'header0',
};

export default Header;
