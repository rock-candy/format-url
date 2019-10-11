# Format Url

## `url.format` is part of a deprecated api that will be removed in node 13.
## use this library instead 👍

### install

`npm i @rock-candy/format-url`

### usage

```typescript
import formatUrl from '@rock-candy/format-url'

formatUrl({
  protocol: 'wss', // must be one of ['http', 'https', 'ws', 'wss', 'file', 'ftp', 'gopher']
  host: 'example.com',
  path: 'ws',
  query: { one: '1', two: '2' } // optional, will automatically be url encoded
}) // wss://example.com/ws?one=1&two=2
```
