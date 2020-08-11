import store from './store'

describe('Store', () => {
  it('is able to dispatch', () => {
    expect(store).toHaveProperty('dispatch')
  })

  it('is able to return state', () => {
    expect(store).toHaveProperty('getState')
  })

  it('is able to replace reducers', () => {
    expect(store).toHaveProperty('replaceReducer')
  })

  it('is able to subscribe', () => {
    expect(store).toHaveProperty('subscribe')
  })
})
