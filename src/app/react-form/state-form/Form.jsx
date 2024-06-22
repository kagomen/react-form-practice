'use client'

import { useState } from "react"

const Form = () => {
  const [form, setForm] = useState({
    name: 'kagome',
    message: 'hello world!'
  })

  function handleForm(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value  // 算出プロパティ名
    })
  }

  function handleClick(e) {
    e.preventDefault()
    console.log(`name: ${form.name}`)
    console.log(`message: ${form.message}`)
  }

  return (
    <div className="my-4 w-[400px] mx-auto">
      <form>
        <label className="block my-4">名前:
          <input type="text" name="name" value={form.name} onChange={handleForm} className="border border-black" />
        </label>

        <label className="block my-4">
          本文:
          <input type="text" name="message" value={form.message} onChange={handleForm} className="border border-black" />
        </label>

        <button onClick={handleClick} className="block w-full my-4 border border-black">送信（コンソールに表示）</button>
      </form>

      <div className="border border-black mt-12">
        <h2>送信内容の確認</h2>
        <p>名前: {form.name}</p>
        <p>本文: {form.message}</p>
      </div>
    </div>
  )
}

export default Form