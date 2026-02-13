const navLinks = [{ href: "#about", label: "About" },
{ href: "#experience", label: "Experience" },
{ href: "#skills", label: "Skills" },
{ href: "#projects", label: "Projects" },
{ href: "#education", label: "Education" },
];

export const Navbar = () => {
    return (
        <header className="fixed top-0 left-0 right-0 bg-transparent py-5 z-50">
            <nav className="container mx-auto flex items-center justify-between px-5 ">
                <div className="flex flex-shrink-0 items-center">
          
                </div>
                
                <div className="hidden md:flex items-center gap-1">
                    <div className="block px-2 py-1 flex items-center gap-2">
                        {navLinks.map((link, index) => (
                            <a className="px-4 uppercase py-2 text-md text-[#2563eb] transition-colors duration-300 hover:text-[#1d4ed8] font-bold" href={link.href} key={index}>{link.label}</a>
                        ))}
                    </div>
                </div>
            </nav>
        </header>
    );
};