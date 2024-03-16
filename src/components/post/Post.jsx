import React from 'react';
import './post.css';
import { Link } from 'react-router-dom';

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
          <span className='postCat'>
            <Link className='link' to='/posts?cat=music'>
              Music
            </Link>
          </span>
          <span className='postCat'>
            <Link className='link' to='/posts?cat=life'>
              Life
            </Link>
          </span>
        </div>
        <Link className='link postTitle' to='/post/abc'>
          Lorem ipsum dolor sit amet
        </Link>
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
