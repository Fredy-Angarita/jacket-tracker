import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ClotheSizeEntity } from './clothe.size.entity';
import { AssignmentEntity } from './assignment.entity';
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
  @OneToMany(() => AssignmentEntity, (assignment) => assignment.clothes)
  assignments: AssignmentEntity[];
  @ManyToOne(() => ClotheSizeEntity, (clotheSize) => clotheSize.clothes)
  sizes: ClotheSizeEntity;
  @CreateDateColumn({ type: 'timestamp without time zone' })
  createdAt: Date;
}
