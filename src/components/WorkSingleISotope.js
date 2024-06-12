// import Isotope from "isotope-layout";
// import { Fragment, useEffect, useRef } from "react";
// const WorkSingleISotope = () => {
//   const isotope = useRef();
//   useEffect(() => {
//     setTimeout(() => {
//       isotope.current = new Isotope(".m-gallery", {
//         itemSelector: ".col-xs-12",
//         //    layoutMode: "fitRows",
//         percentPosition: true,
//         masonry: {
//           columnWidth: ".col-xs-12",
//         },
//         animationOptions: {
//           duration: 750,
//           easing: "linear",
//           queue: false,
//         },
//       });
//     }, 1000);
//   }, []);
//   return (
//     <Fragment>
//       <div className="m-gallery">
//         <div className="row">
//           <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
//             <div className="works-item">
//               <div
//                 className="image scrolla-element-anim-1 scroll-animate"
//                 data-animate="active"
//               >
//                 <div className="img">
//                   <a
//                     href="assets/images/celicieux-ex1.png"
//                     className="has-popup-image"
//                   >
//                     <img
//                       decoding="async"
//                       src="assets/images/celicieux-ex1.png"
//                       alt="Item 1"
//                       loading="lazy"
//                     />
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
//             <div className="works-item">
//               <div
//                 className="image scrolla-element-anim-1 scroll-animate"
//                 data-animate="active"
//               >
//                 <div className="img">
//                   <a href="assets/images/celicieux-ex2.png" className="has-popup-image">
//                     <img
//                       decoding="async"
//                       src="assets/images/celicieux-ex2.png"
//                       alt="Item 2"
//                       loading="lazy"
//                     />
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
//             <div className="works-item">
//               <div
//                 className="image scrolla-element-anim-1 scroll-animate"
//                 data-animate="active"
//               >
//                 <div className="img">
//                   <a href="assets/images/celicieux-ex3.png" className="has-popup-image">
//                     <img
//                       decoding="async"
//                       src="assets/images/blog6.jpg"
//                       alt="Item 3"
//                       loading="lazy"
//                     />
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Fragment>
//   );
// };
// export default WorkSingleISotope;
