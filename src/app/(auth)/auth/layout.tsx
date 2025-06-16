// Project: LivingSpot

"use client"

import { ReactNode } from "react";
import "@/styles/globals.css";
// import { Link } from "lucide-react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Authentication | LivingSpot</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Login or Register to access LivingSpot." />
      </head>
      <body>
        <div className="h-screen flex flex-col md:flex-row bg-gray-100">
          {/* Image Container */}
          <div
            className="w-full md:w-1/2 h-1/3 md:h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/login/loginbg.png')" }}
          ></div>

          {/* Authentication Container */}
          <main className="w-full md:w-1/2 flex flex-col items-center justify-center p-4 relative ">
            {/* Children (Login/Register Form) */}
            {children}

            {/* Minimalistic Footer */}
            <footer className="absolute bottom-4 left-0 right-0 text-center text-gray-600 text-sm">
              {/* <div className="flex justify-center space-x-4">
                <Link href="/terms-of-service" className="hover:text-blue-500">
                  Terms of Service
                </Link>
                <Link href="/privacy-policy" className="hover:text-blue-500">
                  Privacy Policy
                </Link>
                <Link href="/data-protection" className="hover:text-blue-500">
                  Data Protection
                </Link>
              </div> */}
              <p className="mt-2 text-gray-500">
                &copy; {new Date().getFullYear()} LivingSpot. All rights reserved.
              </p>
            </footer>
          </main>
        </div>
      </body>
    </html>
  );
}