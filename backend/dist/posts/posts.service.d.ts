import { Repository } from 'typeorm';
import { Post } from './posts.entity';
export declare class PostsService {
    private postRepository;
    constructor(postRepository: Repository<Post>);
    create(title: string, description: string): Promise<Post>;
    findAll(): Promise<Post[]>;
}
