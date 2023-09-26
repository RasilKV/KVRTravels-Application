package org.jsp.reservationapi.dto;

import lombok.Data;

@Data
public class ResponseStructure<T> {
	private T data;
	private String message;
	private int statusCode;

}
