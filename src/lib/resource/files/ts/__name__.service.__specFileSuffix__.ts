import { beforeAll, describe, expect, it } from 'vitest';
import { TestBed } from '@suites/unit';
import { <%= classify(name) %>Service } from './<%= name %>.service.js';

describe('<%= classify(name) %>Service', () => {
    let service: <%= classify(name) %>Service;

    beforeAll(async () => {
        const { unit } = await TestBed.solitary(<%= classify(name) %>Service).compile();

        service = unit;
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
