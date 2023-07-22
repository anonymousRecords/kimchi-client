import React from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types'; 

const Post = React.forwardRef(function PostComponent({ post }, ref) {
    const postBody = (
        <>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <p>Post ID: {post.id}</p>
        </>
    )

    const content = ref
        ? <article ref={ref}>{postBody}</article>
        : <article>{postBody}</article>

    return content
})

// PropTypes 추가
Post.propTypes = {
    post: PropTypes.shape({
        title: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
    }).isRequired,
};

export default Post;