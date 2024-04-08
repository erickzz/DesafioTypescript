import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column()
  name: string;
  @Column()
  price: number;
  @Column()
  brand: string;
  @Column()
  image: string;
  @Column()
  createdAt: Date;
}
