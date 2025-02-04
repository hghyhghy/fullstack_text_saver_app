import { PostsService } from './posts.service';
export declare class PostsController {
    private readonly PostsService;
    constructor(PostsService: PostsService);
    create(body: {
        title: string;
        description: string;
    }): Promise<import("./posts.entity").Post>;
    findAll(): Promise<import("./posts.entity").Post[]>;
}
