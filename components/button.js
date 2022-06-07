const Button = (props) => {
    return (
        <>
            <button className={props.selected === "selected" ? "button nav_stream_selected" : `button  ${props.className}`} >
                {props.className === "login_btn login_align" ? <span className="login_font_icon"></span> : null} {props.value}
            </button>
        </>
    );
};
export default Button;
