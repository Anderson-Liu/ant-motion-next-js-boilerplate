import React from 'react';
import DocumentTitle from 'react-document-title';
import { enquireScreen } from 'enquire-js';
import { format } from 'url';
// import fetch from 'isomorphic-unfetch';

import Banner from '../components/Banner';
import { exampleData } from '../models/data';
import Footer from '../components/Footer/index';



let isMobile = false;
enquireScreen((b) => {
    isMobile = b;
});


class Example extends React.PureComponent {
    state = {
        isMobile,
        showShadow: false,
    };

    static async getInitialProps ({ req, query, pathname, isVirtualCall }) {
        const url = format({ pathname, query })

        // if we're not running server side
        // get the props from sessionStorage using the pathname + query as key
        // if we got something return it as an object
        if (!req) {
            const props = window.sessionStorage.getItem(url);
            if (props) {
                return JSON.parse(props)
            }
        }

        // we can also fetch data from server
        // const user = await fetch(
        //     `https://jsonplaceholder.typicode.com/users/${article.userId}`
        // ).then(response => response.json())

        const props = { data: exampleData };

        // if the method is being called by our Link component
        // save props on sessionStorage using the full url (pathname + query)
        // as key and the serialized props as value
        if (isVirtualCall) {
            window.sessionStorage.setItem(url, JSON.stringify(props))
        }

        return props
    }

    componentDidMount() {
        enquireScreen((b) => {
            this.setState({
                isMobile: !!b,
            });
        });
    }
    navToShadow = (e) => {
        this.setState({ showShadow: e.mode === 'leave' });
    }
    render() {
        return (
            [
                <link rel="stylesheet" href="/_next/static/style.css" />,
                <Banner key="banner" isMobile={this.state.isMobile} navToShadow={this.navToShadow} data={this.props.data} />,
                <Footer key="footer" />,
                <DocumentTitle title="Example" key="title" />,
            ]
        );
    }
}
export default Example;
