import { addGuestToDB } from '@/action/guest.action.js';

const GuestAddPage = () => {

    return (
        <>
            <form action={addGuestToDB}>
                <div className='mt-2'>
                    <label htmlFor=""></label>
                    <input type="text" name='firstname' />
                </div>
                <div className='mt-2'>
                    <label htmlFor=""></label>
                    <input type="text" name='lastname' />
                </div>
                <div className='mt-2'>
                    <button type="submit">Ajouter</button>
                </div>
            </form>
        </>
    )
}

export default GuestAddPage;