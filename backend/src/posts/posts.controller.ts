
import { Controller, Get, Post, Body, Query, Delete, Param, NotFoundException, Put } from '@nestjs/common';
import { PostsService } from './posts.service';
import { Post as PostEntity } from './posts.entity';
import { title } from 'process';

@Controller('post')
export class PostsController {

    constructor(private readonly PostsService:PostsService){}

    @Post()
    create(@Body() body:{title:string,description:string}){

        return this.PostsService.create(body.title,body.description)
    }

    @Get()
    async findAll(@Query('last') last:string){


        if (last === 'true'){
            
           return this.PostsService.getLastPosts()
        }
        else{

            return this.PostsService.getAllPosts()
        }
    }

    @Delete(':id')
    async  deletefunc(@Param('id') id:number){
     
        const result =  await this.PostsService.deletePost(id)
        if (!result.affected) {
            throw new NotFoundException (`Post with ID ${id} not found`);
          }
          return { message: 'Post deleted successfully' };

    }

    @Put(':id')
    async update(

        @Param('id') id:number,
        @Body('title') title:string,
        @Body('description') description:string
    ) {

        return this.PostsService.updatepost(id,title,description)
    }
}