import type { Product } from '../data/products'
import defaultProducts from '../data/products'

const STORE_NAME = 'buhiyan-shop'
const KEY = 'products-list'

async function getStore() {
  try {
    const { getStore } = await import('@netlify/blobs')
    return getStore({ name: STORE_NAME, consistency: 'strong' })
  } catch {
    return null
  }
}

export async function getAllProducts(): Promise<Product[]> {
  const store = await getStore()
  if (!store) return [...defaultProducts]

  try {
    const raw = await store.get(KEY)
    if (raw) {
      const parsed = JSON.parse(raw) as Product[]
      if (Array.isArray(parsed) && parsed.length > 0) return parsed
    }
  } catch (e) {
    console.error('[Products Store] Read error:', e)
  }

  return [...defaultProducts]
}

export async function saveProducts(products: Product[]): Promise<void> {
  const store = await getStore()
  if (!store) throw new Error('Netlify Blobs not available')
  await store.set(KEY, JSON.stringify(products))
}

export async function getProductById(id: number): Promise<Product | undefined> {
  const products = await getAllProducts()
  return products.find(p => p.id === id)
}
