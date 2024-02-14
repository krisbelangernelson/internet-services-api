/* eslint-disable import/first */
process.env.NODE_ENV = 'development'
process.env.APP_ENV = 'local'

require('dotenv-override').config({ override: true }) // eslint-disable-line
require('express-async-errors')
import './utils/module-alias'
import cors from 'cors'
import express from 'express'
import compression from 'compression'
import { stringifyInspect } from '@/utils/utils'
import requestLogger from '@/middlewares/requestLogger/requestLogger'
import errorLogger from '@/middlewares/errorLogger/errorLogger'
import logger from '@/utils/logger'
import errorHandler from '@/middlewares/errorHandler/errorHandler'
import routes from '@/routes'
import config from './config'

const app = express()

app.use(cors())
app.use(compression())
app.disable('x-powered-by')
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(requestLogger())
app.use(config.basePath, routes)
app.use(errorLogger(logger))
app.use(errorHandler)

app.listen(config.port, () => {
  logger.info(`Started ${process.env.NODE_ENV} mode on port ${config.port}`)
})

process.on('uncaughtException', () => {
  // Already logged in winston logger
  process.exit(1)
})

process.on('unhandledRejection', (reason: string, promise) => {
  logger.error(
    JSON.stringify({
      code: 'ERR-500',
      reason: 'Internal Error',
      message: `Unhandled Rejection at: ${stringifyInspect(promise)}, Reason: ${reason}`
    })
  )
})

process.on('SIGINT', () => {
  logger.info('Server shutting down')
  process.exit()
})

process.on('SIGTERM', () => {
  logger.info('SIGTERM shutting down')
  process.exit(0)
})
