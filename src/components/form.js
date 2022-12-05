import React, { useState } from 'react'
import classes from './form.module.css'

function Form() {
  
    const [values, setValues] = useState({
      email: "",
      password: "",
    })
  
    const handleChange = e => {
      setValues({
        ...values,
        [e.target.name]: e.target.value,
      })
    }
  
    const handleSubmit = e => {
      e.preventDefault()
    }
  
    return (
      <form className={classes.formWrap} onSubmit={handleSubmit}>
        <div>
        <label className={classes.mail}>이메일</label><br/>
        <input
          className={classes.emailinput}
          type="text"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        </div>
        <div>
          <label className={classes.pass}>비밀번호</label><br/>
          <input
          className={classes.passinput}
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
          />
        </div>
        <div>
        <button className={classes.btn} type="submit">로그인</button>
        </div>
      </form>
    )
  }

export default Form;
