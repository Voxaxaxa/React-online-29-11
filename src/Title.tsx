interface TitleProps {
    title: string
    nums: number
}

const Title = (props: TitleProps) => {
    return (
        <h1>
            Hello {props.title} Year:{props.nums}
        </h1>
    )
}

export default Title
