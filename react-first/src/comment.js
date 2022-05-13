import React from 'react';
class Comment extends React.Component {
    render() {
        return (
            <>
                <div className="Comment-text">
                    {this.props.text}
                </div>
                <div className="Comment-date">
                    {this.props.date}
                </div>
            </>
        )
    }

}
export default Comment;
