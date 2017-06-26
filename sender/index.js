const mongojs = require('mongojs')
const every = require('every-moment')
const db = mongojs('meetup-db')
const productsDb = db.collection('productsProcess')
const shortid = require('shortid');
const winston = require('winston');
const logger = new winston.Logger({
    level: 'info',
    transports: [
        new (winston.transports.Console)(),
        new (winston.transports.File)({ filename: 'somefile.log' })
    ]
});

const log = (msg, params) => {
    logger.log('info', msg, params)
}

db.on('connect', () => log('database connected'))
db.on('error', (err) => log('database error', err))

const products = index => Array.from({ length: 100 })
    .map((i, j) => {
        return {
            name: `Sabao ${j * 3}`,
            quantity: j * 300,
            price: 100 * 2 * j
        }

    })

const user = index => obj = {

    name: `Erick ${shortid.generate()}`,
    age: 10 + index,
    phone: `${index + 1}${index + 1} ` + Array.from({ length: 8 }).map((i, j) => `${j}`).reduce((ant, prox) => ant.concat(prox)),
    products: products(index),
    status: 'created'

}
let count = 0
every(5, 'millisecond', () => {

    const items = Array
        .from({ length: 5 })
        .map((i, j) => user(j))
    count += items.length;

    productsDb.save(items, (error, docs) => {
        log(` docs  bath saved with quantity  ${docs.length}, count now: ${count}`)
    })

});
