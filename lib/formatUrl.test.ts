import buildUrl from './formatUrl'

describe('formatUrl', () => {
  it('formats a url', () => {
    const url = buildUrl({
      protocol: 'http',
      host: 'example.com',
      path: '/path/to/something'
    })
    expect(url).toEqual('http://example.com/path/to/something')
  })
  it('requires a special protocol', () => {
    expect(() => buildUrl({
      protocol: 'cheese',
      host: 'example.com',
      path: '/path/to/something'
    })).toThrow()
  })
  it('builds urls with different protocols', () => {
    const url = buildUrl({
      protocol: 'ws',
      host: 'example.com',
      path: '/path/to/something'
    })
    expect(url).toEqual('ws://example.com/path/to/something')
  })
})
