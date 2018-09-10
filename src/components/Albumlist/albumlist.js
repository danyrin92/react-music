import React, {Component} from 'react';
import { Grid, Row, Col, Button, Modal } from 'react-bootstrap';
import './albumlist.css';

class Albumlist extends Component {

    constructor(props) {
        super(props);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false,
            title: "",
            artworkUrl: "",
            albumReleaseDate: "",
            albumTrackNum: "",
            albumGenre: "",
            albumUrl: "",
            albumPrice: "",
            albumCurrency: "",
            albumCopyright: ""
        };
    }

    handleShow(albumInfo) {
        this.setState({
            show: true,
            title: albumInfo.collectionName,
            artworkUrl: albumInfo.artworkUrl100,
            albumReleaseDate: albumInfo.releaseDate,
            albumTrackNum: albumInfo.trackCount,
            albumGenre: albumInfo.primaryGenreName,
            albumUrl: albumInfo.collectionViewUrl,
            albumPrice: albumInfo.collectionPrice,
            albumCurrency: albumInfo.currency,
            albumCopyright: albumInfo.copyright,
    });
    }

    handleClose() {
        this.setState({ show: false });
    }

    renderAlbums() {
        let albumsToShow = [];

        if (this.props.albums !== null) this.props.albums.forEach((value, index)=>{

            if(index % 3 === 0) {
                albumsToShow.push(<Row key={(index+1)*1000} />);
            }

            albumsToShow.push(<Col key={index} xs={12} xsOffset={2} sm={4} smOffset={0}>
                    <Button bsStyle="link" onClick={(params) => this.handleShow(value)}>
                        <img className="albumArt" src={value.artworkUrl100} alt='Logo' />
                    </Button>
                    <h4>{value.collectionName}</h4>
                    <p>{value.artistName}</p>
                    <p>Released: {parseInt(value.releaseDate, 10)}</p>
                </Col>);
        });

        return albumsToShow;
    }

    render() {
        return (
            <div>
                <h2 className="listTitle">Coldplay Albums</h2>
                <p className="listTitle">Click images for details</p>
                <br/>

                <Grid>
                    {this.renderAlbums()}
                </Grid>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.state.title}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <img className="modalAlbumArt" src={this.state.artworkUrl} alt='Logo' />
                        <p>Released: {parseInt(this.state.albumReleaseDate, 10)}</p>
                        <p>Number of Tracks: {this.state.albumTrackNum}</p>
                        <p>Genre: {this.state.albumGenre}</p>
                        <p>Price: {`${this.state.albumPrice} ${this.state.albumCurrency}`}</p>
                        <br/>
                        <a className="albumLink" href={this.state.albumUrl} target="_blank">Click here to see album</a>
                        <p>{this.state.albumCopyright}</p>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button onClick={this.handleClose}>Hide</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default Albumlist;
