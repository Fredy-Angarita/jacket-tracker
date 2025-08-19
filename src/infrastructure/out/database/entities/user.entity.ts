import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('_user')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ unique: true, length: 30 })
  username: string;
  @Column({ unique: true })
  email: string;
  @Column()
  password: string;
}
