var _ = require('underscore');

prt = (value, key, list) => {
    console.log(`key : ${key} | value : ${value}`)
}

_.each({one: 1, two: 2, three: 3}, prt);