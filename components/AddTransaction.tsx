"use client";

import addTransaction from "@/app/actions/addTransaction";
import { useRef } from "react";
import { toast } from "react-toastify";

const AddTransaction = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const clientAction = async (formData: FormData) => {
    const { data, error } = await addTransaction(formData);

    if (error) {
      toast.error(error);
    } else {
      toast.success("Transaction added");
      formRef.current?.reset();
    }
  };
  return (
    <div>
      <h3>Add Transaction</h3>
      <form ref={formRef} action={clientAction}>
        <label htmlFor="text">text</label>
        <input type="text" id="text" name="text" placeholder="Enter Text ..." />
        <div className="form-control">
          <label htmlFor="amount">
            Amount
            <br />
            (negative - expense, positive + income)
          </label>
          <input
            type="number"
            id="amount"
            name="amount"
            placeholder="Enter Amount"
            step={0.01}
          />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </div>
  );
};

export default AddTransaction;
