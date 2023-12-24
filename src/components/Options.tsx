
type Listing = {
    title: string
    value?: string[][]
}

type Opt = {
    alt?: string
    id?: string
    className?: string
    lists?: Listing[]
    onChange?: any
    value?: any
}

const Options = (ctx: Opt) => {
    return (
        <>
            <div className={`flex flex-col gap-2 w-full`}>
                <label htmlFor={ctx.id} className="text-sm ml-2 font-bold text-amber-500">{ctx.alt || 'Masukin sesuatu :'}</label>
                <select onChange={ctx.onChange} value={ctx.value} id={ctx.id} className="default-options">
                    {ctx.lists?.map((x: Listing, i: number) => (
                        <optgroup label={x.title} key={i+x.title} className="font-[poppins]">
                            {x.value?.map((v, i: any) => (
                                <option value={v[0]} key={i+v}>{v[1]}</option>
                            ))}
                        </optgroup>
                    ))}
                </select>
            </div>
        </>
    )
}

export default Options