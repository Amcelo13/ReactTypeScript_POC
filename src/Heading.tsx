type headingProps = {
    children: string
}

export const Heading = (props: headingProps) => {
    return <h4>{props.children}</h4>
}