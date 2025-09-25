import React from "react";

const EachComment = ({ name, image, cdate, comText }) => {
  return (
    <div className="EachCommentMainDiv">
      <div className="EachCommentImgDiv">
        <img src={image} alt="" />
      </div>
      <div className="EachCommentTextDiv">
        <div className="NameAndDateDiv">
          <p>
            <b>{name}</b>
          </p>
          <p>{cdate}</p>
        </div>
        <div className="CommentTextDiv">
          <p>{comText}</p>
        </div>
      </div>
    </div>
  );
};

export default EachComment;
