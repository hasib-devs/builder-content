const PostGrid = () => {
  return (
    <div className="pb-posts-addon">
      <div className="pb-posts-addon-content">
        <div className="pb-addons-col">
          <div className="pb-addons-col-md3 pb-addons-col-sm2 pb-addons-col-xs1">
            <div className="pb-post-grid-wrap pb-post-grid-one">
              <div className="pb-post-grid-content">
                <h3 className="pb-post-grid-title">
                  <a href="http://wordpress.test/2023/05/05/hello-world/">
                    Hello world!
                  </a>
                </h3>
                <div className="pb-post-grid-meta">
                  hasib<span className="pb-postmeta-sept">/</span>May 5, 2023
                  <span className="pb-postmeta-sept">/</span>1 Comments
                </div>
                <div className="pb-post-grid-intro">
                  Welcome to WordPress. This is your first post. Edit or delete
                  it, then start writing!
                </div>
                <div className="pb-post-grid-btn-wrap">
                  <a
                    className="pb-post-grid-btn"
                    href="http://wordpress.test/2023/05/05/hello-world/"
                  >
                    Read More »
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostGrid;
