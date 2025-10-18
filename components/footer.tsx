export function Footer() {
  return (
    <footer className="container-wide py-12 border-t">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-secondary">
        <div className="flex items-center gap-6">
          <a href="#" target="_blank" rel="noreferrer" className="hover:text-primary">LinkedIn</a>
          <a href="#" target="_blank" rel="noreferrer" className="hover:text-primary">Instagram</a>
          <a href="#" target="_blank" rel="noreferrer" className="hover:text-primary">Behance</a>
        </div>
        <div>© {new Date().getFullYear()} Personal portfolio</div>
      </div>
    </footer>
  )
}


