import { auditableBaseEntity } from "./BaseEntity/AuditableBaseEntity";

export interface productEntity extends auditableBaseEntity {

    productId: number;

    name: string;

    description: string,
    
    price: number
}