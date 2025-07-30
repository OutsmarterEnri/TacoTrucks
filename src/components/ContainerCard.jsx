import React from 'react';
import './ContainerCard.css';

export default function ContainerCard({ container, onChange, onDelete }) {
  const handleChange = (field, value) => {
    onChange({ ...container, [field]: value });
  };

  return (
    <div className="card">
      <div className="card-header">
        <input
          className="header-input"
          type="text"
          value={container.orario}
          onChange={(e) => handleChange('orario', e.target.value)}
          placeholder="Orario"
        />
        <input
          className="header-input"
          type="text"
          value={container.autista}
          onChange={(e) => handleChange('autista', e.target.value)}
          placeholder="Autista"
        />
        <input
          className="header-input"
          type="text"
          value={container.bilico}
          onChange={(e) => handleChange('bilico', e.target.value)}
          placeholder="Bilico"
        />
        <button className="delete-btn" onClick={onDelete}>🗑</button>
      </div>

      <textarea
        className="card-body"
        value={container.testo}
        onChange={(e) => handleChange('testo', e.target.value)}
        placeholder="Scrivi qui..."
      />

      <textarea
        className="card-footer"
        value={container.note}
        onChange={(e) => handleChange('note', e.target.value)}
        placeholder="Note..."
      />
    </div>
  );
}
