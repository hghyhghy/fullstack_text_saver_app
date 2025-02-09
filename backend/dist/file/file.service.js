"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileService = void 0;
const common_1 = require("@nestjs/common");
const fs_1 = require("fs");
const path_1 = require("path");
let FileService = class FileService {
    constructor() {
        this.uploadPath = (0, path_1.join)(__dirname, '..', 'upload');
        if (!(0, fs_1.existsSync)(this.uploadPath)) {
            (0, fs_1.mkdirSync)(this.uploadPath);
        }
    }
    saveFile(file) {
        const filepath = (0, path_1.join)(this.uploadPath, file.originalname);
        const writeStream = (0, fs_1.createWriteStream)(filepath);
        writeStream.write(file.buffer);
        writeStream.end();
        return { message: 'File uploaded successfully', fileName: file.originalname };
    }
    getFile(fileName) {
        const filePath = (0, path_1.join)(this.uploadPath, fileName);
        if ((0, fs_1.existsSync)(filePath)) {
            return (0, fs_1.readFileSync)(filePath);
        }
        return null;
    }
};
exports.FileService = FileService;
exports.FileService = FileService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], FileService);
//# sourceMappingURL=file.service.js.map