import React from 'react'
import classes from './form.module.css'

function Form() {
  return (
    <div>
        <form className={classes.formWrap}>
            <p>이메일</p>
            <label typeof='input' className={classes.inputEmail}></label>
            <p>비밀번호</p>
            <label typeof='input' className={classes.inputPass}></label>
            <label typeof='submit' className={classes.btn}>로그인</label>
        </form>
    </div>
  )
}

export default Form;
