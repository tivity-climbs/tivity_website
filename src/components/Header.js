import Image from "next/image";
import Link from "next/link"; // Import Link from next/link

export default function Header() {
    return (
        <header className="flex items-start justify-center bg-white w-full py-4">
            <Link href="/">
                <Image
                    src="/Tivity.png" // Replace with your image path
                    alt="Centered Image"
                    width={100} // Adjust as needed
                    height={100} // Adjust as needed
                    className="object-contain cursor-pointer" // Add cursor-pointer for better UX
                />
            </Link>
        </header>
    );
}