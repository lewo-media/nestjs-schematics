import { Injectable, Logger } from '@nestjs/common';<% if (crud) { %>
import type { EntityManager } from 'typeorm';
import { <%= singular(classify(name)) %>Entity } from './entity/<%= singular(name) %>.entity.js';
import { Create<%= singular(classify(name)) %>Dto } from './dto/create-<%= singular(name) %>.dto.js';
import { Update<%= singular(classify(name)) %>Dto } from './dto/update-<%= singular(name) %>.dto.js';<% } %>

@Injectable()
export class <%= classify(name) %>Service {
    private readonly logger = new Logger(<%= classify(name) %>Service.name);

    <% if (crud) { %>
    public create(em: EntityManager, data: Create<%= singular(classify(name)) %>Dto): Promise<<%= singular(classify(name)) %>Entity> {
        return em.save(new <%= singular(classify(name)) %>Entity(data));
    }

    public async update(em: EntityManager, id: number, data: Update<%= singular(classify(name)) %>Dto): Promise<<%= singular(classify(name)) %>Entity> {
        const <%= lowercased(name) %> = await em.findOneByOrFail(<%= singular(classify(name)) %>Entity, { id });

        // TODO: Modify the entity, you shouldn't use Object.assign for this and instead set fields individually

        return em.save(<%= lowercased(name) %>);
    }
<% } %>}
