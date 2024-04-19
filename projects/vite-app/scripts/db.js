import {faker} from '@faker-js/faker'
import {open} from 'node:fs/promises'

function generateMockTasks () {
    return {
        tasks: Array.from({length: faker.number.int(1000)}, () => ({
            id: faker.string.uuid(),
            title: faker.lorem.sentence(),
            description: faker.lorem.paragraph(),
            created: faker.date.past(),
        }))
    }
}

const db = await open(`./db.json` , 'w')
await db.appendFile(JSON.stringify(generateMockTasks()))
