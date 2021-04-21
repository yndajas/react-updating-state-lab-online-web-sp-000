// Code YouTubeDebugger Component Here
import React, { Component } from 'react';

export default class YouTubeDebugger extends Component {
    constructor() {
        super();
        this.state = {
            errors: [],
            user: null,
            settings: {
              bitrate: 8,
              video: {
                resolution: '1080p'
              }
            }
        };
    }

    // commented out original solution as it didn't pass the tests, even if it may have worked - split into two separate handle click methods, which passes the tests

    // handleClick = (event) => {
    //     if (event.target.className === 'bitrate') {
    //         this.setState({
    //             settings: {
    //                 ...this.state.settings,
    //                 bitrate: 12
    //             }
    //         })
    //     } else if (event.target.className === 'resolution') {
    //         this.setState({
    //             settings: {
    //                 ...this.state.settings,
    //                 video: {
    //                     resolution: '720p'
    //                 }
    //             }
    //         })
    //     }
    // }

    handleClickBitrate = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
    }

    handleClickResolution = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    resolution: '720p'
                }
            }
        })
    }

    render() {
        return (
            <div>
                <button className='bitrate' onClick={this.handleClickBitrate} value="bitrate"></button>
                <button className='resolution' onClick={this.handleClickResolution} value="resolution"></button>
            </div>
        )
    }
}