import { HTMLInputTypeAttribute } from "react"

type Inputs = {
    alt?: string
    placeholder?: string
    id?: string
    className?: string
    type?: HTMLInputTypeAttribute
    onChange?: any
    value?: any
}

const Input = (ctx: Inputs) => {
    return (
        <>
            <div className={`flex flex-col gap-2 w-full`}>
                <label htmlFor={ctx.id} className="text-sm ml-2 font-bold text-amber-500">{ctx.alt || 'Masukin sesuatu :'}</label>
                <input onChange={ctx.onChange} value={ctx.value} placeholder={ctx.placeholder || 'Masukin sesuatu...'} className={`${ctx.className as any} default-input`} id={ctx.id} type={ctx.type} />
            </div>
        </>
    )
}

export default Input