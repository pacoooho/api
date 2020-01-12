import {Router} from 'express';
import {TokenValidacion} from '../libs/verifyToken';
import {signin,signup,profile, testing} from '../controllers/auth.controller';
const router: Router = Router();

 router.post('/signup', signup);
 router.post('/signin', signin);
 router.get('/tasks',TokenValidacion, profile);
 router.get('/private-tasks',TokenValidacion, testing);

export default router;