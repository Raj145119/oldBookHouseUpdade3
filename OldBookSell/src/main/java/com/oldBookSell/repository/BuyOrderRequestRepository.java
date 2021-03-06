package com.oldBookSell.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import com.oldBookSell.model.BuyOrderRequest;

@Transactional
public interface BuyOrderRequestRepository extends CrudRepository<BuyOrderRequest, Integer>{

	@Query(value="select count(buy_order_request_id) from buy_order_request where user_id=?1 and check_status=?2",nativeQuery = true)
	int  countOrderRequest(String name,String status);

	@Query(value="select * from buy_order_request where user_id=?1 and check_status=?2",nativeQuery = true)
	List<BuyOrderRequest> getOrderRequest(String name, String string);
//	@Query(value="update sell_order_request set check_status=?1,feedback_by_delivery_person=?2 where sell_order_request_id=?3",nativeQuery = true)
	
	@Modifying
	@Query(value="update buy_order_request set check_status=?1, address_id=?2, dilevery_person_id=?3 where user_id=?4 and check_status=?5",nativeQuery = true)
	void addDeliverAddress(String string, int addressId, int deliveryPersonId, String name, String string2);

	@Query(value="select buy_order_request_id,book_name,authors,amount,check_status,small_thumbnail,address, address2,district, postal_code,state,first_name,last_name,mobile_number from buy_order_request b, address a,user_details u where b.address_id = a.id and a.user_id = u.user_id and b.dilevery_person_id=?1",nativeQuery = true)
	Iterable<Object> deliveryPersonRequest(int deliveryId);
	
	@Modifying
	@Query(value="update buy_order_request set check_status=?2 where buy_order_request_id=?1",nativeQuery = true)
	void updateBuyBookStatus(int buyOrderRequestId, String check_status);
}
