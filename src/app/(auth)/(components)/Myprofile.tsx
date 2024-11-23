'use client'


import {
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Input } from "../../../components/ui/input"
import { useSelector } from "react-redux"

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"


function Myprofile({profile}:any) {

  const role = useSelector((state:any)=>state.rolestate.role);

  return (
    <div>
        

    <Table>
      <TableHeader>
      </TableHeader>
      
      <TableBody>
        
        <TableRow >
        <TableCell className="font-medium">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </TableCell>
        <TableCell className="font-bold"><h1>{profile.first_name}  {profile.last_name}</h1></TableCell>
        </TableRow>

       
      </TableBody>
    </Table>


    <div className=" flex-1 min-w-[200px] p-4 ">            
            <p className="text-left ">Email :</p>
            <Input value={profile?.email}/>
    </div>
    <div className=" flex-1 min-w-[200px] p-4 ">            
            <p className="text-left ">Role :</p>
            <Input value={role}/>
    </div>

    <div className="flex flex-wrap gap-4">
        <div className="flex-1 min-w-[200px] p-4 ">
           <div className=" gap-4">

            <p className="text-left ">Mobile No:</p>
            <Input value={profile?.mobile_no}/>
            </div>
        </div>
        
        <div className="flex-1 min-w-[200px] p-4 ">
           <div className=" gap-4">

            <p className="text-left ">Alternate No:</p>
            <Input value={profile?.alt_mob_no}/>
            </div>
        </div> 
    </div>

    <div className=" flex-1 min-w-[200px] p-4 ">
            <p className="text-left ">Address :</p>
            <Input value={profile?.address}/>
    </div>

    <div className="flex flex-wrap gap-4">
        <div className="flex-1 min-w-[200px] p-4 ">
           <div className=" gap-4">

            <p className="text-left ">Country :</p>
            <Input  value={"india"}/>
            </div>
        </div>
        
        <div className="flex-1 min-w-[200px] p-4 ">
           <div className=" gap-4">

            <p className="text-left ">State :</p>
            <Input value={'Maharashtra'}/>
            </div>
        </div> 
    </div>
    <div className="flex flex-wrap gap-4">
        <div className="flex-1 min-w-[200px] p-4 ">
           <div className=" gap-4">

            <p className="text-left ">City :</p>
            <Input value={"karad"}/>
            </div>
        </div>
        
        <div className="flex-1 min-w-[200px] p-4 ">
           <div className=" gap-4">

            <p className="text-left ">Pin code :</p>
            <Input value={profile?.pincode}/>
            </div>
        </div> 
    </div>



    

    </div>
  )
}

export default Myprofile
