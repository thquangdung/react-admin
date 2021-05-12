import React from 'react';
import { Admin, Resource } from 'react-admin';
import authProvider from './authProvider';
import dataProvider from './dataProvider';
import Dashboard from './Dashboard';

import PostList from './components/posts/PostList';
import PostCreate from './components/posts/PostCreate';
import PostEdit from './components/posts/PostEdit';
import PostShow from './components/posts/PostShow';

import UserList from './components/users/UserList';
import UserCreate from './components/users/UserCreate';
import UserEdit from './components/users/UserEdit';

import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';


function App() {
    return (
        <Admin
            authProvider={authProvider}
            dashboard={Dashboard}
            dataProvider={dataProvider}
        >
            <Resource name='posts' list={PostList} create={PostCreate} edit={PostEdit} icon={PostIcon} show={PostShow} />
            <Resource name='users' list={UserList} create={UserCreate} edit={UserEdit} icon={UserIcon} />
        </Admin>
    );
}

export default App;
