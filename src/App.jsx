import React, { useState } from 'react';
import Form from './components/Form/Form';
import Card from './components/Card/Card';

function App() {
  const [submittedData, setSubmittedData] = useState(null);

  const handleFormSubmit = (data) => {
    setSubmittedData(data);

  };

  return (
    <div className="App">
      <Form onFormSubmit={handleFormSubmit} />
      {submittedData && <Card data={submittedData} />}
    </div>
  );
}

export default App;
