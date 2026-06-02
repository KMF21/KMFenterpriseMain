'use client'

import React from 'react'
import Link from 'next/link'
import { useForm, SubmitHandler } from 'react-hook-form'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

type Inputs = {
  name: string
  phone: string
  email: string
  subject: string
  message: string
}

export default function Page() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>()

  // rest of your code...
}