'use client';

const BtnDemo = () => {

    const handleDemo = () => {
        console.log('Salut =)');
    };

    return (
        <button className='text-sky-600' onClick={handleDemo}>
            Démo
        </button>
    )
}

export default BtnDemo;