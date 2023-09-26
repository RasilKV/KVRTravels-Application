package org.jsp.reservationapi.exception;

public class InvalidCredentialsException extends RuntimeException {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Override
	public String getMessage() {
		return "Invalid phone number or email or password" ;
	}

}
