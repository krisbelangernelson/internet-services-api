import type { RequestHandler, Request, Response } from 'express'
import productsServices from '@/services/internetServices'

/* eslint-disable @typescript-eslint/no-misused-promises */
const getInternetServices: RequestHandler = async (req: Request, res: Response): Promise<Response> => {
  return await productsServices.getProducts().then((results) => res.status(200).json(results))
}

export { getInternetServices }
