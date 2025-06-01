import express from 'express';
import {
    createBorrow,
    getBorrow,
    getBorrowById,
    deleteBorrow,
    updateBorrow,
} from '../controller/borrow.controller.js';


const borrowRouter = express.Router();

borrowRouter.post('/', createBorrow);
borrowRouter.get('/', getBorrow);
borrowRouter.get('/:id', getBorrowById);
borrowRouter.put('/:id', updateBorrow);
borrowRouter.delete('/:id', deleteBorrow);

export default borrowRouter;