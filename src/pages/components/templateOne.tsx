import React, { useState } from 'react';
import styles from './templateOne.less';
import { Button, Menu } from 'antd';

const { SubMenu } = Menu;

interface MenuItem {
  title: string;
  key: string;
  icon?: JSX.Element[] | JSX.Element;
  children?: MenuItem[];
}
[];

interface TProps {
  children: JSX.Element[] | JSX.Element;
  menuData?: MenuItem[] | JSX.Element; // 可传入菜单数组或组件
}

export default (props: TProps) => {
  // show为false 小屏导航关闭
  const [show, setShow] = useState(false);
  const toogle = () => {
    setShow(!show);
  };
  const bubbles = (e: any) => {
    var ev = e || window.event;
    if (ev && ev.stopPropagation) {
      //非IE浏览器
      ev.stopPropagation();
    } else {
      //IE浏览器(IE11以下)
      ev.cancelBubble = true;
    }
  };
  const onOpenChange = (openKeys: any) => {};
  const getMenuELement = (menuData: MenuItem[]) => {
    return (
      <>
        {menuData.map(item => (
          <SubMenu key={item.key} title={item.title} icon={item.icon}>
            {item.children &&
              item.children.map(i => {
                if (i.children) {
                  const tem = (
                    <React.Fragment key={i.key}>
                      {getMenuELement([i])}
                    </React.Fragment>
                  );
                  return tem;
                } else {
                  return <Menu.Item key={i.key}>{i.title}</Menu.Item>;
                }
              })}
          </SubMenu>
        ))}
      </>
    );
  };

  return (
    <div onClick={() => show && setShow(false)}>
      <div style={{ backgroundColor: 'blue' }}>top</div>
      <div className={styles.box}>
        <div
          className={`${styles.left} ${show ? styles.leftShow : ''}`}
          onClick={bubbles}
        >
          {props.menuData ? (
            props.menuData instanceof Array ? (
              <Menu
                mode="inline"
                onOpenChange={onOpenChange}
                style={{ width: 256 }}
              >
                {getMenuELement(props.menuData)}
              </Menu>
            ) : (
              props.menuData
            )
          ) : null}
        </div>
        {/* 小屏时页面布局 */}
        <div
          className={`${styles.smScreenRight} ${!show ? styles.rightshow : ''}`}
        >
          <div style={{ backgroundColor: '#b7a414' }}>
            <Button type="primary" onClick={toogle}>
              toogle
            </Button>
            Page index
          </div>
          <div style={{ width: '100%' }}>
            {props.children ? props.children : null}
          </div>
        </div>
        {/* 大屏时页面布局 */}
        <div
          className={`styles.bgScreenRight ${!show ? styles.rightshow : ''}`}
        >
          <div style={{ backgroundColor: '#b7a414' }}>
            <h1
              style={{
                maxWidth: '992px',
                width: '100%',
                margin: 'auto',
                textAlign: 'center',
              }}
            >
              PagePage indexindePage indexPage indexPage indexPage indexx
            </h1>
          </div>
          <div className={styles.bgContentBox}>
            {props.children ? props.children : null}
          </div>
          {/* 底部 */}
          <div className={styles.bgBottomBox}>
            <div className={styles.bottomTop}>底部</div>
          </div>
          {/* 底部 */}
        </div>
      </div>
    </div>
  );
};
