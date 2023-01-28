import { randomUUID } from 'node:crypto';

export type ExampleProperties = {
  title: string;
};

export class Example {
  public readonly id: string;

  constructor(public readonly props: ExampleProperties, id?: string) {
    this.id = id || randomUUID();

    if (!props) {
      //@ts-expect-error used for ORM
      this.props = {};
      return;
    }

    this.props = {
      ...props,
    };
  }

  static create(props: ExampleProperties, id?: string) {
    return new Example(props, id);
  }

  updateTitle(title: string) {
    this.title = title;
  }

  get title() {
    return this.props.title;
  }

  private set title(value: string) {
    this.props.title = value;
  }

  toJSON() {
    return {
      id: this.id,
      ...this.props,
    };
  }
}
