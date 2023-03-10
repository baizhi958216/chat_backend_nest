import AlipaySdk from 'alipay-sdk';
import { readFileSync } from 'fs';

const alipaySdk = (appid: string) =>
  new AlipaySdk({
    appId: appid,
    gateway: 'https://openapi.alipaydev.com/gateway.do',
    privateKey: readFileSync(
      `${process.cwd()}/src/alipay/certs/private-key.pem`,
      'ascii',
    ),
    alipayRootCertPath: `${process.cwd()}/src/alipay/certs/alipayRootCert.crt`,
    alipayPublicCertPath: `${process.cwd()}/src/alipay/certs/alipayPublicCert.crt`,
    appCertPath: `${process.cwd()}/src/alipay/certs/appPublicCert.crt`,
  });
export { alipaySdk };
