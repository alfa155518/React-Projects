

export default function Alert({text,type}) {
    return (
        <>
        <div className={`alert alert-${type}`}>{text}</div>
        </>
    )
}