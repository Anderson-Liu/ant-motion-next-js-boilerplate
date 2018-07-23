import React,{Component}  from 'react';
import QueueAnim from 'rc-queue-anim';
import BannerAnim from 'rc-banner-anim';
import Header from '../../components/Nav/index';
import css from "../../asserts/styles.less"

const { Element } = BannerAnim;

class Banner extends Component {


  render() {
    const { data } = this.props;
    const bannerChildren = data.map((item, i) => {
      const children = item.children.map((child, ii) => {
        const tag = child.tag || 'p';
        const childrenToRender =  child.children;
        return React.createElement(tag, {
          key: ii.toString(),
          className: child.className,
          style: child.style || {},
          href: child.href || null,
          src: child.src || null,
        }, childrenToRender);
      });
      return (
        <Element key={i.toString()}>
          <QueueAnim
            key="text"
            className={item.className}
            ease={['easeOutCubic', 'easeInQuad']}
            type={item.queueAnim || 'bottom'}
          >
            {children}
          </QueueAnim>
        </Element >);
    });
    return (
      <div className="banner page-wrapper" >
        <Header id="nav_0_0" key="nav_0_0" />,
        <div className="page">
          <div style={{ margin: "270px auto 40px"}} />
          <BannerAnim type="across" duration={550} ease="easeInOutQuint">
            {bannerChildren}
          </BannerAnim>
        </div>
      </div>
    );
  }
}

export default Banner;
