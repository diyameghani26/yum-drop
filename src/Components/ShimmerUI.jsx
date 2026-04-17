// import React from "react";

// const ShimmerUI = () => {
//   return (
//     <div className="animate-pulse">
      
  

//       {/* 🔶 BODY */}
//       <div className="w-full pt-6 px-6 md:px-16">

//         {/* Heading */}
//         <div className="space-y-3">
//           <div className="w-3/4 h-6 bg-[#fef8f5] rounded"></div>
//           <div className="w-1/2 h-6 bg-[#fef8f5] rounded"></div>
//         </div>

//         {/* Search Bar */}
//         <div className="w-full max-w-md mt-5">
//           <div className="w-full h-12 bg-[#fef8f5] rounded-full"></div>
//         </div>

//         {/* Button */}
//         <div className="mt-5">
//           <div className="w-40 h-10 bg-[#fef8f5] rounded-xl"></div>
//         </div>

//         {/* 🔶 RESTAURANT CARDS */}
//         <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
          
//           {Array(12).fill("").map((_, index) => (
//             <div key={index} className="bg-white rounded-2xl p-3 shadow-sm">
              
//               {/* Image */}
//               <div className="w-full h-40 bg-[#fef8f5] rounded-xl"></div>

//               {/* Text */}
//               <div className="mt-3 space-y-2">
//                 <div className="w-3/4 h-4 bg-[#f9ebe3] rounded"></div>
//                 <div className="w-1/2 h-4 bg-[#f9ebe3] rounded"></div>
//                 <div className="w-1/3 h-3 bg-[#f9ebe3] rounded"></div>
//                 <div className="w-2/3 h-3 bg-[#f9ebe3] rounded"></div>
//                 <div className="w-1/2 h-4 bg-[#f9ebe3] rounded"></div>
//               </div>

//             </div>
//           ))}

//         </div>
//       </div>
//     </div>
//   );
// };

// export default ShimmerUI;



import React from "react";

const ShimmerUI = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-6 animate-pulse">

      {/* RESTAURANT CARD SKELETON */}
      <div className="bg-white rounded-3xl shadow-md border border-gray-200 p-5 md:p-6 space-y-3">

        <div className="h-6 w-2/3 bg-gray-300 rounded"></div>

        <div className="flex gap-2">
          <div className="h-4 w-10 bg-gray-300 rounded"></div>
          <div className="h-4 w-20 bg-gray-300 rounded"></div>
        </div>

        <div className="h-4 w-1/2 bg-gray-300 rounded"></div>

        <div className="h-3 w-1/3 bg-gray-300 rounded"></div>

        <div className="border-t pt-3">
          <div className="h-3 w-2/3 bg-gray-300 rounded"></div>
        </div>

      </div>

      {/* MENU TITLE SKELETON */}
      <div className="flex items-center justify-center mt-8 mb-4 gap-3">
        <div className="h-1 w-10 bg-gray-300 rounded"></div>
        <div className="h-4 w-16 bg-gray-300 rounded"></div>
        <div className="h-1 w-10 bg-gray-300 rounded"></div>
      </div>

      {/* SEARCH BAR SKELETON */}
      <div className="h-12 w-full bg-gray-300 rounded-xl mb-6"></div>

      {/* CATEGORY + ITEMS SKELETON */}
      <div className="space-y-8">

        {Array(3).fill("").map((_, i) => (
          <div key={i} className="space-y-4">

            {/* CATEGORY TITLE */}
            <div className="h-5 w-1/3 bg-gray-300 rounded"></div>

            {/* ITEM 1 */}
            {Array(3).fill("").map((_, j) => (
              <div
                key={j}
                className="flex justify-between border-b border-gray-200 py-6"
              >

                {/* LEFT SIDE */}
                <div className="w-3/4 space-y-2">

                  <div className="h-3 w-8 bg-gray-300 rounded"></div>

                  <div className="h-4 w-1/2 bg-gray-300 rounded"></div>

                  <div className="h-3 w-20 bg-gray-300 rounded"></div>

                  <div className="h-3 w-16 bg-gray-300 rounded"></div>

                  <div className="h-3 w-full bg-gray-300 rounded"></div>

                </div>

                {/* RIGHT SIDE */}
                <div className="w-1/4 flex flex-col items-center space-y-2">

                  <div className="w-20 h-20 bg-gray-300 rounded-xl"></div>

                  <div className="h-6 w-14 bg-gray-300 rounded-lg"></div>

                  <div className="h-3 w-16 bg-gray-300 rounded"></div>

                </div>

              </div>
            ))}

          </div>
        ))}

      </div>

    </div>
  );
};

export default ShimmerUI;