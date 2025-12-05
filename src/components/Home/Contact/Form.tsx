import { For } from "solid-js";
import ServiceData from "../../../api/ServiceData";

const Form = () => {
  return (
    <div class="">
      <form>
        {/* name */}
        <fieldset class="fieldset ">
          <legend class="fieldset-legend font-bold text-md">Your Name</legend>
          <input
            type="text"
            class="input w-full rounded-md"
            placeholder="User Name"
            required
          />

          {/* email */}

          <legend class="fieldset-legend font-bold text-md">
            Email Address
          </legend>
          <input
            type="email"
            class="input w-full rounded-md"
            placeholder="user@mail.com"
            required
          />

          {/*Service Interested In*/}
          <div>
            <legend class="fieldset-legend font-bold text-md">
              Service Interested In
            </legend>
            <select class="select w-full">
              <option disabled selected>
                Select a Service
              </option>

              <For each={ServiceData}>
                {(service) => {
                  return <option>{service?.title}</option>;
                }}
              </For>
            </select>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default Form;
