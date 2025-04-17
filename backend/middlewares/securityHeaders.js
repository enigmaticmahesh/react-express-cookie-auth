const securityHeaders = (req, res, next) => {
    // User should not know that we are using Express as our backend server
    res.removeHeader('X-Powered-By')
    // Any redirection should not expose our path, like from where/which path user has come to the current path
    res.setHeader('Referrer-Policy', 'no-referrer')
    // Server should only provide the content type which user has asked, any interception in between or other content type is not allowed
    res.setHeader('X-Content-Type-Options', 'nosniff')
    // This can be used with the redirectToHttps middleware file
    // This will ensure every further requests is redirected/requested to https server if http is provided
    // res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload')
    next()
}

module.exports = securityHeaders