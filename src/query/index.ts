import { Context } from '../../pages/api/graphql'

export const Query = {
  products: async (_: any, __: any, { prisma }: Context) => {
    const products = await prisma.product.findMany()
    return products;
  },
  product: async (_: any, { slug }: { slug: string }, { prisma }: Context) => {
    const product = await prisma.product.findFirst({
      where: {
        slug
      }
    })

    console.log('product: ', product)
    
    if(!product) {
      return {
        product: null,
        errors: [
          {
            message: 'Product not found.'
          }
        ]
      }
    }
    return {
      product,
      errors: []
    }
  },
  productsCount: async (_: any, __: any, { prisma }: Context) => {
    const productsCount = await prisma.product.count()
    return productsCount
  }
};