import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface FooterProps {

}

interface FooterState {

}

export default class Footer extends React.Component<FooterProps, FooterState> {

    constructor(props) {
        super(props);
    }

    public render() {
        return  <div id="footer">
                    <div id="logos">
                        <img src="/images/bcslogo.jpg" />
                        <img src="/images/certificazionemcsd.png" />
                        <img src="/images/MCAD-NET-logo-BW.jpg" />
                        <img src="/images/MCSA-WebApps-logo-Blk.jpg" />
                        <img src="/images/MCTS-ShareP10Config-logo-BW.jpg" />
                        <img src="/images/MCTS-MSOSPSvrConf-logo-BW.jpg" />
                        <img src="/images/Special_ProgHTML5_Blk.jpg" />
                    </div>
                </div>
    }
}