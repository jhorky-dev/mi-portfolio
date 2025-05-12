import { ButtonScrollTop } from "../buttonScrollTop";

export function Layout({ children }) {
  return (
    <div className="">
      <div className="fixed inset-0 bg-[radial-gradient(#ececec_1px,transparent_1px)] [background-size:20px_20px] opacity-20 z-0"></div>
      {/* Header */}
      <header>
        Header
      </header>
      <div className="relative z-10 container mx-auto p-3 sm:p-4 pt-20 sm:pt-24 pb-6 sm:pb-8">
        {/* Main */}
        <main className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* Section Left */}
          <section className="md:sticky md:top-24 self-start">
            Section Left
          </section >
          {/* Section Right */}
          <section className="col-span-1 md:col-span-2 lg:col-span-3 space-y-4 sm:space-y-6">
            {children}
          </section>          
        </main>
        {/* Footer */}
        <footer className="mt-8 sm:mt-12 py-4 sm:py-6 text-center text-xs sm:text-sm text-zinc-500">
          <p>© {new Date().getFullYear()} Jane Doe. All rights reserved.</p>
        </footer>
      </div>
      {/* Scroll to top */}
      <ButtonScrollTop />
    </div>
  )
}