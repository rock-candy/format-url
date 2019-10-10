import { stringify } from 'querystring'

enum scheme {
    HTTP = 'http',
    HTTPS = 'https',
    WS = 'ws',
    WSS = 'wss',
    FTP = 'ftp',
    FILE = 'file',
    GOPHER = 'gopher'
}

interface UrlParts {
    protocol: scheme,
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
    return Object.assign(new URL('http://abc.def'), {
        protocol,
        hostname,
        pathname,
        search: stringify(query)
    }).toString()
}
