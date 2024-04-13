import React, { useState } from 'react';
import './input.css';

const CommentModal = ({ comment, onClose }) => {
  return (
    <div className="comment-modal">
      <div className="comment-content">
        <span className="text">{comment.text}</span>
        <button className="btn close" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

const NestedComments = () => {
  const [comments, setComments] = useState([
    {
      id: 1,
      text: 'First Commenter',
      showInputBox: false,
      replies: [],
    },
  ]);
  const [selectedComment, setSelectedComment] = useState(null);

  const createInputBox = (commentId) => {
    const updatedComments = comments.map((comment) => {
      if (comment.id === commentId) {
        return { ...comment, showInputBox: true };
      }
      return comment;
    });
    setComments(updatedComments);
  };

  const addReply = (commentId, text) => {
    const updatedComments = comments.map((comment) => {
      if (comment.id === commentId) {
        return {
          ...comment,
          showInputBox: false,
          replies: [...comment.replies, { id: comment.replies.length + 1, text }],
        };
      }
      return comment;
    });
    setComments(updatedComments);
  };

  const addComment = (text) => {
    const newComment = {
      id: comments.length + 1,
      text,
      showInputBox: false,
      replies: [],
    };
    setComments([...comments, newComment]);
  };

  const openCommentModal = (comment) => {
    setSelectedComment(comment);
  };

  const closeCommentModal = () => {
    setSelectedComment(null);
  };

  return (
    <div className="container">
      <div className="comment-container" id="comment-container">
        {comments.map((comment) => (
          <div key={comment.id} className="all-comment">
            <div className="card" onClick={() => openCommentModal(comment)}>
              <span className="text">{comment.text}</span>
              <span className="reply" onClick={() => createInputBox(comment.id)}>
                Add Reply
              </span>
            </div>
            {comment.showInputBox && (
              <div className="comment-details">
                <input type="text" placeholder="add text here" className="input" />
                <button
                  className="btn submit"
                  onClick={(e) => {
                    const inputValue = e.target.previousElementSibling.value;
                    addReply(comment.id, inputValue);
                  }}
                >
                  Submit
                </button>
              </div>
            )}
            {comment.replies.map((reply) => (
              <div key={reply.id} className="card">
                <span className="text">{reply.text}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="comment-detailq">
        <input type="text" placeholder="add text here" className="input" />
        <button
          className="btn submit"
          onClick={(e) => {
            const inputValue = e.target.previousElementSibling.value;
            addComment(inputValue);
          }}
        >
          Add Comment
        </button>
      </div>

      {selectedComment && (
        <CommentModal comment={selectedComment} onClose={closeCommentModal} />
      )}
    </div>
  );
};

export default NestedComments;
