import React, { useState, Component } from 'react'
import { Breadcrumb, Layout, Menu, Row, Col } from 'antd';
import { Helmet } from "react-helmet";
import './style.css'

const { Header, Content, Footer, Sider } = Layout;

function WebStyle(props) {
    const [imgState, setimgState] = useState(true);
    const [imgData, setimgData] = useState('');
    const _upImg = () => {
        let upimgs = document.getElementById("upimg")
        upimgs.click();
    }
    const upChange = (event) => {
        let imgfile = event.currentTarget.files[0];///获得input的第一个图片
        console.log('我是图片源文件', imgfile)
        if (imgfile.size > 1024000) {
            alert('大于了1m，请重新上传', 3)
            let upimgs = document.getElementById("upimg")
            upimgs.value = ''
        }
        else {
            //使用readAsDataURL来进行回显图片
            let reader = new FileReader();//filereader.readasdataurl读取图像文件转换为流
            reader.readAsDataURL(imgfile);

            reader.onload = function (event) {//读取数据时会触发一个load事件
                let imgs = this.result
                console.log('我是回显的Base64图片文件', imgs)
                setimgState(false)
                setimgData(imgs)
            };
        }
    }
    return (
        <div className='page-body'>
            <button onClick={_upImg}>
                {
                    imgState ? '上传' : '重新上传'
                }
            </button>
            <div>
                <img src={imgData} style={{ width: '25%', height: '30%' }} />
            </div>
            <input id='upimg' type='file' style={{ display: 'none' }} accept='image/jpg, image/png' onChange={upChange} />
        </div>
    )
}

