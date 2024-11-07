import { beforeAll, describe, expect, it } from 'vitest';
import { TestBed } from '@suites/unit';
import { <%= classify(name) %>Controller } from './<%= name %>.controller.js';
import { <%= classify(name) %>Service } from './<%= name %>.service.js';

describe('<%= classify(name) %>Controller', () => {
    let controller: <%= classify(name) %>Controller;

    beforeAll(async () => {
        const { unit } = await TestBed.sociable(<%= classify(name) %>Controller).expose(<%= classify(name) %>Service).compile();

        controller = unit;
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
