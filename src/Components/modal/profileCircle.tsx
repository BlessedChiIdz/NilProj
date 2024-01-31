import React from 'react';

interface interfaceP{
    word:string;
}

const ProfileCircle = ({word}:interfaceP) => {
    return (
        <button className="circle circleProfile">
            {word}
        </button>
    );
};

export default ProfileCircle;