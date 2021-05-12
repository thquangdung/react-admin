import React from 'react';
import { Edit, SimpleForm, TextInput, DateInput } from 'react-admin';

const PostTitle = ({ record }) => {
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

const PostEdit = (props) => {
    return (
        <Edit title={<PostTitle />} {...props}>
            <SimpleForm>
                <TextInput disabled source='id' />
                <TextInput source='title' />
                <TextInput multiline source='body' />
                <DateInput label='Published' source='publishedAt' />
            </SimpleForm>
        </Edit>
    );
};

export default PostEdit;
