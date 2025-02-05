import { FileService } from './file.service';
import { Response } from 'express';
export declare class FileController {
    private readonly fileService;
    constructor(fileService: FileService);
    UploadedFile(file: Express.Multer.File): {
        message: string;
        fileName: string;
    };
    downloadFile(fileName: string, res: Response): void;
}
