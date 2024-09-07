import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ApplicationList from './components/ApplicationList';
import ApplicationForm from './components/ApplicationFrom';
import {mockApplications} from './mockData'

const App = () => {
    const [applications, setApplications] = useState([]);
    const [editing, setEditing] = useState(false);
    const [currentApplication, setCurrentApplication] = useState(null);

    useEffect(() => {
        // Calling Api
        const fetchApplications = async () => {
            try {
                const res = await axios.get('http://localhost:4000/application');
               setApplications(res.data);
           } catch (err) {
               console.error(err);
            }
        };
        fetchApplications();
    }, []);

    const addApplication = async(newApplication) => {
        try{
            const res = await axios.post('http://localhost:4000/application',newApplication)
            setApplications([...applications, res.data]);   
        }
        catch(err){
            console.error('Error creating application:', err);
        }
    
    };

    const updateApplication = async(id, updatedApplication) => {
        try{   
            const res = await axios.put(`http://localhost:4000/application/${id}`, updatedApplication);
            setApplications(applications.map(app => (app._id === id ? updatedApplication : app)));
        }
        catch(err){   
            console.error('Error updating application:', err);
        }
        };



    const deleteApplication =async (id) => {
       try{
        await axios.delete(`http://localhost:4000/application/${id}`)
        setApplications(applications.filter(app => app._id !== id));
        setEditing(false);
        setCurrentApplication(null)
       }
       catch(err){
        console.error("error deleting application", err)
       }
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
