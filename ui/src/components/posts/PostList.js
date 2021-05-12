import React from 'react';
import { List, Datagrid, TextField, DateField, EditButton, DeleteButton, Filter, SearchInput } from 'react-admin';
import PostPagination from '../../MyPagination';


const PostFilter = (props) => (
    <Filter {...props}>
        <SearchInput source="q" alwaysOn />
    </Filter>
);

const PostList = (props) => {

    return (
        <List 
            filters={<PostFilter />} 
            // actions={<PostActions permissions={permissions} {...props} />}
            pagination={<PostPagination />}
            {...props} 
        >
            <Datagrid>
                <TextField source='id' />
                <TextField source='title' />
                <DateField source='publishedAt' />
                <EditButton basePath='/posts' />
                <DeleteButton basePath='/posts' />
            </Datagrid>

        </List>
    );
};

export default PostList;
