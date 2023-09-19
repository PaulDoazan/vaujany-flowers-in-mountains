import { useEffect, useRef } from "react";
import interact from "interactjs";

const slotPositions = [
    { x: 150, y: -600 },
    { x: 350, y: -300 },
    { x: 480, y: -400 },
    { x: 540, y: -630 },
    { x: 810, y: -250 },
    { x: 900, y: -400 },
]

export default function FlowerSlot({ index }: { index: number }) {
    const dropzoneRef = useRef<HTMLDivElement>(null)

    interact('.dropzone').dropzone({
        overlap: 0.05,
        ondragenter: (event) => {
            // const draggableElement = event.relatedTarget,
            const dropzoneElement = event.target;
            console.log(dropzoneElement);

            // feedback the possibility of a drop
            dropzoneElement.classList.add('hovered');
        },
        ondragleave: (event) => {
            // const draggableElement = event.relatedTarget,
            const dropzoneElement = event.target;

            // feedback the possibility of a drop
            dropzoneElement.classList.remove('hovered');
        },
        ondrop: function (event) {
            event.relatedTarget.style.transform = event.target.style.transform
            event.relatedTarget.setAttribute('data-x', `${event.target.getAttribute('data-x')}`)
            event.relatedTarget.setAttribute('data-y', `${event.target.getAttribute('data-y')}`)
        },
    })

    useEffect(() => {
        if (dropzoneRef.current) {
            const x = slotPositions[index].x
            const y = slotPositions[index].y
            dropzoneRef.current.style.transform = 'translate(' + x + 'px, ' + `${y}px)`
            dropzoneRef.current.setAttribute('data-x', `${x}`)
            dropzoneRef.current.setAttribute('data-y', `${y}`)
        }
    }, [])
    return (
        <div ref={dropzoneRef} className="absolute dropzone select-none w-20 h-20 border-4 border-slate-400 bg-slate-400 bg-opacity-10 rounded-full pointer-events-none"></div>

    )
}
