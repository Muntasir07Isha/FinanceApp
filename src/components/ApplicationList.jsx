import React from 'react';

const ApplicationList = ({ applications, startEditing, deleteApplication }) => {
    if (!Array.isArray(applications)) {
        console.error('Expected applications to be an array but got:', applications);
        return null;
    }

    return (
        <div className='application-list'>
            {applications.length > 0 ? (
                applications.map(application => (
                    <div key={application._id}>
                        <h2>{application.name}</h2>
                        <p>Income: {application.income}</p>
                        <p>Expenses: {application.expenses}</p>
                        <p>Assets: {application.assets}</p>
                        <p>Liabilities: {application.liabilities}</p>
                        <button onClick={() => startEditing(application)}>Edit</button>
                        <button onClick={() => deleteApplication(application._id)}>Delete</button>
                    </div>
                ))
            ) : (
                <p>No applications available</p>
            )}
        </div>
    );
};

export default ApplicationList;
