import { Type, adjust } from 'specified';

export class ResultCreateProductBase {
  product: {
    readonly id: number;
    handle: string;
    title: string;
  };
}

export const ResultCreateProductSpec = {
  id: Type.number,
  handle: Type.string,
  title: Type.string,
};

export const ResultCreateProduct = Type.object({
  product: adjust(Type.object(ResultCreateProductSpec), {
    strict: false,
  }),
});
