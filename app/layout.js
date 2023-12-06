import { Inter } from 'next/font/google'
import './globals.css'
import FooterPage from './components/Footer'
import NaviBar from './components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Puqie Palse | companny Profle',
  description: 'Data Management and Analytics',
  openGraph: {
    title: "PalseSphere Tech || Company Profile",
    description: "Jordy is a dedicated student who is currently enrolled in a full-stack web development course at Purwhadhika. With a strong foundation in computer science, Jordy Repi has developed an aptitude for learning new technologies and incorporating them into innovative solutions.",
    images: "https://images.unsplash.com/photo-1637855463319-9acb4e5aa44f?q=80&w=1510&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NaviBar />
        {children}
        <FooterPage />
      </body>
    </html>
  )
}
