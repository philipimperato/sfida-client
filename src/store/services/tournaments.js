import feathersClient, { makeServicePlugin, BaseModel } from '../../feathers-client'

class Tournament extends BaseModel {
    constructor(data, options) {
        super(data, options)
    }
    
    static modelName = 'Tournament'
    static instanceDefaults() {}
}
const servicePath = 'tournaments'
const servicePlugin = makeServicePlugin({
    Model: Tournament,
    service: feathersClient.service(servicePath),
    servicePath
})

// Setup the client-side Feathers hooks.
feathersClient.service(servicePath)
.hooks({
    before: {
        all: [],
        find: [],
        get: [],
        create: [],
        update: [],
        patch: [],
        remove: []
    },
    after: {
        all: [],
        find: [],
        get: [],
        create: [],
        update: [],
        patch: [],
        remove: []
    },
    error: {
        all: [],
        find: [],
        get: [],
        create: [],
        update: [],
        patch: [],
        remove: []
    }
})

export default servicePlugin