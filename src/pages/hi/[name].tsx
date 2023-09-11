import { useParams } from 'react-router'

function Hi() {
    const params = useParams()
    return (
        <div>
            <div><strong>/hi</strong> route</div>
            <p>Hi: { params.name }</p>
            <br />
            <a href="/">Go Home</a>
        </div>
    )
}

export default Hi
