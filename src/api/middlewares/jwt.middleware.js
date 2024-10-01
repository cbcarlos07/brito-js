const jwt = require('jsonwebtoken')
const jwtMiddleware = (deps) => {
  return async (req, res, next) => {
    if (!deps.exclusions.includes(req.url)) {
      const token = req.headers['x-access-token']
      if (!token) {
        res.status(403).json({error: 'Token não fornecido'})
        return false
      }

      try {
        req.decoded = jwt.verify(token, process.env.JWT_SECRET)
      } catch (error) {
        res.status(403).json({ error: 'Falha ao autenticar o token' })
        return false
      }
    }
    next()
  }
}

module.exports = jwtMiddleware