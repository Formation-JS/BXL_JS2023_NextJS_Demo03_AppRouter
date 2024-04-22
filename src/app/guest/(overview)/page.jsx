import GuestTable from '@/containers/guest/guest-table.jsx';
import Link from 'next/link';

const GuestPage = () => {

    return (
        <>
            <h1 className='text-4xl mb-3'>Invités</h1>
            <GuestTable />
            <Link className='text-pink-600 mt-6' href='/guest/add'>
                Ajouter une nouvelle personne
            </Link>
        </>
    );
};

export default GuestPage;