'use client'

import { useImmer } from "use-immer"

const Home = () => {
  const [form, setForm] = useImmer({
    name: 'kagome',
    likes: {
      animal: 'うさぎ',
      food: '讃岐うどん'
    }
  })

  function handleForm(e) {
    setForm(form => {
      form[e.target.name] = e.target.value
    })
  }

  function handleNestedForm(e) {
    setForm(form => {
      form.likes[e.target.name] = e.target.value
    })
  }

  return (
    <div className="my-4 w-[400px] mx-auto">
      <form>
        <label className="block my-4">名前:
          <input type="text" name="name" value={form.name} onChange={handleForm} className="border border-black" />
        </label>

        <label className="block my-4">
          好きな動物:
          <input type="text" name="animal" value={form.likes.animal} onChange={handleNestedForm} className="border border-black" />
        </label>

        <label className="block my-4">
          好きな食べもの:
          <input type="text" name="food" value={form.likes.food} onChange={handleNestedForm} className="border border-black" />
        </label>

        {/* <button onClick={handleClick} className="block w-full my-4 border border-black">送信（コンソールに表示）</button> */}
      </form>

      <div className="border border-black mt-12">
        <p>名前: {form.name}</p>
        <p>好きな動物: {form.likes.animal}</p>
        <p>好きな食べもの: {form.likes.food}</p>
      </div>
    </div>
  )
}

export default Home