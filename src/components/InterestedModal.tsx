"use client";

import { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { CircularProgress } from "@mui/material";
import { saveEmail } from "@/request";

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

export default function InterestedModal() {
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
      }, 5000);
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
        className="text-semibold text-white bg-green-500 px-3 py-2 rounded-sm hover:bg-green-600 transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
        onClick={handleOpen}
      >
        Interested?
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
              Thank you for expressing your interest. We are in the process of
              delivering the element of your choice to you!
            </label>
          ) : (
            <form onSubmit={contactHandler} className="flex flex-col gap-4">
              <label
                className="md:text-2xl text-lg text-pink-500 font-semibold"
                htmlFor="name"
              >
                You're just one step away from receiving your free element!
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
