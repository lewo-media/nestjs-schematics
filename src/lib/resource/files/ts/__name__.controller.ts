<% if (crud) { %>import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseIntPipe } from '@nestjs/common';
import { FindRestApiService } from '../shared/find-rest-api/find-rest-api.service.js';<% } %>
import { <%= classify(name) %>Service } from './<%= name %>.service.js';<% if (crud) { %>
import { <%= singular(classify(name)) %>Entity } from './entity/<%= singular(name) %>.entity.js';
import { <%= singular(classify(name)) %>Dto } from './dto/<%= singular(name) %>.dto.js';
import { Create<%= singular(classify(name)) %>Dto } from './dto/create-<%= singular(name) %>.dto.js';
import { Update<%= singular(classify(name)) %>Dto } from './dto/update-<%= singular(name) %>.dto.js';
import type { FindOneDto } from '../shared/find-rest-api/dto/find-one.dto.js';
import type { FindManyDto } from '../shared/find-rest-api/dto/find-many.dto.js';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import type { Repository } from 'typeorm';<% } %>

@Controller('<%= dasherize(name) %>s')
export class <%= classify(name) %>Controller {
    constructor(
        private readonly dataSource: DataSource,
        private readonly <%= lowercased(name) %>Service: <%= classify(name) %>Service<% if (crud) { %>,
        private readonly findRestApiService: FindRestApiService,
        @InjectRepository(<%= singular(classify(name)) %>Entity)
        private readonly <%= lowercased(name) %>Repository: Repository<<%= singular(classify(name)) %>Entity><% } %>
    ) {}<% if (crud) { %>

    @Post()
    public create(@Body() data: Create<%= singular(classify(name)) %>Dto): Promise<<%= singular(classify(name)) %>Dto> {
        return this.dataSource.transaction((em) => this.<%= lowercased(name) %>Service.create(em, data));
    }

    @Get()
    public findAll(@Query() data: FindManyDto<<%= singular(classify(name)) %>Dto>): Promise<<%= singular(classify(name)) %>Dto[]> {
        return this.findRestApiService.findAll(<%= singular(classify(name)) %>Entity, data);
    }

    @Get('count')
    public count(@Query() data: FindManyDto<<%= singular(classify(name)) %>Dto>): Promise<number> {
        return this.findRestApiService.count(<%= singular(classify(name)) %>Entity, data);
    }

    @Get(':id')
    public findOne(@Param('id', ParseIntPipe) id: number, @Query() data: FindOneDto<<%= singular(classify(name)) %>Dto>): Promise<<%= singular(classify(name)) %>Dto> {
        return this.findRestApiService.findOne(<%= singular(classify(name)) %>Entity, { id }, data);
    }

    @Patch(':id')
    public update(@Param('id', ParseIntPipe) id: number, @Body() data: Update<%= singular(classify(name)) %>Dto): Promise<<%= singular(classify(name)) %>Dto> {
        return this.dataSource.transaction((em) => this.<%= lowercased(name) %>Service.update(em, data));
    }

    @Delete(':id')
    public async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
        return this.dataSource.transaction((em) => em.delete(<%= singular(classify(name)) %>Entity, { id }));
    }<% } %>
}
