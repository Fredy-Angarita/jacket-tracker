import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AssignmentEntity } from './assignment.entity';

@Entity('delivery')
export class DeliveryEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  quantity: number;
  @Column()
  observation: string;
  @CreateDateColumn()
  createAt: Date;
  @ManyToOne(() => AssignmentEntity, (assignment) => assignment.deliveries)
  assignment: AssignmentEntity;
}
