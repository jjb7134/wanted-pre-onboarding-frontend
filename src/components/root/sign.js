import classes from './sign.module.css'

import {Link} from 'react-router-dom';

function Sign(params) {
    return (
        <div>
            <p className={classes.sign}><Link to='/'>로그인</Link> / <Link to='join'>회원가입</Link></p>
        </div>
    );
}

export default Sign;