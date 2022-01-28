import React from 'react';

export default function App() {
  const title = 'Blog Post';
  const body = 'This is the blog post';
  const comments = [
    { id: 1, text: 'Comment one' },
    { id: 2, text: 'Comment two' },
    { id: 3, text: 'Comment three' },
  ];

  return (
    <div className='container'>
      <h1>Feedback UI</h1>
      <h2>{title.toLocaleUpperCase()}</h2>
      <p>{body}</p>
      <div className='comments'>
        <h3>Comments ({comments.length})</h3>
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>{comment.text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
