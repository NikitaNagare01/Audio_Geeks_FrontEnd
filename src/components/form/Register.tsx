"use client";

import { Button } from "../../components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../components/ui/form";
import { Input } from "../../components/ui/input";

import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { Value } from "@radix-ui/react-select";

const formSchema = z
  .object({
    first_name: z.string().min(2, {
      message: "First name must be at least 2 characters.",
    }),
    last_name: z.string().min(2, {
      message: "Last name must be at least 2 characters.",
    }),
    role: z.enum(["Admin", "Tour Manager", "Brand Manager", "Audiophile"]),
    mobile_no: z.string().regex(/^[0-9]{10}$/, "Invalid mobile number format"),
    alt_mob_no: z.string().regex(/^[0-9]{10}$/, "Invalid mobile number format"),
    email: z.string().email("Invalid email"),
    pincode: z
      .string()
      .regex(/^[0-9]{6}$/, "Invalid pincode format. Must be a 6-digit number."),
    address: z.string(),

    password: z
      .string()
      .min(1, "Password is required")
      .min(8, "Password must have at least 8 characters"),
    cpassword: z
      .string()
      .min(1, "Password is required")
      .min(8, "Password must have at least 8 characters"),
  })
  .refine(
    (data) => {
      return data.password === data.cpassword;
    },
    {
      message: "Passwords do not match",
      path: ["cpassword"],
    }
  );

const userschema = z.object({
  username: z
    .string()
    .min(5, "Username should contain minimum 5 characters")
    .max(15, "username should not contain more than 15 characters"),
});

const Register = () => {
  const [verified, setverified] = useState(false);
  const [msg, setmsg] = useState("");

  const [username, setusername] = useState("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      mobile_no: "",
      alt_mob_no: "",
      email: "",
      pincode: "",
      address: "",
      password: "",
      cpassword: "",
    },
  });

  const user = useForm<z.infer<typeof userschema>>({
    resolver: zodResolver(userschema),
    defaultValues: {
      username: "",
    },
  });

  // const verifyusername = async (value: z.infer<typeof userschema>) => {
  //   const response = await fetch(
  //     "https://audiogeeks.onrender.com/auth/verify_username",
  //     {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         user_name: value.username,
  //       }),
  //     }
  //   );

  //   const data = await response.json();
  //   setmsg(data.message);
  //   setusername(value.username);

  //   if (response.status === 200) {
  //     setverified(true);
  //   }
  // };

  const router = useRouter();

  const onSubmit = async (value: z.infer<typeof formSchema>) => {
    console.log(value.role);

    const response = await fetch(
      "https://audiogeeks.onrender.com/auth/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first_name: value.first_name,
          last_name: value.last_name,
          role: value.role,
          mobile_no: value.mobile_no,
          alt_mob_no: value.alt_mob_no,
          email: value.email,
          pincode: value.pincode,
          address: value.address,
          password: value.password,
          c_password: value.cpassword,
        }),
      }
    );

    const data = await response.json();
    console.log(data);
    // sessionStorage.setItem("rtoken", data.token);
    alert(data.message);

    router.push("/login");
  };

  return (
    <div>
       
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
            <div className="text-center font-bold">
              <h1>Register</h1>
            </div>

            <div className="mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400"></div>

            <div className="space-y-2">
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <FormField
                    control={form.control}
                    name="first_name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input placeholder="First name" {...field} />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid gap-2">
                  <FormField
                    control={form.control}
                    name="last_name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Last name" {...field} />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div>
                <FormField
                  control={form.control}
                  name="role"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>Role</FormLabel>
                        <Select onValueChange={field.onChange}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="select role" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Admin">Admin</SelectItem>
                            <SelectItem value="Tour Manager">
                              Tour Manager
                            </SelectItem>
                            <SelectItem value="Brand Manager">
                              Brand Manager
                            </SelectItem>
                            <SelectItem value="Audiophile">
                              Audiophile
                            </SelectItem>
                          </SelectContent>
                        </Select>

                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <FormField
                    control={form.control}
                    name="mobile_no"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mobile no.</FormLabel>
                        <FormControl>
                          <Input placeholder="Mobile no" {...field} />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid gap-2">
                  <FormField
                    control={form.control}
                    name="alt_mob_no"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Alternate Mobile no</FormLabel>
                        <FormControl>
                          <Input placeholder="Alternate no" {...field} />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Email" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div>
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Address</FormLabel>
                      <FormControl>
                        <Input placeholder="address" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div>
                <FormField
                  control={form.control}
                  name="pincode"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Pincode </FormLabel>
                      <FormControl>
                        <Input placeholder="pincode" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div>
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input placeholder="" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div>
                <FormField
                  control={form.control}
                  name="cpassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirm Password</FormLabel>
                      <FormControl>
                        <Input placeholder="" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <Button className="w-full mt-6" type="submit">
              Register
            </Button>
          </form>

          <div className="mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400">
            or
          </div>
          <Button variant="outline" className="w-full">
            Sign up with Google
          </Button>

          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link href="login" className="underline">
              Login
            </Link>
          </div>
        </Form>
      
    </div>
  );
};

export default Register;
