'use client'

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import {useForm} from 'react-hook-form';
import * as z from 'zod'
import {zodResolver} from '@hookform/resolvers/zod';
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import {Changeloggedinstate} from '@/provider/redux/loggedin'
import { changerolestate } from "@/provider/redux/role";



const formSchema = z.object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }).email('Invalid email'),
    password : z.string()
                .min(1, "Password is required")
                .min(8, "Password must have at least 8 characters"),
})



const Login = () => {

  const dispatch = useDispatch();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          username: "",
        },
    })


    const rout = useRouter();

    const onSubmit = async(value:z.infer<typeof formSchema>)=>{
        
      const response = await fetch("https://audiogeeks.onrender.com/auth/login",{
          method:'POST',
          headers:{
              'Content-Type': 'application/json'
          },
          body:JSON.stringify({
              email:value.username,
              password:value.password
          })
      });

      const data = await response.json();
      console.log(data);
      if(response.status!=200){
        alert(data.message)
      }else{

        localStorage.setItem('token', data.token);
        localStorage.setItem('role', data.role);
        console.log(data);
        dispatch(Changeloggedinstate(true));
        dispatch(changerolestate(data.role));
        alert(data.message);
        rout.push("/");
      }
    }

  return (
    <div>
       <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
              
              <div className="text-center font-bold"><h1>Login</h1></div>

              <div className="space-y-2">

                  <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                      <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                          <Input placeholder="Email" {...field} />
                      </FormControl>
                      
                      <FormMessage />
                      </FormItem>
                  )}
                  />
                  <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                      <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                          <Input placeholder="Enter your password" {...field} />
                      </FormControl>
                      
                      <FormMessage />
                      </FormItem>
                  )}
                  />
              </div>
                <Button className="w-full mt-6" type="submit">Login</Button>
            </form>


            <div className="mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400">
              or
            </div>
            <p>If you don&apos;t have an account, please&nbsp;
              <Link className='text-blue-500 hover:underline' href='/register'>Sign up</Link>
            </p>
            <br />
            <p className="text-center">
              <Link className='text-blue-500 hover:underline text-center' href='/forgotpass'>Forgot Password ?</Link>
            </p>
        </Form>
    </div>
  )
}

export default Login
