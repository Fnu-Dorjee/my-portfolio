

import React, { useState } from "react";

import { certificates } from "../utils/utils.js";
import { MailOpen } from "lucide-react";

const Certificates = () => {
  const [show, setShow] = useState(false); // show/hide modal
  const [current, setCurrent] = useState(0); // current certificate index

  const nextCertificate = () => {
    setCurrent((prev) => (prev + 1) % certificates.length);
  };

  const prevCertificate = () => {
    setCurrent((prev) =>
      prev === 0 ? certificates.length - 1 : prev - 1
    );
  };

  return (
    <section className="text-center">

      <button
        onClick={() => setShow(true)}
        className="btn btn-primary p-2 mt-2"
      >
        View My Certificates
      </button>

      {show && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-gray-800 p-6 rounded-lg max-w-lg w-full">
            <h3 className="text-xl font-bold mb-4">
              {certificates[current].name}
            </h3>
            
            {/* Open PDF in new tab */}
            <a
              href={certificates[current].link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline mb-4 flex items-center justify-center gap-2"
            >
              Open Certificate <MailOpen className="size-5 text-gray-400"/>
            </a>

            <div className="flex justify-between mt-4">
              <button
                onClick={prevCertificate}
                className="btn btn-primary"
              >
                Previous
              </button>
              <button
                onClick={nextCertificate}
                className="btn btn-primary"
              >
                Next
              </button>
            </div>

            <button
              onClick={() => setShow(false)}
              className="btn btn-error"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
