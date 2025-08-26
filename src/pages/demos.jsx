import Logo from '../assets/logo.svg'
import TitleImg from '../assets/bPNG-removebg-preview.png'
import AboutImg from '../assets/about-image-01.jpg'
import AboutImg2 from '../assets/about-image-02.jpg'
import AboutImg11 from '../assets/about-image-011.jpg'
import AboutImg02 from '../assets/program-image-02.jpg'
import ProgramImg from '../assets/program-image-03.jpg'
import ProgramImg4 from '../assets/program-image-04.jpg' 
import '../App.css'
export default function Demos() {
    return (
        <section>
            <HeaderStarts />
            <Header />
            <BannerHead />
            <Academics />
            <Liggeet />
            <Laboratory />
            <Sessions />
            <Cards />
        </section>
    )
}


function HeaderStarts() {
    return (
        <div className="w-full h-[80px] md:h-[50px] bg-[#F05C72] flex items-center justify-center md:justify-between flex-wrap">
            <p className="text-white text-[14px] capitalize font-bold">Starts TOMORROW! Our biggest event of the year...</p>
            <div>
                <a href="" className="text-white">Faqs</a>
                <span className="mx-[60px]">
                    <a href="" className="duration-100 text-white hover:text-[#02C2C5]">Login</a> &nbsp;
                    <span>/ &nbsp;</span>
                    <a href="" className="duration-100 text-white hover:text-[#02C2C5]">Regester</a>
                </span>
            </div>
        </div>
    )
}


