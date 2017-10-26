import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface ArticlesProps {

}

interface ArticlesState {

}

export default class Articles extends React.Component<ArticlesProps, ArticlesState> {

    constructor(props) {
        super(props);
    }

    public render() {
        return  <div id="latest-articles" className="col-md-10">
                    <div id="search" className="input-group add-on">
                        <input className="form-control" placeholder="Search articles" name="srch-term" id="srch-term" type="text" />
                        <div className="input-group-btn">
                            <button className="btn btn-default" type="submit"><i className="glyphicon glyphicon-search"></i></button>
                        </div>
                    </div>
                    <div id="main-tags" className="row">
                        <div className="col-md-2 col-sm-6">
                            <a href="#">
                            <img src="/images/sharepoint-logo.png" />
                            <h3>SharePoint</h3>
                            </a>
                        </div>
                        <div className="col-md-2 col-sm-6">
                            <a href="#">
                            <img src="/images/office-365-logo.png" />
                            <h3>Office 365</h3>
                            </a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 col-sm-12">
                            <h3>Article</h3>
                            <p>Article text.</p>
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <h3>Article</h3>
                            <p>Article text.</p>
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <h3>Article</h3>
                            <p>Article text.</p>
                        </div>
                    </div>
                </div>
    }
}