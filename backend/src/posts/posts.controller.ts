
import { Controller, Get, Post, Body } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('post')
export class PostsController {

    constructor(private readonly PostsService:PostsService){}

    @Post()
    create(@Body() body:{title:string,description:string}){

        return this.PostsService.create(body.title,body.description)
    }

    @Get()
    findAll(){

        return this.PostsService.findAll()
    }
}