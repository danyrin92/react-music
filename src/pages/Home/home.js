import React, {Component} from 'react';
import Header from '../../components/Header/header';
import Albumlist from '../../components/Albumlist/albumlist';
import jsonp from "jsonp";

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            albums: null
        }
    }

    componentDidMount() {
        jsonp('https://itunes.apple.com/lookup?id=471744&entity=album', null, (err, data) => {
            if (err) {
                console.error(err.message);
            } else {
                this.setState({
                    albums: data.results.filter(function(row) {
                        return row.wrapperType === "collection" && row.collectionType === "Album"
                    })
                })
            }
        });
    }

    render() {
        return (
            <div>
                <Header />
                <Albumlist albums={this.state.albums} />
            </div>
        );
    }
}

export default Home;
