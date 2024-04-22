import { JSONFilePreset } from 'lowdb/node'


export const getDB = async () => {
    const defaultData = {
        person: [
            {
                id: 1,
                firstname: 'Della',
                lastname: 'Duck',
                desc: 'Cat walks in keyboard run off table persian cat jump eat fish fooled again thinking the dog likes me. Burrow under covers shred all toilet paper and spread around the house stretch. Spill litter box, scratch at owner, destroy all furniture, especially couch meow meow you are my owner so here is a dead rat, burrow under covers, or let me in let me out let me in let me out let me in let me out who broke this door anyway yet scratch me now!'
            },
            {
                id: 2,
                firstname: 'Yanis',
                lastname: 'Lemfadli',
                desc: 'Sed rhoncus sagittis est, in sodales dui cursus id. Aliquam euismod arcu id felis scelerisque, nec maximus odio accumsan. Etiam sodales pulvinar leo et finibus. Duis nisl leo, dignissim gravida lobortis non, efficitur in turpis. Nunc fringilla efficitur nisi non blandit. In gravida eget neque sed egestas. Phasellus viverra erat et libero varius pellentesque.'
            }
        ]
    }
    return await JSONFilePreset('db.json', defaultData);
}
