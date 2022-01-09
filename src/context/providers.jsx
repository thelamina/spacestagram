import React from 'react';
import { PhotoProvider } from './photo/provider';

export const Providers = ({ children }) => {
	return <PhotoProvider>{children}</PhotoProvider>;
};
