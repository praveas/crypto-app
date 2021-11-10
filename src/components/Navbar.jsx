import React from 'react';
import { Button, Menu, Typography, Avatar } from 'antd'; //using ant design, also material design can be used
import { Link } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';
// ant.design
import icon from '../images/cryptocurrency.png';

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large"/>
        <Typography.Title level={2} className="logo">
          <Link to="/">Cryptoverse</Link>
        </Typography.Title>
        {/* <Button className="menu-control-container">
        
        </Button>*/}  {/* for mobile */}
      </div>
      
    </div>
  )
}

export default Navbar;
