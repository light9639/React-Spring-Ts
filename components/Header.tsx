import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./Style.module.scss";

export default function Header(): JSX.Element {
    return (
        <div className={styles.Header}>
            <Link to="/"><span>Auto</span></Link>
            <Link to="/Card"><span>Card</span></Link>
            <Link to="/Slider"><span>Slider</span></Link>
            <Link to="/SvgFilter"><span>SvgFilter</span></Link>
            <Link to="/Flip"><span>Flip</span></Link>
            <Link to="/KeyFrames"><span>KeyFrames</span></Link>
            <Link to="/Scroll"><span>Scroll</span></Link>
            <Link to="/Parallax"><span>Parallax</span></Link>
        </div>
    )
}