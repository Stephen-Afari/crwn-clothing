import {Outlet,Link} from 'react-router-dom'
import {Fragment, useContext} from 'react'
import {ReactComponent as CrwnLogo} from  '../../../assets/crown.svg'
import './navigation.styles.scss'
import CartIcon from '../../../components/cart-icon/cart-icon.component'
import { Usercontext } from '../../../contexts/user.context'
import { signOutUser } from '../../../utils/firebase/firebase.utils'
import CartDropdown from '../../../components/cart-dropdown/cart-dropdown.component'
import { CartContext } from '../../../contexts/cart.context'

const Navigation = () => {
  const {currentUser}= useContext(Usercontext)
  const {isCartOpen}= useContext(CartContext)
  //console.log(currentUser)
  // const signOutHandler = async ()=>{
  //    await signOutUser()
  //   //setCurrentUser(null)
  // }
    return (
        <Fragment> 
        <div className='navigation'>
        <Link className='logo-container' to='/'>
        <CrwnLogo className='logo'/>
        </Link>
          
          <div className='nav-links-container'>
            <Link className='nav-link' to='/shop'>SHOP</Link>
            {currentUser ? (
              <span className='nav-link' onClick={signOutUser}>SIGN OUT</span>
            ):(<Link className='nav-link' to='/auth'>SIGN IN</Link>)}
            <CartIcon/>
          </div>
          {isCartOpen && <CartDropdown/>}
        </div>
        <Outlet />
      
        </Fragment>
      
    );
  };

  export default Navigation;