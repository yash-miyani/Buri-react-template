import React from "react";
import "./BlogDiv.css";
import Styled from "styled-components";

const Button = Styled.button`
  padding:1.2rem 2rem;
  font-size:1.6rem;
  text-transform:uppercase;
  color:#fff;
  background-color:#d6ad85;
  border:none;
  width:100%;
  transition: all 0.5s;

  &:hover{
    background-color:rgb(255, 184, 48);
  }
  
`;

const BlogDiv = () => {
  return (
    <div className="container my-8">
      <div className="row">
        <div className="col-lg-8 col-md-12 col-sm-12 col-12">
          <SingalBlog />
        </div>

        <div className="col-lg-4 col-md-12 col-sm-12 col-12">
          <div className="blog-second">
            <input type="text" placeholder="Search Keyword" />
            <Button>Search</Button>

            <div className="blog-category" data-aos="fade-up">
              <h3>Category</h3>
              <ul>
                <li>Resutrant Food(37)</li>
                <li>Travel news(10)</li>
                <li>Modern technology(03)</li>
                <li>Product(11)</li>
                <li>Inspiration(21)</li>
                <li>Health Care (09)</li>
              </ul>
            </div>

            <div className="post" data-aos="fade-up">
              <h2> Recent Post </h2>
              <RecentPost />
            </div>

            <div className="cloude" data-aos="fade-up">
              <h2>Tag Clouds</h2>
              <ul>
                <li>project</li>
                <li>love</li>
                <li>technology</li>
                <li>travel</li>
                <li>resturant</li>
                <li>life style</li>
                <li>design</li>
                <li>illustrain</li>
              </ul>
            </div>
            <div className="feed" data-aos="fade-up">
              <h2>Instagram Feeds</h2>
              <img src="./Asseets/images/feed-post1.png" alt="" />
              <img src="./Asseets/images/feed-post2.png" alt="" />
              <img src="./Asseets/images/feed-post3.png" alt="" />
              <img src="./Asseets/images/feed-post4.png" alt="" />
              <img src="./Asseets/images/feed-post5.png" alt="" />
              <img src="./Asseets/images/feed-post6.png" alt="" />
            </div>

            <div className="input-box" data-aos="fade-up">
              <h2>Newsletter</h2>
              <input type="email" placeholder="Enter Email" />
              <Button>Search</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDiv;

const SingalBlog = () => {
  const blogItem = [
    {
      path: "./Asseets/images/singal-blog1.png",
    },
    {
      path: "./Asseets/images/singal-blog2.png",
    },
    {
      path: "./Asseets/images/singal-blog3.png",
    },
    {
      path: "./Asseets/images/singal-blog4.png",
    },
    {
      path: "./Asseets/images/singal-blog5.png",
    },
  ];

  let item;
  item = blogItem.map((blog, index) => {
    return (
      <>
        <div className="singal-blog" key={index} data-aos="fade-up">
          <img src={blog.path} alt="blog-img" className="w-100" />
          <div className="singal-blog-box">
            15 <small> jan</small>
          </div>
          <div className="singal-blog-contain">
            <h3>Google inks pact for new 35-storey office</h3>
            <p>
              That dominion stars lights dominion divide years for fourth have
              don't stars is that he earth it first without heaven in place seed
              it second morning saying.
            </p>
            <span>
              <i className="bi bi-person"></i> Travel, Lifestyle
            </span>
            <span>
              <i className="bi bi-chat-text"></i> 03 Comments
            </span>
          </div>
        </div>
      </>
    );
  });

  return <>{item}</>;
};

const RecentPost = () => {
  const post = [
    {
      path: "./Asseets/images/feed-post1.png",
      title: "From life was you fish...",
      text: "January 12, 2019",
    },
    {
      path: "./Asseets/images/feed-post2.png",
      title: "The amazing hubble",
      text: "02 Hours ago",
    },
    {
      path: "./Asseets/images/feed-post3.png",
      title: "Astronomy Or Astrology",
      text: "03 Hours ago",
    },
    {
      path: "./Asseets/images/feed-post4.png",
      title: "Asteroids telescope",
      text: "01 Hours ago",
    },
  ];

  let itemPost;
  itemPost = post.map((post, index) => {
    return (
      <div className="row" key={index}>
        <div className="col-lg-4 col-md-4 col-sm-4 col-4">
          <img src={post.path} alt={post.title} />
        </div>

        <div
          className="col-lg-8 col-md-8 col-sm-8 col-8"
          style={{ alignSelf: "center" }}
        >
          <h3>{post.title}</h3>
          <p>{post.text}</p>
        </div>
      </div>
    );
  });

  return <>{itemPost}</>;
};
