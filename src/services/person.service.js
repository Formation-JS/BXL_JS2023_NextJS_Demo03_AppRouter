import { getDB } from './_db.js'
import { unstable_noStore as noStore } from 'next/cache';

export const getPersonAll = async () => {
    noStore(); // Déactivation du cache automatique de NextJS

    const db = await getDB();
    await (new Promise((resolve) => setTimeout(resolve, 500)));

    await db.read();
    return db.data.person;
}

export const getPersonById = async (id) => {
    const db = await getDB();
    await (new Promise((resolve) => setTimeout(resolve, 500)));

    await db.read();
    return db.data.person.find(p => p.id === id);
}

export const addPerson = async ({firstname, lastname, desc}) => {
    const db = await getDB();

    const id = Math.max(...db.data.person.map(p => p.id)) + 1;
    db.update(({ person }) => person.push({ id, firstname, lastname, desc }))
}