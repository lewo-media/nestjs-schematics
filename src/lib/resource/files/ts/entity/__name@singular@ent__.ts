import type { EntityProperties } from '../../database/util/entity-properties.type.js';
import type { <%= singular(classify(name)) %>Dto } from '../dto/<%= singular(name) %>.dto.js';
import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class <%= singular(classify(name)) %>Entity implements <%= singular(classify(name)) %>Dto {
    @PrimaryGeneratedColumn()
    public id!: number;

    constructor(data: EntityProperties<Omit<<%= singular(classify(name)) %>Entity, 'id'>>) {
        Object.assign(this, data);
    }
}