function Header() {
    return (
        <header className="w-full h-[300px] relative md:h-[240px] lg:h-[170px] bg-[#f8f9fa] py-[30px] px-[20px] content-start">
            <div className="w-full  h-[180px] sm:h-[150px] lg:h-[90px] flex flex-wrap justify-center md:justify-between items-center">
                <figure>
                    <a href=""><img src={Logo} alt="" /></a>
                </figure>
                <section className="w-full md:w-[40%]  flex items-center justify-between ">
                    <div className='w-[200px] '>
                        <strong className='w-full flex text-[#02C2C5]'>Email Address</strong>
                        <a href="" className='duration-150 hover:text-[#F89221] font-bold'>info@example.com</a>
                    </div>
                    <div className='w-[200px]'>
                        <strong className='w-full flex text-[#02C2C5]'>Phone number</strong>
                        <a href="" className='duration-150 hover:text-[#F89221] font-bold'>+123 456 78900</a>
                    </div>
                </section>
            </div>
            <div className="w-full bg-[#ffffff] h-[70px] sm:h-[90px] lg:h-[90px] relative z-10">
                {/* __________________**********Phone-Menu***************______________ */}
                <section className='w-full h-full border text-center lg:hidden flex justify-between items-center pl-[20px]'>
                    <span className='flex w-[60px] h-[60px] cursor-pointer font-bold text-[25px] bg-[#f89221] text-white justify-center items-center '>///</span>
                    <a href="" className='flex h-full w-[290px] bg-[#f89221] justify-center items-center relative
                     capitalize text-[25px] text-white group whitespace-nowrap'>
                        <p className='z-10'>free join us</p>
                        <span className='flex w-0 h-full absolute top-0 left-0 bg-[#f05c72] duration-500 group-hover:w-full'></span>
                    </a>
                   

                </section>
                

                <section className='w-full h-full  text-center hidden lg:flex justify-between shadow-md'>
                    <ul className='flex h-full '>
                        <li className='h-full relative group after:content-[""] after:h-0 after:w-[0%] after:border-2 after:border-[#f89221] after:absolute after:bottom-0 
                        after:left-0 group after:hover:w-full after:transition-all after:duration-[0.5s] after:opacity-0 after:hover:opacity-100'><a className='flex h-full items-center capitalize px-[15px] mx-[6px]' href="">home</a>
                            <ul className='w-[200px] min-h-[250px] bg-[#343b42a1] absolute top-[100%] left-0 scale-y-0 origin-top group-hover:scale-y-100 duration-500'>
                                <li className='w-full h-[70px] text-[19px]'><a className='flex w-full h-full items-center text-left pl-[14px] text-white capitalize' href=""> gradiunte addmissions</a></li>
                                <li className='w-full h-[70px] text-[19px]'><a className='flex w-full h-full items-center text-left pl-[14px] text-white capitalize' href=""> ungruduade addmissions</a></li>
                                <li className='w-full h-[70px] text-[19px]'><a className='flex w-full h-full items-center text-left pl-[14px] text-white capitalize' href=""> carrers</a></li>
                                <li className='w-full h-[70px] text-[19px]'><a className='flex w-full h-full items-center text-left pl-[14px] text-white capitalize' href=""> carrer details</a></li>
                            </ul>
                        </li>
                        <li className='h-full relative group after:content-[""] after:h-0 after:w-[0%] after:border-2 after:border-[#f89221] after:absolute after:bottom-0 
                        after:left-0 group after:hover:w-full after:transition-all after:duration-[0.5s] after:opacity-0 after:hover:opacity-100'><a className='flex h-full items-center capitalize px-[15px] mx-[6px]' href="">academics</a>
                            <ul className='w-[200px] min-h-[250px] bg-[#343b42a1] absolute top-[100%] left-0 scale-y-0 origin-top group-hover:scale-y-100 duration-500'>
                                <li className='w-full h-[70px] text-[19px]'><a className='flex w-full h-full items-center text-left pl-[14px] text-white capitalize' href=""> gradiunte addmissions</a></li>
                                <li className='w-full h-[70px] text-[19px]'><a className='flex w-full h-full items-center text-left pl-[14px] text-white capitalize' href=""> ungruduade addmissions</a></li>
                                <li className='w-full h-[70px] text-[19px]'><a className='flex w-full h-full items-center text-left pl-[14px] text-white capitalize' href=""> carrers</a></li>
                                <li className='w-full h-[70px] text-[19px]'><a className='flex w-full h-full items-center text-left pl-[14px] text-white capitalize' href=""> carrer details</a></li>
                            </ul>
                        </li>
                        <li className='h-full relative group after:content-[""] after:h-0 after:w-[0%] after:border-2 after:border-[#f89221] after:absolute after:bottom-0 
                        after:left-0 group after:hover:w-full after:transition-all after:duration-[0.5s] after:opacity-0 after:hover:opacity-100'><a className='flex h-full items-center capitalize px-[15px] mx-[6px]' href="">admissions</a>
                            <ul className='w-[200px] min-h-[250px] bg-[#343b42a1] absolute top-[100%] left-0 scale-y-0 origin-top group-hover:scale-y-100 duration-500'>
                                <li className='w-full h-[70px] text-[19px]'><a className='flex w-full h-full items-center text-left pl-[14px] text-white capitalize' href=""> gradiunte addmissions</a></li>
                                <li className='w-full h-[70px] text-[19px]'><a className='flex w-full h-full items-center text-left pl-[14px] text-white capitalize' href=""> ungruduade addmissions</a></li>
                                <li className='w-full h-[70px] text-[19px]'><a className='flex w-full h-full items-center text-left pl-[14px] text-white capitalize' href=""> carrers</a></li>
                                <li className='w-full h-[70px] text-[19px]'><a className='flex w-full h-full items-center text-left pl-[14px] text-white capitalize' href=""> carrer details</a></li>
                            </ul>
                        </li>
                        <li className='h-full relative group after:content-[""] after:h-0 after:w-[0%] after:border-2 after:border-[#f89221] after:absolute after:bottom-0 
                        after:left-0 group after:hover:w-full after:transition-all after:duration-[0.5s] after:opacity-0 after:hover:opacity-100'><a className='flex h-full items-center capitalize px-[15px] mx-[6px]' href="">pages</a>
                            <ul className='w-[200px] min-h-[250px] bg-[#343b42a1] absolute top-[100%] left-0 scale-y-0 origin-top group-hover:scale-y-100 duration-500'>
                                <li className='w-full h-[70px] text-[19px]'><a className='flex w-full h-full items-center text-left pl-[14px] text-white capitalize' href=""> gradiunte addmissions</a></li>
                                <li className='w-full h-[70px] text-[19px]'><a className='flex w-full h-full items-center text-left pl-[14px] text-white capitalize' href=""> ungruduade addmissions</a></li>
                                <li className='w-full h-[70px] text-[19px]'><a className='flex w-full h-full items-center text-left pl-[14px] text-white capitalize' href=""> carrers</a></li>
                                <li className='w-full h-[70px] text-[19px]'><a className='flex w-full h-full items-center text-left pl-[14px] text-white capitalize' href=""> carrer details</a></li>
                            </ul>
                        </li>
                        <li className='h-full relative group after:content-[""] after:h-0 after:w-[0%] after:border-2 after:border-[#f89221] after:absolute after:bottom-0 
                        after:left-0 group after:hover:w-full after:transition-all after:duration-[0.5s] after:opacity-0 after:hover:opacity-100'><a className='flex h-full items-center capitalize px-[15px] mx-[6px]' href="">blog</a>
                            <ul className='w-[200px] min-h-[250px] bg-[#343b42a1] absolute top-[100%] left-0 scale-y-0 origin-top group-hover:scale-y-100 duration-500'>
                                <li className='w-full h-[70px] text-[19px]'><a className='flex w-full h-full items-center text-left pl-[14px] text-white capitalize' href=""> gradiunte addmissions</a></li>
                                <li className='w-full h-[70px] text-[19px]'><a className='flex w-full h-full items-center text-left pl-[14px] text-white capitalize' href=""> ungruduade addmissions</a></li>
                                <li className='w-full h-[70px] text-[19px]'><a className='flex w-full h-full items-center text-left pl-[14px] text-white capitalize' href=""> carrers</a></li>
                                <li className='w-full h-[70px] text-[19px]'><a className='flex w-full h-full items-center text-left pl-[14px] text-white capitalize' href=""> carrer details</a></li>
                            </ul>
                        </li>
                        <li className='h-full relative group after:content-[""] after:h-0 after:w-[0%] after:border-2 after:border-[#f89221] after:absolute after:bottom-0 
                        after:left-0 group after:hover:w-full after:transition-all after:duration-[0.5s] after:opacity-0 after:hover:opacity-100'><a className='flex h-full items-center capitalize px-[15px] mx-[6px]' href="">contact</a></li>
                    </ul>
                    <a href="" className='flex h-full w-[290px] bg-[#f89221] justify-center items-center relative
                     capitalize text-[25px] text-white after:content-[""] after:block after:h-full after:w-full group whitespace-nowrap
                     pl-[80px]'>
                        free join us
                        <span className='flex w-0 h-full absolute top-0 left-0 bg-[#f05c72] duration-500 group-hover:w-full'></span>
                    </a>
                </section>
            </div>
            
        </header>
    )
}


