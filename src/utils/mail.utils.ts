import { createTransport } from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';
/**
 *
 * @param user 用户邮箱
 * @param str 验证码
 * @param mode 0注册 1登录
 * @returns
 */
const sendMail = async (
  user: string,
  str: string,
  mode: number,
): Promise<SMTPTransport.SentMessageInfo> => {
  const transport = createTransport({
    host: 'smtp.qq.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_SMTP,
    },
  });
  const mailOptions = {
    from: `${process.env.MAIL_SENDER}`, // 发件人
    to: `${user}`, // 收件人
    subject: mode == 0 ? '欢迎注册立交桥' : '欢迎登录立交桥', // 主题
    text: `您的验证码是 ${str}`,
    html: `<p align="center">您的验证码是 ${str}</p>`,
  };
  return new Promise((resolve, reject) => {
    transport.sendMail(mailOptions, (err, info) => {
      if (err) {
        reject(err);
      } else {
        resolve(info);
      }
    });
  });
};

export { sendMail };
