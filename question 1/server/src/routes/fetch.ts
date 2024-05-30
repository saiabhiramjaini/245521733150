import { Router } from 'express';
import fetchController from '../controllers/fetch';
const fetchRouter: Router = Router();
const {getToken} = fetchController

fetchRouter.get('/companies/:companyname/categories/:categoryname/products', getToken)

export default fetchRouter;