function BannerHead() {
    return (
        <section className='w-full h-[110vh] bannerHead flex items-center'>
            <div className='w-full p-[40px]'>
                <strong className='text-white font-bold text-[25px]'>For A Better Future
                    <img src={TitleImg} alt="" className='w-[270px]' />
                </strong>
                <h1 className='text-white text-[50px] md:text-[70px] font-bold md:w-[600px]'>To Learn About The World</h1>
            </div>
        </section>
    )
}



function Academics() {
    return (
        <section className='w-full  mt-[300px] mb-[60px] flex flex-wrap justify-evenly'>
            <div className='w-full md:w-[49%] lg:w-[32%]'>
                <h3 className='font-bold text-[26px] duration-500 hover:text-[#F05C72] cursor-pointer roboto'>Affordability</h3>
                <p className='my-[10px] roboto'>Sed gravida nisl a porta tincidunt. Integer aliquam. To the power.</p>
            </div>
            <div className='w-full md:w-[49%] lg:w-[32%]'>
                <h3 className='font-bold text-[26px] duration-500 hover:text-[#F05C72] cursor-pointer roboto'>Academics</h3>
                <p className='my-[10px] roboto'>Sed gravida nisl a porta tincidunt. Integer aliquam. To the power.</p>
            </div>
            <div className='w-full md:w-[49%] lg:w-[32%]'>
                <h3 className='font-bold text-[26px] duration-500 hover:text-[#F05C72] cursor-pointer roboto'>Inspiring Student Life</h3>
                <p className='my-[10px] roboto'>Sed gravida nisl a porta tincidunt. Integer aliquam. To the power.</p>
            </div>
        </section>
    )
}



