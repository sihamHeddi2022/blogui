
import NavBar from '../components/NavBar'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { instance } from '../api';
import { ToastContainer, toast } from 'react-toastify';

function Add() {
  const token =localStorage.getItem("token")
  //  const [img, setimg] = useState<null | File>(null)
  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      category:''
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
       category:Yup.string().required('Required'),
        description: Yup.string()
        .min(35, 'Must be at least 35 characters')
        .required('Required')
    }),
    onSubmit: values => {
      instance.post("/post",{
        ...values
      },{
        headers:{
          Authorization:"Bearer "+token
        }
      })
      .then(()=>{
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
      })
      .catch((err)=>{

         console.log(err);
         
      })
      
    },
  });

  return (
    <div>
    <NavBar/>
    <ToastContainer/>
 
        <div className='mx-8 my-12'>
        
              <h2 className='text-3xl font-bold text-center'>
                Add Post
              </h2>
   
   
<form action="#" method="POST" className="mx-auto mt-5 max-w-xl sm:mt-5"  onSubmit={formik.handleSubmit} >
    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">

      <div className="sm:col-span-2">
        <label htmlFor="title" className="block text-sm font-semibold leading-6 text-gray-900">title</label>
        <div className="mt-2.5">
          <input type="text" name="title" id="title"  onChange={formik.handleChange} value={formik.values.title} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
        {formik.touched.title && formik.errors.title ? (
         <div className='my-2 text-red-400'> {formik.errors.title}</div>
       ) : null}
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="category" className="block text-sm font-semibold leading-6 text-gray-900">category</label>
        <div className="mt-2.5">
         <select  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" name="" id="category" value={formik.values.category} onChange={formik.handleChange}>
         <option value="">
                Category
              </option>
              <option value="0">health</option>
              <option value="1">eeducation</option>
              
              <option value="2">society</option>
              
              <option value="3">entertaiment</option>

              <option value="4">tech</option>
              
              <option value="5">politic</option>


         </select>
        
         {formik.touched.category && formik.errors.category ? (
         <div className='my-2 text-red-400'> {formik.errors.category}</div>
       ) : null}
         </div>
        {formik.touched.title && formik.errors.title ? (
         <div className='my-2 text-red-400'> {formik.errors.title}</div>
       ) : null}
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="description" className="block text-sm font-semibold leading-6 text-gray-900">description</label>
        <div className="mt-2.5">
          <textarea  name="description" id="description" onChange={formik.handleChange} value={formik.values.description} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
        </div>
        {formik.touched.description && formik.errors.description ? (
         <div className='my-2 text-red-400'> {formik.errors.description}</div>
       ) : null}
      </div>
 
     {/* <Upload image={img} onChange={setimg}  /> */}
   
    </div>
    <div className="mt-10">
      <button type="submit" className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">submit</button>
    </div>
  </form>

   
       </div>   
       
       
       </div>
  )
}

export default Add