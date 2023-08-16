type ContainerTypes = {
    styles: React.CSSProperties
}

export const Container = (props: ContainerTypes) => {
    return (
        <div style={props.styles}>
            Text Content Goes Here
        </div>
    )
}