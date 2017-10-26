import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface HeaderProps {

}

interface HeaderState {

}

export default class Header extends React.Component<HeaderProps, HeaderState> {

    constructor(props) {
        super(props);
    }

    public render() {
        return  <div id="header">

                    <div id="header-top">
                        <img src="/images/me.jpg" />
                        <h1>LEE DALE</h1>
                        <h3>SOFTWARE DEVELOPER</h3>
                    </div>
                </div>
    }
}