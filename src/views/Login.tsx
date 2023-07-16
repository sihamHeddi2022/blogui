import NavBar from '../components/NavBar'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { instance } from '../api';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'

function Login() {

  const navigate=useNavigate()


  const formik = useFormik({
    initialValues: {

      password: '',
      email: '',
    },
    validationSchema: Yup.object({
   
      password: Yup.string()
        .min(5, 'Must be at least 5 characters')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
    }),
    onSubmit: values => {
      instance.post("/login",{
        ...values
      })
      .then((res)=>{
        toast.success('success !!', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
          theme: "colored",
          });

          setTimeout(() => {
            localStorage.setItem("token",res.data.token)
            localStorage.setItem("id",res.data.id)
            navigate("/dashboard")
          }, 2000);

      })
      .catch((err)=>{

         console.log(err);
         
      })
      
    },
  });
  return (
    <div>
   <NavBar/>
    <h3 className='text-center mt-4 text-3xl font-bold'>
        Login
    </h3>
   <ToastContainer/>
<form action="#" method="POST" onSubmit={formik.handleSubmit} className="mx-auto mt-5 max-w-xl sm:mt-5">
    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">

      <div className="sm:col-span-2">
        <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">Email</label>
        <div className="mt-2.5">
          <input type="email" name="email" id="email" autoComplete="email"  onChange={formik.handleChange}  value={formik.values.email}
className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
        {formik.touched.email && formik.errors.email ? (
         <div className='my-2 text-red-400'> {formik.errors.email}</div>
       ) : null}
      </div>
      
    
      <div className="sm:col-span-2">
        <label htmlFor="password" className="block text-sm font-semibold leading-6 text-gray-900">Password</label>
        <div className="mt-2.5">
          <input type="password" name="password" onChange={formik.handleChange}          value={formik.values.password} id="password" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
        {formik.touched.password && formik.errors.password ? (
         <div className='my-2 text-red-400'> {formik.errors.password}</div>
       ) : null}
      </div>
   
    </div>
    <div className="mt-10">
      <button type="submit" className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">submit</button>
    </div>
  </form>







    </div>
  )
}

export default Login