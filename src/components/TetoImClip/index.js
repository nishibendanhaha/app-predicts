import React, { Component } from 'react';
import { Input, InputGroup } from 'rsuite';
import SearchIcon from '@rsuite/icons/Search';
import { Breadcrumb, Layout, Menu, Row, Col } from 'antd';
import './style.css'
const { Header, Content, Footer, Sider } = Layout;


export default class TetoImClip extends Component {
    constructor(props) {
        super(props);
        this.inputRefs = {
            input1: React.createRef()
        }
        this.state = {
            top1: [],
            top2: [],
            top3: [],
            top4: [],
            top5: []
        }
    }
    render() {
        const styles = {
            width: 300,
            innerHeight: 400,
            marginBottom: 10
        };
        return (
            <Layout>
                <Sider style={{ background: 'none', padding: 0, margin: 24 }}>
                    <div style={{ display: "flex" }}>
                        <InputGroup style={styles}>
                            <Input as="textarea"
                                rows={30}
                                col={40}
                                placeholder="请输入英语文本描述（暂不支持中文），例如：Man in blue shirt and jeans on ladder cleaning windows"
                                // value={this.state.input1}
                                ref={this.inputRefs.input1}
                            />
                            <InputGroup.Button type="primary" style={{ margin: "5px 5px 5px 5px" }} className="retrieval__btn" onClick={this.intrievalImage}>检索图片
                                <SearchIcon />
                            </InputGroup.Button>
                        </InputGroup>
                    </div>
                </Sider>
                <Content>
                    <div className="conBody">
                        <Row>
                            <Col span="8">
                                <div className='mainLeft'>
                                    {
                                        this.state.top1.map(item => {
                                            const byteCharacters = atob(item.pic);
                                            const byteNumbers = new Array(byteCharacters.length);
                                            for (let i = 0; i < byteCharacters.length; i++) {
                                                byteNumbers[i] = byteCharacters.charCodeAt(i);
                                            }
                                            // console.log(byteCharacters)
                                            const byteArray = new Uint8Array(byteNumbers);
                                            const blob = new Blob([byteArray], { type: "image/jpeg" });
                                            return (
                                                <div>
                                                    <div>
                                                        <img className='resImage' src={URL.createObjectURL(blob)} />
                                                    </div>
                                                    <div> TOP-1 Similarity: {item.sim}
                                                    </div>

                                                </div>
                                            )
                                        }
                                        )
                                    }
                                </div>
                            </Col>
                            <Col span="8">
                                <div className='mainLeft'>
                                    {
                                        this.state.top2.map(item => {
                                            const byteCharacters = atob(item.pic);
                                            const byteNumbers = new Array(byteCharacters.length);
                                            for (let i = 0; i < byteCharacters.length; i++) {
                                                byteNumbers[i] = byteCharacters.charCodeAt(i);
                                            }
                                            // console.log(byteCharacters)
                                            const byteArray = new Uint8Array(byteNumbers);
                                            const blob = new Blob([byteArray], { type: "image/jpeg" });
                                            return (
                                                <div>
                                                    <div>
                                                        <img className='resImage' src={URL.createObjectURL(blob)} />
                                                    </div>
                                                    <div> TOP-2 Similarity: {item.sim}
                                                    </div>

                                                </div>
                                            )
                                        }
                                        )
                                    }
                                </div>
                            </Col>
                            <Col span="8">
                                <div className='mainLeft'>
                                    {
                                        this.state.top3.map(item => {
                                            const byteCharacters = atob(item.pic);
                                            const byteNumbers = new Array(byteCharacters.length);
                                            for (let i = 0; i < byteCharacters.length; i++) {
                                                byteNumbers[i] = byteCharacters.charCodeAt(i);
                                            }
                                            // console.log(byteCharacters)
                                            const byteArray = new Uint8Array(byteNumbers);
                                            const blob = new Blob([byteArray], { type: "image/jpeg" });
                                            return (
                                                <div>
                                                    <div>
                                                        <img className='resImage' src={URL.createObjectURL(blob)} />
                                                    </div>
                                                    <div> TOP-3 Similarity: {item.sim}
                                                    </div>

                                                </div>
                                            )
                                        }
                                        )
                                    }
                                </div>
                            </Col>
                            <Col span="8">
                                <div className='mainLeft'>
                                    {
                                        this.state.top4.map(item => {
                                            const byteCharacters = atob(item.pic);
                                            const byteNumbers = new Array(byteCharacters.length);
                                            for (let i = 0; i < byteCharacters.length; i++) {
                                                byteNumbers[i] = byteCharacters.charCodeAt(i);
                                            }
                                            // console.log(byteCharacters)
                                            const byteArray = new Uint8Array(byteNumbers);
                                            const blob = new Blob([byteArray], { type: "image/jpeg" });
                                            return (
                                                <div>
                                                    <div>
                                                        <img className='resImage' src={URL.createObjectURL(blob)} />
                                                    </div>
                                                    <div> TOP-4 Similarity: {item.sim}
                                                    </div>

                                                </div>
                                            )
                                        }
                                        )
                                    }
                                </div>
                            </Col>
                            <Col span="8">
                                <div className='mainLeft'>
                                    {
                                        this.state.top5.map(item => {
                                            const byteCharacters = atob(item.pic);
                                            const byteNumbers = new Array(byteCharacters.length);
                                            for (let i = 0; i < byteCharacters.length; i++) {
                                                byteNumbers[i] = byteCharacters.charCodeAt(i);
                                            }
                                            // console.log(byteCharacters)
                                            const byteArray = new Uint8Array(byteNumbers);
                                            const blob = new Blob([byteArray], { type: "image/jpeg" });
                                            return (
                                                <div>
                                                    <div>
                                                        <img className='resImage' src={URL.createObjectURL(blob)} />
                                                    </div>
                                                    <div> TOP-5 Similarity: {item.sim}
                                                    </div>

                                                </div>
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

        );
    }
    intrievalImage = async () => {
        this.setState({
            top1: [],
            top2: [],
            top3: [],
            top4: [],
            top5: [],
            top6: []
        })
        const input1Value = this.inputRefs.input1.current.value
        // console.log(input1Value)
        const url = "/CLIP_retri"
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                description: input1Value
            })
        }).then(response => response.json()).then(data => {
            console.log(data)
            var temp = this.state.top1
            temp.push(data.retri_rs.shift())
            this.setState({
                top1: temp
            })
            temp = this.state.top2
            temp.push(data.retri_rs.shift())
            this.setState({
                top2: temp
            })
            temp = this.state.top3
            temp.push(data.retri_rs.shift())
            this.setState({
                top3: temp
            })
            temp = this.state.top4
            temp.push(data.retri_rs.shift())
            this.setState({
                top4: temp
            })
            temp = this.state.top5
            temp.push(data.retri_rs.shift())
            this.setState({
                top5: temp
            })
            console.log(this.state.top1)
        }).catch(error => { console.error(error) })
    }
}