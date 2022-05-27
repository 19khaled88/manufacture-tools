import React from 'react'

const UpdateProduct = ({ id }) => {
  console.log(id)
  return
  ;<>
    <div>UpdateProduct</div>

    <label for="my-modal-3" class="btn modal-button">
      open modal
    </label>

    <input type="checkbox" id="my-modal-3" class="modal-toggle" />
    <div class="modal">
      <div class="modal-box relative">
        <label
          for="my-modal-3"
          class="btn btn-sm btn-circle absolute right-2 top-2"
        >
          ✕
        </label>
        <h3 class="text-lg font-bold">Congratulations random Interner user!</h3>
        <p class="py-4">
          You've been selected for a chance to get one year of subscription to
          use Wikipedia for free!
        </p>
      </div>
    </div>
  </>
}

export default UpdateProduct
