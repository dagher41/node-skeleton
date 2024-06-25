
import { Router, Request, Response, NextFunction } from 'express';
import * as db from '../../database';
import { dataSource } from '../../../data-source';

const postRepository = dataSource.getRepository(db.Post)

const router = Router();

router.get('/posts', async (req: Request, res: Response, _next: NextFunction) => {
    res.json(await postRepository.find());
});

router.get('/post/:id', async (req: Request, res: Response, _next: NextFunction) => {
    const post = await postRepository
        .createQueryBuilder("posts")
        .where({ id: req.params.id })
        .getOne()
    if (!post) {
        return res.status(404).json({ error: 'missing post' })
    }
    return res.status(200).json(post);
})

router.post('/posts', async (req: Request, res: Response, _next: NextFunction) => {
    const post = new db.Post();
    post.body = req.body.body
    post.title = req.body.title;
    post.isActive = true;
    await postRepository.save(post);
    res.json(post);
})

router.put('/post/:id', async (req: Request, res: Response, _next: NextFunction) => {
    const post = await postRepository
        .createQueryBuilder("posts")
        .where({ id: req.params.id })
        .getOne()
    if (!post) {
        return res.status(404).json({ error: 'missing post' })
    }

    post.body = req.body.body
    post.title = req.body.title;
    post.isActive = req.body.isActive;
    await postRepository.save(post);
    res.json(post);
})

export default router;