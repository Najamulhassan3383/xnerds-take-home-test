"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  budgetSize: z.string().min(1, { message: "Please enter your budget size." }),
  description: z
    .string()
    .min(10, { message: "Description must be at least 10 characters." }),
  hearAboutUs: z
    .string()
    .min(1, { message: "Please let us know how you heard about us." }),
  requiresNDA: z.boolean().optional(),
});

const ContactForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      budgetSize: "",
      description: "",
      hearAboutUs: "",
      requiresNDA: false,
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    form.reset();
  };

  return (
    <div className="flex flex-col md:flex-row bg-black text-white min-h-screen">
      <div className="w-full p-12 md:flex md:flex-col md:w-1/2">
        <h1 className="text-5xl font-bold mb-6">
          Talk to us and
          <br />
          get your project
          <br />
          <span className="text-orange-500">moving!</span>
        </h1>
        <div className="mb-4">
          <span className="flex items-center">
            <svg
              className="w-5 h-5 mr-2 text-orange-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            We will respond to you within 24 hours.
          </span>
        </div>
        <div>
          <span className="flex items-center">
            <svg
              className="w-5 h-5 mr-2 text-orange-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
            </svg>
            You'll be talking to product and tech experts
            <br />
            (no account managers).
          </span>
        </div>
        <div className="mt-8 bg-gray-800 rounded-lg aspect-video flex items-center justify-center">
          <svg
            className="w-16 h-16 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      </div>
      <div className=" w-full md:w-1/2 p-12">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 bg-white rounded-md px-2 py-4 text-black"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Your name"
                      {...field}
                      className="border-orange-500"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Your email"
                      {...field}
                      className="border-orange-500"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="budgetSize"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Budget Size</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Your budget"
                      {...field}
                      className="border-orange-500"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe your project"
                      {...field}
                      className="border-orange-500"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="hearAboutUs"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>How did you hear about us?</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Let us know"
                      {...field}
                      className="border-orange-500"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="requiresNDA"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="border-orange-500"
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>This Project requires an NDA</FormLabel>
                  </div>
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600"
            >
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ContactForm;
