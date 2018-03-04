import React from 'react';
import Loading from '../common/loading';

class ColumnIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }
    }
    getList() {

    }
    render() {
        let { loading } = this.state;
        return (<div className="yiqiqianduan-column">
            <Loading isLoading={loading} />
            article
        </div>);
    }
}
export default ColumnIndex;