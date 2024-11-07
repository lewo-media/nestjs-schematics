import { Create<%= singular(classify(name)) %>Dto } from './create-<%= singular(name) %>.dto.js';

export class Update<%= singular(classify(name)) %>Dto extends Create<%= singular(classify(name)) %>Dto {}