class ReIDAGW extends Component {
    constructor(props) {
        super(props)
        this.state = {
            imgState: true,
            imgData: '',
            preData: [],
            ifRes: true,
            cam1: [],
            cam2: [],
            cam3: [],
            cam4: [],
            cam5: [],
            cam6: [],
        }
    }
    _upImg = () => {
        let upimgs = document.getElementById("upimg")
        upimgs.click();
    }
    upChange = (event) => {
        let _this = this//烦人的this
        let imgfile = event.currentTarget.files[0];///获得input的第一个图片
        console.log('我是图片源文件', imgfile)
        if (imgfile.size > 1024000) {
            alert('大于了1m，请重新上传', 3)
            let upimgs = document.getElementById("upimg")
            upimgs.value = ''
        }
        else {
            //使用readAsDataURL来进行回显图片
            let reader = new FileReader();//filereader.readasdataurl读取图像文件转换为流
            reader.readAsDataURL(imgfile);

            reader.onload = function (event) {//读取数据时会触发一个load事件
                let imgs = this.result
                console.log('我是回显的Base64图片文件', imgs)
                _this.state.imgState = false
                _this.state.imgData = imgs
                _this.setState(_this.state)
            };
        }
    }
    render() {
        // const preData = [{ id: 1, camId: "0", pic: NaN }, { id: 2, camId: "1", pic: NaN }, { id: 3, camId: "2", pic: NaN }, { id: 4, camId: "3", pic: NaN }, { id: 5, camId: "4", pic: NaN }, { id: 6, camId: "5", pic: NaN }]
        return (
            <Layout>
                <Header className="header" style={{ background: '#fff', padding: 0, height: 152 }}>
                </Header>
                <Sider className="site-layout-background" style={{ background: 'none', padding: 0, margin: 24 }} >
                    <div className='page-body'>
                        <button type="primary" style={{ margin: "5px 5px 5px 5px" }} className="bar__btn" onClick={this._upImg}>
                            {
                                this.state.imgState ? '上传行人图片' : '重新上传'
                            }
                        </button>
                        <button type="primary" style={{ margin: "5px 5px 5px 5px" }} className="predict__btn" onClick={this.predict} onChange={this.showRes}>识别检索
                        </button>
                        <div>
                            <img src={this.state.imgData} style={{ width: '100%', height: '100%' }} />
                        </div>
                        <input id='upimg' type='file' style={{ display: 'none' }} accept='image/jpg, image/png' onChange={this.upChange} />
                    </div>
                </Sider>
                <Content style={{ background: 'none', padding: 0, margin: 24 }}>
                    {/* {this.state.ifRes ? this.showRes() : null} */}
                    <div className="conBody">
                        <Row>
                            <Col span="8">
                                <div className='mainLeft'> 摄像头1
                                    {
                                        this.state.cam1.map(item => {
                                            const byteCharacters = atob(item);
                                            const byteNumbers = new Array(byteCharacters.length);
                                            for (let i = 0; i < byteCharacters.length; i++) {
                                                byteNumbers[i] = byteCharacters.charCodeAt(i);
                                            }
                                            // console.log(byteCharacters)
                                            const byteArray = new Uint8Array(byteNumbers);
                                            const blob = new Blob([byteArray], { type: "image/jpeg" });
                                            return (
                                                <img src={URL.createObjectURL(blob)} />
                                            )
                                        }
                                        )
                                    }
                                </div>
                            </Col>
                            <Col span="8">
                                <div className='mainLeft'> 摄像头2
                                    {
                                        this.state.cam2.map(item => {
                                            const byteCharacters = atob(item);
                                            const byteNumbers = new Array(byteCharacters.length);
                                            for (let i = 0; i < byteCharacters.length; i++) {
                                                byteNumbers[i] = byteCharacters.charCodeAt(i);
                                            }
                                            // console.log(byteCharacters)
                                            const byteArray = new Uint8Array(byteNumbers);
                                            const blob = new Blob([byteArray], { type: "image/jpeg" });
                                            return (
                                                <img src={URL.createObjectURL(blob)} />
                                            )
                                        }
                                        )
                                    }
                                </div>
                            </Col>
                            <Col span="8">
                                <div className='mainLeft'> 摄像头3
                                    {
                                        this.state.cam3.map(item => {
                                            const byteCharacters = atob(item);
                                            const byteNumbers = new Array(byteCharacters.length);
                                            for (let i = 0; i < byteCharacters.length; i++) {
                                                byteNumbers[i] = byteCharacters.charCodeAt(i);
                                            }
                                            // console.log(byteCharacters)
                                            const byteArray = new Uint8Array(byteNumbers);
                                            const blob = new Blob([byteArray], { type: "image/jpeg" });
                                            return (
                                                <img src={URL.createObjectURL(blob)} />
                                            )
                                        }
                                        )
                                    }
                                </div>
                            </Col>
                            <Col span="8">
                                <div className='mainLeft'>摄像头4
                                    {
                                        this.state.cam4.map(item => {
                                            const byteCharacters = atob(item);
                                            const byteNumbers = new Array(byteCharacters.length);
                                            for (let i = 0; i < byteCharacters.length; i++) {
                                                byteNumbers[i] = byteCharacters.charCodeAt(i);
                                            }
                                            // console.log(byteCharacters)
                                            const byteArray = new Uint8Array(byteNumbers);
                                            const blob = new Blob([byteArray], { type: "image/jpeg" });
                                            return (
                                                <img src={URL.createObjectURL(blob)} />
                                            )
                                        }
                                        )
                                    }
                                </div>
                            </Col>
                            <Col span="8">
                                <div className='mainLeft'> 摄像头5
                                    {
                                        this.state.cam5.map(item => {
                                            const byteCharacters = atob(item);
                                            const byteNumbers = new Array(byteCharacters.length);
                                            for (let i = 0; i < byteCharacters.length; i++) {
                                                byteNumbers[i] = byteCharacters.charCodeAt(i);
                                            }
                                            // console.log(byteCharacters)
                                            const byteArray = new Uint8Array(byteNumbers);
                                            const blob = new Blob([byteArray], { type: "image/jpeg" });
                                            return (
                                                <img src={URL.createObjectURL(blob)} />
                                            )
                                        }
                                        )
                                    }
                                </div>
                            </Col>
                            <Col span="8">
                                <div className='mainLeft'> 摄像头6
                                    {
                                        this.state.cam6.map(item => {
                                            const byteCharacters = atob(item);
                                            const byteNumbers = new Array(byteCharacters.length);
                                            for (let i = 0; i < byteCharacters.length; i++) {
                                                byteNumbers[i] = byteCharacters.charCodeAt(i);
                                            }
                                            // console.log(byteCharacters)
                                            const byteArray = new Uint8Array(byteNumbers);
                                            const blob = new Blob([byteArray], { type: "image/jpeg" });
                                            return (
                                                <img src={URL.createObjectURL(blob)} />
                                            )
                                        }
                                        )
                                    }
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Content>
            </Layout>
        )
    }
    predict = async () => {
        this.setState({
            cam1: [],
            cam2: [],
            cam3: [],
            cam4: [],
            cam5: [],
            cam6: []
        })
        const url = "/AGW_predict"
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                imgbase64: this.state.imgData
            })
        }).then(response => response.json()).then(data => {
            for (var i in data.pre_rs) {
                if (data.pre_rs[i].camId === '1') {
                    const temp = this.state.cam1
                    temp.push(data.pre_rs[i].pic)
                    this.setState({
                        cam1: temp
                    })
                } else if (data.pre_rs[i].camId === '2') {
                    const temp = this.state.cam2
                    temp.push(data.pre_rs[i].pic)
                    this.setState({
                        cam2: temp
                    })
                } else if (data.pre_rs[i].camId === '3') {
                    const temp = this.state.cam3
                    temp.push(data.pre_rs[i].pic)
                    this.setState({
                        cam3: temp
                    })
                } else if (data.pre_rs[i].camId === '4') {
                    const temp = this.state.cam4
                    temp.push(data.pre_rs[i].pic)
                    this.setState({
                        cam4: temp
                    })
                } else if (data.pre_rs[i].camId === '5') {
                    const temp = this.state.cam5
                    temp.push(data.pre_rs[i].pic)
                    this.setState({
                        cam5: temp
                    })
                } else if (data.pre_rs[i].camId === '6') {
                    const temp = this.state.cam6
                    temp.push(data.pre_rs[i].pic)
                    this.setState({
                        cam6: temp
                    })
                }
            }
            this.setState({
                preData: data.pre_rs
            })
            if (this.state.ifRes) {
                // this.setState({
                //     ifRes: false,
                // })
            } else {
                this.setState({
                    ifRes: true,
                })
            }
        }).catch(error => { console.error(error) })
    }

}

export default ReIDAGW
