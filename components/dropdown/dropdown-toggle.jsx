import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { PopoverReference } from '../popover';
import { useDropdownContext, useKeyboardActivate } from './dropdown-utils';

/** Accepts all props a Button component would as well. */
export function DropdownToggle({ children, onToggleMenu }) {
	const { isOpen, menuId, setFocusedMenuItem, dropdownToggleRef } = useDropdownContext();
	const handleKeyPress = useKeyboardActivate(onToggleMenu, setFocusedMenuItem);

	const toggleAriaProps = {
		role: 'button',
		'aria-haspopup': true,
		'aria-controls': `dropdown:${menuId}`,
		'aria-label': `dropdown:${menuId}`,
		// do not specify aria-expanded unless it is expanded
		...(isOpen ? { 'aria-expanded': true } : {}),
	};

	const childProps = useMemo(
		() => ({
			ref: dropdownToggleRef,
			onKeyDown: handleKeyPress,
			onClick: onToggleMenu,
			ariaProps: toggleAriaProps,
		}),
		[dropdownToggleRef, handleKeyPress, onToggleMenu, toggleAriaProps],
	);

	return <PopoverReference>{children && children(childProps)}</PopoverReference>;
}

DropdownToggle.propTypes = {
	/** The content of the toggle button, usually a span */
	children: PropTypes.func.isRequired,
	/** Toggle the isOpen prop when called */
	onToggleMenu: PropTypes.func.isRequired,
};
