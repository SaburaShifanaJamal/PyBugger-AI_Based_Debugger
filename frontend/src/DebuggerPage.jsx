import React, { useState } from 'react';
import { debugCode, explainError } from './services/api';
import RetroModal from './RetroModel'; 

const DebuggerPage = () => {
  const [inputCode, setInputCode] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [explanation, setExplanation] = useState(null);
  const [explainingLine, setExplainingLine] = useState(null);

  // [NEW STATE FOR MODAL]
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleDebug = async () => {
    if (!inputCode) return;
    setLoading(true);
    setResult(null);
    setExplanation(null);
    
    try {
      const data = await debugCode(inputCode);
      
      // [CHECK FOR SYSTEM WARNING]
      if (data && data.system_warning) {
        setModalMessage(data.system_warning);
        setShowModal(true);
      }

      setResult(data);
    } catch (error) {
      console.error("Debug failed:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleExplain = async (line, issue, msg) => {
    setExplainingLine(line);
    const data = await explainError(line, issue, msg);
    setExplanation({ line, text: data.explanation });
    setExplainingLine(null);
  };

  return (
    <div className="app-container">
      {/* RETRO MODAL COMPONENT */}
      <RetroModal 
        isOpen={showModal} 
        message={modalMessage} 
        onClose={() => setShowModal(false)} 
      />

      <header className="header">
        <div className="brand">
          <h1>👾 PyBugger</h1>
          <div style={{color: "var(--neon-green)"}}>SYSTEM: ONLINE</div>
        </div>
        <div className="tagline">&gt; AI BASED DEBUGGER :: MAKING CODING UNDERSTANDABLE_</div>
      </header>

      <div className="workspace">
         {/* LEFT PANEL */}
        <div className="panel">
          <div className="panel-header">PLAYER 1 INPUT</div>
          <textarea
            value={inputCode}
            onChange={(e) => setInputCode(e.target.value)}
            placeholder="# INSERT BROKEN CODE HERE..."
            spellCheck="false"
          />
          <div className="debug-btn-container">
            <button className="pixel-btn" onClick={handleDebug} disabled={loading}>
              {loading ? "LOADING..." : "▶ PRESS START (DEBUG)"}
            </button>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="panel right-split">
          <div className="error-section">
            {!result ? (
              <div style={{textAlign: "center", paddingTop: "50px", opacity: 0.5}}>
                WAITING FOR INPUT...
              </div>
            ) : result.errors.length === 0 ? (
              <div style={{textAlign: "center", color: "var(--neon-green)", paddingTop: "20px"}}>
                *** HIGH SCORE! NO BUGS FOUND ***
              </div>
            ) : (
              result.errors.map((err, idx) => (
                <div key={idx} className="error-card">
                  <div className="error-title">
                    GAME OVER @ LINE {err.line}: {err.issue.toUpperCase()}
                  </div>
                  <div className="error-body">
                    {err.message}
                    <br/>
                    <button 
                      className="pixel-btn small"
                      onClick={() => handleExplain(err.line, err.issue, err.message)}
                    >
                      {explainingLine === err.line ? "LOADING..." : "? HINT"}
                    </button>
                    {explanation && explanation.line === err.line && (
                      <div style={{marginTop: "10px", color: "var(--neon-blue)", borderTop: "2px dashed var(--neon-blue)", paddingTop: "5px"}}>
                        &gt; AI: {explanation.text}
                      </div>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="fixed-code-section">
            <div className="panel-header" style={{background: "var(--neon-green)", color: "black"}}>
              FIXED CODE OUTPUT
            </div>
            <pre>{result ? result.fixed_code : ""}</pre>
          </div>
        </div>
      </div>

      <footer className="caution-footer">
        ⚠️ CAUTION: PRODUCT IN BETA. OUTPUT MAY CONTAIN GLITCHES. ALWAYS VERIFY YOUR CODE.
      </footer>
    </div>
  );
};

export default DebuggerPage;