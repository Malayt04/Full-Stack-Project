import './header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Header() {
  return (
    <div className='header'>
      <a href='/'><img className='header-logo' src='https://www.nicepng.com/png/full/16-167642_amazon-logo-amazon-logo-white-text.png'/></a>
      <div className='header-search'>
        <input className='header-search' type='text' placeholder='seatch'/><SearchIcon className='header-search-icon'/>
      </div>
      <div className='header-nav'>
        <div className='header-option'><span className='header-option-line-1'>Hello</span><span className='header-option-line-2'>Sign in</span></div>
        <div className='header-option'><span className='header-option-line-1'>Return</span><span className='header-option-line-2'>& Orders</span></div>
        <div className='header-option'><span className='header-option-line-1'>Your</span><span className='header-option-line-2'>Prime</span></div>
        <div className='header-option'><ShoppingCartIcon/><span className='header-option-line-2 header-b'>0</span></div>
      </div>
    </div>
  )
}

export default Header
