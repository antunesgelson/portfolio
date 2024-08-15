"use client"

import Link from "next/link"
import * as React from "react"

import {
    NavigationMenu as NavegationRoot,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

const components: { title: string; href: string; description: string }[] = [

    {
        title: "Projetos",
        href: "/",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa eligendi iure harum fuga expedita dignissimos quod corporis voluptates qui, temporibus aliquam quisquam, officiis sit unde molestiae adipisci pariatur perspiciatis",
    },
    {
        title: "Sobre",
        href: "/",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa eligendi iure harum fuga expedita dignissimos quod corporis voluptates qui, temporibus aliquam quisquam, officiis sit unde molestiae adipisci pariatur perspiciatis",
    },
    {
        title: "Contato",
        href: "/",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa eligendi iure harum fuga expedita dignissimos quod corporis voluptates qui, temporibus aliquam quisquam, officiis sit unde molestiae adipisci pariatur perspiciatis",
    },
]

const handleSmoothScroll = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    event.preventDefault();
    const targetElement = document.getElementById(id);
    if (targetElement) targetElement.scrollIntoView({ behavior: 'smooth' });
};

export function NavigationMenu() {
    return (
        <NavegationRoot className="relative z-10 hidden lg:block">
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Sobre</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-3 p-4 md:w-[300px] lg:w-[400px] ">
                            {components.map((component) => (
                                <ListItem
                                    key={component.title}
                                    title={component.title}
                                    href={component.href}>
                                    {component.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()} onClick={(e) => handleSmoothScroll(e, 'skills')}>
                        Conhecimento
                    </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()} onClick={(e) => handleSmoothScroll(e, 'projects')}>
                        Projetos
                    </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()} onClick={(e) => handleSmoothScroll(e, 'experience')}>
                        Experiência
                    </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()} onClick={(e) => handleSmoothScroll(e, 'contact')}>
                        Contato
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavegationRoot>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild className="group">
                <Link href={props.href ?? '/'}
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none group  transition-colors hover:bg-gray-600  hover:text-amber-500 ",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none group-hover:underline underline-offset-2">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-gray-200 group-hover:text-gray-100 ">
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
