'use server';
// Action Serveur

import { addPerson } from '@/services/person.service.js';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export const addGuestToDB = async (formData) => {

    const guest = {
        firstname: formData.get('firstname'),
        lastname: formData.get('lastname'),
        desc: 'osef'
    };

    await addPerson(guest);

    // Force le rechergement de la page
    revalidatePath('/guest');

    // Redirection
    redirect('/guest');
}