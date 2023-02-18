import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import * as bcrypt from 'bcryptjs';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  captcha: string;

  @Column()
  psw: string;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;

  /* 
    进sql前先加密bcrypt.hash
  */
  @BeforeInsert()
  async hashPassword() {
    this.psw = await bcrypt.hash(this.psw, 8);
  }

  /*  
    比对加密的bcrypt.hash
  */
  async validatePassword(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.psw);
  }
}
