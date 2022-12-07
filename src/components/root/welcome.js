import classes from './welcome.module.css';

function Welcome(params) {
    return (
        <div className={classes.mentWrap}>
            <h1 className={classes.mainMent}>환영합니다</h1>
            <h3 className={classes.subMent}>이용하시려면 로그인/회원가입 해주세요</h3>
        </div>
    );
}

export default Welcome;