
import { Outlet, /* useLocation */ } from 'react-router-dom'
// import Header from '../pages/Shared/Header'
// import NavbarMenu from '../pages/Shared/NavbarMenu'
import Footer from '../pages/Shared/Footer'
// import FooterMenu from '../pages/Home/FooterMenu/FooterMenu'
import CategoryNavbar from '../pages/News/CategoryNavbar'
import CategoryCanvas from '../pages/News/CategoryCanvas'
import { GoToTop } from 'go-to-top-react'
import NewsTrigger from '../pages/News/NewsTrigger'


export default function WithOutnavbar() {

  // const location = useLocation()
  // const containsNews = location.pathname.includes('/news');

  // function handleCopy(event) {
  //   event.preventDefault();
  // }


  return (




    <div className="unselectable" /* onCopy={handleCopy} */>
      {/* <Header /> */}
      {/* <NavbarMenu /> */}
      {/* {containsNews && <> <CategoryNavbar />
        <CategoryCanvas /> </>} */}
      <CategoryCanvas />
      <CategoryNavbar />
      <NewsTrigger />
      <div className=''>
        <Outlet />
      </div>
      {/* <FooterMenu /> */}
      <Footer />
      <GoToTop />
    </div>
  )
}
