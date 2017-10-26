import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Header from './header';

interface MainNavProps {

}

interface MainNavState {

}

export default class MainNav extends React.Component<MainNavProps, MainNavState> {

    constructor(props) {
        super(props);
    }

    public render() {
        return  <div id="main-nav">
                    <Header />
                    <p>Thanks for visiting my site. I am an independent software developer that mainly focuses on technical design and development of solutions primarily using Microsoft technologies such as the .NET Framework, Office 365 and SharePoint. 
                        I also do alot of work with JavaScript frameworks such as React.js, Knockout, Gulp, jQuery and many more.
                    </p> 
                    <div id="social">
                        <img src="/images/facebook.jpg" />
                        <img src="/images/twitter.jpg" />
                        <img src="/images/youtube.jpg" />
                        <img src="/images/google.jpg" />
                    </div>
                </div>
    }
}