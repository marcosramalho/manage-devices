import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { Device } from './device.entity'

@Entity({ name: 'categories' })
export class Category {
  @PrimaryGeneratedColumn('increment')
  id!: number

  @Column()
  name!: string

  @OneToMany(() => Device, device => device.categoryId)
  devices!: Device[]
}
