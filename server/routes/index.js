/*
    COMP229-MIDTERM-301226808-CymanthaDiesel
    Cymantha Diesel
    301226808
    Midterm - Book List 
*/

import { Router } from 'express';

let router = Router();

import {DisplayHomePage} from '../controllers/index.js';

/* Display home page. */
router.get('/', DisplayHomePage);

/* Display home page. */
router.get('/home', DisplayHomePage);

export default router;