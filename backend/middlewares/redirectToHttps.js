// If enabled, the first request to http will be redirected to https server
// And the consequent requests will be handled by the Transport security policy handled in securityHeaders middleware
const redirectToHttps = (req, res, next) => {
    if (req.headers['x-forward-proto'] !== 'https') {
        // Redirect to HTTPS
        return res.redirect(['https://', req.get('Host'), req.url].join(''))
    }
    next()
}

module.exports = redirectToHttps