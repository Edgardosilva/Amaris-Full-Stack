import React from 'react';
import "../components/loader.css";

const Loader = () => {
    return (
        <div class="loading-wave">
            <div class="loading-bar"></div>
            <div class="loading-bar"></div>
            <div class="loading-bar"></div>
            <div class="loading-bar"></div>
        </div>
    );
};

export default Loader;