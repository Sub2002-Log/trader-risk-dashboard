import React from 'react';
import { trades } from '../data/tradedata';
import { STARTING_BALANCE, MAX_DRAWDOWN_LIMIT, DAILY_LOSS_LIMIT } from '../data/accountdata';

export default function Dashboard() {
  const totalPnl = trades.reduce((acc, trade) => acc + trade.pnl, 0);
  const currentBalance = STARTING_BALANCE + totalPnl;
  
  const winningTrades = trades.filter(t => t.pnl > 0);
  const losingTrades = trades.filter(t => t.pnl < 0);
  const winRate = ((winningTrades.length / trades.length) * 100).toFixed(0);
  
  const largestWin = winningTrades.length > 0 ? Math.max(...winningTrades.map(t => t.pnl)) : 0;
  const largestLoss = losingTrades.length > 0 ? Math.min(...losingTrades.map(t => t.pnl)) : 0;

  const currentDrawdown = totalPnl < 0 ? Math.abs(totalPnl) : 0; 
  const remainingDrawdown = MAX_DRAWDOWN_LIMIT - currentDrawdown;
  const currentDayLoss = losingTrades.reduce((acc, t) => acc + Math.abs(t.pnl), 0);
  const remainingDailyLimit = DAILY_LOSS_LIMIT - currentDayLoss;

  const avgWin = winningTrades.length ? winningTrades.reduce((acc, t) => acc + t.pnl, 0) / winningTrades.length : 0;
  const avgLoss = losingTrades.length ? Math.abs(losingTrades.reduce((acc, t) => acc + t.pnl, 0) / losingTrades.length) : 0;

  return (
    <div className="dashboard-container">
      
      <header className="dashboard-header">
        <div>
          <h1>Tradescape</h1>
          <p>Account Evaluation & Rule Compliance Monitor</p>
        </div>
        <div className="status-badge">
          <span className="status-dot"></span>
          Status: Safe
        </div>
      </header>

      <div className="cards-grid">
        <div className="card">
          <div className="card-title">Current Balance</div>
          <div className="card-value">${currentBalance.toLocaleString()}</div>
          <div className="card-sub">Starting: ${STARTING_BALANCE.toLocaleString()}</div>
        </div>
        <div className="card">
          <div className="card-title">Total P&L</div>
          <div className={`card-value ${totalPnl >= 0 ? 'text-emerald' : 'text-rose'}`}>
            {totalPnl >= 0 ? `+$${totalPnl.toLocaleString()}` : `-$${Math.abs(totalPnl).toLocaleString()}`}
          </div>
          <div className="card-sub">Winning: {winningTrades.length} | Losing: {losingTrades.length}</div>
        </div>
        <div className="card">
          <div className="card-title">Win Rate</div>
          <div className="card-value">{winRate}%</div>
          <div className="card-sub">Calculated from trades data</div>
        </div>
        <div className="card">
          <div className="card-title">Largest Win / Loss</div>
          <div className="card-value" style={{ fontSize: '1.25rem', marginTop: '0.25rem' }}>
            <span className="text-emerald">+${largestWin}</span> / <span className="text-rose">-${Math.abs(largestLoss)}</span>
          </div>
          <div className="card-sub">Max trade extremes</div>
        </div>
      </div>

      <section className="risk-section">
        <h2>🛡️ Am I in danger of violating my account rules?</h2>
        <p style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Tracking remaining buffers for maximum drawdown and daily loss limit.</p>
        
        <div className="risk-grid">
          <div className="risk-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem' }}>
              <span style={{ color: '#94a3b8' }}>Current Drawdown</span>
              <span style={{ fontWeight: 600 }}>${currentDrawdown} / ${MAX_DRAWDOWN_LIMIT}</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill-amber" style={{ width: `${(currentDrawdown / MAX_DRAWDOWN_LIMIT) * 100}%` }}></div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#94a3b8' }}>
              <span>Remaining Buffer:</span>
              <span className="text-emerald" style={{ fontWeight: 700 }}>${remainingDrawdown}</span>
            </div>
          </div>

          <div className="risk-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem' }}>
              <span style={{ color: '#94a3b8' }}>Current Day's Loss</span>
              <span style={{ fontWeight: 600 }}>${currentDayLoss} / ${DAILY_LOSS_LIMIT}</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill-rose" style={{ width: `${(currentDayLoss / DAILY_LOSS_LIMIT) * 100}%` }}></div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#94a3b8' }}>
              <span>Remaining Daily Limit:</span>
              <span className="text-emerald" style={{ fontWeight: 700 }}>${remainingDailyLimit}</span>
            </div>
          </div>
        </div>
      </section>

      <div className="main-grid">
        <div className="table-card">
          <h2>Evaluated Trade Performance</h2>
          <table>
            <thead>
              <tr>
                <th>Trade Asset</th>
                <th>Result</th>
                <th style={{ textAlign: 'right' }}>P&L</th>
              </tr>
            </thead>
            <tbody>
              {trades.map((trade) => (
                <tr key={trade.id}>
                  <td style={{ fontWeight: 500, color: '#ffffff' }}>{trade.asset}</td>
                  <td>
                    <span className={trade.pnl >= 0 ? 'badge-win' : 'badge-loss'}>
                      {trade.pnl >= 0 ? 'Win' : 'Loss'}
                    </span>
                  </td>
                  <td style={{ textAlign: 'right', fontWeight: 600 }} className={trade.pnl >= 0 ? 'text-emerald' : 'text-rose'}>
                    {trade.pnl >= 0 ? `+$${trade.pnl}` : `-$${Math.abs(trade.pnl)}`}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="table-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <h2>Product Feature</h2>
            <p style={{ fontSize: '0.8rem', color: '#94a3b8', marginBottom: '1.25rem' }}>Average Winning vs Losing Trade Insights</p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', marginBottom: '0.25rem' }}>
                  <span>Avg Win</span>
                  <span className="text-emerald" style={{ fontWeight: 700 }}>${avgWin.toFixed(0)}</span>
                </div>
                <div className="progress-bar"><div style={{ height: '100%', backgroundColor: '#10b981', width: '100%' }}></div></div>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', marginBottom: '0.25rem' }}>
                  <span>Avg Loss</span>
                  <span className="text-rose" style={{ fontWeight: 700 }}>${avgLoss.toFixed(0)}</span>
                </div>
                <div className="progress-bar"><div style={{ height: '100%', backgroundColor: '#f43f5e', width: `${(avgLoss / (avgWin || 1)) * 100}%` }}></div></div>
              </div>
            </div>
          </div>

          <div style={{ backgroundColor: '#020617', padding: '0.85rem', borderRadius: '0.5rem', border: '1px solid #1e293b', marginTop: '1.5rem' }}>
            <p style={{ fontSize: '0.75rem', color: '#94a3b8' }}>💡 Evaluates risk-to-reward efficiency beyond raw P&L.</p>
          </div>
        </div>
      </div>

    </div>
  );
}