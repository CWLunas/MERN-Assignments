import React, { useState } from 'react';
import Form from './components/hookForm';

const App = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData,  [name]: value});
  };

  return (
    <div >
      <Form formData={formData} handleChange={handleChange} />
    </div>
  );
};

export default App;
