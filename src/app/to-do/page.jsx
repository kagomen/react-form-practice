'use client'
import React, { useState } from 'react'
import Button from './components/Button'

let maxId = 0

const Home = () => {
  const [title, setTitle] = useState('')
  const [todos, setTodos] = useState([])
  const [desc, setDesc] = useState(true)

  function handleChangeTitle(e) {
    setTitle(e.target.value)
  }

  function handleClick(e) {
    e.preventDefault()
    setTodos([
      ...todos,
      {
        id: ++maxId,
        title,
        created: new Date(),
        isDone: false
      }
    ])
    setTitle('')
  }

  function handleDone(e) {
    setTodos(todos.map(todo => {
      if (todo.id == e.target.dataset.id) {
        return {
          ...todo,
          isDone: true
        }
      } else {
        return todo
      }
    }))
  }

  function handleRemove(e) {
    setTodos(todos.filter(todo => todo.id != e.target.dataset.id))
  }

  function handleSort(e) {
    const sorted = [...todos]
    sorted.sort((m, n) => {
      if (desc) {
        return n.created.getTime() - m.created.getTime()
      } else {
        return m.created.getTime() - n.created.getTime()
      }
    })
    setDesc(prevDesc => !prevDesc)
    setTodos(sorted)
  }

  return (
    <div className='w-fit mx-auto my-4'>
      <form className='inline'>
        <input type="text" name='title' value={title} onChange={handleChangeTitle}
          className='border border-black' />
        <Button onClick={handleClick}>追加</Button>
      </form>

      <Button onClick={handleSort}>並び替え({desc ? '古い順' : '新しい順'})</Button>

      {todos.map(todo => {
        return (
          <div key={todo.id} className={todo.isDone ? 'line-through' : ''}>
            {todo.title}
            <Button onClick={handleDone} dataId={todo.id}>済</Button>
            <Button onClick={handleRemove} dataId={todo.id}>削除</Button>
          </div>
        )
      })}

    </div>
  )
}

export default Home