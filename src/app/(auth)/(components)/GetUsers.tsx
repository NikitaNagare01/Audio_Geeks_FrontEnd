'user client';
import React, { useEffect, useState } from 'react'

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { Button } from "@/components/ui/button"
import { json } from 'stream/consumers';
import { useRouter } from 'next/navigation';

const GetUsers = () => {

    const router = useRouter();

    const [getusers, setgetusers] = useState([]);
    const [error, seterror] = useState("");

    const [audiophiles , setaudiophiles] =useState([]);
    const [admins, setadmins] = useState([]);
    const [brandmanagers, setbrandmanagers] = useState([]);
    

    const token =" Bearer "+localStorage.getItem('token');

    const fetchData =React.useCallback(async()=>{
        try {
            const response =await fetch('https://audiogeeks.onrender.com/admin/all_users',
                {
                    method : 'GET',
                    headers :{
                    'Authorization' :token,
                }}
            );

            const data = await response.json();

            if(response.status!=200){
                seterror("Error");
            }else{
                setgetusers(data.users);
                console.log(data.users);
            }
        }catch (error) {
            seterror('An error occurred while fetching users.');
        }
    },[token]);

    useEffect(()=>{
        fetchData();
        // eslint-disable-next-line
    }
    ,[fetchData])

    useEffect(()=>{

        const audiophilefilter = getusers.filter((ele :any)=>ele.role==="Audiophile");
        setaudiophiles(audiophilefilter);
        const adminfilter = getusers.filter((ele :any)=>ele.role==="Admin");
        setadmins(adminfilter);
        const brandmanagerfilter = getusers.filter((ele:any)=>ele.role==="Brand Manager");
        setbrandmanagers(brandmanagerfilter);
        // eslint-disable-next-line
    }, [getusers])



    const Delete =async(ele:any)=>{
        try{

            const userConfirmed = confirm(`Are you sure you want to delete ${ele.first_name} ${ele.last_name}?`);
            if (!userConfirmed) {
                 return; // Exit the function if the user cancels
            }

            

            console.log(ele._id);

            const response = await fetch('https://audiogeeks.onrender.com/admin/deleteuser', {
                method:"POST",
                headers:{
                    'Authorization' :token,
                    'Content-Type' :'application/json'
                },
                body: JSON.stringify({
                    _id :ele._id
                })
            }) 

            const data = await response.json();

            if(response.status!=200){
                alert(data.message);
            }else{
                fetchData();
                alert(data.message);
            }
        }catch (error) {
            seterror('An error occurred while fetching users.');
        }
        fetchData();
    }


    const adduseraudio =()=>{
        router.push("/register");
    }





    if(error!==""){
        return(
            <div>{error}</div>
        )
    }
    
    


  return (
    <div>

            <Button onClick={()=>adduseraudio()}>Add Audiophile / Brand Manager</Button>
            <br/><br/><br/><br/>


            <div >
                <h1 className='font-semibold'>Admin</h1>
                <div className='flex justify-between flex-wrap'>
                        {admins.map((ele:any)=>(
                            

                            <div key={`${ele.first_name}-${ele.last_name}`} className='flex-1  p-6  shadow-md rounded-md'>

                                <Card>
                                <CardHeader>
                                </CardHeader>
                                <CardContent className='font-semibold'>
                                <p>{ele.first_name} {ele.last_name}</p>
                                </CardContent>
                                <CardFooter className="flex justify-between">
                                    <Button variant="outline">Update Role</Button>
                                    <Button onClick={()=>Delete(ele)}>Delete</Button>
                                </CardFooter>
                               </Card>
                            </div>
                            
                            
                        ))}
                </div>
            </div>
            <br/><br/><br/><br/>
            <div >
                <h1 className='font-semibold'>Brand Manager</h1>
                <div className='flex justify-between flex-wrap'>
                        {brandmanagers.map((ele:any)=>(
                            

                            <div key={`${ele.first_name}-${ele.last_name}`} className='flex-1  p-6  shadow-md rounded-md'>

                                <Card>
                                <CardHeader>
                                </CardHeader>
                                <CardContent className='font-semibold'>
                                <p>{ele.first_name} {ele.last_name}</p>
                                </CardContent>
                                <CardFooter className="flex justify-between">
                                    <Button variant="outline">Update Role</Button>
                                    <Button onClick={()=>Delete(ele)}>Delete</Button>
                                </CardFooter>
                               </Card>
                            </div>
                            
                            
                        ))}
                </div>
            </div>
            <br/><br/><br/><br/>
            <div>
                <h1 className='font-semibold'>Audiophiles</h1>
                <div className="flex justify-between flex-wrap ">
                        {audiophiles.map((ele:any)=>(
                            <div key={`${ele.first_name}-${ele.last_name}`} className='flex-1  p-6  shadow-md rounded-md'>

                                <Card>
                                <CardHeader>
                                </CardHeader>
                                <CardContent className='font-semibold'>
                                <p>{ele.first_name} {ele.last_name}</p>
                                </CardContent>
                                <CardFooter className="flex justify-between">
                                    <Button variant="outline">Update Role</Button>
                                    <Button onClick={()=>Delete(ele)}>Delete</Button>
                                </CardFooter>
                            </Card>
                            </div>
                        ))}
                </div>

            </div>
    </div>
  )
}

export default GetUsers
