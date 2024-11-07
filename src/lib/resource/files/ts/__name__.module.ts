import { Module } from '@nestjs/common';
import { <%= classify(name) %>Service } from './<%= name %>.service.js';
import { <%= classify(name) %>Controller } from './<%= name %>.controller.js';<% if (crud) { %>
import { TypeOrmModule } from '@nestjs/typeorm';
import { <%= singular(classify(name)) %>Entity } from './entity/<%= singular(name) %>.entity.js';<% } %>

@Module({<% if (crud) { %>
    imports: [TypeOrmModule.forFeature([<%= singular(classify(name)) %>Entity])],<% } %>
    controllers: [<%= classify(name) %>Controller],
    providers: [<%= classify(name) %>Service]
})
export class <%= classify(name) %>Module {}
