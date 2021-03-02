import path from 'path'
import dotenv from 'dotenv'

dotenv.config()

const env = process.env.NODE_ENV || 'development'
const debug = env !== 'production'
const host = 'walletconnectpay.com'
const bindaddress = process.env.BIND_ADDRESS || '127.0.0.1'

const rootPath = path.join(__dirname, '../../../')
const clientPath = path.join(rootPath, 'client/build')
const tempPath = path.join(rootPath, 'temp')

export default {
  env: env,
  debug: debug,
  host: host,
  rootPath,
  clientPath,
  bindaddress,
  tempPath,
  port: process.env.PORT || (env === 'production' ? 5000 : 5001),
  pinata: {
    key: process.env.PINATA_API_KEY || '',
    secret: process.env.PINATA_API_SECRET || ''
  },
  mailgun: {
    key: process.env.MAILGUN_API_KEY || '',
    domain: `mg.${host}`
  }
}
