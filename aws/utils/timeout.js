module.exports = async ({ _option, resolveVariable }) => {
  const stage = await resolveVariable('sls:stage')
  return stage === 'local' ? 900 : 30
}
