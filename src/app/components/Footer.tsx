import Link from "next/link";

export default function Footer() {

    
    return (
        <>
            <footer className=" text-black py-6">
                <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                  
                    <div className="text-center md:text-left mb-4 md:mb-0">
                        <p>&copy; 2024 Your Company. All rights reserved.</p>
                    </div>

                 
                    <div className="right-menu">
                        <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-center">
                            <li>

                                <Link href={'/privacy-policy'}>
                                <span
                                   
                                    className="hover:underline"
                                    >
                                    Privacy Policy
                                </span>
                                    </Link>
                            </li>
                            <li>
                                <Link href={'/about'}>
                                <span className="hover:underline"
                                >
                                    About 
                                </span>
                                    </Link>
                            </li>
                            <li>
                                <Link href={'/contact'}>
                                <span
                                   
                                    className="hover:underline"
                                    >
                                    Contact 
                                </span>
                                    </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    );
}
