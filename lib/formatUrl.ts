import { stringify } from 'querystring'

enum Scheme {
    HTTP = 'http',
    HTTPS = 'https',
    WS = 'ws',
    WSS = 'wss',
    FTP = 'ftp',
    FILE = 'file',
    GOPHER = 'gopher'
}

interface UrlParts {
    protocol: Scheme | string,
    host: string,
    path: string,
    query?: Record<string, string>
}

export default function buildUrl (
  {
    protocol,
    host: hostname,
    path: pathname,
    query
  }: UrlParts
) {
  if (typeof protocol === 'string' && !(protocol.toUpperCase() in Scheme)) {
    throw new Error('Must provide a valid protocol')
  }
  return Object.assign(new URL('http://abc.def'), {
    protocol,
    hostname,
    pathname,
    search: stringify(query)
  }).toString()
}
