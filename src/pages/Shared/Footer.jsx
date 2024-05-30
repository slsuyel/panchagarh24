import getgp from '../../assets/images/get-it-on-play.png'
import getapp from '../../assets/images/get-it-on-apple.png'
import footerImg from '../../assets/images/logo.jpeg'

import SocialIconsMenu from '../../components/SocialIconsMenu';
import { Link } from 'react-router-dom';
const Footer = () => {
    function convertToBanglaYear(year) {
        const banglaNumbers = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];

        return year.toString().split('').map(digit => banglaNumbers[digit]).join('');
    }

    return (
        <footer className="pt-3  w-100 mx-auto " style={{ background: '#e3deef' }}>

            <div className="row w-100 mx-auto" >
                <div className='col-md-2 my-auto text-center'>
                    {/* <img src={'https://seeklogo.com/images/P/prothom-alo-logo-0B7FCEB8DE-seeklogo.com.png'} alt="footerImg" width={140} /> */}
                    <img src={footerImg} alt="footerImg" width={180} />
                </div>


                <div className='col-md-3 my-auto '>
                    {/* <h5 className='editor-name'>প্রধান উপদেষ্টাঃ এড. সেলিম সরকার</h5> */}
                    <h5 className='editor-name'>
                        সম্পাদকঃ আলমগীর জলীল তালুকদার
                    </h5>
                    <h5 className='editor-name'>
                        নির্বাহী সম্পাদকঃ  আবু তাহের আনসারী
                    </h5>
                </div>



                <div className="col-md-4 my-auto footer-div">
                    <p className="m-0 ">  বার্তা বিভাগ :
                        ০১৭৪৪ ৪৮৮৮৮৪ <br />
                        ০১৭১৮ ৬২৬৭২১, 01677 743229  <br />
                        বিজ্ঞাপন বিভাগ: 01915 485730, 01744 857119  <br />
                        ই-মেইল: attetulia@gmail.com. panchabarta@gmail.com</p>

                </div>


                <div className="col-md-3 my-auto ">

                    <div className="text-center ">
                        <SocialIconsMenu />
                        <p className='fw-semibold mb-0'>Download Mobile App</p>
                        <div className='d-flex gap-2 justify-content-center '>
                            <a href="">
                                <img src={getgp} alt="get-it-on-play" draggable={false} width={150} />
                            </a>
                            <a href="">
                                <img src={getapp} alt="get-it-on-play" draggable={false} width={150} />
                            </a>
                        </div>
                    </div>
                </div>


            </div>




            <div className="align-items-center d-flex flex-wrap text-white justify-content-between px-2 py-1 " style={{ backgroundColor: '#4b4752' }}>
                <div className='align-items-baseline d-flex flex-wrap justify-content-center '>
                    <h6 className='text-white mb-0'>কপিরাইট © {convertToBanglaYear(new Date().getFullYear())} সকল স্বত্ব www.channeltwenty.com সংরক্ষিত </h6>

                    <Link to='/about' className='border border-2 border-bottom-0 border-top-0 border-white mx-2 px-2 text-decoration-none text-white'>আমাদের সম্পর্কে</Link>
                    <Link to='/privacy-policy' className='border border-2 border-start-0  border-bottom-0 border-top-0 border-white pe-2 text-decoration-none text-white'>গোপনীয়তা নীতি</Link>

                    <Link to='/contact' className='ps-2 text-decoration-none text-white'>যোগাযোগ</Link>
                </div>
                <div className='mx-auto '>
                    Developed by  <Link target='_blank' to='https://softwebsys.com/' className=' text-decoration-none text-white '>SoftWeb System Solutions </Link>
                </div>

            </div>

        </footer>
    );
};

export default Footer;