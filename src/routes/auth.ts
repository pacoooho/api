import {Router} from 'express';
import {TokenValidacion} from '../libs/verifyToken';
import {signin,signup,profile, testing} from '../controllers/auth.controller';
const router: Router = Router();
import { getPhotos, createPhoto, deletePhoto, getPhoto, updatePhoto } 
from '../controllers/photo.controller'

import imagesUpload from '../libs/multerAtlas'
import { getFileAtlas } from '../controllers/downLoad';

router.post('/signin', signin);
router.post('/signup', signup);

router.route('/photos')
 .get(getPhotos) 
  // .post( upload.single('image'), createPhoto);
 .post(imagesUpload, getFileAtlas, createPhoto);

router.route('/photos/:id')
 .get(getPhoto)
 .delete(deletePhoto)
 .put(updatePhoto);

router.get('/tasks',TokenValidacion, profile);
router.get('/private-tasks',TokenValidacion, testing);

export default router;