'use client'

import clsx from 'clsx'
import Link from "next/link"
import {
  Bell,
  CircleUser,
  Home,
  LineChart,
  Menu,
  Package,
  Package2,
  Search,
  ShoppingCart,
  Users,
  Edit,
  Map,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { useEffect } from 'react'

import { useRouter } from "next/navigation";


import { Label } from "@/components/ui/label"
import Register from '@/components/form/Register'
import Myprofile from '../(components)/Myprofile'
import Editprofile from '../(components)/Editprofile'
import Notificationprofile from '../(components)/Notificationprofile'
import { headers } from 'next/headers'
import { useDispatch } from 'react-redux'
import {Changeloggedinstate} from '@/provider/redux/loggedin'


const page = () => {
  
  const router = useRouter();
  const pathname : string = usePathname();

  
  const [profile, setprofile] = useState()
  const [noti, setnoti] = useState(0);
  const [edit, setedit] = useState(0);
  const [tour, settour] = useState(0);
  

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const dispatch = useDispatch();

  const logout =()=>{
    localStorage.removeItem('token');
    dispatch(Changeloggedinstate(false))
    router.push("/login");
  }
  
  useEffect(() => {
    // Function to fetch data
    const fetchData = async () => {
      try {
        // Make API call
        const token =" Bearer "+localStorage.getItem('token');
        const response = await fetch('https://audiogeeks.onrender.com/profile/myprofile',
          {
            method : 'GET',
            headers :{
              'Authorization' :token,
          }}
        );
        if (!response.ok) {
          router.push("/login");
          throw new Error('please login first');
        }
        const result = await response.json();
        console.log(result);
        setprofile(result.profile); // Set the data
      } catch (err : any) {
        setError(err.message); // Set the error
      } finally {
        setLoading(false); // Set loading to false after the request is completed
      }
    };

    fetchData(); // Call the fetch function
  }, []); // Empty dependency array means this effect runs once on mount

  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
    

  
  return (
    <div className="container">
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
    <div className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Package2 className="h-6 w-6" />
            <span className="">Acme Inc</span>
          </Link>
          <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
            <Bell className="h-4 w-4" />
            <span className="sr-only">Toggle notifications</span>
          </Button>
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            <Link
              href="#"
              className={clsx("flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary", {"flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary" : pathname === "/profile"})}
              onClick={()=> {setnoti(0); setedit(0); settour(0)}}
            >
              <Home className="h-4 w-4" />
              My Profile
            </Link>
            <Link
              href="#"
              className={clsx("flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary", {"flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary" : noti === 1})}
              onClick={()=> {setnoti(1); setedit(0); settour(0)}}
            >
              <Bell className="h-4 w-4" />
              Notification
              <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                6
              </Badge>
            </Link>
           
            <Link
              href="#"
              className={clsx("flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary", {"flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary" : edit===1})}
              onClick={()=> {setnoti(0); setedit(1); settour(0)}}
            >
              <Edit className="h-4 w-4" />
              Edit
            </Link>
            <Link
              href="#"
              className={clsx("flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary", {"flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary" : tour===1})}
              onClick={()=> {setnoti(0); setedit(0); settour(1)}}
            >
              <Map className="h-4 w-4" />
              Tour
            </Link>
          </nav>
        </div>
        <div className="mt-auto p-4">
          <Card x-chunk="dashboard-02-chunk-0">
            <CardHeader className="p-2 pt-0 md:p-4">
              <CardTitle>Upgrade to Pro</CardTitle>
              <CardDescription>
                Unlock all features and get unlimited access to our support
                team.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
              <Button size="sm" className="w-full">
                Upgrade
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
    <div className="flex flex-col">
      <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="flex flex-col">
            <nav className="grid gap-2 text-lg font-medium">
            <Link
              href="#"
              className={clsx("flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary", {"flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary" : pathname === "/profile"})}
              onClick={()=> {setnoti(0); setedit(0); settour(0)}}
            >
              <Home className="h-4 w-4" />
              My Profile
            </Link>
            <Link
              href="#"
              className={clsx("flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary", {"flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary" : noti === 1})}
              onClick={()=> {setnoti(1); setedit(0); settour(0)}}
            >
              <Bell className="h-4 w-4" />
              Notification
              <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                6
              </Badge>
            </Link>
            
            <Link
              href="#"
              className={clsx("flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary", {"flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary" : edit===1})}
              onClick={()=> {setnoti(0); setedit(1); settour(0)}}
            >
              <Edit className="h-4 w-4" />
              Edit
            </Link>
            <Link
              href="#"
              className={clsx("flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary", {"flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary" : tour===1})}
              onClick={()=> {setnoti(0); setedit(0); settour(1)}}
            >
              <Map className="h-4 w-4" />
              Tour
            </Link>
            </nav>
            <div className="mt-auto">
              <Card>
                <CardHeader>
                  <CardTitle>Upgrade to Pro</CardTitle>
                  <CardDescription>
                    Unlock all features and get unlimited access to our
                    support team.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button size="sm" className="w-full">
                    Upgrade
                  </Button>
                </CardContent>
              </Card>
            </div>
          </SheetContent>
        </Sheet>
        <div className="w-full flex-1">
          <form>
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
              />
            </div>
          </form>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className="rounded-full">
              <CircleUser className="h-5 w-5" />
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem><Button onClick={logout}>Logout</Button></DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
        {/* <div className="flex items-center">

        {noti ? (
              <h1 className="text-lg font-semibold md:text-2xl">Notification</h1>
            ) : edit ? (
              <h1 className="text-lg font-semibold md:text-2xl">Edit</h1>
            ) : tour ? (
              <h1 className="text-lg font-semibold md:text-2xl">Tour</h1>
            ) : 
            <h1 className="text-lg font-semibold md:text-2xl">My Profile</h1>
            }
          
        </div> */}
        <div
          className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm" x-chunk="dashboard-02-chunk-1"
        >
          <div className="flex flex-col items-center gap-1 text-center">
            {noti ? (
              <Notificationprofile/>
            ) : edit ? (
              <Editprofile profile={profile} setprofile={setprofile}/>
            ) : tour ? (
              <h3 className="text-2xl font-bold tracking-tight">
                Tour
              </h3>
            ) : 

            <div>
              <Myprofile profile={profile}/>
            </div>

              

            }
            
            <p className="text-sm text-muted-foreground">
              You can start selling as soon as you add a product.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit laboriosam voluptatibus recusandae! Ex nam minima culpa fuga non nostrum ipsa nobis atque. Sequi ab hic laborum voluptatibus recusandae modi non.
            </p>
            <Button className="mt-4">Add Product</Button>
          </div>
        </div>
      </main>
    </div>
  </div>
  </div>
  )
}

export default page
