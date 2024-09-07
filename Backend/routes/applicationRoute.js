import express from 'express';
import { 
    createApplication, 
    getAllApplications, 
    getApplicationById, 
    updateApplicationById, 
    deleteApplicationById 
} from '../controllers/applicationController.js';

const router = express.Router();

// Create new application
router.post('/', createApplication);

// Get all applications
router.get('/', getAllApplications);

// Get a single application by ID
router.get('/:id', getApplicationById);

// Update application by ID
router.put('/:id', updateApplicationById);

// Delete application by ID
router.delete('/:id', deleteApplicationById);

export default router;
