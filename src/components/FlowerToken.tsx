import interact from "interactjs";
import { useEffect, useRef } from "react";

export default function FlowerToken({ value, index }: { value: Flower, index: number }) {
    const draggableRef = useRef<HTMLDivElement>(null)

    interact('.draggable')
        .draggable({
            // enable inertial throwing
            inertia: {
                resistance: 80,
                minSpeed: 30,
                endSpeed: 20,
                smoothEndDuration: 2000
            },
            // keep the element within the area of it's parent
            modifiers: [
                interact.modifiers.restrictRect({
                    restriction: '.droparea',
                    endOnly: false
                })
            ],
            // enable autoScroll
            // autoScroll: true,

            listeners: {
                // call this function on every dragmove event
                move: dragMoveListener,

                // call this function on every dragend event
                end(event: any) {
                    var textEl = event.target.querySelector('p')

                    textEl && (textEl.textContent =
                        'moved a distance of ' +
                        (Math.sqrt(Math.pow(event.pageX - event.x0, 2) +
                            Math.pow(event.pageY - event.y0, 2) | 0))
                            .toFixed(2) + 'px')
                }
            }
        })

    function dragMoveListener(event: any) {
        var target = event.target
        // keep the dragged position in the data-x/data-y attributes
        var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
        var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

        // translate the element
        target.style.transform = 'translate(' + x + 'px, ' + y + 'px)'

        // update the posiion attributes
        target.setAttribute('data-x', x)
        target.setAttribute('data-y', y)
    }

    useEffect(() => {
        if (draggableRef.current) {
            draggableRef.current.style.transform = 'translate(' + (index * 100) + 'px, ' + '-100px)'
            draggableRef.current.setAttribute('data-x', `${index * 100}`)
            draggableRef.current.setAttribute('data-y', '-100')
        }
    }, [])

    return (
        <>
            <div ref={draggableRef} className="draggable absolute select-none w-20 h-20 bg-red-600 bg-opacity-70 rounded-full flex justify-center items-center">
            </div>
        </>
    )
}
