import "./RiskIndicator.css";

const RiskIndicator = () => {
  return (
    <section className="risk-section">
      <h2>Risk Indicator</h2>

      <div className="risk-card">
        <div className="risk-item">
          <h4>Current Risk</h4>
          <div className="progress">
            <div className="progress-fill high"></div>
          </div>
          <span>75%</span>
        </div>

        <div className="risk-item">
          <h4>Daily Loss</h4>
          <div className="progress">
            <div className="progress-fill medium"></div>
          </div>
          <span>45%</span>
        </div>

        <div className="risk-item">
          <h4>Drawdown</h4>
          <div className="progress">
            <div className="progress-fill low"></div>
          </div>
          <span>20%</span>
        </div>
      </div>
    </section>
  );
};

export default RiskIndicator;