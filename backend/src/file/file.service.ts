import { Injectable } from '@nestjs/common';
import { createWriteStream, existsSync, mkdirSync, readFileSync } from 'fs';
import { join } from 'path';

@Injectable()
export class FileService {

    private uploadPath = join(__dirname,'..','upload')
    
    constructor(){

        if (!existsSync(this.uploadPath)){

            mkdirSync(this.uploadPath)
        }
    }

    saveFile(file:Express.Multer.File){
     
        const filepath  = join(this.uploadPath,file.originalname)
        const writeStream  =  createWriteStream(filepath)
        writeStream.write(file.buffer)
        writeStream.end()
        return { message: 'File uploaded successfully', fileName: file.originalname };

    }

    getFile(fileName:string){

        const filePath = join(this.uploadPath,fileName)

        if (existsSync(filePath)){

            return readFileSync(filePath)
        }

        return null;
    }
}