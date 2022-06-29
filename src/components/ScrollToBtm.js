// import React, { useState, useEffect } from 'react';
// import { FaAngleDown } from 'react-icons/fa';

// const ScrollToBtm = () => {
//     const [showBtmBtn, setShowBtmBtn] = useState(false);
//     useEffect(() => {
//         window.addEventListener("scrollDown", () => {
//             if (window.scrollY < 400) {
//               setShowBtmBtn(true);
//             } else {
//                 setShowBtmBtn(false);
//             }
//         });
//     }, []);
//     const goToBtm = () => {
//         window.scrollTo({
//           bottom:document.getElementsByClassName('footer'),
//             behavior: "smooth",
//         });
//     };
//     return (
//         <div className='btm-to-top'>
//             {" "}
//             {showBtmBtn && (
//                 <FaAngleDown
//                     className='icon-down-position icon-down-style'
//                     onClick={goToBtm}
//                 />
//             )}{" "}
//         </div>
//     );
// };
// export default ScrollToBtm;