const Section2 = ({className}) => {
    return (
        <a href="https://www.apple.com/iphone-16/" className={`w-full mt-4 ${className}`}>
            <div className="bg-[url('/iphone161.jpg')] tablet:bg-[url('/iphone162.jpg')] desktop:bg-[url('/iphone163.jpg')] h-[500px] tablet:h-[650px] desktop:h-[692px] bg-center text-white py-[37px] desktop:py-[55px]">
                <div className="w-full h-full flex flex-col justify-between items-center">

                    <div className="flex flex-col items-center">
                        <div className="text-[32px] leading-[36px] tablet:text-[48px] tablet:leading-[52px] desktop:text-[56px] desktop:leading-[60px] font-sfProDisplaySemibold">iPhone 16</div>
                        <div className="text-[19px] leading-[23px] tablet:text-[24px] tablet:leading-[28px] desktop:text-[28px] desktop:leading-8 mt-[6px]">Hello, Apple Intellegence.</div>
                    </div>

                    <div className="flex flex-col items-center text-black">
                        <div className="text-[17px] leading-[21px] tablet:text-[19px] tablet:leading-[23px] desktop:text-[21px] desktop:leading-[25px]">Available starting 9.20</div>
                        <div className="text-[17px] leading-[21px] tablet:text-[19px] tablet:leading-[23px] desktop:text-[21px] desktop:leading-[25px]">Apple Intellegence coming this fall</div>
                        <div className="flex justify-center gap-4 mt-[15px] font-sfProText">
                            <button className="bg-[#0071e3] rounded-[980px] text-sm py-[7px] px-[15px] tablet:py-[11px] tablet:px-[21px] tablet:text-[17px] leading-[20px] text-white hover:bg-[#0077ED]">Learn more</button>
                            <button className="border border-[#0077ED] rounded-[980px] text-sm py-[7px] px-[15px] tablet:py-[11px] tablet:px-[21px] tablet:text-[17px] text-[#0077ED] leading-[20px] hover:bg-[#0077ED] hover:text-white">Pre-order</button>
                        </div>
                    </div>

                </div>
            </div>
        </a>
    );
}
 
export default Section2;