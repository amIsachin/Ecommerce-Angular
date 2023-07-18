import { personBaseEntity } from "./BaseEntity/PersonBaseEntity";

export interface userEntity extends personBaseEntity {

    userId: number;

    phoneNumber: string;

    address: string;

}