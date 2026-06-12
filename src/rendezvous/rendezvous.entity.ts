import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Patient } from '../patients/patient.entity';

@Entity()
export class RendezVous {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'date' })
  date: string;

  @Column({ type: 'time' })
  heureDebut: string;

  @Column({ type: 'time', nullable: true })
  heureFin: string;

  @Column()
  motif: string;

  @Column({ nullable: true })
  type: string;

  @Column({ default: 'planifie' })
  statut: string;

  @Column({ type: 'text', nullable: true })
  notes: string;

  @ManyToOne(() => Patient, { eager: true })
  @JoinColumn({ name: 'patientId' })
  patient: Patient;

  @Column()
  patientId: number;
}
