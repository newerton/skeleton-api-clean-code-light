import { Example, ExampleProperties } from './example';

describe('Example Tests', () => {
  test('constructor', () => {
    let modelProps: ExampleProperties = {
      title: 'my title',
    };
    let model = new Example(modelProps);
    expect(model.props).toStrictEqual({
      ...modelProps,
    });

    modelProps = {
      title: 'my title',
    };
    model = new Example(modelProps);
    expect(model.id).toBeDefined();
    expect(model.props).toStrictEqual({
      ...modelProps,
    });
  });

  test('updateTitle method', () => {
    const modelProps: ExampleProperties = {
      title: 'my title',
    };
    const model = new Example(modelProps);
    model.updateTitle('title updated');
    expect(model.title).toBe('title updated');
  });
});
