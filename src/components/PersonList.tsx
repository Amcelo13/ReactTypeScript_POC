import { NameType } from '../types/Person.types'

type PersonListProps = {
    names: NameType[]
}

function PersonList(props: PersonListProps) {
    return (<>
        <div>{props.names.map((e) => {
            return (
                <>
                    <ul>

                        <li>{e.first}</li>
                        <li>{e.last}</li>
                    </ul>
                </>
            )
        })}</div>

    </>
    )
}

export default PersonList