function Liggeet() {
    return (
        <section className='w-full  bg-[#d5d5d5] flex flex-wrap justify-evenly'>
            <div className='w-full border lg:w-[45%] relative'>
                <figure className='w-full h-[500px] overflow-hidden group rounded-[16px]'>
                    <img src={AboutImg} alt="" className='w-full h-full duration-[2s]  group-hover:scale-[1.5] object-cover' />
                </figure>
                <section className='w-[310px] h-[310px] absolute 
                    bottom-[-20%] right-[-25%] border-white border-[15px] opacity-0 lg:opacity-100 hidden lg:block group overflow-hidden'>
                    <img src={AboutImg2} alt="" className='w-full h-full group-hover:scale-[1.2] duration-[2s]' />
                </section>
            </div>
            <div className='w-full border lg:w-[55%]'>Lorem ipsum dolor sit amet.</div>
        </section>
    )
}


function Laboratory() {
    return (
        <section className='w-full min-h-[120vh] laboratory-banner bg-center bg-cover mt-[150px] flex items-center justify-center md:justify-start '>
            <div className='w-[95%] md:w-[60%] lg:w-[43%] h-[400px] lg:h-[540px] md:h-[440px] sm:h-[390px] bg-white rounded-md md:ml-[30px] md:p-[50px] p-[30px]
             opacity-[0.8] sm:opacity-[0.9] md:opacity-[1]'>
                <h3 className='font-bold text-[30px]  lg:w-[300px] w-full text-[#2c3239]
                 lg:text-[40px] relative after:content-[""] after:block after:w-[100px] after:h-[5px] after:absolute after:left-0 after:bottom-[-10px] after:bg-black'>
                    Laboratory and Facilities
                </h3>
                <p className=' my-[50px] w-[100%] text-[18px] text-[#2c3239]'>
                    Etiam in arcu dictum, maximus libero ac, porttitor ante. Mauris in ultricies odio, id porttitor nulla. Phasellus tristique vehicula eros id hendrerit.  Interdum  et malesuada fames ac .
                </p>
                <a href="" className='flex h-[70px] w-[230px] bg-[#f05c72] justify-center items-center relative
                     capitalize  text-white group whitespace-nowrap'>
                    <p className='z-10 text-[20px]'>More Details</p>
                    <span className='flex w-0 h-full absolute top-0 left-0 bg-[#2c3239] duration-500 group-hover:w-full'></span>
                </a>

            </div>
        </section>
    )
}


function Sessions(){
    return(
        <section className='w-full min-h-[300px] bg-[#f05c72]  flex flex-wrap justify-center'>
            <div className='w-full md:w-[50%] lg:w-[25%]  flex flex-wrap text-center justify-center content-start 
            py-[100px]'>
                <strong className='w-full text-white font-bold text-[60px] '>1021</strong>
                <span className='text-white font-bold text-[25px] uppercase '>Finished Sessions</span>
            </div>
            <div className='w-full md:w-[50%] lg:w-[25%]   flex flex-wrap text-center justify-center content-start 
            py-[100px]'>
                <strong className='w-full text-white font-bold text-[60px] '>100%</strong>
                <span  className='text-white font-bold text-[25px] uppercase '>Satisfaction rate</span>
            </div>
            <div className='w-full md:w-[50%] lg:w-[25%]  flex flex-wrap text-center justify-center content-start 
            py-[100px]'>
                <strong className='w-full text-white font-bold text-[60px] '>2562+</strong>
                <span  className='text-white font-bold text-[25px] uppercase '>enrolled Learners</span>
            </div>
            <div className='w-full md:w-[50%] lg:w-[25%]  flex flex-wrap text-center justify-center content-start 
            py-[100px]'>
                <strong className='w-full text-white font-bold text-[60px] '>100</strong>
                <span  className='text-white font-bold text-[25px] uppercase '>online Instructors</span>
            </div>
        </section>
    )
}

