export declare class FileService {
    private uploadPath;
    constructor();
    saveFile(file: Express.Multer.File): {
        message: string;
        fileName: string;
    };
    getFile(fileName: string): Buffer<ArrayBufferLike> | null;
}
