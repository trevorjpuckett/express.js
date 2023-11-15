
import express from 'express'
import bootstrap from './bootstrap.js'
import appconfig from '@config/app.js'

const app = express()

bootstrap(app);

app.listen(appconfig.port, () => {
  console.log(`${appconfig.name} listening on port ${appconfig.port}`)
})