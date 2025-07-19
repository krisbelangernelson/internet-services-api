import type { InternetService } from '@/types/services'
import { findAllInternetServices } from '../db/queries/services'

export interface ServiceModel {
  findAllInternetServices: () => Promise<InternetService[]>
}

export const pgModel: ServiceModel = {
  findAllInternetServices: async () => {
    return await findAllInternetServices()
  }
}