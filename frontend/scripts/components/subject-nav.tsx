import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface SubJectNavProps {

}

interface SubJectNavState {

}

export default class SubJectNav extends React.Component<SubJectNavProps, SubJectNavState> {

    constructor(props) {
        super(props);
    }

    public render() {
        return  <div id="latest-articles" className="col-md-10">
                    <div className="row">
                        <div className="col-md-4 col-sm-12">
                            <a href="#"><h1>#Technology</h1></a>
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <a href="#"><h1>#Drones</h1></a>
                        </div>
                    </div>
                </div>
    }
}