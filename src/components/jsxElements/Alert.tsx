import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { setAlert } from "@/redux/slices/assetsSlice";
import React, { useEffect } from "react";
import { AlertContainer, CloseButton } from "../styledElements";

const Alert: React.FC = () => {
    const { message, color, show } = useAppSelector(store => store.assets),
        dispatch = useAppDispatch(),
        handleDismiss=()=>{
            dispatch(setAlert({ color, message: '', show: false }));

        }
    console.log(message, color, show);

    useEffect(() => {
        setTimeout(() => {
            handleDismiss()
        }, 6000);

    }, [show]);

    return (
        <AlertContainer show={show} color={color}>
            {color === 'error' ? 'X' : '✓'} {message} <CloseButton onClick={handleDismiss}>X</CloseButton>
        </AlertContainer>
    );
};

export default Alert;
