import React from 'react';

const RetroModal = ({ isOpen, message, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="pixel-modal">
        {/* Header (Yellow Warning Bar) */}
        <div className="pixel-modal-header">
          <span>⚠️ SYSTEM ALERT</span>
          <span className="close-x" onClick={onClose}>X</span>
        </div>

        {/* Content */}
        <div className="pixel-modal-body">
          {message}
        </div>

        {/* Footer (OK Button) */}
        <div className="pixel-modal-footer">
          <button className="pixel-btn" onClick={onClose} style={{background: "var(--neon-yellow)"}}>
            ACKNOWLEDGE
          </button>
        </div>
      </div>
    </div>
  );
};

export default RetroModal;