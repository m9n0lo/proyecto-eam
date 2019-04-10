import React from 'react';
import { Menu } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import './Panel.sass';

const Panel = () => (
    <div>
        <h1  > Panel de control </h1>
        <Menu >
            <Menu.Item  >
                <Link to='/posts'>
                Posts
                </Link>
                
                
            </Menu.Item>

            <Menu.Item >
            <Link to='/albums'>
                Albums
                </Link>
                
           
            </Menu.Item>

           
      </Menu>
    </div>
);

export default Panel;