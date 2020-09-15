import { Field, ObjectType } from '@nestjs/graphql';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity('user') //, { schema: 'DB_NAME_HERE' }
export class AuthEntity extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  public id: number;

  @Field({ nullable: true })
  @Column('varchar', { name: 'username', nullable: true, length: 50 })
  public username: string | null;

  @Field({ nullable: true })
  @Column('varchar', { name: 'password', nullable: true, length: 255 })
  public password: string | null;

  @Field({ nullable: true })
  @Column('varchar', { name: 'email', nullable: true, length: 50 })
  public email: string | null;

  @Field({ nullable: true })
  @Column('tinyint', {
    name: 'isActive',
    nullable: true,
    width: 1,
    default: () => "'1'",
  })
  public isActive: boolean | null = false;

  @Column('datetime', {
    name: 'createdAt',
    nullable: true,
    default: () => 'CURRENT_TIMESTAMP',
  })
  public createdAt: Date | null;

  @Column('datetime', { name: 'updatedAt', nullable: true })
  public updatedAt: Date | null;
}
