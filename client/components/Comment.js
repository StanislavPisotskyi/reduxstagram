import React, { Component } from 'react';

export default class Comment extends Component
{
    render()
    {
        const {i, comment} = this.props;
        return(
            <div className="comment" key={i}>
                <p>
                    <strong>{comment.user}</strong>
                    {comment.text}
                    <button onClick={this.props.removeComment.bind(null, this.props.params.postId, i)} className="remove-comment">&times;</button>
                </p>
            </div>
        );
    }
}