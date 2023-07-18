import { auditableBaseEntity } from "./AuditableBaseEntity";

export interface personBaseEntity extends auditableBaseEntity {

    name: string;

    age: number;

    gender: string;

    city: string;
}