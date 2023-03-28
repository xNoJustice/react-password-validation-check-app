import { useState } from 'react'

function App() {
  const [password, setPassword] = useState('')
  const [show, setShow] = useState(false)
  const [valid, setValid] = useState({
    lower: false,
    upper: false,
    number: false,
    special: false,
    length: false,
  })

  const checkPassword = (pw) => {
    const lower = new RegExp('(?=.*[a-z])')
    const upper = new RegExp('(?=.*[A-Z])')
    const number = new RegExp('(?=.*[0-9])')
    const special = new RegExp('(?=.*[!@#$%^&*])')
    const length = new RegExp('(?=.{8,})')

    if (lower.test(pw)) {
      valid.lower = true
    } else {
      valid.lower = false
    }

    if (upper.test(pw)) {
      valid.upper = true
    } else {
      valid.upper = false
    }

    if (number.test(pw)) {
      valid.number = true
    } else {
      valid.number = false
    }

    if (special.test(pw)) {
      valid.special = true
    } else {
      valid.special = false
    }

    if (length.test(pw)) {
      valid.length = true
    } else {
      valid.length = false
    }

    setValid(valid)
  }

  const returnClassName = (key, value) => {
    if (key === 'rounded') {
      return value ? 'bg-green-500' : 'bg-gray-200'
    }
    if (key === 'list') {
      return value ? 'text-white' : 'text-gray-500'
    }
  }

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center mx-auto p-6 dark:text-white text-2xl font-bold">
      <h1 className="text-3xl mb-4 font-bold">
        React + Vite Password Validation Check
      </h1>
      <div className="relative">
        <input
          type={show ? 'text' : 'password'}
          placeholder="Password..."
          className="text-md block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600"
          onChange={(e) => {
            setPassword(e.target.value)
            checkPassword(e.target.value)
          }}
        />
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
          <svg
            fill="none"
            onClick={() => setShow(!show)}
            className={`${show ? 'hidden' : 'block'} h-6 w-6 text-gray-700`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path
              fill="currentColor"
              d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"
            ></path>
          </svg>
          <svg
            fill="none"
            onClick={() => setShow(!show)}
            className={`${show ? 'block' : 'hidden'} h-6 w-6 text-gray-700`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
          >
            <path
              fill="currentColor"
              d="M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z"
            ></path>
          </svg>
        </div>
      </div>
      <div className="grid w-80 h-1 grid-cols-5 gap-3 mt-3">
        <div className={returnClassName('rounded', valid.lower)}></div>
        <div className={returnClassName('rounded', valid.upper)}></div>
        <div className={returnClassName('rounded', valid.number)}></div>
        <div className={returnClassName('rounded', valid.special)}></div>
        <div className={returnClassName('rounded', valid.length)}></div>
      </div>
      <div className="bg-blue-900 mt-3 rounded-lg px-8 py-1 text-2xl">
        <ul className="text-left list-disc">
          <li className={returnClassName('list', valid.lower)}>
            At least one lowercase character
          </li>
          <li className={returnClassName('list', valid.upper)}>
            At least one uppercase character
          </li>
          <li className={returnClassName('list', valid.number)}>
            At least one number
          </li>
          <li className={returnClassName('list', valid.special)}>
            At least one special character
          </li>
          <li className={returnClassName('list', valid.length)}>
            At least 8 characters
          </li>
        </ul>
      </div>
    </div>
  )
}

export default App
