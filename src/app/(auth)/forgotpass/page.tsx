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
    username: z
      .string(),
  });

const page = () => {

    const router = useRouter();
    
  const user = useForm<z.infer<typeof userschema>>({
    resolver: zodResolver(userschema),
    defaultValues: {
      username: "",
    },
  });

  const verifyusername = async (value: z.infer<typeof userschema>) => {

    const response = await fetch(
      "https://audiogeeks.onrender.com/auth/reset_password",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: value.username,
        }),
      }
    );

    const data = await response.json();
    if(response.status===200){
        alert(data.message);
        sessionStorage.setItem('forgottoken', "Bearer "+data.token);
        router.push("/savepass");
    }else{
        alert('Wrong User');
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
                <FormField
                  control={user.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Enter Email or Username </FormLabel>
                      <FormControl className="mt-[1rem]">
                        <Input
                          placeholder="username"
                          {...field}
                          
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button className="w-full mt-6" type="submit">
                  Next
                </Button>
              </div>
            </form>
          </Form>
        </div>
  )
}

export default page
