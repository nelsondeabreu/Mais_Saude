import { RtcTokenBuilder, RtcRole } from 'agora-access-token';
import { Request,Response } from 'express';
// Substitua pelo App ID e App Certificate do seu projeto Agora
const APP_ID = "3d283c772afb497eb54e542a0bcd1fc0";
const APP_CERTIFICATE = '75ddced68103446aa9c5c109007ec45c';

export class TokenController {
  
  handle(req:Request, res:Response) {
    const channelName = req.body.channelName;
    const uid = req.body.uid || 0;
    const role = RtcRole.PUBLISHER;
  
    if (!channelName) {
      return res.status(400).json({ error: 'channelName is required' });
    }
  
    // Calcula o tempo de expiração do token (por exemplo, 1 hora)
    const expirationTimeInSeconds = 3600;
    const currentTimestamp = Math.floor(Date.now() / 1000);
    const privilegeExpiredTs = currentTimestamp + expirationTimeInSeconds;
  
    // Gera o token
    const token = RtcTokenBuilder.buildTokenWithUid(APP_ID, APP_CERTIFICATE, channelName, uid, role, privilegeExpiredTs);
  
    return res.json( {token} );
  };
}

