/**
 * IMPORTANT:
 * ---------
 * Do not manually edit this file if you'd like to host your server on Colyseus Cloud
 *
 * If you're self-hosting (without Colyseus Cloud), you can manually
 * instantiate a Colyseus Server as documented here:
 *
 * See: https://docs.colyseus.io/server/api/#constructor-options
 */
import { listen } from "@colyseus/tools";
import * as admin from 'firebase-admin';


// Import Colyseus config
import app from "./app.config";

// const serviceAccount = require('../gundu-adminsdk.json');
// admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount as admin.ServiceAccount)
// });

// Create and listen on 2567 (or PORT environment variable.)
listen(app, 2570);
