"use client";
import React, { useState } from "react";
import { Button } from "@/ui/Button/Button";
import Modal from "./Modal";
import CommentBox from "@/ui/CommentBox";
import Accordion from "@/ui/Accordion";

function Header() {
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <div className="flex justify-between max-h-10">
      <img src="/assets/tern-logo-with-label.svg" alt="tern logo" />
      <div className="flex gap-2">
        <a href={`https://wa.me/+917065100247`} target="_blank">
          <Button
            iconPosition="start"
            icon="/assets/whatsapp.svg"
            label="Contact Us on WhatsApp"
            buttonStyle="outline"
          />
        </a>
        <Button
          onClick={() => setOpenModal(true)}
          iconPosition="start"
          icon="/assets/support.svg"
          buttonStyle="regular"
          label="Need Help"
        />
      </div>
      <Modal
        alignment="right"
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
      >
        <CommentBox />
        <div className="text-[15px] font-semibold py-5">
          Frequently Asked Questions
        </div>
        <Accordion
          title="How does the AI interview work?"
          children="The AI asks a series of pre-defined questions, evaluates your responses in real-time, and assesses your suitability for the role based on your answers."
        />
        <Accordion
          title="Do I need to worry about technical issues during the interview?"
          children="No, the system is designed to handle technical glitches automatically. If there's a problem, the system will notify you or offer troubleshooting tips."
        />
        <Accordion
          title="Your question not here?"
          children="Please raise a ticket above"
        />
      </Modal>
    </div>
  );
}

export default Header;
