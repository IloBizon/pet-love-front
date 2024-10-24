"use client"
import styles from "@/styles/services/filters.module.scss"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import { useCallback, useEffect } from "react"



export default function Filters() {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    

    const createQueryString = useCallback(
        (name: string, value: string) => {
          const params = new URLSearchParams(searchParams.toString())
          params.set(name, value)
     
          return params.toString()
        },
        [searchParams]
      )

    async function priceFilters(value: string) {
        router.push(pathname + '?' + createQueryString('sort', value),{ scroll: false })
    }
    
    async function categoryFilters(value: string) {
        router.push(pathname + '?' + createQueryString('category', value),{ scroll: false })
    }


    return(
        <>
        <div className={styles.filters}>
            <p className={styles.filters__title}>Фильтры</p>
            <Accordion type="multiple" defaultValue={["pricing","category"]}>
                <AccordionItem value="pricing">
                    <AccordionTrigger className={styles.block__title}>Цена</AccordionTrigger>
                    <AccordionContent>

                        <RadioGroup id="sort" defaultValue={searchParams.get("sort") == null ? "1" : searchParams.get("sort")} onValueChange={priceFilters}>
                            <div className={"flex items-center space-x-2"}>
                                <RadioGroupItem value="1" id="ascending" className={styles.block__button}/>
                                <Label htmlFor="ascending" className={styles.block__label}>Сначала дешёвые</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="-1" id="descending" className={styles.block__button}/>
                                <Label htmlFor="descending" className={styles.block__label}>Сначала дорогие</Label>
                            </div>
                        </RadioGroup>

                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="category">
                    <AccordionTrigger className={styles.block__title}>Категория</AccordionTrigger>
                    <AccordionContent className={styles.block__content}>
                    <RadioGroup defaultValue={searchParams.get("category") == null ? "all" : searchParams.get("category")} onValueChange={categoryFilters}>
                            <div className={"flex items-center space-x-2"}>
                                <RadioGroupItem value="all" id="all" className={styles.block__button}/>
                                <Label htmlFor="all" className={styles.block__label}>Всё</Label>
                            </div>
                            <div className={"flex items-center space-x-2"}>
                                <RadioGroupItem value="health" id="health" className={styles.block__button}/>
                                <Label htmlFor="health" className={styles.block__label}>Здоровье</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="care" id="care" className={styles.block__button}/>
                                <Label htmlFor="care" className={styles.block__label}>Уход</Label>
                            </div>
                        </RadioGroup>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>

        </div>
        </>
    )
    
}