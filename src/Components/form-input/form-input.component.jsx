import "./form-input.styles.scss"
const FormInput = ({label, ...OtherProps}) => {
    return(
        <div className="group">
        <input className="form-input" {...OtherProps}/>
        {label &&( <label className={`${OtherProps.value ? 'shrink':''} form-input-label`}>{label}</label>)}

        </div>

    )
};
export default FormInput;