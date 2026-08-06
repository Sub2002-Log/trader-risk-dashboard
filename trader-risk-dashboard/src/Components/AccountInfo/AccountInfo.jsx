import "./AccountInfo.css";

const AccountInfo = () => {
  return (
    <div className="account-info">
      <h2>Account Information</h2>

      <div className="info-grid">

        <div className="card">
          <h4>Starting Balance</h4>
          <p>$10,000</p>
        </div>

        <div className="card">
          <h4>Current Balance</h4>
          <p>$11,250</p>
        </div>

        <div className="card">
          <h4>Max Drawdown</h4>
          <p>10%</p>
        </div>

        <div className="card">
          <h4>Daily Loss Limit</h4>
          <p>3%</p>
        </div>

      </div>
    </div>
  );
};

export default AccountInfo;