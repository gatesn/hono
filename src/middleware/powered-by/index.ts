import type { MiddlewareHandler } from '../../hono'

export const poweredBy = (): MiddlewareHandler => {
  return async (c, next) => {
    await next()
    c.res.headers.append('X-Powered-By', 'Hono')
  }
}
