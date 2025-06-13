'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <nav className="bg-background/50 sticky top-0 shadow-md  w-full z-50 backdrop-blur ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 text-2xl font-bold">
                        <Link href="/" className='text-primary'>
                            MixWithStazz
                        </Link>
                    </div>

                    {/* Desktop Links */}
                    <div className="hidden md:flex space-x-8">
                        <Link href="/" className="hover:text-gray-300 text-primary font-bold">
                            Home
                        </Link>
                        <Link href="/Mix" className="hover:text-gray-300 text-primary font-bold">
                            My Mixes
                        </Link>
                        <Link href="/Beats" className="hover:text-gray-300 text-primary font-bold">
                            My Beats
                        </Link>
                    </div>

                    {/* Hamburger Icon */}
                    <div className="md:hidden flex items-center">
                        <Sheet>
                            <SheetTrigger><Menu size={28} className='text-primary' /></SheetTrigger>
                            <SheetContent>
                                <SheetHeader>
                                    <SheetTitle></SheetTitle>
                                    <SheetDescription className= "my-10">
                                        <div className="flex flex-col  gap-6">
                                            <Link href="/" className="hover:text-gray-300 text-primary font-bold text-xl text-center">
                                                Home
                                            </Link>
                                            <Link href="/Mix" className="hover:text-gray-300 text-primary font-bold text-xl text-center">
                                                My Mixes
                                            </Link>
                                            <Link href="/Beats" className="hover:text-gray-300 text-primary font-bold text-xl text-center">
                                                My Beats
                                            </Link>
                                        </div>
                                    </SheetDescription>
                                </SheetHeader>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}

        </nav>
    );
};

export default Navbar;
