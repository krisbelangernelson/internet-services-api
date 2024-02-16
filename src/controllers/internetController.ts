import type { RequestHandler, Request, Response } from 'express'
import internetServices from '@/services/internetServices'
import { errorResponses } from '@/utils/httpErrors/errorResponses'
import { type Error } from '@/model/error.d'

/* eslint-disable @typescript-eslint/no-misused-promises */
const getInternetServices: RequestHandler = async (_req: Request, res: Response): Promise<Response> => {
  return await internetServices
    .getInternetServices()
    .then((results) => res.json(results))
    .catch((error: Error) => errorResponses(res, error, 'getInternetServices'))
}

export { getInternetServices }
