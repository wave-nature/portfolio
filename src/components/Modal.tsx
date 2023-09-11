"use client";

import { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { CircularProgress } from "@mui/material";
import { saveEmail } from "@/request";
import { StoreContext } from "@/store";
import { useContext } from "react";

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

export default function ContactModal() {
  const { country } = useContext(StoreContext);

  const [formSubmit, setFormSubmit] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [open, setOpen] = useState(false);
  const [loader, setLoader] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    if (formSubmit) {
      setTimeout(() => {
        handleClose();
        setEmail("");
        setFormSubmit(false);
      }, 3000);
    }
  }, [formSubmit]);

  async function contactHandler(e: any) {
    e.preventDefault();
    if (!email) return;
    setLoader(true);
    await saveEmail(email);
    setFormSubmit(true);
    setLoader(false);
  }

  return (
    <div>
      <button
        onClick={handleOpen}
        className="group flex items-center text-pink-500 md:text-3xl text-xl cursor-pointer font-bold border-2 border-pink-500 max-w-max px-6 py-4"
      >
        <p>
          We start from&nbsp;
          {country === "IN" ? `₹1500` : `$20`}/hr, let's connect
        </p>
        <span className="ml-4 group-hover:translate-x-4 transition duration-300 mt-1">
          <BsArrowRight />
        </span>
      </button>
      <p className="md:text-lg text-sm mt-8 text-slate-500 font-bold">
        We believe in a 'pay us only when you are satisfied with our work'
        policy, which we fully understand and endorse ✌
      </p>
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
              Thanks, we are on the way to work with you! Let's build something.
            </label>
          ) : (
            <form onSubmit={contactHandler} className="flex flex-col gap-4">
              <label
                className="md:text-2xl text-lg text-pink-500 font-semibold"
                htmlFor="name"
              >
                We are just this step away from you!
              </label>
              <input
                className="outline-slate-700 border-slate-700 border-2 px-4 py-2 text-lg font-semibold"
                placeholder="your email please"
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <button className="bg-purple-700 text-white px-4 py-2 rounded">
                Let's Build{" "}
                {loader && <CircularProgress size={20} color="inherit" />}
              </button>
            </form>
          )}
        </Box>
      </Modal>
    </div>
  );
}
