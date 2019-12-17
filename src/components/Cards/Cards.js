import React from "react";
import { Link } from "react-router-dom";
import "./Cards.css";
const Cards = () => {
  return (
    <div>
      <div className="cards-list">
        <Link style={{ textDecoration: "none" }} to="/InputForm/1">
          <div className="card 1">
            <div className="card_image">
              <img
                src="https://media.giphy.com/media/oCnqvqgc1H1Ac/giphy.gif"
                alt=""
              />
            </div>
            <div className="card_title title-white">
              <p>Single Payment Compound Amount</p>
            </div>
          </div>
        </Link>

        <Link style={{ textDecoration: "none" }} to="/InputForm/2">
          <div className="card 2">
            <div className="card_image">
              <img
                to="/InputForm/2"
                src="http://giphygifs.s3.amazonaws.com/media/5u0uZecUZlUsM/giphy.gif"
                alt=""
              />
            </div>
            <div className="card_title title-white">
              <p>Single Payment Present Worth Amount</p>
            </div>
          </div>
        </Link>

        <Link style={{ textDecoration: "none" }} to="/InputForm/3">
          <div className="card 3">
            <div className="card_image">
              <img
                src="https://media.giphy.com/media/10SvWCbt1ytWCc/giphy.gif"
                alt=""
              />
            </div>
            <div className="card_title title-white">
              <p>Equal Payment Series Compound Amount</p>
            </div>
          </div>
        </Link>

        <Link style={{ textDecoration: "none" }} to="/InputForm/4">
          <div className="card 4">
            <div className="card_image">
              <img
                src="https://media.giphy.com/media/MFsqcBSoOKPbjtmvWz/giphy.gif"
                alt=""
              />
            </div>
            <div className="card_title title-white">
              <p>Equal Payment Series Sinking Fund</p>
            </div>
          </div>
        </Link>

        <Link style={{ textDecoration: "none" }} to="/InputForm/5">
          <div className="card 5">
            <div className="card_image">
              <img
                src="https://media.giphy.com/media/JpG2A9P3dPHXaTYrwu/giphy.gif"
                alt=""
              />
            </div>
            <div className="card_title title-white">
              <p>Equal Payment Series Present Worth Amount</p>
            </div>
          </div>
        </Link>

        <Link style={{ textDecoration: "none" }} to="/InputForm/6">
          <div className="card 6">
            <div className="card_image">
              <img
                src="https://media.giphy.com/media/12Eo7WogCAoj84/source.gif"
                alt=""
              />
            </div>
            <div className="card_title title-white">
              <p>Equal Payment Series Capital Recovery</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Cards;
