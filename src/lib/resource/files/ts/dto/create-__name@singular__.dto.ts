import { OmitType } from '@nestjs/swagger';
import { <%= singular(classify(name)) %>Dto } from './<%= singular(name) %>.dto.js';

export class Create<%= singular(classify(name)) %>Dto extends OmitType(<%= singular(classify(name)) %>Dto, ['id'] as const) {}
