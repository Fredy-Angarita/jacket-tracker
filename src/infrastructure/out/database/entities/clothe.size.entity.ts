import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ClothesEntity } from './clothes.entity';

@Entity('clothes_sizes')
export class ClotheSizeEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 15 })
  size: string;
  @OneToMany(() => ClothesEntity, (clothes) => clothes.sizes)
  clothes: ClothesEntity[];
  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;
}
