import React, { useState } from "react";
import Delete from "../../../assets/images/delete.png";
import Edit from "../../../assets/images/edit-text.png";
import ConfirmationModal from "./ConfirmationModal";
import { useNavigate } from "react-router-dom";

const FaqList = () => {
  const navigate = useNavigate();
  const [isModalOpen, setModalOpen] = useState(false);
  const [isFaqDetail, setFaqDetail] = useState("");

  const faqListData = [
    {
      id: 1,
      question: "What can you give us ?",
      ans: "The course will teach you or improve your trading knowledge in simple techinical strategy and also provide coded indicators, you can learn and trade in short time period.Turn on scre",
    },
    {
      id: 2,
      question: "This Membership is for Lifetime?",
      ans: "No, This membership valid for 181 days, After that, you shall renew the membership to retain access to all past and new videos.",
    },
    {
      id: 3,
      question: "This Course is not for Beginners?",
      ans: "No, It's also Beginners to buy, It help you to learn and trade in simple techinical strategy.",
    },
    {
      id: 4,
      question: "Which Language you can teach?",
      ans: "Combained Tamil and English Languages",
    },
    {
      id: 5,
      question: "Do you provide Calls?",
      ans: "We Don't Provide cals, we can share charts this is more enough for you to take your own trades.",
    },
  ];
  return (
    <div className="mx-auto p-6">
      <div className="flex justify-end">
        <h1
          className="text-white font-bold p-3 rounded-md bg-green-500 shadow-2xl cursor-pointer hover:bg-green-900"
          onClick={() => {
            navigate("/addNewFaq");
          }}
        >
          Add New
        </h1>
      </div>
      <h2 className="text-2xl font-bold mb-4 text-center">
        Frequently Asked Questions
      </h2>
      {faqListData.map((item, index) => {
        return (
          <div className="bg-blue-50  shadow-md rounded-md my-5 relative pb-5 transform translate duration-700 hover:scale-105 hover:shadow-xl">
            <div className="flex p-5">
              <text className="mr-6">{index + 1}</text>{" "}
              <p className="font-bold">{item?.question}</p>
            </div>
            <p className="ml-20">{item?.ans}</p>
            <div className="absolute right-0 flex top-2">
              <div
                className="p-2 border-2 rounded-md shadow-lg mr-5 cursor-pointer hover:bg-white"
                onClick={() => {
                  setModalOpen(true);
                  setFaqDetail(item);
                }}
              >
                <img src={Delete} className="h-5 w-5" />
              </div>
              <div
                className="p-2 border-2 rounded-md shadow-lg cursor-pointer hover:bg-white"
                onClick={() => {
                  navigate("/addNewFaq");
                }}
              >
                <img src={Edit} className="h-5 w-5" />
              </div>
            </div>
          </div>
        );
      })}
      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        title="Are you sure you want to delete?"
        data={isFaqDetail}
      >
        <p className="text-gray-700">{isFaqDetail?.question}</p>
        <p className="text-gray-500">{isFaqDetail?.ans}</p>
      </ConfirmationModal>
    </div>
  );
};

export default FaqList;
