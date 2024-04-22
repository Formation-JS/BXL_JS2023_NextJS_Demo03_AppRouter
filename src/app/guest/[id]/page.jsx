import { getPersonById } from '@/services/person.service.js';
import { notFound } from 'next/navigation.js';

const GuestDetailPage = async ({ params }) => {

    // Récuperation de l'id de la route
    const id = Number(params.id);

    // Récuperation des données
    const guest = await getPersonById(id)

    // Page 404 si aucune donnée
    if(!guest) {
        notFound();
    }

    return (
        <>
            <h1 className='text-4xl mb-3'>Information de l'invité</h1>
            <h2 className='text-2xl'>{guest.firstname} {guest.lastname}</h2>
            <p>{guest.desc}</p>
        </>
    )
}

export default GuestDetailPage