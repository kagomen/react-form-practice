'use client'

import { useForm } from "react-hook-form"

const Home = () => {

  const { register, handleSubmit, formState: { errors, isValid, isSubmitting, isSubmitted } } = useForm({})

  function onsubmit(data) {
    return new Promise(resolve => {  // submit時にダミーの遅延処理
      setTimeout(() => {
        resolve()
        console.log(data)
      }, 1000)
    })
  }
  function onerror(err) {
    console.log(err)
  }

  return (
    <div className="w-fit mx-auto my-4">
      <h2 className="mb-4 text-center">React Hook Form</h2>
      <form onSubmit={handleSubmit(onsubmit, onerror)} noValidate>
        <label>名前:
          <input type="text" {...register('name', {
            required: '名前は必須です',
            maxLength: {
              value: 20,
              message: '名前は20文字以内にしてください'
            }
          })}
            className="w-full border border-black px-1" />
          <p className="text-red-600">{errors.name?.message}</p>
        </label>
        <label>性別:
          <label>
            <input type="radio" value="male" {...register('gender', {
              required: '性別は必須です'
            })} />男性
          </label>
          <label>
            <input type="radio" value="female" {...register('gender', {
              required: '性別は必須です'
            })} />女性
          </label>
          <p className="text-red-600">{errors.gender?.message}</p>
        </label>
        <label>Eメール:
          <input type="email" {...register('email', {
            required: 'メールアドレスは必須です',
            pattern: {
              value: /([a-z\d+\-.]+)@([a-z\d-]+(?:\.[a-z]+)*)/i,
              message: 'メールアドレスの形式が不正です'
            }
          })} className="w-full border border-black px-1" />
          <p className="text-red-600">{errors.email?.message}</p>
        </label>
        <label>
          備考:
          <textarea {...register('memo', {
            required: '備考は必須入力です',
            minLength: {
              value: 10,
              message: '10文字以上記入してください'
            },
            validate: {
              ng: (value, formValues) => {
                const ngs = ['暴力', '自殺']
                for (const ng of ngs) {
                  if (value.includes(ng)) {
                    return '備考にNGワードが含まれています'
                  }
                }
                return true
              }
            }
          })}
            className="w-full border border-black px-1"></textarea>
          <p className="text-red-600">{errors.memo?.message}</p>
        </label>
        <button disabled={!isValid || isSubmitting} className="block my-1 w-full border border-black px-1 disabled:opacity-30">{isSubmitting ? '送信中...' : '送信する'}</button>
        <p className="text-center">{isSubmitted && 'コンソールに送信しました！'}</p>
      </form>
    </div>
  )
}

export default Home