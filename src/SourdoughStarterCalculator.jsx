// SourdoughStarterCalculator.jsx
import React, { useState } from 'react';

const TIME_PRESETS = [
  { label: '4 to 6 hours', ratio: [1, 1, 1] },
  { label: '6 to 8 hours', ratio: [1, 2, 2] },
  { label: '8 to 10 hours', ratio: [1, 3, 3] },
  { label: '10 to 12 hours', ratio: [1, 4, 4] },
  { label: '12 to 14 hours', ratio: [1, 5, 5] },
  { label: '16 to 24 hours', ratio: [1, 10, 10] },
];

export default function SourdoughStarterCalculator() {
  const [calcMode, setCalcMode] = useState('custom'); // 'custom' or 'time'
  const [totalGrams, setTotalGrams] = useState(150);
  
  // Custom ratio inputs: Starter : Flour : Water
  const [starterRatio, setStarterRatio] = useState(1);
  const [flourRatio, setFlourRatio] = useState(5);
  const [waterRatio, setWaterRatio] = useState(5);

  // Time preset index
  const [selectedTimeIdx, setSelectedTimeIdx] = useState(4); // default 12-14 hrs (1:5:5)

  // Determine active ratio values
  const activeRatio = calcMode === 'custom' 
    ? [Number(starterRatio) || 0, Number(flourRatio) || 0, Number(waterRatio) || 0]
    : TIME_PRESETS[selectedTimeIdx].ratio;

  const [sPart, fPart, wPart] = activeRatio;
  const totalParts = sPart + fPart + wPart;

  // Calculate weights rounded to 1 decimal point (or integer)
  const starterWeight = totalParts > 0 ? ((totalGrams * sPart) / totalParts).toFixed(1) : 0;
  const flourWeight = totalParts > 0 ? ((totalGrams * fPart) / totalParts).toFixed(1) : 0;
  const waterWeight = totalParts > 0 ? ((totalGrams * wPart) / totalParts).toFixed(1) : 0;

  return (
    <section style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Starter Feeding Calculator</h2>
        
        {/* Mode Switcher */}
        <div style={styles.tabs}>
          <button
            type="button"
            onClick={() => setCalcMode('custom')}
            style={{ ...styles.tabBtn, ...(calcMode === 'custom' ? styles.activeTab : {}) }}
          >
            Custom Ratio
          </button>
          <button
            type="button"
            onClick={() => setCalcMode('time')}
            style={{ ...styles.tabBtn, ...(calcMode === 'time' ? styles.activeTab : {}) }}
          >
            By Target Time
          </button>
        </div>

        {/* Total Grams Needed */}
        <div style={styles.fieldGroup}>
          <label style={styles.label}>
            Total Starter Needed (grams)
            <input
              type="number"
              min="1"
              value={totalGrams}
              onChange={(e) => setTotalGrams(Math.max(0, Number(e.target.value)))}
              style={styles.input}
            />
          </label>
        </div>

        {/* Mode-specific Inputs */}
        {calcMode === 'custom' ? (
          <div style={styles.fieldGroup}>
            <span style={styles.label}>Feeding Ratio (Starter : Flour : Water)</span>
            <div style={styles.ratioRow}>
              <div style={styles.ratioItem}>
                <span style={styles.subLabel}>Starter</span>
                <input
                  type="number"
                  min="0.1"
                  step="0.5"
                  value={starterRatio}
                  onChange={(e) => setStarterRatio(e.target.value)}
                  style={styles.input}
                />
              </div>
              <span style={styles.colon}>:</span>
              <div style={styles.ratioItem}>
                <span style={styles.subLabel}>Flour</span>
                <input
                  type="number"
                  min="0.1"
                  step="0.5"
                  value={flourRatio}
                  onChange={(e) => setFlourRatio(e.target.value)}
                  style={styles.input}
                />
              </div>
              <span style={styles.colon}>:</span>
              <div style={styles.ratioItem}>
                <span style={styles.subLabel}>Water</span>
                <input
                  type="number"
                  min="0.1"
                  step="0.5"
                  value={waterRatio}
                  onChange={(e) => setWaterRatio(e.target.value)}
                  style={styles.input}
                />
              </div>
            </div>
          </div>
        ) : (
          <div style={styles.fieldGroup}>
            <label style={styles.label}>
              Desired Peak Time (at ~75°F / 24°C)
              <select
                value={selectedTimeIdx}
                onChange={(e) => setSelectedTimeIdx(Number(e.target.value))}
                style={styles.select}
              >
                {TIME_PRESETS.map((preset, idx) => (
                  <option key={idx} value={idx}>
                    {preset.label} (Ratio 1:{preset.ratio[1]}:{preset.ratio[2]})
                  </option>
                ))}
              </select>
            </label>
          </div>
        )}

        {/* Output Results */}
        <div style={styles.resultsBox}>
          <h3 style={styles.resultsHeading}>Ingredients to mix:</h3>
          <div style={styles.resultItem}>
            <span>Active Starter:</span>
            <strong>{starterWeight} g</strong>
          </div>
          <div style={styles.resultItem}>
            <span>Flour:</span>
            <strong>{flourWeight} g</strong>
          </div>
          <div style={styles.resultItem}>
            <span>Water:</span>
            <strong>{waterWeight} g</strong>
          </div>
        </div>

        <p style={styles.footnote}>
          Calculated for standard room temperature (~75°F / 24°C). Warmer ambient temperatures cause starters to peak faster; cooler rooms slow fermentation down.
        </p>
      </div>
    </section>
  );
}

