import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import { Category } from './category.entity'

@Entity({ name: 'devices' })
export class Device {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  color!: string

  @Column()
  partNumber!: number

  @Column()
  categoryId!: number

  @ManyToOne(() => Category, category => category.devices)
  category!: Category
}
