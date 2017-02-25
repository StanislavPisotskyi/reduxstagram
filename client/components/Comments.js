import React, { Component } from 'react';
import Comment from './Comment';

export default class Comments extends Component
{
    handleSubmit(e)
    {
        e.preventDefault();
        const { postId } = this.props.params;
        const author = this.refs.author.value;
        const comment = this.refs.comment.value;
        this.props.addComment(postId, author, comment);
        this.refs.commentForm.reset();
    }

    render()
    {
        return(
            <div className="comments">
                {this.props.postComments.map((comment, i) => <Comment {...this.props} key={i} i={i} comment={comment} />)}
                <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" ref="author" placeholder="Author" />
                    <input type="text" ref="comment" placeholder="Comment" />
                    <input type="submit" hidden />
                </form>
            </div>
        );
    }
}