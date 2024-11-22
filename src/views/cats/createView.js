import page from "page";
import { html } from "lit-html";

import catsApi from "../../api/catsApi";

const template = (onSubmit) => html`
<form @submit=${onSubmit}>
  <div class="space-y-12 mt-20" style="width: 900px; margin: auto;">
    <div class="border-b border-gray-900/10 pb-12">
      <h2 class="text-base/7 font-semibold text-gray-900">Cat Rent Information</h2>

      <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div class="sm:col-span-3">
          <label for="name" class="block text-sm/6 font-medium text-gray-900">Cat Name</label>
          <div class="mt-2">
            <input type="text" name="name" id="name" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6">
          </div>
        </div>

        <div class="sm:col-span-4">
          <label for="age" class="block text-sm/6 font-medium text-gray-900">Age</label>
          <div class="mt-2">
            <input id="age" name="age" type="number" autocomplete="age" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6">
          </div>
        </div>

        <div class="sm:col-span-4">
          <label for="price" class="block text-sm/6 font-medium text-gray-900">Price per day</label>
          <div class="mt-2">
            <input id="price" name="price" type="number" autocomplete="price" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6">
          </div>
        </div>

        <div class="sm:col-span-4">
          <label for="image" class="block text-sm/6 font-medium text-gray-900">Cat Image</label>
          <div class="mt-2">
            <input id="image" name="imageUrl" type="text" autocomplete="price" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6">
          </div>
        </div>

        <div class="sm:col-span-3">
          <label for="breed" class="block text-sm/6 font-medium text-gray-900">Breed</label>
          <div class="mt-2">
            <select id="breed" name="breed" autocomplete="breed" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm/6">
              <option>Persian</option>
              <option>Angora</option>
              <option>Siamese</option>
            </select>
          </div>
        </div>
      </div>
    </div>
    
  </div>

  <div class="mt-6 flex items-center justify-end gap-x-6">
    <button type="button" class="text-sm/6 font-semibold text-gray-900">Cancel</button>
    <button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
  </div>
</form>
`;

export default async function (ctx) {
    ctx.render(template(formSubmitHandler));
}

async function formSubmitHandler(e) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const catData = Object.fromEntries(formData);

    try {
        await catsApi.create(catData);

        page.redirect('/cats');
    } catch (err) {
        console.log(err.message);
    }
} 
