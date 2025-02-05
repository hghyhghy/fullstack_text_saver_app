import { Repository } from 'typeorm';
import { Post } from './posts.entity';
export declare class PostsService {
    private postRepository;
    constructor(postRepository: Repository<Post>);
    create(title: string, description: string): Promise<Post>;
    getAllPosts(): Promise<Post[]>;
    getLastPosts(): Promise<Post | null>;
    deletePost(id: number): Promise<import("typeorm").DeleteResult>;
    updatepost(id: number, title: string, description: string): Promise<Post>;
}
