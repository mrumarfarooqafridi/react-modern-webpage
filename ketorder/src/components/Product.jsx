import React from "react";

const Product = () => {
  return (
    <div className="ProductDiv">
      <div className="ProductMainDiv">
        <div className="ProductImgDiv">
          <img src="/src/assets/keto.png" alt="ProductImage" />
        </div>
        <div className="ProductDetailsDiv">
          <h2>Keto Bliss - Your way to perfect body</h2>
          <div className="ProductDetailsCols">
            <p className="ProductDetailsColsP">
              Achieve visibly results in 1 week <br />
              Normal price: <del>$399.99</del>
              <br />
              Your price: <b>$0.00!</b>
              <br />
              Delivery: $3.95 <br />
              Stock: 3
            </p>
            <div className="ProductDetailsColsBtn">
              <button>Confirm My Product</button>
              <small>489 others picked this product!</small>
            </div>
          </div>
        </div>
      </div>
      <div className="ProductInfoThreeSpan">
        <span>GLS Delivery</span>
        <span>Delivery 3-5 days</span>
        <span>24/7 customer service</span>
      </div>
    </div>
  );
};

export default Product;
