import * as $ from 'jquery';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import MainNav from './components/main-nav';
import Footer from './components/footer';
import Articles from './components/articles';
import SubjectNav from './components/subject-nav';

export default class App extends React.Component<void, void> {

    constructor(props) {
        super(props);
    }

    public render() {
        return  <div className="container">
                    <div className="row">
                        <div className="col-md-2">
                            <MainNav />
                        </div>
                        <div id="content" className="col-md-10">
                            <div className="row">
                                <SubjectNav />
                                <Articles />
                                <div className="col-md-2">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <Footer />
                        </div>
                    </div>
                </div>
    }
}

$(document).ready(function() {
    ReactDOM.render(<App />, document.getElementById("main-container"));
});