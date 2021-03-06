module.exports = {
    description: 'Web server for Redis data including Refile support.',
    required: {
        redisHost: {
            description: 'the Redis host',
            default: 'localhost'
        },
        redisPort: {
            description: 'the Redis port',
            default: 6379
        },
        redisNamespace: {
            description: 'the Redis namespace',
            default: 'refind'
        },
        httpPort: {
            description: 'the HTTP port',
            default: 8871
        },
        httpLocation: {
            description: 'the HTTP location',
            default: 're'
        },
        blobStore: {
            description: 'the BLOB store options e.g. directory for file storage',
            default: 'data/'
        },
        refileDomain: {
            description: 'the Refile domain to fetch JSON objects',
            example: 'refile.webserva.com'
        },
        loggerLevel: {
            description: 'the logging level',
            options: ['debug', 'info', 'warn', 'error'],
            default: 'info'
        }
    },
    test: {
        loggerLevel: 'debug'
    },
    development: {
        loggerLevel: 'debug'
    }
}
