import ProductList from '@/components/shared/product/product-list'
import { getLatestProducts } from '@/lib/actions/product.actions'
import { APP_DESCRIPTION, APP_NAME } from '@/lib/constants'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: `${APP_NAME} - ${APP_DESCRIPTION}`,
}
export default async function Home() {
  const lastestProducts = await getLatestProducts()
  return (
    <div className="space-y-8">
      <ProductList title="Newest Arrivals" data={lastestProducts} />
    </div>
  )
}
