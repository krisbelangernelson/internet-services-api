/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router, type Request, type Response } from 'express'
import { getInternetServices } from '@/controllers/internetController'
import logger from '@/utils/logger'
import { version } from '../../package.json'

const router = Router()

const invalidRoute = async (req: Request, res: Response): Promise<Response> => {
  const errData = {
    code: 'ERR-404',
    reason: 'Not Found',
    message: `Unknown route: ${req.method} ${req.url}`,
    status: 404
  }
  // Create copy of error object for sending
  // Why? The logger is (sometimes) adding the info property which should not
  // be sent
  const aError = { ...errData }
  logger.info(errData)
  return await Promise.resolve(res.status(errData.status).send(aError))
}

router.get('/version', (_req, res) => {
  return res.send(`Version: ${version}`)
})

router.get('/api/v1/internet-services', getInternetServices)

router.get('*', async (req, res) => await invalidRoute(req, res))
router.post('*', async (req, res) => await invalidRoute(req, res))
router.patch('*', async (req, res) => await invalidRoute(req, res))
router.put('*', async (req, res) => await invalidRoute(req, res))
router.delete('*', async (req, res) => await invalidRoute(req, res))

export default router
