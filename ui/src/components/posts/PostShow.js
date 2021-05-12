import React from 'react';
import { Show, SimpleShowLayout, TextField , DateField, RichTextField } from 'react-admin';

const PostShow = (props) => {
    
    return (
        <Show {...props}>
            <SimpleShowLayout>
                <TextField disabled source='id' />
                <TextField source='title' />
                <RichTextField source='body' />
                <DateField label='Published date' source='publishedAt' />
            </SimpleShowLayout>
        </Show>
    );
};

export default PostShow;
