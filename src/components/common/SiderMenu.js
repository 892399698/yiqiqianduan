import React from 'react';
// import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';

const renderMenuItem =
    ({ key, title, icon, link, ...props }) =>
        <div className="yiqiqianduan-menu-item"
            key={key || link}
            // {...props}
        >
            <Link to={link || key}>
                {icon && <div className={'icon ' + icon} />}
                <span className="nav-text">{title}</span>
            </Link>
        </div>;

const renderSubMenu =
    ({ key, title, icon, link, sub, ...props }) =>
        <div className="yiqiqianduan-menu-item"
            key={key || link}
            // {...props}
        >   
            <div className="qianduan-menu-submenu-title">
                {icon && <div className={'icon ' + icon} />}
                <span className="nav-text">{title}</span>
            </div>
            <ul className="yiqiqianduan-menu-sub-item"
                key={key || link}
            >
                {sub && sub.map(item => renderMenuItem(item))}
            </ul>
            
        </div>;

export default ({ menus, ...props }) => <div className="yiqiqianduan-sidermenu">
    {menus && menus.map(
        item => item.sub && item.sub.length ?
            renderSubMenu(item) : renderMenuItem(item)
    )}
</div>;