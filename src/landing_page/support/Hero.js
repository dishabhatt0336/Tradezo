import React from "react";

function Hero() {
  return (
    <section className="container-fluid " id="supportHero" >
      <div className="p-5 mx-5" id="supportWrapper">
        <h3>Support Portal</h3>
        <a href="" style={{fontSize:"larger"}}>Track Tickets</a>
      </div>
      <div className="row p-5 mt-0 mx-5">
        <div className="col-7 p-3">
          <h1 className="fs-3">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input placeholder="Eg. how do I activate F&O" />
          <br />
          <a href="" style={{lineHeight:"2.5em"}}>Track account opening</a> &nbsp;&nbsp;
          <a href="" >Track segment activation</a> &nbsp;&nbsp;
          <a href="">Intraday margins</a>&nbsp;&nbsp;
          <a href="">Kite user manual</a>
        </div>
        <div className="col-5 p-5">
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li>
              <a href="" style={{lineHeight:"2em"}}>Current Takeovers and Delisting - January 2024</a>
            </li>
            <li>
              <a href="" style={{lineHeight:"2em"}}>Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
