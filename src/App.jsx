import React, { useState } from 'react';
import ContainerCard from './components/ContainerCard';
import './App.css';

const App = () => {
  const [containers, setContainers] = useState([]);

  const addContainer = () => {
    const newContainer = {
      orario: '',
      autista: '',
      bilico: '',
      testo: '',
      note: ''
    };
    setContainers([...containers, newContainer]);
  };

  const updateContainer = (index, updatedContainer) => {
    const updatedList = [...containers];
    updatedList[index] = updatedContainer;
    setContainers(updatedList);
  };

  const deleteContainer = (index) => {
    const updatedList = containers.filter((_, i) => i !== index);
    setContainers(updatedList);
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Dashboard</h1>
      <button className="add-btn" onClick={addContainer}>+ Aggiungi Riquadro</button>
      <div className="card-list">
        {containers.map((container, index) => (
          <ContainerCard
            key={index}
            container={container}
            onChange={(updated) => updateContainer(index, updated)}
            onDelete={() => deleteContainer(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
