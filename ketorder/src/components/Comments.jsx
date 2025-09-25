import React from "react";
import EachComment from "./EachComment";

const Comments = () => {
  return (
    <div className="CommentsMainDiv">
      <div>
        <small>Leave Your Comment here</small>
        <br />
        <textarea type="text" className="CommentInput" />
        <button className="commnetBtn">Comment here</button>
      </div>
      <EachComment
        name="Jessica Fanti"
        image="/src/assets/1.png"
        cdate="October 16,2018"
        comText="I have seen great progress over a small week. I would highly recommend the Christie Skin products!"
      />
      <EachComment
        name="Phoebe Gordon"
        image="/src/assets/2.png"
        cdate="October 7,2018"
        comText="I've heard a lot about Keto products and look forward to testing the products for the next 30 days."
      />
      <EachComment
        name="Katie Wekey"
        image="/src/assets/3.png"
        cdate="October 3,2018"
        comText="I received my products 3 days after I was chosen as a tester. I have now used the products for three days and can already see great progress."
      />
      <EachComment
        name="Kate Denton"
        image="/src/assets/4.png"
        cdate="October 13,2018"
        comText="My friend recommended me the product and I have used it for almost three months now. Fully satisfied!"
      />
      <EachComment
        name="Alexandra Hagenauer"
        image="/src/assets/5.png"
        cdate="October 13,2018"
        comText="I have experienced the greatest advanced!"
      />
      <EachComment
        name="Tyson Blacket"
        image="/src/assets/6.png"
        cdate="October 15,2018"
        comText="I have given the products to my girlfriend. I can highly recommend this to other men!"
      />
    </div>
  );
};

export default Comments;
