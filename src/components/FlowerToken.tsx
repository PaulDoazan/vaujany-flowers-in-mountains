import { useEffect, useRef } from "react";

export default function FlowerToken({ index }: { index: number }) {
    const draggableRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (draggableRef.current) {
            draggableRef.current.style.transform = 'translate(' + (index * 100) + 'px, ' + '-100px)'
            draggableRef.current.setAttribute('data-x', `${index * 100}`)
            draggableRef.current.setAttribute('data-y', '-100')
        }
    }, [])

    return (
        <>
            <div ref={draggableRef} className="draggable absolute select-none w-20 h-20 bg-red-600 rounded-full flex justify-center items-center">
            </div>
        </>
    )
}
