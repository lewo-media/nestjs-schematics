import { IsNumber } from 'class-validator';

export class <%= singular(classify(name)) %>Dto {
    @IsNumber()
    public id!: number;
}
