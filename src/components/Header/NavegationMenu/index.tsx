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
import { motion } from "framer-motion"

const Menu: { title: string; href: string }[] = [

    {
        title: "Conhecimento",
        href: "skills",
    },
    {
        title: "Projetos",
        href: "projects"
    },
    {
        title: "Experiência",
        href: "experience"
    },
    {
        title: "Contato",
        href: "contact"
    },
]


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
                <motion.div
                    initial={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{ duration: 0.5 }}>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Sobre</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid gap-3 p-4 md:w-[300px] lg:w-[400px] ">
                                {components.map((component, index) => (
                                    <motion.div
                                        key={component.title}
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1, duration: 0.5 }}>
                                        <ListItem
                                            title={component.title}
                                            href={component.href}>
                                            {component.description}
                                        </ListItem>
                                    </motion.div>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </motion.div>

                {Menu.map((menu, index) => (
                    <motion.div
                        key={menu.href}
                        initial={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}>
                        <NavigationMenuItem >
                            <NavigationMenuLink className={navigationMenuTriggerStyle()} onClick={(e) => handleSmoothScroll(e, menu.href)}>
                                {menu.title}
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </motion.div>
                ))}


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
