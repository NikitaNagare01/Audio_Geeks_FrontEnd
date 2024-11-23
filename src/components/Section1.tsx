'use client'

// import { Card } from "./ui/card"; 


import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"



const Section1 = () => {

  const iterations = Array.from({length:15},(_, index)=>index);


  return (
    // <div className="w-full bg-black py-7.5 flex justify-between flex-wrap">
    //   <div className="flex flex-wrap gap-4 p-6 flex justify-between flex-wrap">
    //     {/* First Block */}
    //     <Card className="flex-1 min-w-[250px] p-6 bg-white shadow-md rounded-md">
    //       <h2 className="text-lg font-bold">Block 1</h2>
    //       <p>This is the content for the first block.</p>
    //     </Card>

    //     {/* Second Block */}
    //     <div className="flex-1 min-w-[250px] p-6  shadow-md rounded-md">
    //       <h2 className="text-white ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora nobis minima officiis et illum! Vitae exercitationem expedita voluptatum nulla eligendi sint suscipit, unde explicabo porro quis eaque earum velit tempora.</h2>
    //       <p className="text-white ">This is the content for the second block.</p>
    //     </div>
    //   </div>
    //   <div className="flex flex-wrap gap-4 p-6">
    //     {/* Second Block */}
    //     <div className="flex-1 min-w-[250px] p-6  shadow-md rounded-md">
    //       <h2 className="text-white ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora nobis minima officiis et illum! Vitae exercitationem expedita voluptatum nulla eligendi sint suscipit, unde explicabo porro quis eaque earum velit tempora.</h2>
    //       <p className="text-white ">This is the content for the second block.</p>
    //     </div>
    //     {/* First Block */}
    //     <Card className="flex-1 min-w-[250px] p-6 bg-white shadow-md rounded-md">
    //       <h2 className="text-lg font-bold">Block 2</h2>
    //       <p>This is the content for the first block.</p>
    //     </Card>

        
    //   </div>
    //   <div className="flex flex-wrap gap-4 p-6">
    //     {/* First Block */}
    //     <Card className="flex-1 min-w-[250px] p-6 bg-white shadow-md rounded-md">
    //       <h2 className="text-lg font-bold">Block 3</h2>
    //       <p>This is the content for the first block.</p>
    //     </Card>

    //     {/* Second Block */}
    //     <div className="flex-1 min-w-[250px] p-6  shadow-md rounded-md">
    //       <h2 className="text-white ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora nobis minima officiis et illum! Vitae exercitationem expedita voluptatum nulla eligendi sint suscipit, unde explicabo porro quis eaque earum velit tempora.</h2>
    //       <p className="text-white ">This is the content for the second block.</p>
    //     </div>
    //   </div>
    // </div>

    <div >

      <div className="w-full bg-black py-7.5 flex justify-between flex-wrap item-center h-auto  container mt-[2rem] p-[5rem]">
        <div className="flex justify-between flex-wrap ">
          
            <Card className="m-[2rem]">
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>

          <div className="flex-1 min-w-[250px] p-6  shadow-md rounded-md">
            <h2 className="text-white ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora nobis minima officiis et illum! Vitae exercitationem expedita voluptatum nulla eligendi sint suscipit, unde explicabo porro quis eaque earum velit tempora.</h2>
            <p className="text-white ">This is the content for the second block.</p>
          </div>
      
        </div>
        <div className="flex justify-between flex-wrap ">
          
            <Card className="m-[2rem]">
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>

          <div className="flex-1 min-w-[250px] p-6  shadow-md rounded-md">
            <h2 className="text-white ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora nobis minima officiis et illum! Vitae exercitationem expedita voluptatum nulla eligendi sint suscipit, unde explicabo porro quis eaque earum velit tempora.</h2>
            <p className="text-white ">This is the content for the second block.</p>
          </div>
      
        </div>
        <div className="flex justify-between flex-wrap ">
          
            <Card className="m-[2rem]">
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>

          <div className="flex-1 min-w-[250px] p-6  shadow-md rounded-md">
            <h2 className="text-white ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora nobis minima officiis et illum! Vitae exercitationem expedita voluptatum nulla eligendi sint suscipit, unde explicabo porro quis eaque earum velit tempora.</h2>
            <p className="text-white ">This is the content for the second block.</p>
          </div>
      
        </div>

      </div>

    </div>

  )
}

export default Section1
