import {connect} from 'react-redux';

import CommentItem from '../components/commentItem';
import {delCommentAction} from '../redux/actions';

export default connect(
    state => ({}),
    {delCommentAction}
)(CommentItem);
