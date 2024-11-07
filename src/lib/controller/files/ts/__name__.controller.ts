import { Controller } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Controller('<%= dasherize(name) %>s')
export class <%= classify(name) %>Controller {
    constructor(
        private readonly dataSource: DataSource
    ) {}
}
