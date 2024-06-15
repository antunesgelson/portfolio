'use client'

import { Button } from "@/components/ui/button"
import { AnimatePresence, motion } from "framer-motion"
import { useCallback, useEffect, useState } from "react"
import { IoArrowUp } from "react-icons/io5"
export default function BackToTop() {

    const [show, setShow] = useState(false)


    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const handleScroll = useCallback(() => {
        if (!show && window.scrollY > 500) setShow(true)
        if (show && window.scrollY <= 500) setShow(false)
    }, [show])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [handleScroll]);
    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    className="fixed bottom-4 right-4 z-50"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.4 }}
                >
                    <Button variant={'primary'} onClick={scrollToTop} className="p-2 rounded-lg bg-gray-600 group ">
                        <IoArrowUp className="text-white group-hover:text-gray-700" size={20} />
                    </Button>
                </motion.div>
            )}

        </AnimatePresence>

    )
}


