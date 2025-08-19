import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ClotheSizeEntity } from './clothe.size.entity';
@Entity('clothes')
export class ClothesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column({ type: 'decimal', precision: 5, scale: 2 })
  price: number;

  @Column({ type: 'text', nullable: true })
  description?: string;

  @ManyToOne(() => ClotheSizeEntity, (clotheSize) => clotheSize.clothes)
  sizes: ClotheSizeEntity;
  @CreateDateColumn({ type: 'timestamp without time zone' })
  createdAt: Date;
}
