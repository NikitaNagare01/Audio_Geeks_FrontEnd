'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "../../../components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../components/ui/form"
import { Input } from "../../../components/ui/input"
import { useRouter } from "next/navigation"

const formSchema = z.object({
    otp: z.string().min(6, {
      message: "INVALID OTP",
    }).max(6,"INVALID OTP"),
})

const page = () => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          otp: "",
        },
    })


    const router = useRouter();


    const onSubmit = async(value:z.infer<typeof formSchema>)=>{
        
        const token = 'Bearer ' + sessionStorage.getItem("rtoken")
        const response = await fetch("https://audiogeeks.onrender.com/auth/verify",{
            method:'POST',
            headers:{
                'Content-Type': 'application/json',
                'Authorization' : token
            },
            body:JSON.stringify({
                otp : value.otp
            })
        });

        
        const data = await response.json();

        if(response.status!=200){
          alert(data.message)
        }else{

          localStorage.setItem("token",data.token);
          
          console.log(data);
  
          router.push("/login");
        }
        
    }


  return (
    <div>

    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="otp"
          render={({ field }) => (
            <FormItem>
              <FormLabel>OTP</FormLabel>
              <FormControl>
                <Input placeholder="Enter otp" {...field} />
              </FormControl>
              <FormDescription>
                OTP must of 6 digit
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
      
    </div>
  )
}

export default page
