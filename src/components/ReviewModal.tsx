"use client";

import { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { CircularProgress, Rating } from "@mui/material";
import { saveReview } from "@/request";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ReviewModal() {
  const [formSubmit, setFormSubmit] = useState<boolean>(false);
  const [inputs, setInputs] = useState<{
    name: string;
    email: string;
    job: string;
    country: string;
    review: string;
    rating: number;
  }>({
    name: "",
    email: "",
    review: "",
    rating: 5,
    job: "",
    country: "",
  });
  const [open, setOpen] = useState(false);
  const [loader, setLoader] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    if (formSubmit) {
      setTimeout(() => {
        handleClose();
        setInputs({
          name: "",
          email: "",
          review: "",
          rating: 5,
          job: "",
          country: "",
        });
        setFormSubmit(false);
      }, 3000);
    }
  }, [formSubmit]);

  function onChange(e: any) {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function reviewHandler(e: any) {
    e.preventDefault();
    if (
      !inputs.name ||
      !inputs.rating ||
      !inputs.review ||
      !inputs.country ||
      !inputs.email
    )
      return;
    setLoader(true);
    await saveReview({
      name: inputs.name,
      email: inputs.email,
      rating: inputs.rating || 5,
      review: inputs.review,
      job: inputs.job || "self-employed",
      country: inputs.country,
    });
    setFormSubmit(true);
    setLoader(false);
  }

  return (
    <div>
      <button
        onClick={handleOpen}
        className="group flex items-center text-pink-500 md:text-3xl text-xl cursor-pointer font-bold border-2 border-pink-500 max-w-max px-6 py-4"
      >
        <p>Grab Discount For Next Time</p>
        <span className="ml-4 group-hover:translate-x-4 transition duration-300 mt-1">
          <BsArrowRight />
        </span>
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {formSubmit ? (
            <label
              className="md:text-xl text-lg text-green-500 font-semibold"
              htmlFor="name"
            >
              Thanks, on the positive note we will work with you again.
            </label>
          ) : (
            <form onSubmit={reviewHandler} className="flex flex-col gap-4">
              <label
                className="md:text-xl text-lg text-pink-500 font-semibold"
                htmlFor="name"
              >
                Our bond getting stronger by this step, and you will get 10%
                discount for next time.
              </label>
              <input
                className="outline-slate-700 border-slate-700 border-2 px-4 py-2 text-lg font-semibold"
                placeholder="your name"
                type="text"
                name="name"
                onChange={onChange}
                value={inputs.name}
              />
              <input
                className="outline-slate-700 border-slate-700 border-2 px-4 py-2 text-lg font-semibold"
                placeholder="your email"
                type="email"
                name="email"
                onChange={onChange}
                value={inputs.email}
              />
              <input
                className="outline-slate-700 border-slate-700 border-2 px-4 py-2 text-lg font-semibold"
                placeholder="your job profile (optional)"
                type="text"
                name="job"
                onChange={onChange}
                value={inputs.job}
              />
              <input
                className="outline-slate-700 border-slate-700 border-2 px-4 py-2 text-lg font-semibold"
                placeholder="your country"
                type="name"
                name="country"
                onChange={onChange}
                value={inputs.country}
              />
              <label className="text-lg font-semibold">Rating</label>
              <Rating
                name="simple-controlled"
                value={inputs.rating}
                size="large"
                onChange={(event, newValue) => {
                  setInputs((prev) => ({ ...prev, rating: newValue || 5 }));
                }}
              />
              <textarea
                className="outline-slate-700 border-slate-700 border-2 px-4 py-2 text-lg font-semibold"
                placeholder="what do you think about us?"
                name="review"
                onChange={onChange}
                value={inputs.review}
              />
              <button className="bg-purple-700 text-white px-4 py-2 rounded">
                Submit{" "}
                {loader && <CircularProgress size={20} color="inherit" />}
              </button>
            </form>
          )}
        </Box>
      </Modal>
    </div>
  );
}
