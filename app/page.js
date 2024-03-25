import React from "react";
import Frontpage from "@/app/FrontPage/page"
/**
 
    max-w-5xl: This likely sets the maximum width of the <div> element to 5xl, 
    mx-auto: This sets the left and right margins of the <div> to "auto", effectively centering it horizontally within its container.
    px-10: This sets horizontal padding of size 10 (in a unit like pixels or rems) for the <div> element.

    mx => margin horizontal
 */
//starting point
function Page()
{
   return <div className="max-w-5xl mx-auto px-10">
    <Frontpage/>
  </div>
}

export default Page;