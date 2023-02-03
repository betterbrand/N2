import Link from 'next/link';
import React from 'react';
import { useForm, Controller } from "react-hook-form";
import Layout from '../components/Layout';
import { AuthLayout } from '../components/AuthLayout';
import { Button } from '../components/Button';
import { TextField } from '../components/Fields';

//import {getSupportedTokens} from "./api/get_supported_tokens.ts"


import { Fragment, useState } from 'react'
import {Listbox, Transition } from '@headlessui/react'
import {CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

//data for the dropdown
const choices = [
{id:1, name:'John'},
{id:1, name:'Doe'},
{id:1, name:'John Doe'},]

function classNames(...classes){
  return classes.filter(Boolean).join('')
}
function SelectForm() {
  const [selected, setSelected] = useState(choices[1])
  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <Listbox.Label className="block text-sm font-medium text-gray-700"></Listbox.Label>
          <div className="relative mt-1">
            <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
              <span className="block truncate">{selected.name}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {choices.map((person) => (
                  <Listbox.Option
                    key={person.id}
                    className={({ active }) =>
                      classNames(
                        active ? 'text-indigo-600 bg-indigo-600' : 'text-gray-900',
                        'relative cursor-default select-none py-2 pl-8 pr-4'
                      )
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                          {person.name}
                        </span>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-indigo-600',
                              'absolute inset-y-0 left-0 flex items-center pl-1.5'
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  )
}
/*
const {Client} = require('pg');
const client =new Client({
  user: 'yousir',
  password:'FpXzfbgAM9NqHVSphhPl9wnT6Fl9TQ10',
  host:'dpg-ce3p3cta4999gmfs4d0g-a.oregon-postgres.render.com',
  port:5432,
  database:'genai'
});

const submitHandler =  async ({phoneInput, password }) => {
    try{
      console.log( phoneInput, password);
      const session = await getSession(req, res);
      await client.connect()
      const response = await clientquery('SELECT * FROM users where phone === $phoneInput')
      let hashPassword = await bcrypthash(pass == response.pass)
      console.log(response.rows[0])
      await client.end()
    }catch(error){
      console.log(error)
    }
  };
*/
export default function App(){
  const {
    handleSubmit,
    register,
    formState: { errors },
    control
  } = useForm();

  
 return (
    <>
      <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="NetworkNation"
          />
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">NetworkNation</h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            {' '}
            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
              Connect Wallet
            </a>
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Liquidation pool
                </label>
                
                <div className="mt-1">
                  <SelectForm/>
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Assigned to
                </label>
                <div className="mt-1">
                  <SelectForm/>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="terms"
                    name="terms"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                      by signing in you are agreeing to our terms and conditions
                    </a>
                  </label>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Submit
                </button>
              </div>
            </form>
            </div>
          </div>
        </div>
    </>
  );
}