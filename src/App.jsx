import { useState } from 'react'
import data from './data/comparisons.json'
import './App.css'

const { pairs } = data

function TraitBadge({ trait }) {
  return <span className="trait-badge">{trait}</span>
}

function ComparisonCard({ pair }) {
  return (
    <div className="comparison-card">
      <div className="pair-columns">
        <div className="pair-column instrument-col">
          <div className="pair-emoji">{pair.instrument.emoji}</div>
          <h2 className="pair-name">{pair.instrument.name}</h2>
          <p className="pair-description">{pair.instrument.description}</p>
          <div className="trait-list">
            {pair.instrument.traits.map((t) => (
              <TraitBadge key={t} trait={t} />
            ))}
          </div>
        </div>

        <div className="versus-badge">↔</div>

        <div className="pair-column language-col">
          <div className="pair-emoji">{pair.language.emoji}</div>
          <h2 className="pair-name">{pair.language.name}</h2>
          <p className="pair-description">{pair.language.description}</p>
          <div className="trait-list">
            {pair.language.traits.map((t) => (
              <TraitBadge key={t} trait={t} />
            ))}
          </div>
        </div>
      </div>

      <div className="comparisons-section">
        <h3>Why they&apos;re alike</h3>
        <ul className="comparisons-list">
          {pair.comparisons.map((c, i) => (
            <li key={i}>{c}</li>
          ))}
        </ul>
      </div>

      <div className="why-love">
        <h3>Why you&apos;ll love both</h3>
        <p>{pair.whyYoullLoveBoth}</p>
      </div>
    </div>
  )
}

function SelectionScreen({ onSelect }) {
  const [mode, setMode] = useState(null)
  const [selected, setSelected] = useState(null)

  const instruments = pairs.map((p) => ({ name: p.instrument.name, emoji: p.instrument.emoji }))
  const languages = pairs.map((p) => ({ name: p.language.name, emoji: p.language.emoji }))

  function handleModeChange(newMode) {
    setMode(newMode)
    setSelected(null)
  }

  function handleGo() {
    if (!selected) return
    const pair = mode === 'instrument'
      ? pairs.find((p) => p.instrument.name === selected)
      : pairs.find((p) => p.language.name === selected)
    onSelect(pair)
  }

  const items = mode === 'instrument' ? instruments : languages

  return (
    <div className="selection-screen">
      <header className="app-header">
        <div className="header-icons">🎵 ↔ 💻</div>
        <h1>Instruments &amp; Languages</h1>
        <p className="subtitle">
          Discover the surprising parallels between musical instruments and programming languages.
          Tell us your favourite and we&apos;ll show you what you have in common with the other world.
        </p>
      </header>

      <section className="mode-selector">
        <p className="prompt">What are you passionate about?</p>
        <div className="mode-buttons">
          <button
            className={`mode-btn${mode === 'instrument' ? ' active' : ''}`}
            onClick={() => handleModeChange('instrument')}
          >
            🎸 Musical Instrument
          </button>
          <button
            className={`mode-btn${mode === 'language' ? ' active' : ''}`}
            onClick={() => handleModeChange('language')}
          >
            💻 Programming Language
          </button>
        </div>
      </section>

      {mode && (
        <section className="item-selector">
          <p className="prompt">
            Choose your favourite {mode === 'instrument' ? 'instrument' : 'programming language'}:
          </p>
          <div className="item-grid">
            {items.map((item) => (
              <button
                key={item.name}
                className={`item-btn${selected === item.name ? ' active' : ''}`}
                onClick={() => setSelected(item.name)}
              >
                <span className="item-emoji">{item.emoji}</span>
                <span className="item-name">{item.name}</span>
              </button>
            ))}
          </div>
          <button
            className="go-btn"
            disabled={!selected}
            onClick={handleGo}
          >
            Show me the comparison →
          </button>
        </section>
      )}
    </div>
  )
}

function ResultScreen({ pair, onBack }) {
  return (
    <div className="result-screen">
      <header className="app-header">
        <div className="header-icons">🎵 ↔ 💻</div>
        <h1>Instruments &amp; Languages</h1>
      </header>
      <button className="back-btn" onClick={onBack}>← Back to selection</button>
      <ComparisonCard pair={pair} />
    </div>
  )
}

export default function App() {
  const [selectedPair, setSelectedPair] = useState(null)

  return selectedPair
    ? <ResultScreen pair={selectedPair} onBack={() => setSelectedPair(null)} />
    : <SelectionScreen onSelect={setSelectedPair} />
}
