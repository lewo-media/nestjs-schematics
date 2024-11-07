import { beforeAll, describe, expect, it } from 'vitest';
import { TestBed } from '@suites/unit';
import { <%= classify(name) %>Controller } from './<%= name %>.controller.js';

describe('<%= classify(name) %>Controller', () => {
    let controller: <%= classify(name) %>Controller;

    beforeAll(async () => {
        const { unit } = await TestBed.solitary(<%= classify(name) %>Controller).compile();

        controller = unit;
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
