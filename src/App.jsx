import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ApplicationList from './components/ApplicationList';
import ApplicationForm from './components/ApplicationFrom';
import {mockApplications} from './mockData'

const App = () => {
    const [applications, setApplications] = useState([]);
    const [editing, setEditing] = useState(false);
    const [currentApplication, setCurrentApplication] = useState(null);

    //useEffect(() => {
        // Replace with your actual API call or mock data path
        //const fetchApplications = async () => {
            //try {
               // const res = await axios.get('./mockData');
               // setApplications(res.data);
          //  } catch (err) {
              //  console.error(err);
          //  }
       // };
        //fetchApplications();
    //}, []);

    const addApplication = (newApplication) => {
        setApplications([...applications, { _id: Date.now().toString(), ...newApplication }]);
    };

    const updateApplication = (id, updatedApplication) => {
        setApplications(
            applications.map(app => (app._id === id ? updatedApplication : app))
        );
    };

    const deleteApplication = (id) => {
        setApplications(applications.filter(app => app._id !== id));
        setEditing(false);
        setCurrentApplication(null)
    };

    const startEditing = (application) => {
        setEditing(true);
        setCurrentApplication(application);
    };

    return (
     <div className="applicaton">
        <h1>Your Finance ToolKit</h1>
        <div>
            <ApplicationForm
            addApplication={addApplication}
            updateApplication={updateApplication}
            currentApplication={currentApplication}
            deleteApplication={deleteApplication}
            />
        </div>
        <div>
            <ApplicationList
            applications={applications}
            startEditing={startEditing}
            deleteApplication={deleteApplication}
            />
        </div>


     </div>
    );
};

export default App;
