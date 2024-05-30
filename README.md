# chromium-drag-drop

Demo: https://danielmanning.github.io/chromium-drag-drop/

A draggable box is rendered when click-dragging over the paragraph content.

On a Mac, the box does not get dragged the first time when rendered underneath the mouse.
The draggable div is only dragged when the user drags and lets go within the draggable div
boundary, then drags the box again.

![mac_draganddrop_example.mov](./examples/mac_draganddrop_example.mov)

In the above example video, there are two attempts where a user clicks and drags within the paragraph.
A draggable div is rendered under the mouse position.

Attempt 1: 
Expected behavior: The draggable div should automatically be picked up by the mouse during the drag gesture.
Actual behavior: The draggable div is not picked up. The div is then unmounted when the user mouses up outside of its region.

Attempt 2: A user clicks and drags to render the draggable div.
They then release the mouse while still within the boundary of the draggable div.
The user then performs a drag gesture while the div is still rendered in the DOM.
The draggable div is then picked up and dragged. It is unmounted when the user finishes the drag (onDragEnd). 
