import { getListenAddr, getString, getBoolean, getNumber } from '@keom/toolbox'

export const GRAPHQL_SCHEMA_PATH = process.cwd() + '/node_modules/@keom/graphql/schema.graphql'
export const ENVIRONMENT = getString('ENVIRONMENT', 'local')
export const DATABASE_URL = getString('DATABASE_URL', 'postgres://user:password@localhost:5432/database')
export const DATABASE_CONNECTION_POOL_SIZE = getNumber('DATABASE_CONNECTION_POOL_SIZE', 20)
export const DATABASE_QUERY_TIMEOUT = getNumber('DATABASE_QUERY_TIMEOUT', 20)
export const LISTEN_ADDR = getListenAddr('LISTEN_ADDR', 'localhost:8080')
export const GRAPHQL_MOUNT_PATH = getString('GRAPHQL_MOUNT_PATH', '/api/v1')
export const GRAPHQL_ENABLE_INTROSPECTION = getBoolean('GRAPHQL_ENABLE_INTROSPECTION', true)

export const GRAPHQL_KEEP_ALIVE_TIMEOUT = getNumber('GRAPHQL_KEEP_ALIVE_TIMEOUT', 300000)
export const GRAPHQL_DEBUG = getBoolean('GRAPHQL_DEBUG', true)
export const JWT_SECRET = getString('JWT_SECRET', 'secret')
export const JWT_DURATION = getNumber('JWT_DURATION', 3600)
