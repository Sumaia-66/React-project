import Logo from '../assets/logo.svg'
import '../App.css'
export default function Demos(){
    return(
        <section>
            <HeaderStarts />
            <Header />
            <BannerHead />
        </section>
    )
}


function HeaderStarts(){
    return(
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


function Header(){
    return(
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


function BannerHead(){
    return(
        <section className='w-full h-[110vh] bannerHead'></section>
    )
}