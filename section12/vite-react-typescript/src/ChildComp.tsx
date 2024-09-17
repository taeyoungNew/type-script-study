import { useState, ReactNode, MouseEvent } from "react"

interface ChildCompProps {
    msg: string,
    children: ReactNode // 태그사이에 
}
// function ChildComp({ msg }: { msg : string } ) {
function ChildComp({ msg, children }: ChildCompProps) {
    const [count, setCount ] = useState<number | string>(0)
    function updateCount(event: MouseEvent) {
        setCount(event.clientY)
    }
    return (
        <div>
            <h2>Child Comp</h2>
            <p>{ msg }</p>
            <div>{ children }</div>
            <p>count: { count }</p>
            <button onClick={updateCount}> +1 </button>
        </div>
    )
}

export default ChildComp