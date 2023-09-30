import React, { useState, useEffect } from 'react';
import './App.scss';
import axios from 'axios';
import Header from './components/Header.js';


function App() {
  const [state, setState] = useState ({
    name: '',
    email: '',
    resourceSiteName:'',
    resourceSiteCode:'',
    county:'',
    totalNumberOfInverters:'',
    desiredEnergizationDate: ''
  });

  useEffect(() => {
    getSubmitForm();
  }, []);

  const getSubmitForm = () => {
    axios.get('./api')
    .then((response) => {
      const data = response.data;
      setState({ posts: data });
      console.log('Data received');
    })
    .catch(() => {
      alert('Error retrieving data');
    });
  }

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState({
      ...state,
      [name]: value
    })
  };

  const submit = (event) => {
    event.preventDefault();
    const payload = {
      name: state.name,
      email: state.email,
      resourceSiteCode: state.resourceSiteCode,
      resourceSiteName: state.resourceSiteName,
      county: state.county,
      desiredEnergizationDate: state.desiredEnergizationDate,
      totalNumberOfInverters: state.totalNumberOfInverters
    };
    axios({
      url: '/api/save',
      method: 'POST',
      data: payload
    })
    .then(() => {
      console.log('Data are on their way to the server');
      resetSubmitForm();
      getSubmitForm();
    })
    .catch(() => {
      console.log('Data got lost ups');
    });
  };
  
  const resetSubmitForm = () => {
    setState({
      name: '',
      email: '',
      resourceSiteCode:'',
      resourceSiteName:'',
      county:'',
      desiredEnergizationDate:'',
      totalNumberOfInverters:''
    });
  };

  
  return (
    <>
    <div className="header">
      <Header/>
    </div>
    <div className="formContainer">
      
      <form className="material-form" onSubmit={submit}>
        <div className="material-form__container">
          <input className="material-form__input" type="text" name="name" placeholder="Name" value={state.name} onChange={handleChange} />
          <div class="material-form__focus-animation"></div>
        </div>
        <div className="material-form__container">
          <input className="material-form__input" type="email" name="email" placeholder="Email" pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}" value={state.email} onChange={handleChange} />
          <div class="material-form__focus-animation"></div>
          <p class="material-form__error">Please enter valid email address</p>
        </div>
        <div className="material-form__container">
          <input className="material-form__input" type="text" name="resourceSiteCode" placeholder="Resource Site Code " value={state.resourceSiteCode} onChange={handleChange} />
          <div class="material-form__focus-animation"></div>
        </div>
        <div className="material-form__container">
          <input className="material-form__input" type="text" name="resourceSiteName" placeholder="Resource Site Name" value={state.resourceSiteName} onChange={handleChange} />
          <div class="material-form__focus-animation"></div>
        </div>
        <div className="material-form__container">
          <input className="material-form__input" type="text" name="county" placeholder="County" value={state.county} onChange={handleChange} />
          <div class="material-form__focus-animation"></div>
        </div>
        <div className="material-form__container">
          <input className="material-form__input" type="date" name="desiredEnergizationDate" placeholder="Desired Energization Date" value={state.desiredEnergizationDate} onChange={handleChange} />
          <div class="material-form__focus-animation"></div>
        </div>
        <div className="material-form__container">
          <input className="material-form__input" type="number" name="totalNumberOfInverters" placeholder="Total number of Inverters" value={state.totalNumberOfInverters} onChange={handleChange} />
          <div class="material-form__focus-animation"></div>
        </div>
        
          <button className="material-form__button">Submit</button>
      </form>
    </div>
    </>
  );
}

export default App;
