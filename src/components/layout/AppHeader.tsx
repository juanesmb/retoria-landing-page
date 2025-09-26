"use client";

import Link from "next/link";
import { APP_TITLE } from "@/lib/constants";

export default function AppHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-indigo-100 bg-white/90 backdrop-blur">
      <div className="mx-auto max-w-6xl px-6 py-4">
        <div className="flex items-center justify-between">
          <Link 
            href="/public"
            className="text-3xl font-bold text-indigo-600 hover:text-indigo-700 transition-colors"
          >
            {APP_TITLE}
          </Link>
          <nav className="flex items-center space-x-8">
            <Link 
              href="/about" 
              className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors px-3 py-2 rounded-lg hover:bg-indigo-50"
            >
              About us
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}


