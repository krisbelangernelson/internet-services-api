import { getDb } from '@/db/connection'

const getInternetServices = async (): Promise<object[]> => {
  const db = getDb()
  const select =
    'SELECT ins.name, label, description, bandwidth_down, bandwidth_up, price, ideal_num_users, ideal_num_devices, sc.name as category, ct.name as type  FROM internet_service as ins, service_category as sc, connection_type as ct WHERE ins.service_category_id = sc.id AND ins.connection_type_id = ct.id'

  const result = await db.query(select)

  return await Promise.resolve(result.rows) // eslint-disable-line
}

export default { getInternetServices }
