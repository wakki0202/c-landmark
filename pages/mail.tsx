import React from "react";
import { useState } from 'react';
import Router from 'next/router';
import styles from "../styles/Home.module.css";
import type { NextPage } from 'next';

const Home: NextPage = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [form, setForm] = useState({
    title: '',
    name: '',
    email: '',
    msg: '',
  });

  const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();

    fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify({
        title: form.title,
        name: form.name,
        email: form.email,
        msg: form.msg,
      }),
    })
      .then((res) => {
        console.log('Response received');
        if (res.status === 200) {
          Router.push('/complete');
          console.log('Response succeeded!');

        } else {
          console.log(`Error: Status Code ${res.status}`);
        }
      })
      .catch((e) => {
        console.log(`Error: ${e}`);
      });
  };

  return (
    <>
      <div className='w-9/12 m-auto'>
        <h1 className=' text-3xl lg:text-5xl  mt-20 font-bold'>Contact.</h1>
        <span className='text-1xl'>お問い合わせ</span>
        <p className='text-center mt-8 mb-8 text-xs lg:text-sm'>下記のフォームをご記入の上、 お問い合わせください。</p>
      </div>


      <form>



        <div className='w-9/12 lg:w-7/12 m-auto'>
          <label className='block font-bold pb-3 ' htmlFor="">お問い合わせの種類*</label>
          <select
            onChange={(e) => {
              const val = e.currentTarget.value;
              setForm((props) => ({
                ...props,
                title: val !== null ? val : '',
              }));
            }}
            name="title" className='w-full bg-gray-100 p-1 h-14 lg:h-16' id="" >
            <option value={"未選択"}>選択してください</option>
            <option value={"仕事に関するお問い合わせ"}>仕事に関するお問い合わせ</option>
            <option value={"業務提携・アライアンスの関するお問い合わせ"}>業務提携・アライアンスの関するお問い合わせ</option>
            <option value={"講演・取材に関するお問い合わせ"}>講演・取材に関するお問い合わせ</option>
            <option value={"その他"}>その他</option>
          </select>
        </div>



        <div className='w-9/12 lg:w-7/12 m-auto pt-8'>
          <label className='block font-bold pb-3' htmlFor="">お名前*</label>
          <input
            onChange={(e) => {
              const val = e.currentTarget.value;
              setForm((props) => ({
                ...props,
                name: val !== null ? val : '',
              }));
            }}
            value={form.name}
            name="name"
            type="text"
            className='w-full bg-gray-100 p-2 h-14 lg:h-16'
            placeholder="Name"
          />
        </div>


        <div className='w-9/12 lg:w-7/12 m-auto pt-8'>
          <label className='block font-bold pb-3' htmlFor="">メールアドレス*</label>
          <input
            onChange={(e) => {
              const val = e.currentTarget.value;
              setForm((props) => ({
                ...props,
                email: val !== null ? val : '',
              }));
            }}
            name="email"
            type="text"
            className='w-full bg-gray-100 p-2 h-14 lg:h-16'
            placeholder="Email"
          />
        </div>
        <div className='w-9/12 lg:w-7/12 m-auto pt-8'>
          <label className='block font-bold pb-3' htmlFor="">お問い合わせ内容*</label>
          <textarea
            onChange={(e) => {
              const val = e.currentTarget.value;
              setForm((props) => ({
                ...props,
                msg: val !== null ? val : '',
              }));
            }}
            name="text"
            className='w-full bg-gray-100 h-48 p-2' id="" placeholder='お問い合わせ内容を入力してください'
          ></textarea>


          <div className="text-center">
            <input
              className=" mt-10 mb-20 border border-gray-300  w-full m-auto py-5 hover:bg-gray-700 hover:text-white duration-200 font-bold"
              onClick={() => setShowModal(true)}
              type="button"
              value="送信する"
            />

          </div>
          {showModal ? (
            <>
              <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
              >
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5  border-solid border-slate-200 rounded-t">
                      <h3 className="text-3xl font-semibold">
                      </h3>
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModal(false)}
                      >
                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                          ×
                        </span>
                      </button>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto">
                      <p className="my-4 text-slate-500 text-lg leading-relaxed">
                        送信します。よろしいですか？
                      </p>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6  border-solid border-slate-200 rounded-b">
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        キャンセル
                      </button>
                      <input
                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        onClick={async (e) => {
                          await handleSubmit(e);
                        }}
                        type="submit"
                        value="送信する"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </div>
      </form>
    </>
  );
};

export default Home;