import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'


import Notifications from 'vue3-vt-notifications'
import Vue3Autocounter from 'vue3-autocounter'
import * as Sentry from "@sentry/vue"
import { BrowserTracing } from "@sentry/tracing"
import CountDown from 'vue3-flip-countdown' // no more need, going to delete


let app = createApp(App)
    Sentry.init({
        app,
        dsn: "https://a52c01202c6147198b1fe3537c408ed2@o1169174.ingest.sentry.io/6263046",
        integrations: [
          new BrowserTracing({
            routingInstrumentation: Sentry.vueRouterInstrumentation(router),
            tracingOrigins: ["localhost", "gundu.xyz", /^\//],
          }),
        ],
        // Set tracesSampleRate to 1.0 to capture 100%
        // of transactions for performance monitoring.
        // We recommend adjusting this value in production
        tracesSampleRate: 1.0,
        // enabled: process.env.NODE_ENV !== 'development',
      });

      app.component('vue3-autocounter', Vue3Autocounter)
        .use(router)
        .use(CountDown)
        .use(Notifications)
        .mount('#app')




