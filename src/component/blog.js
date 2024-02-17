import React from "react";

const blog = () => {
  return (
    <div className="container blog">
      <h1>our blog</h1>
      <div className="row ">
        <div
          className="card col-sm-4 mb-3 "
        
        >
          <img src="https://thumbs.dreamstime.com/b/blogging-blog-concepts-ideas-worktable-blogging-blog-concepts-ideas-white-worktable-110423482.jpg" className="card-img-top" alt="..."  style={{height:"200px"}}/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <button className="btn">Know More</button>
          </div>
        </div>

        <div
          className="card col-sm-4 mb-3   "
         
        >
          <img src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="..." style={{height:"200px"}} />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <button href="#" className="btn ">
              Go somewhere
            </button>
          </div>
        </div>

        <div
          className="card col-sm-4 mb-3  "
         
        >
          <img src="https://images.unsplash.com/photo-1545239351-ef35f43d514b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="..."  style={{height:"200px"}}/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <button className="btn">Know More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default blog;