const styles = {
  container: {
    padding: '20px',
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    boxSizing: 'border-box'
  },
  card: {
    width: '100%',
    maxWidth: '460px',
    padding: '24px',
    borderRadius: '12px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
    backgroundColor: '#ffffff',
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
    color: '#2d3748',
  },
  title: {
    margin: '0 0 16px 0',
    fontSize: '20px',
    fontWeight: '700',
    textAlign: 'center',
  },
  tabs: {
    display: 'flex',
    gap: '8px',
    marginBottom: '20px',
  },
  tabBtn: {
    flex: 1,
    padding: '10px 14px',
    border: '1px solid #e2e8f0',
    background: '#f8fafc',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '14px',
    color: '#64748b',
    transition: 'all 0.2s',
  },
  activeTab: {
    background: '#e07a5f',
    borderColor: '#e07a5f',
    color: '#ffffff',
  },
  fieldGroup: {
    marginBottom: '16px',
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    fontWeight: '600',
    fontSize: '14px',
    gap: '6px',
    marginBottom: '6px',
  },
  subLabel: {
    fontSize: '12px',
    color: '#64748b',
    marginBottom: '4px',
  },
  input: {
    padding: '10px',
    borderRadius: '6px',
    border: '1px solid #cbd5e1',
    fontSize: '15px',
    width: '100%',
    boxSizing: 'border-box',
  },
  select: {
    padding: '10px',
    borderRadius: '6px',
    border: '1px solid #cbd5e1',
    fontSize: '15px',
    width: '100%',
    boxSizing: 'border-box',
    backgroundColor: '#fff',
  },
  ratioRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  ratioItem: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  colon: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginTop: '16px',
    color: '#94a3b8',
  },
  resultsBox: {
    marginTop: '20px',
    padding: '16px',
    backgroundColor: '#f8fafc',
    borderRadius: '8px',
    border: '1px solid #e2e8f0',
  },
  resultsHeading: {
    margin: '0 0 10px 0',
    fontSize: '15px',
    fontWeight: '700',
    color: '#1e293b',
  },
  resultItem: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '6px 0',
    borderBottom: '1px dashed #e2e8f0',
    fontSize: '14px',
  },
  footnote: {
    fontSize: '11px',
    color: '#94a3b8',
    marginTop: '12px',
    lineHeight: '1.4',
    textAlign: 'center',
  },
};
