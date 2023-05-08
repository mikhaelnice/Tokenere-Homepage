import "./desktop3.css";
const Desktop3 = () => {
  return (
    <div className="desktop-3">
      <div className="let-solve-your">Let solve your Crypto challenges</div>
      <div className="desktop-3-content">
        <div>
          <div className="buy-sell-container">
            <p className="buy-sell">{`Buy, Sell & Trade`}</p>
            <p className="buy-sell">Cryptocurrency in Minute</p>
          </div>
          {/* <div className="desktop-3-child" /> */}
          <button className="start">Start</button>
        </div>

        <div className="group-icon">
          <img alt="" src="/group.svg" />
        </div>
      </div>
    </div>
  );
};

export default Desktop3;
