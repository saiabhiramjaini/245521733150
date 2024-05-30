import { Router } from 'express';
import fetchController from '../controllers/fetch';
const fetchRouter: Router = Router();
const {getProducts} = fetchController

fetchRouter.get('/companies/:companyname/categories/:categoryname/products', getProducts);


export default fetchRouter;