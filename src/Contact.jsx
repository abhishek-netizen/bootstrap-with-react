import React,{useState} from 'react';

const Contact = ()=>{ 
  const [data,setData] = useState({
      firstname: '',
      lastname: '',
      email: '',
      message: '',
  });

   const InputEvent = (event)=>{
        const {name, value} = event.target;
    
    setData((preVal)=>{
        return{
            ...preVal,
            [name] : value,
        };
    });
    };



    const formSubmit = (e)=>{
        e.preventDefault();
        alert(data.firstname)
        alert(data.lastname)
        alert(data.email)
        alert(data.message)
    }

    return(
        <>
            <div className="my-5">
                <h1 className="text-center">Contact US</h1>
                <div className="container contact_div">
                   <div className="row">
                     <div className="col-md-6 col-10 mx-auto">
                          <form onSubmit = {formSubmit}>
                        <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">First Name</label>
                                <input type="text" 
                                class="form-control" 
                                id="exampleFormControlInput1" 
                                placeholder="John" 
                                name="firstname" 
                                value={data.firstname} onChange={InputEvent} required/>
                        </div>
                        <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Last Name</label>
                                <input type="text" 
                                class="form-control" 
                                id="exampleFormControlInput1" 
                                placeholder="Doe" 
                                name="lastname" value={data.lastname} onChange={InputEvent}    required/>
                        </div>
                        <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                <input 
                                type="email" 
                                class="form-control" 
                                id="exampleFormControlInput1" 
                                placeholder="johndoe@gmail.com" name="email" value={data.email} onChange={InputEvent}    required/>
                        </div>
                        <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Textarea</label>
                        <textarea 
                        class="form-control" 
                        id="exampleFormControlTextarea1" 
                        rows="3" name="message" 
                        value={data.message} onChange={InputEvent}></textarea>
                        </div>
                        <div class="col-12">
                            <button class="btn btn-outline-primary" type="submit">Submit form</button>
                        </div>
                          </form>
                     </div>
                   </div>
                </div>
            </div>
        </>
    )
}

export default Contact;