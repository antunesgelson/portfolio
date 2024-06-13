import { NavigationMenu } from '@/components/Header/NavegationMenu';

export default function Header() {
    return (
        <header className="py-4 bg-[#141414] border-b border-stone-800 shadow-stone-200 shadow-md   ">
            <div className="w-9/12 mx-auto flex justify-between items-center ">
                <span className="text-white text-4xl">GA <strong className="text-amber-500">.</strong></span>
                <NavigationMenu />

            </div>
        </header>
    )
}