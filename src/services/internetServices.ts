import type { ServiceModel } from "@/models/pg"

export const findAllInternetServices = (repo: ServiceModel) => async () => {
  const services = await repo.findAllInternetServices()
  return services
}
