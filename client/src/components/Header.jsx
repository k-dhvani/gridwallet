import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <header className='bg-slate-200 shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
          <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-slate-500'>Grid</span>
            <span className='text-slate-700'>Wallet</span>
          </h1>
        </Link>
        
        <ul className='flex gap-4'>
          <Link to='/charging'>
            <li className='hidden sm:inline text-slate-900 hover:underline'>
              Charge
            </li>
          </Link>
          <Link to='/discharging'>
            <li className='hidden sm:inline text-slate-700 hover:underline'>
              Discharge
            </li>
          </Link>
          <Link to='/wallet'>
            <li className='hidden sm:inline text-slate-900 hover:underline'>
              Wallet
            </li>
          </Link>
          <Link to='/about'>
            <li className='hidden sm:inline text-slate-700 hover:underline'>
              About
            </li>
          </Link>
          <Link to='/profile'>
            {currentUser ? (
              <img
                className='rounded-full h-7 w-7 object-cover'
                src={currentUser.avatar}
                alt='profile'
              />
            ) : (
              <li className='text-slate-900 hover:underline'>Sign in</li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
}
