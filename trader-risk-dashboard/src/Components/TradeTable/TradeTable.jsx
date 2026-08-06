import "./TradeTable.css";

const TradeTable = () => {
  return (
    <section className="trade-history">
      <h2>Trade History</h2>

      <table>
        <thead>
          <tr>
            <th>Asset</th>
            <th>Position</th>
            <th>Entry Price</th>
            <th>Exit Price</th>
            <th>P&L</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>BTC</td>
            <td>Long</td>
            <td>$95,000</td>
            <td>$96,500</td>
            <td className="profit">+$1,500</td>
          </tr>

          <tr>
            <td>ETH</td>
            <td>Short</td>
            <td>$3,100</td>
            <td>$3,000</td>
            <td className="profit">+$100</td>
          </tr>

          <tr>
            <td>Gold</td>
            <td>Long</td>
            <td>$2,350</td>
            <td>$2,340</td>
            <td className="loss">-$10</td>
          </tr>

          <tr>
            <td>NASDAQ</td>
            <td>Long</td>
            <td>20,000</td>
            <td>20,250</td>
            <td className="profit">+$250</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default TradeTable;