import ContactUs from "@/components/ContactUs";
import { Features } from "@/components/Features";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Service from "@/components/Service";
import { Footerdemo } from "@/components/ui/footer-section";
import { MessageCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
const page = () => {
  return (
    <div className="relative">
      <div className="w-full dark:bg-black bg-white dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2]">
        <Hero />
      </div>
      <div className="bg-gray-50">
        <Service />
      </div>
      <div>
        <HowItWorks />
      </div>
      <div className="bg-gray-50">
        <Features />
      </div>
      <div>
        <Pricing />
      </div>
      <div>
        <ContactUs />
      </div>
      <div>
        <Footerdemo />
      </div>

      <Dialog>
        <DialogTrigger>
          <div className="bg-primary text-white p-3 m-3 border fixed rounded bottom-0 right-0 cursor-pointer">
            <MessageCircle />
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogTitle></DialogTitle>
          <DialogDescription></DialogDescription>
          <DialogHeader>
            <Card className="w-full shadow-none border-none">
              <CardHeader>
                <CardTitle>Book a Consultation</CardTitle>
                <CardDescription>
                  Fill the below details to get started
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="" />
                    </div>
                  </div>
                  <div className="grid w-full items-center gap-4 mt-3">
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="name">Email</Label>
                      <Input id="name" placeholder="" />
                    </div>
                  </div>

                  <div className="w-full flex items-start gap-3 mt-3">
                    <div className="grid w-full items-center gap-4 w-[70px]">
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="name">Code</Label>
                        <Input id="name" placeholder="" />
                      </div>
                    </div>
                    <div className="grid w-full items-center gap-4">
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="name">Phone</Label>
                        <Input id="name" placeholder="" />
                      </div>
                    </div>
                  </div>
                  <div className="grid w-full items-center gap-4 mt-3">
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="name">Message</Label>
                      <Textarea id="name" placeholder="" />
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex justify-between w-full">
                <Button className="w-full">Submit</Button>
              </CardFooter>
            </Card>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default page;
