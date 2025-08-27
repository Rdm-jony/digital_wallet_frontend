/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useState, type ReactNode } from "react"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form"
import { useForm } from "react-hook-form"
import type { IUser } from "@/types/auth/auth.type"
import { toast } from "sonner"
import SingleImageUploader from "./SignleImageUploader"
import { useUpdateUserMutation } from "@/redux/features/auth/authApi"
import type { FileMetadata } from "@/hooks/use-file-upload"

// ✅ Zod schema
const updateProfileZodSchema = z.object({
  email: z.email(),
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long." })
    .max(50, { message: "Name cannot exceed 50 characters." })
    .optional(),

  phone: z
    .string()
    .regex(/^(?:\+8801\d{9}|01\d{9})$/, {
      message:
        "Phone number must be valid for Bangladesh. Format: +8801XXXXXXXXX or 01XXXXXXXXX",
    })
    .optional().or(z.literal(undefined)),

  address: z
    .string()
    .max(200, { message: "Address cannot exceed 200 characters." })
    .optional().or(z.literal("")),
})

// ✅ Type from schema
type UpdateUserInput = z.infer<typeof updateProfileZodSchema>

export default function EditProfile({
  children,
  user,
}: {
  children: ReactNode
  user: Partial<IUser>
}) {
  const [image, setImage] = useState<(File | FileMetadata) | null>(null);
  const [open, setOpen] = useState<boolean>(false)
  const [updateUser] = useUpdateUserMutation()

  const form = useForm<UpdateUserInput>({
    resolver: zodResolver(updateProfileZodSchema),
    defaultValues: {
      name: user?.name || "",
      email: user?.email || "",
      phone: user?.phone || undefined,
      address: user?.address || "",
    },
  })

  async function onSubmit(data: UpdateUserInput) {
    if (!user?._id) {
      return toast.error("user id not found")
    }
    const toastId = toast.loading("creating...")
    try {
      const formData = new FormData()
      formData.append("data", JSON.stringify(data))
      formData.append("file", image as File)

      const response = await updateUser({ data: formData, id: user?._id }).unwrap()
      if (response.success) {
        toast.success(response?.message, { id: toastId });
        form.reset()
        setOpen(false)
      }

    } catch (error: any) {
      console.log(error)
      toast.error(error?.data?.message, { id: toastId });
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="flex flex-col gap-0 overflow-y-visible p-0 sm:max-w-lg [&>button:last-child]:top-3.5">
        <DialogHeader className="contents space-y-0 text-left">
          <DialogTitle className="border-b px-6 py-4 text-base">
            Edit profile
          </DialogTitle>
        </DialogHeader>
        <DialogDescription className="sr-only">
          Make changes to your profile here. You can change your photo and set a
          username.
        </DialogDescription>

        <div className="overflow-y-auto">
          <SingleImageUploader onChange={setImage} />

          <div className="px-6 pt-4 pb-6">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input value={user?.email || ""} readOnly />
                  </FormControl>
                </FormItem>

                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Address</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your address" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone</FormLabel>
                      <FormControl>
                        <Input placeholder="+8801XXXXXXXXX" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full">
                  Save
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

