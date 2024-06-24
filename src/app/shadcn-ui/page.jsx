'use client'

import { Button } from "@/components/ui/button"
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Toaster } from "@/components/ui/toaster"
import { useToast } from "@/components/ui/use-toast"
import { useForm } from "react-hook-form"

const Home = () => {

  const { register, handleSubmit, formState: { errors } } = useForm({})

  const { toast } = useToast()

  function onSubmit(data) {
    console.log(data)
    toast({
      title: 'メッセージを送信しました！',
    })
  }

  return (
    <div className="mt-8">
      <h2 className="font-semibold text-center">お問い合わせフォーム</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-4 w-[90%] md:w-[40%] mx-auto">
        <FormItem>
          <Label htmlFor="name">名前</Label>
          <Input
            id="name" type="text"
            {...register('name', {
              required: '名前は必須です'
            })}
          />
          {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
        </FormItem>
        <FormItem>
          <Label htmlFor="email">メールアドレス</Label>
          <Input id="email" type="email" {...register('email')} />
        </FormItem>
        <FormItem>
          <Label htmlFor="message">メッセージ</Label>
          <Textarea id="message" type="text" {...register('message')} />
        </FormItem>
        <Button className="w-full">送信</Button>
        <Toaster />
      </form>

    </div>
  )
}

export default Home