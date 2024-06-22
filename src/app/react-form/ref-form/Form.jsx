'use client'

import { useRef } from "react"

const Form = () => {
  const nameRef = useRef('')
  const messageRef = useRef('')

  function handleClick(e) {
    e.preventDefault()
    console.log(`name: ${nameRef.current.value}`)
    console.log(`message: ${messageRef.current.value}`)
  }

  return (
    <div className="my-4 w-[400px] mx-auto">
      <form>
        <label className="block my-4">名前:
          <input type="text" name="name" ref={nameRef} defaultValue='kagome' className="border border-black" />
        </label>
        {/* 初期表示の値はdefaultValueで設定すること。value にすると変更できなくなる */}

        <label className="block my-4">
          本文:
          <input type="text" name="message" ref={messageRef} defaultValue='hello world!' className="border border-black" />
        </label>

        <button onClick={handleClick} className="block w-full my-4 border border-black">送信（コンソールに表示）</button>
      </form>
    </div>
  )
}

export default Form