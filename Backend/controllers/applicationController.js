import Application from '../models/Application.js';

// Create new application
export const createApplication = async (req, res) => {
    const { name, income, expenses, assets, liabilities } = req.body;
    const application = new Application({ name, income, expenses, assets, liabilities });

    try {
        const newApplication = await application.save();
        res.status(201).json(newApplication);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Get all applications
export const getAllApplications = async (req, res) => {
    try {
        const applications = await Application.find();
        res.json(applications);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get a single application by ID
export const getApplicationById = async (req, res) => {
    try {
        const application = await Application.findById(req.params.id);
        if (!application) {
            return res.status(404).json({ message: 'Application not found' });
        }
        res.json(application);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Update application by ID
export const updateApplicationById = async (req, res) => {
    try {
        const application = await Application.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!application) {
            return res.status(404).json({ message: 'Application not found' });
        }
        res.json(application);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete application by ID
export const deleteApplicationById = async (req, res) => {
    try {
        const application = await Application.findByIdAndDelete(req.params.id);
        if (!application) {
            return res.status(404).json({ message: 'Application not found' });
        }
        res.json({ message: 'Application deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
