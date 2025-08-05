import React from "react";
import { FaRegClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { CiPhone } from "react-icons/ci";
import NewsLetter from "../components/NewsLetter";

const Contact = () => {
  return (
    <section className=" pt-20 " id="contact">
      <div className="container">
        <div className="py-12">
          <div className="flex flex-col items-center justify-center space-y-4">
            <h2 className="font-heading font-bold tracking-tight text-4xl sm:text-5xl">
              Get in Touch
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600 dark:text-slate-400">
              I'm always ready to support you.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-10">
          <div className="h-full w-full border-b md:border-r md:border-b-0">
            <p className="mt-3 mb-12 text-lg">
              Feel free to contact me.
            </p>
            <ul className="mb-6 space-y-2 md:space-y-6 md:mb-0">
              <li className="flex">
                <div className="flex h-14 w-14 items-center justify-center rounded-md bg-blue-900 text-white">
                  <FaLocationDot className="text-2xl" />
                </div>
                <div className="ml-4 mb-2 md:mb-4">
                  <h3 className="mb-2 text-lg font-medium leading-6 ">
                    Our Address
                  </h3>
                  <p className="text-slate-400">
                    Lahore, Punjab - Pakistan
                  </p>
                </div>
              </li>
              <li className="flex">
                <div className="flex h-14 w-14 items-center justify-center rounded-md bg-blue-900 text-gray-50">
                  <CiPhone className="text-2xl" />
                </div>
                <div className="ml-4 mb-2 md:mb-4">
                  <h3 className="mb-2 text-lg font-medium leading-6 ">
                    Contact
                  </h3>
                  <p className="text-slate-400">
                    Phone: +92 305 888 7237
                  </p>
                  <p className="text-gray-600 dark:text-slate-400">
                    Mail: hassanakhtyr@gmail.com
                  </p>
                </div>
              </li>
              <li className="flex">
                <div className="flex h-14 w-14 items-center justify-center rounded-md bg-blue-900 text-gray-50">
                  <FaRegClock className="text-2xl" />
                </div>
                <div className="ml-4 mb-4">
                  <h3 className="mb-2 text-lg font-medium leading-6 ">
                    Working hours
                  </h3>
                  <p className="text-slate-400">
                    Monday - Friday (08:00 AM - 07:00 PM)
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d276963.42829661316!2d74.19751998780649!3d31.484584665082775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1753342916480!5m2!1sen!2s"
              style={{ border: 0 }}
              allowfullscreen=""
              className="w-full h-full rounded-lg"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="pt-[8%] pb-10">
        <NewsLetter/>
      </div>
    </section>
  );
};

export default Contact;
