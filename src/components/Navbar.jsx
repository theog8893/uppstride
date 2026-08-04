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
        <a href='/' className='flex items-center gap-2.5 text-2xl font-bold tracking-tight text-white'>
          <img src='/uppstride-icon.png' alt='Uppstride' className='h-8 w-8' />
          Uppstride
        </a>

        <nav className='hidden md:flex items-center gap-8'>
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className='text-sm font-medium text-slate-300 hover:text-white transition'>
              {item.label}
            </a>
          ))}
        </nav>

        <a href='https://cal.com/manish-bansal' target='_blank' rel='noopener noreferrer' className='hidden md:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-emerald-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90'>
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
            <a href='https://cal.com/manish-bansal' target='_blank' rel='noopener noreferrer' className='mt-4 inline-flex justify-center items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-emerald-500 px-5 py-3 font-semibold text-white'>
              Book Growth Audit
              <ArrowRight size={16}/>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
