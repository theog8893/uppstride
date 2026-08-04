import { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

const navItems = [
  { label: 'Solutions', href: '#solutions' },
  { label: 'Industries', href: '#industries' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Insights', href: '#insights' },
  { label: 'About', href: '#about' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className='sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur'>
      <div className='mx-auto flex max-w-7xl items-center justify-between px-6 py-4'>
        <a href='/' className='text-2xl font-bold tracking-tight text-white'>
          Upp<span className='text-cyan-400'>stride</span>
        </a>

        <nav className='hidden md:flex items-center gap-8'>
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className='text-sm font-medium text-slate-300 hover:text-white transition'>
              {item.label}
            </a>
          ))}
        </nav>

        <a href='#contact' className='hidden md:inline-flex items-center gap-2 rounded-full bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-slate-950 hover:bg-cyan-400 transition'>
          Book Growth Audit
          <ArrowRight size={16} />
        </a>

        <button className='md:hidden text-white' onClick={() => setOpen(!open)} aria-label='Toggle navigation'>
          {open ? <X size={24}/> : <Menu size={24}/>}
        </button>
      </div>

      {open && (
        <div className='md:hidden border-t border-white/10 bg-slate-950'>
          <div className='flex flex-col px-6 py-5'>
            {navItems.map((item) => (
              <a key={item.label} href={item.href} onClick={() => setOpen(false)} className='py-3 text-slate-300 hover:text-white'>
                {item.label}
              </a>
            ))}
            <a href='#contact' className='mt-4 inline-flex justify-center items-center gap-2 rounded-full bg-cyan-500 px-5 py-3 font-semibold text-slate-950'>
              Book Growth Audit
              <ArrowRight size={16}/>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
