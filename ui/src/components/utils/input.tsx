
interface InputProps {
    label: string
    id?: string
    type?: string
    value?: string
    onChange?: React.ChangeEventHandler<HTMLInputElement>
}
export function Input(props: InputProps) {
    return (
        <div className="relative mb-4" >
            <label htmlFor={props.id} className="leading-7 text-sm text-gray-600" > {props.label} </label>
            <input type={props.type} id={props.id} value={props.value} onChange={props.onChange} className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        </div>
    )
}