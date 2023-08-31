import React,{useState, useRef} from 'react';
import emailjs from '@emailjs/browser';

const ContactPage = () => {
  const formRef = useRef();
  const [form,setForm] = useState({
    name:'', email:'', message:''
  });
  const [loading,setLoading] = useState(false);

  const handleChange = (e) => {
    const {target} = e
    const {name,value} = target
    setForm({
      ...form,
      [name] : value
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs
      .send(
        'service_uynktwg',
        'template_4tp25rp',
        {
          from_name: form.name,
          to_name: 'Sadish',
          from_email: form.email,
          to_email: 'hellosadish@gmail.com',
          message: form.message,
        },
        'vNPAVHsaIbxKQJyRv'
      )
      .then(
        () => {
          setLoading(false)
          alert('Thanks! I will get back to you soon.')

          setForm({
            name:'',
            email:'',
            message:'',
          })
        },
        (error) => {
          setLoading(false)
          console.error(error)

          alert('Oops, something went wrong. Please try again.')
        }
      )
  }

  return (
    <section className='cta__container'>
      <h1>Say Hello</h1>
      <form ref={formRef} onSubmit={handleSubmit} className='cta__container-form'>
        <label className='container__name'>
            <span className='container__span'>Your Name?</span>
            <input value={form.name} name='name' onChange={handleChange} className='container__input' type='text' placeholder='Ex: Elon Bezos' />
        </label>
        <label className='container__name'>
            <span className='container__span'>E - mail ?</span>
            <input value={form.email} name='email' onChange={handleChange}  className='container__input' type='email' placeholder='Ex: elon@x.com' />
        </label>
        <label className='container__name'>
            <span className='container__span'>Your Message</span>
            <textarea name="message" value={form.message} onChange={handleChange}  className='container__input in_area'rows={3}  placeholder='Please leave your message...' />
        </label>
        <button type='submit'>
          {loading ? 'Sending...' :'Send'}
        </button>
      </form>
    </section>
  )
}

export default ContactPage
