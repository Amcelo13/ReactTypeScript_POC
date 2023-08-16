//Object types
import { PersonProps } from '../types/Person.types'

export const Person = (props: PersonProps) => {
    
    return <div>The name is {props.name.first} {props.name.last}</div>
    
}