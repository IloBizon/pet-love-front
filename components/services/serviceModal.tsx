"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import styles from "@/styles/services/modal.module.scss"
import { withMask } from 'use-mask-input';
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { Popover, PopoverTrigger, PopoverContent } from "@radix-ui/react-popover"
import { Calendar } from "@/components/ui/calendar"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { usePathname, useSearchParams } from "next/navigation"
import { useRouter } from "next/navigation"

const formSchema = z.object({
    name: z.string().min(2).max(50),
    petName: z.string().min(2).max(50),
    phone: z.string().min(12).max(17),
    email: z.string().email(),
    date: z.date()
})


export default function ServiceModal() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          name: "",
          petName: "",
          phone: "",
          email: ""
        },
      })
    async function onSubmit(values: z.infer<typeof formSchema>) {
      
      const params = new URLSearchParams(searchParams.toString())
      let data = {
        date: format(values.date, "yyyy-mm-dd"),
        email: values.email,
        name: values.name,
        petName: values.petName,
        phone: values.phone,
        product: searchParams.get("product")
      }
      console.log(data)

      let response = await fetch(process.env.NEXT_PUBLIC_API_IP + "/bids/send-bid", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      if(await response.ok) {
          params.set("open", "false")
          router.push(pathname + '?' + params, {
            scroll: false
          })
      }
    }


  return (
    <>
    <div className={styles.modal__titleWrap}>
      <p className={styles.modal__title}>Оформить заявку</p>
    </div>

    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className={styles.modal__group}>
        <FormField 
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={styles.modal__label}>Ваше имя</FormLabel>
              <FormControl>
                <Input placeholder="Иванов" {...field} className={styles.modal__field}/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}/>
        <FormField 
          control={form.control}
          name="petName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={styles.modal__label}>Имя питомца</FormLabel>
              <FormControl>
                <Input placeholder="Барсик" {...field} className={styles.modal__field}/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}/>
        </div>


        
        <FormField 
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={styles.modal__label}>Номер телефона</FormLabel>
              <FormControl>
                <Input  placeholder="+7(999)999-99-99" {...field} className={styles.modal__field} ref={withMask('+7(999)-999-99-99')}/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}/>
          <FormField 
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={styles.modal__label}>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="email@alabuga.ru" {...field} className={styles.modal__field}/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}/>
          <FormField 
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem className="flex flex-col ">
              <FormLabel className={styles.modal__label}>Дата посещения</FormLabel>
              <Popover>
                <PopoverTrigger asChild >
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] pl-3 text-left font-normal text-black",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Выберите дату</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                    className="bg-background text-foreground rounded-lg border-black border-1"
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    fromDate={new Date()}  
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}/>    
        
        <div className="w-full flex"><Button type="submit" className={styles.modal__button}>Отправить</Button></div>
      </form>
    </Form>
    </>

  )

}