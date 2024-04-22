import PersonTable from '@/components/person-table/person-table.jsx';
import { getPersonAll } from '@/services/person.service.js';
import Link from 'next/link';

const GuestTable = async () => {

    // ↓ Requete vers DB (lent !!!)
    const guests = await getPersonAll();

    const guestTableData = guests.map(person => ({
        id: person.id,
        firstname: person.firstname,
        lastname: person.lastname,
        action: () => (
            <Link href={`/guest/${person.id}`}>Detail</Link>
        )
    }))

    return (
        <>
            <PersonTable people={guestTableData} />
        </>
    );
};

export default GuestTable;