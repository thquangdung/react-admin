import { Pagination } from 'react-admin';

const PostPagination = props => <Pagination rowsPerPageOptions={[5, 10, 25]} {...props} />;

export default PostPagination;