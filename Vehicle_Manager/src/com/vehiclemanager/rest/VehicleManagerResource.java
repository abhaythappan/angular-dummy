package com.vehiclemanager.rest;

import javax.annotation.Resource;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Resource
@Path("/vehicle-manager")
public class VehicleManagerResource {

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/vehicles")
	public Response getAllVehicles() {
		System.out.println("In rest API");
		return Response.ok("", MediaType.APPLICATION_JSON).build();
	}
	
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/vehicles")
	public Response addVehicle(String postData) {
		System.out.println("In rest API" + postData);
		return Response.ok("", MediaType.APPLICATION_JSON).build();
	}
	
	@PUT
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/vehicles/{vehicleId}")
	public Response updateVehicle(@PathParam("vehicleId") String vehicleId , String postData) {
		System.out.println("In rest API" + postData + "vehicleId"+ vehicleId);
		return Response.ok("", MediaType.APPLICATION_JSON).build();
	}
}
