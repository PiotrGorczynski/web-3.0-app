import logo from "../../images/logo.png";




const Footer = () => {
    return(
        <div className = "w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">

            <div className = "flex justify-center items-center flex-col mt-5">
            </div>

            

            <div className = "sm:w-[90%] w-full flex justify-between items-center mt-3">
            <p className = "text-white text-sm text-center">@Piotr_Gorczyński 2022</p>
            <div className = "flex justify-center items-center flex-col mt-5">
            <p className = "text-white text-sm text-center">Come, join us!</p>
            <p className = "text-white text-sm text-center">p.gorczynski4@gmail.com</p>
            </div>
            <p className = "text-white text-sm text-center">All rights reserved</p>
            </div>
        </div> 
    );
}

export default Footer;
