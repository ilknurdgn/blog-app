import React from 'react';
import './post.css';

const Post = () => {
  return (
    <div className='post'>
      <img
        className='postImg'
        src='http://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto-compress&cs=tinysrgb&dqr=2&w=500'
        alt=''
      />
      <div className='postInfo'>
        <div className='postCats'>
          <span className='postCat'>Music</span>
          <span className='postCat'>Life</span>
        </div>
        <span className='postTitle'>Lorem ipsum dolor sit amet</span>
        <hr />
        <span className='postDate'>1 hour ago</span>
      </div>
      <p className='postDesc'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est maxime
        distinctio itaque autem dignissimos corporis asperiores suscipit
        tenetur, dolorum corrupti amet libero architecto molestias voluptatibus
        nulla necessitatibus deleniti ea delectus! Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Est maxime distinctio itaque autem
        dignissimos corporis asperiores suscipit tenetur, dolorum corrupti amet
        libero architecto molestias voluptatibus nulla necessitatibus deleniti
        ea delectus! Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Est maxime distinctio itaque autem dignissimos corporis asperiores
        suscipit tenetur, dolorum corrupti amet libero architecto molestias
        voluptatibus nulla necessitatibus deleniti ea delectus!
      </p>
    </div>
  );
};

export default Post;
