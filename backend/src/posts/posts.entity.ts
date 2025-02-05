

import { Entity, PrimaryGeneratedColumn, Column,CreateDateColumn } from 'typeorm';

@Entity()
export class Post {

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    title:string

    @Column('text')
    description:string

    @CreateDateColumn({ type: 'timestamp' }) // Auto-generates timestamp on insert
    createdAt: Date;

}
