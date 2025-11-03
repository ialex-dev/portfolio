export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-black py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} Alex Kiprono. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="https://github.com/ialex-dev" className="text-gray-400 hover:text-white transition-colors">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/alex-kiprono/" className="text-gray-400 hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href="https://twitter.com/exeelon" className="text-gray-400 hover:text-white transition-colors">
              X/Twitter
            </a>
            <a href="mailto:kiprono.lexie@gmail.com" className="text-gray-400 hover:text-white transition-colors">
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
