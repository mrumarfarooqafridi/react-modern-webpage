import React from "react";

const Footer = () => {
  return (
    <div className="FooterMainDiv">
      <div className="FooterImgDiv">
        <img src="/src/assets/secure_min.png" alt="FooterFirstImg" />
        <img src="/src/assets/rank.jpg" alt="FooterSecondImg" />
      </div>
      <div className="FooterTextDiv">
        <h6>All Rights Reserved.</h6>
        <p>
          This website is not affiliated with or endorsed by Australia Post and
          does not claim to represent, or own any of the trademarks, tradenames
          or rights associated with any of the products which are the property
          of their respective owners who do not own, endorse, or promote this
          site. All images on this site are readily available in various places
          on the Internet and believed to be in public domain according to the
          U.S. Copyright Fair Use Act (title 17, U.S. Code). *Trial offers
          offered on the last page require shipping and handling fees. See
          manufacturer’s site for details as terms vary with offers.
        </p>
      </div>
    </div>
  );
};

export default Footer;
