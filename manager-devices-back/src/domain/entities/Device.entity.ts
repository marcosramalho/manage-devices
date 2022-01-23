import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import { Category } from './category.entity'

@Entity()
export class Device {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  color!: string

  @Column()
  partNumber!: string

  @Column()
  categoryId!: string

  @ManyToOne(() => Category, category => category.devices)
  category!: Category
}
