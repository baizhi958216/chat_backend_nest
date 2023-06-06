import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';

/**
 * 全局Http服务响应拦截器
 * 该Interceptor在main中通过
 * app.useGlobalInterceptors 来全局引入，
 * 仅处理HTTP服务成功响应拦截，异常是不会进入该拦截器
 */
export class HttpServiceResponseInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    return next.handle();
  }
}
