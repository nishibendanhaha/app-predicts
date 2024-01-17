import React from 'react';
import './style.css';
import { LaptopOutlined, SettingOutlined, NotificationOutlined, UserOutlined, AppstoreOutlined, CommentOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import { Route, Link, Routes, BrowserRouter as Router } from 'react-router-dom';
import ReIDAGW from '../ReIDAGW'
import TetoImClip from '../TetoImClip';
import ReIDAITL from '../ReIDAITL';


const { Header, Content, Footer, Sider } = Layout;
const Exp = () => (
    <Router>
        <Layout>
            <Header className="header">
                <div className="logo" />
                <Menu theme="dark" mode="horizontal">
                    <Menu.Item key="1" icon={<NotificationOutlined />}>Reidentification Applications</Menu.Item>
                    {/* <Menu.Item key="2" icon={<AppstoreOutlined />}><Link to='/InferRe'>Inference report</Link></Menu.Item> */}
                </Menu>
            </Header>
            <Content
                style={{
                    padding: '0 50px',
                }}
            >
                <Breadcrumb
                    style={{
                        margin: '16px 0',
                    }}
                >
                    <Breadcrumb.Item>Applications</Breadcrumb.Item>
                </Breadcrumb>
                <Layout
                    className="site-layout-background"
                    style={{
                        padding: '24px 0',
                    }}
                >
                    <Sider className="site-layout-background" width={200}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{
                                height: '100%',
                                width: '100%'
                            }}
                        >
                            <Menu.SubMenu title='PicReID' key='PicReID' icon={<LaptopOutlined />}>
                                <Menu.Item key='ReIDAGW'><Link to='/ReIDAGW'>ReIDAGW</Link></Menu.Item>
                            </Menu.SubMenu>
                            <Menu.SubMenu title='VideoReID' key='VideoReID' icon={<LaptopOutlined />}>
                                <Menu.Item key='ReIDAITL'><Link to='/ReIDAITL'>ReIDAITL</Link></Menu.Item>
                            </Menu.SubMenu>
                            <Menu.SubMenu title='Text-to-Image' key='Text-to-Image' icon={<LaptopOutlined />}>
                                <Menu.Item key='TetoImClip'><Link to='/TetoImClip'>TetoImClip</Link></Menu.Item>
                            </Menu.SubMenu>
                        </Menu>
                    </Sider>
                    <Content
                        style={{
                            padding: '0 14px',
                            minHeight: '100%',
                            width: '100%',
                            height: '100%',
                        }}
                    >
                        {/* Content */}
                        <Routes>
                            <Route path="/" element={<ReIDAGW />} />
                            <Route path='/ReIDAGW' element={<ReIDAGW />} />
                            <Route path='/ReIDAITL' element={<ReIDAITL />} />
                            <Route path='/TetoImClip' element={<TetoImClip />} />
                        </Routes>
                        {/* <Files /> */}
                    </Content>
                </Layout>
            </Content>
            <Footer
                style={{
                    textAlign: 'center',
                }}
            >
                Application Demos for AI model
            </Footer>
        </Layout>

    </Router>
);

export default Exp;