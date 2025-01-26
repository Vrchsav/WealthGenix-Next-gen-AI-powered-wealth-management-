import React from 'react';
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button';
import { LayoutDashboard, PenBox } from 'lucide-react';

const Header = () => {
    return (
        <header className="fixed top-0 w-full bg-white shadow-md z-50">
            <nav className="container mx-auto max-w-7xl flex items-center justify-between py-3 px-8">
                
                {/* Logo with Adjusted Size */}
                <Link href="/" className="flex items-center pr-6">
                    <Image
                        src="/logo.png"
                        alt="WealthGenix"
                        height={100}   // Adjusted height
                        width={250}    // Adjusted width
                        className="h-20 w-auto object-contain transition-transform hover:scale-105"
                    />
                </Link>

                {/* Navigation Links with Proper Spacing */}
                <div className="flex items-center gap-6 pl-6">
                    <SignedIn>
                        <Link href="/dashboard">
                            <Button variant="outline" className="flex items-center gap-2 hover:bg-gray-100 transition-all">
                                <LayoutDashboard size={20} />
                                <span className="hidden md:inline">Dashboard</span>
                            </Button>
                        </Link>

                        <Link href="/transaction/create">
                            <Button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition-all text-white">
                                <PenBox size={20} />
                                <span className="hidden md:inline">Add Transaction</span>
                            </Button>
                        </Link>
                    </SignedIn>

                    <SignedOut>
                        <SignInButton forceRedirectUrl="/dashboard">
                            <Button variant="outline" className="hover:bg-gray-100 transition-all">Login</Button>
                        </SignInButton>
                    </SignedOut>

                    <SignedIn>
                        <UserButton appearance={{
                            elements: {
                                avatarBox: "w-9 h-9",
                            },
                        }} />
                    </SignedIn> 
                </div>
            </nav>
        </header>
    );
};

export default Header;
