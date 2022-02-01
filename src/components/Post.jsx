import { Navigate, useNavigate } from 'react-router-dom';

function Post() {
  const status = 200;

  const navigate = useNavigate();

  const onClick = () => {
    console.log('Hola from Post');
    navigate('/about');
  };

  if (status === 404) {
    return <Navigate to='/notfound' />;
  }

  return (
    <div>
      <h2>Post</h2>
    </div>
  );
}

export default Post;
