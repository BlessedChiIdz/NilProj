import React from 'react';
import '../../styles/LoginAndRegButton.css'

const LoginAndRegButton = () => {
    return (
        <div>
            <button className="LoginButHeader">
                    Войти
            </button>
            <button className="CreateLinkButton custom-btn btn-8">
                <span>
                    Зарегистрироваться
                </span>
            </button>
        </div>
    );
};

export default LoginAndRegButton;
