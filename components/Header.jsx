import React from 'react';
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button';
import { LayoutDashboard, PenBox } from 'lucide-react';

const Header = () => {
    return (
        <header className="fixed top-0 w-full bg-white shadow-md">
            <nav className="container mx-auto flex items-center justify-between py-4 px-6">
                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <Image
                        src="/logo.png"
                        alt="WealthGenix"
                        height={100}
                        width={300}
                        className="h-20 w-auto object-contain"
                    />
                </Link>

                {/* Navigation Links */}
                <div className="flex items-center gap-4">
                    <SignedIn>
                        <Link href="/dashboard">
                            <Button variant="outline" className="flex items-center gap-2">
                                <LayoutDashboard size={22} />
                                <span className="hidden md:inline">Dashboard</span>
                            </Button>
                        </Link>

                        <Link href="/transaction/create">
                            <Button className="flex items-center gap-2">
                                <PenBox size={22} />
                                <span className="hidden md:inline">Add Transaction</span>
                            </Button>
                        </Link>
                    </SignedIn>

                    <SignedOut>
                        <SignInButton forceRedirectUrl="/dashboard">
                            <Button variant="outline">Login</Button>
                        </SignInButton>
                    </SignedOut>

                    <SignedIn>
                        <UserButton appearance={{
                            elements: {
                                avatarBox: "w-10 h-10",
                            },
                        }}/>
                    </SignedIn> 
                </div>
            </nav>
        </header>
    );
};

export default Header;
