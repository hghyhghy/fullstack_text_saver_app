
import { Controller, Get, Param, Post, UploadedFile, UseInterceptors, Res } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { FileService } from './file.service';
import { Response } from 'express';

@Controller('file')

export class FileController {

    constructor(private readonly fileService:FileService){}

    @Post('upload')
    @UseInterceptors(FileInterceptor('file'))
    UploadedFile(@UploadedFile () file:Express.Multer.File){

        return this.fileService.saveFile(file)
    }

    @Get('download/:fileName')
    downloadFile(@Param('fileName') fileName:string , @Res()  res:Response){

        const fileData  =  this.fileService.getFile(fileName)
        if (fileData){

            res.setHeader('Content-Disposition', `attachment; filename=${fileName}`);
            res.send(fileData)

        } else {

            res.status(404).json({message:"File not found"})
        }
    }
}
