import { Test, TestingModule } from '@nestjs/testing';
import { <%= classify(className) %> } from './<%= name %>';

describe('<%= classify(className) %>', () => {
    let provider: <%= classify(className) %>;

    beforeEach(async () => {
        const { unit } = await TestBed.solitary(<%= classify(className) %>).compile();

        provider = unit;
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
