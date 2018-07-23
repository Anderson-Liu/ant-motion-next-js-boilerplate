import { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import { format } from 'url'
import { exampleData, data } from '../models/data';
import React from "react";
import QueueAnim from 'rc-queue-anim';
import BannerAnim from 'rc-banner-anim';
import Header from '../components/Nav/index';
const { Element } = BannerAnim;

export default class Article extends Component {
    static async getInitialProps ({ req, query, pathname, isVirtualCall }) {
        const url = format({ pathname, query })

        // if we're not running server side
        // get the props from sessionStorage using the pathname + query as key
        // if we got something return it as an object
        if (!req) {
            const props = window.sessionStorage.getItem(url)
            if (props) {
                return JSON.parse(props)
            }
        }

        // fetch data as usual
        const responses = await Promise.all([
            fetch(`https://jsonplaceholder.typicode.com/posts/1`),
            fetch(`https://jsonplaceholder.typicode.com/posts/1/comments`)
        ])

        const [article, comments] = await Promise.all(
            responses.map(response => response.json())
        )

        const user = await fetch(
            `https://jsonplaceholder.typicode.com/users/${article.userId}`
        ).then(response => response.json())

        const props = { article, comments, user, faq: exampleData }

        // if the method is being called by our Link component
        // save props on sessionStorage using the full url (pathname + query)
        // as key and the serialized props as value
        if (isVirtualCall) {
            window.sessionStorage.setItem(url, JSON.stringify(props))
        }

        return props
    }

    render () {
        const { article, comments, user, faq } = this.props
        const bannerChildren = faq.map((item, i) => {
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
                <Header id="nav_0_0" key="nav_0_0" />
                <link rel="stylesheet" href="/_next/static/style.css" />
                <div className="page">
                    <div style={{ margin: "270px auto 40px"}} />
                    <BannerAnim type="across" duration={550} ease="easeInOutQuint">
                        {
                            bannerChildren
                        }
                    </BannerAnim>
                </div>
            </div>
        )
    }
}
