import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './posts.entity';



@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private postRepository: Repository<Post>,
  ) {}

  async create(title: string, description: string) {
    const post = this.postRepository.create({ title, description });
    return this.postRepository.save(post);
  }

  async getAllPosts() {
    return this.postRepository.find();
  }

  async getLastPosts(): Promise<Post | null> {
    return this.postRepository.findOne({
      where: {}, // ✅ Ensures TypeORM finds a row
      order: { createdAt: 'DESC' }, // Sort by latest createdAt
    });
  
}

  async deletePost(id:number){

    return this.postRepository.delete(id)
  }

  async updatepost(id:number , title:string, description:string){

    const post   =  await this.postRepository.findOne({where:{id}})
    if (!post) {
      throw new Error('Post not found');
    }
    post.title = title
    post.description = description
    return this.postRepository.save(post)
    
  }
}