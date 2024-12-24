"use client";

import { Button } from "../../../components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../components/ui/form";
import { Input } from "../../../components/ui/input";

import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

const userschema = z.object({
  otp: z.string().min(6, {
    message: "INVALID OTP",
  }).max(6,"INVALID OTP"),
  password: z
      .string()
      .min(1, "Password is required")
      .min(8, "Password must have at least 8 characters"),
  cpassword: z
      .string()
      .min(1, "Password is required")
      .min(8, "Password must have at least 8 characters"),
}).refine(
  (data) => {
    return data.password === data.cpassword;
  },
  {
    message: "Passwords do not match",
    path: ["cpassword"],
  }
);

const Page = () => {
  const router = useRouter();

  const user = useForm<z.infer<typeof userschema>>({
    resolver: zodResolver(userschema),
    defaultValues: {
      otp: "",
      password: "",
      cpassword:"",
    },
  });



  const verifyusername = async (value: z.infer<typeof userschema>) => {
    const token: any = sessionStorage.getItem('forgottoken');

    const response = await fetch(
      "https://audiogeeks.onrender.com/auth/save_password",
      {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization' : token,
        },
        body: JSON.stringify({
          otp: value.otp,
          password : value.password,
          cpassword : value.cpassword,
        }),
      }
    );

    const data = await response.json();
    if(response.status===201){
        alert(data.message);
        router.push("/login");
    }else{
        alert(data.message);
    }
  };


  return (
    <div>
       <Form {...user}>
            <form
              onSubmit={user.handleSubmit(verifyusername)}
              className="w-full"
            >
              <div>
                <div>
                <FormField
                  control={user.control}
                  name="otp"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>OTP</FormLabel>
                      <FormControl >
                        <Input
                          placeholder="OTP"
                          {...field}
                          
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                </div>

                <div>
                <FormField
                  control={user.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Enter Password</FormLabel>
                      <FormControl >
                        <Input type="password"
                          placeholder=""
                          {...field}
                          
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                </div>

                <div>
                <FormField
                  control={user.control}
                  name="cpassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirm Password</FormLabel>
                      <FormControl >
                        <Input type="password"
                          placeholder=""
                          {...field}
                          
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                </div>

                <Button className="w-full mt-6" type="submit">
                  Submit
                </Button>
              </div>
            </form>
          </Form>
    </div>
  )
}

export default Page
