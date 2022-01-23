import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { Device } from './Device.entity'

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  name!: string

  @OneToMany(() => Device, device => device.categoryId)
  devices!: Device[]
}
