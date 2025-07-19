import type { Request, Response } from 'express'
import * as internetServices from '@/services/internetServices'
import { errorResponses } from '@/utils/httpErrors/errorResponses'
import { type Error } from '@/types/error'
import { pgModel } from '@/models/pg'

const getAllServices = internetServices.findAllInternetServices(pgModel)

const getInternetServices = async (_req: Request, res: Response): Promise<void> => {
  await getAllServices()
    .then((results) => res.json(results))
    .catch((error: Error) => errorResponses(res, error, 'getInternetServices'))
}

export { getInternetServices }
