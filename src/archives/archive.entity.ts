import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Patient } from '../patients/patient.entity';

@Entity()
export class Archive {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'date' })
  dateArchivage: string;

  @Column()
  motif: string;

  @Column({ type: 'text', nullable: true })
  resumeMedical: string;

  @Column({ type: 'text', nullable: true })
  exercicesRealises: string;

  @Column({ type: 'int', default: 0 })
  progressionFinale: number;

  @Column({ type: 'text', nullable: true })
  notes: string;

  @ManyToOne(() => Patient, { eager: true })
  @JoinColumn({ name: 'patientId' })
  patient: Patient;

  @Column()
  patientId: number;
}
