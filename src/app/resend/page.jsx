'use client'

import { Form, FormControl, FormDescription, FormItem, FormLabel, FormMessage, FormField } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import { formSchema } from "./schema"
import { zodResolver } from '@hookform/resolvers/zod'
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { sendEmail } from "./action"
import { useToast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"

const Home = () => {

  const { toast } = useToast()

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      body: ''
    }
  })

  async function onSubmit(data) {
    await sendEmail(data)
    toast({ title: 'メッセージを送信しました！' })
  }

  return (
    <div className="mt-8 w-[90%] md:w-[40%] mx-auto">
      <h2 className="font-semibold text-center mb-8">お問い合わせフォーム</h2>
      <Form {...form} >
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">

          <FormField
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>名前</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>メールアドレス</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="body"
            render={({ field }) => (
              <FormItem>
                <FormLabel>メッセージ</FormLabel>
                <FormControl>
                  <Textarea {...field} />
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />

          <Button className="w-full" disabled={form.formState.isSubmitting}>送信</Button>
        </form>
      </Form>
      <Toaster />
    </div >
  )
}

export default Home