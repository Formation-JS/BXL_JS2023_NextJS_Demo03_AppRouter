import Link from 'next/link';

const Header = () => (
    <header className='p-2 bg-sky-600 text-white font-semibold'>
        <nav>
            <ul className='flex flex-row gap-2'>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/guest'>Invités</Link>
                </li>
            </ul>
        </nav>
    </header>
);

export default Header;