// src/app/layout.tsx
import "./globals.css"
import { Geist, Geist_Mono } from "next/font/google"
import ClientLayout from "@/components/layout/ClientLayout"
import { Toaster } from "react-hot-toast"

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] })
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ClientLayout>{children}</ClientLayout>
         <Toaster
            position="bottom-left"
            reverseOrder={false}
            toastOptions={{
              style: {
                marginBottom: "40px", 
                background: "#f0fdf4", 
                color: "#166534", 
                border: "1px solid #86efac",
              },
              success: {
                iconTheme: {
                  primary: "#22c55e", 
                  secondary: "#f0fdf4",
                },
              },
            }}
          />

      </body>
    </html>
  )
}
