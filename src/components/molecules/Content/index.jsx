import React from "react";
import FeatherIcon from "feather-icons-react";
import { Button, Card, FormGroup } from "../../atoms";

const Content = () => {
  return (
    <div className="bg-gray-200 h-full p-10 space-y-10">
      <Card label="Basic Information">
        <div className="grid gap-x-10 gap-y-4 grid-cols-2">
          <div className="">
            <FormGroup variant="select" name="appointment_type" id="appointment_type" label="Appointment Type" required>
              <option value="Payment Pickup">Payment Pickup</option>
            </FormGroup>
          </div>
          <div className="">
            <FormGroup
              variant="input"
              type="text"
              name="appointment_description"
              id="appointment_description"
              label="Appointment Description"
              placeholder="Enter appointment description"
              required
            >
              <option value="Payment Pickup">Payment Pickup</option>
            </FormGroup>
          </div>
          <div className="">
            <FormGroup
              variant="input"
              type="text"
              name="appointment_description"
              id="appointment_description"
              label="Appointment Description"
              placeholder="Enter appointment description"
              required
            >
              <option value="Payment Pickup">Payment Pickup</option>
            </FormGroup>

            <span className="flex text-sm underline text-blue-700 font-semibold my-5 cursor-pointer">
              <FeatherIcon icon="plus" size="16" className="my-auto" /> Add more related appointment
            </span>
          </div>
        </div>
      </Card>

      <Card label="Date & Time">
        <div className="grid gap-x-10 gap-y-4 grid-cols-2">
          <div className="">
            <FormGroup variant="input" type="date" name="appointment_type" id="appointment_type" placeholder="Enter start date" label="Start Date" required />
          </div>
          <div className="">
            <FormGroup variant="input" type="time" name="appointment_type" id="appointment_type" placeholder="Enter start time" label="Start Time" required />
          </div>
          <div className="">
            <FormGroup variant="input" type="date" name="appointment_type" id="appointment_type" placeholder="Enter end date" label="End Date" required />
          </div>
          <div className="">
            <FormGroup variant="input" type="time" name="appointment_type" id="appointment_type" placeholder="Enter start time" label="Start Time" required />
          </div>
          <div className="">
            <FormGroup variant="checkbox" name="appointment_type" idFor="appointment_type" label="Including Weekend" required />
          </div>
        </div>
      </Card>

      <div className="justify-end flex space-x-3">
        <Button label="Save to Draft" variant="outlinePrimary" />
        <Button label="Cancel" variant="outlinePrimary" />
        <Button label="Next Step" variant="primary" />
      </div>
    </div>
  );
};

export default Content;
