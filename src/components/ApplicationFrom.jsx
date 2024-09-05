import React, { useEffect, useState } from 'react';

const ApplicationForm = ({ addApplication,updateApplication,currentApplication }) => {
    const [formData, setFormData] = useState({
        name: '',
        income: '',
        expenses: '',
        assets: '',
        liabilities: ''
    });

    const [errors, setErrors] = useState({});
    useEffect(()=>{
        if (currentApplication){
            setFormData(currentApplication)
        }
    },[currentApplication])


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
   
    const validateForm = ()=>{
        let formErrors = {};
        if (!formData.name) formErrors.name = 'Name is required';
        if (formData.income <= 0) formErrors.income = 'There need to be Valid Number Mate!';
        if (formData.expenses < 0) formErrors.expenses = 'Even broke have positive expenses!';
        if (formData.assets < 0) formErrors.assets = 'Assets cannot be negative';
        if (formData.liabilities < 0) formErrors.liabilities = 'Liabilities cannot be negative';
            return formErrors;
    } 


    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length ===0){
            if(currentApplication){
                updateApplication(currentApplication._id,formData)
                    setEditing(false);
            }else{        
               addApplication(formData);
            }
                setFormData({ name: '', income: '', expenses: '', assets: '', liabilities: '' });
        setErrors({});
        }else{
            setErrors(formErrors);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
            />
    {errors.name && <p className="error">{errors.name}</p>}

            <input
                type="number"
                name="income"
                value={formData.income}
                onChange={handleChange}
                placeholder="Income"
                required
            />
   {errors.income && <p className="error">{errors.income}</p>}

            <input
                type="number"
                name="expenses"
                value={formData.expenses}
                onChange={handleChange}
                placeholder="Expenses"
                required
            />
       {errors.expenses && <p className="error">{errors.expenses}</p>}
    
            <input
                type="number"
                name="assets"
                value={formData.assets}
                onChange={handleChange}
                placeholder="Assets"
                required
            />

{errors.assets && <p className="error">{errors.assets}</p>}

            <input
                type="number"
                name="liabilities"
                value={formData.liabilities}
                onChange={handleChange}
                placeholder="Liabilities"
                required
            />
 {errors.liabilities && <p className="error">{errors.liabilities}</p>}

            <button type="submit">
            {currentApplication ? 'Update Application' : 'Add Application'}
            </button>
        </form>
    );
};

export default ApplicationForm;
