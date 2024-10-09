import { Product } from "./Product.type"

export type SearchResult = {
  status: 'loading'
} | {
  status: 'success',
  data: Product[]
} | {
  status: 'error',
  message: string
} | {
  status: 'complete'
}
