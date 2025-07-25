const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__builder">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <div
                className="social-links scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                    <a target="_blank" rel="nofollow" href="https://github.com/TracyBachmann">
                      <i aria-hidden="true" className="fab fa-github" />
                    </a>
                    <a target="_blank" rel="nofollow" href="https://fr.linkedin.com/in/trbach">
                      <i aria-hidden="true" className="fab fa-linkedin" />
                    </a>
                    <a target="_blank" rel="nofollow" href="https://leetcode.com/u/Tracy_Bachmann/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png" alt="LeetCode" style={{ width: '24px', height: '24px' }} />
                    </a>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <div
                className="copyright-text align-center scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
               
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <div
                className="copyright-text align-right scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
