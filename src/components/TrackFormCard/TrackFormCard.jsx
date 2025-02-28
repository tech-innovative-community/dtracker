import React from "react";
import { TrackFormCardContainer } from "./trackformcard.styles";
import dtracker_logo from "../../assets/logo.svg";
import ExtendedFab from "../FAB/ExtendedFab";
import { CgClose } from "react-icons/cg";
import { TfiLocationPin } from "react-icons/tfi";
import Button from "../button/button";
import swims_logo from "../../assets/logo.png";
import styled from "styled-components";

// the react function
function TrackFormCard() {
  return (
    <MainContainer>
      <Backdrop />
      <TrackFormCardContainer>
        <div className="logo">
          <img src={dtracker_logo} />
        </div>
        <div className="location">
          <div className="location-input">
            <div className="icon">
              <TfiLocationPin />
            </div>
            <input type="text" placeholder="location" />
          </div>
          <div className="location-btn">
            <button type="button">
              <div className="icon">
                <TfiLocationPin />
              </div>
            </button>
          </div>
        </div>
        <div className="img-btn">
          <ExtendedFab />
        </div>
        <div className="comments">
          <textarea placeholder="Comments" rows="5" />
        </div>
        <div className="btns">
          {/* <button>Proceed and Approve</button> */}
          <Button
            variance="contained"
            borderColor="#226E27"
            color="#226E27"
            name="Approve and Proceed"
          />
          <div className="cancel-btn">
            <div className="icon">
              <CgClose />
            </div>
            <span>Cancel</span>
          </div>
        </div>
        <div className="last-container">
          <div className="swims-container">
            <h3>Powered by</h3>
            <div className="logo">
              <img src={swims_logo} />
            </div>
          </div>
        </div>
        <div className="close-card-btn">
          <CgClose />
        </div>
      </TrackFormCardContainer>
    </MainContainer>
  );
}

export default TrackFormCard;

const MainContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
`;
const Backdrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  min-height: 100vw;
  z-index: 5;
  background-color: black;
  background: rgba(0, 0, 0, 0.5);
`;
