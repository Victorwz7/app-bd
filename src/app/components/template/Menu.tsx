import { IconHome, IconUser } from '@tabler/icons-react';
import Link from 'next/link';
import MenuItem from './MenuItem';




export default function Pagina() {
    return (
        <aside className="w-72 bg-zinc-900 h-screen gap-1">
            <nav className='flex flex-col gap-1 py-7'>
                <MenuItem icone= {IconHome} texto= "inicio" url = "/"/>
                <MenuItem icone= {IconUser} texto= "Cadastrar-se" url = "/usuarios"/>
            </nav>
        </aside>
    );
}