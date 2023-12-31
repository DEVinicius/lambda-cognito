function decoratorValidator(fn, schema, argType) {
    return async function(event) {
        const data = JSON.parse(event[argType])

        const { error, value } = schema.validate(data)

        event[argType] = value

        if(!error) return fn.apply(this, arguments);

        return {
            statusCode: 422,
            body: JSON.stringify({
                message: error.message
            })
        }
    }
}

module.exports = decoratorValidator