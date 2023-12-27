import React, { Component } from "react";
import './style.css'

class CamItem extends Component {
    render() {
        const { camId, pic } = this.props.data
        return (
            <div className="camItem">
                <div className="camItem__con">
                    <div className="camItem__Id">
                        <input
                            type={'text'}
                            value={"摄像头" + camId}
                            onChange={(e) => { this.setState({camId:e.target.value}) }}
                        />
                    </div>
                </div>
                <div className="camItem__picCon">
                    {/* <input
                        type={'image'}
                        ref={input => this.imageInput = pic}
                    /> */}
                    <img className="camItem__pic" src={pic} onChange={(e) => { this.setState({src:e.target.value}) }}/>
                </div>
            </div>
        )
    }
}

export default CamItem