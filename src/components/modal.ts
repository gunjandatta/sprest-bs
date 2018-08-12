/**
 * Modal Properties
 */
export interface IModalProps {
    el: Element | HTMLElement;
    id?: string;
    title?: string;
    visible?: boolean;
}

/**
 * Modal
 * @param props The modal properties.
 */
export const Modal = (props: IModalProps) => {
    // Set the class
    props.el.classList.add("bs");

    // Render the element
    props.el.innerHTML =
        `<div class="modal fade" role="dialog" id="` + (props.id || "") + `" aria-hidden="` + (props.visible ? "true" : "false") + `">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">` + (props.title || "") + `</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
            ...
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div>
        </div>
    </div>
</div>`;
}