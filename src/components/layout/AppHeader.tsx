import Link from "next/link";
import Image from "next/image";

export default function AppHeader() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 max-w-full">
            <div className="mx-auto max-w-6xl px-6 py-2 bg-white/50 backdrop-blur-md rounded-b-xl">
                <div className="flex items-center justify-between">
                    <Link href="/" className="inline-block">
                        <Image
                            src="/logo_and_name.svg"
                            alt="Retoria Logo"
                            width={120}
                            height={50}
                            className="h-10 w-auto rounded-lg"
                            priority
                        />
                    </Link>
                    <a
                        href="https://app.retoria.coach"
                        className="px-4 py-2 rounded-lg text-white font-medium transition-all duration-200 hover:opacity-90 active:translate-y-[1px] shadow-lg"
                        style={{ backgroundColor: "#0f37e6" }}
                    >
                        Practice Now
                    </a>
                </div>
            </div>
        </header>
    );
}

