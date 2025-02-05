import { PostsService } from './posts.service';
import { Post as PostEntity } from './posts.entity';
export declare class PostsController {
    private readonly PostsService;
    constructor(PostsService: PostsService);
    create(body: {
        title: string;
        description: string;
    }): Promise<PostEntity>;
    findAll(last: string): Promise<PostEntity | PostEntity[] | null>;
    deletefunc(id: number): Promise<{
        message: string;
    }>;
    update(id: number, title: string, description: string): Promise<PostEntity>;
}
