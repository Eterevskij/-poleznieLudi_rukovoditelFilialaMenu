
import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { PlusCircleOutlined, DownOutlined } from '@ant-design/icons';

import { Layout, Menu, Col, Row, Button, Divider, Input, Dropdown } from 'antd';

import {ReactComponent as FullLogo} from './img/FullLogo.svg';
import {ReactComponent as SmallLogo} from './img/SmallLogo.svg';

import {ReactComponent as Main} from './icons/Main.svg';
import {ReactComponent as Requests} from './icons/Requests.svg';
import {ReactComponent as Clients} from './icons/Clients.svg';
import {ReactComponent as Parsing} from './icons/Parsing.svg';
import {ReactComponent as Admin} from './icons/Admin.svg';
import {ReactComponent as Support} from './icons/Support.svg';
import {ReactComponent as BackArrow} from './icons/BackArrow.svg';
import {ReactComponent as Search} from './icons/Search.svg';
import {ReactComponent as Bell} from './icons/Bell.svg';

import user from './img/UserPhoto.jpg';

import './App.css';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer">
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer">
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer">
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
);

function App() {

  const asideRef = React.useRef(null);

  let [isMenuCollapse, setMenuCollapse] = useState(false);

  const toggleMenu = (collapsed, event ) => {

    debugger

      if(event.path.includes(asideRef.current)) {
        setMenuCollapse(false);
      }

      if(!event.path.includes(asideRef.current)) {
        setMenuCollapse(true);
      }

    
  }

  const HandleCollapse = (collapsed) => {
    debugger
    console.log("Событие", collapsed)
    setMenuCollapse(collapsed);

    if(collapsed) {
      document.body.addEventListener('click', toggleMenu.bind(null, collapsed));
    } else {
      document.body.removeEventListener('click', toggleMenu);
    }

  }

  return (
    <div className="App">
    <Layout className="app__wrapper">
        <Sider
          ref={asideRef}
          className='aside desktop'
          breakpoint="xl"
          collapsed={isMenuCollapse}
          onBreakpoint={(collapsed) => HandleCollapse(collapsed)}
          xl={{span: 24 }} md={{span: 0}}
        >
          
          {
            (isMenuCollapse) ?
            <SmallLogo className='logo small' />:
            <FullLogo className='logo full' /> 
          }


          <Menu className='menu' mode="inline" defaultSelectedKeys={['4']}>

          <Menu.Item disabled={true} className='backArrow' icon={<BackArrow />}>
            Клиентский на портал
          </Menu.Item>

            <Menu.Item className='main' key="1" icon={<Main />}>
              Главная
            </Menu.Item>
            <Menu.Item key="2" icon={<Requests />}>
              Заявки
            </Menu.Item>
            <Menu.Item key="3" icon={<Clients />}>
              Клиенты
            </Menu.Item>
            <Menu.Item key="4" icon={<Parsing />}>
              Парсинг
            </Menu.Item>
            <SubMenu key="5" icon={<Admin />} title="Админ">
              <Menu.Item key="7">
                Админ1
              </Menu.Item>
              <Menu.Item key="8">
                Админ2
              </Menu.Item >
              <Menu.Item key="9">
                Админ3
              </Menu.Item>
            </SubMenu>
            <Divider></Divider>
            <Menu.Item key="6" icon={<Support />}>
              Поддержка
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className='headerAndContent'>
          <Header className="header" style={{ padding: 0 }} >

            <div className="desktop">
              <Row justify='space-between' className="container">
                <Col span={6} className='header__left__search__wrapper header__left'>
                  <Input className='header__left__search' placeholder="Поиск..." suffix={<Search />} />
                </Col>

                <Col className='header__right'>
                  <Button className='header__right__item balance'><span>Баланс: <span className="balance__sum"> 0 ₽</span></span> 
                    <PlusCircleOutlined />
                  </Button>

                  <div className="header__right__item bell"> 
                    <Dropdown  overlay={menu} placement="bottomRight">
                      <Bell></Bell>
                    </Dropdown>

                    <span className="bell__notification">
                      <p className='bell__notification__text'>99</p>
                    </span>
                  </div>  

                  <Dropdown className='header__right__item profile' overlay={menu} placement="bottomRight">
                    <Button>
                      <img src={user} alt="" />
                      <span className="DownOutlined__wrapper">
                        <DownOutlined />
                      </span>
                    </Button>
                  </Dropdown>

                  </Col>
                </Row>

              </div>

              <div className="mobile">
                <div className="container">
                  <h5 className="mobile__title">Главная</h5>
                  <span className="mobile__search">
                    <Search />
                  </span>
                </div>
              </div>

            </Header>

          <Content>
            <div className="site-layout-background">
            <div className="container">
            
            <Menu collapsed={false} className='menu' mode="inline" defaultSelectedKeys={['4']}>

              <Menu.Item disabled={true} className='backArrow'>
                <span className='clientPortal__wrapper'><BackArrow />Клиентский на портал</span>
              </Menu.Item>

                <Menu.Item className='main' key="1" icon={<Main />}>
                  Главная
                </Menu.Item>
                <Menu.Item key="2" icon={<Requests />}>
                  Заявки
                </Menu.Item>
                <Menu.Item key="3" icon={<Clients />}>
                  Клиенты
                </Menu.Item>
                <Menu.Item key="4" icon={<Parsing />}>
                  Парсинг
                </Menu.Item>
                <SubMenu  key="5" icon={<Admin />} title="Админ">
                  <Menu.Item key="7">
                    Админ1
                  </Menu.Item>
                  <Menu.Item key="8">
                    Админ2
                  </Menu.Item >
                  <Menu.Item key="9">
                    Админ3
                  </Menu.Item>
                </SubMenu>
                <Divider></Divider>
                <Menu.Item key="6" icon={<Support />}>
                  Поддержка
                </Menu.Item>
              </Menu>

            </div>
            </div>
          </Content>
          <Footer className="menu mobile" style={{ textAlign: 'center' }}>
            <Menu mode="horizontal" defaultSelectedKeys={['2']}>
              <Menu.Item key="1" icon={<Main />} />
              <Menu.Item key="2" icon={<Requests />} />
              <Menu.Item key="3" icon={<Clients />} />
              <Menu.Item key="4" icon={<Parsing />} />
            </Menu>
          </Footer>
        </Layout>
      </Layout>
      { !isMenuCollapse && <div className="menuDarkBG"></div> }

    </div>
  );
}

export default App;
