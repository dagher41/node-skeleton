import { Router } from 'express';
import postsRoutes from './posts/routes'

const router = Router();
router.use('/api/', postsRoutes)

export default router;