import { NavigationMenu } from '@/components/Header/NavegationMenu';

export default function Header() {
    return (
        <header className="py-4 bg-gray-700 border-b border-gray-100 shadow-stone-400 shadow-lg   ">
            <div className="w-9/12 mx-auto flex justify-between items-center ">
                <span className="text-white text-4xl"><strong className="text-2xl">{'<'}</strong>GA<strong className="text-amber-500 text-2xl">{'/>'}</strong></span>
                <NavigationMenu />

            </div>
        </header>
    )
}