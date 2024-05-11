// useNavigation.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function useRoutingNavigation() {
    const navigate = useNavigate();

    const handleRouting = (routeTo) => () => {
        navigate(routeTo);
    };

    return { handleRouting };
}