function Cards(){
    return(
        <section className='w-full min-h-[80vh] flex flex-wrap justify-between mb-96'>
            <figure className='w-full md:w-[49%] lg:w-[24%]  relative'> 
                <img src={AboutImg11} alt="" className='w-full h-[90%] border object-cover' />
                <figcaption className='w-[60%] h-[100px] overflow-hidden pt-7 bg-white flex flex-wrap text-center items-center absolute left-[20%] bottom-[30px] hover:h-[150px] duration-500 before:content-[""] before:block before:h-[70px] before:w-[3px] before:absolute
                 before:top-[20%] before:left-0 before:bg-[#f05c72] group group-hover:before:w-[100px] after:content-[""]
                 after:block after:h-[70px] after:w-[3px] after:absolute after:top-[20%] after:right-0 after:bg-[#f05c72]'>
                    <a href="">
                        <strong className='w-full flex text-[20px] group-hover:text-[#f05c72] duration-700 text-[#2c3239]'>Continouing Education</strong>
                        <span className='flex justify-center translate-y-[50px] group-hover:translate-y-[5px] text-[#2c3239] group-hover:text-[#F89221] duration-700 ' >Read More</span>
                    </a>
                 </figcaption>
            </figure>
            <figure className='w-full md:w-[49%] lg:w-[24%]  relative'> 
                <img src={AboutImg02} alt="" className='w-full h-[90%] border object-cover' />
                 <figcaption className='w-[60%] h-[100px] overflow-hidden pt-7 bg-white flex flex-wrap text-center items-center absolute left-[20%] bottom-[30px] hover:h-[150px] duration-500 before:content-[""] before:block before:h-[70px] before:w-[3px] before:absolute
                 before:top-[20%] before:left-0 before:bg-[#f05c72] group group-hover:before:w-[100px] after:content-[""]
                 after:block after:h-[70px] after:w-[3px] after:absolute after:top-[20%] after:right-0 after:bg-[#f05c72]'>
                    <a href="">
                        <strong className='w-full flex text-[20px] group-hover:text-[#f05c72] duration-700 text-[#2c3239]'>Graduate Addmission</strong>
                        <span className='flex justify-center translate-y-[50px] group-hover:translate-y-[5px] text-[#2c3239] group-hover:text-[#F89221] duration-700 ' >Read More</span>
                    </a>
                 </figcaption>
            </figure>
            <figure className='w-full md:w-[49%] lg:w-[24%] relative '> 
                <img src={ProgramImg} alt="" className='w-full h-[90%] border object-cover' />
                <figcaption className='w-[60%] h-[100px] overflow-hidden pt-7 bg-white flex flex-wrap text-center items-center absolute left-[20%] bottom-[30px] hover:h-[150px] duration-500 before:content-[""] before:block before:h-[70px] before:w-[3px] before:absolute
                 before:top-[20%] before:left-0 before:bg-[#f05c72] group group-hover:before:w-[100px] after:content-[""]
                 after:block after:h-[70px] after:w-[3px] after:absolute after:top-[20%] after:right-0 after:bg-[#f05c72]'>
                    <a href="">
                        <strong className='w-full flex text-[20px] group-hover:text-[#f05c72] duration-700 text-[#2c3239]'>Ungraduate Addmission</strong>
                        <span className='flex justify-center translate-y-[50px] group-hover:translate-y-[5px] text-[#2c3239] group-hover:text-[#F89221] duration-700 ' >Read More</span>
                    </a>
                 </figcaption>
            </figure>
            <figure className='w-full md:w-[49%] lg:w-[24%] relative'> 
                <img src={ProgramImg4} alt="" className='w-full h-[90%] border object-cover' />
                <figcaption className='w-[60%] h-[100px] overflow-hidden pt-7 bg-white flex flex-wrap text-center items-center absolute left-[20%] bottom-[30px] hover:h-[150px] duration-500 before:content-[""] before:block before:h-[70px] before:w-[3px] before:absolute
                 before:top-[20%] before:left-0 before:bg-[#f05c72] group group-hover:before:w-[100px] after:content-[""]
                 after:block after:h-[70px] after:w-[3px] after:absolute after:top-[20%] after:right-0 after:bg-[#f05c72]'>
                    <a href="">
                        <strong className='w-full flex text-[24px] group-hover:text-[#f05c72] duration-700 text-[#2c3239]'>Research at Liggeet</strong>
                        <span className='flex justify-center translate-y-[50px] group-hover:translate-y-[5px] text-[#2c3239] group-hover:text-[#F89221] duration-700 ' >Read More</span>
                    </a>
                 </figcaption>
            </figure>
        </section>
    )
}