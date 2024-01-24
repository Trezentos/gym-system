import { app } from './app'
import { env } from '@/env'

app
  .listen({
    port: env.PORT,
    host: '0.0.0.0', // auxilia nos front que for consumir essa app
  })
  .then(() => console.log('HTTP Server Runnig'))
