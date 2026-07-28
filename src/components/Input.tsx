type InputProps = {
    name: string;
    value?: string;
    type?: string;
    onChange?: (e: any) => void;
    onKeyDown?: (e: any) => void;
    className?: string;
    disabled?: boolean;

}

export const Input = ({name, value, type, onChange, onKeyDown, className, disabled}: InputProps) => {
  return (
    <>
        <div className="mb-5">
            <input type={type} name={name} onKeyDown={onKeyDown} className={`${className} bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow placeholder:text-body`}value={value} onChange={onChange} disabled={disabled}  required />
        </div>    
    </>
  )
}
