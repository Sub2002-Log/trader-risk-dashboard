import "./SummaryCard.css";

const SummaryCard = () => {
  return (
    <section className="summary">
      <h2>Performance Summary</h2>

      <div className="summary-grid">

        <div className="summary-card">
          <h4>Total P&L</h4>
          <p>+$1,250</p>
        </div>

        <div className="summary-card">
          <h4>Win Rate</h4>
          <p>70%</p>
        </div>

        <div className="summary-card">
          <h4>Winning Trades</h4>
          <p>12</p>
        </div>

        <div className="summary-card">
          <h4>Losing Trades</h4>
          <p>5</p>
        </div>

      </div>
    </section>
  );
};

export default SummaryCard;