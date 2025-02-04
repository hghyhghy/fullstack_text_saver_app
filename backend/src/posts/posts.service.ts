
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './posts.entity';


@Injectable()
export class PostsService {

    constructor(

        @InjectRepository(Post)
        private postRepository:Repository<Post>
    ) {}

    async create(title:string,description:string){

        const post = this.postRepository.create({title,description})
        return this.postRepository.save(post)
    }

    async findAll(){

        return this.postRepository.find()
    }


}