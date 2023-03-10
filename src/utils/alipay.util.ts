import AlipaySdk from 'alipay-sdk';
import { readFileSync } from 'fs';

export const alipaySdk = new AlipaySdk({
  appId: process.env.APPID,
  gateway: 'https://openapi.alipaydev.com/gateway.do',
  privateKey: readFileSync(
    `${process.cwd()}/src/alipay/certs/private-key.pem`,
    'ascii',
  ),
  alipayRootCertPath: `${process.cwd()}/src/alipay/certs/alipayRootCert.crt`,
  alipayPublicCertPath: `${process.cwd()}/src/alipay/certs/alipayPublicCert.crt`,
  appCertPath: `${process.cwd()}/src/alipay/certs/appPublicCert.crt`,
});
