import MountainsLayer from "./components/MountainsLayer"
import interact from "interactjs";

function App() {
  interact('.draggable')
    .draggable({
      listeners: {
        // call this function on every dragmove event
        move: dragMoveListener,
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

  // interact('.dropzone').dropzone({
  //   overlap: 0.05,
  //   ondragenter: (event) => {
  //     // const draggableElement = event.relatedTarget,
  //     const dropzoneElement = event.target;
  //     console.log(dropzoneElement);

  //     // feedback the possibility of a drop
  //     dropzoneElement.classList.add('hovered');
  //   },
  //   ondragleave: (event) => {
  //     // const draggableElement = event.relatedTarget,
  //     const dropzoneElement = event.target;

  //     // feedback the possibility of a drop
  //     dropzoneElement.classList.remove('hovered');
  //   },
  //   ondrop: function (event) {
  //     event.relatedTarget.style.transform = event.target.style.transform
  //     event.relatedTarget.setAttribute('data-x', `${event.target.getAttribute('data-x')}`)
  //     event.relatedTarget.setAttribute('data-y', `${event.target.getAttribute('data-y')}`)
  //   },
  // })

  return (
    <>
      <div className="grid grid-cols-12 grid-rows-12 absolute top-0 bottom-0 left-0 right-0 bg-black">
        <MountainsLayer />
      </div>
    </>
  )
}

export default App
