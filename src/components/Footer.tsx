'use client'


import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

const Footer = () => {
  return (
    // <div className="container mb-[2rem]">

    //     <div className="grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-10 mt-12">

    //     <div className="bg-[#262626] p-10 text-[13px] font-light rounded-lg transition duration-500 ease-in-out text-white">
    //         <h5 className="font-bold">Contact Us</h5>
    //         <ul>

    //             <li>Facebook</li>
    //             <li>YouTube</li>
    //             <li>HeadFi</li>
    //             <li>WhatsApp</li>
    //         </ul>
    //     </div>

    //     <div className="bg-[#262626] p-10 text-[13px] font-light rounded-lg transition duration-500 ease-in-out text-white">
    //         <h5 className="font-bold">Brands</h5>
    //         <ul>
    //             <li>Boat</li>
    //             <li>Sony</li>
    //             <li>U&i</li>
    //             <li>Noise</li>
    //         </ul>
    //     </div>

    //     <div className="bg-[#262626] p-10 text-[13px] font-light rounded-lg transition duration-500 ease-in-out text-white">
    //         <h5 className="font-bold">Office Address</h5>
    //         <ul>
    //             <li>Flat no.</li>
    //             <li>Road</li>
    //             <li>Tal.</li>
    //             <li>Dis.</li>
    //         </ul>
    //     </div>


    //     </div>
      
    // </div>


    <div className="container  py-[30px]">

      <div className="grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-10 mt-[50px]">

        <Card className="bg-[#262626] p-10 text-[13px] font-light rounded-lg transition-all duration-500 ease-in-out text-white">
          <CardHeader>
            <CardTitle>Contact Us</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Facebook</p>
          </CardContent>
          <CardFooter>
            <p>YouTube</p>
          </CardFooter>
          <CardFooter>
            <p>HeadFi</p>
          </CardFooter>
          <CardFooter>
            <p>WhatsApp</p>
          </CardFooter>
        </Card>

        <Card className="bg-[#262626] p-10 text-[13px] font-light rounded-lg transition-all duration-500 ease-in-out text-white">
          <CardHeader>
            <CardTitle>Brands</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Boat</p>
          </CardContent>
          <CardContent>
            <p>Sony</p>
          </CardContent>
          <CardContent>
            <p>U&i</p>
          </CardContent>
          <CardContent>
            <p>Noise</p>
          </CardContent>
          
        </Card>

        <Card className="bg-[#262626] p-10 text-[13px] font-light rounded-lg transition-all duration-500 ease-in-out text-white">
          <CardHeader>
            <CardTitle>Office Address</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Flat no.</p>
          </CardContent>
          <CardFooter>
            <p>Road</p>
          </CardFooter>
          <CardFooter>
            <p>Tal.</p>
          </CardFooter>
          <CardFooter>
            <p>Dis.</p>
          </CardFooter>
        </Card>

      </div>

    </div>
  )
}

export default Footer
