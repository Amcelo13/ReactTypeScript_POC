type InputProps = {
    value:string,
    handleChange: (event: React.ChangeEvent<HTMLInputElement>)=>void
}

export const Input = (props: InputProps) =>{
    /*or this can also be called as
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
        console.log(event)
    }
    */
    return <input type="text" value={props.value} onChange={props.handleChange}/>

}